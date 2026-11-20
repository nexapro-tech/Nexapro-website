import { techMarquee } from "../../data/content";

// Continuous technology strip (pauses on hover, static under reduced motion).
const TechStack = () => {
  const items = [...techMarquee, ...techMarquee];
  return (
    <section className="border-y border-line bg-ink py-6" aria-label="Technologies we work with">
      <div className="mask-fade-x overflow-hidden">
        <ul className="marquee">
          {items.map((t, i) => (
            <li key={i} aria-hidden={i >= techMarquee.length} className="flex items-center gap-6 pr-6 font-mono text-[13px] text-slate-400">
              {t}
              <span className="h-1 w-1 rounded-full bg-primary/50" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TechStack;
