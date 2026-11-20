import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { categories, sortedCaseStudies } from "../data/caseStudies";
import { useSeo } from "../lib/seo";
import PageHero from "../components/Sections/PageHero";
import CaseCard from "../components/Sections/CaseCard";
import CTABand from "../components/Sections/CTABand";
import Icon from "../components/Icon";

const all = sortedCaseStudies();
const techs = [...new Set(all.flatMap((c) => c.tech))].sort();
const industriesList = [...new Set(all.map((c) => c.industry))].sort();

export default function CaseStudies() {
  const [params, setParams] = useSearchParams();
  const category = params.get("category") || "";
  const tech = params.get("tech") || "";
  const industry = params.get("industry") || "";
  const q = params.get("q") || "";

  useSeo({
    title: "Case Studies & Solution Blueprints",
    description: "How NexaPro approaches mainframe and AS400 modernization, websites, e-commerce, mobile apps, CRM and AI automation projects — challenges, architecture and technologies.",
    path: "/case-studies",
  });

  const set = (key, value) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true });
  };

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return all.filter(
      (c) =>
        (!category || c.category === category) &&
        (!tech || c.tech.includes(tech)) &&
        (!industry || c.industry === industry) &&
        (!term || [c.title, c.summary, c.industry, ...c.tech].join(" ").toLowerCase().includes(term))
    );
  }, [category, tech, industry, q]);

  const featured = !category && !tech && !industry && !q ? filtered.find((c) => c.featured) : null;
  const rest = featured ? filtered.filter((c) => c !== featured) : filtered;
  const anyFilter = category || tech || industry || q;

  return (
    <>
      <PageHero
        crumbs={[{ label: "Case Studies" }]}
        eyebrow="Case studies & solution blueprints"
        title="The thinking behind the systems we build."
        lead="Each entry walks through the business context, challenges, technical approach, architecture, technologies and outcomes. Entries marked “Solution blueprint” show our standard approach to a common problem; they do not describe a specific client."
      />

      <section className="py-14 md:py-20">
        <div className="wrap">
          {/* Category tabs */}
          <div className="flex gap-2 overflow-x-auto scrollbar-none pb-1" role="group" aria-label="Filter by category">
            {[{ key: "", label: "All work" }, ...categories].map((c) => (
              <button
                key={c.key || "all"}
                type="button"
                onClick={() => set("category", c.key)}
                aria-pressed={category === c.key}
                className={`whitespace-nowrap rounded-md border px-4 py-2 text-[13.5px] transition ${
                  category === c.key ? "border-primary bg-primary text-ink" : "border-line text-slate-300 hover:border-white/30"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Search + selects */}
          <div className="mt-5 grid gap-3 md:grid-cols-[1.4fr_1fr_1fr_auto]">
            <label className="relative">
              <span className="sr-only">Search case studies</span>
              <Icon name="search" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="search"
                value={q}
                onChange={(e) => set("q", e.target.value)}
                placeholder="Search by keyword or technology…"
                className="input-field !pl-11"
              />
            </label>
            <label>
              <span className="sr-only">Technology</span>
              <select value={tech} onChange={(e) => set("tech", e.target.value)} className="input-field [&>option]:text-ink">
                <option value="">All technologies</option>
                {techs.map((t) => <option key={t}>{t}</option>)}
              </select>
            </label>
            <label>
              <span className="sr-only">Industry</span>
              <select value={industry} onChange={(e) => set("industry", e.target.value)} className="input-field [&>option]:text-ink">
                <option value="">All industries</option>
                {industriesList.map((t) => <option key={t}>{t}</option>)}
              </select>
            </label>
            <button type="button" disabled={!anyFilter} onClick={() => setParams({}, { replace: true })} className="btn-outline !py-3 disabled:opacity-40">
              Reset
            </button>
          </div>
          <p className="mt-4 text-[13px] text-slate-500" aria-live="polite">
            Showing {filtered.length} of {all.length}
          </p>

          {featured && (
            <div className="mt-10">
              <CaseCard item={featured} large />
            </div>
          )}

          {rest.length > 0 ? (
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((c) => <CaseCard key={c.slug} item={c} />)}
            </div>
          ) : (
            !featured && (
              <div className="mt-10 rounded-lg border border-dashed border-line p-12 text-center">
                <p className="font-display text-xl text-white">Nothing matches those filters yet.</p>
                <p className="mt-2 text-slate-400">Try another technology — or tell us about your project directly.</p>
              </div>
            )
          )}
        </div>
      </section>
      <CTABand title="Have a similar project in mind?" primary={{ label: "Discuss Your Project", to: "/get-a-quote" }} />
    </>
  );
}
