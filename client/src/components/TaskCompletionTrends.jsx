import React from 'react'

export default function TaskCompletionTrends() {
  return (
    <div className="lg:col-span-2 bg-surface-container-lowest p-gutter rounded-xl border border-outline-variant shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="font-title-sm text-title-sm text-on-background">Task Completion Trends</h3>
          <p className="font-label-md text-label-md text-on-surface-variant">Historical view of closed vs. open issues</p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-primary"></span>
            <span className="font-label-xs text-label-xs text-on-surface">Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-surface-variant"></span>
            <span className="font-label-xs text-label-xs text-on-surface-variant">Backlog</span>
          </div>
        </div>
      </div>

      {/* SVG Chart */}
      <div className="h-64 flex items-end gap-4 px-4 border-b border-outline-variant pb-2 relative">
        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" style={{ display: 'block' }}>
          {/* Completed line (primary) */}
          <path
            d="M0,200 Q100,150 200,170 T400,80 T600,120 T800,50"
            fill="none"
            stroke="#004ac6"
            strokeWidth="3"
            className="drop-shadow-sm"
          />

          {/* Backlog line (dashed, surface-variant) */}
          <path d="M0,180 Q100,160 200,150 T400,140 T600,130 T800,120" fill="none" stroke="#dae2fd" strokeDasharray="4" strokeWidth="3" />
        </svg>

        {/* Week labels */}
        <div className="absolute bottom-[-32px] w-full flex justify-between px-4">
          <span className="font-label-xs text-label-xs text-on-surface-variant opacity-60">Week 1</span>
          <span className="font-label-xs text-label-xs text-on-surface-variant opacity-60">Week 2</span>
          <span className="font-label-xs text-label-xs text-on-surface-variant opacity-60">Week 3</span>
          <span className="font-label-xs text-label-xs text-on-surface-variant opacity-60">Week 4</span>
          <span className="font-label-xs text-label-xs text-on-surface-variant opacity-60">Week 5</span>
        </div>
      </div>
    </div>
  )
}
