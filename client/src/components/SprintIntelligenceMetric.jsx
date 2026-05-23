import React from 'react'

export default function SprintIntelligenceMetric({ label, icon, value, trend, trendIcon, trendColor, subtitle }) {
  return (
    <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between hover:border-primary transition-all">
      <div className="flex justify-between items-start">
        <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">{label}</span>
        <span className="material-symbols-outlined text-primary" data-icon={icon}>
          {icon}
        </span>
      </div>
      <div className="mt-4">
        <p className="font-display-lg text-display-lg text-on-background">{value}</p>
        {trend && (
          <p className={`font-label-md text-label-md flex items-center gap-1 mt-1 ${trendColor}`}>
            <span className="material-symbols-outlined text-[16px]" data-icon={trendIcon}>
              {trendIcon}
            </span>
            {trend}
          </p>
        )}
        {label === 'Completion Rate' && (
          <div className="w-full bg-surface-container h-1.5 rounded-full mt-2 overflow-hidden">
            <div className="bg-tertiary h-full rounded-full" style={{ width: '94%' }}></div>
          </div>
        )}
        {subtitle && <p className="font-label-md text-label-md text-on-surface-variant mt-1 italic">{subtitle}</p>}
      </div>
    </div>
  )
}
