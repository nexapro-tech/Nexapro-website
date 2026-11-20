import { useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink, whatsappMessageFor } from "../../lib/whatsapp";

export default function WhatsAppButton() {
  const { pathname } = useLocation();
  const href = whatsappLink(whatsappMessageFor(pathname));
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with NexaPro on WhatsApp"
      className="wa-btn group fixed bottom-5 right-5 z-40 flex h-14 items-center gap-0 overflow-hidden rounded-full bg-[#25D366] pl-4 pr-4 text-ink shadow-[0_14px_40px_-12px_rgba(37,211,102,0.7)] hover:-translate-y-0.5 sm:bottom-7 sm:right-7"
    >
      <FaWhatsapp className="h-6 w-6 shrink-0" aria-hidden="true" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300 group-hover:ml-2.5 group-hover:max-w-[160px] group-focus-visible:ml-2.5 group-focus-visible:max-w-[160px]">
        Chat on WhatsApp
      </span>
    </a>
  );
}
