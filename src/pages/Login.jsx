import React, { useState } from 'react';
import Footer from './Footer';


function Login() {

  const [theme, setTheme] = useState('soft-glass');

  const [role, setRole] = useState('distillery');


  return (

    <div

      className={`min-h-screen flex flex-col relative overflow-hidden ${

        theme === 'soft-glass' ? 'bg-[#eef1fb] text-slate-900' : 'bg-[#040716] text-slate-50'

      }`}

    >

      <AnimatedBackground theme={theme} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-5 flex flex-col gap-6 ">

        <Header theme={theme} setTheme={setTheme} />

        <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          <section className="lg:col-span-7 flex flex-col justify-between gap-6">

            <LandingHero theme={theme} />

          </section>

          <section className="lg:col-span-5 flex items-center justify-center">

            <LoginPanel theme={theme} role={role} setRole={setRole} />

          </section>

        </main>

      </div>

    </div>

  );

}


function AnimatedBackground({ theme }) {

  const isSoft = theme === 'soft-glass';

  return (

    <div className="absolute inset-0 -z-10 overflow-hidden">

      {isSoft ? (

        <div className="absolute inset-0 bg-gradient-to-br from-[#e5edff] via-[#f7f8ff] to-[#dde3f5]" />

      ) : (

        <div className="absolute inset-0 bg-gradient-to-br from-[#030014] via-[#141936] to-[#000]" />

      )}

      {/* subtle background glows can be re‑added if needed */}

    </div>

  );

}


