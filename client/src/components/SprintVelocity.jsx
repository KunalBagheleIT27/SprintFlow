import React from 'react'

export default function SprintVelocity() {
  const velocityData = [
    { sprint: 'S20', value: 40, isActive: false },
    { sprint: 'S21', value: 65, isActive: false },
    { sprint: 'S22', value: 55, isActive: false },
    { sprint: 'S24', value: 80, isActive: true },
    { sprint: 'S25', value: 45, isActive: false },
  ]

  const maxValue = 100

  return (
    <div className="lg:col-span-1 bg-white rounded-xl border border-outline-variant p-6">
      <h4 className="font-title-sm text-title-sm text-on-surface mb-6">Sprint Velocity</h4>

      {/* Bar Chart */}
      <div className="flex items-end justify-between h-48 gap-2">
        {velocityData.map((item, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center justify-end gap-1">
            <div
              className={`w-full rounded-t transition-all group relative cursor-pointer hover:${
                item.isActive ? 'bg-primary' : 'bg-primary'
              }`}
              style={{
                height: `${(item.value / maxValue) * 100}%`,
                backgroundColor: item.isActive ? '#004ac6' : '#eaedff',
              }}
            >
              {item.isActive && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-white text-[10px] px-2 py-1 rounded whitespace-nowrap">
                  {item.sprint}
                </div>
              )}
            </div>
            <span className="text-[10px] font-medium text-on-surface-variant">{item.sprint}</span>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-6 flex flex-col gap-1">
        <p className="text-on-surface font-bold text-label-md">Average Velocity: 42pts</p>
        <p className="text-on-surface-variant text-[11px]">Sprint 24 is performing 18% above average.</p>
      </div>
    </div>
  )
}
