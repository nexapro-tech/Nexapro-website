import { Link } from "react-router-dom";
import Reveal from "../Reveal";
import Icon from "../Icon";

// Homepage company introduction — light editorial section.
const points = [
  ["Who we are", "A Jaipur-based technology partner with specialists in IBM mainframe, AS400 (IBM i), COBOL and RPG, and a modern engineering team for web, mobile, CRM, Java and AI."],
  ["What we do", "We develop new software, modernize and integrate legacy systems, and support live applications after go-live."],
  ["How we work", "We begin with the business problem, keep what already works, and change one piece at a time — with testing at every step."],
  ["How we stay", "Most work does not end at launch. We offer maintenance, enhancements and dedicated developers as long-term partners."],
];

const About = () => (
  <section className="relative overflow-hidden bg-[#f7f8ff] text-ink">
    <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#c7d2fe]/35 blur-3xl" aria-hidden="true" />
    <div className="wrap relative grid gap-6 py-20 md:py-28 lg:grid-cols-[0.82fr_1.18fr]">
      <Reveal className="flex flex-col justify-between rounded-3xl bg-[#111a35] p-8 shadow-[0_28px_80px_-42px_rgba(15,23,70,0.7)] sm:p-10 lg:p-12">
        <div>
          <p className="eyebrow !text-[#a5b4fc] before:!bg-[#a5b4fc]">About NexaPro</p>
          <h2 className="mt-5 text-display-lg !text-white">
          We find the right solution first. Then we build it properly.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-300">
            Many companies run on systems that were built decades ago and still work. At the same time, customers expect
            websites, apps and instant answers. NexaPro sits exactly between those two realities.
          </p>
        </div>
        <Link to="/about" className="btn mt-10 self-start bg-white text-[#17203f] hover:bg-[#dbe4ff]">
          More about our company <Icon name="arrow" className="arrow" />
        </Link>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2">
        {points.map(([t, d], i) => (
          <Reveal key={t} delay={i * 90} className="rounded-2xl border border-[#dce3f2] bg-white p-7 shadow-[0_16px_40px_-32px_rgba(30,41,90,0.55)] transition-transform duration-300 hover:-translate-y-1">
            <p className="font-mono text-[11px] tracking-[0.18em] text-[#5b5bd6]">0{i + 1}</p>
            <h3 className="mt-4 font-display text-xl !text-[#17203f]">{t}</h3>
            <p className="mt-3 leading-relaxed text-slate-600">{d}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default About;
