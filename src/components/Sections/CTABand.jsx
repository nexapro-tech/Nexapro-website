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
    <section className="relative overflow-hidden border-t border-[#2b3961] bg-[#101735]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_50%,rgba(99,102,241,0.36),transparent_32%),linear-gradient(115deg,rgba(14,25,58,1),rgba(28,31,78,1))]" aria-hidden="true" />
      <div className="absolute -right-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-[#a5b4fc]/25" aria-hidden="true" />
      <div className="absolute -right-24 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full border border-[#c4b5fd]/25" aria-hidden="true" />
      <div className="wrap relative grid items-end gap-10 py-20 md:py-28 lg:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <p className="eyebrow mb-5 !text-[#c4b5fd] before:!bg-[#c4b5fd]">{eyebrow}</p>
          <h2 className="text-display-lg max-w-3xl">{title}</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">{text}</p>
        </Reveal>
        <Reveal delay={120} className="flex flex-col gap-3 lg:items-end">
          <Link to={primary.to} className="btn w-full bg-[#e0e7ff] text-[#17203f] hover:bg-white sm:w-auto">
            {primary.label} <Icon name="arrow" className="arrow" />
          </Link>
          <a href={whatsappLink(whatsappMessageFor(pathname))} target="_blank" rel="noopener noreferrer" className="btn w-full border border-white/25 text-white hover:border-[#c4b5fd] hover:text-[#ddd6fe] sm:w-auto">
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
