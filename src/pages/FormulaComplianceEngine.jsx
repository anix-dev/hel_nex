import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card.js';
import { Button } from '../components/ui/button.js';
import { Input } from '../components/ui/input.jsx';
import { motion } from 'framer-motion';
import { FlaskConical, AlertTriangle, CheckCircle2, XCircle, FileText } from 'lucide-react';

// Helmsman Nexus – Formula & Ingredient Compliance Engine (Soft Glass Theme)
// Updated to match attached theme (light background, soft shadows, clean white cards)

export default function FormulaComplianceEngine() {
  const [formData, setFormData] = useState({
    productName: '',
    category: '',
    abv: '',
    sugar: '',
    additives: '',
    ingredients: '',
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const runCompliance = () => {
    const issues = [];
    const abv = Number(formData.abv || 0);
    const sugar = Number(formData.sugar || 0);
    const cat = formData.category.toLowerCase();
    const additives = formData.additives.toLowerCase();
    const ingredients = formData.ingredients.toLowerCase();

    if (cat.includes('liqueur') && sugar < 100)
      issues.push({ type: 'Sugar threshold', severity: 'AMBER', message: 'Low sugar for Liqueur under EU guidelines', region: 'EU' });
    if (cat.includes('vodka') && abv < 37.5)
      issues.push({ type: 'ABV requirement', severity: 'RED', message: 'Vodka must be ≥37.5% ABV (EU/UK)', region: 'EU' });
    if (abv > 55)
      issues.push({ type: 'ABV limit', severity: 'AMBER', message: 'High ABV, check US/UK max and label warnings', region: 'ALL' });

    const overall = issues.some((i) => i.severity === 'RED') ? 'RED' : issues.length ? 'AMBER' : 'GREEN';
    setResult({ overall, issues });
  };

  const colorFor = (s) =>
    s === 'RED' ? 'text-rose-500' : s === 'AMBER' ? 'text-amber-500' : 'text-emerald-500';

  return (
    <motion.div
      className="min-h-screen bg-[#f5f7fc] text-slate-900 px-8 py-10 md:px-16"
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
            Admin · Formula & Ingredient Compliance Engine
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs border border-slate-200 bg-white rounded-full px-3 py-1 shadow-sm">
          <span className="text-slate-500">Theme</span>
          <span className="font-semibold text-slate-800">Soft Glass</span>
        </div>
      </div>

      {/* Main layout */}
      <div className="grid lg:grid-cols-3 gap-8">
        <Card className="bg-white border border-slate-100 rounded-3xl shadow-[0_8px_30px_rgba(15,23,42,0.06)] lg:col-span-2">
          <CardContent className="p-8 space-y-6">
            <h2 className="text-lg font-semibold flex items-center gap-2 text-slate-900">
              <FlaskConical className="text-indigo-500" /> Formula & Ingredient Compliance
            </h2>
            <p className="text-sm text-slate-600">
              Evaluates recipes for additives, sugar thresholds, and restricted ingredients across markets.
            </p>

            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <Input name="productName" value={formData.productName} onChange={handleChange} placeholder="Product Name / SKU" />
              <Input name="category" value={formData.category} onChange={handleChange} placeholder="Category (Vodka, Liqueur, etc.)" />
              <Input name="abv" value={formData.abv} onChange={handleChange} placeholder="ABV %" />
              <Input name="sugar" value={formData.sugar} onChange={handleChange} placeholder="Sugar g/L" />
              <Input name="additives" value={formData.additives} onChange={handleChange} placeholder="Additives (E-codes, colours)" />
              <Input name="ingredients" value={formData.ingredients} onChange={handleChange} placeholder="Key ingredients / botanicals" />
            </div>

            <Button onClick={runCompliance} className="mt-6 bg-slate-900 text-white rounded-full text-xs px-5 py-2 hover:bg-slate-800">
              Run Compliance Check
            </Button>

            <p className="text-[11px] text-slate-500 leading-relaxed">
              Developer Note: Plug these inputs into API to validate per-market rules. Thresholds are editable by admin.
            </p>
          </CardContent>
        </Card>

        {/* Compliance Snapshot */}
        <Card className="bg-white border border-slate-100 rounded-3xl shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-md font-semibold text-slate-900 mb-2">Compliance Snapshot</h3>

            {result ? (
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-slate-700">
                  Overall Status: <span className={`font-semibold ${colorFor(result.overall)}`}>{result.overall}</span>
                </div>
                <ul className="space-y-2">
                  {result.issues.map((i, idx) => (
                    <li key={idx} className="border border-slate-200 rounded-xl bg-slate-50 px-3 py-2 text-xs">
                      <div className="flex items-center gap-1">
                        {i.severity === 'RED' ? (
                          <XCircle className="h-3.5 w-3.5 text-rose-500" />
                        ) : (
                          <AlertTriangle className="h-3.5 w-3.5 text-amber-500" />
                        )}
                        <span className="font-semibold">{i.type}</span>
                      </div>
                      <p className="text-slate-600 mt-1">{i.message}</p>
                      <p className="text-slate-400 text-[10px]">Region: {i.region}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-sm text-slate-500">Run a check to see potential compliance flags.</p>
            )}

            <Button variant="outline" className="w-full mt-5 border-slate-200 text-slate-700 text-xs rounded-full px-3 py-2 bg-white hover:bg-slate-50">
              <FileText className="h-3.5 w-3.5" /> Download Report (PDF)
            </Button>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}

