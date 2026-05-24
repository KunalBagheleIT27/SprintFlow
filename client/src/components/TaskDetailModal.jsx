import React from 'react'
import Modal from './Modal'

export default function TaskDetailModal({ isOpen, onClose, task }) {
  if (!task) return null

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Task ${task.id}`} size="md">
      <div className="space-y-4">
        <h3 className="text-title-sm font-bold text-on-surface">{task.title}</h3>

        <div className="flex items-center gap-3 flex-wrap">
          {task.tags.map((tag, i) => (
            <span key={i} className="px-2 py-1 rounded text-sm font-semibold bg-surface-variant text-on-surface-variant">
              {tag.label}
            </span>
          ))}
        </div>

        <p className="text-body-sm text-on-surface-variant">Priority: <span className="font-medium text-on-surface">{task.priority}</span></p>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined">chat_bubble</span>
            <span>{task.comments}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined">attach_file</span>
            <span>{task.attachments}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-label-xs text-on-surface-variant">Due</p>
            <p className="font-medium">{task.dueDate}</p>
          </div>
          <div>
            <p className="text-label-xs text-on-surface-variant">Assignee</p>
            {task.assigneeAvatar ? (
              <img src={task.assigneeAvatar} alt="Assignee" className="w-8 h-8 rounded-full border" />
            ) : (
              <span className="text-on-surface-variant">Unassigned</span>
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <button onClick={onClose} className="px-4 py-2 rounded-lg bg-surface-container-highest border border-outline-variant hover:bg-surface-container transition-colors">
            Close
          </button>
        </div>
      </div>
    </Modal>
  )
}
