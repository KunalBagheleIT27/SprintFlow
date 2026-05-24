import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const tabs = [
  { id: 'profile', label: 'Profile', icon: 'person' },
  { id: 'workspace', label: 'Workspace', icon: 'apartment' },
  { id: 'notifications', label: 'Notifications', icon: 'notifications_active' },
  { id: 'security', label: 'Security', icon: 'shield' },
]

const quickStats = [
  { label: 'Account Status', value: 'Verified', icon: 'verified', tone: 'badge-success' },
  { label: 'Active Sessions', value: '2 Devices', icon: 'devices', tone: 'badge-primary' },
  { label: 'Alerts Enabled', value: '3 Rules', icon: 'notifications_active', tone: 'badge-warning' },
]

export default function Settings() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('profile')
  const [saveMessage, setSaveMessage] = useState('')
  const [errors, setErrors] = useState({})
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

  const activeTabMeta = useMemo(() => tabs.find((tab) => tab.id === activeTab) || tabs[0], [activeTab])

  const handleProfileChange = (e) => {
    const { name, value } = e.target
    setProfileData((prev) => ({ ...prev, [name]: value }))
  }

  const handleWorkspaceChange = (e) => {
    const { name, value } = e.target
    setWorkspaceData((prev) => ({ ...prev, [name]: value }))
  }

  const showSaved = (message) => {
    setSaveMessage(message)
    window.clearTimeout(showSaved.timer)
    showSaved.timer = window.setTimeout(() => setSaveMessage(''), 2200)
  }

  const validateProfile = () => {
    const nextErrors = {}
    if (!profileData.fullName.trim()) nextErrors.fullName = 'Full name is required.'
    if (!profileData.email.trim()) nextErrors.email = 'Email address is required.'
    if (profileData.email && !/\S+@\S+\.\S+/.test(profileData.email)) nextErrors.email = 'Enter a valid email address.'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSaveProfile = () => {
    if (!validateProfile()) return
    showSaved('Profile updated successfully.')
  }

  const handleSaveWorkspace = () => {
    showSaved('Workspace settings updated.')
  }

  const handleSaveNotifications = () => {
    showSaved('Notification preferences saved.')
  }

  const handleEnableSecurity = () => {
    showSaved('2FA setup started. Follow the next steps to secure your account.')
  }

  return (
    <div className="w-full space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-on-surface-variant">
            <button onClick={() => navigate(-1)} className="inline-flex items-center gap-1 text-primary hover:opacity-80 transition-colors">
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              Back
            </button>
            <span>/</span>
            <span>Workspace</span>
            <span>/</span>
            <span className="text-on-surface font-semibold">Settings</span>
          </div>
          <div>
            <h2 className="text-headline-md font-bold text-on-surface">System Settings</h2>
            <p className="text-body-sm text-on-surface-variant mt-1 max-w-2xl">
              Manage your profile, workspace preferences, notification rules, and security controls from one place.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {quickStats.map((item) => (
            <div key={item.label} className="card-premium px-4 py-3 min-w-[150px]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[18px]">{item.icon}</span>
                <span className="text-xs font-semibold text-on-surface-variant">{item.label}</span>
              </div>
              <div className={`mt-2 inline-flex items-center ${item.tone} text-xs font-semibold`}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      {saveMessage && (
        <div className="rounded-2xl border border-success/20 bg-success/10 px-4 py-3 text-success font-medium">
          {saveMessage}
        </div>
      )}

      <div className="grid grid-cols-12 gap-6">
        <aside className="col-span-12 lg:col-span-3">
          <div className="card-premium p-3 sticky top-6">
            <div className="px-3 py-2 mb-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Sections</p>
            </div>
            <div className="space-y-2">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left ${
                      isActive
                        ? 'bg-primary text-white shadow-md'
                        : 'text-on-surface-variant hover:bg-surface-hover hover:text-on-surface'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
                    <span className="font-medium">{tab.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </aside>

        <main className="col-span-12 lg:col-span-9">
          <div className="card-premium p-6 sm:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="text-title-md font-bold text-on-surface">{activeTabMeta.label}</h3>
                  <p className="text-body-sm text-on-surface-variant mt-1">
                    {activeTab === 'profile' && 'Update your public identity and avatar preferences.'}
                    {activeTab === 'workspace' && 'Control your workspace name, slug, and retention policy.'}
                    {activeTab === 'notifications' && 'Choose how you want SprintFlow to notify you.'}
                    {activeTab === 'security' && 'Review sessions and strengthen account protection.'}
                  </p>
                </div>
                <span className="badge-primary">{activeTabMeta.label}</span>
              </div>

              {activeTab === 'profile' && (
                <section className="space-y-6">
                  <div className="flex items-center gap-5 rounded-2xl border border-outline-variant bg-surface-container-lowest p-5">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-4xl text-primary">account_circle</span>
                    </div>
                    <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div>
                        <h4 className="text-label-md font-bold text-on-surface">Profile Avatar</h4>
                        <p className="text-sm text-on-surface-variant">JPG, PNG or GIF. Max size 800KB.</p>
                      </div>
                      <div className="flex gap-3">
                        <button className="btn-primary">Change Image</button>
                        <button className="btn-secondary">Remove</button>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block mb-2">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        value={profileData.fullName}
                        onChange={handleProfileChange}
                        className="input-field"
                      />
                      {errors.fullName && <p className="mt-2 text-sm text-error">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={profileData.email}
                        onChange={handleProfileChange}
                        className="input-field"
                      />
                      {errors.email && <p className="mt-2 text-sm text-error">{errors.email}</p>}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block mb-2">Biography</label>
                      <textarea
                        name="biography"
                        rows={4}
                        value={profileData.biography}
                        onChange={handleProfileChange}
                        className="textarea-field"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 pt-2">
                    <button type="button" className="btn-secondary" onClick={() => setProfileData((prev) => prev)}>
                      Cancel
                    </button>
                    <button type="button" className="btn-primary" onClick={handleSaveProfile}>
                      Save Changes
                    </button>
                  </div>
                </section>
              )}

              {activeTab === 'workspace' && (
                <section className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block mb-2">Workspace Name</label>
                      <input
                        type="text"
                        name="workspaceName"
                        value={workspaceData.workspaceName}
                        onChange={handleWorkspaceChange}
                        className="input-field"
                      />
                    </div>

                    <div>
                      <label className="block mb-2">Workspace Slug</label>
                      <div className="flex">
                        <span className="bg-surface-container-lowest border border-r-0 border-border px-4 py-3 rounded-l-xl text-sm text-on-surface-variant font-semibold">
                          sprintflow.ai/
                        </span>
                        <input
                          type="text"
                          name="workspaceSlug"
                          value={workspaceData.workspaceSlug}
                          onChange={handleWorkspaceChange}
                          className="flex-1 input-field rounded-l-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h4 className="text-label-md font-bold text-on-surface">Data Retention Policy</h4>
                      <p className="text-sm text-on-surface-variant mt-1">Control how long inactive data is stored.</p>
                    </div>
                    <select
                      value={workspaceData.dataRetention}
                      onChange={(e) => setWorkspaceData((prev) => ({ ...prev, dataRetention: e.target.value }))}
                      className="input-field sm:w-48"
                    >
                      <option>12 Months</option>
                      <option>24 Months</option>
                      <option>Forever</option>
                    </select>
                  </div>

                  <div className="flex justify-end">
                    <button type="button" className="btn-primary" onClick={handleSaveWorkspace}>
                      Update Workspace
                    </button>
                  </div>
                </section>
              )}

              {activeTab === 'notifications' && (
                <section className="space-y-4">
                  {[
                    { key: 'emailDigests', title: 'Email Digests', desc: 'Receive daily summaries of team activity.' },
                    { key: 'slackIntegration', title: 'Slack Integration', desc: 'Push important alerts to your Slack workspace.' },
                    { key: 'projectAlerts', title: 'Project Health Alerts', desc: 'Get instant notifications for sprint updates.' },
                  ].map((item) => (
                    <div
                      key={item.key}
                      className="flex items-center justify-between gap-4 border border-outline-variant rounded-2xl p-5 bg-surface-container-lowest"
                    >
                      <div>
                        <h4 className="text-label-md font-bold text-on-surface">{item.title}</h4>
                        <p className="text-sm text-on-surface-variant mt-1">{item.desc}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer shrink-0">
                        <input
                          type="checkbox"
                          checked={notifications[item.key]}
                          onChange={(e) => setNotifications((prev) => ({ ...prev, [item.key]: e.target.checked }))}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-outline-variant rounded-full peer peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:w-5 after:h-5 after:rounded-full after:transition-all peer-checked:after:translate-x-5"></div>
                      </label>
                    </div>
                  ))}

                  <div className="flex justify-end pt-2">
                    <button type="button" className="btn-primary" onClick={handleSaveNotifications}>
                      Apply Preferences
                    </button>
                  </div>
                </section>
              )}

              {activeTab === 'security' && (
                <section className="space-y-6">
                  <div className="rounded-2xl border border-warning/30 bg-warning/10 p-5 flex gap-4">
                    <span className="material-symbols-outlined text-warning text-2xl flex-shrink-0 mt-0.5">warning</span>
                    <div className="flex-1">
                      <h4 className="text-label-md font-bold text-warning">Two-Factor Authentication</h4>
                      <p className="text-sm text-on-surface-variant mt-2">
                        Enable 2FA to add an extra layer of protection to your account.
                      </p>
                      <button className="btn-primary mt-4" onClick={handleEnableSecurity}>
                        Enable Now
                      </button>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-label-md font-bold text-on-surface mb-4">Recent Active Sessions</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-4 border border-outline-variant rounded-2xl p-4 bg-surface-container-lowest">
                        <div className="flex items-center gap-4">
                          <span className="material-symbols-outlined text-2xl text-on-surface-variant">computer</span>
                          <div>
                            <p className="text-label-md font-bold text-on-surface">macOS • San Francisco</p>
                            <p className="text-sm text-on-surface-variant">Chrome • Active now</p>
                          </div>
                        </div>
                        <span className="badge-success">Current</span>
                      </div>

                      <div className="flex items-center justify-between gap-4 border border-outline-variant rounded-2xl p-4">
                        <div className="flex items-center gap-4">
                          <span className="material-symbols-outlined text-2xl text-on-surface-variant">smartphone</span>
                          <div>
                            <p className="text-label-md font-bold text-on-surface">iPhone 15 Pro • London</p>
                            <p className="text-sm text-on-surface-variant">SprintFlow App • 2 hours ago</p>
                          </div>
                        </div>
                        <button className="btn-ghost px-0 text-primary" onClick={() => showSaved('Logged out from the selected session.')}>Log out</button>
                      </div>
                    </div>
                  </div>
                </section>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
