import React from 'react'
import KanbanColumn from './KanbanColumn'
import TaskDetailModal from './TaskDetailModal'
import { useState } from 'react'

const SPRINT_DATA = {
  title: 'Sprint 12: Core Infrastructure',
  dates: 'Nov 15 - Nov 29',
  daysRemaining: '14 Working Days Remaining',
  teamMembers: [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCqge84chnan0HU20y05WxvToUdulRG5krnlcFEpLrZ6xB7UawpbQJdIP6PMBzQLfL_Ht0bdoPvUSqbi3ie1kqS48qwu4cPD_uG6ocUhxJZS4kKk03lAHROu0CYScUFfrhP6_hKH1-sRUoTYGtgkdY07zjiNm1YZOXmVV1M9-rzaaP48KwRtR9yLvgGD5ky78fw8VLN9Jhcl2-TKQPPwHc5AR5MmsghFxP5WoDr_vQYCyHZrNP1_giW0xQ91ZkWZvnvH5TW2_vuZGU',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB8zBSLzWWsSr-mcq2D4w5P8A22sZYGFshqva-Zb1ghwvkh4KsGSPm0TlZHK5-akcI5TAP3YZ3OEhMa6-jZCjnhPY88MVb1YJOwC1ga-bjUiBwrRNcga0jQFy3xXOc0L900dx6lj9yZbjAIxlVml1ANO3IpC76JRk4YZRGe6htcu2cn6cp0qwZBvyeCxozz6-8IKlToKYvR69rnv3tj8dIhxLYnGgZ58q-ugH68P1ERVUH7zskNfmprIp5wtKXjJx7P--a3REQtBDI',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAQ1O3Qet_l9kj6k_Lq69RSIbL1xxfHvP9IzP73ucWCs-NlvRHP97lsXvr1Ax6W6ryDxh6aW71zjANviunlfyzmILGf7aTkHV8fG8HBLfflvfGyPRPlGvUQsRgibML9wA6b_0TkJ79JBd2uRQQXj1KMM6DP8fXQShcwob7jhp86BmGZtNvPGG-cuQ-f5qOxhQPXe5rzuRidJdxSkKDmTix4kPYgnrupJ38ADkCu6gK1KrlAB_6Pifov7iubSJDx3Itp3LIYPWW3PTY',
  ],
}

