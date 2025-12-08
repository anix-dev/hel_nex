import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, ShieldCheck, Clock, Globe2, Trash2, Edit3 } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card.jsx.jsx';
import { Button } from '../components/ui/button';

// Helmsman Nexus – Regulatory Template Admin (Soft Glass Theme)


// Theme updated to match attached UI screenshot



export default function RegulatoryTemplateAdmin() {
  const templates = [
    { name: 'TTB Export Template', region: 'United States', type: 'PDF', updated: '2025-11-20' },
    { name: 'HMRC Duty Declaration', region: 'United Kingdom', type: 'XLSX', updated: '2025-10-05' },
    { name: 'EU Customs Certificate', region: 'European Union', type: 'DOCX', updated: '2025-09-18' },
  ];

  const shellBg = 'bg-[#f5f7fc] text-slate-800';
  const cardStyle = 'bg-white border border-slate-100 rounded-3xl shadow-[0_8px_30px_rgba(15,23,42,0.06)]';

  return (
    <motion.div
      className={`min-h-screen ${shellBg} px-8 py-10 md:px-16`}
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
            Admin · Upload & manage regulatory export / customs templates
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs border border-slate-200 bg-white rounded-full px-3 py-1 shadow-sm">
          <span className="text-slate-500">Theme</span>
          <span className="font-semibold text-slate-800">Soft Glass</span>
        </div>
      </div>

      {/* Upload Zone */}
      <Card className={`${cardStyle} mb-10`}>
        <CardContent className="p-10 flex flex-col items-center justify-center text-center border-dashed border-2 border-slate-200 rounded-3xl bg-slate-50/60">
          <UploadCloud className="h-10 w-10 text-slate-400 mb-4" />
          <p className="text-sm text-slate-600">Drag & drop regulatory templates here, or</p>
          <Button className="mt-3 bg-slate-900 text-white rounded-full px-5 py-2 text-xs hover:bg-slate-800">
            Browse files
          </Button>
        </CardContent>
      </Card>

      {/* Info Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card className={cardStyle}>
          <CardContent className="p-5 flex items-start gap-3">
            <div className="h-8 w-8 rounded-full bg-emerald-50 flex items-center justify-center">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Validated templates</h3>
              <p className="text-[11px] text-slate-500 mt-1">
                Each upload is scanned for structure, missing fields, and basic formatting issues.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className={cardStyle}>
          <CardContent className="p-5 flex items-start gap-3">
            <div className="h-8 w-8 rounded-full bg-indigo-50 flex items-center justify-center">
              <Clock className="h-4 w-4 text-indigo-500" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Version history</h3>
              <p className="text-[11px] text-slate-500 mt-1">
                Helmsman tracks every update, so you can roll back to a previous template in seconds.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className={cardStyle}>
          <CardContent className="p-5 flex items-start gap-3">
            <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center">
              <Globe2 className="h-4 w-4 text-blue-500" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Mapped to regions</h3>
              <p className="text-[11px] text-slate-500 mt-1">
                Templates are tagged to markets (US, UK, EU, LATAM) for fast export corridor setup.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Template Library */}
      <Card className={cardStyle}>
        <CardContent className="p-8">
          <h3 className="text-sm font-semibold mb-4 flex items-center gap-2 text-slate-900">
            <ShieldCheck className="h-4 w-4 text-emerald-600" /> Regulatory template library
          </h3>

          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="min-w-full text-xs md:text-sm align-middle">
              <thead className="bg-[#f0f3f9] border-b border-slate-200 text-left text-slate-500">
                <tr>
                  <th className="py-3 px-4 font-medium">Template name</th>
                  <th className="py-3 px-4 font-medium">Region</th>
                  <th className="py-3 px-4 font-medium">File type</th>
                  <th className="py-3 px-4 font-medium">Last updated</th>
                  <th className="py-3 px-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {templates.map((template) => (
                  <tr key={template.name} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 text-slate-800 font-medium">{template.name}</td>
                    <td className="py-3 px-4 text-slate-600">{template.region}</td>
                    <td className="py-3 px-4 text-slate-600">{template.type}</td>
                    <td className="py-3 px-4 text-slate-600">{template.updated}</td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          className="text-[11px] px-3 py-1 border-slate-200 text-slate-700 rounded-full bg-white hover:bg-slate-50 flex items-center gap-1"
                        >
                          <Edit3 className="h-3 w-3" /> Update
                        </Button>
                        <Button
                          variant="outline"
                          className="text-[11px] px-3 py-1 border-rose-200 text-rose-600 rounded-full bg-white hover:bg-rose-50 flex items-center gap-1"
                        >
                          <Trash2 className="h-3 w-3" /> Delete
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
    </motion.div>
  );
}
