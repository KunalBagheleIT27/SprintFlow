import React from 'react'
import KPICard from './KPICard'
import WeeklyProgressChart from './WeeklyProgressChart'
import UpcomingDeadlines from './UpcomingDeadlines'
import SprintVelocity from './SprintVelocity'
import TeamStatus from './TeamStatus'
import RecentActivityFeed from './RecentActivityFeed'

export default function AnalyticsDashboard() {
  return (
    <>
      {/* HEADER SECTION */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="font-display-lg text-display-lg text-on-background">Analytics Dashboard</h2>
          <p className="font-body-base text-body-base text-on-surface-variant">
            Real-time performance metrics and velocity trends for Sprint #24.
          </p>
        </div>
        <div className="flex gap-stack-sm">
          <button className="px-4 py-2 rounded border border-outline-variant font-label-md text-label-md text-on-surface hover:bg-surface-container transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
              calendar_today
            </span>
            Last 14 Days
          </button>
          <button className="px-4 py-2 rounded bg-primary text-white font-label-md text-label-md hover:opacity-90 transition-opacity flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
              download
            </span>
            Export Report
          </button>
        </div>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-gutter">
        <KPICard icon="task" label="Total Tasks" value="124" trend="+4.2%" trendType="positive" />
        <KPICard
          icon="folder_managed"
          label="Active Projects"
          value="12"
          trend="Stable"
          trendType="neutral"
        />
        <KPICard icon="check_circle" label="Sprint Completion" value="84%" trend="+18%" trendType="positive" />
        <KPICard icon="trending_up" label="Team Productivity" value="+12%" trend="+12%" trendType="positive" />
      </div>

      {/* BENTO GRID SECTION 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter mb-gutter">
        <WeeklyProgressChart />
        <UpcomingDeadlines />
      </div>

      {/* BENTO GRID SECTION 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-gutter">
        <SprintVelocity />
        <TeamStatus />
        <RecentActivityFeed />
      </div>

      {/* FLOATING ACTION BUTTON */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center z-50">
        <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>
          bolt
        </span>
      </button>
    </>
  )
}
