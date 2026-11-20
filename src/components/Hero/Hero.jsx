import { companyInfo, heroData } from "../../data/content";
import LogoOrbit from "../LogoOrbit";
import Reveal from "../Reveal";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28">
      <div className="container-custom relative grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center pb-20">
        <Reveal variant="left">
          <p className="section-subtitle">{heroData.eyebrow}</p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.08] text-white mb-6">
            Modern digital products.{" "}
            <span className="text-gradient">Battle-tested enterprise systems.</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
            {heroData.description}
          </p>
          <p className="text-primary tracking-[0.18em] uppercase text-xs mb-10">
            {companyInfo.tagline}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              {heroData.ctaPrimary}
            </a>
            <a href="#services" className="btn-outline">
              {heroData.ctaSecondary}
            </a>
          </div>
          <div className="mt-12 flex flex-wrap gap-8 text-sm">
            <div className="hero-stat">
              <p className="text-gradient text-3xl font-semibold">6+</p>
              <p className="text-slate-400 mt-1">Years AI/ML &amp; mobile</p>
            </div>
            <div className="hero-stat">
              <p className="text-gradient text-3xl font-semibold">10+</p>
              <p className="text-slate-400 mt-1">Years mainframe &amp; COBOL</p>
            </div>
            <div className="hero-stat">
              <p className="text-gradient text-3xl font-semibold">Secure</p>
              <p className="text-slate-400 mt-1">Infrastructure quality bar</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={180} variant="scale" className="flex justify-center lg:justify-end">
          <LogoOrbit className="h-64 w-64 md:h-80 md:w-80" />
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
