import React from 'react'

export default function UpcomingDeadlines() {
  const deadlines = [
    {
      date: '12',
      month: 'Oct',
      title: 'API V2 Integration',
      project: 'Infrastructure Sprint',
      priority: 'High',
      priorityColor: 'error',
      priorityIcon: 'priority_high',
      highlighted: true,
    },
    {
      date: '14',
      month: 'Oct',
      title: 'UI Component Audit',
      project: 'Design System',
      priority: 'Normal',
      priorityColor: 'secondary',
      priorityIcon: 'schedule',
      highlighted: false,
    },
    {
      date: '17',
      month: 'Oct',
      title: 'Client Feedback Loop',
      project: 'Product Growth',
      priority: 'Optional',
      priorityColor: 'tertiary',
      priorityIcon: 'low_priority',
      highlighted: false,
    },
  ]

  const getPriorityClass = (color) => {
    switch (color) {
      case 'error':
        return 'text-error'
      case 'secondary':
        return 'text-secondary'
      case 'tertiary':
        return 'text-tertiary'
      default:
        return 'text-secondary'
    }
  }

  return (
    <div className="bg-white rounded-xl border border-outline-variant p-6">
      <div className="flex items-center justify-between mb-6">
        <h4 className="font-title-sm text-title-sm text-on-surface">Upcoming Deadlines</h4>
        <button className="text-primary font-label-md text-label-md hover:underline transition-colors">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {deadlines.map((deadline, idx) => (
          <div
            key={idx}
            className={`flex gap-4 p-3 rounded-lg transition-all ${
              deadline.highlighted
                ? 'bg-surface-container-low border border-outline-variant'
                : 'bg-white border border-outline-variant hover:border-primary'
            }`}
          >
            {/* Date Box */}
            <div
              className={`flex flex-col items-center justify-center rounded p-2 min-w-[48px] ${
                deadline.highlighted
                  ? 'bg-white border border-outline-variant'
                  : 'bg-surface-container border border-outline-variant'
              }`}
            >
              <span className="text-[10px] uppercase font-bold text-on-surface-variant">{deadline.month}</span>
              <span className="text-xl font-bold text-on-surface leading-none">{deadline.date}</span>
            </div>

            {/* Content */}
            <div className="flex-1">
              <p className="font-label-md text-label-md font-bold text-on-surface">{deadline.title}</p>
              <p className="text-[11px] text-on-surface-variant">{deadline.project}</p>

              {/* Priority Badge */}
              <div className={`flex items-center gap-1 mt-1 ${getPriorityClass(deadline.priorityColor)} text-[10px] font-bold`}>
                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
                  {deadline.priorityIcon}
                </span>
                {deadline.priority}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
