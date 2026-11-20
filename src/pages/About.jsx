import { Link } from "react-router-dom";
import { companyInfo, experience, whyChooseUs } from "../data/content";
import { divisions } from "../data/services";
import { useSeo } from "../lib/seo";
import PageHero from "../components/Sections/PageHero";
import SectionHead from "../components/Sections/SectionHead";
import CTABand from "../components/Sections/CTABand";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";

const principles = [
  ["Understand before building", "We ask about the business process, the users and the existing systems before we propose a technology."],
  ["Keep what works", "Proven systems are extended and integrated, not thrown away. Rewrites happen only when they clearly pay off."],
  ["Small, safe steps", "We deliver in increments you can test and review, with rollback plans for anything that touches production."],
  ["Write it down", "Architecture notes, business rules and runbooks are part of the deliverable, so knowledge does not leave with people."],
];

export default function About() {
  useSeo({
    title: "About Us",
    description: "NexaPro Technologies is a Jaipur-based technology partner combining 10+ years of mainframe and IBM i expertise with modern web, mobile, CRM, Java and AI engineering.",
    path: "/about",
  });
  return (
    <>
      <PageHero
        crumbs={[{ label: "About Us" }]}
        eyebrow="About NexaPro Technologies"
        title="A technology partner for companies that can't afford to choose between stability and progress."
        lead={companyInfo.description}
      />

      {/* intro + numbers */}
      <section className="py-20 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="prose-nx text-lg">
            <p>
              NexaPro Technologies is a partnership firm based in Jaipur, India. Our longest-standing expertise — more than ten
              years — is in IBM mainframe and AS400 systems: the platforms that quietly run payroll, policies, inventory and
              payments for many businesses.
            </p>
            <p>
              Alongside it we run a modern engineering practice — websites, mobile apps, CRMs, Java services and AI
              automation. Today our two divisions work together, which means we can modernize a legacy core <strong>and</strong>{" "}
              build the new digital channel on top of it, without handing the problem between vendors.
            </p>
            <p>We serve clients in India and are expanding our work with international clients who need reliable legacy and modern delivery from one team.</p>
          </Reveal>
          <Reveal delay={120} className="grid grid-cols-2 gap-px self-start overflow-hidden rounded-lg border border-line bg-line">
            {[
              [experience.legacyYears, "years in mainframe, AS400 & COBOL"],
              [experience.modernYears, "years in mobile, web & AI"],
              ["2", "specialist divisions"],
              ["13", "dedicated services"],
            ].map(([v, l]) => (
              <div key={l} className="bg-ink p-6">
                <p className="font-display text-4xl text-white">{v}</p>
                <p className="mt-2 text-[13px] text-slate-400">{l}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* mission / vision */}
      <section className="bg-paper py-20 text-ink md:py-24">
        <div className="wrap grid gap-px overflow-hidden rounded-lg border border-ink/10 bg-ink/10 md:grid-cols-2">
          <Reveal className="bg-paper p-8 sm:p-12">
            <p className="eyebrow !text-primary-deep before:!bg-primary-deep">Mission</p>
            <p className="mt-5 font-display text-2xl leading-snug !text-ink sm:text-3xl">
              To find the right solution for each business problem — and build it so it keeps working for years.
            </p>
          </Reveal>
          <Reveal delay={100} className="bg-paper p-8 sm:p-12">
            <p className="eyebrow !text-primary-deep before:!bg-primary-deep">Vision</p>
            <p className="mt-5 font-display text-2xl leading-snug !text-ink sm:text-3xl">
              To be the partner companies trust when legacy platforms, modern products and AI must work as one.
            </p>
          </Reveal>
        </div>
      </section>

      {/* philosophy */}
      <section className="py-20 md:py-24">
        <div className="wrap">
          <SectionHead eyebrow="Development philosophy" title="How we think about building software" />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {principles.map(([t, d], i) => (
              <Reveal key={t} delay={i * 80} className="border-t border-primary/40 pt-6">
                <span className="font-mono text-[11px] text-primary">0{i + 1}</span>
                <h3 className="mt-3 font-display text-lg text-white">{t}</h3>
                <p className="mt-3 leading-relaxed text-slate-400">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* team capabilities & specialization */}
      <section className="border-t border-line bg-navy/50 py-20 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          {[divisions.legacy, divisions.modern].map((d) => (
            <Reveal key={d.key}>
              <p className={`font-mono text-[11px] uppercase tracking-[0.2em] ${d.key === "legacy" ? "text-phosphor" : "text-primary"}`}>
                Team capability · {d.years}
              </p>
              <h2 className="mt-4 text-display-md">{d.name}</h2>
              <p className="mt-4 leading-relaxed text-slate-400">{d.lead}</p>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {d.skills.map((s) => <span key={s} className="chip">{s}</span>)}
              </div>
              <Link to={`/services/${d.slug}`} className="link-arrow mt-6">Explore the division <Icon name="arrow" /></Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* why + partnership */}
      <section className="py-20 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHead eyebrow="Why companies choose NexaPro" title="Business approach & long-term partnership" lead="We measure success by whether the system keeps serving the business after launch. That is why most of our engagements include a support or enhancement phase." />
          <ul className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
            {whyChooseUs.map((w) => (
              <li key={w.k} className="bg-ink p-6">
                <h3 className="font-display text-[17px] text-white">{w.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-400">{w.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTABand />
    </>
  );
}
