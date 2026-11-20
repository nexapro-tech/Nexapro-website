import { Link } from "react-router-dom";
import { divisions, services } from "../data/services";
import { caseStudies } from "../data/caseStudies";
import { useSeo } from "../lib/seo";
import PageHero from "../components/Sections/PageHero";

export default function Sitemap() {
  useSeo({ title: "Sitemap", description: "All pages on the NexaPro Technologies website.", path: "/sitemap" });
  const groups = [
    ["Company", [["/", "Home"], ["/about", "About Us"], ["/industries", "Industries"], ["/careers", "Careers"], ["/contact", "Contact Us"], ["/get-a-quote", "Get a Free Quote"]]],
    ["Services", [["/services", "All services"], ...Object.values(divisions).map((d) => [`/services/${d.slug}`, d.name]), ...services.map((s) => [`/services/${s.slug}`, s.title])]],
    ["Case studies", [["/case-studies", "All case studies"], ...caseStudies.map((c) => [`/case-studies/${c.slug}`, c.title])]],
    ["Legal", [["/privacy-policy", "Privacy Policy"], ["/terms", "Terms of Use"]]],
  ];
  return (
    <>
      <PageHero crumbs={[{ label: "Sitemap" }]} eyebrow="Sitemap" title="Every page, in one place." />
      <section className="py-16">
        <div className="wrap grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {groups.map(([t, links]) => (
            <div key={t}>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">{t}</h2>
              <ul className="mt-4 space-y-2">
                {links.map(([to, l]) => (
                  <li key={to}><Link to={to} className="text-slate-300 hover:text-primary-soft">{l}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
