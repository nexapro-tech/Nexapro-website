import Breadcrumbs from "./Breadcrumbs";
import Reveal from "../Reveal";

/** Shared inner-page hero. `aside` renders a visual on the right; `variant` changes the backdrop. */
export default function PageHero({ crumbs, eyebrow, title, lead, children, aside, variant = "grid" }) {
  return (
    <section className="relative overflow-hidden border-b border-line pt-[76px]">
      {variant === "grid" && <div className="absolute inset-0 bg-grid mask-fade-b" aria-hidden="true" />}
      {variant === "scan" && <div className="absolute inset-0 bg-scan" aria-hidden="true" />}
      <div className="absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full bg-primary-deep/20 blur-[120px]" aria-hidden="true" />
      <div className={`wrap relative grid gap-12 pb-16 pt-12 md:pb-24 md:pt-16 ${aside ? "lg:grid-cols-[1.25fr_1fr] lg:items-center" : ""}`}>
        <div>
          {crumbs && <Breadcrumbs items={crumbs} />}
          <Reveal>
            {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
            <h1 className="text-display-xl max-w-4xl text-white">{title}</h1>
            {lead && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">{lead}</p>}
            {children}
          </Reveal>
        </div>
        {aside && <Reveal delay={150} variant="scale">{aside}</Reveal>}
      </div>
    </section>
  );
}
