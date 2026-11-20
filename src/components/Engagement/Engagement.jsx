import { engagementModels } from "../../data/content";
import SectionHead from "../Sections/SectionHead";
import Reveal from "../Reveal";

export default function Engagement() {
  return (
    <section className="border-t border-line py-20 md:py-28" aria-labelledby="eng-title">
      <div className="wrap">
        <SectionHead
          eyebrow="Engagement models"
          title={<span id="eng-title">Work with us the way that fits your budget and team.</span>}
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2 lg:grid-cols-5">
          {engagementModels.map((m, i) => (
            <Reveal key={m.title} delay={i * 70} className="group flex flex-col bg-ink p-6 transition-colors hover:bg-surface">
              <span className="font-mono text-[11px] text-primary">0{i + 1}</span>
              <h3 className="mt-5 font-display text-lg text-white">{m.title}</h3>
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-slate-400">{m.text}</p>
              <p className="mt-6 border-t border-line pt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">
                Best for <span className="text-primary-soft">{m.best}</span>
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
