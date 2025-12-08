import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Search, Filter, UserCog, ShieldCheck, Settings, UserPlus, Trash2, Edit, ChevronDown } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card.jsx';
import { Button } from '../components/ui/button.jsx';

// Helmsman Nexus – Admin Panel
// Theme adjusted to match the "Soft Glass" regulatory templates screen

export default function AdminPanel() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Jeff Carter', role: 'Admin', email: 'jeff@helmsman.uk' },
    { id: 2, name: 'Charene Ilagan', role: 'Manager', email: 'charene@helmsman.uk' },
    { id: 3, name: 'Mohit Kaushal', role: 'Developer', email: 'mohit@helmsman.uk' },
  ]);

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const shellBg = 'bg-[#f5f7fc] text-slate-800';
  const cardStyle = 'bg-white border border-slate-100 rounded-3xl shadow-[0_18px_40px_rgba(15,23,42,0.06)]';

  const handleDelete = (id) => setUsers((prev) => prev.filter((u) => u.id !== id));
  const handleAddUser = () =>
    setUsers((prev) => [
      ...prev,
      { id: Date.now(), name: 'New User', role: 'Viewer', email: 'new@helmsman.uk' },
    ]);

  const filteredUsers = users.filter(
    (u) =>
      (filter === 'All' || u.role === filter) &&
      (u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase())),
  );

  return (
    <motion.div
      className={`min-h-screen ${shellBg} px-8 py-10 md:px-16 overflow-hidden`}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight flex items-center gap-2 text-slate-900">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white text-xs font-semibold">
              HN
            </span>
            Helmsman Nexus
          </h1>
          <p className="text-xs md:text-sm text-slate-500 mt-1">
            Admin · Manage users, roles, and access for the Nexus platform
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs border border-slate-200 bg-white rounded-full px-3 py-1 shadow-sm">
          <span className="text-slate-500">Theme</span>
          <span className="font-semibold text-slate-800 flex items-center gap-1">
            Soft Glass <ChevronDown className="h-3 w-3 text-slate-400" />
          </span>
        </div>
      </div>

      {/* Controls row */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-3 py-1 w-full md:w-1/3 shadow-sm">
          <Search className="h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search user by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent text-xs md:text-sm w-full focus:outline-none placeholder:text-slate-400"
          />
        </div>

        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1 text-slate-500">
            <Filter className="h-4 w-4" />
            <span>Role</span>
          </div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-3 py-2 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm text-xs focus:outline-none"
          >
            <option>All</option>
            <option>Admin</option>
            <option>Manager</option>
            <option>Developer</option>
            <option>Viewer</option>
          </select>
        </div>
      </div>

      {/* User Management Card */}
      <Card className={`${cardStyle} mb-10`}>
        <CardContent className="p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold flex items-center gap-2 text-slate-900">
                <Users className="h-4 w-4 text-slate-500" /> Manage users & roles
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Add, edit, or remove users and assign the right level of access across Nexus modules.
              </p>
            </div>
            <Button
              onClick={handleAddUser}
              className="bg-slate-900 text-white font-medium rounded-full py-2 px-4 text-xs md:text-sm flex items-center gap-2 shadow-sm hover:bg-slate-800"
            >
              <UserPlus className="h-4 w-4" /> Add user
            </Button>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-100">
            <table className="min-w-full text-xs md:text-sm align-middle">
              <thead className="bg-[#f0f3f9] border-b border-slate-200 text-left text-slate-500">
                <tr>
                  <th className="py-3 px-4 font-medium">Name</th>
                  <th className="py-3 px-4 font-medium">Email</th>
                  <th className="py-3 px-4 font-medium">Role</th>
                  <th className="py-3 px-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.length ? (
                  filteredUsers.map((user) => (
                    <motion.tr
                      key={user.id}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
                    >
                      <td className="py-3 px-4 text-slate-800 font-medium">{user.name}</td>
                      <td className="py-3 px-4 text-slate-500">{user.email}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border ${
                            user.role === 'Admin'
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                              : user.role === 'Manager'
                              ? 'bg-amber-50 text-amber-700 border-amber-200'
                              : 'bg-slate-50 text-slate-700 border-slate-200'
                          }`}
                        >
                          {user.role}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-slate-200 text-slate-700 text-[11px] px-3 py-1 rounded-full bg-white hover:bg-slate-50 flex items-center gap-1"
                          >
                            <Edit className="h-3 w-3" /> Edit
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDelete(user.id)}
                            className="border-rose-200 text-rose-600 text-[11px] px-3 py-1 rounded-full bg-white hover:bg-rose-50 flex items-center gap-1"
                          >
                            <Trash2 className="h-3 w-3" /> Delete
                          </Button>
                        </div>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="py-6 text-center text-xs text-slate-500">
                      No users found for this filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Info cards – mirror the validated/version/region cards vibe */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className={cardStyle}>
          <CardContent className="p-5 flex items-start gap-3">
            <div className="h-8 w-8 rounded-full bg-emerald-50 flex items-center justify-center">
              <UserCog className="h-4 w-4 text-emerald-500" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Role-based access</h3>
              <p className="text-[11px] text-slate-500 mt-1">
                Define Admin, Manager, Developer, and Viewer roles with clear responsibilities.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className={cardStyle}>
          <CardContent className="p-5 flex items-start gap-3">
            <div className="h-8 w-8 rounded-full bg-indigo-50 flex items-center justify-center">
              <ShieldCheck className="h-4 w-4 text-indigo-500" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Secure authentication</h3>
              <p className="text-[11px] text-slate-500 mt-1">
                Use JWT and SSO providers to keep access secure across all Nexus modules.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className={cardStyle}>
          <CardContent className="p-5 flex items-start gap-3">
            <div className="h-8 w-8 rounded-full bg-purple-50 flex items-center justify-center">
              <Settings className="h-4 w-4 text-purple-500" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Custom permissions</h3>
              <p className="text-[11px] text-slate-500 mt-1">
                Map access to specific countries, brands, or features as the platform grows.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}