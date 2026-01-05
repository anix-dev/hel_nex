import React, { useState } from 'react';
import Footer from './Footer';


// Helmsman Nexus - Full Enhanced Mockup

// Two themes: "soft-glass" (Apple-style enterprise) and "neon-dark" (hybrid purple+aqua futuristic)

// Two main screens: Label Upload & Compliance, Digital Product Passport

// This is a VISUAL MOCK ONLY (no real backend) – perfect for demos.


const sampleSKU = {

  id: 'SKU-001',

  name: 'Highland Reserve - 700ml',

  abv: '42%',

  volume: '700 ml',

  category: 'Whiskey',

  ingredients: ['Water', 'Barley', 'Yeast'],

  labels: [{ id: 1, name: 'Front label v1', uploadedAt: '2025-12-01' }],

  compliance: {

    US: { status: 'amber', issues: ['Missing allergen statement'] },

    EU: { status: 'green', issues: [] },

    UK: { status: 'amber', issues: ['ABV placement incorrect'] },

  },

};


function Dashboard() {

  const [theme, setTheme] = useState('soft-glass');

  const [screen, setScreen] = useState('label');


  const neonBackground = {

    background: 'radial-gradient(circle at top left,#111827 0,#020617 35%,#020617 100%)',

  };


  return (

    <div

      style={theme === 'neon-dark' ? neonBackground : {}}

      className={

        theme === 'soft-glass'

          ? 'min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 text-slate-900'

          : 'min-h-screen text-white'

      }

    >

      <GlobalStyles />


      <div className="max-w-7xl mx-auto p-6">

        <Header theme={theme} setTheme={setTheme} screen={screen} setScreen={setScreen} />


        <main className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">

          <section className="lg:col-span-8">

            {screen === 'label' ? (

              <LabelUploadCompliance theme={theme} sku={sampleSKU} />

            ) : (

              <DigitalProductPassport theme={theme} sku={sampleSKU} />

            )}

          </section>


          <aside className="lg:col-span-4">

            <RightRail theme={theme} sku={sampleSKU} />

          </aside>

        </main>

      </div>

    </div>

  );

}


function GlobalStyles() {

  return (

    <style>{`

      :root {

        --glass-bg: rgba(255,255,255,0.62);

        --glass-border: rgba(255,255,255,0.46);

        --soft-shadow: 0 18px 40px rgba(15,23,42,0.10);

        --neon-start: 123,47,247; /* purple */

        --neon-end: 0,166,251;   /* aqua */

      }


      @keyframes scan { 0% { transform: translateY(-120%); opacity: 0 } 10% { opacity: .25 } 50% { opacity: .40 } 100% { transform: translateY(120%); opacity: 0 }}

      @keyframes floatBlob { 0% { transform: translateY(0px) } 50% { transform: translateY(-18px) } 100% { transform: translateY(0px) }}


      .glass-card {

        background: linear-gradient(180deg, rgba(255,255,255,0.80), rgba(255,255,255,0.60));

        border: 1px solid rgba(255,255,255,0.60);

        backdrop-filter: blur(28px) saturate(130%);

        box-shadow: var(--soft-shadow);

      }


      .glass-card-dark {

        background: linear-gradient(180deg, rgba(15,23,42,0.90), rgba(15,23,42,0.70));

        border: 1px solid rgba(148,163,184,0.35);

        backdrop-filter: blur(18px) saturate(130%);

        box-shadow: 0 24px 60px rgba(var(--neon-start),0.24);

      }


      .neon-glow {

        box-shadow:

          0 0 24px rgba(var(--neon-start),0.45),

          0 0 32px rgba(var(--neon-end),0.35),

          0 0 4px rgba(148,163,184,0.8);

      }


      .scan-overlay { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }

      .scan-gradient {

        position: absolute;

        left: -20%; right: -20%; height: 44%;

        transform: rotate(-6deg);

        background: linear-gradient(90deg,

          rgba(123,47,247,0),

          rgba(123,47,247,0.16),

          rgba(0,166,251,0.20),

          rgba(0,166,251,0));

        filter: blur(36px);

        opacity: 0.9;

        animation: scan 2.6s linear infinite;

      }


      .blob {

        position: absolute;

        border-radius: 9999px;

        filter: blur(42px);

        opacity: 0.20;

        animation: floatBlob 10s ease-in-out infinite;

      }


      .hn-title {

        font-family: 'SF Pro Display', Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;

        letter-spacing: -0.02em;

      }


      .btn-neon {

        background: linear-gradient(135deg, #7b2ff7 0%, #00A6FB 100%);

        color: white;

      }

    `}</style>

  );

}


