import React from 'react'

export default function Navbar() {
  return (
    <header className="sticky top-0 w-full z-40 bg-surface dark:bg-surface-dim border-b border-outline-variant dark:border-outline h-16 flex justify-between items-center px-gutter">
      {/* Search */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">
            search
          </span>
          <input
            type="text"
            placeholder="Search tasks..."
            className="bg-surface-container-low border-none rounded-lg pl-10 pr-4 py-1.5 text-body-sm w-64 focus:ring-2 focus:ring-primary/20 outline-none"
          />
        </div>
      </div>

      {/* Right side controls */}
      <div className="flex items-center gap-6">
        <button className="bg-primary text-on-primary font-label-md text-label-md px-4 py-1.5 rounded-lg active:opacity-80 transition-opacity hover:opacity-90">
          Create
        </button>
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-on-surface transition-colors">
            notifications
          </span>
          <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-on-surface transition-colors">
            apps
          </span>
          <div className="w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant overflow-hidden">
            <img
              alt="User Profile"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxLZCoJ4B8EylanAFsTGGKaXVF86WAdYiuiaNMEFAyZsgLh8Ob2Q9aWwiMmXL7GmlHmoN5l6t_6uqolOQbFTF2z9A67UARBc3oZK9Uh_kHFP1TGpi-LKaQYXB06cePoWBEiWw6NvzqjUW3A1ZTVsYtKJOjqDqnoiUNlTzH_gFAFVAppI1wF4ccJBJJaUE8Ih2lLJcCmr-VvyU9ZRsKgAa8xIhor7J3Bo2bzAXCtDTwkjdWG-d0d3S-yLKhbGcO7HgY1iXjeuAlpi0"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
