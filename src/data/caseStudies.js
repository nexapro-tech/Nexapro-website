// CASE STUDIES & SOLUTION BLUEPRINTS
// ---------------------------------------------------------------------------
// The original website contained no portfolio data, so no client case studies
// are published here — nothing below names a client or claims a measured result.
//
// Entries with `kind: "blueprint"` describe HOW NexaPro approaches a common
// problem in each category. They are labelled as reference blueprints on the site.
//
// To publish a real case study, add an entry with `kind: "case-study"` and fill
// in `client`, `results` (verified, measurable outcomes only) and `screenshots`.
// The listing, filters, detail page, related projects and homepage feature all
// pick it up automatically. Case studies are shown before blueprints.
// ---------------------------------------------------------------------------

export const categories = [
  { key: "mainframe", label: "Mainframe and AS400" },
  { key: "web", label: "Website Development" },
  { key: "ecommerce", label: "E-commerce and Shopify" },
  { key: "mobile", label: "Mobile Applications" },
  { key: "crm", label: "CRM and Enterprise Software" },
  { key: "ai", label: "AI and Automation" },
];

export const caseStudies = [
  {
    slug: "ibm-i-green-screen-to-api-and-web-portal",
    kind: "blueprint",
    featured: true,
    category: "mainframe",
    industry: "Manufacturing & Distribution",
    title: "From green screens to APIs: opening an IBM i system to web and mobile",
    summary:
      "How we expose proven RPG and COBOL business logic on IBM i as secure REST APIs, then put a modern web portal on top — without rewriting the core system.",
    tech: ["RPGLE", "COBOL/400", "Db2 for i", "IWS REST", "Node.js", "React"],
    services: ["as400-ibm-i-development", "mainframe-modernization", "website-development"],
    context:
      "A common situation: order entry, inventory and billing run on IBM i and work reliably. But customers, sales reps and partners can only get information by calling someone who has a 5250 session.",
    challenges: [
      "Business rules live inside RPG and COBOL programs and are not documented",
      "Data sits in DDS physical files that the web team cannot query safely",
      "Any change to the core carries risk because there are few automated tests",
      "Partners receive nightly flat files instead of real-time data",
    ],
    objectives: [
      "Give customers and staff browser/mobile access to key functions",
      "Reuse existing business logic rather than duplicating it",
      "Keep the IBM i system as the single source of truth",
      "Introduce change without disrupting daily operations",
    ],
    approach: [
      { title: "Map the core", text: "Inventory programs, files and screens behind the target journeys (e.g. order status, price lookup, stock availability)." },
      { title: "Isolate logic", text: "Extract the needed logic into ILE service programs with clean parameter interfaces." },
      { title: "Expose APIs", text: "Publish those procedures as REST endpoints via IBM i Integrated Web Services, secured with tokens." },
      { title: "Build the portal", text: "A React front end with a Node.js gateway handles auth, caching and rate limiting." },
      { title: "Verify", text: "Compare API results with 5250 outputs for the same inputs before go-live." },
    ],
    solution:
      "The result is a layered architecture: IBM i keeps running the business, a thin API layer exposes selected functions, and a modern portal gives users a self-service experience. Green-screen users continue working as before.",
    architecture: ["React portal", "Node.js API gateway", "IWS REST services", "RPGLE service programs", "Db2 for i"],
    features: [
      "Order status and history lookup",
      "Real-time stock availability",
      "Customer-specific price lookup",
      "Role-based access for staff, customers and partners",
    ],
    techChallenges: [
      { challenge: "Programs written for interactive 5250 use, with indicators and screen state mixed into logic.", resolution: "Logic is moved into stateless service programs; the display program and the API both call the same procedure." },
      { challenge: "Packed decimal and EBCDIC data in API responses.", resolution: "Typed mapping in the service program interface so the API returns clean JSON numbers and UTF-8 text." },
    ],
    outcomes: [
      "Customers and staff can look up information without a 5250 session",
      "One set of business rules serves both green-screen and web users",
      "A foundation for adding mobile apps and partner integrations later",
    ],
  },
  {
    slug: "cobol-batch-modernization-with-parallel-run",
    kind: "blueprint",
    featured: false,
    category: "mainframe",
    industry: "Banking & Financial Services",
    title: "Modernizing a COBOL batch suite safely with parallel runs",
    summary:
      "A phased approach to documenting, refactoring and partially re-platforming a nightly COBOL/JCL batch suite, proven with side-by-side output comparison.",
    tech: ["COBOL", "JCL", "DB2", "VSAM", "Java", "Spring Batch"],
    services: ["mainframe-modernization", "cobol-development", "java-enterprise-solutions"],
    context:
      "Nightly batch jobs calculate interest, fees or statements. They run, but nobody is confident changing them, and the batch window keeps growing.",
    challenges: [
      "Hundreds of interdependent jobs and programs",
      "Business rules undocumented and spread across copybooks",
      "VSAM files that reporting tools cannot access",
    ],
    objectives: [
      "Document what the batch suite actually does",
      "Reduce risk of change",
      "Move suitable workloads off the critical path",
    ],
    approach: [
      { title: "Discover", text: "Job, program and dataset cross-reference built from JCL, PROCs and source." },
      { title: "Document", text: "Business rules written up in plain language and reviewed with business owners." },
      { title: "Refactor", text: "High-change programs modularized; VSAM data needed by reporting moved to DB2." },
      { title: "Re-platform", text: "Selected reporting jobs rebuilt in Java/Spring Batch." },
      { title: "Parallel run", text: "Old and new outputs compared record-by-record until sign-off." },
    ],
    solution:
      "A documented, partly refactored batch suite where the highest-risk areas are understood and tested, and selected workloads run on a modern stack — proven equivalent before the old path is switched off.",
    architecture: ["JCL scheduler", "COBOL batch", "DB2 for z/OS", "Comparison harness", "Spring Batch (re-platformed jobs)"],
    features: ["Program and job dependency map", "Business-rule catalogue", "Automated output comparison", "Rollback-ready cut-over plan"],
    techChallenges: [
      { challenge: "Packed-decimal rounding differences between COBOL and Java.", resolution: "BigDecimal with explicit rounding modes matched to COBOL ROUNDED semantics, verified by comparison runs." },
    ],
    outcomes: ["Business rules documented and owned", "Lower regression risk for future changes", "Clear, evidence-based path for further modernization"],
  },
  {
    slug: "corporate-website-rebuild-for-lead-generation",
    kind: "blueprint",
    featured: true,
    category: "web",
    industry: "Professional & IT Services",
    title: "Rebuilding a corporate website around services and enquiries",
    summary:
      "Turning a single long page into a structured, fast, multi-page site where every service has its own page and every page leads to a conversation.",
    tech: ["React", "Vite", "Tailwind CSS", "EmailJS", "Vercel"],
    services: ["website-development"],
    context:
      "Many B2B companies have a one-page website that lists everything briefly. Prospects cannot find details for the specific service they need, and search engines have little to index.",
    challenges: ["One page trying to explain every service", "Weak calls to action", "Limited SEO surface", "Enquiry form with no context about the visitor's need"],
    objectives: ["A page per service with real detail", "Clear, repeated paths to contact", "Faster load and better mobile experience", "Keep the existing working enquiry pipeline"],
    approach: [
      { title: "Information architecture", text: "Services grouped into divisions with a mega-menu and dedicated URLs." },
      { title: "Content", text: "Each service page explains problems, capabilities, stack, use cases and FAQs." },
      { title: "Design system", text: "Brand palette from the logo, a type scale and reusable sections with distinct layouts." },
      { title: "Conversion", text: "Contextual CTAs and WhatsApp messages that mention the service being viewed." },
      { title: "Preserve", text: "The existing form submission pipeline is reused unchanged." },
    ],
    solution:
      "A multi-page site with per-page titles and descriptions, contextual enquiry paths, and the original form workflow preserved so no lead is lost during the transition.",
    architecture: ["React SPA + router", "Content data files", "EmailJS pipeline", "WhatsApp click-to-chat", "Vercel hosting"],
    features: ["Service mega-menu", "Filterable case studies", "Contextual WhatsApp messages", "Accessible, validated inquiry form"],
    techChallenges: [
      { challenge: "Adding new form fields without breaking the existing email template.", resolution: "Original template parameters are kept; new fields are added to the message body so they appear in the same email." },
    ],
    outcomes: ["Every service discoverable at its own URL", "Enquiries arrive with service and project context", "A content structure that is easy to extend"],
  },
  {
    slug: "shopify-store-with-inventory-sync",
    kind: "blueprint",
    featured: false,
    category: "ecommerce",
    industry: "Retail & E-commerce",
    title: "A Shopify store with inventory and order sync to the back office",
    summary:
      "Launching a fast Shopify storefront and removing manual re-typing by syncing stock, orders and invoices with the existing back-office system.",
    tech: ["Shopify", "Liquid", "Node.js", "Webhooks", "Razorpay"],
    services: ["ecommerce-development"],
    context: "Growing brands often sell online while inventory and accounting live in another system, so staff copy orders by hand.",
    challenges: ["Overselling when stock is out of date", "Manual order entry", "Slow theme with too many apps"],
    objectives: ["Fast, mobile-first store", "Automatic stock and order sync", "Simple admin for the team"],
    approach: [
      { title: "Theme", text: "Lightweight custom theme sections instead of many third-party apps." },
      { title: "Checkout", text: "Payment gateway and shipping rules configured for the target markets." },
      { title: "Sync service", text: "A small Node.js service using Shopify webhooks to push orders and pull stock levels." },
      { title: "Monitoring", text: "Sync failures logged and alerted instead of failing silently." },
    ],
    solution: "A storefront the team manages from Shopify admin, with orders flowing to the back office and stock flowing back automatically.",
    architecture: ["Shopify storefront", "Webhooks", "Node.js sync service", "Back-office / ERP"],
    features: ["Custom theme sections", "Order webhook processing", "Scheduled stock sync", "Failure alerts"],
    techChallenges: [{ challenge: "Webhook retries creating duplicate orders downstream.", resolution: "Idempotency keys based on Shopify order IDs." }],
    outcomes: ["Orders no longer re-typed by hand", "Stock levels kept consistent across channels"],
  },
  {
    slug: "field-service-mobile-app-flutter",
    kind: "blueprint",
    featured: true,
    category: "mobile",
    industry: "Logistics & Field Services",
    title: "A Flutter field app that replaces paper job sheets",
    summary:
      "An offline-capable Android/iOS app for field staff to receive jobs, capture photos and signatures, and sync back to the office system.",
    tech: ["Flutter", "Dart", "Firebase", "Node.js", "REST APIs"],
    services: ["mobile-app-development"],
    context: "Field technicians and delivery staff often work from paper sheets or chat messages, so the office learns about completed work hours or days later.",
    challenges: ["No real-time status", "Lost or illegible paperwork", "Patchy mobile connectivity on site"],
    objectives: ["Digital job sheets", "Offline capture with later sync", "Live status for the office"],
    approach: [
      { title: "Workflow mapping", text: "Ride along with field staff to capture the real job lifecycle." },
      { title: "Offline-first", text: "Local storage with a sync queue, so work continues without signal." },
      { title: "Capture", text: "Photos, signatures, GPS and checklists attached to each job." },
      { title: "Integration", text: "REST APIs into the office system for job assignment and completion." },
    ],
    solution: "One Flutter codebase for Android and iOS, an API back end and a simple office dashboard showing job status in real time.",
    architecture: ["Flutter app (offline store)", "Sync queue", "Node.js API", "Office dashboard", "Existing back-office system"],
    features: ["Job list and navigation", "Photo and signature capture", "Offline mode", "Push notifications"],
    techChallenges: [{ challenge: "Conflicting edits when the same job is updated offline and in the office.", resolution: "Field-level timestamps and clear conflict rules, with the office notified of conflicts." }],
    outcomes: ["Job status visible to the office as soon as staff sync", "Proof of work captured with every job"],
  },
  {
    slug: "custom-crm-lead-to-followup",
    kind: "blueprint",
    featured: false,
    category: "crm",
    industry: "Real Estate & Education",
    title: "A custom CRM that captures every lead and enforces follow-up",
    summary:
      "Bringing website, WhatsApp and phone enquiries into one pipeline with assignment rules, reminders and management reporting.",
    tech: ["Laravel", "MySQL", "React", "WhatsApp Business API"],
    services: ["crm-development", "custom-software-development"],
    context: "Leads arrive through many channels and are tracked in spreadsheets or phones. Follow-ups depend on individual memory.",
    challenges: ["Leads lost between channels", "No visibility of who is following up", "No source-wise conversion data"],
    objectives: ["Single lead inbox", "Automatic assignment and reminders", "Pipeline and source reporting"],
    approach: [
      { title: "Pipeline design", text: "Stages and fields designed with the sales team." },
      { title: "Capture", text: "Website forms, WhatsApp and manual entry feed one inbox." },
      { title: "Automation", text: "Round-robin assignment, reminders and escalation for overdue follow-ups." },
      { title: "Reporting", text: "Dashboards by source, stage and team member." },
    ],
    solution: "A focused CRM the team adopts because it matches their process, with management visibility built in.",
    architecture: ["Lead sources", "Laravel API", "MySQL", "React dashboard", "Notification service"],
    features: ["Lead inbox", "Kanban pipeline", "Reminders", "Source and conversion reports"],
    techChallenges: [{ challenge: "Duplicate leads from multiple channels.", resolution: "Phone/email normalization and merge suggestions." }],
    outcomes: ["Every enquiry has an owner and a next step", "Management sees the pipeline without asking for reports"],
  },
  {
    slug: "rag-assistant-for-internal-documents",
    kind: "blueprint",
    featured: true,
    category: "ai",
    industry: "Insurance & Enterprise",
    title: "A RAG assistant that answers from your own documents — with sources",
    summary:
      "An AI assistant grounded in manuals, policies and SOPs, giving staff fast answers with citations and handing uncertain cases to a person.",
    tech: ["Python", "LangChain", "LangGraph", "Vector DB", "OpenAI / Claude / Gemini", "FastAPI"],
    services: ["ai-automation"],
    context: "Staff spend time searching PDFs and asking senior colleagues the same questions. Generic chatbots make things up because they do not know your content.",
    challenges: ["Knowledge spread across many documents", "Risk of incorrect AI answers", "Sensitive internal content"],
    objectives: ["Fast answers from approved content", "Visible sources for every answer", "Control over data and access"],
    approach: [
      { title: "Curate", text: "Identify approved sources and owners; set up ingestion for updates." },
      { title: "Index", text: "Chunking, embeddings and hybrid search tuned on real questions." },
      { title: "Ground", text: "Answers generated only from retrieved passages, with citations." },
      { title: "Guardrails", text: "Confidence thresholds, refusal for out-of-scope questions and human hand-off." },
      { title: "Evaluate", text: "A test set of real questions used to measure answer quality before rollout." },
    ],
    solution: "An internal assistant accessible from the browser or chat tools that answers from your documents and shows where each answer came from.",
    architecture: ["Document sources", "Ingestion pipeline", "Vector + keyword index", "LangGraph workflow", "LLM provider", "Chat UI"],
    features: ["Cited answers", "Role-based document access", "Feedback on answers", "Admin re-indexing"],
    techChallenges: [{ challenge: "Tables and scanned PDFs losing meaning when split.", resolution: "Layout-aware parsing and table-specific chunking." }],
    outcomes: ["Staff find policy answers without searching manually", "Every answer traceable to a source document"],
  },
];

export const getCaseStudy = (slug) => caseStudies.find((c) => c.slug === slug);
export const sortedCaseStudies = () =>
  [...caseStudies].sort((a, b) => (a.kind === b.kind ? 0 : a.kind === "case-study" ? -1 : 1));
export const categoryLabel = (key) => categories.find((c) => c.key === key)?.label || key;
