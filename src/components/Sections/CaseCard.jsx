import { Link } from "react-router-dom";
import { categoryLabel } from "../../data/caseStudies";
import Icon from "../Icon";
import CaseThumb from "./CaseThumb";

export default function CaseCard({ item, large = false }) {
  return (
    <Link
      to={`/case-studies/${item.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-surface/50 transition-colors duration-300 hover:border-primary/50"
    >
      <div className={`relative overflow-hidden border-b border-line ${large ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
        <CaseThumb category={item.category} />
        <span className="absolute left-4 top-4 rounded bg-ink/80 px-2 py-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-primary-soft backdrop-blur">
          {categoryLabel(item.category)}
        </span>
        {item.kind === "blueprint" && (
          <span className="absolute right-4 top-4 rounded border border-white/15 bg-ink/70 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-300 backdrop-blur">
            Solution blueprint
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">{item.industry}</p>
        <h3 className={`mt-2 font-display text-white ${large ? "text-2xl" : "text-[19px] leading-snug"}`}>{item.title}</h3>
        <p className="mt-3 text-[14.5px] leading-relaxed text-slate-400">{item.summary}</p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {item.tech.slice(0, 4).map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
        <span className="link-arrow mt-auto pt-6">
          Read the approach <Icon name="arrow" />
        </span>
      </div>
    </Link>
  );
}