const TASKS = {
  todo: [
    {
      id: 'SF-101',
      title: 'Implement OAuth2 login flow for enterprise clients',
      priority: 'High',
      tags: [
        { label: 'Security', color: 'primary' },
        { label: 'Frontend', color: 'default' },
      ],
      comments: 4,
      attachments: 2,
      dueDate: 'Nov 24',
      assigneeAvatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuANfoUnTZ7mmdGWf7hb5zrsEykwGuxY8VMee0Qa5LyT2LdmLKEHAzQ2RAs7b2QPaVST80WfZ9vRp91be-pxaOLWd7ejjKZyl8TB9c4MBu4qQ67wv8PuV7Bb4h3rz1qVE-gJWHwl5XsV9aMcmnS8e5BxwWMzHYIsXJr1A58fDVtHeT5qEQRzk2qk66XDGYlJ4qmFEYDzaNJaoM12LOTJgQf7BBL0cW7R0foaR5FEw1qxr2B1dEzcKY6iL9R3RCumJzL1oVndArhsXhg',
    },
    {
      id: 'SF-105',
      title: 'Update system documentation for API v2.4',
      priority: 'Low',
      tags: [{ label: 'Docs', color: 'default' }],
      comments: 0,
      attachments: 0,
      dueDate: 'Nov 30',
      assigneeAvatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBJS2dFDXnt3faDERoYtbyCtzvjFbK-khuFOVcuQFXUKe7q1jSCULVNGBqgcHdlcJxW6mRBi9mTAj_lYVF8m9zgLEu7cruRrP8Sy-4tM2osbXU8DQaRYptlhhPT4EpXOYc6Q-_YhRSMJabUttAJOhPeSItCgPTSuj9FxSJjNNnnJbSFqZ5Ytsz5kGq5haxe0lotxRJjDKbVR_QorWCtb9PeD-eKZa6jO64yRnCMGbJ6pPKsf3H5xZjFivgAuwzEl_Br3jCO26p8zRI',
    },
  ],
  inProgress: [
    {
      id: 'SF-102',
      title: 'Refactor database connection pool management',
      priority: 'Medium',
      tags: [
        { label: 'Backend', color: 'tertiary' },
        { label: 'Bug', color: 'error' },
      ],
      comments: 12,
      attachments: 5,
      dueDate: 'Today',
      assigneeAvatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCup6Db3E87QFxfP_-3eyfwTwi_n5OgzhcgiSSg7T0zqDpIa4F_7a_DmSGMvJOrWDGIpifuE7Jm7RNeVHfz8xkWIJmU76aXJfF0e4FUzkE_kPP6S_DThiPGBg0tfY8LjA9wIKhvPbczDEh6c56hLS77lpF8IU952kCTtCgyerwqemlAGheltdmmiigLFlmcxLbPqdF2PkEZDCtM0i3ePswqMjVk2FRJfQ_7owNKoRLIW8F4cgRcnhylf-PtN0Z25MQyz3ns4X9evjw',
    },
  ],
  review: [
    {
      id: 'SF-108',
      title: 'Redesign mobile navigation layout for small screens',
      priority: 'High',
      tags: [
        { label: 'UX/UI', color: 'default' },
        { label: 'Mobile', color: 'primary' },
      ],
      comments: 8,
      attachments: 0,
      dueDate: 'Nov 22',
      assigneeAvatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCDpq-yZxFtHw4UrqtDHb1hexlX82sdd24WYHKyTPDyYRky2ysoNb5Zgn9VioCzDqdq-6-q7pKPnBZ0rrX9UIgUpVBjoLpKgWV6s-OzeyxNi89NH9iE58ZTk__INp6nzUxISMhljxX7txjDVxWRFpRNuw7N-DdpK_aaUgxY6ZNoEX1WM1mSJAq_QOXHOF6_ksxhYGvdn4C19kWlHsz76zYfl8j27NpBj8RQouA6C89_KvDL0e_RzHUGfithjuk8yb8HQU5827l9qgs',
    },
  ],
  done: [
    {
      id: 'SF-98',
      title: 'Fix race condition in telemetry batch processor',
      priority: 'Done',
      tags: [{ label: 'Backend', color: 'tertiary' }],
      comments: 21,
      attachments: 0,
      dueDate: 'Nov 14',
      assigneeAvatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBXXDxmdPNR9IeqC1-TtKj6KInFSkdEgLgC64ZtKIOwceBDKjJPA6pg3XfSKkhK6whBboI2j5giFUa3NRDDKzROgTYGE5xueMz3wuoIbSXhHjfZEO_aTdpL3pA1DVmu6Oev7PwxLJidA48hwAKMOA_S4fQO6u0GH0WdnDjhnDpgLrx92ICh4uP9fWXdrKT1ISCnza95YECc7V8f1Hb91JN1BTx6QlBM_F2jXgWMTEWNQHKH2IoMoVY3jfb70V_Ev7MvYYdGGPBhEOs',
    },
  ],
}

