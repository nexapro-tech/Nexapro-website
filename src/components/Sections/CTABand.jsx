import { Link } from "react-router-dom";
import { companyInfo } from "../../data/content";
import { whatsappLink, whatsappMessageFor } from "../../lib/whatsapp";
import { useLocation } from "react-router-dom";
import Icon from "../Icon";
import Reveal from "../Reveal";

export default function CTABand({
  eyebrow = "Free initial consultation",
  title = "Have a system to fix, connect or build? Let's talk it through.",
  text = "Share your requirement and our technical team will suggest a practical approach, timeline and engagement model. The first consultation and project discussion are free of cost.",
  primary = { label: "Get a Free Consultation", to: "/get-a-quote" },
}) {
  const { pathname } = useLocation();
  return (
    <section className="relative overflow-hidden border-t border-line">
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
      <div className="absolute -right-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-primary/20" aria-hidden="true" />
      <div className="absolute -right-24 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full border border-primary/10" aria-hidden="true" />
      <div className="wrap relative grid items-end gap-10 py-20 md:py-28 lg:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <p className="eyebrow mb-5">{eyebrow}</p>
          <h2 className="text-display-lg max-w-3xl">{title}</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">{text}</p>
        </Reveal>
        <Reveal delay={120} className="flex flex-col gap-3 lg:items-end">
          <Link to={primary.to} className="btn-primary w-full sm:w-auto">
            {primary.label} <Icon name="arrow" className="arrow" />
          </Link>
          <a href={whatsappLink(whatsappMessageFor(pathname))} target="_blank" rel="noopener noreferrer" className="btn-outline w-full sm:w-auto">
            Discuss on WhatsApp
          </a>
          <a href={`tel:${companyInfo.phoneHref}`} className="mt-1 font-mono text-[13px] text-slate-400 hover:text-white">
            or call {companyInfo.phone}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
