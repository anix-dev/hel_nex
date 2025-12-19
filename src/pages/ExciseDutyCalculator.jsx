import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card.jsx';
import { Button } from '../components/ui/button.jsx';
import { Input } from '../components/ui/input.jsx';
import { motion } from 'framer-motion';
import { Calculator, Percent, TrendingUp, FileText, Settings } from 'lucide-react';
import Footer from './Footer.jsx';

export default function ExciseDutyCalculator() {
  const [formData, setFormData] = useState({ abv: '', volume: '', productType: '', hsCode: '', market: '' });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCalculate = () => {
    const { abv, volume } = formData;
    if (!abv || !volume) return;

    const duties = {
      excise: parseFloat(abv) * 2.5,
      vat: parseFloat(volume) * 0.8,
      total: parseFloat(abv) * 2.5 + parseFloat(volume) * 0.8,
    };

    setResult(duties);
  };

  const shellBg = 'bg-[#f5f7fc] text-slate-900';
  const cardStyle = 'bg-white border border-slate-100 rounded-3xl shadow-[0_8px_30px_rgba(15,23,42,0.06)]';

  return (
    <motion.div
      className={`min-h-screen ${shellBg} px-8 py-10 md:px-16 overflow-hidden`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight flex items-center gap-2 text-slate-900">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white text-xs font-semibold">
                HN
              </span>
              Helmsman Nexus
            </h1>
            <p className="text-xs md:text-sm text-slate-500 mt-1">Admin · Excise Duty Calculator</p>
          </div>

          <div className="flex items-center gap-2 text-xs border border-slate-200 bg-white rounded-full px-3 py-1 shadow-sm">
            <span className="text-slate-500">Theme</span>
            <span className="font-semibold text-slate-800">Soft Glass</span>
          </div>
        </div>
        
        <Footer />      
      </>

      {/* Input and Result Sections */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Input Section */}
        <Card className={`${cardStyle} lg:col-span-2`}>
          <CardContent className="p-8 space-y-6">
            <h2 className="text-lg font-semibold flex items-center gap-2 text-slate-900">
              <Calculator className="text-indigo-500" /> Excise & Duty Calculator
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              Automatically calculates taxes by market. Enter ABV, volume, product type, HS code, and destination market.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Input name="abv" value={formData.abv} onChange={handleChange} placeholder="ABV (%)" />
              <Input name="volume" value={formData.volume} onChange={handleChange} placeholder="Volume (ml)" />
              <Input name="productType" value={formData.productType} onChange={handleChange} placeholder="Product Type (Whiskey, Rum, etc.)" />
              <Input name="hsCode" value={formData.hsCode} onChange={handleChange} placeholder="HS Code" />
              <Input name="market" value={formData.market} onChange={handleChange} placeholder="Destination Market (UK, US, EU)" />
            </div>

            <Button
              className="mt-6 bg-slate-900 text-white font-semibold rounded-full py-2 text-xs hover:bg-slate-800"
              onClick={handleCalculate}
            >
              Calculate Duties
            </Button>

          </CardContent>
        </Card>

        {/* Result Section */}
        <Card className={`${cardStyle} lg:col-span-1`}>
          <CardContent className="p-6 space-y-6">
            <h2 className="text-md font-semibold flex items-center gap-2 text-slate-900">
              <Percent className="text-indigo-500" /> Estimated Tax Results
            </h2>
            {result ? (
              <div className="space-y-4 text-sm">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-600">Excise Duty</span>
                  <span className="font-semibold text-slate-900">${result.excise.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-600">VAT / Goods Tax</span>
                  <span className="font-semibold text-slate-900">${result.vat.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold text-slate-900">
                  <span>Total Estimated Tax</span>
                  <span>${result.total.toFixed(2)}</span>
                </div>
              </div>
            ) : (
              <p className="text-slate-500 text-sm">Enter details above and click calculate to view estimated duties.</p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-3 gap-8 mt-10">
        <Card className={cardStyle}>
          <CardContent className="p-6">
            <h3 className="text-md font-semibold flex items-center gap-2 mb-3 text-slate-900">
              <FileText className="text-indigo-500" /> Quick Actions
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>📄 Start New Compliance Run</li>
              <li>⬆️ Upload Batch CSV</li>
              <li>⚙️ Manage Tax & Rule Tables</li>
            </ul>
          </CardContent>
        </Card>

        <Card className={cardStyle}>
          <CardContent className="p-6">
            <h3 className="text-md font-semibold flex items-center gap-2 mb-3 text-slate-900">
              <TrendingUp className="text-indigo-500" /> Scenario Comparison
            </h3>
            <p className="text-sm text-slate-600">
              Compare UK vs US vs EU estimated duties for same product batch.
            </p>
          </CardContent>
        </Card>

        <Card className={cardStyle}>
          <CardContent className="p-6">
            <h3 className="text-md font-semibold flex items-center gap-2 mb-3 text-slate-900">
              <Settings className="text-indigo-500" /> Design Notes
            </h3>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• Theme updated to Soft Glass visual system</li>
              <li>• Softer shadows, light cards, blue-grey background</li>
              <li>• Consistent with regulatory template layout</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
