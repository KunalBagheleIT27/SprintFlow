import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const projectsData = {
  1: {
    name: 'Nebula Q4 - AI Integration',
    dateRange: 'Oct 1 - Dec 31, 2024',
    status: 'Active',
    completionPercent: 68,
    overview: 'Nebula Q4 is the primary strategic initiative focused on decentralizing the core data processing engine and migrating legacy microservices to a serverless architecture.',
    budget: '$42.4k',
    budgetStatus: 'ON TRACK',
    contributors: 12,
    contributorsStatus: 'STABLE',
    blockers: 3,
    blockersStatus: 'URGENT',
    milestones: [
      { title: 'Cloud Migration Alpha', subtitle: 'Completed on Oct 12', status: 'Done', icon: 'check_circle', color: 'success' },
      { title: 'API Gateway V2 Implementation', subtitle: 'Est. Completion: Nov 20', status: 'In Progress', icon: 'autorenew', color: 'primary' },
      { title: 'Data Sync Engine Staging', subtitle: 'Starts: Dec 01', status: 'Upcoming', icon: 'schedule', color: 'neutral' },
    ],
    activities: [
      { user: 'Marcus Chen', action: 'merged pull request', target: '#1029-gateway-v2', time: '2 hours ago', avatar: 'MC' },
      { user: 'Sarah Williams', action: 'commented on', target: '"Resource Allocation for Dec"', time: '4 hours ago', icon: 'chat' },
      { user: 'Elena Rodriguez', action: 'uploaded 3 new design assets', target: 'Brand Hub', time: 'Yesterday at 4:12 PM', avatar: 'ER' },
    ],
    teamMembers: [
      { name: 'Marcus Chen', role: 'Lead Engineer', online: true },
      { name: 'Elena Rodriguez', role: 'Product Manager', online: true },
      { name: 'James Wilson', role: 'Cloud Architect', online: false },
      { name: 'Sarah Williams', role: 'Senior QA', online: true },
    ],
    assets: [
      { name: 'Nebula_Q4_Spec.pdf', icon: 'description' },
      { name: 'Infrastructure_Costs.xlsx', icon: 'table_chart' },
    ],
  },
  2: {
    name: 'Project Alpha: Security Patches',
    dateRange: 'Sept 1 - Oct 31, 2024',
    status: 'Completed',
    completionPercent: 100,
    overview: 'Annual compliance audit and infrastructure hardening for security certification.',
    budget: '$18.5k',
    budgetStatus: 'ON TRACK',
    contributors: 4,
    contributorsStatus: 'STABLE',
    blockers: 0,
    blockersStatus: 'RESOLVED',
    milestones: [
      { title: 'Vulnerability Scan', subtitle: 'Completed on Sept 15', status: 'Done', icon: 'check_circle', color: 'success' },
      { title: 'Penetration Testing', subtitle: 'Completed on Oct 20', status: 'Done', icon: 'check_circle', color: 'success' },
      { title: 'Compliance Documentation', subtitle: 'Completed on Oct 28', status: 'Done', icon: 'check_circle', color: 'success' },
    ],
    activities: [
      { user: 'John Smith', action: 'finalized security audit', time: '5 days ago', avatar: 'JS' },
      { user: 'Lisa Park', action: 'approved certification', time: '3 days ago', avatar: 'LP' },
    ],
    teamMembers: [
      { name: 'John Smith', role: 'Security Lead', online: true },
      { name: 'Lisa Park', role: 'Compliance Officer', online: true },
      { name: 'Mike Johnson', role: 'DevOps Engineer', online: false },
      { name: 'Sarah Kim', role: 'QA Lead', online: true },
    ],
    assets: [
      { name: 'Security_Audit_Report.pdf', icon: 'description' },
      { name: 'Compliance_Checklist.xlsx', icon: 'table_chart' },
    ],
  },
}

