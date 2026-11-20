import { Bars, Browser, Doc, KanbanCol, Phone, StatusTrack, Tag, Terminal } from "../Visuals/Mini";

// Category illustration used as a case-study thumbnail and hero visual.
export default function CaseThumb({ category, big = false }) {
  const bg = category === "mainframe" ? "bg-[#03100A]" : "bg-gradient-to-br from-[#062238] to-ink";
  return (
    <div className={`absolute inset-0 overflow-hidden ${bg}`} aria-hidden="true">
      <div className={`absolute inset-0 ${category === "mainframe" ? "bg-scan" : "bg-grid opacity-70"}`} />
      <div className={`absolute inset-0 flex items-center justify-center p-6 ${big ? "sm:p-12" : ""}`}>
        <div className={`w-full ${big ? "max-w-xl" : "max-w-[300px]"} transition-transform duration-700 group-hover:scale-[1.04]`}>
          {category === "mainframe" && (
            <div className="relative">
              <Terminal rows={[["PGM . . :", "ORDSRV"], ["API . . :", "/orders/{id}"], ["Status  :", "ACTIVE"]]} />
              <Tag tone="info" className="absolute -bottom-3 right-3">REST ↔ RPGLE</Tag>
            </div>
          )}
          {category === "web" && (
            <Browser url="yourcompany.com/services">
              <div className="h-2 w-2/3 rounded bg-white/70" />
              <div className="mt-2 h-1.5 w-full rounded bg-white/15" />
              <div className="mt-1 h-1.5 w-4/5 rounded bg-white/15" />
              <div className="mt-3 h-5 w-24 rounded bg-primary" />
              <div className="mt-3 grid grid-cols-3 gap-1.5">
                {[0, 1, 2].map((i) => <div key={i} className="h-8 rounded border border-white/10 bg-white/[0.03]" />)}
              </div>
            </Browser>
          )}
          {category === "ecommerce" && (
            <Browser url="store.yourbrand.com">
              <div className="grid grid-cols-3 gap-1.5">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="rounded border border-white/10 p-1">
                    <div className="h-8 rounded bg-gradient-to-br from-primary/30 to-primary-deep/20" />
                    <div className="mt-1 h-1 w-3/4 rounded bg-white/30" />
                    <div className="mt-1 h-1 w-1/3 rounded bg-primary" />
                  </div>
                ))}
              </div>
              <div className="mt-2 flex justify-end"><Tag tone="ok">Stock synced</Tag></div>
            </Browser>
          )}
          {category === "mobile" && (
            <div className="flex items-end justify-center gap-3">
              <Phone className="w-[42%]">
                {["#231", "#232", "#233"].map((j, i) => (
                  <div key={j} className="mb-1 flex justify-between rounded bg-surface-2 px-1.5 py-1 text-[8px] text-slate-200">
                    {j}<i className={`h-1.5 w-1.5 rounded-full ${i < 2 ? "bg-phosphor" : "bg-amber"}`} />
                  </div>
                ))}
              </Phone>
              <Browser url="dispatch" className="w-[52%]"><Bars className="!h-10" /></Browser>
            </div>
          )}
          {category === "crm" && (
            <Browser url="crm / pipeline">
              <div className="flex gap-1.5">
                <KanbanCol title="New" cards={["Lead · Web", "Lead · WA"]} />
                <KanbanCol title="Quoted" cards={["Lead · Call"]} accent="bg-amber" />
                <KanbanCol title="Won" cards={["Lead · Web"]} accent="bg-phosphor" />
              </div>
            </Browser>
          )}
          {category === "ai" && (
            <div className="relative">
              <Doc label="Policy.pdf" className="absolute -left-2 -top-6 rotate-[-8deg]" />
              <Browser url="assistant" className="relative ml-10">
                <div className="ml-auto w-fit rounded bg-primary/15 px-2 py-1 text-[9px] text-primary-soft">How do I…?</div>
                <div className="mt-1.5 rounded bg-white/[0.04] p-1.5 text-[9px] text-slate-300">Answer grounded in your documents.</div>
                <div className="mt-1.5"><Tag tone="info">Source · p.4</Tag></div>
              </Browser>
            </div>
          )}
          {!["mainframe", "web", "ecommerce", "mobile", "crm", "ai"].includes(category) && <StatusTrack />}
        </div>
      </div>
    </div>
  );
}
