import { aboutData } from "../../data/content";
import { FaCheckCircle, FaLightbulb, FaRocket } from "react-icons/fa";
import Reveal from "../Reveal";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <Reveal className="section-header">
          <p className="section-subtitle">About us</p>
          <h2 className="section-title">Who we are</h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <Reveal variant="left">
            <p className="text-slate-300 text-lg leading-relaxed mb-5">{aboutData.description}</p>
            <p className="text-muted leading-relaxed mb-8">{aboutData.philosophy}</p>
            <div className="card">
              <h3 className="text-xl mb-4">Capability at a glance</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {aboutData.expertise.map((tech) => (
                  <div key={tech} className="flex items-center gap-2 text-sm text-slate-300">
                    <FaCheckCircle className="text-primary shrink-0" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {aboutData.strengths.map((item) => (
                <p key={item} className="text-xs tracking-wide text-slate-400 border border-white/10 rounded-full px-4 py-2 hover:border-primary/40 hover:text-accent transition-colors duration-300">
                  {item}
                </p>
              ))}
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={80} variant="right">
              <article className="card">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/15 text-primary flex items-center justify-center">
                    <FaRocket />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Our mission</h3>
                    <p className="text-slate-400 leading-relaxed">{aboutData.mission}</p>
                  </div>
                </div>
              </article>
            </Reveal>
            <Reveal delay={140} variant="right">
              <article className="card">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/15 text-primary flex items-center justify-center">
                    <FaLightbulb />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Our vision</h3>
                    <p className="text-slate-400 leading-relaxed">{aboutData.vision}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
