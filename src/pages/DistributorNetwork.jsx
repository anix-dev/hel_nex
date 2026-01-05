import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Globe2, Star, ArrowRight, Building2 } from 'lucide-react';
import Footer from './Footer';
import logo from "/public/logo.png"

// Lightweight UI primitives so this file is self-contained
function Card({ children, className = '' }) {
  return <div className={`rounded-3xl bg-white ${className}`}>{children}</div>;
}

function CardContent({ children, className = '' }) {
  return <div className={className}>{children}</div>;
}

function Button({ children, className = '', variant = 'solid', ...props }) {
  const base =
    'inline-flex items-center justify-center rounded-full text-xs px-3 py-1.5 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900';
  const styles =
    variant === 'outline'
      ? 'border border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
      : 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm';

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default function DistributorNewtwork() {
  const distributors = [
    { name: 'Atlantic Craft Spirits Co.', region: 'North America', country: 'United States', brands: 18, status: 'Active' },
    { name: 'Union Barrel Distributors', region: 'Europe', country: 'United Kingdom', brands: 9, status: 'Onboarded' },
    { name: 'Latitude 23 Beverages', region: 'LATAM', country: 'Mexico', brands: 4, status: 'Prospect' },
    { name: 'Pacific Rim Spirits Network', region: 'APAC', country: 'Japan', brands: 12, status: 'Active' },
  ];

  const shellBg = 'bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900';
  const cardStyle = 'bg-white/90 border border-slate-200 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl';

  return (
    <motion.div
      className={`min-h-screen ${shellBg} px-6 py-8 md:px-16`}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Top Bar */}
      <>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight flex items-center gap-2 text-slate-900">
              <img src={logo} alt="Helmsman Nexus Logo" className="h-10 w-35" />
            </h1>
            <p className="text-xs text-slate-500 mt-1">Where Compliance, Data & Distribution Connect</p>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <div className="flex rounded-full bg-slate-100 p-1">
              <button className="px-3 py-1 rounded-full bg-slate-900 text-white text-[11px]">Label Check</button>
              <button className="px-3 py-1 rounded-full text-slate-600">Product Passport</button>
            </div>
            <div className="flex items-center gap-2 text-slate-500 border border-slate-200 rounded-full px-3 py-1 bg-white/80">
              <span className="text-[11px]">Theme</span>
              <span className="text-[11px] font-medium text-slate-800">Soft Glass</span>
            </div>
          </div>
        </div>

        <Footer />
                
      </>

      <div className="grid lg:grid-cols-[2fr,1.1fr] gap-8 mb-10">
        {/* Left: Distributor overview & table shell */}
        <div className="space-y-6">
          <Card className={cardStyle}>
            <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold">Distributor Network Overview</h2>
                <p className="text-xs text-slate-500 mt-1">Monitor global distributor relationships and coverage.</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-3 py-1">
                  <Search className="h-3.5 w-3.5 text-slate-400" />
                  <input
                    placeholder="Search distributors..."
                    className="bg-transparent text-[11px] w-40 focus:outline-none placeholder:text-slate-400"
                  />
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Filter className="h-3.5 w-3.5" />
                  <select className="text-[11px] bg-white/0 border-none focus:outline-none">
                    <option>All Regions</option>
                    <option>North America</option>
                    <option>Europe</option>
                    <option>LATAM</option>
                    <option>APAC</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className={cardStyle}>
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
                <h3 className="text-sm font-semibold flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-slate-700" /> Global Distributor Network
                </h3>
                <Button className="px-4 py-1.5 flex items-center gap-2">
                  <Star className="h-3.5 w-3.5" /> Add Distributor
                </Button>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="min-w-full text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-500">
                    <tr>
                      <th className="py-3 px-4 text-left font-medium">Distributor</th>
                      <th className="py-3 px-4 text-left font-medium">Region</th>
                      <th className="py-3 px-4 text-left font-medium">Country</th>
                      <th className="py-3 px-4 text-left font-medium">Brands</th>
                      <th className="py-3 px-4 text-left font-medium">Status</th>
                      <th className="py-3 px-4 text-right font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {distributors.map((d, index) => (
                      <tr
                        key={index}
                        className="border-b border-slate-100 hover:bg-slate-50/80 transition-colors"
                      >
                        <td className="py-3 px-4 text-[11px] font-medium text-slate-800">{d.name}</td>
                        <td className="py-3 px-4 text-[11px] text-slate-500">{d.region}</td>
                        <td className="py-3 px-4 text-[11px] text-slate-500">{d.country}</td>
                        <td className="py-3 px-4 text-[11px] font-semibold text-slate-700">{d.brands}</td>
                        <td className="py-3 px-4 text-[11px]">
                          <span
                            className={`px-2.5 py-1 rounded-full border text-[10px] font-semibold ${
                              d.status === 'Active'
                                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                : d.status === 'Onboarded'
                                ? 'bg-amber-50 text-amber-700 border-amber-200'
                                : 'bg-sky-50 text-sky-700 border-sky-200'
                            }`}
                          >
                            {d.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right text-[11px]">
                          <div className="flex justify-end gap-2">
                            <Button
                              variant="outline"
                              className="h-7 px-3 text-[10px] flex items-center gap-1"
                            >
                              View <ArrowRight className="h-3 w-3" />
                            </Button>
                            <Button
                              variant="outline"
                              className="h-7 px-3 text-[10px]"
                            >
                              Edit
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right: Summary cards */}
        <div className="space-y-6">
          <Card className={cardStyle}>
            <CardContent className="p-6">
              <h3 className="text-sm font-semibold mb-4">Distributor Status Summary</h3>
              <div className="space-y-3 text-[11px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="text-slate-600">Active Distributors</span>
                  </div>
                  <span className="font-semibold text-slate-800">24</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="text-slate-600">New Onboarded (30 days)</span>
                  </div>
                  <span className="font-semibold text-slate-800">9</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
                    <span className="text-slate-600">In Pipeline</span>
                  </div>
                  <span className="font-semibold text-slate-800">7</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-100 mt-2">
                  <div className="flex items-center gap-2">
                    <Globe2 className="h-3.5 w-3.5 text-slate-500" />
                    <span className="text-slate-600">Total Brands Across Network</span>
                  </div>
                  <span className="font-semibold text-slate-800">58</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className={cardStyle}>
            <CardContent className="p-6 text-[11px] text-slate-600 space-y-2">
              <h3 className="text-sm font-semibold mb-2">Design Notes</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Soft glass shell with subtle shadows, aligned with Label Check screen.</li>
                <li>Distributor table reuses Helmsman card spacing and rounded shapes.</li>
                <li>Use this layout as base for real distributor & route-to-market MVP.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}