// HEADER

function Header({

  theme,

  setTheme,

  screen,

  setScreen,

}) {

  const isSoft = theme === 'soft-glass';

  return (
   <>
      <header className="flex items-center justify-between relative z-10">

        <h1 className="text-2xl md:text-3xl font-bold tracking-tight flex items-center gap-2 text-slate-900">
              <img src="/src/assets/logo.png" alt="Helmsman Nexus Logo" className="h-10 w-35" />
            </h1>


        <div className="flex items-center gap-4">

          <div className="hidden md:flex items-center gap-2 rounded-full bg-slate-100/60 px-1 py-1 border border-slate-200 shadow-sm">

            <button

              onClick={() => setScreen('label')}

              className={`px-3 py-1 rounded-full text-xs md:text-sm transition ${

                screen === 'label'

                  ? 'bg-white shadow-sm text-slate-900'

                  : 'bg-transparent text-slate-500'

              }`}

            >

              Label Check

            </button>

            <button

              onClick={() => setScreen('passport')}

              className={`px-3 py-1 rounded-full text-xs md:text-sm transition ${

                screen === 'passport'

                  ? 'bg-white shadow-sm text-slate-900'

                  : 'bg-transparent text-slate-500'

              }`}

            >

              Product Passport

            </button>

          </div>


          <ThemeToggle theme={theme} setTheme={setTheme} />

        </div>

      </header>

     <Footer />
      
   </>

  );

}


function ThemeToggle({

  theme,

  setTheme,

}) {

  return (

    <div className="flex items-center gap-2 bg-slate-100/60 border border-slate-200 rounded-full px-2 py-1 shadow-sm">

      <span className="text-[11px] text-slate-500">Theme</span>

      <select

        value={theme}

        onChange={(e) => setTheme(e.target.value )}

        className="bg-transparent text-xs text-slate-700 outline-none"

      >

        <option value="soft-glass">Soft Glass</option>

        <option value="neon-dark">Neon Hybrid</option>

      </select>

    </div>

  );

}


// LABEL UPLOAD & COMPLIANCE SCREEN

