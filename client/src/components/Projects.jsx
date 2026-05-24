import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const stats = [
  { title: 'Total Projects', value: '24', sub: '+2 this month', icon: 'layers' },
  { title: 'Avg. Completion', value: '68%', sub: 'Overall progress', icon: 'trending_up' },
  { title: 'Active Tasks', value: '142', sub: 'Across 8 teams', icon: 'check_circle' },
  { title: 'Velocity', value: '42 pts', sub: 'Per sprint', icon: 'bolt' },
]

const projectsData = [
  {
    id: 1,
    name: 'Nebula Q4 - AI Integration',
    status: 'IN PROGRESS',
    updatedTime: '2h ago',
    description: 'Core architectural overhaul to support LLM-driven automated sprint planning and predictive bottleneck analysis.',
    activeSprints: 12,
    teamSize: 24,
    dueDate: 'Dec 15',
    riskLevel: 'Low',
    progress: 78,
    icon: 'bolt',
    completionPercent: 68,
    budget: '$42.4k',
    contributors: 12,
    blockers: 3,
  },
  {
    id: 2,
    name: 'Project Alpha: Security Patches',
    status: 'COMPLETED',
    description: 'Annual compliance audit and infrastructure hardening.',
    progress: 100,
    teamSize: 4,
    icon: 'check_circle',
    statusColor: 'success',
  },
  {
    id: 3,
    name: 'UI Design System v3.0',
    status: 'PLANNING',
    description: 'Redefining the component library with token-based styling.',
    progress: 15,
    icon: 'layers',
    statusColor: 'neutral',
  },
  {
    id: 4,
    name: 'Legacy Migration - Phase 2',
    status: 'AT RISK',
    description: 'Transferring legacy monolith services to distributed microservice architecture.',
    progress: 42,
    icon: 'warning',
    statusColor: 'error',
  },
]

export default function Projects() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProjects = projectsData.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleProjectClick = (projectId) => {
    navigate(`/dashboard/project/${projectId}`)
  }

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case 'IN PROGRESS':
        return 'bg-primary-container text-primary'
      case 'COMPLETED':
        return 'bg-tertiary-container text-tertiary'
      case 'PLANNING':
        return 'bg-surface-container-lowest text-on-surface-variant'
      case 'AT RISK':
        return 'bg-error-container text-error'
      default:
        return 'bg-surface-container-lowest text-on-surface-variant'
    }
  }

  const getProgressColor = (status) => {
    switch (status) {
      case 'COMPLETED':
        return 'bg-tertiary'
      case 'AT RISK':
        return 'bg-error'
      case 'PLANNING':
        return 'bg-on-surface-variant'
      default:
        return 'bg-primary'
    }
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-5 mb-8">
        <div>
          <p className="text-label-xs text-on-surface-variant font-bold mb-2">Workspace / Projects</p>
          <h2 className="text-headline-md font-bold text-on-surface">Active Projects</h2>
          <p className="text-body-sm text-on-surface-variant mt-2">Manage and track high-priority initiatives across your organization.</p>
        </div>

        <div className="flex gap-3">
          <button className="border border-outline-variant bg-surface px-5 py-3 rounded-xl flex items-center gap-2 text-on-surface font-bold hover:bg-surface-container-lowest transition-all">
            <span className="material-symbols-outlined">filter_list</span>
            Filter
          </button>
          <button className="bg-primary text-on-primary px-5 py-3 rounded-xl flex items-center gap-2 font-bold hover:opacity-90 transition-all">
            <span className="material-symbols-outlined">add</span>
            New Project
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-surface border border-outline-variant rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <p className="text-label-xs font-bold text-on-surface-variant uppercase">{stat.title}</p>
              <span className="material-symbols-outlined text-2xl text-primary">{stat.icon}</span>
            </div>
            <h3 className="text-headline-md font-bold text-on-surface">{stat.value}</h3>
            <p className="text-body-sm text-on-surface-variant mt-2">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="space-y-4">
        {filteredProjects.length === 0 ? (
          <div className="border-2 border-dashed border-outline-variant rounded-2xl p-12 text-center bg-surface-container-lowest">
            <span className="material-symbols-outlined text-6xl text-on-surface-variant mx-auto block mb-4">folder_open</span>
            <h3 className="text-title-md font-bold text-on-surface mb-2">No projects found</h3>
            <p className="text-body-sm text-on-surface-variant">Try adjusting your search or create a new project</p>
          </div>
        ) : (
          filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className="bg-surface border border-outline-variant rounded-2xl overflow-hidden hover:shadow-md transition-all cursor-pointer group"
            >
              <div className={`h-1 ${getProgressColor(project.status)}`}></div>

              <div className="p-6">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div className="flex gap-4 flex-1">
                    <div className="w-14 h-14 bg-primary-container rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-2xl text-primary">{project.icon}</span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-title-md font-bold text-on-surface group-hover:text-primary transition-colors">{project.name}</h3>
                      <div className="flex items-center gap-3 mt-2 flex-wrap">
                        <span className={`${getStatusBadgeColor(project.status)} px-3 py-1 rounded-full text-label-xs font-bold`}>
                          {project.status}
                        </span>
                        {project.updatedTime && (
                          <span className="text-label-xs text-on-surface-variant">Updated {project.updatedTime}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <button className="text-on-surface-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </div>

                <p className="text-body-sm text-on-surface-variant mb-6">{project.description}</p>

                {/* Metrics Grid */}
                {project.activeSprints && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-surface-container-lowest rounded-xl p-4">
                      <p className="text-label-xs text-on-surface-variant font-bold uppercase">Active Sprints</p>
                      <h4 className="text-title-sm font-bold text-on-surface mt-2">{project.activeSprints}</h4>
                    </div>
                    <div className="bg-surface-container-lowest rounded-xl p-4">
                      <p className="text-label-xs text-on-surface-variant font-bold uppercase">Team Size</p>
                      <h4 className="text-title-sm font-bold text-on-surface mt-2">{project.teamSize} Members</h4>
                    </div>
                    <div className="bg-surface-container-lowest rounded-xl p-4">
                      <p className="text-label-xs text-on-surface-variant font-bold uppercase">Due Date</p>
                      <h4 className="text-title-sm font-bold text-on-surface mt-2">{project.dueDate}</h4>
                    </div>
                    <div className="bg-surface-container-lowest rounded-xl p-4">
                      <p className="text-label-xs text-on-surface-variant font-bold uppercase">Risk Level</p>
                      <h4 className="text-title-sm font-bold text-on-surface mt-2">{project.riskLevel}</h4>
                    </div>
                  </div>
                )}

                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-label-sm font-bold text-on-surface">Milestone Progress</span>
                    <span className="text-label-sm font-bold text-on-surface-variant">{project.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-outline-variant rounded-full overflow-hidden">
                    <div className={`h-full ${getProgressColor(project.status)} rounded-full transition-all`} style={{ width: `${project.progress}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Empty State for New Projects */}
      <div className="mt-8 border-2 border-dashed border-outline-variant rounded-2xl p-12 text-center bg-surface-container-lowest hover:bg-surface transition-colors cursor-pointer">
        <div className="w-20 h-20 bg-outline-variant rounded-full flex items-center justify-center mx-auto mb-5">
          <span className="material-symbols-outlined text-5xl text-on-surface-variant">add</span>
        </div>
        <h3 className="text-title-md font-bold text-on-surface mb-2">Initiate New Project</h3>
        <p className="text-body-sm text-on-surface-variant max-w-xl mx-auto">
          Ready to start something big? Create a new project space to organize tasks, sprints, and collaboration.
        </p>
      </div>
    </div>
  )
}
