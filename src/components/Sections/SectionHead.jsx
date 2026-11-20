import Reveal from "../Reveal";

export default function SectionHead({ eyebrow, title, lead, light = false, className = "", align = "left", children }) {
  return (
    <Reveal className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow && <p className={`eyebrow mb-4 ${light ? "!text-primary-deep before:!bg-primary-deep" : ""}`}>{eyebrow}</p>}
      <h2 className={`text-display-lg ${light ? "!text-ink" : "text-white"}`}>{title}</h2>
      {lead && <p className={`mt-5 text-lg leading-relaxed ${light ? "text-slate-600" : "text-slate-300"}`}>{lead}</p>}
      {children}
    </Reveal>
  );
}
