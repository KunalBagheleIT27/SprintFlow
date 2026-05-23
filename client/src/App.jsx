import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import SprintBoard from './components/SprintBoard'
import AnalyticsDashboard from './components/AnalyticsDashboard'
import SprintIntelligence from './components/SprintIntelligence'

export default function App() {
  const [currentPage, setCurrentPage] = useState('sprint-intelligence') // 'sprint-board', 'analytics', or 'sprint-intelligence'

  return (
    <div className="flex h-screen w-screen bg-background overflow-hidden">
      {/* SIDEBAR */}
      <Sidebar activePage={currentPage === 'sprint-intelligence' ? 'analytics' : currentPage} />

      {/* MAIN CONTENT AREA */}
      <main className="ml-sidebar-width h-screen flex flex-col flex-grow">
        {/* TOP NAVBAR */}
        <Navbar />

        {/* CONTENT CONTAINER */}
        <div className="flex-grow p-gutter overflow-y-auto overflow-x-hidden flex flex-col">
          {currentPage === 'sprint-board' && <SprintBoard />}
          {currentPage === 'analytics' && <AnalyticsDashboard />}
          {currentPage === 'sprint-intelligence' && <SprintIntelligence />}
        </div>
      </main>
    </div>
  )
}
