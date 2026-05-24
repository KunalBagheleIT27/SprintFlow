import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import SprintBoard from './components/SprintBoard'
import AnalyticsDashboard from './components/AnalyticsDashboard'
import SprintIntelligence from './components/SprintIntelligence'
import Tasks from './components/Tasks'
import Team from './components/Team'
import Dashboard from './components/Dashboard'
import PlaceholderPage from './components/PlaceholderPage'
import Settings from './components/Settings'
import Projects from './components/Projects'
import ProjectDetail from './components/ProjectDetail'
import Login from './components/Login'
import Signup from './components/Signup'

function DashboardLayout() {
  const [currentPage, setCurrentPage] = useState('dashboard')

  return (
    <div className="flex h-screen w-screen bg-background overflow-hidden">
      {/* SIDEBAR — fixed, 240px wide */}
      <Sidebar activePage={currentPage} onPageChange={setCurrentPage} />

      {/* MAIN CONTENT — offset by sidebar width */}
      <main className="flex-1 ml-sidebar-width flex flex-col h-screen min-w-0">
        {/* TOP NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden bg-background">
          <div className="p-gutter max-w-container-max mx-auto w-full min-h-full">
            {currentPage === 'dashboard'         && <Dashboard />}
            {currentPage === 'sprint-board'      && <SprintBoard />}
            {currentPage === 'analytics'         && <AnalyticsDashboard />}
            {currentPage === 'sprint-intelligence' && <SprintIntelligence />}
            {currentPage === 'tasks'             && <Tasks />}
            {currentPage === 'team'              && <Team />}
            {currentPage === 'projects'          && <Projects />}
            {currentPage === 'settings'          && <Settings />}
          </div>
        </div>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<DashboardLayout />} />
      <Route path="/dashboard/project/:projectId" element={<ProjectDetailLayout />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

function ProjectDetailLayout() {
  return (
    <div className="flex h-screen w-screen bg-background overflow-hidden">
      <Sidebar activePage="projects" onPageChange={() => {}} />
      <main className="flex-1 ml-sidebar-width flex flex-col h-screen min-w-0">
        <Navbar />
        <div className="flex-1 overflow-y-auto overflow-x-hidden bg-background">
          <div className="p-gutter max-w-container-max mx-auto w-full min-h-full">
            <ProjectDetail />
          </div>
        </div>
      </main>
    </div>
  )
}
