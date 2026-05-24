import React, { useState } from 'react'

const tabs = [
  { id: 'profile', label: 'Profile', icon: 'person' },
  { id: 'workspace', label: 'Workspace', icon: 'apartment' },
  { id: 'notifications', label: 'Notifications', icon: 'notifications_active' },
  { id: 'security', label: 'Security', icon: 'shield' },
]

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile')
  const [profileData, setProfileData] = useState({
    fullName: 'Alex Rivera',
    email: 'alex.rivera@sprintflow.ai',
    biography: 'Lead engineer focused on agile delivery systems and AI-driven automation.',
  })
  const [workspaceData, setWorkspaceData] = useState({
    workspaceName: 'SprintFlow HQ',
    workspaceSlug: 'hq-team',
    dataRetention: '12 Months',
  })
  const [notifications, setNotifications] = useState({
    emailDigests: true,
    slackIntegration: false,
    projectAlerts: true,
  })

  const handleProfileChange = (e) => {
    const { name, value } = e.target
    setProfileData((prev) => ({ ...prev, [name]: value }))
  }

  const handleWorkspaceChange = (e) => {
    const { name, value } = e.target
    setWorkspaceData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="text-headline-md font-bold text-on-surface">System Settings</h2>
        <p className="text-body-sm text-on-surface-variant mt-2 max-w-2xl">
          Manage your personal preferences, workspace configuration, and platform security protocols.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Tabs - Left Sidebar */}
        <div className="col-span-12 lg:col-span-3">
          <div className="space-y-2 bg-surface border border-outline-variant rounded-2xl p-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary-container text-primary font-bold shadow-sm'
                    : 'text-on-surface-variant hover:bg-surface-container-lowest'
                }`}
              >
                <span className="material-symbols-outlined text-lg">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area - Right */}
        <div className="col-span-12 lg:col-span-9">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="bg-surface border border-outline-variant rounded-2xl p-8 space-y-8">
              <div>
                <h3 className="text-title-md font-bold text-on-surface">Public Profile</h3>
                <p className="text-body-sm text-on-surface-variant mt-1">
                  Information that will be visible to other team members within the SprintFlow AI ecosystem.
                </p>
              </div>

              {/* Avatar Section */}
              <div className="flex items-center gap-8 border-b border-outline-variant pb-8">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-5xl text-primary">account_circle</span>
                </div>

                <div className="flex-1">
                  <h4 className="text-label-md font-bold text-on-surface mb-3">Profile Avatar</h4>

                  <div className="flex gap-3">
                    <button className="bg-primary text-on-primary px-4 py-2 rounded-lg text-label-md font-bold hover:opacity-90 transition-all">
                      Change Image
                    </button>
                    <button className="border border-outline-variant text-on-surface px-4 py-2 rounded-lg text-label-md font-bold hover:bg-surface-container-lowest transition-all">
                      Remove
                    </button>
                  </div>

                  <p className="text-label-xs text-on-surface-variant mt-2">JPG, PNG or GIF. Max size 800K.</p>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-label-md font-bold text-on-surface mb-2">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={profileData.fullName}
                    onChange={handleProfileChange}
                    className="w-full border border-outline-variant rounded-xl px-4 py-3 text-body-base outline-none focus:ring-2 focus:ring-primary/20 bg-surface-container-lowest transition-all"
                  />
                </div>

                <div>
                  <label className="block text-label-md font-bold text-on-surface mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleProfileChange}
                    className="w-full border border-outline-variant rounded-xl px-4 py-3 text-body-base outline-none focus:ring-2 focus:ring-primary/20 bg-surface-container-lowest transition-all"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-label-md font-bold text-on-surface mb-2">Biography</label>
                  <textarea
                    name="biography"
                    rows={4}
                    value={profileData.biography}
                    onChange={handleProfileChange}
                    className="w-full border border-outline-variant rounded-xl px-4 py-3 text-body-base outline-none focus:ring-2 focus:ring-primary/20 bg-surface-container-lowest transition-all resize-none"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 pt-4">
                <button className="border border-outline-variant text-on-surface px-6 py-3 rounded-xl text-label-md font-bold hover:bg-surface-container-lowest transition-all">
                  Cancel
                </button>
                <button className="bg-primary text-on-primary px-6 py-3 rounded-xl text-label-md font-bold hover:opacity-90 transition-all">
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {/* Workspace Tab */}
          {activeTab === 'workspace' && (
            <div className="bg-surface border border-outline-variant rounded-2xl p-8 space-y-8">
              <div>
                <h3 className="text-title-md font-bold text-on-surface">Workspace Configuration</h3>
                <p className="text-body-sm text-on-surface-variant mt-1">Manage workspace settings and preferences.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-label-md font-bold text-on-surface mb-2">Workspace Name</label>
                  <input
                    type="text"
                    name="workspaceName"
                    value={workspaceData.workspaceName}
                    onChange={handleWorkspaceChange}
                    className="w-full border border-outline-variant rounded-xl px-4 py-3 text-body-base outline-none focus:ring-2 focus:ring-primary/20 bg-surface-container-lowest transition-all"
                  />
                </div>

                <div>
                  <label className="block text-label-md font-bold text-on-surface mb-2">Workspace Slug</label>
                  <div className="flex">
                    <span className="bg-surface-container-lowest border border-r-0 border-outline-variant px-4 py-3 rounded-l-xl text-body-sm text-on-surface-variant font-bold">
                      sprintflow.ai/
                    </span>
                    <input
                      type="text"
                      name="workspaceSlug"
                      value={workspaceData.workspaceSlug}
                      onChange={handleWorkspaceChange}
                      className="flex-1 border border-outline-variant rounded-r-xl px-4 py-3 text-body-base outline-none focus:ring-2 focus:ring-primary/20 bg-surface-container-lowest transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 flex justify-between items-start">
                <div>
                  <h4 className="text-label-md font-bold text-on-surface">Data Retention Policy</h4>
                  <p className="text-body-sm text-on-surface-variant mt-1">Control how long inactive data is stored.</p>
                </div>
                <select
                  value={workspaceData.dataRetention}
                  onChange={(e) => setWorkspaceData((prev) => ({ ...prev, dataRetention: e.target.value }))}
                  className="border border-outline-variant rounded-lg px-4 py-2 text-body-sm outline-none focus:ring-2 focus:ring-primary/20 bg-surface-container-lowest transition-all"
                >
                  <option>12 Months</option>
                  <option>24 Months</option>
                  <option>Forever</option>
                </select>
              </div>

              <div className="flex justify-end">
                <button className="bg-primary text-on-primary px-6 py-3 rounded-xl text-label-md font-bold hover:opacity-90 transition-all">
                  Update Workspace
                </button>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div className="bg-surface border border-outline-variant rounded-2xl p-8 space-y-6">
              <div>
                <h3 className="text-title-md font-bold text-on-surface">Notification Preferences</h3>
                <p className="text-body-sm text-on-surface-variant mt-1">Manage how and when you receive notifications.</p>
              </div>

              {[
                { key: 'emailDigests', title: 'Email Digests', desc: 'Receive daily summaries of team activity.' },
                { key: 'slackIntegration', title: 'Slack Integration', desc: 'Push important alerts to your Slack workspace.' },
                { key: 'projectAlerts', title: 'Project Health Alerts', desc: 'Get instant notifications for sprint updates.' },
              ].map((item) => (
                <div key={item.key} className="flex justify-between items-center border-b border-outline-variant pb-5 last:border-b-0">
                  <div>
                    <h4 className="text-label-md font-bold text-on-surface">{item.title}</h4>
                    <p className="text-body-sm text-on-surface-variant mt-1">{item.desc}</p>
                  </div>

                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={notifications[item.key]}
                      onChange={(e) => setNotifications((prev) => ({ ...prev, [item.key]: e.target.checked }))}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-outline-variant rounded-full peer peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface after:w-5 after:h-5 after:rounded-full after:transition-all peer-checked:after:translate-x-5"></div>
                  </label>
                </div>
              ))}

              <div className="flex justify-end pt-4">
                <button className="bg-primary text-on-primary px-6 py-3 rounded-xl text-label-md font-bold hover:opacity-90 transition-all">
                  Apply Preferences
                </button>
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div className="bg-surface border border-outline-variant rounded-2xl p-8 space-y-8">
              <div>
                <h3 className="text-title-md font-bold text-on-surface">Security & Access</h3>
                <p className="text-body-sm text-on-surface-variant mt-1">Protect your account and manage active sessions.</p>
              </div>

              {/* 2FA Alert */}
              <div className="bg-error/10 border border-error/30 p-6 rounded-2xl flex gap-4">
                <span className="material-symbols-outlined text-2xl text-error flex-shrink-0 mt-0.5">warning</span>

                <div className="flex-1">
                  <h4 className="text-label-md font-bold text-error">Two-Factor Authentication</h4>
                  <p className="text-body-sm text-error/80 mt-2">Enable 2FA to add an extra layer of security to your account.</p>
                  <button className="mt-4 bg-error text-on-error px-4 py-2 rounded-lg text-label-md font-bold hover:opacity-90 transition-all">
                    Enable Now
                  </button>
                </div>
              </div>

              {/* Active Sessions */}
              <div>
                <h4 className="text-label-md font-bold text-on-surface mb-4">Recent Active Sessions</h4>

                <div className="space-y-3">
                  <div className="flex justify-between items-center border border-outline-variant rounded-xl p-4 bg-surface-container-lowest">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-2xl text-on-surface-variant">computer</span>
                      <div>
                        <p className="text-label-md font-bold text-on-surface">macOS • San Francisco</p>
                        <p className="text-body-sm text-on-surface-variant">Chrome • Active now</p>
                      </div>
                    </div>
                    <span className="bg-tertiary-container text-tertiary px-3 py-1 rounded-full text-label-xs font-bold">
                      Current
                    </span>
                  </div>

                  <div className="flex justify-between items-center border border-outline-variant rounded-xl p-4">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-2xl text-on-surface-variant">smartphone</span>
                      <div>
                        <p className="text-label-md font-bold text-on-surface">iPhone 15 Pro • London</p>
                        <p className="text-body-sm text-on-surface-variant">SprintFlow App • 2 hours ago</p>
                      </div>
                    </div>
                    <button className="text-primary text-label-md font-bold hover:opacity-80 transition-all">Log out</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
