import React, { useState, useRef } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  UploadCloud,
  Sparkles,
  FileCheck,
  Trash2,
  FileText,
  FolderUp,
  ShieldCheck,
  Layers,
  Globe,
} from 'lucide-react';

export default function RegulatoryTemplateUploader() {
  const [theme, setTheme] = useState<'soft' | 'neon'>('soft');
  const [templates, setTemplates] = useState([
    { id: 1, name: 'TTB Export Template', region: 'United States', lastUpdated: '2025-11-20', fileType: 'PDF' },
    { id: 2, name: 'HMRC Duty Declaration', region: 'United Kingdom', lastUpdated: '2025-10-05', fileType: 'XLSX' },
    { id: 3, name: 'EU Customs Certificate', region: 'European Union', lastUpdated: '2025-09-18', fileType: 'DOCX' },
  ]);
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isSoft = theme === 'soft';

  // Shell + card styles to match soft-glass distributor dashboard theme
  const shellBg = isSoft
    ? 'bg-[#f4f7fb] text-slate-900'
    : 'bg-gradient-to-br from-[#040417] via-[#0a0a2e] to-[#151550] text-slate-50';

  const cardStyle = isSoft
    ? 'bg-white border border-slate-200 shadow-[0_18px_40px_rgba(15,23,42,0.06)] rounded-3xl'
    : 'bg-[#0b1220]/80 border border-indigo-700/60 shadow-[0_0_90px_rgba(99,102,241,0.45)] rounded-3xl';

  const handleUpload = () => {
    if (!file) return;
    const newTemplate = {
      id: Date.now(),
      name: file.name,
      region: 'Unassigned',
      lastUpdated: new Date().toISOString().split('T')[0],
      fileType: file.name.split('.').pop()?.toUpperCase() || 'FILE',
    };
    setTemplates([...templates, newTemplate]);
    setFile(null);
  };

  const handleDelete = (id) => setTemplates(templates.filter((t) => t.id !== id));

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <motion.div
      className={`min-h-screen ${shellBg} px-10 py-12 md:px-20 overflow-hidden`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight flex items-center gap-2">
            <span
              className={`h-8 w-8 rounded-2xl flex items-center justify-center text-xs font-semibold ${
                isSoft ? 'bg-slate-900 text-slate-50' : 'bg-indigo-600 text-white'
              }`}
            >
              HN
            </span>
            Helmsman Nexus
          </h1>
          <p className="text-xs mt-1 text-slate-500">
            Admin · Upload & manage regulatory export / customs templates
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-500">Theme</span>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className={`px-3 py-1 rounded-full border text-xs ${
              isSoft
                ? 'bg-white border-slate-200 text-slate-700 shadow-sm'
                : 'bg-slate-900/70 border-indigo-500 text-slate-100'
            }`}
          >
            <option value="soft">Soft Glass</option>
            <option value="neon">Neon Hybrid</option>
          </select>
        </div>
      </div>

      {/* Upload Area */}
      <Card className={`${cardStyle} mb-12`}>{/* outer shell */}
        <CardContent className="p-10 text-center flex flex-col items-center justify-center space-y-6">
          <div
            className={`w-full max-w-2xl h-52 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed transition-all duration-300 ${
              dragging
                ? isSoft
                  ? 'border-sky-400 bg-sky-50'
                  : 'border-indigo-400 bg-indigo-500/10 shadow-[0_0_40px_rgba(99,102,241,0.45)]'
                : isSoft
                ? 'border-slate-300 hover:border-slate-400 bg-slate-50'
                : 'border-slate-500/70 hover:border-indigo-400/80 bg-slate-900/40'
            }`}
            onDragOver={(e) => {
              e.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
          >
            <UploadCloud
              className={`h-10 w-10 mb-3 ${
                isSoft ? 'text-slate-400' : 'text-indigo-300'
              }`}
            />
            <p className="text-sm text-slate-500">
              Drag & drop regulatory templates here, or
            </p>
            <Button
              onClick={() => fileInputRef.current?.click()}
              className={`mt-3 rounded-full px-5 py-2 text-xs font-medium flex items-center gap-2 shadow-sm ${
                isSoft
                  ? 'bg-slate-900 text-slate-50 hover:bg-slate-800'
                  : 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-purple-500 hover:to-pink-500'
              }`}
            >
              <FolderUp className="h-4 w-4" /> Browse files
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </div>

          {file && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-center gap-4 mt-6 rounded-2xl px-4 py-3 text-sm ${
                isSoft
                  ? 'bg-slate-50 border border-slate-200 text-slate-700'
                  : 'bg-slate-900/60 border border-indigo-500/60 text-slate-100'
              }`}
            >
              <FileText className={isSoft ? 'h-4 w-4 text-slate-400' : 'h-4 w-4 text-indigo-300'} />
              <span className="truncate max-w-[18rem] text-left">{file.name}</span>
              <Button
                onClick={handleUpload}
                className={`ml-auto rounded-full px-4 py-1 text-xs flex items-center gap-1 ${
                  isSoft
                    ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                    : 'bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 hover:from-emerald-300 hover:to-teal-400'
                }`}
              >
                <UploadCloud className="h-3 w-3" /> Upload
              </Button>
            </motion.div>
          )}
        </CardContent>
      </Card>

      {/* Info tiles */}
      <div className="grid md:grid-cols-3 gap-8 mb-10">
        {[
          {
            icon: <ShieldCheck className="text-emerald-500 h-6 w-6" />,
            title: 'Validated templates',
            desc: 'Each upload is scanned for structure, missing fields, and basic formatting issues.',
          },
          {
            icon: <Layers className="text-indigo-500 h-6 w-6" />,
            title: 'Version history',
            desc: 'Helmsman tracks every update, so you can roll back to a previous template in seconds.',
          },
          {
            icon: <Globe className="text-sky-500 h-6 w-6" />,
            title: 'Mapped to regions',
            desc: 'Templates are tagged to markets (US, UK, EU, LATAM) for fast export corridor setup.',
          },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            whileHover={{ scale: 1.02, y: -2 }}
            className={`${cardStyle} p-6 flex flex-col gap-3`}
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-50">
                {item.title}
              </h3>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed dark:text-slate-300">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Template Table */}
      <Card className={cardStyle}>
        <CardContent className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-base font-semibold flex items-center gap-2 text-slate-800 dark:text-slate-50">
              <FileCheck className="text-emerald-500" /> Regulatory template library
            </h2>
          </div>

          <div className={`overflow-x-auto rounded-2xl border ${isSoft ? 'border-slate-200' : 'border-slate-700/70'}`}>
            <table className="min-w-full text-xs">
              <thead
                className={
                  isSoft
                    ? 'bg-slate-50 border-b border-slate-200 text-slate-500'
                    : 'bg-slate-900/70 border-b border-slate-700/80 text-slate-300'
                }
              >
                <tr>
                  <th className="py-3 px-4 text-left font-medium">Template name</th>
                  <th className="py-3 px-4 text-left font-medium">Region</th>
                  <th className="py-3 px-4 text-left font-medium">File type</th>
                  <th className="py-3 px-4 text-left font-medium">Last updated</th>
                  <th className="py-3 px-4 text-right font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {templates.map((t) => (
                  <motion.tr
                    key={t.id}
                    whileHover={{ scale: 1.005, y: -1 }}
                    className={
                      isSoft
                        ? 'border-b border-slate-100 hover:bg-slate-50'
                        : 'border-b border-slate-800 hover:bg-slate-900/60'
                    }
                  >
                    <td className="py-3 px-4 text-slate-800 dark:text-slate-50 font-medium">
                      {t.name}
                    </td>
                    <td className="py-3 px-4 text-slate-500 dark:text-slate-300">
                      {t.region}
                    </td>
                    <td className="py-3 px-4 text-slate-600 dark:text-slate-200">
                      {t.fileType}
                    </td>
                    <td className="py-3 px-4 text-slate-500 dark:text-slate-300">
                      {t.lastUpdated}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className={`h-7 px-3 text-[11px] border rounded-full flex items-center gap-1 ${
                            isSoft
                              ? 'border-slate-200 text-slate-700 hover:bg-slate-50'
                              : 'border-indigo-500/70 text-indigo-100 hover:bg-indigo-600/20'
                          }`}
                        >
                          <UploadCloud className="h-3 w-3" /> Update
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(t.id)}
                          className={`h-7 px-3 text-[11px] border rounded-full flex items-center gap-1 ${
                            isSoft
                              ? 'border-rose-200 text-rose-600 hover:bg-rose-50'
                              : 'border-rose-400/80 text-rose-200 hover:bg-rose-500/20'
                          }`}
                        >
                          <Trash2 className="h-3 w-3" /> Delete
                        </Button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
