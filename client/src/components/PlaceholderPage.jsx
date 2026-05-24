import React from 'react'

export default function PlaceholderPage({ title, icon }) {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[500px] gap-4">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
        <span className="material-symbols-outlined text-4xl text-primary">{icon}</span>
      </div>
      <h2 className="text-headline-md font-bold text-on-surface">{title} Page</h2>
      <p className="text-body-base text-on-surface-variant">Coming soon...</p>
    </div>
  )
}
