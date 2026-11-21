import { Browser, Phone, Tag } from "../Visuals/Mini";

function TrendLine() {
  return (
    <svg viewBox="0 0 260 62" className="mt-3 h-14 w-full" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 49H260M0 28H260M0 7H260" stroke="rgba(125,211,252,.10)" strokeWidth="1" />
      <path d="M0 47C16 42 26 45 41 38S68 30 83 36s28 7 43-2 26-3 40-8 28 7 42 0 30-10 52-7" fill="none" stroke="#22d3ee" strokeWidth="2.5" vectorEffect="non-scaling-stroke" className="tech-showcase__line" />
      <path d="M0 47C16 42 26 45 41 38S68 30 83 36s28 7 43-2 26-3 40-8 28 7 42 0 30-10 52-7V62H0Z" fill="url(#trend-fill)" opacity=".55" />
      <defs>
        <linearGradient id="trend-fill" x1="0" x2="0" y1="0" y2="1">
          <stop stopColor="#00b8e6" stopOpacity=".25" />
          <stop offset="1" stopColor="#00b8e6" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** A code-native product composition representing NexaPro's connected delivery. */
export default function TechEcosystem() {
  return (
    <figure className="tech-showcase relative isolate h-[325px] w-full sm:h-[380px] lg:h-[420px]" aria-labelledby="ecosystem-title">
      <figcaption id="ecosystem-title" className="sr-only">
        Connected enterprise dashboard, code workspace and mobile application representing NexaPro's technology services
      </figcaption>
      <span className="tech-showcase__ring tech-showcase__ring--one" aria-hidden="true" />
      <span className="tech-showcase__ring tech-showcase__ring--two" aria-hidden="true" />
      <span className="tech-showcase__glow" aria-hidden="true" />

      <div className="tech-showcase__code absolute left-[3%] top-[5%] z-10 w-[64%] overflow-hidden rounded-md border border-primary/30 bg-[#0b1d36] shadow-[0_24px_50px_-30px_rgba(0,184,230,.55)]">
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-[#153858] px-3 py-2">
          <i className="h-1.5 w-1.5 rounded-full bg-red-400" />
          <i className="h-1.5 w-1.5 rounded-full bg-amber" />
          <i className="h-1.5 w-1.5 rounded-full bg-phosphor" />
          <span className="ml-auto font-mono text-[8px] tracking-[0.12em] text-primary-soft/60">NEXAPRO / BUILD</span>
        </div>
        <div className="space-y-1.5 px-3 py-3 font-mono text-[8.5px] leading-relaxed sm:px-4 sm:py-4 sm:text-[10px]">
          <p className="text-primary-soft">{">_"} modernize&#40;system&#41;</p>
          <p className="pl-3 text-slate-400">design: <span className="text-primary-soft">"business-first"</span>,</p>
          <p className="pl-3 text-slate-400">technology: <span className="text-phosphor">["IBM i", "web", "AI"]</span>,</p>
          <p className="pl-3 text-slate-400">outcome: <span className="text-primary">"forward"</span></p>
          <p className="text-slate-500">{`}`}</p>
          <div className="mt-2 flex gap-1.5 border-t border-white/10 pt-2">
            {["IBM i", "API", "AI"].map((item) => <span key={item} className="rounded border border-primary/20 bg-primary/10 px-1.5 py-0.5 text-[7px] text-primary-soft">{item}</span>)}
          </div>
        </div>
      </div>

      <div className="tech-showcase__dashboard absolute bottom-[1%] left-[16%] z-20 w-[69%] sm:left-[18%] sm:w-[68%]">
        <Browser url="workspace.nexapro.tech">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-primary-soft/65">Enterprise delivery</p>
              <p className="mt-1 font-display text-[13px] text-white sm:text-[15px]">Ideas into impact.</p>
            </div>
            <Tag tone="ok" className="!px-1.5 !py-0.5 !text-[8px]">LIVE</Tag>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded border border-primary/15 bg-primary/[0.06] px-2 py-1.5">
              <p className="font-mono text-[7px] uppercase tracking-wide text-slate-500">Reach</p>
              <p className="mt-0.5 text-[12px] font-medium text-phosphor">+38.6%</p>
            </div>
            <div className="rounded border border-primary/15 bg-primary/[0.06] px-2 py-1.5">
              <p className="font-mono text-[7px] uppercase tracking-wide text-slate-500">Uptime</p>
              <p className="mt-0.5 text-[12px] font-medium text-primary-soft">99.9%</p>
            </div>
          </div>
          <TrendLine />
        </Browser>
      </div>

      <div className="tech-showcase__phone absolute right-[1%] top-[11%] z-30 w-[28%] min-w-[94px] max-w-[145px]">
        <Phone>
          <div className="rounded-md bg-[linear-gradient(145deg,#0c85ba,#0e5e99)] p-2 text-white sm:p-2.5">
            <p className="font-mono text-[6.5px] uppercase tracking-wide text-white/65">Your business, in sync</p>
            <p className="mt-2 font-display text-[11px] leading-[1.05] sm:text-[13px]">Everything in one place.</p>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-1">
            <span className="h-7 rounded border border-primary/15 bg-white/[0.04]" />
            <span className="h-7 rounded border border-primary/15 bg-white/[0.04]" />
          </div>
          <div className="mt-2 flex gap-1">
            {["code", "layers", "users"].map((item) => <span key={item} className="grid h-4 flex-1 place-items-center rounded bg-primary/10 font-mono text-[6px] text-primary-soft">•</span>)}
          </div>
        </Phone>
      </div>
    </figure>
  );
}
