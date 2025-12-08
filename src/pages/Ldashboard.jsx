import React, { useState } from 'react';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';


// Helmsman Nexus – Segmented Gradient Gauge for Compliance Score


function Ldashboard() {

  const [theme, setTheme] = useState('soft-glass');


  const neonBackground = {

    background: 'linear-gradient(135deg, #0c1020 0%, #1c1e3a 40%, #0a0c1a 100%)',

  };


  return (

    <div

      style={theme === 'neon-dark' ? neonBackground : {}}

      className={

        theme === 'soft-glass'

          ? 'min-h-screen bg-[#f6f7fb] text-slate-900'

          : 'min-h-screen text-white'

      }

    >

      <GlobalStyles />

      <div className="max-w-7xl mx-auto p-6">

        <Header theme={theme} setTheme={setTheme} />

        <div className="space-y-6 mt-4">

          <ComplianceGauge theme={theme} />

          <BottomSection theme={theme} />

        </div>

      </div>

    </div>

  );

}


function GlobalStyles() {

  return (

    <style>{`

      :root {

        --soft-bg: #ffffffcc;

        --soft-border: #e2e8f0;

      }

      .glass-card {

        backdrop-filter: blur(16px) saturate(180%);

        background-color: var(--soft-bg);

        border: 1px solid var(--soft-border);

        border-radius: 20px;

        box-shadow: 0 8px 24px rgba(0,0,0,0.06);

      }

      .glass-dark {

        backdrop-filter: blur(18px) saturate(160%);

        background: rgba(12, 14, 30, 0.5);

        border-radius: 20px;

        border: 1px solid rgba(255, 255, 255, 0.08);

        box-shadow: 0 0 25px rgba(123,47,247,0.3), 0 0 40px rgba(0,166,251,0.2);

      }

    `}</style>

  );

}


function Header({ theme, setTheme }) {

  const isSoft = theme === 'soft-glass';

  return (

    <header className="flex items-center justify-between mb-4">

      <div>

        <h1 className={`text-2xl font-bold ${isSoft ? 'text-slate-800' : 'text-white'}`}>Helmsman Nexus Dashboard</h1>

        <p className={`text-sm ${isSoft ? 'text-slate-500' : 'text-slate-400'}`}>Compliance, AI Predictions & Global Readiness</p>

      </div>

      <select value={theme} onChange={(e) => setTheme(e.target.value)} className="border rounded px-3 py-1 text-sm">

        <option value="soft-glass">Soft Glass</option>

        <option value="neon-dark">Neon Hybrid</option>

      </select>

    </header>

  );

}


function ComplianceGauge({ theme }) {

  const isSoft = theme === 'soft-glass';

  const card = isSoft ? 'glass-card' : 'glass-dark';


  const score = 87;


  return (

    <div className={`${card} p-8 text-center relative`}> 

      <h2 className={`text-lg font-semibold mb-6 ${isSoft ? 'text-slate-800' : 'text-white'}`}>Overall Compliance Health</h2>

      <div className="flex justify-center mb-2">

        <div style={{ width: 220, height: 220 }}>

          <CircularProgressbar

            value={score}

            text={`${score}%`}

            strokeWidth={12}

            styles={buildStyles({

              textColor: isSoft ? '#1e293b' : '#fff',

              trailColor: 'rgba(255,255,255,0.1)',

              pathColor: `url(#gradient)`

            })}

          />

          <svg style={{ height: 0 }}>

            <defs>

              <linearGradient id="gradient" gradientTransform="rotate(90)">

                <stop offset="0%" stopColor="#7b2ff7" />

                <stop offset="50%" stopColor="#00a6fb" />

                <stop offset="100%" stopColor="#10b981" />

              </linearGradient>

            </defs>

          </svg>

        </div>

      </div>

      <div className={`text-sm mt-2 ${isSoft ? 'text-slate-600' : 'text-slate-400'}`}>Total Compliance Score</div>

      <div className="mt-6 grid grid-cols-3 gap-4">

        <Metric label="Compliant SKUs" value="78%" color="emerald" />

        <Metric label="Amber Status" value="15%" color="amber" />

        <Metric label="Rejected Labels" value="7%" color="rose" />

      </div>

    </div>

  );

}


function Metric({ label, value, color }) {

  const colorMap = {

    emerald: 'text-emerald-500',

    amber: 'text-amber-500',

    rose: 'text-rose-500',

  };

  return (

    <div className="text-center">

      <div className={`text-xl font-bold ${colorMap[color]}`}>{value}</div>

      <div className="text-sm text-slate-500">{label}</div>

    </div>

  );

}


function BottomSection({ theme }) {

  const isSoft = theme === 'soft-glass';

  const card = isSoft ? 'glass-card' : 'glass-dark';

  const titleClass = isSoft ? 'text-slate-800' : 'text-white';

  const textClass = isSoft ? 'text-slate-500' : 'text-slate-300';


  return (

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

      <div className={`${card} p-6 lg:col-span-2`}>

        <h3 className={`text-base font-semibold mb-3 ${titleClass}`}>Approval Timelines</h3>

        <TimelineRow label="TTB Approval" value="8 days avg" color="bg-sky-500" />

        <TimelineRow label="HMRC Export" value="5 days avg" color="bg-amber-400" />

        <TimelineRow label="EU Check" value="11 days avg" color="bg-emerald-500" />

      </div>

      <div className={`${card} p-6`}>

        <h3 className={`text-base font-semibold mb-3 ${titleClass}`}>Export Readiness</h3>

        <p className={`text-sm ${textClass}`}>Ready markets: UK, US, EU</p>

        <p className={`text-sm mt-1 ${textClass}`}>Pending: Singapore, Japan (Phase 2)</p>

      </div>

    </div>

  );

}


function TimelineRow({ label, value, color }) {

  return (

    <div className="flex items-center justify-between py-2 border-b last:border-b-0 border-slate-200/60">

      <div className="flex items-center gap-2">

        <span className={`w-2.5 h-2.5 rounded-full ${color}`} />

        <span className="text-sm text-slate-600">{label}</span>

      </div>

      <span className="text-sm text-slate-400">{value}</span>

    </div>

  );

}


export default Ldashboard;