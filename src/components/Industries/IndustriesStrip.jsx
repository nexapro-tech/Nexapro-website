import { useState } from "react";
import { Link } from "react-router-dom";
import { industries } from "../../data/industries";
import SectionHead from "../Sections/SectionHead";
import Icon from "../Icon";

export default function IndustriesStrip() {
  const [open, setOpen] = useState(0);
  return (
    <section className="border-t border-line bg-navy/50 py-20 md:py-28" aria-labelledby="ind-title">
      <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHead
            eyebrow="Industries we serve"
            title={<span id="ind-title">Different industries. The same need for systems that just work.</span>}
          />
          <Link to="/industries" className="link-arrow mt-8">
            Explore industries <Icon name="arrow" />
          </Link>
        </div>
        <ul className="border-t border-line">
          {industries.map((ind, i) => {
            const isOpen = open === i;
            return (
              <li key={ind.slug} className="border-b border-line">
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  onMouseEnter={() => setOpen(i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className={`font-display text-xl transition-colors sm:text-2xl ${isOpen ? "text-white" : "text-slate-500"}`}>{ind.name}</span>
                  <span className={`font-mono text-[11px] ${isOpen ? "text-primary" : "text-slate-600"}`}>{String(i + 1).padStart(2, "0")}</span>
                </button>
                <div className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="max-w-xl text-slate-300">{ind.short}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {ind.solutions.map((s) => (
                        <span key={s} className="chip">{s}</span>
                      ))}
                    </div>
                    <Link to={`/industries#${ind.slug}`} className="link-arrow mt-4">
                      How we help in {ind.name} <Icon name="arrow" />
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
