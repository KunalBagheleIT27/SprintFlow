import React from 'react'

export default function TeamStatus() {
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Jenkins',
      status: 'Working on #402',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBtHoc8iAb7WzseDi3DCbI14OW1hi_3z_qgxXSDhu3twDiI8-m2jfBTWH-n5naMkHroty_POw-lC2QDuedMCpfTXIDsOSdXriGFJJyh1_rr6OrrlJUM3hLuYrHAIy7sDlMfnC1eJGFjWIotlW6F7NFJIfKE7V9T-jBbp5_fGSnZ7NO10PY6-NHrS0ITDs03ocEJMozjSwfH6niKm94F6hFmjaBinG9muHFy4XYaMymHqhETUuCi4NHpSnH8lrvaB5hJUbNJ9x0z9co',
      online: true,
      opacity: 'opacity-100',
    },
    {
      id: 2,
      name: 'Marco V.',
      status: 'Away - 2h',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAczE9uqi3heiL8altSOfD4_lzLXjr9RATpu4ZbtvgDO0hcGhcUqLwguO7FWsXEhsuGGmWDoYIGMrACR5OyXAryQEmjzfeohx5EofOW_Y-OzBjC7H7r2fDuRlwKTv4LMFvUmkqbutiBZ8jyaVtQofZ6XhUSENiAx1fxUVjrOgHdXcqG1XOYXU9y0R_FOqpwyoQcvH_YzO6wM-lcZCdK9Ch-hLdQszKD46S8eCIUDlhKxUA60QyGW-57KMb4SWIryFuVOrosja2OVLI',
      online: false,
      opacity: 'opacity-60',
    },
    {
      id: 3,
      name: 'Lina Kim',
      status: 'In a Meeting',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBjKP1fLTFvKfAVo_XrX3y1JcGeDLiJaZL0Yjjy3VhgrFJJQW7Czxr76aAd1p1FAoAI4wwfL0De8mDTBQK_VRCXBjIUTGCH0G733uGZ9LeNRZrIdLip2GYboBY3YzCC3vL59qCDGJ6wi8Q9InpTcrndpcSyGcR0FO376hWGu0m4F4ySSX_uSKf3BzT1miS1sxrf-7SAXo4yi1EBbk3OS2I-pxNnrINg93wnVw0jBs0gXgTiE8WmvxLk-SLoSvuTZsggPZJ-J2zoZ7M',
      online: true,
      opacity: 'opacity-100',
    },
  ]

  const getStatusColor = (online) => {
    return online ? 'bg-tertiary-fixed-dim' : 'bg-secondary'
  }

  return (
    <div className="lg:col-span-1 bg-white rounded-xl border border-outline-variant p-6">
      <h4 className="font-title-sm text-title-sm text-on-surface mb-6">Team Status</h4>

      <div className="space-y-5">
        {teamMembers.map((member) => (
          <div key={member.id} className={member.opacity}>
            <div className="flex items-center gap-3">
              {/* Avatar with Online Indicator */}
              <div className="relative">
                <img
                  alt={member.name}
                  className="w-10 h-10 rounded-full object-cover"
                  src={member.avatar}
                />
                <span
                  className={`absolute bottom-0 right-0 w-3 h-3 ${getStatusColor(member.online)} border-2 border-white rounded-full`}
                ></span>
              </div>

              {/* Member Info */}
              <div className="flex-1 overflow-hidden">
                <p className="font-label-md text-label-md font-bold text-on-surface truncate">{member.name}</p>
                <p className="text-[11px] text-on-surface-variant truncate">{member.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Manage Team Button */}
      <button className="w-full mt-6 py-2 border border-outline-variant rounded font-label-md text-label-md hover:bg-surface-container transition-colors text-on-surface">
        Manage Team
      </button>
    </div>
  )
}
