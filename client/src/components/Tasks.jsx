import React, { useState } from 'react'
import CreateTaskModal from './CreateTaskModal'
import { useNavigate } from 'react-router-dom'

export default function Tasks() {
  const [tasks, setTasks] = useState([
    {
      id: 'SF-1042',
      title: 'Implement WebAssembly task processor',
      description: 'Architecture redesign for performance',
      status: 'In Progress',
      priority: 'High',
      assignee: { name: 'Jordan Diaz', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTxB0vahHjcALv6RaV8bbcs5nO-egngSObQvqrIc3epfNXKicgvzEajzd_mgROY6fvjYpdAsJa9Jcz6i7UYqhyd8GGEn3-zOrBNFBzexjbInR2FIKtCEr-A2E1sziMmNayEJC9XTUgNDZWcl2PwRgtoB2f4RO-IslBkD2BjAKXZIpDaMkxDoNCBvpKwohPBc6EI9I2lRpLGPPSNb_WBqRbTU_wuWz6jLMkADq9hxjEJngbtDWm2RNZ7IyGsTZwFThts4Vt0Gf2HMg' },
      dueDate: 'Oct 24, 2023',
    },
    {
      id: 'SF-1039',
      title: 'Fix OAuth2 redirection loop',
      description: 'Reported by 4 enterprise customers',
      status: 'Review Required',
      priority: 'Medium',
      assignee: { name: 'Lena Müller', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnH2ITAZuQiUHPqqmW1sFnzAmrbJyCtbLd7xbrMj83cg2y9aHGjbuxDq1JwXO39X9XKtD_olfyRLQ2lzxRb0ceTgN9mOm1lprLPLsGjTuQtGCS6oJuY3QPg0kabBGMcdiD9DHIi2rZD6FIK-TvWMus1iwKWJQ8Iu9SG-n0dKdSQV1gZon0msejQrIJSJX-yRVmqSEl9KLcF_u9UMypgGjBgzY0S2EKEi0BrHAKLHnZvT057qQfxUNG4_pFP5sfiRYggJo2_fnfBZw' },
      dueDate: 'Oct 22, 2023',
    },
    {
      id: 'SF-1031',
      title: 'Update documentation for v2.4 Release',
      description: 'Internal knowledge base updates',
      status: 'Backlog',
      priority: 'Low',
      assignee: { name: 'Unassigned', initials: 'UA' },
      dueDate: 'Nov 15, 2023',
    },
    {
      id: 'SF-1022',
      title: 'Critical Security Patch: Log Injection',
      description: 'Vulnerability found in logging module',
      status: 'Critical',
      priority: 'Highest',
      assignee: { name: 'Sarah King', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlfpXDugAqhV8aEPyLFiSGAPsK8qBrsc1LGsCs-BL2PzWbkHvUADR-Gsjrhrfk_nkLKbjbctHjJqqKW7sbNnngMO3rbOuqeZ_jHB_IS6aNhawAPsNl0Uch5KIHeUSrhkX5XskyseNvTtOecLD1EkdP-uN4roy-DRNPMye6qHbT2zlPB5coFHaS4IjKqgCzN2bij6x03Cs0oPOekalA_rR7JKUkGjlAca5YpETinArGYhjVnLNaJuIlTk-1vavcBDfiExtxpLLaCUQ' },
      dueDate: 'TODAY',
    },
    {
      id: 'SF-1018',
      title: 'Optimize Database Indexing',
      description: 'Slow query performance on reporting',
      status: 'In Progress',
      priority: 'Medium',
      assignee: { name: 'Jordan Diaz', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOIOzcedS8zMKcj9o9_Qm-RKsyBln7qhEWypJA-f8t0erVWMHtjXhGA4PqvMZVZxaPXul7bGzK7VMiX_rNafaqRiYhYGBg0uwMGLWv2O9v8xpvXQej6uCzsz6mBYIjMQXXxZVw4YU_TvsxQ5HDnIJTITiP4C3fAjlInNNuJcKRfTZYc1Zmpb45oSpqar94Qo1mXIbPEhCAivmMY5zQ7QO-dUM1FQkuN3Qwfefke9a_je-KGyrD-0X4r6nJMEof630d3KSVmpQaVf8' },
      dueDate: 'Oct 28, 2023',
    },
  ])

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Progress':
        return 'bg-primary/10 text-primary'
      case 'Review Required':
        return 'bg-tertiary/10 text-tertiary'
      case 'Backlog':
        return 'bg-secondary-container text-secondary'
      case 'Critical':
        return 'bg-error-container text-error'
      default:
        return 'bg-surface-container text-on-surface'
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
      case 'Highest':
        return 'text-error'
      case 'Medium':
        return 'text-primary'
      case 'Low':
        return 'text-on-secondary-container'
      default:
        return 'text-on-surface'
    }
  }

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'High':
        return 'keyboard_double_arrow_up'
      case 'Highest':
        return 'keyboard_double_arrow_up'
      case 'Medium':
        return 'expand_less'
      case 'Low':
        return 'remove'
      default:
        return 'unfold_more'
    }
  }
  const [viewMode, setViewMode] = useState('list')
  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const navigate = useNavigate()

  const applyRecommendation = () => {
    // Find SF-1031 and set status to In Progress
    setTasks((prev) => prev.map((t) => (t.id === 'SF-1031' ? { ...t, status: 'In Progress' } : t)))
    // feedback: simple animation via class toggle (handled by re-render)
  }

  const handleCreate = (task) => {
    setTasks((prev) => [task, ...prev])
  }

  const goBack = () => navigate(-1)

  return (
    <div className="flex flex-col gap-8">
      {/* Page Header & Toolbar */}
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-end">
          <div>
            <nav className="flex items-center gap-2 mb-2">
              <span className="text-on-surface-variant font-label-md">Workspace</span>
              <span className="material-symbols-outlined text-xs text-outline">chevron_right</span>
              <span className="text-on-surface font-label-md font-bold">Engineering Tasks</span>
            </nav>
            <h2 className="text-[32px] font-display-lg font-bold text-on-surface">Active Backlog</h2>
          </div>
          <div className="flex items-center gap-3">
              <div className="flex bg-surface-container-low border border-outline-variant p-1 rounded-lg">
                <button onClick={() => setViewMode('list')} className={`flex items-center gap-2 px-3 py-1.5 rounded-md font-label-md ${viewMode==='list' ? 'bg-surface-container-highest text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'}`}>
                  <span className="material-symbols-outlined text-sm">list</span>
                  List
                </button>
                <button onClick={() => setViewMode('board')} className={`flex items-center gap-2 px-3 py-1.5 rounded-md font-label-md ${viewMode==='board' ? 'bg-surface-container-highest text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'}`}>
                  <span className="material-symbols-outlined text-sm">view_kanban</span>
                  Board
                </button>
              </div>
              <button onClick={() => setIsCreateOpen(true)} className="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-md flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all">
                <span className="material-symbols-outlined text-sm">add</span>
                Create Task
              </button>
              <button onClick={goBack} className="ml-2 px-3 py-1.5 border border-outline-variant rounded-md text-on-surface-variant hover:text-on-surface transition-colors">Back</button>
            </div>
        </div>

        {/* Filters Strip */}
        <div className="flex items-center justify-between py-3 px-4 bg-surface border border-outline-variant rounded-xl">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-on-surface-variant text-lg">filter_list</span>
              <span className="text-on-surface font-label-md font-bold">Filters:</span>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-2 text-on-surface-variant font-label-md hover:text-on-surface transition-colors">
                Priority: All <span className="material-symbols-outlined text-xs">expand_more</span>
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-2 text-on-surface-variant font-label-md hover:text-on-surface transition-colors">
                Status: Active <span className="material-symbols-outlined text-xs">expand_more</span>
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-2 text-on-surface-variant font-label-md hover:text-on-surface transition-colors">
                Assignee: Everyone <span className="material-symbols-outlined text-xs">expand_more</span>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-on-surface-variant font-label-md">Showing {tasks.length} tasks</span>
            <div className="h-4 w-[1px] bg-outline-variant"></div>
            <button className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">refresh</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tasks Table */}
      <div className="bg-surface border border-outline-variant rounded-xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-surface-container-low">
            <tr>
              <th className="pl-6 py-4 w-12">
                <input type="checkbox" className="rounded border-outline-variant text-primary focus:ring-primary" />
              </th>
              <th className="px-4 py-4 text-outline font-label-xs uppercase tracking-wider">
                <button className="flex items-center gap-1 hover:text-on-surface transition-colors uppercase">
                  ID <span className="material-symbols-outlined text-xs">arrow_upward</span>
                </button>
              </th>
              <th className="px-4 py-4 text-outline font-label-xs uppercase tracking-wider">Title</th>
              <th className="px-4 py-4 text-outline font-label-xs uppercase tracking-wider text-center">Status</th>
              <th className="px-4 py-4 text-outline font-label-xs uppercase tracking-wider text-center">Priority</th>
              <th className="px-4 py-4 text-outline font-label-xs uppercase tracking-wider">Assignee</th>
              <th className="px-4 py-4 text-outline font-label-xs uppercase tracking-wider">Due Date</th>
              <th className="pr-6 py-4 w-10"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            {tasks.map((task) => (
              <tr key={task.id} className="hover:bg-surface-container-lowest transition-colors group">
                <td className="pl-6 py-4">
                  <input type="checkbox" className="rounded border-outline-variant text-primary focus:ring-primary" />
                </td>
                <td className="px-4 py-4 font-code text-on-surface-variant">{task.id}</td>
                <td className="px-4 py-4">
                  <div className="flex flex-col">
                    <span className="text-on-surface font-title-sm">{task.title}</span>
                    <span className="text-on-surface-variant font-body-sm">{task.description}</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-center">
                  <span className={`px-2 py-0.5 rounded-full font-label-xs ${getStatusColor(task.status)} ${task.status === 'Critical' ? 'animate-pulse font-bold' : ''}`}>
                    {task.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-center">
                  <div className={`flex items-center justify-center gap-1 font-label-xs font-bold ${getPriorityColor(task.priority)}`}>
                    <span className="material-symbols-outlined text-xs">{getPriorityIcon(task.priority)}</span>
                    {task.priority}
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    {task.assignee.avatar ? (
                      <img
                        src={task.assignee.avatar}
                        alt={task.assignee.name}
                        className="w-6 h-6 rounded-full border border-outline-variant"
                      />
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center text-[10px] font-bold text-primary">
                        {task.assignee.initials}
                      </div>
                    )}
                    <span className={`font-body-base ${task.assignee.avatar ? 'text-on-surface' : 'text-on-surface-variant italic'}`}>
                      {task.assignee.name}
                    </span>
                  </div>
                </td>
                <td className={`px-4 py-4 font-body-sm ${task.dueDate === 'TODAY' ? 'text-error font-bold' : 'text-on-surface-variant'}`}>
                  {task.dueDate}
                </td>
                <td className="pr-6 py-4 text-right">
                  <button className="opacity-0 group-hover:opacity-100 text-on-surface-variant hover:text-primary transition-all">
                    <span className="material-symbols-outlined">more_horiz</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Table Pagination */}
        <div className="flex items-center justify-between px-6 py-4 bg-surface border-t border-outline-variant">
          <div className="flex items-center gap-4">
            <span className="text-on-surface-variant font-label-md">Rows per page:</span>
            <select className="bg-transparent border-none text-on-surface font-label-md focus:ring-0 cursor-pointer">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
          </div>
          <div className="flex items-center gap-8">
            <span className="text-on-surface-variant font-label-md">1-10 of 48</span>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 flex items-center justify-center text-outline cursor-not-allowed">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:bg-surface-container rounded-full transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>

        {/* Quick Insights Bento Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Weekly Velocity */}
        <div className="bg-surface border border-outline-variant rounded-xl p-6 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-on-surface font-title-sm">Weekly Velocity</h3>
            <span className="text-tertiary font-label-xs font-bold">+12% vs last week</span>
          </div>
          <div className="flex items-end gap-2 h-24 transition-all duration-700">
            {[40, 60, 55, 80, 95].map((height, idx) => (
              <div
                key={idx}
                className={`w-full rounded-t-md transition-all duration-700 ${idx === 4 ? 'bg-primary/90' : 'bg-primary/20'}`}
                style={{ height: `${height}%` }}
              ></div>
            ))}
          </div>
          <div className="flex items-center justify-between text-on-surface-variant text-sm">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
          </div>
        </div>

        {/* Task Distribution */}
        <div className="bg-surface border border-outline-variant rounded-xl p-6 flex flex-col gap-4">
          <h3 className="text-on-surface font-title-sm">Task Distribution</h3>
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <circle
                  className="stroke-surface-container-highest"
                  cx="18"
                  cy="18"
                  fill="none"
                  r="16"
                  strokeWidth="4"
                ></circle>
                <circle
                  className="stroke-primary"
                  cx="18"
                  cy="18"
                  fill="none"
                  r="16"
                  strokeDasharray="75, 100"
                  strokeWidth="4"
                ></circle>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center font-bold text-on-surface font-label-md">
                75%
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-on-surface-variant font-label-xs">Active Tasks</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-surface-container-highest"></span>
                <span className="text-on-surface-variant font-label-xs">Resolved</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sprint AI Insight */}
        <div className="bg-surface border border-outline-variant rounded-xl p-6 flex flex-col justify-between relative overflow-hidden group">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-2xl text-primary">auto_awesome</span>
            <h3 className="font-title-sm">Sprint AI Insight</h3>
          </div>
          <p className="font-body-sm leading-relaxed text-on-surface-variant">
            Based on team capacity, you are on track to complete SF-1042 ahead of schedule. Consider pulling SF-1031 into the current sprint.
          </p>
          <div className="flex items-center gap-3">
            <button onClick={applyRecommendation} className="bg-primary text-on-primary px-3 py-1.5 rounded-lg font-label-md w-fit hover:opacity-95 transition-all">
              Apply Recommendation
            </button>
            <button onClick={() => alert('More info coming soon')} className="px-3 py-1.5 border border-outline-variant rounded-lg">Details</button>
          </div>
        </div>
      </div>
      <CreateTaskModal isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} onSave={handleCreate} />
    </div>
  )
}
