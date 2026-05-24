import React, { useState } from 'react'
import Modal from './Modal'
import { useAppStore } from '../store/appStore'

export default function AddTeamMemberModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Developer',
  })
  const addTeamMember = useAppStore((state) => state.addTeamMember)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.role) {
      const initials = formData.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()

      addTeamMember({
        name: formData.name,
        email: formData.email,
        role: formData.role,
        status: 'offline',
        avatar: null,
        initials,
      })
      setFormData({ name: '', email: '', role: 'Developer' })
      onClose()
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Team Member" size="md">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-text-primary mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="input-field"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-text-primary mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
            required
            className="input-field"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-text-primary mb-2">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="input-field"
          >
            <option>Developer</option>
            <option>Designer</option>
            <option>Project Manager</option>
            <option>Product Owner</option>
            <option>QA Engineer</option>
          </select>
        </div>

        <div className="flex gap-3 pt-4">
          <button type="submit" className="btn-primary flex-1">
            <span className="material-symbols-outlined inline mr-1.5">person_add</span>
            Add Member
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
