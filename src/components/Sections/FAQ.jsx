import Icon from "../Icon";

export default function FAQ({ items, light = false }) {
  return (
    <div className={`divide-y border-y ${light ? "divide-ink/10 border-ink/10" : "divide-line border-line"}`}>
      {items.map((f, i) => (
        <details key={i} className="group py-1">
          <summary className={`flex cursor-pointer items-start justify-between gap-6 py-5 font-display text-[17px] ${light ? "text-ink" : "text-white"}`}>
            {f.q}
            <span className={`faq-icon mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-transform duration-300 ${light ? "border-ink/15 text-primary-deep" : "border-line text-primary"}`}>
              <Icon name="plus" />
            </span>
          </summary>
          <p className={`max-w-3xl pb-6 leading-relaxed ${light ? "text-slate-600" : "text-slate-300"}`}>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
