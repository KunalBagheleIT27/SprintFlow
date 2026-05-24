import React, { useState } from 'react'
import Modal from './Modal'
import { useAppStore } from '../store/appStore'

export default function AddProjectModal({ isOpen, onClose, onProjectAdded }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    status: 'PLANNING',
    dueDate: '',
    teamSize: '',
    budget: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.name && formData.description && formData.dueDate) {
      setIsLoading(true)
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 500))

        const newProject = {
          id: Math.floor(Math.random() * 10000),
          name: formData.name,
          description: formData.description,
          status: formData.status,
          progress: 0,
          dueDate: formData.dueDate,
          teamSize: parseInt(formData.teamSize) || 1,
          budget: formData.budget,
          icon: 'layers',
          updatedTime: 'now',
          activeSprints: 0,
          riskLevel: 'Low',
          completionPercent: 0,
          contributors: parseInt(formData.teamSize) || 1,
          blockers: 0,
        }

        if (onProjectAdded) {
          onProjectAdded(newProject)
        }

        setFormData({
          name: '',
          description: '',
          status: 'PLANNING',
          dueDate: '',
          teamSize: '',
          budget: '',
        })
        onClose()
      } catch (error) {
        console.error('Error creating project:', error)
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create New Project" size="lg">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-on-surface mb-2">Project Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g., AI Integration Platform"
            required
            className="w-full px-4 py-2 border border-outline-variant rounded-lg bg-surface text-on-surface placeholder-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-on-surface mb-2">Description *</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your project goals and objectives"
            required
            rows="4"
            className="w-full px-4 py-2 border border-outline-variant rounded-lg bg-surface text-on-surface placeholder-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-on-surface mb-2">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-outline-variant rounded-lg bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            >
              <option value="PLANNING">Planning</option>
              <option value="IN PROGRESS">In Progress</option>
              <option value="COMPLETED">Completed</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-on-surface mb-2">Due Date *</label>
            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-outline-variant rounded-lg bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-on-surface mb-2">Team Size</label>
            <input
              type="number"
              name="teamSize"
              value={formData.teamSize}
              onChange={handleChange}
              placeholder="Number of team members"
              min="1"
              className="w-full px-4 py-2 border border-outline-variant rounded-lg bg-surface text-on-surface placeholder-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-on-surface mb-2">Budget</label>
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="e.g., $50,000"
              className="w-full px-4 py-2 border border-outline-variant rounded-lg bg-surface text-on-surface placeholder-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            disabled={isLoading}
            className="flex-1 bg-primary text-on-primary px-4 py-2 rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">{isLoading ? 'hourglass_empty' : 'add'}</span>
            {isLoading ? 'Creating...' : 'Create Project'}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 bg-surface-container-highest text-on-surface px-4 py-2 rounded-lg font-semibold hover:bg-surface-container transition-all border border-outline-variant"
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  )
}