export default function ProjectDetail() {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const project = projectsData[projectId]

  if (!project) {
    return (
      <div className="w-full flex flex-col items-center justify-center py-12">
        <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4">folder_off</span>
        <h2 className="text-title-md font-bold text-on-surface mb-2">Project not found</h2>
        <button onClick={() => navigate('/dashboard/projects')} className="text-primary font-bold hover:opacity-80">
          Back to Projects
        </button>
      </div>
    )
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-primary-container text-primary'
      case 'Completed':
        return 'bg-tertiary-container text-tertiary'
      default:
        return 'bg-surface-container-lowest text-on-surface-variant'
    }
  }

  const getMilestoneColor = (color) => {
    switch (color) {
      case 'success':
        return { bg: 'bg-tertiary-container', icon: 'text-tertiary', badge: 'bg-tertiary-container text-tertiary' }
      case 'primary':
        return { bg: 'bg-primary-container', icon: 'text-primary', badge: 'bg-primary-container text-primary' }
      case 'neutral':
        return { bg: 'bg-surface-container-lowest', icon: 'text-on-surface-variant', badge: 'bg-surface-container-lowest text-on-surface-variant' }
      default:
        return { bg: 'bg-surface-container-lowest', icon: 'text-on-surface-variant', badge: 'bg-surface-container-lowest text-on-surface-variant' }
    }
  }

  const getMetricColor = (status) => {
    switch (status) {
      case 'ON TRACK':
        return 'bg-tertiary-container text-tertiary'
      case 'URGENT':
        return 'bg-error-container text-error'
      case 'STABLE':
        return 'bg-surface-container-lowest text-on-surface-variant'
      case 'RESOLVED':
        return 'bg-tertiary-container text-tertiary'
      default:
        return 'bg-surface-container-lowest text-on-surface-variant'
    }
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-5 mb-8">
        <div>
          <button onClick={() => navigate('/dashboard/projects')} className="text-label-sm text-on-surface-variant font-bold mb-2 hover:text-primary transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Back to Projects
          </button>
          <h2 className="text-headline-md font-bold text-on-surface mb-3">{project.name}</h2>

          <div className="flex flex-wrap gap-5 text-body-sm text-on-surface-variant">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">calendar_today</span>
              {project.dateRange}
            </div>
            <div className={`flex items-center gap-2 ${getStatusColor(project.status)} px-3 py-1 rounded-full font-bold`}>
              <span className="material-symbols-outlined text-lg">check_circle</span>
              {project.status}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="border border-outline-variant bg-surface px-5 py-3 rounded-xl flex items-center gap-2 text-on-surface font-bold hover:bg-surface-container-lowest transition-all">
            <span className="material-symbols-outlined">share</span>
            Share
          </button>
          <button className="border border-outline-variant bg-surface px-5 py-3 rounded-xl flex items-center gap-2 text-on-surface font-bold hover:bg-surface-container-lowest transition-all">
            <span className="material-symbols-outlined">download</span>
            Export
          </button>
          <button className="bg-primary text-on-primary px-5 py-3 rounded-xl flex items-center gap-2 font-bold hover:opacity-90 transition-all">
            <span className="material-symbols-outlined">edit</span>
            Edit Project
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          {/* Overview */}
          <section className="bg-surface border border-outline-variant rounded-2xl p-6 shadow-sm">
            <div className="flex flex-col md:flex-row justify-between gap-5 mb-6">
              <div className="flex-1">
                <p className="text-label-xs text-on-surface-variant font-bold uppercase mb-3">Project Overview</p>
                <p className="text-body-md text-on-surface leading-relaxed">{project.overview}</p>
              </div>

              <div className="text-right flex-shrink-0">
                <h3 className="text-headline-md font-bold text-primary">{project.completionPercent}%</h3>
                <p className="text-label-xs text-on-surface-variant font-bold uppercase">Completed</p>
              </div>
            </div>

            <div className="w-full h-3 bg-outline-variant rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: `${project.completionPercent}%` }}></div>
            </div>
          </section>

          {/* Milestones */}
          <section className="bg-surface border border-outline-variant rounded-2xl shadow-sm overflow-hidden">
            <div className="p-5 border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest">
              <h3 className="text-label-md font-bold text-on-surface-variant uppercase">Project Milestones</h3>
              <button className="text-primary text-label-sm font-bold hover:opacity-80">View Roadmap</button>
            </div>

            <div>
              {project.milestones.map((milestone, index) => {
                const colors = getMilestoneColor(milestone.color)
                return (
                  <div key={index} className="p-5 border-b border-outline-variant last:border-b-0 flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${colors.bg}`}>
                      <span className={`material-symbols-outlined text-lg ${colors.icon}`}>{milestone.icon}</span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-label-md font-bold text-on-surface">{milestone.title}</h4>
                      <p className="text-body-sm text-on-surface-variant mt-1">{milestone.subtitle}</p>
                    </div>

                    <span className={`${colors.badge} px-3 py-1 rounded-full text-label-xs font-bold flex-shrink-0`}>
                      {milestone.status}
                    </span>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Recent Activity */}
          <section className="bg-surface border border-outline-variant rounded-2xl shadow-sm overflow-hidden">
            <div className="p-5 border-b border-outline-variant bg-surface-container-lowest">
              <h3 className="text-label-md font-bold text-on-surface-variant uppercase">Recent Activity</h3>
            </div>

            <div className="p-6 space-y-6">
              {project.activities.map((activity, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-container text-primary flex items-center justify-center font-bold flex-shrink-0 text-label-sm">
                    {activity.avatar || <span className="material-symbols-outlined">{activity.icon}</span>}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-body-sm leading-relaxed">
                      <span className="font-bold text-on-surface">{activity.user}</span>
                      {' '}{activity.action}
                      {activity.target && (
                        <span className="text-primary font-bold"> {activity.target}</span>
                      )}
                    </p>
                    <p className="text-label-xs text-on-surface-variant mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4">
            <div className="bg-surface border border-outline-variant rounded-2xl p-5 shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <span className="material-symbols-outlined text-2xl text-on-surface-variant">wallet</span>
                <span className={`${getMetricColor(project.budgetStatus)} px-3 py-1 rounded-full text-label-xs font-bold`}>
                  {project.budgetStatus}
                </span>
              </div>
              <h3 className="text-headline-md font-bold text-on-surface">{project.budget}</h3>
              <p className="text-body-sm text-on-surface-variant mt-2">Budget Burn (42% of total)</p>
            </div>

            <div className="bg-surface border border-outline-variant rounded-2xl p-5 shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <span className="material-symbols-outlined text-2xl text-on-surface-variant">group</span>
                <span className={`${getMetricColor(project.contributorsStatus)} px-3 py-1 rounded-full text-label-xs font-bold`}>
                  {project.contributorsStatus}
                </span>
              </div>
              <h3 className="text-headline-md font-bold text-on-surface">{project.contributors}</h3>
              <p className="text-body-sm text-on-surface-variant mt-2">Active Contributors</p>
            </div>

            <div className="bg-surface border border-outline-variant rounded-2xl p-5 shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <span className="material-symbols-outlined text-2xl text-error">warning</span>
                <span className={`${getMetricColor(project.blockersStatus)} px-3 py-1 rounded-full text-label-xs font-bold`}>
                  {project.blockersStatus}
                </span>
              </div>
              <h3 className="text-headline-md font-bold text-on-surface">{project.blockers}</h3>
              <p className="text-body-sm text-on-surface-variant mt-2">Open Blockers</p>
            </div>
          </div>

          {/* Team Members */}
          <section className="bg-surface border border-outline-variant rounded-2xl p-5 shadow-sm">
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-label-md font-bold text-on-surface-variant uppercase">Team Members</h3>
              <button className="text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">person_add</span>
              </button>
            </div>

            <div className="space-y-5 mb-6">
              {project.teamMembers.map((member, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-primary-container text-primary flex items-center justify-center font-bold text-label-sm flex-shrink-0">
                    {member.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-label-md font-bold text-on-surface">{member.name}</h4>
                    <p className="text-body-sm text-on-surface-variant">{member.role}</p>
                  </div>
                  <div className={`w-3 h-3 rounded-full flex-shrink-0 ${member.online ? 'bg-tertiary' : 'bg-on-surface-variant'}`}></div>
                </div>
              ))}
            </div>

            <button className="w-full border border-outline-variant text-on-surface py-3 rounded-xl text-label-md font-bold hover:bg-surface-container-lowest transition-all">
              Manage Permissions
            </button>
          </section>

          {/* Assets */}
          <section className="bg-surface border border-outline-variant rounded-2xl p-5 shadow-sm">
            <h3 className="text-label-md font-bold text-on-surface-variant uppercase mb-5">Project Assets</h3>

            <div className="space-y-3">
              {project.assets.map((asset, index) => (
                <button key={index} className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-surface-container-lowest transition-all">
                  <span className={`material-symbols-outlined text-2xl ${asset.icon === 'description' ? 'text-error' : 'text-primary'}`}>
                    {asset.icon}
                  </span>
                  <span className="flex-1 text-left text-label-md font-bold text-on-surface">{asset.name}</span>
                  <span className="material-symbols-outlined text-on-surface-variant">more_vert</span>
                </button>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
