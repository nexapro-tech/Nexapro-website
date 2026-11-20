import { Link } from "react-router-dom";
import { industries } from "../data/industries";
import { getService } from "../data/services";
import { categoryLabel } from "../data/caseStudies";
import { useSeo } from "../lib/seo";
import PageHero from "../components/Sections/PageHero";
import CTABand from "../components/Sections/CTABand";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";

export default function Industries() {
  useSeo({
    title: "Industries We Serve",
    description: "How NexaPro supports banking, insurance, manufacturing, retail, logistics, real estate, education, healthcare and public sector with legacy and modern technology.",
    path: "/industries",
  });
  return (
    <>
      <PageHero
        crumbs={[{ label: "Industries" }]}
        eyebrow="Industries we serve"
        title="Technology that fits the way your industry actually works."
        lead="Each sector has its own mix of legacy systems, regulations and customer expectations. Here is how our capabilities map to the challenges we see most often."
      >
        <nav aria-label="Industries" className="mt-8 flex flex-wrap gap-2">
          {industries.map((i) => (
            <a key={i.slug} href={`#${i.slug}`} className="chip !py-1.5 hover:!border-primary hover:!text-white">{i.name}</a>
          ))}
        </nav>
      </PageHero>

      <div className="wrap py-10 md:py-16">
        {industries.map((ind, idx) => (
          <Reveal as="section" key={ind.slug} id={ind.slug} className="grid gap-8 border-b border-line py-12 lg:grid-cols-[0.9fr_2fr] lg:gap-14">
            <div>
              <p className="font-mono text-[11px] text-primary">{String(idx + 1).padStart(2, "0")}</p>
              <h2 className="mt-3 text-display-md">{ind.name}</h2>
              <p className="mt-4 leading-relaxed text-slate-400">{ind.short}</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                ["Common challenges", ind.challenges, "bg-red-400"],
                ["Relevant solutions", ind.solutions, "bg-primary"],
                ["Possible applications", ind.applications, "bg-phosphor"],
              ].map(([t, list, dot]) => (
                <div key={t}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">{t}</p>
                  <ul className="mt-3 space-y-2">
                    {list.map((x) => (
                      <li key={x} className="flex gap-2.5 text-[14.5px] leading-relaxed text-slate-300">
                        <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />{x}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="rounded-md border border-line bg-surface/40 p-5 sm:col-span-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">How NexaPro can help</p>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                  {ind.services.map((s) => {
                    const svc = getService(s);
                    return svc && <Link key={s} to={`/services/${s}`} className="link-arrow">{svc.title} <Icon name="arrow" /></Link>;
                  })}
                  {ind.categories.map((c) => (
                    <Link key={c} to={`/case-studies?category=${c}`} className="link-arrow !text-slate-300 hover:!text-white">
                      {categoryLabel(c)} work <Icon name="arrow" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <CTABand title="Don't see your industry? The problems are often the same." />
    </>
  );
}
