import React, { useState } from 'react'
import AddTeamMemberModal from './AddTeamMemberModal'
import { useAppStore } from '../store/appStore'

export default function Team() {
  const [selectedTab, setSelectedTab] = useState('all members')
  const [showAddMemberModal, setShowAddMemberModal] = useState(false)
  const teamMembers = useAppStore((state) => state.teamMembers)
  const removeTeamMember = useAppStore((state) => state.removeTeamMember)

  const members = teamMembers.length > 0 ? teamMembers : [
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

  const stats = [
    { title: 'Total Members', value: members.length.toString(), sub: '+3 this month' },
    { title: 'Active Now', value: '18', sub: 'High engagement' },
    { title: 'Open Invites', value: '2', sub: 'Pending approval' },
    { title: 'Roles', value: '4', sub: 'Admin, Dev, QA, PM' },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Online':
        return 'bg-tertiary/10 text-tertiary font-bold'
      case 'Away':
        return 'bg-[#FFC107]/10 text-[#FFA000] font-bold'
      case 'Offline':
        return 'bg-error/10 text-error font-bold'
      default:
        return 'bg-surface-container text-on-surface'
    }
  }

  return (
    <>
      <div className="flex flex-col gap-8">
        {/* Page Header */}
        <div className="flex flex-col lg:flex-row justify-between gap-5">
          <div>
            <h2 className="text-4xl font-bold text-on-surface">Team Management</h2>
            <p className="text-body-base text-on-surface-variant mt-2">
              Manage permissions, invite new contributors, and monitor sprint activity.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="border border-outline-variant px-5 py-3 rounded-xl flex items-center gap-2 hover:border-primary transition-colors text-on-surface">
              <span className="material-symbols-outlined">download</span>
              Export CSV
            </button>

            <button
              onClick={() => setShowAddMemberModal(true)}
              className="bg-primary text-on-primary px-5 py-3 rounded-xl flex items-center gap-2 hover:opacity-90 transition-all"
            >
              <span className="material-symbols-outlined">person_add</span>
              Invite Member
            </button>
          </div>
        </div>

        {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {stats.map((item, index) => (
          <div key={index} className="bg-surface border border-outline-variant rounded-2xl p-5">
            <p className="text-xs uppercase tracking-wider text-on-surface-variant font-label-xs">
              {item.title}
            </p>
            <h3 className="text-4xl font-bold mt-2 text-on-surface">{item.value}</h3>
            <div className="flex items-center gap-2 mt-3 text-sm text-tertiary font-medium">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              {item.sub}
            </div>
          </div>
        ))}
      </div>

      {/* Members Table */}
      <div className="bg-surface border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
        {/* Table Header with Tabs */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-outline-variant">
          <div className="flex gap-8">
            {['All Members', 'Admins', 'Developers'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab.toLowerCase())}
                className={`pb-2 font-label-md transition-colors ${
                  selectedTab === tab.toLowerCase()
                    ? 'text-primary font-bold border-b-2 border-primary'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <select className="bg-surface-container-low rounded-lg px-3 py-2 outline-none text-on-surface font-label-md border border-outline-variant focus:ring-2 focus:ring-primary/20">
            <option>Recently Active</option>
            <option>Name A-Z</option>
            <option>Role</option>
          </select>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-surface-container-low border-b border-outline-variant">
              <tr>
                <th className="text-left px-6 py-4 text-label-xs uppercase tracking-wider text-on-surface-variant font-bold">Member</th>
                <th className="text-left px-6 py-4 text-label-xs uppercase tracking-wider text-on-surface-variant font-bold">Status</th>
                <th className="text-left px-6 py-4 text-label-xs uppercase tracking-wider text-on-surface-variant font-bold">Role</th>
                <th className="text-left px-6 py-4 text-label-xs uppercase tracking-wider text-on-surface-variant font-bold">Last Active</th>
                <th className="text-right px-6 py-4 text-label-xs uppercase tracking-wider text-on-surface-variant font-bold">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-outline-variant">
              {members.map((member, index) => (
                <tr key={index} className="hover:bg-surface-container-lowest transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-11 h-11 rounded-full object-cover border border-outline-variant"
                      />
                      <div>
                        <p className="font-title-sm font-bold text-on-surface">{member.name}</p>
                        <p className="text-label-xs text-on-surface-variant">{member.email}</p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-label-xs font-bold ${getStatusColor(member.status)}`}>
                      {member.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <select className="outline-none bg-transparent text-on-surface font-label-md border border-outline-variant rounded px-2 py-1">
                      <option selected={member.role === 'Admin'}>Admin</option>
                      <option selected={member.role === 'Member'}>Member</option>
                      <option selected={member.role === 'Viewer'}>Viewer</option>
                    </select>
                  </td>

                  <td className="px-6 py-4 text-on-surface-variant text-body-sm">{member.active}</td>

                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:text-error transition-colors">
                        <span className="material-symbols-outlined">delete</span>
                      </button>
                      <button className="p-2 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-outline-variant bg-surface-container-lowest">
          <p className="text-label-md text-on-surface-variant">Showing 4 of 24 members</p>

          <div className="flex gap-2">
            <button className="border border-outline-variant rounded-lg p-2 hover:bg-surface-container transition-colors text-on-surface-variant">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>

            <button className="bg-primary text-on-primary px-4 rounded-lg font-label-md font-bold">1</button>
            <button className="border border-outline-variant px-4 rounded-lg text-on-surface hover:bg-surface-container transition-colors font-label-md">2</button>
            <button className="border border-outline-variant px-4 rounded-lg text-on-surface hover:bg-surface-container transition-colors font-label-md">3</button>

            <button className="border border-outline-variant rounded-lg p-2 hover:bg-surface-container transition-colors text-on-surface-variant">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Role Permissions Card */}
        <div className="bg-primary text-on-primary rounded-2xl p-6 relative overflow-hidden group">
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-on-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-3xl">security</span>
              Role Permissions
            </h3>

            <p className="text-body-sm opacity-90">
              Admins can manage billing and global settings. Members can manage project boards and sprints.
            </p>

            <button className="mt-6 bg-on-primary text-primary px-4 py-2 rounded-lg font-label-md font-bold hover:opacity-90 transition-all">
              Review Matrix
            </button>
          </div>
        </div>

        {/* Weekly Activity Trend */}
        <div className="lg:col-span-2 bg-surface border border-outline-variant rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-title-sm font-bold text-on-surface">Weekly Activity Trend</h3>

            <div className="flex items-center gap-2 text-label-xs text-on-surface-variant">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              Commitment Level
            </div>
          </div>

          <div className="h-40 flex items-end gap-3 mb-4">
            {[50, 70, 85, 100, 80, 40, 30].map((height, index) => (
              <div
                key={index}
                className="flex-1 bg-primary/20 hover:bg-primary transition-all rounded-t-lg"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>

          <div className="flex justify-between text-label-xs text-on-surface-variant font-bold">
            <span>MON</span>
            <span>TUE</span>
            <span>WED</span>
            <span>THU</span>
            <span>FRI</span>
            <span>SAT</span>
            <span>SUN</span>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
