import { qualityStandard, servicesData } from "../../data/content";
import {
  FaBrain,
  FaMobileAlt,
  FaServer,
  FaProjectDiagram,
  FaLaptopCode,
  FaShoppingBag,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";
import Reveal from "../Reveal";

const iconMap = {
  FaBrain,
  FaMobileAlt,
  FaServer,
  FaProjectDiagram,
  FaLaptopCode,
  FaShoppingBag,
};

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <Reveal className="section-header">
          <p className="section-subtitle">What we offer clients</p>
          <h2 className="section-title">Services structured for real delivery</h2>
          <p className="text-slate-300 leading-relaxed">
            AI/ML and mobile with 6+ years of practice. Mainframe, AS/400, COBOL, and
            legacy integration with 10+ years. Full-stack React and Node.js, WordPress
            and Shopify commerce, and custom purpose-built business websites.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon] || FaLaptopCode;
            return (
              <Reveal key={service.id} delay={index * 80} variant="scale">
                <article className="card h-full group">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-2xl bg-primary/10 p-3 text-primary group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-primary-deep group-hover:text-ink transition-all duration-300">
                        <Icon className="text-2xl" />
                      </div>
                      <h3 className="text-lg">{service.title}</h3>
                    </div>
                  </div>
                  {service.badge ? (
                    <p className="text-accent text-[11px] tracking-[0.22em] uppercase mb-3">
                      {service.badge}
                    </p>
                  ) : null}
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{service.summary}</p>
                  <ul className="space-y-2.5">
                    {service.services.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                        <FaCheckCircle className="text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120} variant="up" className="mt-8">
          <aside className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-navy via-surface to-ink p-8 md:p-10">
            <div className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-accent/15 blur-[70px]" />
            <p className="section-subtitle mb-2">{qualityStandard.eyebrow}</p>
            <div className="flex flex-col md:flex-row md:items-start gap-5">
              <div className="rounded-2xl bg-primary/15 p-4 text-accent shrink-0">
                <FaShieldAlt className="text-3xl" />
              </div>
              <div>
                <h3 className="text-2xl mb-3">{qualityStandard.title}</h3>
                <p className="text-slate-300 leading-relaxed max-w-3xl">{qualityStandard.text}</p>
              </div>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
};

export default Services;
