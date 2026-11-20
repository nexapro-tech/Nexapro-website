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
  <section className="relative bg-paper text-ink">
    <div className="absolute inset-0 bg-grid-light opacity-60" aria-hidden="true" />
    <div className="wrap relative grid gap-14 py-20 md:py-28 lg:grid-cols-[1fr_1.15fr]">
      <Reveal>
        <p className="eyebrow !text-primary-deep before:!bg-primary-deep">About NexaPro</p>
        <h2 className="mt-5 text-display-lg !text-ink">
          We find the right solution first. Then we build it properly.
        </h2>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">
          Many companies run on systems that were built decades ago and still work. At the same time, customers expect
          websites, apps and instant answers. NexaPro sits exactly between those two realities.
        </p>
        <Link to="/about" className="btn-ghost-dark mt-8">
          More about our company <Icon name="arrow" className="arrow" />
        </Link>
      </Reveal>
      <div className="grid gap-px overflow-hidden rounded-lg border border-ink/10 bg-ink/10 sm:grid-cols-2">
        {points.map(([t, d], i) => (
          <Reveal key={t} delay={i * 90} className="bg-paper p-7">
            <p className="font-mono text-[11px] text-primary-deep">0{i + 1}</p>
            <h3 className="mt-3 font-display text-xl !text-ink">{t}</h3>
            <p className="mt-3 leading-relaxed text-slate-600">{d}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default About;
