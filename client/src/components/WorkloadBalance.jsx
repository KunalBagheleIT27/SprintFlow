import React from 'react'

export default function WorkloadBalance() {
  return (
    <div className="bg-surface-container-lowest p-gutter rounded-xl border border-outline-variant shadow-sm">
      <h3 className="font-title-sm text-title-sm text-on-background mb-6">Workload Balance</h3>

      <div className="flex items-center gap-8">
        {/* Donut Chart */}
        <div className="relative w-32 h-32 shrink-0">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            {/* Background circle */}
            <circle
              className="stroke-surface-container"
              cx="18"
              cy="18"
              r="16"
              fill="none"
              strokeWidth="4"
            />

            {/* Frontend - 40% (primary) */}
            <circle
              className="stroke-primary"
              cx="18"
              cy="18"
              r="16"
              fill="none"
              strokeDasharray="40 100"
              strokeLinecap="round"
              strokeWidth="4"
            />

            {/* Backend - 30% (tertiary) */}
            <circle
              className="stroke-tertiary"
              cx="18"
              cy="18"
              r="16"
              fill="none"
              strokeDasharray="30 100"
              strokeDashoffset="-40"
              strokeLinecap="round"
              strokeWidth="4"
            />

            {/* DevOps - 20% (secondary) */}
            <circle
              className="stroke-secondary"
              cx="18"
              cy="18"
              r="16"
              fill="none"
              strokeDasharray="20 100"
              strokeDashoffset="-70"
              strokeLinecap="round"
              strokeWidth="4"
            />
          </svg>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-bold text-lg text-on-surface">12</span>
            <span className="text-[10px] text-on-surface-variant uppercase">Total FTE</span>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-3 w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span className="font-label-xs text-label-xs text-on-surface">Frontend</span>
            </div>
            <span className="font-label-xs font-bold text-on-surface">40%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-tertiary"></span>
              <span className="font-label-xs text-label-xs text-on-surface">Backend</span>
            </div>
            <span className="font-label-xs font-bold text-on-surface">30%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="font-label-xs text-label-xs text-on-surface">DevOps</span>
            </div>
            <span className="font-label-xs font-bold text-on-surface">20%</span>
          </div>
        </div>
      </div>

      {/* Observation */}
      <div className="mt-8 pt-6 border-t border-outline-variant">
        <p className="font-label-md text-label-md text-on-surface-variant leading-relaxed">
          <span className="font-bold text-primary">Observation:</span> Frontend team is currently over-allocated by 15% due
          to the 'Mobile Redesign' sprint. Recommend shifting 2 mid-level tasks to Backend.
        </p>
      </div>
    </div>
  )
}
