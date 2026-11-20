import { companyInfo } from "../data/content";
import { getService } from "../data/services";
import { getCaseStudy } from "../data/caseStudies";

const base = (topic) =>
  `Hi NexaPro Technologies, I visited your website and would like to discuss a project requirement. I am looking for a solution related to ${topic}. Could your team help me understand the possible approach and next steps?`;

/** Build a contextual prefilled WhatsApp message for the current route. */
export function whatsappMessageFor(pathname) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] === "services" && parts[1]) {
    if (parts[1] === "legacy-mainframe-solutions") return base("mainframe / AS400 modernization");
    if (parts[1] === "modern-technology-solutions") return base("modern web, mobile or software development");
    const s = getService(parts[1]);
    if (s) return base(s.whatsappTopic);
  }
  if (parts[0] === "case-studies" && parts[1]) {
    const c = getCaseStudy(parts[1]);
    if (c)
      return `Hi NexaPro Technologies, I was reading "${c.title}" on your website. I have a similar requirement and would like to discuss how your team could approach it. Could we talk about next steps?`;
  }
  if (parts[0] === "careers")
    return "Hi NexaPro Technologies, I visited your Careers page and would like to know about current opportunities.";
  return base("software development or IT services");
}

export const whatsappLink = (message) =>
  `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`;
