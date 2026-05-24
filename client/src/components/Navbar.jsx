import React, { useState } from 'react'
import ProfileModal from './ProfileModal'
import { useAuthStore } from '../store/authStore'

export default function Navbar() {
  const [showProfileModal, setShowProfileModal] = useState(false)
  const user = useAuthStore((state) => state.user)

  const displayName = user?.fullName || 'Alex Sterling'
  const displayRole = user?.role || 'Lead Engineer'

  return (
    <>
      <header className="sticky top-0 w-full h-16 bg-white border-b border-border flex justify-between items-center px-6 z-40 shadow-sm">
        {/* Search */}
        <div className="flex items-center gap-4 flex-1">
          <div className="relative w-full max-w-md group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary">
              search
            </span>
            <input
              type="text"
              placeholder="Search tasks, IDs, or people..."
              className="w-full pl-12 pr-4 py-2.5 bg-surface border border-border rounded-xl text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
            />
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-3 ml-6">
          <button className="btn-primary px-5 py-2 text-sm font-semibold shadow-md">
            <span className="material-symbols-outlined inline mr-1.5">add</span>
            Create
          </button>

          <div className="flex items-center gap-1">
            {/* Notification bell with red dot */}
            <button className="w-10 h-10 flex items-center justify-center text-text-tertiary hover:text-primary hover:bg-surface-hover rounded-lg transition-all duration-300 relative">
              <span className="material-symbols-outlined text-xl">notifications</span>
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-error rounded-full animate-pulse" />
            </button>

            <button className="w-10 h-10 flex items-center justify-center text-text-tertiary hover:text-primary hover:bg-surface-hover rounded-lg transition-all duration-300">
              <span className="material-symbols-outlined text-xl">apps</span>
            </button>
          </div>

          <div className="h-6 w-px bg-border mx-2" />

          {/* User Profile - Click to open profile modal */}
          <button
            onClick={() => setShowProfileModal(true)}
            className="flex items-center gap-3 pl-2 pr-1 py-1.5 rounded-lg hover:bg-surface-hover transition-all duration-300 cursor-pointer"
          >
            <div className="text-right hidden lg:block">
              <p className="text-sm font-semibold text-text-primary">{displayName}</p>
              <p className="text-xs text-text-tertiary">{displayRole}</p>
            </div>
            <img
              alt="User Profile"
              className="w-9 h-9 rounded-lg border border-border object-cover shadow-sm"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_KBVIrNrHXzMjgwRI34ZdB0ooF5vrq4mzSYrYKnc8bwoZbMZB4KnDrSd6a8T4ngQ_w3RdAudhw3A7DVT3NASbySMX--dnOarigDsorvklToSMzQ97rV5JVYWLPrbD0RPvWI0Gwvpxs0ioQPXk7U5vPBqQnJ97gd3h4-yr2_3t4k_EeIWjpdpazXX6Yz4yloo3xdGOxumH6gvYoE-tIrh6Yg69ahIdFZqBhwIZRdZiZCJFoQbCeQgSoWqx27QxHCm6kJCEbZ3YQl8"
            />
          </button>
        </div>
      </header>

      {/* Profile Modal */}
      <ProfileModal
        isOpen={showProfileModal}
        onClose={() => setShowProfileModal(false)}
      />
    </>
  )
}
