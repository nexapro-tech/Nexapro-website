import { Link } from "react-router-dom";
import { divisions, servicesByDivision } from "../../data/services";
import Reveal from "../Reveal";
import Icon from "../Icon";

const cards = [
  {
    division: divisions.legacy,
    icon: "terminal",
    label: "Core systems",
    title: "Legacy & Mainframe Solutions",
    text: "Safe development, support and modernization for the IBM platforms behind critical business operations.",
    skills: ["COBOL", "RPGLE", "IBM i", "z/OS", "DB2"],
    tone: "green",
  },
  {
    division: divisions.modern,
    icon: "layers",
    label: "Digital products",
    title: "Modern Technology Solutions",
    text: "Websites, mobile apps, software platforms and AI automation built around your real workflow.",
    skills: ["Web", "Mobile", "CRM", "Java", "AI"],
    tone: "blue",
  },
];

export default function Divisions() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-[#070d18]" aria-labelledby="div-title">
      <div className="absolute left-[18%] top-[-12rem] h-80 w-80 rounded-full bg-primary-deep/10 blur-[110px]" aria-hidden="true" />
      <div className="wrap relative py-14 md:py-16">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Two core technology divisions</p>
          <h2 id="div-title" className="mt-4 text-display-lg">The right expertise for the system you are building or improving.</h2>
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {cards.map(({ division, icon, label, title, text, skills, tone }, index) => {
            const green = tone === "green";
            const serviceCount = servicesByDivision(division.key).length;
            const accent = green ? "text-phosphor" : "text-primary";
            const border = green ? "border-phosphor/25 hover:border-phosphor/55" : "border-primary/25 hover:border-primary/55";
            const iconStyle = green ? "border-phosphor/30 bg-phosphor/10 text-phosphor" : "border-primary/30 bg-primary/10 text-primary";
            const tagStyle = green ? "border-phosphor/20 bg-phosphor/[0.05] text-phosphor/85" : "border-primary/20 bg-primary/[0.05] text-primary-soft";

            return (
              <Reveal key={division.key} delay={index * 100} className={`group relative overflow-hidden rounded-lg border bg-[#091424] p-5 transition-colors duration-300 sm:p-6 ${border}`}>
                <div className={`absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full blur-2xl ${green ? "bg-phosphor/10" : "bg-primary/10"}`} aria-hidden="true" />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-5">
                    <span className={`grid h-10 w-10 place-items-center rounded-md border ${iconStyle}`}>
                      <Icon name={icon} className="h-5 w-5" />
                    </span>
                    <p className={`font-mono text-[10px] uppercase tracking-[0.16em] ${accent}`}>{label} · {division.years}</p>
                  </div>

                  <h3 className="mt-5 font-display text-xl text-white">{title}</h3>
                  <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-slate-400">{text}</p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {skills.map((skill) => <span key={skill} className={`rounded border px-2 py-1 font-mono text-[10px] ${tagStyle}`}>{skill}</span>)}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-white/[0.08] pt-4">
                    <span className="text-[12px] text-slate-500">{serviceCount} specialist services</span>
                    <Link to={`/services/${division.slug}`} className={`link-arrow text-[13px] ${green ? "!text-phosphor" : ""}`}>
                      View division <Icon name="arrow" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