export default function SprintBoard() {
  const [selectedTask, setSelectedTask] = useState(null)
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false)
  const [boardTasks, setBoardTasks] = useState(TASKS)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [editInitial, setEditInitial] = useState(null)

  const openTaskModal = (task) => {
    setSelectedTask(task)
    setIsTaskModalOpen(true)
  }

  const closeTaskModal = () => {
    setIsTaskModalOpen(false)
    setSelectedTask(null)
  }
  const openCreateModal = (initial) => {
    setEditInitial(initial || null)
    setIsCreateModalOpen(true)
  }

  const closeCreateModal = () => {
    setIsCreateModalOpen(false)
    setEditInitial(null)
  }

  const saveTask = (task) => {
    // Determine if update or create
    setBoardTasks((prev) => {
      // search in all lists
      const lists = { ...prev }
      // remove existing if exists
      Object.keys(lists).forEach((k) => {
        lists[k] = lists[k].filter((t) => t.id !== task.id)
      })
      // default add to todo
      lists.todo = [task, ...lists.todo]
      return lists
    })
  }

  const deleteTask = (taskId) => {
    setBoardTasks((prev) => {
      const lists = { ...prev }
      Object.keys(lists).forEach((k) => {
        lists[k] = lists[k].filter((t) => t.id !== taskId)
      })
      return lists
    })
  }

  const moveTask = (taskId, toList) => {
    setBoardTasks((prev) => {
      const lists = { ...prev }
      let moving = null
      Object.keys(lists).forEach((k) => {
        const found = lists[k].find((t) => t.id === taskId)
        if (found) {
          moving = found
          lists[k] = lists[k].filter((t) => t.id !== taskId)
        }
      })
      if (moving) lists[toList] = [moving, ...lists[toList]]
      return lists
    })
  }
  return (
    <>
      {/* BOARD HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-display-lg text-display-lg text-on-surface">
            {SPRINT_DATA.title}
          </h2>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-body-sm text-outline">{SPRINT_DATA.dates}</span>
            <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
            <span className="text-body-sm text-primary font-medium">{SPRINT_DATA.daysRemaining}</span>
          </div>
        </div>

        {/* Team avatars and buttons */}
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {SPRINT_DATA.teamMembers.map((avatar, idx) => (
              <img
                key={idx}
                alt="Assignee"
                className="w-7 h-7 rounded-full border-2 border-surface"
                src={avatar}
              />
            ))}
            <div className="w-7 h-7 rounded-full border-2 border-surface bg-surface-container-highest flex items-center justify-center text-[10px] font-bold text-on-surface">
              +5
            </div>
          </div>

          <button className="ml-4 flex items-center gap-1 px-3 py-1.5 border border-outline-variant rounded-lg text-body-sm hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined">filter_list</span>
            Filter
          </button>
          <button className="flex items-center gap-1 px-3 py-1.5 border border-outline-variant rounded-lg text-body-sm hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined">share</span>
            Share
          </button>
        </div>
      </div>

      {/* KANBAN GRID - responsive grid to avoid horizontal scroll */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-4 auto-rows-min">
        <KanbanColumn title="Todo" count={boardTasks.todo.length} tasks={boardTasks.todo} onTaskClick={openTaskModal} onAddClick={() => openCreateModal()} onEdit={openCreateModal} onDelete={deleteTask} onMove={moveTask} />
        <KanbanColumn title="In Progress" count={boardTasks.inProgress.length} tasks={boardTasks.inProgress} onTaskClick={openTaskModal} onAddClick={() => openCreateModal()} onEdit={openCreateModal} onDelete={deleteTask} onMove={moveTask} />
        <KanbanColumn title="Review" count={boardTasks.review.length} tasks={boardTasks.review} onTaskClick={openTaskModal} onAddClick={() => openCreateModal()} onEdit={openCreateModal} onDelete={deleteTask} onMove={moveTask} />
        <KanbanColumn title="Done" count={boardTasks.done.length} tasks={boardTasks.done} isDone={true} onTaskClick={openTaskModal} onAddClick={() => openCreateModal()} onEdit={openCreateModal} onDelete={deleteTask} onMove={moveTask} />

        {/* Add Status Card */}
        <div className="w-full flex flex-col justify-start pt-1">
          <button
            onClick={() => openCreateModal()}
            className="w-full flex items-center justify-center gap-2 py-4 border-2 border-dashed border-outline-variant rounded-lg text-outline hover:border-primary hover:text-primary hover:bg-surface-container transition-all"
          >
            <span className="material-symbols-outlined">add</span>
            <span className="text-label-md font-label-md">Add Task</span>
          </button>
        </div>
      </div>

      <TaskDetailModal isOpen={isTaskModalOpen} onClose={closeTaskModal} task={selectedTask} />
      <CreateTaskModal isOpen={isCreateModalOpen} onClose={closeCreateModal} onSave={saveTask} initial={editInitial} />
    </>
  )
}