function Header({ theme, setTheme }) {

  const isSoft = theme === 'soft-glass';

  return (
    <>
      <header className="flex items-center justify-between gap-4">

        <div className="flex items-center gap-3 mr">

          <div

            className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-semibold tracking-wide ${

              isSoft

                ? 'bg-slate-900 text-slate-50 shadow-md'

                : 'bg-gradient-to-br from-[#7b2ff7] to-[#00a6fb] text-white shadow-[0_0_18px_rgba(123,47,247,0.7)]'

            }`}

          >

            HN

          </div>

          <div>

            <div className={`text-base font-semibold ${isSoft ? 'text-slate-900' : 'text-slate-50'}`}>

              Helmsman Nexus

            </div>

            <div

              className={`text-[11px] uppercase tracking-[0.16em] ${

                isSoft ? 'text-slate-500' : 'text-slate-400'

              }`}

            >

              RegTech • Export Accelerator

            </div>

          </div>

        </div>


        <div className="flex items-center gap-3 mr-20">

          <span className={`hidden md:inline text-xs ${isSoft ? 'text-slate-500' : 'text-slate-400'}`}>

            Theme

          </span>

          <div

            className={`flex items-center text-[11px] rounded-full border px-1 py-1 ${

              isSoft ? 'border-slate-200 bg-white/70 shadow-sm' : 'border-slate-700 bg-slate-900/50'

            }`}

          >

            <button

              onClick={() => setTheme('soft-glass')}

              className={`px-3 py-1 rounded-full text-xs font-medium ${

                theme === 'soft-glass' ? 'bg-slate-900 text-slate-50 shadow-sm' : 'text-slate-500'

              }`}

            >

              Soft Glass

            </button>

            <button

              onClick={() => setTheme('neon-dark')}

              className={`px-3 py-1 rounded-full text-xs font-medium ${

                theme === 'neon-dark'

                  ? 'bg-gradient-to-r from-[#7b2ff7] to-[#00a6fb] text-white shadow-[0_0_18px_rgba(123,47,247,0.6)]'

                  : 'text-slate-500'

              }`}

            >

              Neon Hybrid

            </button>

          </div>

        </div>

      </header>

      <Footer />
      
    </>

  );

}


function LandingHero({ theme }) {

  const isSoft = theme === 'soft-glass';


  return (

    <div

      className={`rounded-2xl  border backdrop-blur-xl shadow-xl flex flex-col justify-between h-full  ${

        isSoft

          ? 'bg-white/70 border-slate-200'

          : 'bg-slate-900/50 border-slate-700/60 shadow-[0_20px_60px_rgba(15,23,42,0.8)]'

      } px-7 py-6`}

    >

      {/* top headline + copy exactly like screenshot */}

      <div className="space-y-4">

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] border border-emerald-400/40 bg-emerald-50/70 text-emerald-700 w-fit">

          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />

          Live multi‑market compliance co‑pilot

        </div>


        <h1

          className={`text-3xl md:text-4xl font-semibold leading-tight ${

            isSoft ? 'text-slate-900' : 'text-slate-50'

          }`}

        >

          Export‑ready in <span className="underline decoration-indigo-400">weeks</span>, not months.

        </h1>


        <p

          className={`text-sm md:text-[13px] leading-relaxed max-w-xl ${

            isSoft ? 'text-slate-600' : 'text-slate-300'

          }`}

        >

        Where Compliance, Data, and Distribution Connect.

        </p>


        <div className="flex flex-wrap gap-2 mt-1 text-[11px]">

          <Tag pill>US • EU • UK Label Engines</Tag>

          <Tag pill>Excise &amp; Duty Simulator</Tag>

          <Tag pill>Digital Product Passports</Tag>

        </div>

      </div>


      {/* centre visual + metrics row */}

      <div className="mt-7 flex flex-col md:flex-row items-center md:items-stretch gap-6">

        <div className="flex-shrink-0">

          <ComplianceBadge theme={theme} />

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-xs">

          <MetricCard

            label="Average approval time"

            value="8–12 days"

            caption="TTB & HMRC combined"

            theme={theme}

          />

          <MetricCard

            label="Export‑ready SKUs"

            value="78%"

            caption="on first submission"

            theme={theme}

          />

          <MetricCard

            label="Manual paperwork cut"

            value="↓ 70%"

            caption="vs. legacy workflow"

            theme={theme}

          />

        </div>

      </div>


      {/* bottom strip exactly like screenshot */}

      <div className="mt-6 flex flex-wrap items-center gap-4 justify-between">

        <div className="flex items-center gap-3 text-[10px] md:text-[11px] text-slate-500">

          <span className="uppercase tracking-[0.16em] text-slate-400">DESIGNED FOR</span>

          <span className="px-2.5 py-1 rounded-full border border-slate-300/70 bg-slate-50/80 text-slate-700 font-medium">

            Distilleries &amp; Independent Brand Founders

          </span>

        </div>

        <div className="flex items-center gap-2 text-[10px] text-slate-400">

          <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[9px] font-semibold">

            AI

          </span>

          <span>AI‑assisted compliance • Human control</span>

        </div>

      </div>

    </div>

  );

}


function ComplianceBadge({ theme }) {

  const isSoft = theme === 'soft-glass';

  const haloSoft = 'conic-gradient(from 220deg, #c7d2fe, #e0f2fe, #e9d5ff, #c7d2fe)';

  const haloNeon = 'conic-gradient(from 200deg, #7b2ff7, #00a6fb, #10b981, #fbbf24, #7b2ff7)';


  return (

    <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto">

      {/* colourful halo */}

      <div

        className="absolute inset-2 rounded-full blur-xl opacity-70"

        style={{ background: isSoft ? haloSoft : haloNeon }}

      />


      {/* animated orbit dots */}

      <div className="absolute inset-0 rounded-full animate-spin" style={{ animationDuration: '22s' }}>

        <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#7b2ff7] shadow-[0_0_10px_rgba(123,47,247,0.8)]" />

        <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rounded-full bg-[#00a6fb] shadow-[0_0_10px_rgba(0,166,251,0.8)]" />

        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_10px_rgba(16,185,129,0.9)]" />

      </div>


      {/* outer ring */}

      <div className={`absolute inset-0 rounded-full border ${isSoft ? 'border-white/60' : 'border-white/20'}`} />


      {/* inner glass disc */}

      <div

        className={`absolute inset-[16%] rounded-full flex flex-col items-center justify-center text-center px-4 shadow-xl ${

          isSoft

            ? 'bg-white/90 border border-slate-200 text-slate-800'

            : 'bg-slate-950/80 border border-slate-600 text-slate-50'

        }`}

      >

        <span className="text-[10px] uppercase tracking-[0.18em] text-indigo-400 mb-1">RegTech</span>

        <span className="text-xs font-semibold leading-snug">Export Accelerator</span>

        <span className="mt-2 text-[9px] text-slate-400">Alcohol • Labels • Duties</span>

      </div>


      {/* orbit labels */}

      <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-slate-900/90 text-[9px] text-slate-50 border border-slate-700">

        TTB

      </span>

      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-emerald-500/90 text-[9px] text-white">

        HMRC

      </span>

      <span className="absolute top-1/2 -right-3 -translate-y-1/2 px-2 py-0.5 rounded-full bg-indigo-500/90 text-[9px] text-white">

        EU

      </span>

    </div>

  );

}


function MetricCard({ label, value, caption, theme }) {

  const isSoft = theme === 'soft-glass';

  const base = 'rounded-xl border px-3 py-2.5 flex flex-col justify-between h-[70%] mt-6';

  const tone = isSoft

    ? 'bg-white/80 border-slate-200'

    : 'bg-slate-900/60 border-slate-700/70 shadow-[0_14px_40px_rgba(15,23,42,0.7)]';


  return (

    <div className={`${base} ${tone}`}>

      <div className={`text-[11px] mb-1 ${isSoft ? 'text-slate-500' : 'text-slate-400'}`}>{label}</div>

      <div className={`text-lg font-semibold ${isSoft ? 'text-slate-900' : 'text-slate-50'}`}>{value}</div>

      <div className={`text-[10px] mt-1 ${isSoft ? 'text-slate-400' : 'text-slate-500'}`}>{caption}</div>

    </div>

  );

}


function LoginPanel({ theme, role, setRole }) {

  const isSoft = theme === 'soft-glass';


  const roleLabelMap = {

    distillery: 'Distillery / Producer',

    brand: 'Brand Founder / Co‑packer',

    admin: 'Helmsman Admin',

  };


  return (

    <div

      className={`w-full max-w-sm rounded-2xl border backdrop-blur-2xl shadow-2xl px-6 py-7 flex flex-col gap-4 ${

        isSoft

          ? 'bg-white/80 border-slate-200'

          : 'bg-slate-900/70 border-slate-700/70 shadow-[0_20px_60px_rgba(15,23,42,0.9)]'

      }`}

    >

      <div className="flex items-center justify-between mb-1">

        <span

          className={`text-xs font-medium uppercase tracking-[0.16em] ${

            isSoft ? 'text-slate-500' : 'text-slate-400'

          }`}

        >

          Sign in

        </span>

        <span

          className={`text-[10px] px-2 py-1 rounded-full border ${

            isSoft

              ? 'border-slate-200 text-slate-500 bg-slate-50/80'

              : 'border-slate-600 text-slate-300 bg-slate-900/80'

          }`}

        >

          Multi‑tenant

        </span>

      </div>

      <h2 className={`text-lg font-semibold ${isSoft ? 'text-slate-900' : 'text-slate-50'}`}>

        Welcome back

      </h2>

      <p className={`text-[11px] ${isSoft ? 'text-slate-500' : 'text-slate-400'}`}>

        Choose your workspace type and continue with email or single sign‑on.

      </p>


      {/* role tabs */}

      <div

        className={`flex items-center text-[11px] rounded-full border px-1 py-1 mt-2 ${

          isSoft ? 'border-slate-200 bg-slate-50/80' : 'border-slate-600 bg-slate-900/40'

        }`}

      >

        {['distillery', 'brand', 'admin'].map((key) => (

          <button

            key={key}

            onClick={() => setRole(key)}

            className={`flex-1 px-2.5 py-1 rounded-full text-center cursor-pointer transition font-medium ${

              role === key

                ? isSoft

                  ? 'bg-slate-900 text-slate-50 shadow-sm'

                  : 'bg-gradient-to-r from-[#7b2ff7] to-[#00a6fb] text-white shadow-[0_0_18px_rgba(123,47,247,0.6)]'

                : isSoft

                ? 'text-slate-500'

                : 'text-slate-400'

            }`}

          >

            {key === 'distillery' ? 'Distillery' : key === 'brand' ? 'Brand Founder' : 'Admin'}

          </button>

        ))}

      </div>


      <div className="flex flex-col gap-3 mt-2">

        <input

          type="email"

          placeholder="Work email"

          className={`w-full px-3 py-2.5 rounded-lg text-sm border focus:outline-none focus:ring-2 ${

            isSoft

              ? 'bg-white/90 border-slate-200 focus:border-indigo-400 focus:ring-indigo-200'

              : 'bg-slate-900/80 border-slate-600 focus:border-[#7b2ff7] focus:ring-[#7b2ff7]/30'

          }`}

        />

        <input

          type="password"

          placeholder="Password"

          className={`w-full px-3 py-2.5 rounded-lg text-sm border focus:outline-none focus:ring-2 ${

            isSoft

              ? 'bg-white/90 border-slate-200 focus:border-indigo-400 focus:ring-indigo-200'

              : 'bg-slate-900/80 border-slate-600 focus:border-[#7b2ff7] focus:ring-[#7b2ff7]/30'

          }`}

        />

        <div className="flex items-center justify-between text-[11px] mt-1">

          <label className={`inline-flex items-center gap-2 ${isSoft ? 'text-slate-500' : 'text-slate-400'}`}>

            <input type="checkbox" className="w-3.5 h-3.5 rounded border-slate-300" />

            <span>Remember me</span>

          </label>

          <button className={`text-[11px] font-medium ${isSoft ? 'text-indigo-500' : 'text-indigo-300'}`}>

            Forgot password?

          </button>

        </div>

        <button

          className={`mt-1 w-full py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 ${

            isSoft

              ? 'bg-slate-900 text-slate-50 shadow-md hover:bg-slate-800'

              : 'bg-gradient-to-r from-[#7b2ff7] to-[#00a6fb] text-white shadow-[0_0_22px_rgba(123,47,247,0.7)] hover:brightness-110'

          }`}

        >

          <span>Sign in as</span>

          <span className="font-semibold">{roleLabelMap[role]}</span>

        </button>

      </div>


      {/* divider + social login */}

      <div className="flex items-center gap-2 mt-3 mb-1">

        <span className="flex-1 h-px bg-slate-200/70" />

        <span className="text-[10px] uppercase tracking-[0.16em] text-slate-400">

          or continue with

        </span>

        <span className="flex-1 h-px bg-slate-200/70" />

      </div>

      <div className="flex gap-2">

        <SocialButton label="Google" short="G" theme={theme} />

        <SocialButton label="LinkedIn" short="in" theme={theme} />

        <SocialButton label="Microsoft" short="MS" theme={theme} />

      </div>


      <p className={`mt-3 text-[11px] ${isSoft ? 'text-slate-500' : 'text-slate-400'}`}>

        Don’t have access yet?{' '}

        <button className={`${isSoft ? 'text-indigo-500' : 'text-indigo-300'} font-medium hover:underline`}>

          Request a workspace demo

        </button>

      </p>

    </div>

  );

}


function SocialButton({ label, short, theme }) {

  const isSoft = theme === 'soft-glass';

  const base =

    'flex-1 flex items-center justify-center gap-2 px-2 py-2 rounded-lg text-[11px] border transition';

  const tone = isSoft

    ? 'bg-white/80 border-slate-200 hover:bg-slate-50'

    : 'bg-slate-900/70 border-slate-700 hover:bg-slate-800/80';


  const iconCircle =

    'w-4.5 h-4.5 rounded-full flex items-center justify-center text-[10px] font-semibold';


  const iconClass =

    short === 'G'

      ? 'bg-white text-slate-900'

      : short === 'in'

      ? 'bg-[#2563eb] text-white'

      : 'bg-[#111827] text-white';


  return (

    <button className={`${base} ${tone}`}>

      <span className={`${iconCircle} ${iconClass}`}>{short}</span>

      <span>{label}</span>

    </button>

  );

}


function Tag({ children, pill }) {

  return (

    <span

      className={`inline-flex items-center ga

Screenshot 2025-10-30 at 5.41.03 PM.png
Screenshot 2025-10-30 at 5.40.50 PM.png
p-1 ${

        pill ? 'px-3 py-1 rounded-full' : 'px-2.5 py-1 rounded-md'

      } bg-slate-900/5 text-slate-600 border border-slate-200 text-[11px]`}

    >

      {children}

    </span>

  );

}


export default Login;