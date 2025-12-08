
import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card.jsx';
import { Button } from '../components/ui/button.jsx';
import { motion } from 'framer-motion';
import {
  Globe2,
  MapPin,
  BarChart3,
  Flag,
  RefreshCw,
  ChevronDown,
} from 'lucide-react';

// Helmsman Nexus – Global Regulatory Map
// Theme updated to match the "Soft Glass" regulatory templates screen

export default function GlobalRegulatoryMap() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const countryData = [
    {
      name: 'United States',
      duties: 'Moderate import duties for spirits; label approval via TTB.',
      label: 'TTB certification mandatory.',
      docs: 'Requires commercial invoice, COLA approval, and certificate of origin.',
      status: 'Active',
      actions: ['Renew TTB license', 'Monitor COLA updates'],
    },
    {
      name: 'United Kingdom',
      duties: 'Excise duty and VAT applied at import stage.',
      label: 'Must meet HMRC export compliance.',
      docs: 'Needs EORI number, invoice, and packing list.',
      status: 'Ready',
      actions: ['Submit export entry form', 'Sync duty rates weekly'],
    },
    {
      name: 'European Union',
      duties: 'Harmonized excise structure; cross-border trade allowed.',
      label: 'Allergen and ingredient disclosure mandatory.',
      docs: 'Requires customs declaration and ingredient compliance file.',
      status: 'Not Started',
      actions: ['Collect allergen data', 'Prepare EU compliance document'],
    },
  ];

  const statusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-emerald-400';
      case 'Ready':
        return 'bg-amber-400';
      default:
        return 'bg-rose-400';
    }
  };

  const shellBg = 'bg-[#f5f7fc] text-slate-800';
  const cardStyle =
    'bg-white border border-slate-100 rounded-3xl shadow-[0_18px_40px_rgba(15,23,42,0.06)]';

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
            Admin · Global regulatory readiness map across core export markets
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs border border-slate-200 bg-white rounded-full px-3 py-1 shadow-sm">
          <span className="text-slate-500">Theme</span>
          <span className="font-semibold text-slate-800 flex items-center gap-1">
            Soft Glass <ChevronDown className="h-3 w-3 text-slate-400" />
          </span>
        </div>
      </div>

      {/* Layout */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Map + details */}
        <Card className={`${cardStyle} lg:col-span-2`}>
          <CardContent className="p-8 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg md:text-xl font-semibold flex items-center gap-2 text-slate-900">
                  <Globe2 className="text-indigo-500 h-5 w-5" /> Global regulatory map
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  View duties, label rules, and documentation readiness for each key market.
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1 text-[11px] border-slate-200 text-slate-700 rounded-full bg-white hover:bg-slate-50"
              >
                <RefreshCw className="h-3.5 w-3.5" /> Sync data
              </Button>
            </div>

            {/* Country grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {countryData.map((c) => (
                <motion.button
                  key={c.name}
                  type="button"
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setSelectedCountry(c.name)}
                  className={`group relative rounded-2xl px-3 py-3 text-left cursor-pointer border text-xs transition-all duration-200 bg-[#f5f7fc] ${
                    selectedCountry === c.name
                      ? 'border-indigo-300 bg-[#e5edff] shadow-sm'
                      : 'border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div
                    className={`absolute left-0 top-0 h-full w-1 rounded-l-2xl ${statusColor(
                      c.status,
                    )}`}
                  />
                  <div className="pl-2">
                    <p className="font-semibold text-slate-900 flex items-center gap-1 mb-1 text-[11px]">
                      <MapPin className="h-3 w-3 text-indigo-500" /> {c.name}
                    </p>
                    <p
                      className={`font-semibold text-[11px] ${
                        c.status === 'Active'
                          ? 'text-emerald-600'
                          : c.status === 'Ready'
                          ? 'text-amber-600'
                          : 'text-rose-600'
                      }`}
                    >
                      {c.status}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Detail panel */}
            {selectedCountry && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 rounded-2xl border border-slate-100 bg-[#f3f6fd] p-6"
              >
                {countryData
                  .filter((x) => x.name === selectedCountry)
                  .map((country) => (
                    <div key={country.name} className="space-y-4 text-xs">
                      <h3 className="font-semibold text-slate-900 flex items-center gap-2 text-sm">
                        <Flag className="h-4 w-4 text-indigo-500" /> {country.name}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-1 text-slate-600">
                          <p>
                            <span className="font-semibold text-slate-900">Duties: </span>
                            {country.duties}
                          </p>
                          <p>
                            <span className="font-semibold text-slate-900">Label rules: </span>
                            {country.label}
                          </p>
                          <p>
                            <span className="font-semibold text-slate-900">Documentation: </span>
                            {country.docs}
                          </p>
                        </div>
                        <div className="space-y-1 text-slate-600">
                          <p className="font-semibold text-slate-900 mb-1">Next actions</p>
                          <ul className="list-disc ml-5 space-y-1">
                            {country.actions.map((a) => (
                              <li key={a}>{a}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
              </motion.div>
            )}
          </CardContent>
        </Card>

        {/* Insights panel */}
        <Card className={cardStyle}>
          <CardContent className="p-8 space-y-6">
            <h2 className="text-lg font-semibold flex items-center gap-2 text-slate-900">
              <BarChart3 className="text-indigo-500 h-5 w-5" /> Market readiness
            </h2>

            <div className="text-sm space-y-3">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-600">Markets active</span>
                <span className="font-semibold text-emerald-600">12</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-600">In progress</span>
                <span className="font-semibold text-amber-600">8</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-600">Not started</span>
                <span className="font-semibold text-rose-600">4</span>
              </div>
            </div>

            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
              <motion.div
                className="h-2 bg-indigo-500"
                initial={{ width: 0 }}
                animate={{ width: '68%' }}
                transition={{ duration: 1.1 }}
              />
            </div>

            <Button
              variant="outline"
              className="w-full border-slate-200 text-slate-700 text-xs rounded-full px-3 py-2 flex items-center justify-center gap-1 bg-white hover:bg-slate-50"
            >
              <Globe2 className="h-3.5 w-3.5" /> Export market report (PDF)
            </Button>

            <p className="text-[11px] text-slate-500 leading-relaxed">
              This shell is wired for future integration with live regulatory APIs and map visualisations. Use it as the
              base layout for readiness scoring and corridor planning.
            </p>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}