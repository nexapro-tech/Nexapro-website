import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { scenarios, OutcomeList } from "./scenarios";
import { useInView } from "../Reveal";
import Icon from "../Icon";
import SectionHead from "../Sections/SectionHead";

const PHASES = [
  { label: "The problem", dur: 5200 },
  { label: "Our approach", dur: 5200 },
  { label: "The outcome", dur: 6400 },
];

const prefersReduced = () =>
  typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/**
 * Homepage storytelling stage: each scenario plays as
 *   01 problem  →  02 NexaPro approach  →  03 outcome
 * so a visitor sees, in a few seconds, how a problem like theirs gets solved.
 * Auto-plays only while in view; fully controllable by click/keyboard; static
 * (manual) under prefers-reduced-motion.
 */
export default function ProblemSolution() {
  const [ref, inView] = useInView({ threshold: 0.35 });
  const [s, setS] = useState(0);
  const [p, setP] = useState(0);
  const [playing, setPlaying] = useState(() => !prefersReduced());
  const [cycle, setCycle] = useState(0); // restarts progress animation
  const timer = useRef(null);

  const running = playing && inView;
  const scenario = scenarios[s];

  useEffect(() => {
    clearTimeout(timer.current);
    if (!running) return undefined;
    timer.current = setTimeout(() => {
      if (p < PHASES.length - 1) setP(p + 1);
      else {
        setP(0);
        setS((s + 1) % scenarios.length);
      }
      setCycle((c) => c + 1);
    }, PHASES[p].dur);
    return () => clearTimeout(timer.current);
  }, [running, s, p, cycle]);

  const goScenario = (i) => {
    setS(i);
    setP(0);
    setCycle((c) => c + 1);
  };
  const goPhase = (i) => {
    setP(i);
    setCycle((c) => c + 1);
  };
  const onTabKey = (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      goScenario((s + 1) % scenarios.length);
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      goScenario((s - 1 + scenarios.length) % scenarios.length);
    }
  };

  const { Problem, Solution } = scenario;
  const k = `${s}-${p}-${cycle}`;

  // positions per phase (mobile first; sm: = two-zone desktop layout)
  const problemPos = [
    "left-[3%] w-[94%] sm:left-[17%] sm:w-[66%] opacity-100",
    "left-[3%] w-[94%] opacity-0 sm:opacity-100 sm:left-[2%] sm:w-[40%] sm:scale-[0.94]",
    "left-[3%] w-[94%] opacity-0 sm:opacity-45 sm:left-[2%] sm:w-[40%] sm:scale-[0.9] sm:grayscale",
  ][p];
  const nodePos = [
    "opacity-0 scale-50",
    "opacity-100 scale-100",
    "opacity-0 sm:opacity-100 scale-100",
  ][p];

  return (
    <section ref={ref} className="relative border-t border-line bg-navy/60 py-20 md:py-28" aria-labelledby="ps-title">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHead
            eyebrow="Problem → Solution"
            title={<span id="ps-title">See how a business problem becomes a working solution.</span>}
            lead="Pick a situation that sounds familiar. Watch what is going wrong, how we approach it, and what your team gets at the end."
          />
          <button
            type="button"
            onClick={() => {
              setPlaying((v) => !v);
              setCycle((c) => c + 1);
            }}
            className="btn-outline !py-2.5 self-start lg:self-auto"
            aria-pressed={!playing}
          >
            {playing ? (
              <>
                <span className="flex gap-[3px]" aria-hidden="true"><i className="h-3 w-[3px] bg-current" /><i className="h-3 w-[3px] bg-current" /></span>
                Pause story
              </>
            ) : (
              <>
                <span aria-hidden="true" className="h-0 w-0 border-y-[6px] border-l-[9px] border-y-transparent border-l-current" />
                Play story
              </>
            )}
          </button>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[300px_1fr] xl:grid-cols-[340px_1fr]">
          {/* Scenario tabs */}
          <div role="tablist" aria-label="Business problems" aria-orientation="vertical" className="flex gap-2 overflow-x-auto scrollbar-none lg:flex-col lg:overflow-visible" onKeyDown={onTabKey}>
            {scenarios.map((sc, i) => {
              const active = i === s;
              return (
                <button
                  key={sc.key}
                  role="tab"
                  id={`ps-tab-${i}`}
                  aria-selected={active}
                  aria-controls="ps-panel"
                  tabIndex={active ? 0 : -1}
                  onClick={() => goScenario(i)}
                  className={`group relative min-w-[230px] shrink-0 overflow-hidden rounded-md border p-4 text-left transition-colors lg:min-w-0 ${
                    active ? "border-primary/50 bg-surface" : "border-line bg-transparent hover:border-white/20"
                  }`}
                >
                  <span className={`font-mono text-[11px] ${active ? "text-primary" : "text-slate-500"}`}>0{i + 1}</span>
                  <span className={`mt-1 block font-display text-[15.5px] leading-snug ${active ? "text-white" : "text-slate-300"}`}>{sc.tab}</span>
                  <span className="mt-1 block text-[12.5px] text-slate-500">{sc.who}</span>
                  {active && (
                    <span className="absolute inset-x-0 bottom-0 h-[2px] bg-white/5">
                      <span className="block h-full bg-primary transition-[width] duration-700" style={{ width: `${((p + 1) / 3) * 100}%` }} />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Stage */}
          <div id="ps-panel" role="tabpanel" aria-labelledby={`ps-tab-${s}`} className="overflow-hidden rounded-lg border border-line bg-ink">
            {/* phase rail */}
            <div className="grid grid-cols-3 border-b border-line">
              {PHASES.map((ph, i) => (
                <button
                  key={ph.label}
                  type="button"
                  onClick={() => goPhase(i)}
                  aria-current={i === p ? "step" : undefined}
                  className={`relative px-3 py-3 text-left transition-colors sm:px-5 ${i === p ? "bg-white/[0.03]" : "hover:bg-white/[0.02]"} ${i > 0 ? "border-l border-line" : ""}`}
                >
                  <span className={`font-mono text-[10.5px] ${i <= p ? "text-primary" : "text-slate-600"}`}>0{i + 1}</span>
                  <span className={`ml-2 text-[12.5px] sm:text-[13.5px] ${i === p ? "text-white" : "text-slate-500"}`}>{ph.label}</span>
                  <span className="absolute inset-x-0 bottom-0 h-[2px]">
                    {i < p && <span className="block h-full bg-primary/60" />}
                    {i === p && (
                      <span
                        key={`ph-${k}`}
                        className={`ps-progress block h-full bg-primary ${running ? "is-running" : ""}`}
                        style={{ "--ps-dur": `${ph.dur}ms`, transform: running ? undefined : "scaleX(1)" }}
                      />
                    )}
                  </span>
                </button>
              ))}
            </div>

            {/* visual */}
            <div className="relative h-[330px] overflow-hidden sm:h-[340px] md:h-[380px]" aria-hidden="true">
              <div className="absolute inset-0 bg-grid opacity-70" />
              {p === 0 && <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(248,113,113,0.08),transparent)]" />}
              {p === 2 && <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_75%_50%,rgba(0,184,230,0.12),transparent)]" />}

              {/* connector lines (desktop) */}
              {p >= 1 && (
                <svg key={`ln-${s}-${p >= 1}`} className="absolute inset-0 hidden h-full w-full sm:block" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M42 50 L45 50" stroke="#00B8E6" strokeWidth="1.5" vectorEffect="non-scaling-stroke" fill="none" className="draw-line" />
                  <path d="M51 50 L55 50" stroke="#00B8E6" strokeWidth="1.5" vectorEffect="non-scaling-stroke" fill="none" className="draw-line" style={{ animationDelay: ".5s" }} />
                  <path d="M42 50 L55 50" stroke="#7FDBF5" strokeOpacity=".5" strokeWidth="1" vectorEffect="non-scaling-stroke" fill="none" className="flow-dash" />
                </svg>
              )}

              {/* problem */}
              <div className={`absolute top-1/2 -translate-y-1/2 origin-left transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${problemPos}`}>
                <div key={`pb-${s}`} className={p >= 1 ? "ps-shrunk" : ""}>
                  <Problem />
                </div>
                {p === 2 && (
                  <p className="pop-in mt-5 hidden text-center font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500 sm:block">Before</p>
                )}
              </div>

              {/* NexaPro node */}
              <div className={`absolute left-1/2 top-[22%] -translate-x-1/2 transition-all duration-700 sm:left-[48%] sm:top-1/2 sm:-translate-y-1/2 ${nodePos}`}>
                <div className="relative grid h-16 w-16 place-items-center sm:h-[72px] sm:w-[72px]">
                  <span className="absolute inset-0 rounded-full border border-primary/40 spin-slow" style={{ borderStyle: "dashed" }} />
                  <span className="absolute inset-[-10px] rounded-full bg-primary/10 blur-md" />
                  <img src="/logo-circle.png" alt="" className="relative h-12 w-12 rounded-full sm:h-14 sm:w-14" />
                </div>
              </div>

              {/* approach steps */}
              <div
                className={`absolute left-[4%] right-[4%] top-[44%] transition-all duration-500 sm:left-auto sm:right-[3%] sm:top-1/2 sm:w-[42%] sm:-translate-y-1/2 ${
                  p === 1 ? "opacity-100" : "pointer-events-none translate-x-4 opacity-0"
                }`}
              >
                {p === 1 && (
                  <ol key={`ap-${k}`} className="space-y-2">
                    {scenario.approach.map((step, i) => (
                      <li
                        key={step}
                        className="pop-in flex items-center gap-3 rounded-md border border-primary/25 bg-surface/90 px-3 py-2 text-[12px] text-slate-100 sm:text-[13px]"
                        style={{ animationDelay: `${250 + i * 650}ms` }}
                      >
                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/15 font-mono text-[10px] text-primary">{i + 1}</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                )}
              </div>

              {/* solution */}
              <div
                className={`absolute left-[3%] right-[3%] top-1/2 -translate-y-1/2 transition-all duration-700 sm:left-auto sm:right-[3%] sm:w-[44%] ${
                  p === 2 ? "opacity-100" : "pointer-events-none translate-x-6 opacity-0"
                }`}
              >
                {p === 2 && (
                  <div key={`so-${k}`} className="pop-in">
                    <Solution />
                  </div>
                )}
              </div>
            </div>

            {/* caption */}
            <div className="grid gap-5 border-t border-line p-5 sm:p-6 md:grid-cols-[1fr_auto] md:items-end" aria-live="polite">
              <div key={`cap-${s}-${p}`} className="pop-in min-h-[92px]">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                  {p === 0 ? "What's going wrong" : p === 1 ? "How NexaPro approaches it" : "What your team gets"}
                </p>
                {p === 0 && <p className="mt-2 max-w-2xl leading-relaxed text-slate-300">{scenario.problem}</p>}
                {p === 1 && (
                  <p className="mt-2 max-w-2xl leading-relaxed text-slate-300">
                    {scenario.approach.join(" → ")}. We keep what already works and change one piece at a time.
                  </p>
                )}
                {p === 2 && (
                  <div className="mt-3">
                    <OutcomeList items={scenario.outcome} />
                  </div>
                )}
              </div>
              <div className="flex flex-wrap gap-2 md:flex-col md:items-end">
                <Link to={`/case-studies/${scenario.blueprint}`} className="link-arrow">
                  See the full approach <Icon name="arrow" />
                </Link>
                <Link to={`/get-a-quote`} className="link-arrow !text-slate-300 hover:!text-white">
                  I have a similar problem <Icon name="arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
