import { techMarquee } from "../../data/content";

// Continuous technology strip (pauses on hover, static under reduced motion).
const TechStack = () => {
  const items = [...techMarquee, ...techMarquee];
  return (
    <section className="relative overflow-hidden border-y border-[#263758] bg-[#0b1224] py-5" aria-label="Technologies we work with">
      <div className="absolute inset-y-0 left-1/4 w-1/3 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.18),transparent_70%)]" aria-hidden="true" />
      <div className="mask-fade-x relative overflow-hidden">
        <ul className="marquee">
          {items.map((t, i) => (
            <li key={i} aria-hidden={i >= techMarquee.length} className="flex items-center gap-6 pr-6 font-mono text-[12px] uppercase tracking-[0.12em] text-slate-300">
              {t}
              <span className="h-1.5 w-1.5 rotate-45 bg-[#818cf8]" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TechStack;
