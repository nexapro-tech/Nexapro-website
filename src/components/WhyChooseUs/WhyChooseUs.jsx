import Reveal from "../Reveal";

const highlights = [
  {
    k: "01",
    title: "Legacy and modern expertise",
    text: "One team that understands core systems and the web, mobile and AI products built around them.",
  },
  {
    k: "02",
    title: "Practical solutions",
    text: "We focus on the business problem first, then recommend the simplest technology that fits.",
  },
  {
    k: "03",
    title: "Low-risk delivery",
    text: "We improve working systems carefully, with clear testing and no unnecessary disruption.",
  },
  {
    k: "04",
    title: "Support that lasts",
    text: "After launch, we can stay involved for fixes, improvements and the next phase of your product.",
  },
];

const WhyChooseUs = () => (
  <section className="relative overflow-hidden bg-[#eef2ff] text-ink" aria-labelledby="why-title">
    <div className="absolute right-0 top-0 h-full w-1/2 bg-[linear-gradient(135deg,transparent,rgba(196,181,253,0.22))]" aria-hidden="true" />
    <div className="wrap relative grid gap-12 py-20 md:py-28 lg:grid-cols-[0.78fr_1.22fr]">
      <Reveal className="lg:sticky lg:top-28 lg:self-start">
        <p className="eyebrow !text-[#5b5bd6] before:!bg-[#5b5bd6]">Why choose NexaPro</p>
        <h2 id="why-title" className="mt-5 text-display-lg !text-[#17203f]">
          A dependable technology partner for what comes next.
        </h2>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-600">
          We combine deep technical knowledge with a straightforward, business-first way of working.
        </p>
      </Reveal>
      <ol className="grid gap-4 sm:grid-cols-2">
        {highlights.map((w, i) => (
          <Reveal as="li" key={w.k} delay={i * 60} className="group rounded-2xl border border-[#d8def0] bg-white p-6 shadow-[0_20px_45px_-38px_rgba(30,41,90,0.65)] transition-all duration-300 hover:-translate-y-1 hover:border-[#a5b4fc]">
            <span className="font-mono text-[12px] tracking-[0.16em] text-[#6d5ce8]">{w.k}</span>
            <h3 className="mt-5 font-display text-xl !text-[#17203f]">{w.title}</h3>
            <p className="mt-3 leading-relaxed text-slate-600">{w.text}</p>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default WhyChooseUs;
