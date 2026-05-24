import React, { useState } from 'react'
import Modal from './Modal'
import { useAppStore } from '../store/appStore'

export default function AddSprintModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    startDate: '',
    endDate: '',
  })
  const addSprint = useAppStore((state) => state.addSprint)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.startDate && formData.endDate) {
      addSprint({
        name: formData.name,
        status: 'planning',
        startDate: formData.startDate,
        endDate: formData.endDate,
        tasks: 0,
        completed: 0,
      })
      setFormData({ name: '', startDate: '', endDate: '' })
      onClose()
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create New Sprint" size="md">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-text-primary mb-2">Sprint Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g., Sprint 1 - Q2 Planning"
            required
            className="input-field"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-2">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-2">End Date</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <button type="submit" className="btn-primary flex-1">
            <span className="material-symbols-outlined inline mr-1.5">add</span>
            Create Sprint
          </button>
          <button
            type="button"
            onClick={onClose}
            className="btn-secondary flex-1"
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  )
}
