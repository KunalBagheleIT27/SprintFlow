import React from 'react'

export default function TaskCard({ task, onClick, onEdit, onDelete, onMove }) {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return { bg: 'text-error', icon: 'keyboard_double_arrow_up' }
      case 'Medium':
        return { bg: 'text-tertiary', icon: 'keyboard_arrow_up' }
      case 'Low':
        return { bg: 'text-secondary', icon: 'remove' }
      default:
        return { bg: 'text-secondary', icon: 'remove' }
    }
  }

  const priorityInfo = getPriorityColor(task.priority)

  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <div
      className="task-card bg-surface-container-lowest border border-outline-variant rounded-lg p-3 shadow-sm transition-all cursor-pointer hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary relative"
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-2">
        <span className="font-code text-code text-outline text-[11px]">{task.id}</span>
        <div className="flex items-center gap-1">
          <span
            className={`material-symbols-outlined text-[14px] ${priorityInfo.bg}`}
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            {priorityInfo.icon}
          </span>
          <span className={`text-label-xs font-label-xs ${priorityInfo.bg}`}>{task.priority}</span>
          <button onClick={(e) => { e.stopPropagation(); setMenuOpen((s) => !s) }} className="ml-2 p-1 rounded hover:bg-surface-container-lowest">
            <span className="material-symbols-outlined text-[16px]">more_vert</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-8 right-3 bg-surface border border-outline-variant rounded shadow-md z-20 w-40">
          <button onClick={(e) => { e.stopPropagation(); setMenuOpen(false); onEdit && onEdit() }} className="w-full text-left px-3 py-2 hover:bg-surface-container-low">Edit</button>
          <button onClick={(e) => { e.stopPropagation(); setMenuOpen(false); onDelete && onDelete() }} className="w-full text-left px-3 py-2 hover:bg-surface-container-low">Delete</button>
          <div className="border-t border-outline-variant"></div>
          <button onClick={(e) => { e.stopPropagation(); setMenuOpen(false); onMove && onMove('inProgress') }} className="w-full text-left px-3 py-2 hover:bg-surface-container-low">Move to In Progress</button>
          <button onClick={(e) => { e.stopPropagation(); setMenuOpen(false); onMove && onMove('review') }} className="w-full text-left px-3 py-2 hover:bg-surface-container-low">Move to Review</button>
        </div>
      )}

      {/* Title */}
      <h3 onClick={onClick} className="text-body-base font-medium text-on-surface leading-tight mb-3">
        {task.title}
      </h3>

      {/* Tags */}
      <div className="flex gap-1.5 mb-3 flex-wrap">
        {task.tags.map((tag, idx) => (
          <span
            key={idx}
            className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
              tag.color === 'primary'
                ? 'bg-primary/10 text-primary'
                : tag.color === 'tertiary'
                  ? 'bg-tertiary/10 text-tertiary'
                  : tag.color === 'error'
                    ? 'bg-error/10 text-error'
                    : 'bg-surface-variant text-on-surface-variant'
            }`}
          >
            {tag.label}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto">
        {/* Comments & Attachments */}
        <div className="flex items-center gap-3 text-outline">
          {task.comments > 0 && (
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">chat_bubble</span>
              <span className="text-[11px]">{task.comments}</span>
            </div>
          )}
          {task.attachments > 0 && (
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">attach_file</span>
              <span className="text-[11px]">{task.attachments}</span>
            </div>
          )}
        </div>

        {/* Due date & Assignee */}
        <div className="flex items-center gap-2">
          <span
            className={`text-[11px] ${
              task.dueDate === 'Today' ? 'text-error font-medium' : 'text-outline'
            }`}
          >
            {task.dueDate}
          </span>
          {task.assigneeAvatar && (
            <img
              alt="Assignee Avatar"
              className="w-6 h-6 rounded-full border border-outline-variant"
              src={task.assigneeAvatar}
            />
          )}
        </div>
      </div>
    </div>
  )
}
