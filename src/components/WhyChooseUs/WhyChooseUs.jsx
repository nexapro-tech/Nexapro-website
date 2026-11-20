import { whyChooseUs } from "../../data/content";
import Reveal from "../Reveal";

const WhyChooseUs = () => (
  <section className="relative bg-paper text-ink" aria-labelledby="why-title">
    <div className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr]">
      <Reveal className="lg:sticky lg:top-28 lg:self-start">
        <p className="eyebrow !text-primary-deep before:!bg-primary-deep">Why choose NexaPro</p>
        <h2 id="why-title" className="mt-5 text-display-lg !text-ink">
          Experience you can lean on when the system really matters.
        </h2>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-600">
          We are deliberately focused: the platforms we know deeply, the problems we have solved before, and a way of working
          that protects what you already run.
        </p>
      </Reveal>
      <ol className="border-t border-ink/10">
        {whyChooseUs.map((w, i) => (
          <Reveal as="li" key={w.k} delay={i * 60} className="grid grid-cols-[56px_1fr] gap-4 border-b border-ink/10 py-7 sm:grid-cols-[80px_1fr_1.3fr] sm:gap-8">
            <span className="font-display text-3xl text-primary-deep/40">{w.k}</span>
            <h3 className="font-display text-xl !text-ink">{w.title}</h3>
            <p className="col-span-2 leading-relaxed text-slate-600 sm:col-span-1">{w.text}</p>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default WhyChooseUs;
