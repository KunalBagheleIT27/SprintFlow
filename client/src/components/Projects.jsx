import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AddProjectModal from './AddProjectModal'

const stats = [
  { title: 'Total Projects', value: '24', sub: '+2 this month', icon: 'layers', bgColor: 'bg-blue-50', textColor: 'text-blue-600', borderColor: 'border-l-blue-600' },
  { title: 'Avg. Completion', value: '68%', sub: 'Overall progress', icon: 'trending_up', bgColor: 'bg-green-50', textColor: 'text-green-600', borderColor: 'border-l-green-600' },
  { title: 'Active Tasks', value: '142', sub: 'Across 8 teams', icon: 'check_circle', bgColor: 'bg-purple-50', textColor: 'text-purple-600', borderColor: 'border-l-purple-600' },
  { title: 'Velocity', value: '42 pts', sub: 'Per sprint', icon: 'bolt', bgColor: 'bg-orange-50', textColor: 'text-orange-600', borderColor: 'border-l-orange-600' },
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
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [projects, setProjects] = useState(projectsData)

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleProjectClick = (projectId) => {
    navigate(`/dashboard/project/${projectId}`)
  }

  const handleAddProject = (newProject) => {
    setProjects((prev) => [newProject, ...prev])
  }

  const handleFilterClick = () => {
    // Filter action - you can implement filter modal later
    console.log('Filter clicked')
  }

  const handleMoreOptions = (e, projectId) => {
    e.stopPropagation()
    // Handle more options menu
    console.log('More options for project:', projectId)
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
      <AddProjectModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onProjectAdded={handleAddProject}
      />

      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-5 mb-8">
        <div>
          <p className="text-label-xs text-on-surface-variant font-bold mb-2">Workspace / Projects</p>
          <h2 className="text-headline-md font-bold text-on-surface">Active Projects</h2>
          <p className="text-body-sm text-on-surface-variant mt-2">Manage and track high-priority initiatives across your organization.</p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleFilterClick}
            className="border border-outline-variant bg-surface px-5 py-3 rounded-xl flex items-center gap-2 text-on-surface font-bold hover:bg-surface-container-lowest transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined">filter_list</span>
            Filter
          </button>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-primary text-on-primary px-5 py-3 rounded-xl flex items-center gap-2 font-bold hover:opacity-90 transition-all cursor-pointer active:scale-95"
          >
            <span className="material-symbols-outlined">add</span>
            New Project
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            onClick={() => console.log(`Stat clicked: ${stat.title}`)}
            className={`${stat.bgColor} ${stat.borderColor} border-l-4 rounded-2xl p-5 shadow-sm cursor-pointer hover:shadow-md transition-all transform hover:scale-105`}
          >
            <div className="flex items-center justify-between mb-3">
              <p className={`text-label-xs font-bold text-gray-600 uppercase`}>{stat.title}</p>
              <span className={`material-symbols-outlined text-2xl ${stat.textColor}`}>{stat.icon}</span>
            </div>
            <h3 className="text-headline-md font-bold text-gray-900">{stat.value}</h3>
            <p className="text-body-sm text-gray-600 mt-2">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="space-y-4">
        {filteredProjects.length === 0 ? (
          <div className="border-2 border-dashed border-outline-variant rounded-2xl p-12 text-center bg-surface-container-lowest hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined text-6xl text-on-surface-variant mx-auto block mb-4">folder_open</span>
            <h3 className="text-title-md font-bold text-on-surface mb-2">No projects found</h3>
            <p className="text-body-sm text-on-surface-variant">Try adjusting your search or create a new project</p>
          </div>
        ) : (
          filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className="bg-surface border-2 border-outline-variant rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary transition-all cursor-pointer group"
            >
              <div className={`h-2 ${getProgressColor(project.status)} transition-all`}></div>

              <div className="p-6">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div className="flex gap-4 flex-1 cursor-pointer hover:opacity-90 transition-opacity">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                      <span className="material-symbols-outlined text-2xl text-on-primary">{project.icon}</span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-title-md font-bold text-on-surface group-hover:text-primary transition-colors cursor-pointer">{project.name}</h3>
                      <div className="flex items-center gap-3 mt-2 flex-wrap">
                        <span className={`${getStatusBadgeColor(project.status)} px-3 py-1 rounded-full text-label-xs font-bold cursor-pointer hover:opacity-80 transition-opacity`}>
                          {project.status}
                        </span>
                        {project.updatedTime && (
                          <span className="text-label-xs text-on-surface-variant cursor-default">{project.updatedTime === 'now' ? 'Just now' : `Updated ${project.updatedTime}`}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={(e) => handleMoreOptions(e, project.id)}
                    className="text-on-surface-variant hover:text-primary hover:bg-surface-container-lowest p-2 rounded-lg transition-all cursor-pointer active:scale-95"
                  >
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </div>

                <p className="text-body-sm text-on-surface-variant mb-6 leading-relaxed">{project.description}</p>

                {/* Metrics Grid */}
                {project.activeSprints && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div
                      onClick={() => console.log('Active Sprints clicked')}
                      className="bg-blue-50 rounded-xl p-4 cursor-pointer hover:bg-blue-100 transition-colors border-l-4 border-l-blue-500"
                    >
                      <p className="text-label-xs text-blue-700 font-bold uppercase">Active Sprints</p>
                      <h4 className="text-title-sm font-bold text-blue-900 mt-2">{project.activeSprints}</h4>
                    </div>
                    <div
                      onClick={() => console.log('Team Size clicked')}
                      className="bg-green-50 rounded-xl p-4 cursor-pointer hover:bg-green-100 transition-colors border-l-4 border-l-green-500"
                    >
                      <p className="text-label-xs text-green-700 font-bold uppercase">Team Size</p>
                      <h4 className="text-title-sm font-bold text-green-900 mt-2">{project.teamSize} Members</h4>
                    </div>
                    <div
                      onClick={() => console.log('Due Date clicked')}
                      className="bg-orange-50 rounded-xl p-4 cursor-pointer hover:bg-orange-100 transition-colors border-l-4 border-l-orange-500"
                    >
                      <p className="text-label-xs text-orange-700 font-bold uppercase">Due Date</p>
                      <h4 className="text-title-sm font-bold text-orange-900 mt-2">{project.dueDate}</h4>
                    </div>
                    <div
                      onClick={() => console.log('Risk Level clicked')}
                      className="bg-purple-50 rounded-xl p-4 cursor-pointer hover:bg-purple-100 transition-colors border-l-4 border-l-purple-500"
                    >
                      <p className="text-label-xs text-purple-700 font-bold uppercase">Risk Level</p>
                      <h4 className="text-title-sm font-bold text-purple-900 mt-2">{project.riskLevel}</h4>
                    </div>
                  </div>
                )}

                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-label-sm font-bold text-on-surface">Milestone Progress</span>
                    <span className="text-label-sm font-bold text-primary">{project.progress}%</span>
                  </div>
                  <div className="w-full h-3 bg-outline-variant rounded-full overflow-hidden shadow-sm">
                    <div
                      className={`h-full ${getProgressColor(project.status)} rounded-full transition-all shadow-md`}
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Empty State for New Projects */}
      <div
        onClick={() => setIsAddModalOpen(true)}
        className="mt-8 border-2 border-dashed border-primary rounded-2xl p-12 text-center bg-primary/5 hover:bg-primary/10 transition-all cursor-pointer transform hover:scale-102 group"
      >
        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/30 transition-colors">
          <span className="material-symbols-outlined text-5xl text-primary">add</span>
        </div>
        <h3 className="text-title-md font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">Initiate New Project</h3>
        <p className="text-body-sm text-on-surface-variant max-w-xl mx-auto">
          Ready to start something big? Create a new project space to organize tasks, sprints, and collaboration.
        </p>
      </div>
    </div>
  )
}
