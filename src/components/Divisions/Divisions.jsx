import { Link } from "react-router-dom";
import { divisions, servicesByDivision } from "../../data/services";
import Reveal from "../Reveal";
import Icon from "../Icon";

const L = divisions.legacy;
const M = divisions.modern;

export default function Divisions() {
  return (
    <section className="relative border-t border-line" aria-labelledby="div-title">
      <div className="wrap py-20 md:py-24">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Two core technology divisions</p>
          <h2 id="div-title" className="mt-4 text-display-lg">
            Deep legacy expertise and modern engineering — under one roof.
          </h2>
        </Reveal>
      </div>
      <div className="grid lg:grid-cols-2">
        {/* Legacy */}
        <Reveal variant="none" className="relative overflow-hidden border-t border-line bg-[#03100A] lg:border-r">
          <div className="absolute inset-0 bg-scan" aria-hidden="true" />
          <div className="relative flex h-full flex-col p-8 sm:p-12 xl:p-16">
            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-phosphor">
              <span>Division A</span>
              <span className="flex items-center gap-2"><i className="pulse-dot h-2 w-2 rounded-full bg-phosphor" /> {L.years}</span>
            </div>
            <h3 className="mt-8 font-display text-3xl text-white md:text-4xl">Legacy Systems &amp; Mainframe Modernization</h3>
            <p className="mt-5 max-w-lg leading-relaxed text-slate-300">
              Development, maintenance and modernization of the IBM platforms that still run banking, insurance, manufacturing and
              distribution — and integration with everything new.
            </p>
            <div className="mt-8 rounded border border-phosphor/20 bg-black/30 p-5 font-mono text-[12.5px] leading-7 text-phosphor/90">
              {[
                ["LANG", "COBOL · COBOL/400 · RPG · RPGLE · PL/I · HLASM"],
                ["DATA", "DB2 · Db2 for i · VSAM · IMS"],
                ["RUN ", "JCL · CICS · CL · DDS"],
                ["DO  ", "Modernize · Migrate data · Integrate"],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-4">
                  <span className="shrink-0 text-phosphor/50">{k}</span>
                  <span className="text-slate-200">{v}</span>
                </div>
              ))}
            </div>
            <ul className="mt-8 grid gap-x-6 gap-y-2 sm:grid-cols-2">
              {servicesByDivision("legacy").map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="group flex items-center justify-between border-b border-phosphor/15 py-2.5 text-[14.5px] text-slate-200 hover:text-phosphor">
                    {s.title}
                    <Icon name="arrow" className="text-phosphor/40 transition group-hover:translate-x-1 group-hover:text-phosphor" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link to={`/services/${L.slug}`} className="btn mt-10 self-start border border-phosphor/40 text-phosphor hover:bg-phosphor hover:text-ink">
              Explore the legacy division <Icon name="arrow" className="arrow" />
            </Link>
          </div>
        </Reveal>

        {/* Modern */}
        <Reveal variant="none" delay={120} className="relative overflow-hidden border-t border-line bg-gradient-to-br from-[#062238] via-[#07182A] to-ink">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-primary/20" aria-hidden="true" />
          <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full border border-primary/25" aria-hidden="true" />
          <div className="relative flex h-full flex-col p-8 sm:p-12 xl:p-16">
            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
              <span>Division B</span>
              <span>{M.years}</span>
            </div>
            <h3 className="mt-8 font-display text-3xl text-white md:text-4xl">Modern Technology Solutions</h3>
            <p className="mt-5 max-w-lg leading-relaxed text-slate-300">
              Websites, web apps, mobile apps, CRMs, Java back ends, e-commerce and AI automation — designed around a business
              problem and built to be maintained.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-2">
              {[
                ["globe", "Web"],
                ["mobile", "Mobile"],
                ["users", "CRM"],
                ["spark", "AI"],
                ["cube", "Java"],
                ["cart", "Commerce"],
              ].map(([i, l]) => (
                <div key={l} className="flex items-center gap-2 rounded border border-primary/20 bg-white/[0.03] px-3 py-3 text-[13px] text-slate-200">
                  <Icon name={i} className="text-primary" /> {l}
                </div>
              ))}
            </div>
            <ul className="mt-8 grid gap-x-6 gap-y-2 sm:grid-cols-2">
              {servicesByDivision("modern").map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="group flex items-center justify-between border-b border-primary/15 py-2.5 text-[14.5px] text-slate-200 hover:text-primary-soft">
                    {s.title}
                    <Icon name="arrow" className="text-primary/40 transition group-hover:translate-x-1 group-hover:text-primary" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link to={`/services/${M.slug}`} className="btn-primary mt-10 self-start">
              Explore modern solutions <Icon name="arrow" className="arrow" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
