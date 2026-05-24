import { create } from 'zustand'

export const useAppStore = create((set) => ({
  sprints: [
    {
      id: 'sprint-1',
      name: 'Sprint 1 - Q2 Planning',
      status: 'active',
      startDate: '2024-05-01',
      endDate: '2024-05-15',
      tasks: 12,
      completed: 8,
    },
  ],

  tasks: [
    {
      id: 'task-1',
      title: 'Design API endpoints',
      description: 'Design RESTful API for project management',
      status: 'completed',
      priority: 'high',
      assignee: 'Alex Sterling',
      dueDate: '2024-05-10',
      sprint: 'sprint-1',
    },
  ],

  teamMembers: [
    {
      id: 'member-1',
      name: 'Alex Sterling',
      email: 'alex@sprintflow.com',
      role: 'Lead Engineer',
      status: 'online',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_KBVIrNrHXzMjgwRI34ZdB0ooF5vrq4mzSYrYKnc8bwoZbMZB4KnDrSd6a8T4ngQ_w3RdAudhw3A7DVT3NASbySMX--dnOarigDsorvklToSMzQ97rV5JVYWLPrbD0RPvWI0Gwvpxs0ioQPXk7U5vPBqQnJ97gd3h4-yr2_3t4k_EeIWjpdpazXX6Yz4yloo3xdGOxumH6gvYoE-tIrh6Yg69ahIdFZqBhwIZRdZiZCJFoQbCeQgSoWqx27QxHCm6kJCEbZ3YQl8',
    },
  ],

  projects: [
    {
      id: 'project-1',
      name: 'Nebula Q4 - AI Integration',
      status: 'IN_PROGRESS',
      progress: 78,
    },
  ],

  // Sprint actions
  addSprint: (sprint) =>
    set((state) => ({
      sprints: [...state.sprints, { ...sprint, id: `sprint-${Date.now()}` }],
    })),

  updateSprint: (id, updates) =>
    set((state) => ({
      sprints: state.sprints.map((s) => (s.id === id ? { ...s, ...updates } : s)),
    })),

  deleteSprint: (id) =>
    set((state) => ({
      sprints: state.sprints.filter((s) => s.id !== id),
    })),

  // Task actions
  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, { ...task, id: `task-${Date.now()}` }],
    })),

  updateTask: (id, updates) =>
    set((state) => ({
      tasks: state.tasks.map((t) => (t.id === id ? { ...t, ...updates } : t)),
    })),

  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((t) => t.id !== id),
    })),

  // Team member actions
  addTeamMember: (member) =>
    set((state) => ({
      teamMembers: [...state.teamMembers, { ...member, id: `member-${Date.now()}` }],
    })),

  updateTeamMember: (id, updates) =>
    set((state) => ({
      teamMembers: state.teamMembers.map((m) => (m.id === id ? { ...m, ...updates } : m)),
    })),

  removeTeamMember: (id) =>
    set((state) => ({
      teamMembers: state.teamMembers.filter((m) => m.id !== id),
    })),

  // Project actions
  addProject: (project) =>
    set((state) => ({
      projects: [...state.projects, { ...project, id: `project-${Date.now()}` }],
    })),

  updateProject: (id, updates) =>
    set((state) => ({
      projects: state.projects.map((p) => (p.id === id ? { ...p, ...updates } : p)),
    })),

  deleteProject: (id) =>
    set((state) => ({
      projects: state.projects.filter((p) => p.id !== id),
    })),
}))
