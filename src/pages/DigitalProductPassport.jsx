import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card.jsx';
import { Button } from '../components/ui/button.js';
import { motion } from 'framer-motion';
import {
  FileText,
  ClipboardList,
  BookOpen,
  FolderOpen,
  Globe2,
  Layers,
  Clock,
  ShieldCheck,
  Sparkles,
  ChevronDown,
} from 'lucide-react';

// Helmsman Nexus – Digital Product Passport (Soft Glass theme like regulatory templates screen)

export default function DigitalProductPassport() {
  const [selectedSection, setSelectedSection] = useState('overview');

  const shellBg = 'bg-[#f5f7fc] text-slate-800';
  const cardStyle =
    'bg-white border border-slate-100 rounded-3xl shadow-[0_18px_40px_rgba(15,23,42,0.06)]';

  const menuItems = [
    { key: 'overview', label: 'Product overview', icon: <BookOpen className="h-4 w-4" /> },
    { key: 'compliance', label: 'Compliance results', icon: <ShieldCheck className="h-4 w-4" /> },
    { key: 'tax', label: 'Tax calculations', icon: <ClipboardList className="h-4 w-4" /> },
    { key: 'docs', label: 'Documents attached', icon: <FileText className="h-4 w-4" /> },
    { key: 'history', label: 'Export history', icon: <Globe2 className="h-4 w-4" /> },
    { key: 'labels', label: 'Label versions', icon: <Layers className="h-4 w-4" /> },
    { key: 'audit', label: 'Audit log', icon: <Clock className="h-4 w-4" /> },
  ];

  const renderContent = () => {
    switch (selectedSection) {
      case 'overview':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="space-y-5 text-sm"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#f3f6fd] p-3 rounded-2xl border border-slate-100">
                <p className="font-semibold text-slate-900 text-xs">SKU name</p>
                <p className="text-xs text-slate-500 mt-1">Nexus London Dry Gin</p>
              </div>
              <div className="bg-[#f3f6fd] p-3 rounded-2xl border border-slate-100">
                <p className="font-semibold text-slate-900 text-xs">ABV</p>
                <p className="text-xs text-slate-500 mt-1">42%</p>
              </div>
              <div className="bg-[#f3f6fd] p-3 rounded-2xl border border-slate-100">
                <p className="font-semibold text-slate-900 text-xs">Category</p>
                <p className="text-xs text-slate-500 mt-1">Gin / Spirits</p>
              </div>
              <div className="bg-[#f3f6fd] p-3 rounded-2xl border border-slate-100">
                <p className="font-semibold text-slate-900 text-xs">Origin region</p>
                <p className="text-xs text-slate-500 mt-1">United Kingdom</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-slate-100 bg-white">
              <p className="font-semibold text-slate-900 text-xs mb-1">Ingredients</p>
              <p className="text-xs text-slate-500">
                Juniper, Coriander, Angelica, Lemon Peel, Water, Ethanol
              </p>
            </div>
          </motion.div>
        );

      case 'compliance':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-3 gap-4 text-center text-xs"
          >
            {['US (TTB)', 'EU', 'UK (HMRC)'].map((region, i) => (
              <div
                key={region}
                className="p-4 rounded-2xl border border-slate-100 bg-[#f3f6fd]"
              >
                <h4 className="font-semibold text-slate-900 mb-1">{region}</h4>
                <p
                  className={`font-semibold ${
                    i === 1 ? 'text-amber-600' : 'text-emerald-600'
                  }`}
                >
                  {i === 1 ? 'Pending review' : 'Compliant'}
                </p>
              </div>
            ))}
          </motion.div>
        );

      case 'tax':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-3 gap-4 text-center text-xs"
          >
            <div className="rounded-2xl p-4 bg-[#ecfdf3] border border-emerald-100">
              <p className="font-semibold text-emerald-800 mb-1">Excise duty</p>
              <p className="text-lg font-bold text-slate-900">£8.40</p>
            </div>
            <div className="rounded-2xl p-4 bg-[#fff7ed] border border-amber-100">
              <p className="font-semibold text-amber-800 mb-1">VAT</p>
              <p className="text-lg font-bold text-slate-900">20%</p>
            </div>
            <div className="rounded-2xl p-4 bg-[#f5f3ff] border border-indigo-100">
              <p className="font-semibold text-indigo-800 mb-1">Total tax</p>
              <p className="text-lg font-bold text-slate-900">£9.75</p>
            </div>
          </motion.div>
        );

      case 'docs':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="text-sm space-y-2"
          >
            {['Commercial_Invoice_UK.pdf', 'Packing_List_Export.xlsx', 'TTB_Approval_2025.pdf'].map(
              (doc) => (
                <div
                  key={doc}
                  className="flex justify-between items-center p-3 border border-slate-100 rounded-2xl bg-[#f8fafc]"
                >
                  <p className="text-xs text-slate-600 flex items-center gap-2">
                    <FileText className="h-3.5 w-3.5 text-slate-400" /> {doc}
                  </p>
                  <Button className="text-[11px] rounded-full px-3 py-1 bg-slate-900 text-white hover:bg-slate-800">
                    View
                  </Button>
                </div>
              ),
            )}
          </motion.div>
        );

      case 'history':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="space-y-3 text-xs"
          >
            {[
              { date: '01 Aug 2025', details: 'Exported to EU (750 cases)' },
              { date: '14 Oct 2025', details: 'Exported to US (500 cases)' },
              { date: '22 Nov 2025', details: 'Exported to Japan (300 cases)' },
            ].map((entry) => (
              <div
                key={entry.date}
                className="border-l-4 border-indigo-400 bg-white rounded-r-2xl px-3 py-2"
              >
                <p className="font-semibold text-slate-900">{entry.date}</p>
                <p className="text-slate-500 mt-0.5">{entry.details}</p>
              </div>
            ))}
          </motion.div>
        );

      case 'labels':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-2 gap-4 text-xs"
          >
            <div className="p-4 rounded-2xl border border-slate-100 bg-[#f3f6fd]">
              <p className="font-semibold text-slate-900 mb-1 text-xs">Label_V1_2025.png</p>
              <p className="text-emerald-600 font-medium">Approved</p>
            </div>
            <div className="p-4 rounded-2xl border border-slate-100 bg-[#f5f3ff]">
              <p className="font-semibold text-slate-900 mb-1 text-xs">Label_V2_2025.png</p>
              <p className="text-amber-600 font-medium">Pending</p>
            </div>
          </motion.div>
        );

      case 'audit':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="space-y-2 text-xs"
          >
            {[
              '12 Dec 2025 — admin@helmsman.uk updated tax table.',
              '05 Dec 2025 — Added new export document: EU_Compliance.pdf.',
              '20 Nov 2025 — Label Version 2 uploaded for approval.',
            ].map((log) => (
              <p
                key={log}
                className="border-l-4 border-slate-200 bg-white rounded-r-2xl pl-3 py-1 text-slate-500"
              >
                {log}
              </p>
            ))}
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      className={`min-h-screen ${shellBg} px-8 py-10 md:px-16 overflow-hidden`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
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
            Digital Product Passport · SKU-level compliance, tax and export history
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs border border-slate-200 bg-white rounded-full px-3 py-1 shadow-sm">
          <span className="text-slate-500">Theme</span>
          <span className="font-semibold text-slate-800 flex items-center gap-1">
            Soft Glass <ChevronDown className="h-3 w-3 text-slate-400" />
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left: Section menu */}
        <Card className={cardStyle}>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-sm font-semibold text-slate-900 mb-1 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-indigo-500" />
              SKU sections
            </h2>
            <p className="text-[11px] text-slate-500 mb-2">
              Jump between product data, compliance results, tax engine output and export history for this SKU.
            </p>
            <div className="space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setSelectedSection(item.key)}
                  className={`w-full flex items-center justify-between gap-2 px-3 py-2 rounded-2xl border text-xs transition-colors ${
                    selectedSection === item.key
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                      : 'bg-[#f5f7fc] text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {item.icon}
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Right: Content */}
        <Card className={`${cardStyle} lg:col-span-2`}>
          <CardContent className="p-8 space-y-6">
            <h2 className="text-md md:text-lg font-semibold flex items-center gap-2 text-slate-900">
              <FolderOpen className="h-4 w-4 text-indigo-500" />{' '}
              {menuItems.find((m) => m.key === selectedSection)?.label}
            </h2>
            {renderContent()}

            <div className="pt-4 border-t border-slate-100 mt-4 flex flex-wrap justify-between gap-3 items-center">
              <p className="text-[11px] text-slate-500">
                Export a full audit-ready snapshot of this Digital Product Passport, including labels, tax logic and
                route-to-market history.
              </p>
              <Button className="bg-slate-900 text-white font-medium rounded-full py-2 px-5 text-xs md:text-sm shadow-sm hover:bg-slate-800">
                Export SKU report (PDF)
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}

