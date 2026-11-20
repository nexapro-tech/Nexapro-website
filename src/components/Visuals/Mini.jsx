// Small hand-built UI illustrations used across the hero, the problem→solution
// stage and case-study thumbnails. They are illustrations, not product screenshots.
import Icon from "../Icon";

export function Terminal({ title = "ORD010R", heading = "ORDER INQUIRY", rows = [], className = "", dim = false }) {
  return (
    <div
      className={`relative overflow-hidden rounded-md border border-phosphor/30 bg-[#03110B] font-mono text-phosphor shadow-[0_20px_60px_-20px_rgba(61,220,151,0.25)] ${
        dim ? "opacity-70" : ""
      } ${className}`}
    >
      <div className="absolute inset-0 bg-scan" aria-hidden="true" />
      <div className="relative flex items-center justify-between border-b border-phosphor/20 px-3 py-1.5 text-[9px] sm:text-[10px]">
        <span>{title}</span>
        <span className="text-phosphor/80">{heading}</span>
        <span className="text-phosphor/60">5250</span>
      </div>
      <div className="relative space-y-1 px-3 py-3 text-[9.5px] leading-relaxed sm:text-[11px]">
        {rows.map((r, i) => (
          <div key={i} className="flex justify-between gap-3 whitespace-nowrap">
            <span className="text-phosphor/70">{r[0]}</span>
            <span className="truncate">{r[1]}</span>
          </div>
        ))}
        <div className="pt-1 text-phosphor/50">
          ===&gt; <span className="caret inline-block h-[1.05em] w-[0.6em] translate-y-[2px] bg-phosphor/80" />
        </div>
        <div className="border-t border-phosphor/15 pt-1.5 text-[8.5px] text-phosphor/50 sm:text-[9.5px]">F3=Exit F5=Refresh F12=Cancel</div>
      </div>
    </div>
  );
}

export function Browser({ url = "portal.yourcompany.com", children, className = "" }) {
  return (
    <div className={`overflow-hidden rounded-md border border-white/10 bg-[#0B1424] shadow-lift ${className}`}>
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-3 py-2">
        <span className="flex gap-1">
          <i className="h-2 w-2 rounded-full bg-white/15" />
          <i className="h-2 w-2 rounded-full bg-white/15" />
          <i className="h-2 w-2 rounded-full bg-white/15" />
        </span>
        <span className="ml-2 flex-1 truncate rounded bg-white/[0.05] px-2 py-0.5 font-mono text-[9.5px] text-slate-400">{url}</span>
      </div>
      <div className="p-3 sm:p-4">{children}</div>
    </div>
  );
}

export function Phone({ children, className = "", style }) {
  return (
    <div style={style} className={`relative rounded-[22px] border border-white/15 bg-[#0B1424] p-2 shadow-lift ${className}`}>
      <div className="mx-auto mb-1.5 h-1 w-10 rounded-full bg-white/15" />
      <div className="overflow-hidden rounded-[14px] bg-ink/80 p-2.5">{children}</div>
    </div>
  );
}

export function Tag({ tone = "warn", children, className = "", style }) {
  const tones = {
    warn: "border-red-400/40 bg-red-500/10 text-red-200",
    amber: "border-amber/40 bg-amber/10 text-amber",
    ok: "border-phosphor/40 bg-phosphor/10 text-phosphor",
    info: "border-primary/40 bg-primary/10 text-primary-soft",
  };
  return (
    <span
      style={style}
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded border px-2 py-1 font-mono text-[9.5px] sm:text-[10.5px] ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

export function StatusTrack({ steps = ["Ordered", "Packed", "Shipped", "Delivered"], active = 2 }) {
  return (
    <div className="flex items-center gap-1">
      {steps.map((s, i) => (
        <div key={s} className="flex-1">
          <div className={`h-1 rounded-full ${i <= active ? "bg-primary" : "bg-white/10"}`} style={{ transition: "background .6s", transitionDelay: `${i * 200}ms` }} />
          <p className={`mt-1 text-[8.5px] sm:text-[9.5px] ${i <= active ? "text-slate-200" : "text-slate-500"}`}>{s}</p>
        </div>
      ))}
    </div>
  );
}

export function Bars({ values = [40, 64, 52, 78, 70, 92], className = "" }) {
  return (
    <div className={`flex h-16 items-end gap-1.5 ${className}`}>
      {values.map((v, i) => (
        <span
          key={i}
          className="bar-grow flex-1 rounded-sm bg-gradient-to-t from-primary-deep to-primary"
          style={{ height: `${v}%`, animationDelay: `${i * 90}ms` }}
        />
      ))}
    </div>
  );
}

export function Check({ children, delay = 0 }) {
  return (
    <li className="pop-in flex items-start gap-2 text-[11px] text-slate-200 sm:text-[12.5px]" style={{ animationDelay: `${delay}ms` }}>
      <span className="mt-[1px] grid h-4 w-4 shrink-0 place-items-center rounded-full bg-phosphor/15 text-phosphor">
        <Icon name="check" className="h-2.5 w-2.5" />
      </span>
      {children}
    </li>
  );
}

export function KanbanCol({ title, cards = [], accent = "bg-primary" }) {
  return (
    <div className="flex-1 rounded border border-white/10 bg-white/[0.02] p-1.5">
      <p className="mb-1.5 flex items-center gap-1 font-mono text-[8.5px] uppercase tracking-wider text-slate-400">
        <i className={`h-1.5 w-1.5 rounded-full ${accent}`} /> {title}
      </p>
      <div className="space-y-1">
        {cards.map((c, i) => (
          <div key={i} className="pop-in rounded bg-surface-2 px-1.5 py-1 text-[8.5px] text-slate-200 sm:text-[9.5px]" style={{ animationDelay: `${i * 120 + 200}ms` }}>
            {c}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Doc({ label, className = "", style }) {
  return (
    <div style={style} className={`w-[72px] rounded-sm border border-white/15 bg-[#E9EEF4] p-1.5 shadow-lg sm:w-[88px] ${className}`}>
      <div className="mb-1 h-1.5 w-2/3 rounded-sm bg-slate-400" />
      {[...Array(5)].map((_, i) => (
        <div key={i} className="mb-0.5 h-1 rounded-sm bg-slate-300" style={{ width: `${90 - i * 9}%` }} />
      ))}
      <p className="mt-1 truncate font-mono text-[7.5px] text-slate-600">{label}</p>
    </div>
  );
}
