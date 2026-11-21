import { useEffect, useState } from "react";
import { processSteps } from "../../data/content";
import { useInView } from "../Reveal";
import SectionHead from "../Sections/SectionHead";

export default function Process() {
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
    const id = setInterval(() => setActive((current) => (current + 1) % processSteps.length), 1700);
    return () => clearInterval(id);
  }, [inView]);

  return (
    <section ref={ref} className="relative overflow-hidden border-t border-[#263758] bg-[#0c1228] py-20 md:py-28" aria-labelledby="proc-title">
      <div className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#4338ca]/20 blur-3xl" aria-hidden="true" />
      <div className="wrap relative">
        <div className="[&_.eyebrow]:!text-[#c4b5fd] [&_.eyebrow]:before:!bg-[#c4b5fd]">
          <SectionHead
            eyebrow="Development process"
            title={<span id="proc-title">A clear path from first call to long-term support.</span>}
            lead="Eight stages, each with a visible output you can review. No black boxes."
          />
        </div>

        <div className="relative mt-16 hidden lg:block">
          <div className="absolute left-0 right-0 top-[22px] h-px bg-[#344362]" />
          <div
            className="process-line absolute left-0 right-0 top-[22px] h-px bg-gradient-to-r from-[#a78bfa] via-[#60a5fa] to-[#c4b5fd]"
            style={{ transform: `scaleX(${inView ? 1 : 0})` }}
          />
          <ol className="relative grid grid-cols-8 gap-4">
            {processSteps.map((step, index) => {
              const on = index === active;
              const done = index < active;
              return (
                <li key={step.title} className="relative">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    className="group block text-left"
                    aria-label={`${step.title}: ${step.text}`}
                  >
                    <span className={`grid h-11 w-11 place-items-center rounded-full border font-mono text-[12px] transition-all duration-500 ${
                      on ? "scale-110 border-[#a5b4fc] bg-[#c7d2fe] text-[#17203f] shadow-[0_0_30px_rgba(129,140,248,0.35)]" : done ? "border-[#818cf8]/60 bg-[#131b35] text-[#c4b5fd]" : "border-[#344362] bg-[#10172e] text-slate-500"
                    }`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={`mt-5 block font-display text-[15px] transition-colors ${on ? "text-white" : "text-slate-300"}`}>{step.title}</span>
                    <span className={`mt-2 block text-[13px] leading-relaxed transition-colors ${on ? "text-slate-300" : "text-slate-500"}`}>{step.text}</span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        <ol className="relative mt-12 border-l border-[#344362] pl-8 lg:hidden">
          {processSteps.map((step, index) => (
            <li key={step.title} className="relative pb-8 last:pb-0">
              <span className={`absolute -left-[45px] grid h-[26px] w-[26px] place-items-center rounded-full border font-mono text-[10px] transition-colors duration-500 ${
                index <= active ? "border-[#a5b4fc] bg-[#c7d2fe] text-[#17203f]" : "border-[#344362] bg-[#10172e] text-slate-500"
              }`}>
                {index + 1}
              </span>
              <p className="font-display text-[17px] text-white">{step.title}</p>
              <p className="mt-1 text-[14.5px] leading-relaxed text-slate-400">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