function LabelUploadCompliance({ theme, sku }) {

  const isSoft = theme === 'soft-glass';


  return (

    <div className="relative">

      {/* Decorative blobs */}

      <div

        className="blob -left-24 -top-24 w-64 h-64"

        style={{

          background: isSoft

            ? 'linear-gradient(180deg,#c7d2fe,#eef2ff)'

            : 'linear-gradient(180deg,#7b2ff7,#00A6FB)',

          animationDelay: '0s',

        }}

      />

      <div

        className="blob right-[-120px] top-40 w-96 h-96"

        style={{

          background: isSoft

            ? 'linear-gradient(180deg,#fbcfe8,#ffedd5)'

            : 'linear-gradient(180deg,#00A6FB,#7b2ff7)',

          animationDelay: '2s',

        }}

      />


      <div className={(isSoft ? 'glass-card' : 'glass-card-dark') + ' relative rounded-2xl p-6 overflow-hidden'}>

        {!isSoft && (

          <div className="scan-overlay">

            <div className="scan-gradient" />

          </div>

        )}


        <div className="flex items-center justify-between gap-4">

          <div>

            <h2 className={`text-lg font-semibold hn-title ${isSoft ? 'text-slate-900' : 'text-white'}`}>

              Label Upload & Compliance

            </h2>

            <p className={isSoft ? 'text-sm text-slate-500' : 'text-sm text-slate-300'}>

              Upload label images and instantly see compliance status across US, EU and UK.

            </p>

          </div>

          <MarketChips theme={theme} />

        </div>


        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* LEFT panel - upload & OCR */}

          <div className="md:col-span-2 space-y-4">

            <div className={

              (isSoft ? 'bg-white border border-slate-100' : 'bg-white/5 border border-slate-700/60') +

              ' rounded-xl p-4'

            }>

              <label className="cursor-pointer flex flex-col gap-3">

                <div

                  className={

                    (isSoft

                      ? 'border-slate-200 bg-slate-50'

                      : 'border-slate-600/80 bg-slate-900/50') +

                    ' w-full h-44 border-2 border-dashed rounded-xl flex items-center justify-center'

                  }

                >

                  <div className="text-center">

                    <p className={isSoft ? 'text-slate-400' : 'text-slate-300'}>

                      Drop label image or click to upload

                    </p>

                    <p className="text-[11px] text-slate-400">PNG / JPG / PDF • Front / Back labels</p>

                  </div>

                </div>

                <div className="flex items-center gap-2">

                  <button

                    type="button"

                    className={

                      (theme === 'neon-dark' ? 'btn-neon neon-glow' : 'bg-slate-900 text-slate-50') +

                      ' px-4 py-2 rounded-lg text-xs md:text-sm'

                    }

                  >

                    Upload Label

                  </button>

                  <button

                    type="button"

                    className={

                      (isSoft ? 'text-slate-500 hover:text-slate-700' : 'text-slate-300') +

                      ' px-3 py-2 rounded-lg text-xs md:text-sm'

                    }

                  >

                    Use Sample Label

                  </button>

                </div>

              </label>

            </div>


            <div

              className={

                (isSoft ? 'bg-slate-50 border border-slate-100' : 'bg-slate-900/60 border border-slate-700/60') +

                ' rounded-xl p-4'

              }

            >

              <h3 className={isSoft ? 'text-sm font-medium text-slate-800' : 'text-sm font-medium text-slate-100'}>

                OCR Extracted Text

              </h3>

              <div className="mt-2 text-[11px] font-mono text-slate-500 whitespace-pre-line">

                {`Brand: Highland Reserve

ABV: 42%

Allergens: Barley (cereals containing gluten)

Country: UK`}

              </div>

            </div>

          </div>


          {/* RIGHT panel - compliance summary */}

          <div

            className={

              (isSoft ? 'bg-white border border-slate-100' : 'bg-slate-900/70 border border-slate-700/60') +

              ' rounded-xl p-4 flex flex-col justify-between'

            }

          >

            <div>

              <h3 className={isSoft ? 'text-sm font-medium text-slate-900' : 'text-sm font-medium text-slate-100'}>

                Compliance Summary

              </h3>

              <div className="mt-3 space-y-3">

                <MarketStatusRow theme={theme} market="US" data={sku.compliance.US} />

                <MarketStatusRow theme={theme} market="EU" data={sku.compliance.EU} />

                <MarketStatusRow theme={theme} market="UK" data={sku.compliance.UK} />

              </div>

            </div>


            <button

              type="button"

              className={

                (theme === 'neon-dark' ? 'btn-neon neon-glow' : 'bg-slate-900 text-slate-50') +

                ' mt-4 w-full px-4 py-2 rounded-lg text-xs md:text-sm'

              }

            >

              Download Compliance Report (PDF)

            </button>

          </div>

        </div>

      </div>


      {/* Timeline card */}

      <div className={(isSoft ? 'glass-card' : 'glass-card-dark') + ' mt-6 rounded-2xl p-4'}>

        <h4 className={isSoft ? 'text-sm font-medium text-slate-900' : 'text-sm font-medium text-slate-100'}>

          Predicted Approval Timeline

        </h4>

        <div className="mt-3">

          <Timeline theme={theme} />

        </div>

      </div>

    </div>

  );

}


function MarketChips({ theme }) {

  const baseSoft = 'px-2.5 py-1 rounded-full text-[11px] bg-slate-100 text-slate-700 border border-slate-200';

  const baseNeon = 'px-2.5 py-1 rounded-full text-[11px] bg-slate-900/80 text-slate-100 border border-slate-600/80';

  const cls = theme === 'soft-glass' ? baseSoft : baseNeon;

  return (

    <div className="flex items-center gap-2">

      <span className={cls}>US</span>

      <span className={cls}>EU</span>

      <span className={cls}>UK</span>

    </div>

  );

}


