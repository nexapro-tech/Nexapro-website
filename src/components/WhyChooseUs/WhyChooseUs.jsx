import { qualityStandard, whyChooseUs } from "../../data/content";
import { FaCheckCircle, FaShieldAlt } from "react-icons/fa";
import Reveal from "../Reveal";

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="section-padding relative overflow-hidden bg-gradient-to-br from-navy via-ink to-[#041018]">
      <div className="pointer-events-none absolute -left-10 top-10 h-56 w-56 rounded-full bg-primary/15 blur-[80px]" />
      <div className="container-custom">
        <Reveal className="section-header mx-auto text-center">
          <p className="section-subtitle">Why Nexapro</p>
          <h2 className="section-title">A premium partner clients stay with</h2>
          <p className="text-slate-300 leading-relaxed">
            Six-plus years in AI/ML and mobile. Ten-plus years maintaining and
            integrating mainframe, AS/400, and COBOL. Full-stack web and commerce,
            delivered to a secure infrastructure standard.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, index) => (
            <Reveal key={item.title} delay={index * 80} variant="scale">
              <article className="card h-full">
                <FaCheckCircle className="text-accent mb-4 text-xl" />
                <h3 className="text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140} variant="up" className="mt-6">
          <article className="card flex flex-col md:flex-row gap-5 items-start border-primary/35">
            <div className="rounded-2xl bg-primary/15 p-4 text-accent">
              <FaShieldAlt className="text-3xl" />
            </div>
            <div>
              <p className="text-accent text-[11px] tracking-[0.22em] uppercase mb-2">Quality standard</p>
              <h3 className="text-xl mb-2">{qualityStandard.title}</h3>
              <p className="text-slate-400 leading-relaxed">{qualityStandard.text}</p>
            </div>
          </article>
        </Reveal>

        <Reveal className="text-center mt-14">
          <p className="text-white text-xl mb-6">Modernize with confidence. Transform with Nexapro.</p>
          <a href="#contact" className="btn-primary">
            Let&apos;s talk
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default WhyChooseUs;
