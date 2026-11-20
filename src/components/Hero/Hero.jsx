import { Link } from "react-router-dom";
import { experience } from "../../data/content";
import { services } from "../../data/services";
import Icon from "../Icon";
import BridgeVisual from "./BridgeVisual";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden pt-[76px]">
      <div className="absolute inset-0 bg-grid mask-fade-b" aria-hidden="true" />
      <div className="absolute -top-48 left-1/3 h-[560px] w-[560px] rounded-full bg-primary-deep/25 blur-[140px]" aria-hidden="true" />

      <div className="wrap relative grid items-center gap-10 pb-16 pt-10 md:pt-16 lg:grid-cols-[1.08fr_1fr] lg:pb-24">
        <div>
          <p className="eyebrow hero-in" style={{ animationDelay: "0ms" }}>Mainframe · AS400 · Web · Mobile · AI</p>
          <h1 className="hero-in mt-6 text-display-xl text-white" style={{ animationDelay: "80ms" }}>
            Legacy strength. Modern speed.{" "}
            <span className="text-gradient">One team that solves both.</span>
          </h1>
          <p className="hero-in mt-6 max-w-xl text-lg leading-relaxed text-slate-300" style={{ animationDelay: "180ms" }}>
            NexaPro Technologies develops, modernizes and supports mainframe, AS400, COBOL and RPG systems — and builds the
            web platforms, mobile apps, CRMs and AI automation that put them to work for your customers.
          </p>
          <div className="hero-in mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "280ms" }}>
            <Link to="/get-a-quote" className="btn-primary">
              Get a Free Consultation <Icon name="arrow" className="arrow" />
            </Link>
            <Link to="/services" className="btn-outline">
              Explore Our Expertise
            </Link>
          </div>

          <dl className="hero-in mt-12 grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-4" style={{ animationDelay: "380ms" }}>
            {[
              [experience.legacyYears, "Years on mainframe & IBM i"],
              [experience.modernYears, "Years in web, mobile & AI"],
              [String(services.length), "Specialist services"],
              ["Free", "Initial consultation"],
            ].map(([v, l]) => (
              <div key={l} className="bg-ink px-4 py-4">
                <dt className="sr-only">{l}</dt>
                <dd className="font-display text-2xl text-white">{v}</dd>
                <dd className="mt-1 text-[12px] leading-snug text-slate-400">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-in" style={{ animationDelay: "250ms" }}>
          <BridgeVisual />
        </div>
      </div>
    </section>
  );
};

export default Hero;
