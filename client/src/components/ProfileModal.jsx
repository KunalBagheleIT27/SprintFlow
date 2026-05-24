import React, { useState } from 'react'
import Modal from './Modal'
import { useAuthStore } from '../store/authStore'
import { useNavigate } from 'react-router-dom'

export default function ProfileModal({ isOpen, onClose }) {
  const user = useAuthStore((state) => state.user)
  const updateProfile = useAuthStore((state) => state.updateProfile)
  const logout = useAuthStore((state) => state.logout)
  const navigate = useNavigate()

  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState(
    user || {
      fullName: 'Alex Sterling',
      email: 'alex@sprintflow.com',
      role: 'Lead Engineer',
      bio: 'Building the future of project management',
      phone: '+1 (555) 123-4567',
    }
  )

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    updateProfile(formData)
    setIsEditing(false)
  }

  const handleLogout = () => {
    logout()
    onClose()
    navigate('/login')
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Profile" size="md">
      <div className="space-y-6">
        {/* Profile Header */}
        <div className="flex items-center gap-4 pb-6 border-b border-border">
          <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
            <span className="text-3xl font-bold text-primary">
              {formData.fullName
                ?.split(' ')
                .map((n) => n[0])
                .join('')}
            </span>
          </div>
          <div>
            <h3 className="font-bold text-text-primary">{formData.fullName}</h3>
            <p className="text-sm text-text-tertiary">{formData.role}</p>
          </div>
        </div>

        {!isEditing ? (
          // View Mode
          <div className="space-y-4">
            <div>
              <p className="text-xs font-semibold text-text-tertiary uppercase">Email</p>
              <p className="text-text-primary font-medium">{formData.email}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-text-tertiary uppercase">Phone</p>
              <p className="text-text-primary font-medium">{formData.phone}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-text-tertiary uppercase">Bio</p>
              <p className="text-text-primary font-medium">{formData.bio}</p>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                onClick={() => setIsEditing(true)}
                className="btn-secondary flex-1"
              >
                <span className="material-symbols-outlined inline mr-1.5">edit</span>
                Edit Profile
              </button>
              <button
                onClick={handleLogout}
                className="btn-ghost flex-1 text-error hover:bg-error/10"
              >
                <span className="material-symbols-outlined inline mr-1.5">logout</span>
                Logout
              </button>
            </div>
          </div>
        ) : (
          // Edit Mode
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
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
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-primary mb-2">Bio</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows="3"
                className="textarea-field"
              ></textarea>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                onClick={handleSave}
                className="btn-primary flex-1"
              >
                <span className="material-symbols-outlined inline mr-1.5">check</span>
                Save Changes
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="btn-secondary flex-1"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </Modal>
  )
}
