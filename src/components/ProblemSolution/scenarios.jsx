// Scenarios for the homepage "problem → solution" stage.
// Each is an illustrative, typical client situation (no client names or measured
// results) and links to the matching solution blueprint.
import { Browser, Check, Doc, KanbanCol, Phone, StatusTrack, Tag, Terminal, Bars } from "../Visuals/Mini";
import Icon from "../Icon";

export const scenarios = [
  {
    key: "legacy",
    tab: "Legacy system nobody can reach",
    who: "Manufacturer running orders on AS400",
    problem:
      "Order data lives on IBM i. Customers phone in to ask about status, only two people can change the RPG code, and partners get a file once a night.",
    approach: ["Map RPG programs & files", "Wrap logic as service programs", "Publish secure REST APIs", "Build a web portal on top"],
    outcome: [
      "Customers check order status themselves",
      "Same business rules serve green-screen and web",
      "IBM i stays the system of record — no risky rewrite",
    ],
    blueprint: "ibm-i-green-screen-to-api-and-web-portal",
    service: "/services/as400-ibm-i-development",
    Problem: () => (
      <div className="relative">
        <Terminal
          className="shake"
          rows={[
            ["Order no . . . :", "48213"],
            ["Customer . . . :", "ACME DISTRIB."],
            ["Status . . . . :", "SHPD"],
            ["Last change . :", "1998-04-12"],
            ["Program . . . :", "ORD010R (RPG III)"],
          ]}
        />
        <Tag tone="warn" className="ps-tag pop-in absolute -top-3 right-2 sm:-right-6" style={{ animationDelay: "400ms" }}>
          ☎ “Where is my order?” calls all day
        </Tag>
        <Tag tone="amber" className="ps-tag pop-in absolute -bottom-3 left-2 sm:-left-5" style={{ animationDelay: "900ms" }}>
          Only 2 people know this code
        </Tag>
        <Tag tone="warn" className="ps-tag pop-in blink-warn absolute -bottom-3 right-2 hidden sm:inline-flex" style={{ animationDelay: "1400ms" }}>
          Partner feed: nightly FTP
        </Tag>
      </div>
    ),
    Solution: () => (
      <div className="space-y-3">
        <Browser url="portal.acme-orders.com/orders/48213">
          <div className="flex items-center justify-between">
            <p className="font-display text-[12px] text-white sm:text-[14px]">Order #48213</p>
            <Tag tone="ok">Shipped</Tag>
          </div>
          <div className="mt-3">
            <StatusTrack active={2} />
          </div>
          <div className="mt-3 flex items-center justify-between rounded bg-white/[0.03] px-2 py-1.5 font-mono text-[9px] text-slate-400">
            <span>GET /api/orders/48213</span>
            <span className="text-phosphor">200 OK</span>
          </div>
        </Browser>
      </div>
    ),
  },
  {
    key: "crm",
    tab: "Leads lost in chats and spreadsheets",
    who: "Sales team juggling WhatsApp, calls and Excel",
    problem:
      "Enquiries arrive from the website, WhatsApp and phone. They sit in personal phones and a shared sheet, follow-ups depend on memory, and nobody knows the real pipeline.",
    approach: ["Design pipeline with the sales team", "Capture every channel in one inbox", "Auto-assign & remind", "Live pipeline reports"],
    outcome: ["Every enquiry has an owner and a next step", "Reminders replace memory", "Management sees the pipeline without asking"],
    blueprint: "custom-crm-lead-to-followup",
    service: "/services/crm-development",
    Problem: () => (
      <div className="relative h-[190px] sm:h-[220px]">
        <div className="absolute left-0 top-2 w-[62%] rounded border border-white/10 bg-[#0E1A12] p-2 font-mono text-[9px] text-slate-300 sm:text-[10px]">
          <p className="mb-1 text-[#7BC47F]">leads_final_v3 (2).xlsx</p>
          {["Ravi — follow up?", "Neha — sent quote??", "Unknown no. — called", "Amit — duplicate"].map((r, i) => (
            <div key={i} className="flex justify-between border-t border-white/5 py-0.5">
              <span>{r}</span>
              <span className={i % 2 ? "text-red-300" : "text-amber"}>{i % 2 ? "missed" : "?"}</span>
            </div>
          ))}
        </div>
        {["Is the price final?", "Any update??", "Hello?"].map((m, i) => (
          <div
            key={m}
            className="pop-in absolute right-0 rounded-lg rounded-tr-none bg-[#1F3A2C] px-2.5 py-1.5 text-[10px] text-slate-100 shadow sm:text-[11px]"
            style={{ top: `${10 + i * 52}px`, right: `${i * 10}px`, animationDelay: `${300 + i * 450}ms` }}
          >
            {m} <span className="ml-1 text-[8px] text-slate-400">✓✓</span>
          </div>
        ))}
        <Tag tone="warn" className="ps-tag pop-in blink-warn absolute bottom-0 left-4" style={{ animationDelay: "1500ms" }}>
          3 follow-ups overdue
        </Tag>
      </div>
    ),
    Solution: () => (
      <Browser url="crm.yourcompany.com/pipeline">
        <div className="flex gap-1.5">
          <KanbanCol title="New" cards={["Ravi · Web", "Amit · WhatsApp"]} accent="bg-primary" />
          <KanbanCol title="Quoted" cards={["Neha · Call"]} accent="bg-amber" />
          <KanbanCol title="Won" cards={["Sara · Web"]} accent="bg-phosphor" />
        </div>
        <div className="pop-in mt-2 flex items-center gap-2 rounded border border-primary/30 bg-primary/10 px-2 py-1.5 text-[9.5px] text-primary-soft" style={{ animationDelay: "700ms" }}>
          <Icon name="clock" /> Reminder: call Neha today, 4:00 PM
        </div>
      </Browser>
    ),
  },
  {
    key: "ai",
    tab: "Team buried in repetitive questions",
    who: "Support team answering from long PDFs",
    problem:
      "The same questions come in every day. Answers are buried in manuals and policy PDFs, so new staff escalate to seniors and customers wait.",
    approach: ["Collect approved documents", "Index with embeddings + search", "Answer only from sources (RAG)", "Hand off when unsure"],
    outcome: ["Instant answers with the source shown", "Seniors freed from routine queries", "Uncertain cases go to a person, not a guess"],
    blueprint: "rag-assistant-for-internal-documents",
    service: "/services/ai-automation",
    Problem: () => (
      <div className="relative h-[190px] sm:h-[220px]">
        {["Policy_2024.pdf", "Manual_v7.pdf", "SOP_Claims.pdf", "FAQ_old.docx"].map((d, i) => (
          <Doc key={d} label={d} className="absolute" style={{ left: `${6 + i * 15}%`, top: `${18 + (i % 2) * 22}px`, transform: `rotate(${(i - 1.5) * 6}deg)` }} />
        ))}
        <div className="absolute bottom-0 right-0 w-[58%] space-y-1.5">
          {["How do I raise a claim?", "What is the refund policy?", "How do I raise a claim?"].map((q, i) => (
            <div key={i} className="pop-in rounded-md bg-surface-2 px-2 py-1 text-[9.5px] text-slate-200 sm:text-[10.5px]" style={{ animationDelay: `${400 + i * 450}ms` }}>
              {q}
            </div>
          ))}
        </div>
        <Tag tone="amber" className="ps-tag pop-in absolute right-0 top-0" style={{ animationDelay: "1600ms" }}>
          Waiting for a senior…
        </Tag>
      </div>
    ),
    Solution: () => (
      <Browser url="assist.yourcompany.com">
        <div className="space-y-2 text-[10px] sm:text-[11px]">
          <div className="ml-auto w-fit rounded-md bg-primary/15 px-2 py-1 text-primary-soft">How do I raise a claim?</div>
          <div className="pop-in rounded-md bg-white/[0.04] p-2 text-slate-200" style={{ animationDelay: "350ms" }}>
            <p className="typing">Submit form C-2 with the invoice within 30 days…</p>
            <div className="mt-1.5 flex flex-wrap gap-1">
              <Tag tone="info">SOP_Claims.pdf · p.4</Tag>
              <Tag tone="info">Policy_2024.pdf · §7</Tag>
            </div>
          </div>
        </div>
      </Browser>
    ),
  },
  {
    key: "mobile",
    tab: "Field team still on paper",
    who: "Service company with technicians on the road",
    problem:
      "Technicians carry paper job sheets. The office calls to ask if a job is done, sheets get lost, and invoices wait until someone types everything in.",
    approach: ["Ride along to map the job flow", "Offline-first Flutter app", "Photos, signature & GPS per job", "Sync to the office system"],
    outcome: ["Office sees job status once staff sync", "Proof of work captured on every job", "One app for Android and iOS"],
    blueprint: "field-service-mobile-app-flutter",
    service: "/services/mobile-app-development",
    Problem: () => (
      <div className="relative h-[190px] sm:h-[220px]">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute w-[46%] rounded-sm bg-[#F2EBD9] p-2 font-mono text-[8.5px] text-slate-700 shadow-lg sm:text-[9.5px]"
            style={{ left: `${4 + i * 12}%`, top: `${8 + i * 18}px`, transform: `rotate(${-6 + i * 5}deg)` }}
          >
            <p className="font-semibold">JOB SHEET #{231 + i}</p>
            <p>Site: ____________</p>
            <p>Done? ☐  Sign: ____</p>
          </div>
        ))}
        <Tag tone="warn" className="ps-tag pop-in shake absolute right-0 top-4" style={{ animationDelay: "500ms" }}>
          ☎ Office: “Is job #232 done?”
        </Tag>
        <Tag tone="amber" className="ps-tag pop-in absolute bottom-2 right-2" style={{ animationDelay: "1200ms" }}>
          Sheet #233 missing
        </Tag>
      </div>
    ),
    Solution: () => (
      <div className="flex items-end gap-3">
        <Phone className="w-[46%] shrink-0">
          <p className="mb-1.5 font-display text-[10.5px] text-white">Today's jobs</p>
          {["#231 · Done", "#232 · Done", "#233 · On site"].map((j, i) => (
            <div key={j} className="pop-in mb-1 flex items-center justify-between rounded bg-surface-2 px-1.5 py-1 text-[8.5px] text-slate-200" style={{ animationDelay: `${i * 160}ms` }}>
              {j}
              <i className={`h-1.5 w-1.5 rounded-full ${i < 2 ? "bg-phosphor" : "bg-amber"}`} />
            </div>
          ))}
          <div className="mt-1.5 rounded bg-primary py-1 text-center text-[8.5px] font-medium text-ink">Capture signature</div>
        </Phone>
        <Browser url="office / dispatch" className="flex-1">
          <Bars values={[30, 55, 45, 70, 85]} className="!h-12" />
          <p className="mt-2 text-[9px] text-slate-400">Jobs synced today</p>
        </Browser>
      </div>
    ),
  },
];

// The legacy scenario renders its outcome list via the shared checklist; others too.
export const OutcomeList = ({ items }) => (
  <ul className="space-y-1.5">
    {items.map((t, i) => (
      <Check key={t} delay={500 + i * 220}>
        {t}
      </Check>
    ))}
  </ul>
);
