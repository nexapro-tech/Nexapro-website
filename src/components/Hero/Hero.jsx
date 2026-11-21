import { Link } from "react-router-dom";
import { experience } from "../../data/content";
import Icon from "../Icon";

export default function Hero() {
  return (
    <section id="home" className="hero-bg relative isolate overflow-hidden border-b border-primary/20 pt-[72px] lg:min-h-[calc(100svh-72px)]">
      <div className="hero-bg__image hero-bg-in absolute inset-0 -z-20" aria-hidden="true" />
      <div className="hero-bg__overlay absolute inset-0 -z-10" aria-hidden="true" />

      <div className="wrap relative flex min-h-[620px] items-center py-16 sm:min-h-[650px] sm:py-20 lg:min-h-[calc(100svh-72px)] lg:py-16">
        <div className="max-w-[680px]">
          <p className="eyebrow hero-in" style={{ animationDelay: "220ms" }}>
            Your technology partner
          </p>

          <h1 className="mt-5 text-[clamp(2.5rem,4.5vw,4.35rem)] leading-[1.04] tracking-[-0.045em] text-white sm:mt-6">
            <span className="hero-title-line" style={{ animationDelay: "310ms" }}>Legacy expertise.</span>{" "}
            <span className="hero-title-line text-gradient" style={{ animationDelay: "400ms" }}>Modern innovation.</span>{" "}
            <span className="hero-title-line" style={{ animationDelay: "490ms" }}>One technology partner.</span>
          </h1>

          <p className="hero-in mt-5 max-w-[610px] text-[15px] leading-relaxed text-slate-200 sm:mt-6 sm:text-[16px]" style={{ animationDelay: "620ms" }}>
            NexaPro develops, modernizes and supports enterprise systems while building web platforms, mobile applications and AI-powered solutions that move businesses forward.
          </p>

          <div className="hero-in mt-7 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "760ms" }}>
            <Link to="/get-a-quote" className="btn-primary">
              Start your project <Icon name="arrow" className="arrow" />
            </Link>
            <Link to="/services" className="btn-outline border-white/35 bg-ink/15 backdrop-blur-[2px] hover:bg-white/[0.06]">
              Explore our services <Icon name="arrow" className="arrow" />
            </Link>
          </div>

          <dl className="hero-in mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-slate-300" style={{ animationDelay: "900ms" }}>
            {[
              [experience.legacyYears, "years with core systems"],
              [experience.modernYears, "years in digital delivery"],
              ["End-to-end", "from discovery to support"],
            ].map(([value, label], index) => (
              <div key={label} className="flex items-center gap-2">
                <dt className="sr-only">{label}</dt>
                <dd className="grid h-4 w-4 place-items-center rounded-full border border-primary/60 bg-primary/10 text-[9px] text-primary-soft">
                  {index === 2 ? "✓" : "•"}
                </dd>
                <dd><span className="font-medium text-white">{value}</span> {label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
