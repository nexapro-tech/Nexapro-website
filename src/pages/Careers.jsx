import { openings, talentAreas } from "../data/careers";
import { companyInfo } from "../data/content";
import { useSeo } from "../lib/seo";
import PageHero from "../components/Sections/PageHero";
import SectionHead from "../components/Sections/SectionHead";
import Contact from "../components/Contact/Contact";
import Reveal from "../components/Reveal";

const why = [
  ["Two worlds of technology", "Work on legacy mainframe and IBM i systems and on modern web, mobile and AI products — often in the same project."],
  ["Real business problems", "You'll see how software affects operations, customers and revenue, not just tickets."],
  ["Learn from specialists", "Pair with developers who have spent a decade on enterprise systems, and share what you know in return."],
  ["Ownership", "Small teams, clear responsibilities and direct contact with the people using what you build."],
];

const steps = [
  ["Apply", "Send the form below with a link to your resume or LinkedIn."],
  ["Review", "Our technical team reviews your skills against current and upcoming work."],
  ["Conversation", "A technical discussion about your experience — no trick questions."],
  ["Offer", "If there's a fit, we discuss role, expectations and start date."],
];

export default function Careers() {
  useSeo({
    title: "Careers",
    description: "Work at NexaPro Technologies on mainframe, AS400, COBOL and RPG systems alongside modern web, mobile, Java and AI projects.",
    path: "/careers",
  });
  return (
    <>
      <PageHero
        crumbs={[{ label: "Careers" }]}
        eyebrow="Careers at NexaPro"
        title="Build what's next — on systems that matter."
        lead="We're always interested in developers who care about doing things properly, whether you write RPGLE, Flutter or Spring Boot."
      >
        <a href="#apply" className="btn-primary mt-8">Apply now</a>
      </PageHero>

      <section className="py-20 md:py-24">
        <div className="wrap">
          <SectionHead eyebrow="Working with NexaPro" title="What working here is like" />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {why.map(([t, d], i) => (
              <Reveal key={t} delay={i * 80} className="border-t border-primary/40 pt-6">
                <h3 className="font-display text-lg text-white">{t}</h3>
                <p className="mt-3 leading-relaxed text-slate-400">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-navy/50 py-20 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHead eyebrow="Current openings" title={openings.length ? `${openings.length} open roles` : "No specific openings listed right now"} lead={openings.length ? undefined : "We still welcome general applications. If your skills match one of the areas below, apply and we'll contact you when a suitable role opens."} />
          <div>
            {openings.length > 0 ? (
              <ul className="divide-y divide-line border-y border-line">
                {openings.map((o) => (
                  <li key={o.slug} className="py-6">
                    <h3 className="font-display text-xl text-white">{o.title}</h3>
                    <p className="mt-1 text-[13px] text-slate-500">{o.type} · {o.location} · {o.experience}</p>
                    <p className="mt-3 text-slate-300">{o.summary}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
                {talentAreas.map((a) => (
                  <div key={a.title} className="bg-ink p-6">
                    <p className="font-display text-[17px] text-white">{a.title}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">{a.skills.map((s) => <span key={s} className="chip">{s}</span>)}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="wrap">
          <SectionHead eyebrow="Application process" title="Four simple steps" />
          <ol className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-4">
            {steps.map(([t, d], i) => (
              <li key={t} className="bg-ink p-6">
                <span className="font-mono text-[12px] text-primary">0{i + 1}</span>
                <h3 className="mt-4 font-display text-lg text-white">{t}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-400">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="apply" className="border-t border-line bg-gradient-to-b from-navy to-ink py-20 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Resume submission</p>
            <h2 className="mt-4 text-display-md">Send us your application</h2>
            <p className="mt-5 leading-relaxed text-slate-300">
              Paste a link to your resume (Google Drive, Dropbox or LinkedIn). Prefer to attach a file? Email it to{" "}
              <a className="text-primary-soft underline underline-offset-4" href={`mailto:${companyInfo.email}?subject=Job%20application`}>
                {companyInfo.email}
              </a>{" "}
              with the role in the subject line.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-ink/70 p-6 sm:p-8">
            <Contact variant="career" />
          </div>
        </div>
      </section>
    </>
  );
}
