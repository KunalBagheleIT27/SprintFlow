import React from 'react'

export default function WeeklyProgressChart() {
  const chartData = [40, 65, 55, 82, 70, 90, 85]
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const maxHeight = 100

  return (
    <div className="lg:col-span-2 bg-white rounded-xl border border-outline-variant p-6 flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h4 className="font-title-sm text-title-sm text-on-surface">Weekly Progress Overview</h4>
          <p className="text-on-surface-variant font-label-md text-label-md">Burn-down chart vs projected velocity</p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-primary"></span>
            <span className="text-[11px] font-medium text-on-surface">Actual</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-surface-variant"></span>
            <span className="text-[11px] font-medium text-on-surface-variant">Target</span>
          </div>
        </div>
      </div>

      {/* Chart Area */}
      <div className="flex-1 relative min-h-[220px] flex items-end justify-between px-2 gap-4">
        {/* Background Grid Lines */}
        <div className="absolute inset-0 flex flex-col justify-between py-2 border-b border-outline-variant pointer-events-none">
          <div className="border-t border-slate-50 w-full"></div>
          <div className="border-t border-slate-50 w-full"></div>
          <div className="border-t border-slate-50 w-full"></div>
          <div className="border-t border-slate-50 w-full"></div>
        </div>

        {/* Chart Bars */}
        {chartData.map((value, idx) => (
          <div
            key={idx}
            className="flex-1 relative group cursor-pointer transition-all"
            style={{ height: `${(value / maxHeight) * 100}%` }}
          >
            <div className="w-full h-full bg-primary/10 border-t-2 border-primary rounded-t-sm hover:bg-primary/20 transition-all"></div>
            <div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-white text-[10px] px-2 py-1 rounded whitespace-nowrap z-10">
              {value}%
            </div>
          </div>
        ))}
      </div>

      {/* X-axis Labels */}
      <div className="flex justify-between mt-4 text-[10px] font-medium text-on-surface-variant px-2 uppercase tracking-tighter">
        {days.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>
    </div>
  )
}
