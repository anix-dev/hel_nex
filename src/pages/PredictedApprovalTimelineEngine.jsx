import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../components/ui/card.jsx';
import { Button } from '../components/ui/button.jsx';
import { motion } from 'framer-motion';
import { Clock, BarChart3, Timer } from 'lucide-react';
import Footer from './Footer.jsx';

export default function PredictedApprovalTimelineEngine() {
  const [timelines, setTimelines] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setTimelines([
      { name: 'TTB Label Approval', avg: 32, variance: 5, status: 'On Track', description: 'Predicted completion for label submission review based on TTB data trends.' },
      { name: 'HMRC Export Processing', avg: 21, variance: 3, status: 'Pending', description: 'Estimated export document processing under HMRC guidelines.' },
      { name: 'EU Ingredient Check', avg: 18, variance: 4, status: 'At Risk', description: 'Ingredient verification and allergen clearance timeline from EU datasets.' },
    ]);
  }, []);

  const statusColor = (status) => {
    switch (status) {
      case 'On Track':
        return 'bg-emerald-300'; // lighter shade
      case 'Pending':
        return 'bg-amber-300'; // lighter shade
      default:
        return 'bg-rose-300'; // lighter shade
    }
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
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight flex items-center gap-2 text-slate-900">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white text-xs font-semibold">
                HN
              </span>
              Helmsman Nexus
            </h1>
            <p className="text-xs md:text-sm text-slate-500 mt-1">
              Admin · Predicted Approval Timeline Engine
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs border border-slate-200 bg-white rounded-full px-3 py-1 shadow-sm">
            <span className="text-slate-500">Theme</span>
            <span className="font-semibold text-slate-800">Soft Glass</span>
          </div>
        </div>
        <Footer />
      </>

      {/* Layout */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Timeline Section */}
        <Card className={`${cardStyle} lg:col-span-2`}>
          <CardContent className="p-8 space-y-6">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Timer className="text-indigo-500" /> Predicted Approval Timelines
            </h2>
            <p className="text-sm text-slate-600">
              Estimated approval durations for regulatory authorities using historical and AI-driven data trends.
            </p>

            <div className="space-y-6">
              {timelines.map((item, index) => (
                <motion.div
                  key={index}
                  onClick={() => setSelected(index)}
                  className={`rounded-2xl p-5 cursor-pointer transition-all duration-300 border ${
                    selected === index
                      ? 'bg-[#e5edff] border-indigo-200 shadow-md'
                      : 'bg-[#f9fafc] border-slate-200 hover:shadow-sm'
                  }`}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-sm flex items-center gap-2">
                      <div className={`w-2.5 h-2.5 rounded-full ${statusColor(item.status)}`}></div>
                      {item.name}
                    </h3>
                    <span className="text-xs text-slate-500">~{item.avg} days avg</span>
                  </div>

                  <div className="relative h-3 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      className={`absolute top-0 left-0 h-3 rounded-full ${statusColor(item.status)}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${(item.avg / 40) * 100}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>

                  <p className="text-xs text-slate-500 mt-2 leading-snug">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {selected !== null && (
              <motion.div
                className="mt-8 p-5 rounded-2xl border border-indigo-100 bg-[#f3f6fd]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h4 className="text-sm font-semibold mb-2">Detailed Projection</h4>
                <p className="text-xs text-slate-600">
                  Based on {timelines[selected].avg} days (±{timelines[selected].variance}), current status is{' '}
                  <span className="font-semibold text-slate-900">{timelines[selected].status}</span>.
                </p>
              </motion.div>
            )}

            <Button className="mt-6 bg-slate-900 text-white rounded-full text-xs px-5 py-2 hover:bg-slate-800">
              Recalculate Predictions
            </Button>
          </CardContent>
        </Card>

        {/* Insights Section */}
        <Card className={cardStyle}>
          <CardContent className="p-8 space-y-6">
            <h2 className="text-lg font-semibold flex items-center gap-2 text-slate-900">
              <BarChart3 className="text-indigo-500 h-5 w-5" /> Timeline Insights
            </h2>

            <div className="text-sm space-y-3">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-600">Average Approval Time</span>
                <span className="font-semibold text-slate-900">24 days</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-600">Fastest Recorded</span>
                <span className="font-semibold text-slate-900">10 days</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-600">Longest Recorded</span>
                <span className="font-semibold text-slate-900">48 days</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-600">Predictive Accuracy</span>
                <span className="font-semibold text-emerald-600">94%</span>
              </div>
            </div>

            <Button variant="outline" className="w-full border-slate-200 text-slate-700 text-xs rounded-full px-3 py-2 flex items-center justify-center gap-1 bg-white hover:bg-slate-50">
              <Clock className="h-3.5 w-3.5" /> Export Report (PDF)
            </Button>

            <p className="text-[11px] text-slate-500 leading-relaxed">
              This interface shows predictive approval timelines with lighter shades and the Soft Glass theme.
            </p>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
