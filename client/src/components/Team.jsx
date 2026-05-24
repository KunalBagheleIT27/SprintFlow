import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AddTeamMemberModal from './AddTeamMemberModal'
import { useAppStore } from '../store/appStore'

const defaultMembers = [
  {
    id: 'member-1',
    name: 'Alex Rivera',
    email: 'alex.r@sprintflow.ai',
    status: 'Online',
    role: 'Admin',
    active: 'Just now',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCn0Z7wcBgd4JeOYzdAUNWE4SENNGjaIUPaG10q_JIcEgZ7UPIHcGBgVTOBfpUPgAOX3MtXpH5S16mWuzrUBcxweD-Or9xjAfBCU3WZezoA5vaIgrXMz8GPt11zW7HrdY4yXupKbNDaiJ8-edJKZAkSjaURMchQxtZNltRP6CgSDYK2VoXneH_p5NmnKROW3mq-qENhCy2PczdALrKWiavIPko-nqGhSEImT1FXHkR2EIFWSim-7FGAocbxbXXxV1XurxbLypeNPK0',
  },
  {
    id: 'member-2',
    name: 'Sarah Jenkins',
    email: 's.jenkins@sprintflow.ai',
    status: 'Away',
    role: 'Member',
    active: '14 mins ago',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeBqqPyDDmtngvDvAKRT_HYoZuM8RRCTHEmdC0fXM0c-avL3Pr2eBmHzLBpN9zqXq9SkaLQZS6maICTi8he9_27tMr78g04sLGBKmsh7zt_94_iUCMMIK5KhQuuo9qVZhqx217d_9zoPHLqUG-cR2f3TJ1A2_jThPs-cD3pB22c3wmSTgbpbOILqAuMtTMYVAb6bXHc3PtIUP7BCvAA7OStRCHQqV3F9vHerFpB8qfr8qq9WjxKhae7-3RqSa8bCQv0bPjh190eec',
  },
  {
    id: 'member-3',
    name: 'Marcus Thorne',
    email: 'm.thorne@sprintflow.ai',
    status: 'Offline',
    role: 'Member',
    active: '2 hours ago',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp52MwT6EfkM4kL37F-UPYXzknMFMBhCNlXNpctzE81qRLfNL6-YuKbqCTdJoQCG1LwrXhAOWY2ZpncJ7CZqLPR1tzGmhJJdW1fv4McmQ_nBI5kShZqbtdeAx2PWTm2CJywddIQ6gtMFiRG1VsfZQyPnaNCQabQpg_opkEi5cJZYfvCL56evb9nUMqF8sFn5fSes86WalTjNm--avTqknxlV2lvWeMRKdpzZh2xOhNB90Mu3JHflZbfPb61iS_CWwfituFKv3-Itk',
  },
  {
    id: 'member-4',
    name: 'Lina Song',
    email: 'l.song@sprintflow.ai',
    status: 'Online',
    role: 'Viewer',
    active: '5 mins ago',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1N20xjlh0a0O8SyuD2PhCjeOFI-IT7ynd2qdtY6-LHctvuJm2JbaYjppVaxGctFArwn4Gp9IODC8zbIsupNnnF4wIKJM5W1N3UTklid2V6W44vJZ-hWalkQM687EqMLcM0kDIiEu8Wqd6ikhfQcxcFxK0p0JNoEFe6Sq6ISNfrXFHGDnPG_BK9tnx_-DMkQKPbYgHewxo1q_BQGsdTj33dR6O7UwUj_u8Bt5HFWnIlhATgj13P3D_WjVapNQncASdyR2ctHbHSSA',
  },
]

