import { useEffect, useState } from "react";
import { Bars, Browser, Phone, Tag, Terminal } from "../Visuals/Mini";

/**
 * Hero visual: a legacy IBM i / mainframe screen on one side, modern web and
 * mobile on the other, with NexaPro in the middle moving data between them.
 */
export default function BridgeVisual() {
  const [motion, setMotion] = useState(true);
  useEffect(() => {
    setMotion(!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const path = "M28 30 C 38 30, 42 48, 50 50 S 62 70, 72 70";

  return (
    <div className="relative mx-auto h-[420px] w-full max-w-[560px] sm:h-[500px]" aria-hidden="true">
      {/* rings */}
      <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10" />
      <div className="spin-slow absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary/20" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="bridge-g" x1="0" x2="1">
            <stop offset="0" stopColor="#3DDC97" />
            <stop offset=".5" stopColor="#00B8E6" />
            <stop offset="1" stopColor="#7FDBF5" />
          </linearGradient>
        </defs>
        <path d={path} stroke="url(#bridge-g)" strokeOpacity=".35" strokeWidth="1" vectorEffect="non-scaling-stroke" fill="none" />
        <path d={path} stroke="url(#bridge-g)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" fill="none" className="flow-dash" />
        {motion &&
          [0, 1.2, 2.4].map((d) => (
            <circle key={d} r="0.9" fill="#E6FBFF">
              <animateMotion dur="3.6s" begin={`${d}s`} repeatCount="indefinite" path={path} />
            </circle>
          ))}
      </svg>

      {/* legacy */}
      <div className="soft-float absolute left-0 top-[2%] w-[60%] sm:w-[56%]">
        <p className="mb-2 hidden font-mono text-[10px] uppercase tracking-[0.2em] text-phosphor/80 sm:block">Legacy core · IBM i / z/OS</p>
        <Terminal
          title="CUSINQ"
          heading="CUSTOMER MASTER"
          rows={[
            ["Cust no . . :", "100482"],
            ["Name . . . :", "SHREE TEXTILES"],
            ["Credit lim :", "250,000.00"],
            ["Open orders :", "3"],
          ]}
        />
      </div>

      {/* node */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative grid h-20 w-20 place-items-center sm:h-24 sm:w-24">
          <span className="absolute inset-[-14px] rounded-full bg-primary/15 blur-xl" />
          <img src="/logo-circle.png" alt="" className="relative h-full w-full rounded-full ring-1 ring-primary/40" />
        </div>
      </div>
      <Tag tone="info" className="absolute left-[54%] top-[37%] hidden sm:inline-flex">REST · MQ · SQL</Tag>

      {/* modern */}
      <div className="soft-float absolute bottom-[2%] right-0 w-[64%] sm:w-[58%]" style={{ animationDelay: "-3s" }}>
        <p className="mb-2 hidden text-right font-mono text-[10px] uppercase tracking-[0.2em] text-primary-soft sm:block">Modern channels · Web · Mobile · AI</p>
        <Browser url="app.yourcompany.com/customers/100482">
          <div className="flex items-start justify-between">
            <div>
              <p className="font-display text-[13px] text-white">Shree Textiles</p>
              <p className="text-[10px] text-slate-400">3 open orders · credit OK</p>
            </div>
            <Tag tone="ok">Live</Tag>
          </div>
          <Bars className="mt-3 !h-14" values={[38, 52, 46, 68, 60, 84, 76]} />
        </Browser>
      </div>
      <div className="soft-float absolute bottom-[6%] left-[2%] w-[27%] sm:w-[24%]" style={{ animationDelay: "-5s" }}>
      <Phone>
        <p className="text-[9px] text-slate-400">Orders</p>
        {["#5521", "#5522", "#5523"].map((o, i) => (
          <div key={o} className="mt-1 flex items-center justify-between rounded bg-surface-2 px-1.5 py-1 text-[8.5px] text-slate-200">
            {o}
            <i className={`h-1.5 w-1.5 rounded-full ${i ? "bg-amber" : "bg-phosphor"}`} />
          </div>
        ))}
      </Phone>
      </div>
    </div>
  );
}
