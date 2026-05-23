import React from 'react'

export default function Sidebar({ activePage = 'dashboard' }) {
  const navItems = [
    { id: 'dashboard', icon: 'dashboard', label: 'Dashboard' },
    { id: 'projects', icon: 'account_tree', label: 'Projects' },
    { id: 'sprint-board', icon: 'view_kanban', label: 'Sprint Board' },
    { id: 'tasks', icon: 'task_alt', label: 'Tasks' },
    { id: 'team', icon: 'group', label: 'Team' },
    { id: 'analytics', icon: 'analytics', label: 'Analytics' },
    { id: 'settings', icon: 'settings', label: 'Settings', spacing: true },
  ]

  return (
    <aside className="fixed left-0 top-0 h-full w-sidebar-width bg-secondary-fixed dark:bg-inverse-surface flex flex-col py-stack-lg z-50">
      {/* Logo */}
      <div className="px-6 mb-8">
        <h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim">
          SprintFlow AI
        </h1>
        <p className="text-label-md font-label-md text-on-secondary-fixed-variant opacity-70">
          Enterprise Agile
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-grow">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`${item.id === activePage ? 'bg-surface-container-highest dark:bg-secondary border-l-2 border-primary' : 'hover:bg-surface-variant dark:hover:bg-on-secondary-container'} transition-colors ${item.spacing ? 'mt-8' : ''}`}
            >
              <a
                href="#"
                className={`flex items-center gap-stack-md px-4 py-2 ${
                  item.id === activePage
                    ? 'text-primary dark:text-on-primary-fixed-variant font-bold'
                    : 'text-on-secondary-container dark:text-on-secondary-fixed-variant'
                }`}
              >
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontVariationSettings: item.id === activePage ? "'FILL' 1" : "'FILL' 0",
                  }}
                >
                  {item.icon}
                </span>
                <span className="font-label-md text-label-md">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* New Sprint Button */}
      <div className="px-4 mt-auto">
        <button className="w-full py-2 bg-primary text-on-primary rounded-lg font-label-md text-label-md shadow-sm hover:opacity-90 active:scale-[0.98] transition-all">
          New Sprint
        </button>
      </div>
    </aside>
  )
}
