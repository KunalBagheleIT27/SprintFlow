import React, { useState, useEffect } from 'react'
import Modal from './Modal'

export default function CreateTaskModal({ isOpen, onClose, onSave, initial }) {
  const [form, setForm] = useState({
    id: '',
    title: '',
    priority: 'Medium',
    tags: [],
    comments: 0,
    attachments: 0,
    dueDate: '',
    assigneeAvatar: '',
  })

  useEffect(() => {
    if (initial) setForm(initial)
    else setForm({ id: '', title: '', priority: 'Medium', tags: [], comments: 0, attachments: 0, dueDate: '', assigneeAvatar: '' })
  }, [initial, isOpen])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((p) => ({ ...p, [name]: value }))
  }

  const handleSave = (e) => {
    e.preventDefault()
    if (!form.title) return
    const payload = { ...form }
    if (!payload.id) payload.id = `SF-${Math.floor(Math.random() * 900 + 100)}`
    if (typeof payload.comments === 'string') payload.comments = parseInt(payload.comments) || 0
    if (typeof payload.attachments === 'string') payload.attachments = parseInt(payload.attachments) || 0
    onSave && onSave(payload)
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={initial ? 'Edit Task' : 'Create Task'} size="md">
      <form onSubmit={handleSave} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-on-surface mb-2">Title</label>
          <input name="title" value={form.title} onChange={handleChange} className="input-field" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-semibold text-on-surface mb-2">Priority</label>
            <select name="priority" value={form.priority} onChange={handleChange} className="input-field">
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-on-surface mb-2">Due Date</label>
            <input type="date" name="dueDate" value={form.dueDate} onChange={handleChange} className="input-field" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-semibold text-on-surface mb-2">Comments</label>
            <input type="number" name="comments" value={form.comments} onChange={handleChange} className="input-field" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-on-surface mb-2">Attachments</label>
            <input type="number" name="attachments" value={form.attachments} onChange={handleChange} className="input-field" />
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-2">
          <button type="button" onClick={onClose} className="btn-secondary">Cancel</button>
          <button type="submit" className="btn-primary">{initial ? 'Save' : 'Create'}</button>
        </div>
      </form>
    </Modal>
  )
}