export default function Team() {
  const navigate = useNavigate()
  const [selectedTab, setSelectedTab] = useState('all members')
  const [showAddMemberModal, setShowAddMemberModal] = useState(false)
  const [sortBy, setSortBy] = useState('Recently Active')
  const teamMembers = useAppStore((state) => state.teamMembers)
  const removeTeamMember = useAppStore((state) => state.removeTeamMember)

  const members = teamMembers.length > 0 ? teamMembers : defaultMembers

  const stats = [
    { title: 'Total Members', value: members.length.toString(), sub: '+3 this month', icon: 'group' },
    { title: 'Active Now', value: '18', sub: 'High engagement', icon: 'bolt' },
    { title: 'Open Invites', value: '2', sub: 'Pending approval', icon: 'mail' },
    { title: 'Roles', value: '4', sub: 'Admin, Dev, QA, PM', icon: 'manage_accounts' },
  ]

  const filteredMembers = useMemo(() => {
    if (selectedTab === 'admins') return members.filter((member) => member.role === 'Admin')
    if (selectedTab === 'developers') return members.filter((member) => member.role === 'Member')
    return members
  }, [members, selectedTab])

  const handleExport = () => {
    console.log('Export CSV clicked')
  }

  const handleInvite = () => {
    setShowAddMemberModal(true)
  }

  const handleReviewMatrix = () => {
    console.log('Review matrix clicked')
  }

  const handleRemove = (memberId) => {
    if (window.confirm('Remove this team member?')) {
      removeTeamMember(memberId)
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Online':
        return 'bg-tertiary/10 text-tertiary font-bold'
      case 'Away':
        return 'bg-warning/10 text-warning font-bold'
      case 'Offline':
        return 'bg-error/10 text-error font-bold'
      default:
        return 'bg-surface-container text-on-surface'
    }
  }

  return (
    <>
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
              <span className="text-on-surface font-semibold">Team</span>
            </div>
            <div>
              <h2 className="text-headline-md font-bold text-on-surface">Team Management</h2>
              <p className="text-body-sm text-on-surface-variant mt-1 max-w-2xl">
                Manage permissions, invite contributors, and monitor team activity with clear role controls.
              </p>
            </div>
          </div>

          <div className="flex gap-3 flex-wrap">
            <button onClick={handleExport} className="btn-secondary flex items-center gap-2">
              <span className="material-symbols-outlined">download</span>
              Export CSV
            </button>
            <button onClick={handleInvite} className="btn-primary flex items-center gap-2">
              <span className="material-symbols-outlined">person_add</span>
              Invite Member
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {stats.map((item) => (
            <div key={item.title} className="card-premium p-5">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-wider text-on-surface-variant font-semibold">{item.title}</p>
                <span className="material-symbols-outlined text-primary">{item.icon}</span>
              </div>
              <h3 className="text-4xl font-bold mt-3 text-on-surface">{item.value}</h3>
              <div className="flex items-center gap-2 mt-3 text-sm text-on-surface-variant font-medium">
                <span className="material-symbols-outlined text-sm text-tertiary">trending_up</span>
                {item.sub}
              </div>
            </div>
          ))}
        </div>

        <div className="card-premium overflow-hidden">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between px-6 py-5 border-b border-border">
            <div className="flex gap-4 flex-wrap">
              {['All Members', 'Admins', 'Developers'].map((tab) => {
                const normalized = tab.toLowerCase()
                const isActive = selectedTab === normalized
                return (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(normalized)}
                    className={`pb-2 font-medium transition-colors border-b-2 ${
                      isActive
                        ? 'text-primary border-primary'
                        : 'text-on-surface-variant border-transparent hover:text-on-surface'
                    }`}
                  >
                    {tab}
                  </button>
                )
              })}
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm text-on-surface-variant">Showing {filteredMembers.length} members</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input-field !py-2 !rounded-lg !w-auto min-w-[180px]"
              >
                <option>Recently Active</option>
                <option>Name A-Z</option>
                <option>Role</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-surface-container-low">
                <tr>
                  <th className="text-left px-6 py-4 text-label-xs uppercase tracking-wider text-on-surface-variant font-bold">Member</th>
                  <th className="text-left px-6 py-4 text-label-xs uppercase tracking-wider text-on-surface-variant font-bold">Status</th>
                  <th className="text-left px-6 py-4 text-label-xs uppercase tracking-wider text-on-surface-variant font-bold">Role</th>
                  <th className="text-left px-6 py-4 text-label-xs uppercase tracking-wider text-on-surface-variant font-bold">Last Active</th>
                  <th className="text-right px-6 py-4 text-label-xs uppercase tracking-wider text-on-surface-variant font-bold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredMembers.map((member) => (
                  <tr key={member.id} className="hover:bg-surface-container-lowest transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-11 h-11 rounded-full object-cover border border-border"
                        />
                        <div>
                          <p className="font-semibold text-on-surface">{member.name}</p>
                          <p className="text-sm text-on-surface-variant">{member.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(member.status)}`}>
                        {member.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <select value={member.role} readOnly className="input-field !py-2 !rounded-lg !w-auto min-w-[110px]">
                        <option>Admin</option>
                        <option>Member</option>
                        <option>Viewer</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 text-on-surface-variant text-sm">{member.active}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                        <button onClick={() => console.log('Edit member', member.id)} className="p-2 rounded-lg hover:bg-surface-container-lowest hover:text-primary transition-colors">
                          <span className="material-symbols-outlined">edit</span>
                        </button>
                        <button onClick={() => handleRemove(member.id)} className="p-2 rounded-lg hover:bg-surface-container-lowest hover:text-error transition-colors">
                          <span className="material-symbols-outlined">delete</span>
                        </button>
                        <button onClick={() => console.log('More actions', member.id)} className="p-2 rounded-lg hover:bg-surface-container-lowest hover:text-primary transition-colors">
                          <span className="material-symbols-outlined">more_vert</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between px-6 py-4 border-t border-border bg-surface-container-lowest">
            <p className="text-sm text-on-surface-variant">Showing {filteredMembers.length} of {members.length} members</p>
            <div className="flex gap-2">
              <button className="border border-border rounded-lg p-2 hover:bg-surface-container transition-colors text-on-surface-variant">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="bg-primary text-white px-4 rounded-lg font-medium">1</button>
              <button className="border border-border px-4 rounded-lg text-on-surface hover:bg-surface-container transition-colors font-medium">2</button>
              <button className="border border-border px-4 rounded-lg text-on-surface hover:bg-surface-container transition-colors font-medium">3</button>
              <button className="border border-border rounded-lg p-2 hover:bg-surface-container transition-colors text-on-surface-variant">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="card-premium p-6 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-36 h-36 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-3xl">security</span>
                Role Permissions
              </h3>
              <p className="mt-4 text-base text-white/95 leading-relaxed font-medium max-w-md">
                Admins can manage billing and global settings. Members can manage project boards and sprints.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                <span className="bg-white text-primary px-3 py-1 rounded-full font-semibold">Admin</span>
                <span className="bg-white/15 text-white px-3 py-1 rounded-full font-semibold">Member</span>
                <span className="bg-white/15 text-white px-3 py-1 rounded-full font-semibold">Viewer</span>
              </div>
              <button onClick={handleReviewMatrix} className="mt-6 bg-white text-primary px-4 py-2.5 rounded-xl font-semibold hover:bg-surface-container-lowest transition-all">
                Review Matrix
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 card-premium p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-on-surface">Weekly Activity Trend</h3>
              <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                Commitment Level
              </div>
            </div>

            <div className="h-52 flex items-end gap-3 mb-4 rounded-2xl bg-surface-container-lowest p-4 border border-border">
              {[
                { label: 'MON', value: 42 },
                { label: 'TUE', value: 58 },
                { label: 'WED', value: 72 },
                { label: 'THU', value: 88 },
                { label: 'FRI', value: 64 },
                { label: 'SAT', value: 36 },
                { label: 'SUN', value: 24 },
              ].map((item, index) => (
                <div key={index} className="flex-1 flex flex-col items-center justify-end gap-2 h-full">
                  <div className="w-full flex flex-col justify-end h-full">
                    <div
                      className="w-full rounded-t-xl bg-gradient-to-t from-primary/30 via-primary/70 to-primary shadow-sm transition-all duration-300 hover:from-primary/50 hover:to-primary"
                      style={{ height: `${item.value}%` }}
                      title={`${item.label}: ${item.value}`}
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-on-surface-variant">{item.label}</span>
                  <span className="text-[11px] font-bold text-on-surface">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AddTeamMemberModal isOpen={showAddMemberModal} onClose={() => setShowAddMemberModal(false)} />
    </>
  )
}
