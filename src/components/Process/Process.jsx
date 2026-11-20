import { useEffect, useState } from "react";
import { processSteps } from "../../data/content";
import { useInView } from "../Reveal";
import SectionHead from "../Sections/SectionHead";

/** Animated delivery process: a rail draws in, then each step lights up in turn. */
export default function Process({ light = false }) {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [active, setActive] = useState(-1);

  useEffect(() => {
    if (!inView) return undefined;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setActive(processSteps.length - 1);
      return undefined;
    }
    setActive(0);
    const id = setInterval(() => setActive((a) => (a + 1) % processSteps.length), 1700);
    return () => clearInterval(id);
  }, [inView]);

  return (
    <section ref={ref} className="relative overflow-hidden border-t border-line py-20 md:py-28" aria-labelledby="proc-title">
      <div className="wrap">
        <SectionHead
          eyebrow="Development process"
          title={<span id="proc-title">A clear path from first call to long-term support.</span>}
          lead="Eight stages, each with a visible output you can review. No black boxes."
        />

        {/* desktop rail */}
        <div className="relative mt-16 hidden lg:block">
          <div className="absolute left-0 right-0 top-[22px] h-px bg-line" />
          <div
            className="process-line absolute left-0 right-0 top-[22px] h-px bg-gradient-to-r from-phosphor via-primary to-primary-soft"
            style={{ transform: `scaleX(${inView ? 1 : 0})` }}
          />
          <ol className="relative grid grid-cols-8 gap-4">
            {processSteps.map((st, i) => {
              const on = i === active;
              const done = i < active;
              return (
                <li key={st.title} className="relative">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className="group block text-left"
                    aria-label={`${st.title}: ${st.text}`}
                  >
                    <span
                      className={`grid h-11 w-11 place-items-center rounded-full border font-mono text-[12px] transition-all duration-500 ${
                        on ? "scale-110 border-primary bg-primary text-ink shadow-glow" : done ? "border-primary/60 bg-ink text-primary" : "border-line bg-ink text-slate-500"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`mt-5 block font-display text-[15px] transition-colors ${on ? "text-white" : "text-slate-300"}`}>{st.title}</span>
                    <span className={`mt-2 block text-[13px] leading-relaxed transition-colors ${on ? "text-slate-300" : "text-slate-500"}`}>{st.text}</span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        {/* mobile / tablet list */}
        <ol className="relative mt-12 border-l border-line pl-8 lg:hidden">
          {processSteps.map((st, i) => (
            <li key={st.title} className="relative pb-8 last:pb-0">
              <span
                className={`absolute -left-[45px] grid h-[26px] w-[26px] place-items-center rounded-full border font-mono text-[10px] transition-colors duration-500 ${
                  i <= active ? "border-primary bg-primary text-ink" : "border-line bg-ink text-slate-500"
                }`}
              >
                {i + 1}
              </span>
              <p className="font-display text-[17px] text-white">{st.title}</p>
              <p className="mt-1 text-[14.5px] leading-relaxed text-slate-400">{st.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
