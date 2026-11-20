import { companyInfo } from "../data/content";
import { useSeo } from "../lib/seo";
import PageHero from "../components/Sections/PageHero";

// NOTE: general template text — have it reviewed before relying on it legally.
const privacy = [
  ["Information we collect", "When you submit a form we collect the details you provide, such as your name, business email, phone number, company, project information and, for job applications, links to your resume. We do not ask for payment information on this website."],
  ["How we use it", "We use this information only to respond to your inquiry or application, to discuss and deliver services you request, and to keep basic records of our communication."],
  ["How forms are processed", "Form submissions are delivered to our team by email through a third-party email delivery service (EmailJS). WhatsApp conversations are handled by WhatsApp under its own terms."],
  ["Sharing", "We do not sell your personal information. We share it only with service providers needed to operate this website and our communication, or where required by law."],
  ["Retention", "We keep inquiry and application details only as long as needed for the purposes above, after which they are deleted."],
  ["Your choices", `You can ask us to access, correct or delete your information at any time by emailing ${companyInfo.email}.`],
  ["Cookies", "This website uses your browser's session storage only to remember that you have already seen the introduction animation during your visit. It does not set advertising cookies."],
];
const terms = [
  ["Use of this website", "The content on this website is provided for general information about NexaPro Technologies and its services. It may change without notice."],
  ["Solution blueprints", "Pages marked as solution blueprints describe typical approaches and do not represent a specific client engagement or guaranteed result."],
  ["No offer", "Nothing on this website is a binding offer. Scope, timelines and prices are agreed in writing for each engagement."],
  ["Intellectual property", "The NexaPro Technologies name, logo and website content belong to NexaPro Technologies unless stated otherwise."],
  ["External links", "Links to third-party sites are provided for convenience; we are not responsible for their content."],
  ["Contact", `Questions about these terms can be sent to ${companyInfo.email}.`],
];

export default function Legal({ kind }) {
  const isPrivacy = kind === "privacy";
  const title = isPrivacy ? "Privacy Policy" : "Terms of Use";
  useSeo({ title, description: `${title} for the NexaPro Technologies website.`, path: isPrivacy ? "/privacy-policy" : "/terms" });
  const items = isPrivacy ? privacy : terms;
  return (
    <>
      <PageHero crumbs={[{ label: title }]} eyebrow="Legal" title={title} lead={`Last updated: November 2026.`} />
      <section className="py-16">
        <div className="wrap max-w-3xl">
          {items.map(([h, t]) => (
            <div key={h} className="border-t border-line py-7">
              <h2 className="font-display text-xl text-white">{h}</h2>
              <p className="mt-3 leading-relaxed text-slate-300">{t}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
