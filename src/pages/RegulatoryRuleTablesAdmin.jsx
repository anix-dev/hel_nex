import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Table, Sparkles, Globe2, Filter, Plus, Trash2, Save, Edit3 } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card.jsx';
import { Button } from '../components/ui/button';

// Helmsman Nexus – Regulatory Rule Tables Admin
// Theme updated to match the attached "Soft Glass" regulatory templates screen

export default function RegulatoryRuleTablesAdmin() {
  const [selectedMarket, setSelectedMarket] = useState('US');
  const [rules, setRules] = useState([
    {
      id: 1,
      market: 'US',
      category: 'Spirits – Vodka',
      ruleType: 'Label',
      condition: 'Mandatory health warning statement',
      threshold: 'ABV ≥ 0.5%',
      notes: 'TTB COLA label text required on back panel.',
    },
    {
      id: 2,
      market: 'UK',
      category: 'Gin',
      ruleType: 'ABV',
      condition: 'Minimum ABV for category',
      threshold: '≥ 37.5%',
      notes: 'HMRC category definition for gin.',
    },
    {
      id: 3,
      market: 'EU',
      category: 'Liqueur',
      ruleType: 'Sugar',
      condition: 'Minimum sugar content (g/L)',
      threshold: '≥ 100 g/L',
      notes: 'EU spirits regulation – liqueur sweetening.',
    },
  ]);

  const shellBg = 'bg-[#f5f7fc] text-slate-800';
  const cardStyle = 'bg-white border border-slate-100 rounded-3xl shadow-[0_18px_40px_rgba(15,23,42,0.06)]';

  const markets = [
    { key: 'US', label: 'United States (TTB)' },
    { key: 'UK', label: 'United Kingdom (HMRC)' },
    { key: 'EU', label: 'European Union' },
  ];

  const visibleRules = rules.filter((r) => r.market === selectedMarket);

  const handleCellChange = (id, field, value) => {
    setRules((prev) =>
      prev.map((row) =>
        row.id === id
          ? {
              ...row,
              [field]: value,
            }
          : row,
      ),
    );
  };

  const handleAddRow = () => {
    const nextId = rules.length ? Math.max(...rules.map((r) => r.id)) + 1 : 1;
    setRules((prev) => [
      ...prev,
      {
        id: nextId,
        market: selectedMarket,
        category: 'New category',
        ruleType: 'Label',
        condition: 'Describe rule condition…',
        threshold: '-',
        notes: 'Internal notes…',
      },
    ]);
  };

  const handleDeleteRow = (id) => {
    setRules((prev) => prev.filter((r) => r.id !== id));
  };

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
            Admin · Configure regulatory rule tables for excise, label & ingredient compliance
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs border border-slate-200 bg-white rounded-full px-3 py-1 shadow-sm">
          <span className="text-slate-500">Theme</span>
          <span className="font-semibold text-slate-800">Soft Glass</span>
        </div>
      </div>

      {/* Top row: market selector + snapshot */}
      <div className="grid lg:grid-cols-3 gap-8 mb-8">
        <Card className={`${cardStyle} lg:col-span-2`}>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold flex items-center gap-2 text-slate-900">
                <Table className="h-4 w-4 text-slate-500" /> Regulatory rule tables
              </h2>
              <Button
                size="sm"
                variant="outline"
                className="border-slate-200 text-slate-700 text-xs flex items-center gap-1 rounded-full px-3 bg-white hover:bg-slate-50"
              >
                <Save className="h-3.5 w-3.5" /> Save changes
              </Button>
            </div>

            <p className="text-xs text-slate-500">
              Edit rule logic that powers the formula engine, label compliance and excise duty calculator. Changes apply
              to new calculations after you save.
            </p>

            {/* Market Segmented Pills */}
            <div className="flex flex-wrap gap-2 mt-3">
              {markets.map((m) => (
                <button
                  key={m.key}
                  onClick={() => setSelectedMarket(m.key)}
                  className={`flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border transition-colors ${
                    selectedMarket === m.key
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Globe2 className="h-3.5 w-3.5" /> {m.label}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Side summary card */}
        <Card className={cardStyle}>
          <CardContent className="p-6 space-y-3 text-sm">
            <div className="flex items-center gap-2 mb-1">
              <Filter className="text-slate-500 h-4 w-4" />
              <h3 className="font-semibold text-sm text-slate-900">Rule snapshot</h3>
            </div>
            <p className="text-xs text-slate-500">
              Current view:{' '}
              <span className="font-semibold text-slate-800">
                {markets.find((m) => m.key === selectedMarket)?.label}
              </span>
            </p>
            <p className="text-xs text-slate-500">
              Total rules configured for this market:{' '}
              <span className="font-semibold text-slate-800">{visibleRules.length}</span>
            </p>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Use this panel to manage category thresholds (ABV, sugar), additive legality and label statement
              requirements per market.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main table card */}
      <Card className={cardStyle}>
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-md font-semibold text-slate-900">Editable rule table</h2>
            <Button
              size="sm"
              onClick={handleAddRow}
              className="bg-slate-900 text-white text-xs rounded-full px-3 py-1 flex items-center gap-1 shadow-sm hover:bg-slate-800"
            >
              <Plus className="h-3.5 w-3.5" /> Add rule
            </Button>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-100">
            <table className="min-w-full text-xs align-top">
              <thead className="bg-[#f0f3f9] border-b border-slate-200 text-left text-slate-500">
                <tr>
                  <th className="py-3 px-3 w-[18%]">Category</th>
                  <th className="py-3 px-3 w-[10%]">Rule type</th>
                  <th className="py-3 px-3 w-[28%]">Condition</th>
                  <th className="py-3 px-3 w-[14%]">Threshold</th>
                  <th className="py-3 px-3 w-[20%]">Notes</th>
                  <th className="py-3 px-3 w-[10%] text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {visibleRules.length ? (
                  visibleRules.map((row) => (
                    <motion.tr
                      key={row.id}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
                    >
                      <td className="py-2.5 px-3">
                        <input
                          className="w-full bg-transparent border border-slate-200 rounded-xl px-2 py-1 text-[11px] focus:outline-none focus:ring-1 focus:ring-slate-400"
                          value={row.category}
                          onChange={(e) => handleCellChange(row.id, 'category', e.target.value)}
                        />
                      </td>
                      <td className="py-2.5 px-3">
                        <select
                          className="w-full bg-transparent border border-slate-200 rounded-xl px-2 py-1 text-[11px] focus:outline-none focus:ring-1 focus:ring-slate-400"
                          value={row.ruleType}
                          onChange={(e) => handleCellChange(row.id, 'ruleType', e.target.value)}
                        >
                          <option value="Excise">Excise</option>
                          <option value="Label">Label</option>
                          <option value="Ingredient">Ingredient</option>
                          <option value="Sugar">Sugar</option>
                          <option value="ABV">ABV</option>
                        </select>
                      </td>
                      <td className="py-2.5 px-3">
                        <textarea
                          rows={2}
                          className="w-full bg-transparent border border-slate-200 rounded-xl px-2 py-1 text-[11px] resize-none focus:outline-none focus:ring-1 focus:ring-slate-400"
                          value={row.condition}
                          onChange={(e) => handleCellChange(row.id, 'condition', e.target.value)}
                        />
                      </td>
                      <td className="py-2.5 px-3">
                        <input
                          className="w-full bg-transparent border border-slate-200 rounded-xl px-2 py-1 text-[11px] focus:outline-none focus:ring-1 focus:ring-slate-400"
                          value={row.threshold}
                          onChange={(e) => handleCellChange(row.id, 'threshold', e.target.value)}
                        />
                      </td>
                      <td className="py-2.5 px-3">
                        <textarea
                          rows={2}
                          className="w-full bg-transparent border border-slate-200 rounded-xl px-2 py-1 text-[11px] resize-none focus:outline-none focus:ring-1 focus:ring-slate-400"
                          value={row.notes}
                          onChange={(e) => handleCellChange(row.id, 'notes', e.target.value)}
                        />
                      </td>
                      <td className="py-2.5 px-3 text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-slate-200 text-slate-600 text-[10px] px-2 py-1 rounded-full flex items-center gap-1 bg-white hover:bg-slate-50"
                          >
                            <Edit3 className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDeleteRow(row.id)}
                            className="border-rose-200 text-rose-600 text-[10px] px-2 py-1 rounded-full flex items-center gap-1 bg-white hover:bg-rose-50"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="py-6 text-center text-xs text-slate-500">
                      No rules configured yet for this market. Click “Add rule” to start.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <p className="text-[11px] text-slate-400 mt-3">
            Developer note: Persist this table to your rules configuration store (PostgreSQL, DynamoDB or a config
            service). Each row should map to a rule object consumed by the excise, label and formula engines.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
