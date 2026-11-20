import { Link } from "react-router-dom";
import { divisions, services } from "../data/services";
import { sortedCaseStudies } from "../data/caseStudies";
import { processSteps } from "../data/content";
import { useSeo } from "../lib/seo";
import PageHero from "../components/Sections/PageHero";
import SectionHead from "../components/Sections/SectionHead";
import FAQ from "../components/Sections/FAQ";
import CaseCard from "../components/Sections/CaseCard";
import Contact from "../components/Contact/Contact";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";

const sections = [
  ["overview", "Overview"],
  ["problems", "Problems we solve"],
  ["capabilities", "Capabilities"],
  ["stack", "Technology stack"],
  ["use-cases", "Use cases"],
  ["method", "Methodology"],
  ["work", "Related work"],
  ["faq", "FAQ"],
  ["inquiry", "Consultation"],
];

// map service title → option in the inquiry form
const formOption = (s) => s.title;

export default function ServicePage({ service: s }) {
  const division = divisions[s.division];
  const legacy = s.division === "legacy";
  const related = sortedCaseStudies().filter((c) => s.blueprintCategories.includes(c.category) || c.services.includes(s.slug)).slice(0, 3);
  const siblings = services.filter((x) => x.division === s.division && x.slug !== s.slug);
  const method = legacy ? division.approach : processSteps.slice(0, 8).map((p) => ({ title: p.title, text: p.text }));

  useSeo({
    title: s.title,
    description: `${s.heroLead.slice(0, 150).replace(/\s+\S*$/, "")}…`,
    path: `/services/${s.slug}`,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          name: s.title,
          serviceType: s.title,
          description: s.overview.join(" "),
          provider: { "@type": "Organization", name: "NexaPro Technologies" },
          areaServed: "Worldwide",
        },
        {
          "@type": "FAQPage",
          mainEntity: s.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        },
      ],
    },
  });

  return (
    <>
      <PageHero
        variant={legacy ? "scan" : "grid"}
        crumbs={[
          { label: "Services", to: "/services" },
          { label: division.short, to: `/services/${division.slug}` },
          { label: s.title },
        ]}
        eyebrow={s.title}
        title={s.heroTitle}
        lead={s.heroLead}
        aside={
          <div className={`rounded-lg border ${legacy ? "border-phosphor/25 bg-[#03100A]/80" : "border-line bg-surface/60"} p-6 backdrop-blur sm:p-8`}>
            <p className={`font-mono text-[11px] uppercase tracking-[0.2em] ${legacy ? "text-phosphor" : "text-primary"}`}>At a glance</p>
            <dl className="mt-5 divide-y divide-line text-[14px]">
              <div className="flex justify-between gap-4 py-3">
                <dt className="text-slate-500">Division</dt>
                <dd className="text-right text-white">{division.name}</dd>
              </div>
              <div className="flex justify-between gap-4 py-3">
                <dt className="text-slate-500">Experience</dt>
                <dd className="text-right text-white">{division.years}</dd>
              </div>
              <div className="py-3">
                <dt className="text-slate-500">Core stack</dt>
                <dd className="mt-2 flex flex-wrap gap-1.5">
                  {s.stack.flatMap((g) => g.items).slice(0, 7).map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </dd>
              </div>
              <div className="flex justify-between gap-4 py-3">
                <dt className="text-slate-500">First consultation</dt>
                <dd className="text-right text-phosphor">Free of cost</dd>
              </div>
            </dl>
          </div>
        }
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#inquiry" className="btn-primary">
            Discuss your project <Icon name="arrow" className="arrow" />
          </a>
          <a href="#capabilities" className="btn-outline">What we deliver</a>
        </div>
      </PageHero>

      {/* in-page nav */}
      <div className="sticky top-[76px] z-30 hidden border-b border-line bg-ink/90 backdrop-blur-xl md:block">
        <nav aria-label="On this page" className="wrap flex gap-6 overflow-x-auto scrollbar-none py-3 text-[13px]">
          {sections.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="whitespace-nowrap text-slate-400 hover:text-white">
              {label}
            </a>
          ))}
        </nav>
      </div>

      {/* 2. Overview */}
      <section id="overview" className="py-20 md:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow">Service overview</p>
            <h2 className="mt-4 text-display-md">{s.short}</h2>
          </Reveal>
          <Reveal delay={100} className="prose-nx text-lg">
            {s.overview.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 3. Problems */}
      <section id="problems" className="bg-paper py-20 text-ink md:py-24">
        <div className="wrap">
          <SectionHead light eyebrow="Business problems we solve" title="Does any of this sound familiar?" />
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-ink/10 bg-ink/10 md:grid-cols-2">
            {s.problems.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="bg-paper p-7 sm:p-9">
                <p className="font-mono text-[12px] text-red-600/70">Problem 0{i + 1}</p>
                <h3 className="mt-3 font-display text-xl !text-ink">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Capabilities */}
      <section id="capabilities" className="py-20 md:py-24">
        <div className="wrap">
          <SectionHead eyebrow="Detailed capabilities" title={`What our ${s.title.toLowerCase()} work covers`} />
          <div className="mt-12 grid gap-x-10 gap-y-2 md:grid-cols-2">
            {s.capabilities.map((c, i) => (
              <Reveal key={c.title} delay={(i % 2) * 80} className="flex gap-5 border-t border-line py-6">
                <span className={`mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-md border ${legacy ? "border-phosphor/30 text-phosphor" : "border-primary/30 text-primary"}`}>
                  <Icon name="check" />
                </span>
                <div>
                  <h3 className="font-display text-lg text-white">{c.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-400">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Stack */}
      <section id="stack" className="border-t border-line bg-navy/50 py-20 md:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionHead eyebrow="Technology stack" title="Tools we use for this work" />
          <div className="overflow-hidden rounded-lg border border-line">
            {s.stack.map((g) => (
              <div key={g.group} className="grid gap-3 border-b border-line p-5 last:border-b-0 sm:grid-cols-[150px_1fr] sm:items-center">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">{g.group}</p>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((t) => (
                    <span key={t} className="chip !text-[12px]">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Use cases */}
      <section id="use-cases" className="py-20 md:py-24">
        <div className="wrap">
          <SectionHead eyebrow="Use cases & applications" title="Where this service typically helps" />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {s.useCases.map((u, i) => (
              <Reveal as="li" key={u} delay={i * 60} className="flex items-start gap-3 rounded-md border border-line bg-surface/40 p-5 text-slate-200">
                <span className="font-mono text-[11px] text-primary">{String(i + 1).padStart(2, "0")}</span>
                {u}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. Methodology */}
      <section id="method" className="border-t border-line py-20 md:py-24">
        <div className="wrap">
          <SectionHead
            eyebrow="Development methodology"
            title={legacy ? "Change legacy systems without breaking what works" : "From idea to a maintained product"}
          />
          <ol className={`mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 ${legacy ? "lg:grid-cols-5" : "lg:grid-cols-4"}`}>
            {method.map((m, i) => (
              <Reveal as="li" key={m.title} delay={i * 60} className="bg-ink p-6">
                <span className={`font-mono text-[12px] ${legacy ? "text-phosphor" : "text-primary"}`}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-[17px] text-white">{m.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-400">{m.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 8. Related work */}
      {related.length > 0 && (
        <section id="work" className="border-t border-line bg-navy/50 py-20 md:py-24">
          <div className="wrap">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionHead eyebrow="Relevant projects & blueprints" title="See how we approach this kind of project" />
              <Link to="/case-studies" className="link-arrow shrink-0">All case studies <Icon name="arrow" /></Link>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((c) => (
                <CaseCard key={c.slug} item={c} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. FAQ */}
      <section id="faq" className="py-20 md:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionHead eyebrow="FAQ" title="Questions clients usually ask" />
          <FAQ items={s.faqs} />
        </div>
      </section>

      {/* 10. Inquiry */}
      <section id="inquiry" className="border-t border-line bg-gradient-to-b from-navy to-ink py-20 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Free consultation</p>
            <h2 className="mt-4 text-display-md">Talk to our technical team about {s.title.toLowerCase()}.</h2>
            <p className="mt-5 leading-relaxed text-slate-300">
              Share a short description of your requirement. A developer — not a salesperson — will review it and suggest a
              practical approach. The initial consultation and project discussion are free of cost.
            </p>
            <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">Related services</p>
            <ul className="mt-3 space-y-1">
              {siblings.slice(0, 5).map((x) => (
                <li key={x.slug}>
                  <Link to={`/services/${x.slug}`} className="link-arrow !text-slate-300 hover:!text-white">
                    {x.title} <Icon name="arrow" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-line bg-ink/70 p-6 sm:p-8">
            <Contact key={s.slug} defaultService={formOption(s)} />
          </div>
        </div>
      </section>
    </>
  );
}
