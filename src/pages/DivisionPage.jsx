import { Link } from "react-router-dom";
import { servicesByDivision } from "../data/services";
import { sortedCaseStudies } from "../data/caseStudies";
import { useSeo } from "../lib/seo";
import PageHero from "../components/Sections/PageHero";
import SectionHead from "../components/Sections/SectionHead";
import CaseCard from "../components/Sections/CaseCard";
import CTABand from "../components/Sections/CTABand";
import Process from "../components/Process/Process";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { Terminal } from "../components/Visuals/Mini";
import BridgeVisual from "../components/Hero/BridgeVisual";

export default function DivisionPage({ division: d }) {
  const legacy = d.key === "legacy";
  const items = servicesByDivision(d.key);
  const cats = legacy ? ["mainframe"] : ["web", "ecommerce", "mobile", "crm", "ai"];
  const work = sortedCaseStudies().filter((c) => cats.includes(c.category)).slice(0, 3);
  const tone = legacy ? "text-phosphor" : "text-primary";

  useSeo({ title: d.name, description: d.metaDescription, path: `/services/${d.slug}` });

  return (
    <>
      <PageHero
        variant={legacy ? "scan" : "grid"}
        crumbs={[{ label: "Services", to: "/services" }, { label: d.name }]}
        eyebrow={`${d.name} · ${d.years}`}
        title={d.headline}
        lead={d.lead}
        aside={
          legacy ? (
            <Terminal
              title="NXP001"
              heading="CAPABILITIES"
              rows={d.skills.slice(0, 8).map((sk, i) => [`${String(i + 1).padStart(2, "0")} . . .`, sk])}
              className="text-[12px]"
            />
          ) : (
            <BridgeVisual />
          )
        }
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/get-a-quote" className="btn-primary">Get a Free Consultation <Icon name="arrow" className="arrow" /></Link>
          <a href="#services" className="btn-outline">See all {items.length} services</a>
        </div>
      </PageHero>

      {/* Challenges */}
      <section className="py-20 md:py-24">
        <div className="wrap">
          <SectionHead eyebrow="Business challenges" title={legacy ? "Why legacy estates become hard to run" : "What usually holds businesses back"} />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {d.challenges.map((c, i) => (
              <Reveal key={c.title} delay={i * 80} className="border-t-2 border-red-400/40 pt-6">
                <h3 className="font-display text-lg text-white">{c.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-400">{c.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {legacy && (
        <>
          <section className="bg-paper py-20 text-ink md:py-24">
            <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <SectionHead light eyebrow="Existing system limitations" title="What we usually find inside" />
                <ul className="mt-8 space-y-3">
                  {d.limitations.map((l) => (
                    <li key={l} className="flex gap-3 text-slate-700">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500/70" /> {l}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow !text-primary-deep before:!bg-primary-deep">Modernization opportunities</p>
                <div className="mt-6 grid gap-px overflow-hidden rounded-lg border border-ink/10 bg-ink/10 sm:grid-cols-2">
                  {d.opportunities.map((o, i) => (
                    <Reveal key={o.title} delay={i * 80} className="bg-white p-6">
                      <h3 className="font-display text-lg !text-ink">{o.title}</h3>
                      <p className="mt-2 leading-relaxed text-slate-600">{o.text}</p>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden border-t border-line bg-[#03100A] py-20 md:py-24">
            <div className="absolute inset-0 bg-scan" aria-hidden="true" />
            <div className="wrap relative">
              <SectionHead eyebrow="Technical approach & integration" title="Our method: understand, stabilize, then modernize" lead="Every legacy engagement follows the same disciplined sequence, whether it is a single enhancement or a multi-year modernization." />
              <ol className="mt-12 grid gap-4 lg:grid-cols-5">
                {d.approach.map((a, i) => (
                  <Reveal as="li" key={a.title} delay={i * 90} className="relative rounded-md border border-phosphor/20 bg-black/30 p-6">
                    <span className="font-mono text-[12px] text-phosphor">STEP {String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-4 font-display text-lg text-white">{a.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-slate-300">{a.text}</p>
                  </Reveal>
                ))}
              </ol>
              <div className="mt-12 rounded-md border border-phosphor/20 bg-black/30 p-6 font-mono text-[12.5px] leading-7 text-slate-300">
                <p className="text-phosphor">// integration possibilities</p>
                <p>CICS / IMS / RPG programs ──► REST APIs (z/OS Connect · IWS) ──► web · mobile · partners</p>
                <p>DB2 / Db2 for i / VSAM ──► SQL views · CDC · ETL ──► reporting · analytics · AI</p>
                <p>Batch (JCL / CL) ──► MQ · Kafka · SFTP ──► cloud services · Java microservices</p>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Services */}
      <section id="services" className="border-t border-line py-20 md:py-24">
        <div className="wrap">
          <SectionHead eyebrow="Services in this division" title={`${items.length} dedicated services`} />
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {items.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 70} className="h-full bg-ink">
                <Link to={`/services/${s.slug}`} className="group flex h-full flex-col p-7 transition-colors hover:bg-surface">
                  <Icon name={s.icon} className={`h-6 w-6 ${tone}`} />
                  <h3 className="mt-6 font-display text-xl text-white">{s.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-slate-400">{s.short}</p>
                  <span className="link-arrow mt-6">Learn more <Icon name="arrow" /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {!legacy && <Process />}

      <section className="border-t border-line bg-navy/50 py-20 md:py-24">
        <div className="wrap">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHead eyebrow="Relevant work" title="How we approach projects in this division" />
            <Link to="/case-studies" className="link-arrow shrink-0">All case studies <Icon name="arrow" /></Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {work.map((c) => <CaseCard key={c.slug} item={c} />)}
          </div>
        </div>
      </section>

      <CTABand
        title={legacy ? "Need COBOL, RPG or mainframe help? Talk to a specialist." : "Have an idea or a broken process? Let's design the fix."}
      />
    </>
  );
}
