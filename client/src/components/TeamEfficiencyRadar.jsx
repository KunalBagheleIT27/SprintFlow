import React from 'react'

export default function TeamEfficiencyRadar() {
  return (
    <div className="bg-surface-container-lowest p-gutter rounded-xl border border-outline-variant shadow-sm">
      <h3 className="font-title-sm text-title-sm text-on-background mb-1">Team Efficiency Radar</h3>
      <p className="font-label-md text-label-md text-on-surface-variant mb-6">Balance across core agile metrics</p>

      <div className="flex justify-center items-center py-4">
        <svg className="w-48 h-48" viewBox="0 0 200 200">
          {/* Background Circles */}
          <circle
            className="fill-none stroke-outline-variant"
            cx="100"
            cy="100"
            r="80"
            strokeDasharray="2 2"
            opacity="1"
          />
          <circle
            className="fill-none stroke-outline-variant opacity-50"
            cx="100"
            cy="100"
            r="60"
            strokeDasharray="2 2"
          />
          <circle
            className="fill-none stroke-outline-variant opacity-30"
            cx="100"
            cy="100"
            r="40"
            strokeDasharray="2 2"
          />

          {/* Axis Lines */}
          <line className="stroke-outline-variant opacity-40" x1="100" y1="20" x2="100" y2="180" />
          <line className="stroke-outline-variant opacity-40" x1="20" y1="100" x2="180" y2="100" />

          {/* Radar Polygon */}
          <polygon className="fill-primary/10 stroke-primary" points="100,40 160,100 130,160 60,140 30,80" strokeWidth="2" />

          {/* Data Points */}
          <circle cx="100" cy="40" fill="#004ac6" r="3" />
          <circle cx="160" cy="100" fill="#004ac6" r="3" />
          <circle cx="130" cy="160" fill="#004ac6" r="3" />
          <circle cx="60" cy="140" fill="#004ac6" r="3" />
          <circle cx="30" cy="80" fill="#004ac6" r="3" />

          {/* Labels */}
          <text
            className="font-label-xs text-[10px] fill-on-surface-variant uppercase"
            textAnchor="middle"
            x="100"
            y="15"
            fontWeight="600"
          >
            Quality
          </text>
          <text
            className="font-label-xs text-[10px] fill-on-surface-variant uppercase"
            textAnchor="end"
            x="190"
            y="105"
            fontWeight="600"
          >
            Speed
          </text>
          <text
            className="font-label-xs text-[10px] fill-on-surface-variant uppercase"
            textAnchor="middle"
            x="135"
            y="175"
            fontWeight="600"
          >
            Predict
          </text>
          <text
            className="font-label-xs text-[10px] fill-on-surface-variant uppercase"
            textAnchor="middle"
            x="40"
            y="155"
            fontWeight="600"
          >
            Sync
          </text>
          <text
            className="font-label-xs text-[10px] fill-on-surface-variant uppercase"
            textAnchor="start"
            x="10"
            y="75"
            fontWeight="600"
          >
            Docs
          </text>
        </svg>
      </div>

      {/* Stats */}
      <ul className="mt-4 space-y-2">
        <li className="flex justify-between items-center text-label-md">
          <span className="text-on-surface-variant">Code Quality</span>
          <span className="font-bold text-on-surface">92%</span>
        </li>
        <li className="flex justify-between items-center text-label-md">
          <span className="text-on-surface-variant">Documentation</span>
          <span className="font-bold text-on-surface">64%</span>
        </li>
      </ul>
    </div>
  )
}
