import React, { useState } from 'react'
import AddSprintModal from './AddSprintModal'

const navItems = [
  { id: 'dashboard',    icon: 'dashboard',    label: 'Dashboard' },
  { id: 'projects',     icon: 'account_tree', label: 'Projects' },
  { id: 'sprint-board', icon: 'view_kanban',  label: 'Sprint Board' },
  { id: 'tasks',        icon: 'task_alt',     label: 'Tasks' },
  { id: 'team',         icon: 'group',        label: 'Team' },
  { id: 'analytics',   icon: 'analytics',    label: 'Analytics' },
  { id: 'settings',    icon: 'settings',     label: 'Settings' },
]

export default function Sidebar({ activePage = 'dashboard', onPageChange }) {
  const [showAddSprintModal, setShowAddSprintModal] = useState(false)

  return (
    <>
      <aside className="fixed left-0 top-0 h-full w-sidebar-width bg-white border-r border-border flex flex-col py-6 z-50 shadow-sm">
        {/* Logo */}
        <div className="px-6 mb-8 flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
            <span
              className="material-symbols-outlined text-white text-xl"
              style={{ fontSize: '20px', fontVariationSettings: "'FILL' 1" }}
            >
              rocket_launch
            </span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-text-primary leading-tight">
              SprintFlow
            </h1>
            <p className="text-xs text-text-tertiary tracking-wider font-semibold">
              Enterprise Agile
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 overflow-y-auto px-3">
          {navItems.map((item) => {
            const isActive = item.id === activePage
            return (
              <button
                key={item.id}
                onClick={() => onPageChange && onPageChange(item.id)}
                className={`
                  w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-300 text-left font-medium text-sm
                  ${isActive
                    ? 'bg-primary text-white shadow-md'
                    : 'text-text-secondary hover:bg-surface-hover hover:text-text-primary'
                  }
                `}
              >
                <span className="material-symbols-outlined text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>

        {/* New Sprint Button */}
        <div className="px-3 pb-6 border-t border-border pt-6">
          <button
            onClick={() => setShowAddSprintModal(true)}
            className="btn-primary-lg w-full flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <span className="material-symbols-outlined">add</span>
            New Sprint
          </button>
        </div>
      </aside>

      {/* Add Sprint Modal */}
      <AddSprintModal
        isOpen={showAddSprintModal}
        onClose={() => setShowAddSprintModal(false)}
      />
    </>
  )
}
