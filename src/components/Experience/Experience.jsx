import { experienceData } from "../../data/content";
import Reveal from "../Reveal";

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="pointer-events-none absolute right-0 top-20 h-64 w-64 rounded-full bg-primary/10 blur-[90px]" />
      <div className="container-custom">
        <Reveal className="section-header">
          <p className="section-subtitle">{experienceData.eyebrow}</p>
          <h2 className="section-title">{experienceData.title}</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-4">{experienceData.lead}</p>
          <p className="text-muted leading-relaxed">{experienceData.body}</p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {experienceData.pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 90} variant="scale">
              <article className="card h-full">
                <span className="text-accent text-xs tracking-[0.25em] uppercase">
                  0{index + 1}
                </span>
                <h3 className="text-xl mt-3 mb-3">{pillar.title}</h3>
                <p className="text-slate-400 leading-relaxed">{pillar.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {experienceData.stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 80} variant="up">
              <div className="rounded-2xl border border-primary/25 bg-ink/40 px-6 py-6">
                <p className="text-2xl md:text-3xl text-gradient font-semibold mb-2">{stat.value}</p>
                <p className="text-sm text-slate-400 leading-relaxed">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
