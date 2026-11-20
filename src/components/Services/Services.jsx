import { useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../../data/services";
import SectionHead from "../Sections/SectionHead";
import Icon from "../Icon";

// Homepage services overview — an index list with a live preview panel.
const Services = () => {
  const [active, setActive] = useState(0);
  const s = services[active];
  return (
    <section className="border-t border-line py-20 md:py-28" aria-labelledby="svc-title">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHead eyebrow="Services" title={<span id="svc-title">Thirteen services. Each one explained properly.</span>} />
          <Link to="/services" className="link-arrow shrink-0">
            View all services <Icon name="arrow" />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <ol className="border-t border-line">
            {services.map((svc, i) => (
              <li key={svc.slug}>
                <Link
                  to={`/services/${svc.slug}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`group grid grid-cols-[40px_1fr_auto] items-center gap-3 border-b border-line py-4 transition-colors ${
                    active === i ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  <span className={`font-mono text-[11px] ${svc.division === "legacy" ? "text-phosphor/70" : "text-primary/70"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[17px] sm:text-lg">{svc.title}</span>
                  <Icon name="arrow" className={`transition ${active === i ? "translate-x-0 text-primary opacity-100" : "-translate-x-2 opacity-0"}`} />
                </Link>
              </li>
            ))}
          </ol>

          <div className="hidden lg:block">
            <div className="sticky top-28">
              <div key={s.slug} className="pop-in overflow-hidden rounded-lg border border-line bg-surface/60">
                <div className={`h-1 ${s.division === "legacy" ? "bg-phosphor" : "bg-primary"}`} />
                <div className="p-8">
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-md border border-line text-primary">
                      <Icon name={s.icon} className="h-5 w-5" />
                    </span>
                    <span className={`font-mono text-[11px] uppercase tracking-[0.18em] ${s.division === "legacy" ? "text-phosphor" : "text-primary"}`}>
                      {s.division === "legacy" ? "Legacy & Mainframe" : "Modern Technology"}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl text-white">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-300">{s.heroLead}</p>
                  <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">Problems we solve</p>
                  <ul className="mt-3 space-y-2">
                    {s.problems.slice(0, 3).map((p) => (
                      <li key={p.title} className="flex gap-2.5 text-[14px] text-slate-300">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        <span><span className="text-white">{p.title}.</span> {p.text}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {s.stack.flatMap((g) => g.items).slice(0, 8).map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>
                  <Link to={`/services/${s.slug}`} className="btn-primary mt-8">
                    Explore {s.title} <Icon name="arrow" className="arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
