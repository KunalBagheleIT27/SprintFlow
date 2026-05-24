import React from 'react'
import KPICard from './KPICard'
import WeeklyProgressChart from './WeeklyProgressChart'
import UpcomingDeadlines from './UpcomingDeadlines'
import SprintVelocity from './SprintVelocity'
import TeamStatus from './TeamStatus'
import RecentActivityFeed from './RecentActivityFeed'

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-8">
      {/* Page Header */}
      <div>
        <nav className="flex items-center gap-2 mb-2">
          <span className="text-on-surface-variant font-label-md">Workspace</span>
          <span className="material-symbols-outlined text-xs text-outline">chevron_right</span>
          <span className="text-on-surface font-label-md font-bold">Dashboard</span>
        </nav>
        <h1 className="text-[32px] font-display-lg font-bold text-on-surface">Dashboard</h1>
        <p className="text-body-base text-on-surface-variant mt-1">Welcome back! Here's your sprint overview.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          icon="assignment_turned_in"
          label="Total Tasks"
          value="48"
          trend="+12%"
          trendIcon="trending_up"
          trendColor="text-tertiary"
        />
        <KPICard
          icon="folder_open"
          label="Active Projects"
          value="5"
          trend="+2 this month"
          trendIcon="trending_up"
          trendColor="text-tertiary"
        />
        <KPICard
          icon="speed"
          label="Sprint Completion"
          value="82%"
          progress={82}
          trendColor="text-primary"
        />
        <KPICard
          icon="people"
          label="Team Productivity"
          value="94%"
          progress={94}
          trendColor="text-tertiary"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-surface border border-outline-variant rounded-xl p-6">
          <h3 className="text-title-sm font-bold text-on-surface mb-4">Weekly Progress</h3>
          <WeeklyProgressChart />
        </div>
        <div className="bg-surface border border-outline-variant rounded-xl p-6">
          <h3 className="text-title-sm font-bold text-on-surface mb-4">Upcoming Deadlines</h3>
          <UpcomingDeadlines />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-surface border border-outline-variant rounded-xl p-6">
          <h3 className="text-title-sm font-bold text-on-surface mb-4">Sprint Velocity</h3>
          <SprintVelocity />
        </div>
        <div className="lg:col-span-1 bg-surface border border-outline-variant rounded-xl p-6">
          <h3 className="text-title-sm font-bold text-on-surface mb-4">Team Status</h3>
          <TeamStatus />
        </div>
        <div className="lg:col-span-1 bg-surface border border-outline-variant rounded-xl p-6">
          <h3 className="text-title-sm font-bold text-on-surface mb-4">Activity Feed</h3>
          <RecentActivityFeed />
        </div>
      </div>
    </div>
  )
}
