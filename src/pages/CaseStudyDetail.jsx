import { Link, useParams } from "react-router-dom";
import { categoryLabel, getCaseStudy, sortedCaseStudies } from "../data/caseStudies";
import { getService } from "../data/services";
import { useSeo } from "../lib/seo";
import Breadcrumbs from "../components/Sections/Breadcrumbs";
import CaseThumb from "../components/Sections/CaseThumb";
import CaseCard from "../components/Sections/CaseCard";
import CTABand from "../components/Sections/CTABand";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import NotFound from "./NotFound";

const Block = ({ n, title, children, id }) => (
  <Reveal as="section" id={id} className="grid gap-4 border-t border-line py-10 md:grid-cols-[220px_1fr] md:gap-10">
    <div>
      <p className="font-mono text-[11px] text-primary">{String(n).padStart(2, "0")}</p>
      <h2 className="mt-2 font-display text-xl text-white">{title}</h2>
    </div>
    <div className="text-slate-300">{children}</div>
  </Reveal>
);

const Bullets = ({ items, tone = "bg-primary" }) => (
  <ul className="space-y-2.5">
    {items.map((t) => (
      <li key={t} className="flex gap-3 leading-relaxed">
        <span className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${tone}`} /> {t}
      </li>
    ))}
  </ul>
);

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const c = getCaseStudy(slug);
  useSeo({
    title: c ? c.title : "Case study not found",
    description: c ? c.summary : "",
    path: `/case-studies/${slug}`,
    jsonLd: c
      ? { "@context": "https://schema.org", "@type": "Article", headline: c.title, description: c.summary, author: { "@type": "Organization", name: "NexaPro Technologies" } }
      : undefined,
  });
  if (!c) return <NotFound />;

  const blueprint = c.kind === "blueprint";
  const related = sortedCaseStudies().filter((x) => x.slug !== c.slug && (x.category === c.category || x.services.some((s) => c.services.includes(s)))).slice(0, 3);
  let n = 0;
  const next = () => ++n;

  return (
    <>
      <section className="relative overflow-hidden border-b border-line pt-[76px]">
        <div className="wrap relative pb-14 pt-12">
          <Breadcrumbs items={[{ label: "Case Studies", to: "/case-studies" }, { label: categoryLabel(c.category), to: `/case-studies?category=${c.category}` }, { label: c.title.length > 48 ? c.title.slice(0, 46) + "…" : c.title }]} />
          <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            <Reveal>
              <div className="flex flex-wrap gap-2">
                <span className="chip !text-primary-soft">{categoryLabel(c.category)}</span>
                <span className="chip">{c.industry}</span>
                {blueprint && <span className="chip !border-amber/40 !text-amber">Solution blueprint</span>}
              </div>
              <h1 className="mt-6 text-display-lg">{c.title}</h1>
              <p className="mt-5 text-lg leading-relaxed text-slate-300">{c.summary}</p>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {c.tech.map((t) => <span key={t} className="chip">{t}</span>)}
              </div>
            </Reveal>
            <Reveal delay={120} variant="scale" className="relative aspect-[16/11] overflow-hidden rounded-lg border border-line">
              <CaseThumb category={c.category} big />
            </Reveal>
          </div>
        </div>
      </section>

      {blueprint && (
        <div className="border-b border-amber/20 bg-amber/[0.05]">
          <p className="wrap py-4 text-[14px] text-amber/90">
            This is a solution blueprint: it describes how NexaPro approaches this type of project. It does not refer to a specific client, and it makes no claims about measured results.
          </p>
        </div>
      )}

      <article className="wrap grid gap-12 py-12 lg:grid-cols-[1fr_300px]">
        <div>
          <Block n={next()} title="Project overview">
            <p className="text-lg leading-relaxed">{c.summary}</p>
          </Block>
          <Block n={next()} title={blueprint ? "Typical client background" : "Client & industry background"}>
            <p className="leading-relaxed">{c.client ? `${c.client} — ${c.industry}.` : `${c.industry}. ${blueprint ? "This pattern applies to organizations in this sector and others with a similar setup." : ""}`}</p>
          </Block>
          <Block n={next()} title="Business context">
            <p className="leading-relaxed">{c.context}</p>
          </Block>
          <Block n={next()} title="Initial challenges"><Bullets items={c.challenges} tone="bg-red-400" /></Block>
          <Block n={next()} title="Project objectives"><Bullets items={c.objectives} /></Block>
          <Block n={next()} title="Technical approach">
            <ol className="space-y-4">
              {c.approach.map((a, i) => (
                <li key={a.title} className="grid grid-cols-[32px_1fr] gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded-full border border-primary/40 font-mono text-[11px] text-primary">{i + 1}</span>
                  <p className="leading-relaxed"><span className="text-white">{a.title}.</span> {a.text}</p>
                </li>
              ))}
            </ol>
          </Block>
          <Block n={next()} title={blueprint ? "The solution" : "Solution delivered"}><p className="leading-relaxed">{c.solution}</p></Block>
          <Block n={next()} title="System architecture">
            <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:flex-wrap sm:items-center">
              {c.architecture.map((a, i) => (
                <div key={a} className="flex items-center gap-2 sm:contents">
                  <span className="pop-in rounded-md border border-primary/30 bg-surface px-3 py-2 font-mono text-[12px] text-slate-100" style={{ animationDelay: `${i * 120}ms` }}>{a}</span>
                  {i < c.architecture.length - 1 && <span className="text-primary sm:mx-1" aria-hidden="true">→</span>}
                </div>
              ))}
            </div>
          </Block>
          <Block n={next()} title="Technologies & tools">
            <div className="flex flex-wrap gap-2">{c.tech.map((t) => <span key={t} className="chip !text-[12.5px]">{t}</span>)}</div>
          </Block>
          <Block n={next()} title="Key features"><Bullets items={c.features} /></Block>
          <Block n={next()} title="Technical challenges & resolutions">
            <div className="space-y-4">
              {c.techChallenges.map((t) => (
                <div key={t.challenge} className="grid gap-3 rounded-md border border-line p-5 sm:grid-cols-2">
                  <div><p className="font-mono text-[11px] uppercase tracking-[0.14em] text-red-300/80">Challenge</p><p className="mt-1 leading-relaxed">{t.challenge}</p></div>
                  <div><p className="font-mono text-[11px] uppercase tracking-[0.14em] text-phosphor">Resolution</p><p className="mt-1 leading-relaxed">{t.resolution}</p></div>
                </div>
              ))}
            </div>
          </Block>
          <Block n={next()} title="Screenshots & visuals">
            {c.screenshots?.length ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {c.screenshots.map((s) => (
                  <figure key={s.src}><img src={s.src} alt={s.alt} loading="lazy" className="rounded-md border border-line" /><figcaption className="mt-2 text-[13px] text-slate-500">{s.alt}</figcaption></figure>
                ))}
              </div>
            ) : (
              <>
                <div className="relative aspect-[16/8] overflow-hidden rounded-md border border-line"><CaseThumb category={c.category} big /></div>
                <p className="mt-2 text-[13px] text-slate-500">Illustration of the solution pattern — not a client screenshot.</p>
              </>
            )}
          </Block>
          <Block n={next()} title={blueprint ? "What this approach delivers" : "Verified results"}>
            {c.results?.length ? (
              <div className="grid gap-4 sm:grid-cols-3">
                {c.results.map((r) => (
                  <div key={r.label} className="rounded-md border border-line p-5"><p className="font-display text-3xl text-white">{r.value}</p><p className="mt-1 text-[13px] text-slate-400">{r.label}</p></div>
                ))}
              </div>
            ) : (
              <Bullets items={c.outcomes} tone="bg-phosphor" />
            )}
          </Block>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-lg border border-line bg-surface/50 p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">Related services</p>
            <ul className="mt-3 space-y-2">
              {c.services.map((s) => {
                const svc = getService(s);
                return svc ? (
                  <li key={s}><Link to={`/services/${s}`} className="link-arrow">{svc.title} <Icon name="arrow" /></Link></li>
                ) : null;
              })}
            </ul>
            <div className="mt-6 border-t border-line pt-6">
              <p className="font-display text-lg text-white">Have a similar project?</p>
              <p className="mt-2 text-[14px] text-slate-400">We'll walk you through how this approach would fit your systems. Free initial consultation.</p>
              <Link to="/get-a-quote" className="btn-primary mt-4 w-full">Discuss a Similar Project</Link>
            </div>
          </div>
        </aside>
      </article>

      {related.length > 0 && (
        <section className="border-t border-line bg-navy/50 py-16 md:py-20">
          <div className="wrap">
            <p className="eyebrow">{String(n + 1).padStart(2, "0")} · Related projects</p>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((x) => <CaseCard key={x.slug} item={x} />)}
            </div>
          </div>
        </section>
      )}
      <CTABand eyebrow="Discuss a similar project" title="Facing a problem like this one? Let's map out your version." primary={{ label: "Discuss Your Project", to: "/get-a-quote" }} />
    </>
  );
}