function MarketStatusRow({

  theme,

  market,

  data,

}) {

  const isSoft = theme === 'soft-glass';

  const { status, issues } = data;


  let badgeClasses = '';

  if (status === 'green') {

    badgeClasses = isSoft

      ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'

      : 'bg-emerald-900/60 text-emerald-300 border border-emerald-500/40';

  } else if (status === 'amber') {

    badgeClasses = isSoft

      ? 'bg-amber-50 text-amber-700 border border-amber-100'

      : 'bg-amber-900/60 text-amber-300 border border-amber-500/40';

  } else {

    badgeClasses = isSoft

      ? 'bg-rose-50 text-rose-700 border border-rose-100'

      : 'bg-rose-900/60 text-rose-300 border border-rose-500/40';

  }


  return (

    <div className="flex items-start justify-between gap-3">

      <div>

        <div className={isSoft ? 'text-sm font-medium text-slate-900' : 'text-sm font-medium text-slate-100'}>

          {market}

        </div>

        <div className="text-[11px] text-slate-400">Last checked: 2 days ago</div>

      </div>

      <div className="text-right">

        <div className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold ${badgeClasses}`}>

          {status.toUpperCase()}

        </div>

        {issues?.length > 0 && (

          <div className="mt-1 text-[11px] text-rose-400">{issues.length} issue(s)</div>

        )}

      </div>

    </div>

  );

}


function Timeline({ theme }) {

  const isSoft = theme === 'soft-glass';

  const dotClass = (color) =>

    `w-3 h-3 rounded-full ${isSoft ? color : color} flex-shrink-0`;


  return (

    <div className="space-y-3 text-[13px]">

      <div className="flex items-center gap-3">

        <div className={dotClass('bg-sky-500')} />

        <div>

          <div className={isSoft ? 'font-medium text-slate-900' : 'font-medium text-slate-100'}>

            TTB Label Submission

          </div>

          <div className="text-[11px] text-slate-400">Estimated: 7–12 business days</div>

        </div>

      </div>

      <div className="flex items-center gap-3">

        <div className={dotClass('bg-amber-400')} />

        <div>

          <div className={isSoft ? 'font-medium text-slate-900' : 'font-medium text-slate-100'}>

            HMRC Export Filing

          </div>

          <div className="text-[11px] text-slate-400">Estimated: 3–5 business days</div>

        </div>

      </div>

      <div className="flex items-center gap-3">

        <div className={dotClass('bg-emerald-400')} />

        <div>

          <div className={isSoft ? 'font-medium text-slate-900' : 'font-medium text-slate-100'}>

            Distributor Review

          </div>

          <div className="text-[11px] text-slate-400">Estimated: 5–10 business days</div>

        </div>

      </div>

    </div>

  );

}


// DIGITAL PRODUCT PASSPORT SCREEN

function DigitalProductPassport({

  theme,

  sku,

}) {

  const isSoft = theme === 'soft-glass';


  return (



    
    <div className="relative">

      <div

        className="blob -right-12 -top-12"

        style={{

          background: isSoft

            ? 'linear-gradient(180deg,#dbeafe,#fff1f2)'

            : 'linear-gradient(180deg,#7b2ff7,#00A6FB) ',

          animationDelay: '1s',

        }}

      />


      <div className={(isSoft ? 'glass-card' : 'glass-card-dark') + ' relative rounded-2xl p-6 overflow-hidden min-h-[465px]'}>

        <div className="flex items-center justify-between gap-4">

          <div>

            <h2 className={`text-lg font-semibold hn-title ${isSoft ? 'text-slate-900' : 'text-white'}`}>

              {sku.name}

            </h2>

            <p className={isSoft ? 'text-sm text-slate-500' : 'text-sm text-slate-300'}>

              SKU ID: {sku.id} • Category: {sku.category}

            </p>

          </div>

          <div className="text-right">

            <div className={isSoft ? 'text-sm font-medium text-slate-900' : 'text-sm font-medium text-slate-100'}>

              {sku.abv}

            </div>

            <div className={isSoft ? 'text-[11px] text-slate-400' : 'text-[11px] text-slate-300'}>{sku.volume}</div>

          </div>

        </div>


        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">

          <div

            className={

              (isSoft ? 'bg-white border border-slate-100' : 'bg-slate-900/70 border border-slate-700/60') +

              ' md:col-span-2 rounded-xl p-4'

            }

          >

            <h4 className={isSoft ? 'text-sm font-medium text-slate-900' : 'text-sm font-medium text-slate-100'}>

              Master Data

            </h4>

            <div className="mt-3 space-y-2 text-[13px] text-slate-600">

              <div>Ingredients: {sku.ingredients.join(', ')}</div>

              <div>Category: {sku.category}</div>

              <div>HS Code: 2208.90</div>

              <div>Allergen Info: Barley (gluten)</div>

            </div>


            <div className="mt-4">

              <h5 className={isSoft ? 'text-sm font-medium text-slate-900' : 'text-sm font-medium text-slate-100'}>

                Label Versions

              </h5>

              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">

                {sku.labels.map((l) => (

                  <div

                    key={l.id}

                    className={

                      (isSoft ? 'bg-slate-50 border border-slate-100' : 'bg-slate-900/60 border border-slate-700/60') +

                      ' p-3 rounded-lg'

                    }

                  >

                    <div className={isSoft ? 'text-sm font-medium text-slate-900' : 'text-sm font-medium text-slate-100'}>

                      {l.name}

                    </div>

                    <div className="text-[11px] text-slate-400">Uploaded: {l.uploadedAt}</div>

                  </div>

                ))}

              </div>

            </div>

          </div>


          <div

            className={

              (isSoft ? 'bg-white border border-slate-100' : 'bg-slate-900/70 border border-slate-700/60') +

              ' rounded-xl p-4 flex flex-col justify-between'

            }

          >

            <div>

              <h4 className={isSoft ? 'text-sm font-medium text-slate-900' : 'text-sm font-medium text-slate-100'}>

                Market Readiness

              </h4>

              <div className="mt-3 space-y-3">

                <ReadinessRow theme={theme} market="US" status={sku.compliance.US.status} />

                <ReadinessRow theme={theme} market="EU" status={sku.compliance.EU.status} />

                <ReadinessRow theme={theme} market="UK" status={sku.compliance.UK.status} />

              </div>

            </div>


            <button

              type="button"

              className={

                (theme === 'neon-dark' ? 'btn-neon neon-glow' : 'bg-slate-900 text-slate-50') +

                ' mt-4 w-full px-4 py-2 rounded-lg text-xs md:text-sm'

              }

            >

              Export Product Passport (PDF)

            </button>

          </div>

        </div>


        <div className="mt-6 text-[11px] text-slate-400">Last updated: 02 Dec 2025 • Audit log available</div>

      </div>

    </div>

  );

}


function ReadinessRow({

  theme,

  market,

  status,

}) {

  const isSoft = theme === 'soft-glass';

  const color =

    status === 'green'

      ? 'text-emerald-600'

      : status === 'amber'

      ? 'text-amber-600'

      : 'text-rose-600';


  return (

    <div className="flex items-center justify-between">

      <div className={isSoft ? 'text-sm text-slate-900' : 'text-sm text-slate-100'}>{market}</div>

      <div className={`text-sm font-semibold ${color}`}>{status.toUpperCase()}</div>

    </div>

  );

}


// RIGHT RAIL

function RightRail({ theme, sku }) {

  const isSoft = theme === 'soft-glass';


  const cardBase = isSoft ? 'glass-card border border-slate-100' : 'glass-card-dark border border-slate-700/60';


  return (

    <div className="space-y-4 lg:sticky lg:top-6">

      <div className={cardBase + ' rounded-xl p-4'}>

        <h4 className={isSoft ? 'text-sm font-medium text-slate-900' : 'text-sm font-medium text-slate-100'}>

          Quick Actions

        </h4>

        <div className="mt-3 flex flex-col gap-2 text-[13px]">

          <button

            type="button"

            className={

              (theme === 'neon-dark' ? 'btn-neon neon-glow' : 'bg-slate-900 text-slate-50') +

              ' px-3 py-2 rounded-lg text-left'

            }

          >

            Start New Compliance Run

          </button>

          <button

            type="button"

            className={

              (isSoft ? 'bg-slate-100 text-slate-700' : 'bg-slate-900/70 text-slate-200') +

              ' px-3 py-2 rounded-lg text-left'

            }

          >

            Upload Batch CSV

          </button>

          <button

            type="button"

            className={

              (isSoft ? 'bg-slate-100 text-slate-700' : 'bg-slate-900/70 text-slate-200') +

              ' px-3 py-2 rounded-lg text-left'

            }

          >

            Manage Tax & Rule Tables

          </button>

        </div>

      </div>


      <div className={cardBase + ' rounded-xl p-4'}>

        <h4 className={isSoft ? 'text-sm font-medium text-slate-900' : 'text-sm font-medium text-slate-100'}>

          Demo SKU Snapshot

        </h4>

        <div className="mt-2 text-[13px] text-slate-600">

          <div>SKU: {sku.id}</div>

          <div>ABV: {sku.abv}</div>

          <div>Category: {sku.category}</div>

        </div>

      </div>


      <div className={cardBase + ' rounded-xl p-4'}>

        <h4 className={isSoft ? 'text-sm font-medium text-slate-900' : 'text-sm font-medium text-slate-100'}>

          Design Notes

        </h4>

        <div class

Name="mt-2 text-[12px] text-slate-500 space-y-1">

          <div>• Theme toggle: Soft Glass vs Neon Hybrid</div>

          <div>• Export screens as 3K PNG for investor pitch</div>

          <div>• Use this layout as base for real MVP pages</div>

        </div>

      </div>

    </div>

  );

}


export default Dashboard;