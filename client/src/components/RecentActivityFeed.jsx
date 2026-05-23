import React from 'react'

export default function RecentActivityFeed() {
  const activities = [
    {
      id: 1,
      type: 'done',
      user: 'Alex Rivera',
      action: 'moved',
      taskId: '#402: Auth Redesign',
      detail: 'to Done',
      detailColor: 'text-tertiary',
      time: '2 minutes ago',
      icon: 'done_all',
      iconBg: 'bg-primary/10',
      iconColor: 'text-primary',
    },
    {
      id: 2,
      type: 'comment',
      user: 'Lina Kim',
      action: 'commented on',
      taskId: '#389: API Cache',
      comment: '"Looks good, but we should verify the TTL values."',
      time: '1 hour ago',
      icon: 'comment',
      iconBg: 'bg-secondary-container',
      iconColor: 'text-secondary',
    },
    {
      id: 3,
      type: 'create',
      user: 'Sarah J.',
      action: 'created a new task',
      taskId: '#411: Fix Header Padding',
      time: '3 hours ago',
      icon: 'add',
      iconBg: 'bg-tertiary-container/20',
      iconColor: 'text-tertiary',
    },
  ]

  return (
    <div className="lg:col-span-2 bg-white rounded-xl border border-outline-variant p-6 flex flex-col">
      <h4 className="font-title-sm text-title-sm text-on-surface mb-6">Recent Activity</h4>

      <div className="space-y-6 flex-1">
        {activities.map((activity, idx) => (
          <div key={activity.id} className="flex gap-4 relative">
            {/* Timeline line */}
            {idx < activities.length - 1 && (
              <div className="absolute left-2.5 top-8 bottom-0 w-0.5 bg-outline-variant"></div>
            )}

            {/* Icon */}
            <div
              className={`z-10 ${activity.iconBg} p-1 rounded-full h-5 w-5 flex items-center justify-center border-2 border-white shadow-sm flex-shrink-0`}
            >
              <span className={`material-symbols-outlined ${activity.iconColor}`} style={{ fontSize: '10px' }}>
                {activity.icon}
              </span>
            </div>

            {/* Content */}
            <div>
              <p className="font-label-md text-label-md text-on-surface">
                <span className="font-bold">{activity.user}</span>
                {' ' + activity.action + ' '}
                <span className="bg-surface-container px-1 rounded text-primary font-code text-[11px]">{activity.taskId}</span>
                {activity.detail && <span className={activity.detailColor ? activity.detailColor : ''}>{' ' + activity.detail}</span>}
              </p>

              {/* Comment if exists */}
              {activity.comment && (
                <p className="text-[11px] italic text-on-secondary-container mt-1 bg-surface-container-low p-2 rounded-md">
                  {activity.comment}
                </p>
              )}

              {/* Time */}
              <p className="text-[10px] text-on-surface-variant mt-1 uppercase">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
