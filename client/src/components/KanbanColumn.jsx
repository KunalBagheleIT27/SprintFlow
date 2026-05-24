import React from 'react'
import TaskCard from './TaskCard'

export default function KanbanColumn({ title, count, tasks, isDone = false, onTaskClick, onAddClick, onEdit, onDelete, onMove }) {
  return (
    <div className="w-full flex flex-col gap-3">
      {/* Column Header */}
      <div className="flex items-center justify-between px-2 py-1">
        <div className="flex items-center gap-2">
          <span className="text-label-xs font-label-xs uppercase tracking-wider text-outline">
            {title}
          </span>
          <span className="bg-surface-container text-on-secondary-container px-2 py-0.5 rounded-full text-[10px] font-bold">
            {count}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {title === 'Todo' && (
            <button onClick={onAddClick} className="material-symbols-outlined text-outline cursor-pointer hover:text-on-surface transition-colors">add</button>
          )}
          <span className="material-symbols-outlined text-outline cursor-pointer hover:text-on-surface transition-colors">
            {isDone ? 'done_all' : 'more_horiz'}
          </span>
        </div>
      </div>

      {/* Column Content */}
      <div
        className={`kanban-column flex flex-col gap-3 overflow-y-auto no-scrollbar ${
          isDone ? 'opacity-60 grayscale-[0.5]' : ''
        }`}
        style={{ maxHeight: 'calc(100vh - 16rem)' }}
      >
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onClick={() => onTaskClick ? onTaskClick(task) : console.log('Task clicked', task.id)}
            onEdit={() => onEdit && onEdit(task)}
            onDelete={() => onDelete && onDelete(task.id)}
            onMove={(to) => onMove && onMove(task.id, to)}
          />
        ))}
      </div>
    </div>
  )
}
