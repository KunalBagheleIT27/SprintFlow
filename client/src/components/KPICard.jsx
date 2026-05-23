import React from 'react'

export default function KPICard({ icon, label, value, trend, trendType = 'positive' }) {
  const trendColor = trendType === 'positive' ? 'text-tertiary' : trendType === 'neutral' ? 'text-on-surface-variant' : 'text-error'

  return (
    <div className="bg-white p-5 rounded-xl border border-outline-variant flex flex-col justify-between hover:border-primary transition-all group">
      <div className="flex justify-between items-start">
        <div className="p-2 rounded bg-surface-container group-hover:bg-primary/10 transition-colors">
          <span className="material-symbols-outlined text-primary" data-icon={icon}>
            {icon}
          </span>
        </div>
        <span className={`${trendColor} font-label-md text-label-md flex items-center`}>
          {trend}
        </span>
      </div>
      <div className="mt-4">
        <p className="text-on-surface-variant font-label-md text-label-md">{label}</p>
        <h3 className="text-3xl font-bold text-on-surface mt-1">{value}</h3>
      </div>
    </div>
  )
}
