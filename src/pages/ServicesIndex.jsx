import { Link } from "react-router-dom";
import { divisions, servicesByDivision } from "../data/services";
import { useSeo } from "../lib/seo";
import PageHero from "../components/Sections/PageHero";
import CTABand from "../components/Sections/CTABand";
import Engagement from "../components/Engagement/Engagement";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";

export default function ServicesIndex() {
  useSeo({
    title: "Services",
    description: "Mainframe, AS400, COBOL, RPG, modernization and legacy maintenance — plus website, mobile, custom software, CRM, AI, Java and e-commerce development.",
    path: "/services",
  });
  return (
    <>
      <PageHero
        crumbs={[{ label: "Services" }]}
        eyebrow="Services"
        title="Two divisions. Thirteen services. One accountable team."
        lead="Choose a division to see how we work, or jump straight to the service you need. Every service page explains the problems we solve, our capabilities, stack and methodology."
      />
      {[divisions.legacy, divisions.modern].map((d) => {
        const legacy = d.key === "legacy";
        return (
          <section key={d.key} className={`border-b border-line py-16 md:py-20 ${legacy ? "bg-[#03100A]/60" : ""}`}>
            <div className="wrap grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
              <Reveal>
                <p className={`font-mono text-[11px] uppercase tracking-[0.2em] ${legacy ? "text-phosphor" : "text-primary"}`}>
                  {legacy ? "Division A" : "Division B"} · {d.years}
                </p>
                <h2 className="mt-4 text-display-md">{d.name}</h2>
                <p className="mt-4 leading-relaxed text-slate-400">{d.lead}</p>
                <Link to={`/services/${d.slug}`} className="link-arrow mt-6">
                  Division overview <Icon name="arrow" />
                </Link>
              </Reveal>
              <ul className="grid gap-3 sm:grid-cols-2">
                {servicesByDivision(d.key).map((s, i) => (
                  <Reveal as="li" key={s.slug} delay={(i % 2) * 70}>
                    <Link to={`/services/${s.slug}`} className="group flex h-full gap-4 rounded-md border border-line bg-ink/60 p-5 transition-colors hover:border-primary/50">
                      <Icon name={s.icon} className={`mt-1 h-5 w-5 shrink-0 ${legacy ? "text-phosphor" : "text-primary"}`} />
                      <span>
                        <span className="block font-display text-[17px] text-white">{s.title}</span>
                        <span className="mt-1 block text-[14px] leading-relaxed text-slate-400">{s.short}</span>
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </ul>
            </div>
          </section>
        );
      })}
      <Engagement />
      <CTABand />
    </>
  );
}
