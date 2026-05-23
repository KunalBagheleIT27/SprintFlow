import React from 'react'
import SprintIntelligenceMetric from './SprintIntelligenceMetric'
import TaskCompletionTrends from './TaskCompletionTrends'
import TeamEfficiencyRadar from './TeamEfficiencyRadar'
import WorkloadBalance from './WorkloadBalance'
import SprintActivityFeed from './SprintActivityFeed'

export default function SprintIntelligence() {
  return (
    <>
      {/* PAGE HEADER */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="font-display-lg text-display-lg text-on-background">Sprint Intelligence</h2>
          <p className="font-body-base text-body-base text-on-surface-variant">
            Real-time velocity and performance metrics for Q3 Enterprise Expansion.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-surface-container-highest text-primary font-label-md text-label-md rounded-lg border border-outline-variant hover:bg-surface-variant transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]" data-icon="calendar_month">
              calendar_month
            </span>
            Last 30 Days
          </button>
          <button className="px-4 py-2 bg-primary text-on-primary font-label-md text-label-md rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]" data-icon="file_download">
              file_download
            </span>
            Export Report
          </button>
        </div>
      </div>

      {/* KPI METRICS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-gutter">
        <SprintIntelligenceMetric
          label="Velocity"
          icon="speed"
          value="42.8"
          trend="+12% vs last sprint"
          trendIcon="trending_up"
          trendColor="text-tertiary"
        />
        <SprintIntelligenceMetric
          label="Completion Rate"
          icon="check_circle"
          value="94%"
          trendColor="text-tertiary"
        />
        <SprintIntelligenceMetric
          label="Avg. Cycle Time"
          icon="schedule"
          value="3.2d"
          trend="-0.4d slower"
          trendIcon="trending_down"
          trendColor="text-error"
        />
        <SprintIntelligenceMetric
          label="Active Blockers"
          icon="error"
          value="3"
          trendColor="text-error"
          subtitle="Highest: API Gateway"
        />
      </div>

      {/* CHARTS SECTION 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter mb-gutter">
        <TaskCompletionTrends />
        <TeamEfficiencyRadar />
      </div>

      {/* CHARTS SECTION 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter mb-gutter">
        <WorkloadBalance />
        <SprintActivityFeed />
      </div>

      {/* Footer spacing */}
      <div className="h-12"></div>
    </>
  )
}
