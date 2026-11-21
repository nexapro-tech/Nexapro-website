import { engagementModels } from "../../data/content";
import SectionHead from "../Sections/SectionHead";
import Reveal from "../Reveal";

export default function Engagement() {
  return (
    <section className="border-t border-[#d9e1f2] bg-[#f7f9ff] py-20 text-ink md:py-28" aria-labelledby="eng-title">
      <div className="wrap">
        <div className="[&_.eyebrow]:!text-[#5b5bd6] [&_.eyebrow]:before:!bg-[#5b5bd6] [&_h2]:!text-[#17203f]">
          <SectionHead
          eyebrow="Engagement models"
          title={<span id="eng-title">Work with us the way that fits your budget and team.</span>}
          />
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {engagementModels.map((m, i) => (
            <Reveal key={m.title} delay={i * 70} className="group flex min-h-[250px] flex-col rounded-2xl border border-[#dbe2f1] bg-white p-6 shadow-[0_20px_45px_-38px_rgba(30,41,90,0.6)] transition-all duration-300 hover:-translate-y-1 hover:border-[#a5b4fc] hover:shadow-[0_24px_50px_-34px_rgba(79,70,229,0.3)]">
              <span className="font-mono text-[11px] tracking-[0.16em] text-[#6d5ce8]">0{i + 1}</span>
              <h3 className="mt-5 font-display text-lg !text-[#17203f]">{m.title}</h3>
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-slate-600">{m.text}</p>
              <p className="mt-6 border-t border-[#e3e8f3] pt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">
                Best for <span className="text-[#5b5bd6]">{m.best}</span>
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
