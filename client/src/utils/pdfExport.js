import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export const exportToPDF = async (elementId, fileName = 'export.pdf') => {
  try {
    const element = document.getElementById(elementId)
    if (!element) {
      console.error('Element not found')
      return
    }

    // Create canvas from HTML element
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
    })

    // Calculate dimensions
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    })

    const imgWidth = 210 - 20 // A4 width with margins
    const pageHeight = 295 - 20 // A4 height with margins
    let imgHeight = (canvas.height * imgWidth) / canvas.width
    let heightLeft = imgHeight

    let position = 0

    // Add header
    pdf.setFontSize(16)
    pdf.text(fileName.replace('.pdf', ''), 10, 10)
    pdf.setFontSize(10)
    pdf.text(`Generated on ${new Date().toLocaleDateString()}`, 10, 20)

    position = 30

    // Add content
    while (heightLeft >= 0) {
      const heightToPrint = Math.min(heightLeft, pageHeight)
      pdf.addImage(
        imgData,
        'PNG',
        10,
        position,
        imgWidth,
        (heightToPrint * imgWidth) / imgWidth
      )
      heightLeft -= pageHeight
      position = 0
      if (heightLeft > 0) {
        pdf.addPage()
      }
    }

    // Download PDF
    pdf.save(fileName)
  } catch (error) {
    console.error('Error generating PDF:', error)
  }
}

export const exportTasksToPDF = (tasks, fileName = 'tasks.pdf') => {
  const pdf = new jsPDF()
  const pageHeight = pdf.internal.pageSize.getHeight()
  const pageWidth = pdf.internal.pageSize.getWidth()
  let yPosition = 20

  // Header
  pdf.setFontSize(16)
  pdf.text('Task Report', pageWidth / 2, yPosition, { align: 'center' })
  yPosition += 15

  // Date
  pdf.setFontSize(10)
  pdf.text(`Generated: ${new Date().toLocaleString()}`, 15, yPosition)
  yPosition += 15

  // Table headers
  pdf.setFontSize(11)
  pdf.setTextColor(37, 99, 235) // primary blue
  const headers = ['Task', 'Status', 'Priority', 'Assignee', 'Due Date']
  const columnWidths = [60, 30, 25, 40, 35]
  let xPosition = 15

  headers.forEach((header, index) => {
    pdf.text(header, xPosition, yPosition)
    xPosition += columnWidths[index]
  })

  yPosition += 10
  pdf.setDrawColor(226, 232, 240) // border color
  pdf.line(15, yPosition, pageWidth - 15, yPosition)
  yPosition += 8

  // Table rows
  pdf.setFontSize(10)
  pdf.setTextColor(15, 23, 42) // text-primary

  tasks.forEach((task) => {
    if (yPosition > pageHeight - 20) {
      pdf.addPage()
      yPosition = 20
    }

    xPosition = 15
    const rowData = [
      task.title,
      task.status,
      task.priority,
      task.assignee,
      task.dueDate,
    ]

    rowData.forEach((data, index) => {
      pdf.text(String(data || '-'), xPosition, yPosition, {
        maxWidth: columnWidths[index] - 2,
      })
      xPosition += columnWidths[index]
    })

    yPosition += 8
  })

  // Download
  pdf.save(fileName)
}
