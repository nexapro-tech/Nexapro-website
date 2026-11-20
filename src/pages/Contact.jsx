import { Link } from "react-router-dom";
import { companyInfo } from "../data/content";
import { useSeo } from "../lib/seo";
import { whatsappLink, whatsappMessageFor } from "../lib/whatsapp";
import PageHero from "../components/Sections/PageHero";
import Contact from "../components/Contact/Contact";
import Icon from "../components/Icon";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactPage({ quote = false }) {
  useSeo({
    title: quote ? "Get a Free Quote" : "Contact Us",
    description: quote
      ? "Request a free quote from NexaPro Technologies for mainframe, AS400, website, mobile app, CRM, AI or Java development. The initial consultation is free."
      : "Contact NexaPro Technologies by form, email, phone or WhatsApp. Talk to our technical team — the first consultation is free.",
    path: quote ? "/get-a-quote" : "/contact",
  });

  const channels = [
    { icon: <Icon name="mail" />, label: "Email", value: companyInfo.email, href: `mailto:${companyInfo.email}` },
    { icon: <Icon name="phone" />, label: "Phone", value: companyInfo.phone, href: `tel:${companyInfo.phoneHref}` },
    { icon: <FaWhatsapp aria-hidden="true" />, label: "WhatsApp", value: "Chat with our team", href: whatsappLink(whatsappMessageFor("/")), ext: true },
    { icon: <Icon name="pin" />, label: "Location", value: companyInfo.location },
  ];

  return (
    <>
      <PageHero
        crumbs={[{ label: quote ? "Get a Free Quote" : "Contact Us" }]}
        eyebrow={quote ? "Request a free quote" : "Contact us"}
        title={quote ? "Share your requirements. Get a clear, honest estimate." : "Talk to our technical team."}
        lead="Tell us what you need to build, fix or connect. A developer reviews every inquiry and replies with next steps — the initial consultation and project discussion are free of cost."
      />

      <section className="py-16 md:py-20">
        <div className="wrap grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="space-y-8">
            <ul className="divide-y divide-line border-y border-line">
              {channels.map((c) => (
                <li key={c.label} className="flex items-start gap-4 py-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-line text-primary">{c.icon}</span>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} target={c.ext ? "_blank" : undefined} rel="noopener noreferrer" className="mt-1 block break-all text-white hover:text-primary-soft">
                        {c.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-white">{c.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="rounded-lg border border-line bg-surface/40 p-6">
              <p className="font-display text-lg text-white">What happens next?</p>
              <ol className="mt-4 space-y-3 text-[14.5px] text-slate-300">
                {["We read your requirement and get back to you shortly.", "A short call to understand systems, users and constraints.", "You receive a suggested approach, timeline and estimate."].map((t, i) => (
                  <li key={t} className="flex gap-3"><span className="font-mono text-[12px] text-primary">0{i + 1}</span>{t}</li>
                ))}
              </ol>
            </div>
            {!quote && (
              <Link to="/careers" className="link-arrow">Looking for a job? Visit Careers <Icon name="arrow" /></Link>
            )}
          </div>
          <div className="rounded-lg border border-line bg-surface/30 p-6 sm:p-10">
            <h2 className="font-display text-2xl text-white">{quote ? "Project details" : "Project inquiry form"}</h2>
            <p className="mb-8 mt-2 text-[14px] text-slate-400">The more context you share, the more useful our first reply will be.</p>
            <Contact submitLabel={quote ? "Request my free quote" : undefined} />
          </div>
        </div>
      </section>
    </>
  );
}
