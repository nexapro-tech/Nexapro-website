import { Link } from "react-router-dom";
import { companyInfo } from "../../data/content";
import { divisions, servicesByDivision } from "../../data/services";
import { categories } from "../../data/caseStudies";
import Icon from "../Icon";

const Col = ({ title, children }) => (
  <div>
    <h2 className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500">{title}</h2>
    <ul className="space-y-2.5 text-[14px]">{children}</ul>
  </div>
);
const FLink = ({ to, children }) => (
  <li>
    <Link to={to} className="text-slate-300 transition-colors hover:text-primary-soft">
      {children}
    </Link>
  </li>
);

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-line bg-[#04070D]">
      <div className="wrap pt-16">
        <div className="grid gap-12 pb-14 lg:grid-cols-[1.3fr_2.7fr]">
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo-circle.png" alt="NexaPro Technologies" width="48" height="48" className="h-12 w-12 rounded-full" loading="lazy" />
              <span className="font-display text-xl text-white">
                NexaPro Technologies
              </span>
            </Link>
            <p className="mt-5 text-[14px] leading-relaxed text-slate-400">{companyInfo.description}</p>
            <p className="mt-5 font-display text-[15px] text-white">{companyInfo.tagline}</p>
            <div className="mt-6 flex gap-2">
              {[
                [companyInfo.linkedin, "linkedin", "LinkedIn"],
                [companyInfo.github, "github", "GitHub"],
                [`mailto:${companyInfo.email}`, "mail", "Email"],
              ].map(([href, icon, label]) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-md border border-line text-slate-300 transition hover:border-primary hover:text-primary"
                >
                  <Icon name={icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 md:grid-cols-[1fr_1fr_0.9fr_1.25fr]">
            <Col title={divisions.legacy.short}>
              {servicesByDivision("legacy").map((s) => (
                <FLink key={s.slug} to={`/services/${s.slug}`}>{s.title}</FLink>
              ))}
            </Col>
            <Col title={divisions.modern.short}>
              {servicesByDivision("modern").map((s) => (
                <FLink key={s.slug} to={`/services/${s.slug}`}>{s.title}</FLink>
              ))}
            </Col>
            <Col title="Company">
              <FLink to="/about">About Us</FLink>
              <FLink to="/case-studies">Case Studies</FLink>
              <FLink to="/industries">Industries</FLink>
              <FLink to="/careers">Careers</FLink>
              <FLink to="/contact">Contact Us</FLink>
              <FLink to="/get-a-quote">Get a Free Quote</FLink>
              <li className="pt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">Case study areas</li>
              {categories.slice(0, 3).map((c) => (
                <FLink key={c.key} to={`/case-studies?category=${c.key}`}>{c.label}</FLink>
              ))}
            </Col>
            <Col title="Contact">
              <li>
                <a href={`mailto:${companyInfo.email}`} className="text-[13.5px] text-slate-300 [overflow-wrap:anywhere] hover:text-primary-soft">
                  {companyInfo.email}
                </a>
              </li>
              <li>
                <a href={`tel:${companyInfo.phoneHref}`} className="text-slate-300 hover:text-primary-soft">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="text-slate-400">{companyInfo.location}</li>
              <li className="pt-3">
                <Link to="/get-a-quote" className="link-arrow">
                  Free consultation <Icon name="arrow" />
                </Link>
              </li>
            </Col>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-line py-6 text-[13px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {companyInfo.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-slate-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-300">Terms of Use</Link>
            <Link to="/sitemap" className="hover:text-slate-300">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
