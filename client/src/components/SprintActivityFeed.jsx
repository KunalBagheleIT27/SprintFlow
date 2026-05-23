import React from 'react'

export default function SprintActivityFeed() {
  const activities = [
    {
      id: 'SF-1024',
      title: 'Auth Refactoring Phase 1',
      assignee: 'John Doe',
      initials: 'JD',
      avatarBg: 'bg-surface-container',
      status: 'Done',
      statusColor: 'bg-tertiary-container/10 text-tertiary',
      effort: '5 pts',
      efficiency: '+15%',
      efficiencyIcon: 'bolt',
      efficiencyColor: 'text-tertiary',
    },
    {
      id: 'SF-1182',
      title: 'Data Pipeline Optimization',
      assignee: 'Sarah Kim',
      initials: 'SK',
      avatarBg: 'bg-primary-container text-on-primary',
      status: 'Active',
      statusColor: 'bg-primary-container/10 text-primary',
      effort: '8 pts',
      efficiency: 'Avg',
      efficiencyIcon: 'horizontal_rule',
      efficiencyColor: 'text-on-surface-variant',
    },
    {
      id: 'SF-1205',
      title: 'UI Theme Migration',
      assignee: 'Mike Lee',
      initials: 'ML',
      avatarBg: 'bg-surface-container',
      status: 'Block',
      statusColor: 'bg-error-container/20 text-error',
      effort: '3 pts',
      efficiency: '-40%',
      efficiencyIcon: 'trending_down',
      efficiencyColor: 'text-error',
    },
  ]

  return (
    <div className="lg:col-span-2 bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col">
      {/* Header */}
      <div className="px-gutter py-4 bg-surface-container-low flex justify-between items-center">
        <h3 className="font-title-sm text-title-sm text-on-background">Sprint Activity Feed</h3>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-tertiary"></span>
          <span className="font-label-xs text-label-xs text-tertiary uppercase font-bold">In Progress: Sprint 24</span>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          {/* Table Head */}
          <thead>
            <tr className="bg-surface-container-lowest">
              <th className="px-gutter py-3 font-label-xs text-label-xs text-outline uppercase font-medium">
                Ticket
              </th>
              <th className="px-gutter py-3 font-label-xs text-label-xs text-outline uppercase font-medium">
                Assignee
              </th>
              <th className="px-gutter py-3 font-label-xs text-label-xs text-outline uppercase font-medium">
                Status
              </th>
              <th className="px-gutter py-3 font-label-xs text-label-xs text-outline uppercase font-medium">
                Effort
              </th>
              <th className="px-gutter py-3 font-label-xs text-label-xs text-outline uppercase font-medium">
                Efficiency
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-outline-variant">
            {activities.map((activity) => (
              <tr key={activity.id} className="hover:bg-surface-bright transition-colors cursor-pointer">
                <td className="px-gutter py-4">
                  <div className="flex flex-col">
                    <span className="font-label-md font-bold text-on-background">{activity.id}</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant truncate max-w-[200px]">
                      {activity.title}
                    </span>
                  </div>
                </td>
                <td className="px-gutter py-4">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-6 h-6 rounded-full ${activity.avatarBg} flex items-center justify-center font-label-xs text-[10px] font-bold`}
                    >
                      {activity.initials}
                    </div>
                    <span className="font-label-md text-label-md text-on-surface">{activity.assignee}</span>
                  </div>
                </td>
                <td className="px-gutter py-4">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${activity.statusColor} uppercase`}>
                    {activity.status}
                  </span>
                </td>
                <td className="px-gutter py-4 font-code text-code text-on-surface-variant">{activity.effort}</td>
                <td className="px-gutter py-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`material-symbols-outlined text-[18px] ${activity.efficiencyColor}`}
                      data-icon={activity.efficiencyIcon}
                      style={{ fontVariationSettings: activity.efficiencyIcon === 'bolt' ? "'FILL' 1" : "'FILL' 0" }}
                    >
                      {activity.efficiencyIcon}
                    </span>
                    <span className={`font-label-md ${activity.efficiencyColor}`}>{activity.efficiency}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
