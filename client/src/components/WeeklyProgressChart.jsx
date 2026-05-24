import React from 'react'

export default function WeeklyProgressChart() {
  const actualData = [92, 84, 73, 66, 54, 38, 24]
  const projectedData = [100, 88, 76, 64, 52, 40, 28]
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const maxHeight = 100
  const gapText = actualData[0] > projectedData[0] ? 'Ahead of plan' : 'Behind plan'

  return (
    <div className="lg:col-span-2 card-premium p-6 flex flex-col gap-5">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold w-fit">
            Weekly Progress Overview
          </div>
          <h4 className="text-title-sm font-bold text-on-surface">Burn-down chart vs projected velocity</h4>
          <p className="text-sm text-on-surface-variant max-w-xl">
            Compare how quickly work is burning down against the planned sprint velocity for the week.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <div className="rounded-xl border border-border bg-surface-container-lowest px-3 py-2">
            <p className="text-[11px] text-on-surface-variant">Current trend</p>
            <p className="font-bold text-on-surface">{gapText}</p>
          </div>
          <div className="rounded-xl border border-border bg-surface-container-lowest px-3 py-2">
            <p className="text-[11px] text-on-surface-variant">Sprint completion</p>
            <p className="font-bold text-on-surface">68%</p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-surface-container-lowest p-5">
        <div className="relative min-h-[280px]">
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
            {[0, 25, 50, 75, 100].map((mark) => (
              <div key={mark} className="flex items-center gap-3">
                <span className="w-10 text-[11px] font-semibold text-on-surface-variant text-right">{mark}%</span>
                <div className="h-px flex-1 bg-border/70" />
              </div>
            ))}
          </div>

          <div className="relative z-10 flex items-end justify-between gap-3 h-[280px] pl-12 pr-2 pt-2 pb-12">
            {days.map((day, idx) => (
              <div key={day} className="flex-1 h-full flex flex-col justify-end items-center gap-2 group">
                <div className="relative w-full max-w-[44px] h-full flex items-end justify-center">
                  <div
                    className="absolute bottom-0 w-[78%] rounded-t-xl bg-primary/15 border-t-2 border-primary/35 transition-all duration-500 group-hover:bg-primary/20"
                    style={{ height: `${(projectedData[idx] / maxHeight) * 100}%` }}
                  />
                  <div
                    className="absolute bottom-0 w-[78%] rounded-t-xl bg-gradient-to-t from-primary/80 to-primary shadow-md transition-all duration-500 group-hover:from-primary/90 group-hover:to-primary"
                    style={{ height: `${(actualData[idx] / maxHeight) * 100}%` }}
                  />
                  <div
                    className="absolute left-1/2 -translate-x-1/2 -top-7 hidden group-hover:block bg-inverse-surface text-white text-[10px] px-2 py-1 rounded whitespace-nowrap z-20"
                    style={{ bottom: `calc(${actualData[idx]}% + 8px)` }}
                  >
                    Actual {actualData[idx]}%
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-[11px] font-semibold text-on-surface-variant">{day}</p>
                  <p className="text-[11px] font-bold text-on-surface">{actualData[idx]}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-[11px] text-on-surface-variant">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-primary"></span>
            Actual burn-down
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-primary/25 border border-primary/35"></span>
            Projected velocity
          </div>
          <div className="ml-auto font-semibold text-on-surface">
            {gapText}: {actualData[0] - actualData[6]}% improvement over the week
          </div>
        </div>
      </div>
    </div>
  )
}
