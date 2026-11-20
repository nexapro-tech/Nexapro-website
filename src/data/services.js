// Service + division content. Each service renders at /services/:slug.
// `blueprints` link to entries in caseStudies.js by category.

export const divisions = {
  legacy: {
    slug: "legacy-mainframe-solutions",
    key: "legacy",
    name: "Legacy & Mainframe Solutions",
    short: "Legacy & Mainframe",
    years: "10+ years",
    headline: "The systems that run your business deserve specialists, not a rewrite pitch.",
    lead:
      "Mainframe and IBM i applications still process the payments, policies, orders and payroll that companies depend on. We develop, maintain and modernize them — and connect them to the web, mobile and cloud channels your customers expect.",
    metaDescription:
      "Mainframe, AS/400 (IBM i), COBOL, RPG/RPGLE, JCL, DB2, CICS and VSAM development, maintenance and modernization by NexaPro Technologies.",
    skills: ["COBOL & COBOL/400", "ILE RPG / RPGLE", "CL & DDS", "JCL", "DB2 & Db2 for i", "CICS", "VSAM", "PL/I", "Assembler (HLASM)", "IMS"],
    challenges: [
      {
        title: "Shrinking expertise",
        text: "The people who wrote the code are retiring. Knowledge sits in their heads, not in documentation, and every change feels risky.",
      },
      {
        title: "Locked-in data",
        text: "Valuable data sits in DB2, VSAM or physical files that web apps, BI tools and partners cannot easily reach.",
      },
      {
        title: "Green-screen only",
        text: "5250 and 3270 screens slow down training and make it hard to offer self-service portals or mobile access.",
      },
      {
        title: "Change backlog",
        text: "Regulatory, pricing and product changes queue up because each enhancement needs scarce mainframe skills.",
      },
    ],
    limitations: [
      "Tightly coupled batch and online programs with undocumented dependencies",
      "Hard-coded business rules spread across hundreds of programs",
      "Point-to-point file transfers instead of real-time integration",
      "Limited automated testing, so regression risk is high",
    ],
    opportunities: [
      {
        title: "Expose as APIs",
        text: "Wrap proven COBOL and RPG logic as REST services so new channels reuse it instead of duplicating it.",
      },
      {
        title: "Refactor in place",
        text: "Move fixed-format RPG to free-form RPGLE, modularize COBOL, and externalize rules — lowering the cost of every future change.",
      },
      {
        title: "Modernize the data layer",
        text: "Convert DDS files to SQL DDL, migrate VSAM to DB2, and add the indexes, views and stored procedures modern tools expect.",
      },
      {
        title: "Re-platform selectively",
        text: "Move specific workloads to Java or cloud services where it clearly pays off, while the core keeps running.",
      },
    ],
    approach: [
      { title: "Inventory", text: "Programs, files, jobs, screens and interfaces catalogued with cross-references." },
      { title: "Understand", text: "Business rules extracted and documented in plain language with your team." },
      { title: "Stabilize", text: "Fix the fragile areas first and add regression checks before changing anything big." },
      { title: "Integrate", text: "APIs, data feeds and message queues that let modern apps talk to the core." },
      { title: "Modernize", text: "Refactor, re-platform or replace — one domain at a time, with parallel runs." },
    ],
  },
  modern: {
    slug: "modern-technology-solutions",
    key: "modern",
    name: "Modern Technology Solutions",
    short: "Modern Technology",
    years: "6+ years",
    headline: "Websites, apps and software that solve a business problem — and keep solving it.",
    lead:
      "From corporate websites and e-commerce stores to mobile apps, CRMs, Java back ends and AI automation, we design and build modern software around how your business actually works.",
    metaDescription:
      "Website, mobile app, custom software, CRM, Java Spring Boot, e-commerce and AI automation development by NexaPro Technologies.",
    skills: ["React & Next.js", "Node.js", "PHP & Laravel", "WordPress & WooCommerce", "Shopify", "Flutter", "React Native", "Java & Spring Boot", "Python", "LLM integrations"],
    challenges: [
      { title: "Manual workflows", text: "Teams run the business on spreadsheets, WhatsApp groups and email threads that do not scale." },
      { title: "Weak online presence", text: "Outdated websites that load slowly, do not work on mobile and do not generate enquiries." },
      { title: "Disconnected tools", text: "Sales, operations and accounts each use separate tools with no single view of the customer." },
      { title: "Untapped AI", text: "Repetitive questions, documents and data entry that AI could handle, but no clear starting point." },
    ],
    limitations: [],
    opportunities: [],
    approach: [],
  },
};

export const services = [
  // ---------------------------------------------------------------- LEGACY
  {
    slug: "mainframe-development",
    division: "legacy",
    title: "Mainframe Development",
    icon: "server",
    short: "COBOL, JCL, DB2, CICS and VSAM development on IBM z/OS.",
    heroTitle: "Mainframe development for the workloads that cannot go down.",
    heroLead:
      "New programs, enhancements and production fixes on IBM z/OS — written by developers who understand batch windows, CICS regions and the cost of a failed job at 2 a.m.",
    overview: [
      "Mainframes still run core banking, insurance, logistics and government workloads because they are reliable at scale. What is scarce is the people who can change them safely.",
      "We provide hands-on COBOL, JCL, DB2, CICS, VSAM, PL/I and Assembler development — from small enhancements to new batch suites and online transactions — following your change-management and testing standards.",
    ],
    problems: [
      { title: "Enhancement backlog", text: "Business changes wait months because in-house mainframe capacity is fully used on keeping the lights on." },
      { title: "Fragile batch", text: "Long-running JCL streams with poor restart logic and abends that need manual intervention." },
      { title: "Performance cost", text: "Inefficient SQL and file access that consume MIPS and lengthen the batch window." },
      { title: "Missing documentation", text: "Programs nobody wants to touch because nobody fully knows what they do." },
    ],
    capabilities: [
      { title: "COBOL application development", text: "Batch and online COBOL programs, copybook design, and enhancements to existing suites." },
      { title: "JCL & batch engineering", text: "Job streams, PROCs, restart/recovery logic, scheduler dependencies and utilities (SORT, IDCAMS, IEBGENER)." },
      { title: "DB2 for z/OS", text: "Embedded SQL, cursor design, BIND/package management and query tuning." },
      { title: "CICS transactions", text: "BMS maps, pseudo-conversational programs, and CICS web services for API exposure." },
      { title: "VSAM & file handling", text: "KSDS/ESDS/RRDS design, file conversions and VSAM-to-DB2 migration." },
      { title: "PL/I and Assembler", text: "Maintenance and enhancement of PL/I and HLASM modules that sit in critical paths." },
    ],
    stack: [
      { group: "Languages", items: ["COBOL", "PL/I", "HLASM", "REXX", "JCL"] },
      { group: "Data", items: ["DB2 for z/OS", "VSAM", "IMS DB", "Sequential / GDG"] },
      { group: "Runtime", items: ["CICS", "IMS TM", "TSO/ISPF", "SDSF"] },
      { group: "Tooling", items: ["Endevor / Changeman", "File-AID", "Xpediter", "IBM Z Open Editor"] },
    ],
    useCases: [
      "Regulatory change enhancements across COBOL batch suites",
      "New CICS transactions for an existing online system",
      "Batch performance tuning to shorten the nightly window",
      "Abend analysis and permanent production fixes",
      "Exposing CICS programs as web services",
    ],
    faqs: [
      { q: "Can you work inside our existing change-management process?", a: "Yes. We follow your source control, promotion, approval and testing standards rather than introducing our own." },
      { q: "Do you need direct access to our mainframe?", a: "Typically yes, through your VPN and access controls. Where access is restricted, we can work through your team with clearly defined handoffs." },
      { q: "Do you take on small enhancements?", a: "Yes. Many engagements start with a single change or production issue before growing into ongoing support." },
    ],
    blueprintCategories: ["mainframe"],
    whatsappTopic: "mainframe development",
  },
  {
    slug: "as400-ibm-i-development",
    division: "legacy",
    title: "AS400 / IBM i Development",
    icon: "terminal",
    short: "RPGLE, COBOL/400, CL, DDS and Db2 for i development.",
    heroTitle: "AS400 / IBM i development that respects what already works.",
    heroLead:
      "IBM i remains one of the most dependable business platforms ever built. We develop, enhance and integrate IBM i applications so they keep serving the business for the next decade.",
    overview: [
      "Many distribution, manufacturing, finance and retail companies run their ERP or core operations on IBM i. The platform is stable — the challenge is finding developers who can move it forward.",
      "We work across ILE RPG, COBOL/400, CL, DDS and Db2 for i, plus the integration layer that connects IBM i to web portals, mobile apps and partners.",
    ],
    problems: [
      { title: "Skills shortage", text: "Your RPG developer is overloaded or has left, and new requirements are piling up." },
      { title: "5250-only access", text: "Staff and customers need browser or mobile access to IBM i data and functions." },
      { title: "Legacy file design", text: "DDS physical/logical files that are hard to query, report on or integrate." },
      { title: "Integration gaps", text: "Nightly FTP files where partners and apps now expect real-time APIs." },
    ],
    capabilities: [
      { title: "RPGLE & COBOL/400 development", text: "New programs, service programs and enhancements using ILE best practices." },
      { title: "CL & job management", text: "CL programs, job scheduling, subsystem and job queue handling." },
      { title: "DDS & display files", text: "Physical, logical, display and printer files — and conversion to SQL DDL where it helps." },
      { title: "Db2 for i & SQL", text: "Embedded SQL, views, indexes, stored procedures and query performance." },
      { title: "IBM i integration", text: "REST APIs via IWS or open-source stacks, data queues, IFS files and ODBC/JDBC access." },
      { title: "Tooling experience", text: "LANSA and Synon/2E (CA 2E) environments as well as native development." },
    ],
    stack: [
      { group: "Languages", items: ["ILE RPG / RPGLE", "COBOL/400 (ILE COBOL)", "CL", "SQL"] },
      { group: "Data", items: ["Db2 for i", "DDS PF/LF", "IFS", "Data queues"] },
      { group: "Tools", items: ["RDi", "VS Code + Code for IBM i", "LANSA", "Synon/2E"] },
      { group: "Integration", items: ["IWS REST", "ODBC/JDBC", "Node.js / Python on IBM i", "FTP/SFTP"] },
    ],
    useCases: [
      "Enhancing an ERP running on IBM i",
      "Converting DDS files to SQL tables without breaking programs",
      "Building REST APIs over RPG business logic",
      "Web dashboards and reports over Db2 for i data",
      "Ongoing L2/L3 production support",
    ],
    faqs: [
      { q: "Do you work on older OS versions?", a: "Yes. We work with what you have and can advise on upgrade paths when a newer release would unlock useful features." },
      { q: "Can you modernize RPG without a rewrite?", a: "Yes. Converting fixed-format to free-form, extracting service programs and adding SQL are low-risk ways to make RPG easier to maintain." },
      { q: "Do you support LANSA or Synon applications?", a: "Yes, our team has hands-on experience with both, alongside native RPG and COBOL development." },
    ],
    blueprintCategories: ["mainframe"],
    whatsappTopic: "AS400 / IBM i development",
  },
  {
    slug: "cobol-development",
    division: "legacy",
    title: "COBOL Development",
    icon: "code",
    short: "Enterprise COBOL and COBOL/400 — new code, fixes and refactoring.",
    heroTitle: "COBOL developers who can read your code — and improve it.",
    heroLead:
      "COBOL still processes a large share of the world's business transactions. We write, fix, document and refactor it on z/OS, IBM i and distributed COBOL platforms.",
    overview: [
      "COBOL programs are often decades old, heavily patched and business-critical. Changing them needs patience, testing discipline and a real understanding of the business rules buried inside.",
      "Our COBOL work covers new development, enhancements, defect fixes, code documentation, refactoring and preparing programs for API exposure or migration.",
    ],
    problems: [
      { title: "Unreadable code", text: "Deeply nested logic, GO TO chains and copybooks reused for unrelated purposes." },
      { title: "Undocumented rules", text: "Pricing, eligibility and calculation rules only exist in the code." },
      { title: "Risky changes", text: "Every modification risks breaking downstream jobs or reports." },
      { title: "Migration readiness", text: "You want to modernize, but first need to know what the code actually does." },
    ],
    capabilities: [
      { title: "New COBOL programs", text: "Batch and online programs written to your coding standards." },
      { title: "Enhancements & fixes", text: "Changes delivered with impact analysis and regression testing." },
      { title: "Code documentation", text: "Program flow, file usage and business rules documented in plain language." },
      { title: "Refactoring", text: "Structured, modular COBOL that is easier and cheaper to maintain." },
      { title: "COBOL-to-SQL logic", text: "Moving set-based processing into SQL and stored procedures where appropriate." },
      { title: "Distributed COBOL", text: "Rocket / Micro Focus and GnuCOBOL environments for re-hosted workloads." },
    ],
    stack: [
      { group: "Dialects", items: ["Enterprise COBOL", "ILE COBOL / COBOL/400", "Micro Focus / Rocket", "GnuCOBOL"] },
      { group: "Data", items: ["DB2", "VSAM", "Sequential", "Db2 for i"] },
      { group: "Testing", items: ["Unit test harnesses", "Parallel runs", "Data comparison"] },
    ],
    useCases: [
      "Business rule extraction before a modernization project",
      "Clean-up of a heavily patched calculation module",
      "Adding new products or rates to existing COBOL logic",
      "Supporting a COBOL application re-hosted on Linux",
    ],
    faqs: [
      { q: "Is COBOL still worth investing in?", a: "If it runs your core business reliably, yes. The goal is to make it cheaper and safer to change, and connect it to modern channels." },
      { q: "Can you document code before we decide on modernization?", a: "Yes — that is often the best first step. It reduces risk whichever route you choose." },
    ],
    blueprintCategories: ["mainframe"],
    whatsappTopic: "COBOL development",
  },
  {
    slug: "rpg-rpgle-development",
    division: "legacy",
    title: "RPG / RPGLE Development",
    icon: "code",
    short: "Fixed-format RPG to modern free-form RPGLE on IBM i.",
    heroTitle: "RPG and RPGLE development, from fixed-format to free-form.",
    heroLead:
      "Modern RPGLE is a capable, readable language. We maintain your existing RPG, write new free-form code and gradually move older programs to modern ILE structures.",
    overview: [
      "Many IBM i shops still run RPG III or fixed-format RPG IV that only a few people can comfortably change. Modern free-form RPGLE with service programs and embedded SQL is far easier to maintain.",
      "We support both: careful maintenance of what exists, and step-by-step modernization that lowers the cost of every future change.",
    ],
    problems: [
      { title: "Old RPG dialects", text: "RPG III and cycle-based programs that new developers find hard to read." },
      { title: "Monolithic programs", text: "Thousands of lines with duplicated logic and no reusable procedures." },
      { title: "Record-level access only", text: "No SQL, making reporting and integration difficult." },
    ],
    capabilities: [
      { title: "RPGLE development", text: "New free-form RPGLE programs and service programs with clean interfaces." },
      { title: "Fixed-to-free conversion", text: "Converting and restructuring legacy RPG while preserving behaviour." },
      { title: "Embedded SQL", text: "Replacing record-level access with SQL where it simplifies logic." },
      { title: "Service programs & binding", text: "Reusable procedures, binding directories and ILE activation group design." },
      { title: "Display & print files", text: "Maintaining 5250 interfaces and reports, or replacing them with web front ends." },
    ],
    stack: [
      { group: "Languages", items: ["RPG III", "RPG IV", "Free-form RPGLE", "CL", "SQL"] },
      { group: "Platform", items: ["IBM i", "Db2 for i", "ILE"] },
      { group: "Tools", items: ["RDi", "VS Code for IBM i", "Git on IBM i"] },
    ],
    useCases: [
      "Enhancing order, inventory or billing programs",
      "Converting RPG III to RPGLE before a staff transition",
      "Building service programs that web APIs can call",
    ],
    faqs: [
      { q: "Will converting to free-form change program behaviour?", a: "It should not. We convert with regression tests and side-by-side output comparison to confirm identical results." },
    ],
    blueprintCategories: ["mainframe"],
    whatsappTopic: "RPG / RPGLE development",
  },
  {
    slug: "mainframe-modernization",
    division: "legacy",
    title: "Mainframe Modernization",
    icon: "refresh",
    short: "APIs, refactoring, data migration and selective re-platforming.",
    heroTitle: "Modernize the mainframe without betting the business on it.",
    heroLead:
      "Modernization is not one big switch. We choose the right mix of API enablement, refactoring, data modernization and re-platforming for each part of your estate — and deliver it in safe, verifiable steps.",
    overview: [
      "Many modernization programmes fail because they try to replace everything at once. The business rules are complex, undocumented and still changing.",
      "We start by understanding what you have, then modernize incrementally: expose functions as APIs, move data where it adds value, refactor high-change areas and re-platform only the workloads where the case is clear.",
    ],
    problems: [
      { title: "High run cost", text: "MIPS and licensing costs rising while workloads grow." },
      { title: "Slow delivery", text: "New digital products wait on mainframe changes." },
      { title: "Risk of big-bang", text: "Full rewrites that overrun and still miss hidden business rules." },
      { title: "Data access", text: "Analytics and AI initiatives blocked by data trapped in legacy formats." },
    ],
    capabilities: [
      { title: "Assessment & roadmap", text: "Application inventory, dependency mapping and a phased modernization plan." },
      { title: "API enablement", text: "REST APIs over CICS, IMS and IBM i programs via z/OS Connect, IWS or custom gateways." },
      { title: "Code refactoring", text: "Modularizing COBOL and RPG and externalizing business rules." },
      { title: "Database migration", text: "VSAM to DB2, DDS to SQL, and legacy data to cloud or relational databases with reconciliation." },
      { title: "Re-platforming", text: "Moving selected workloads to Java/Spring Boot or re-hosted COBOL on Linux." },
      { title: "Parallel running", text: "Old and new systems run side by side with automated output comparison until sign-off." },
    ],
    stack: [
      { group: "Legacy", items: ["COBOL", "RPGLE", "CICS", "DB2", "VSAM", "JCL"] },
      { group: "Bridge", items: ["z/OS Connect", "IBM i IWS", "MQ", "Kafka", "REST"] },
      { group: "Target", items: ["Java / Spring Boot", "PostgreSQL / Oracle", "Docker", "Cloud (AWS/Azure)"] },
    ],
    useCases: [
      "Exposing policy or account lookups to a customer portal",
      "Migrating VSAM files to DB2 with data reconciliation",
      "Re-platforming a reporting batch suite to Java",
      "Building a modern UI over green-screen workflows",
    ],
    faqs: [
      { q: "Do we have to move off the mainframe to modernize?", a: "No. Many of the biggest gains come from APIs, refactoring and data access while the core stays on the platform." },
      { q: "How do you reduce migration risk?", a: "Small increments, automated comparison of old vs new outputs, parallel runs and a rollback plan for every cut-over." },
      { q: "How long does an assessment take?", a: "It depends on estate size. We agree the scope and timeline after an initial free consultation." },
    ],
    blueprintCategories: ["mainframe"],
    whatsappTopic: "mainframe modernization",
  },
  {
    slug: "legacy-application-maintenance",
    division: "legacy",
    title: "Legacy Application Maintenance",
    icon: "shield",
    short: "L2/L3 support, batch monitoring, fixes and small enhancements.",
    heroTitle: "Reliable support for the legacy applications you rely on every day.",
    heroLead:
      "Production support, batch monitoring, defect fixing and small enhancements for mainframe and IBM i applications — on a predictable monthly model.",
    overview: [
      "When the one person who knows the system is on leave, a failed job or a wrong report can become a business problem quickly.",
      "We provide structured maintenance for legacy applications: incident handling, root-cause fixes, routine enhancements, documentation and knowledge retention so the system no longer depends on a single person.",
    ],
    problems: [
      { title: "Key-person risk", text: "Support depends on one or two people." },
      { title: "Recurring incidents", text: "The same abends and data issues come back every month." },
      { title: "No runbooks", text: "Recovery steps are tribal knowledge." },
    ],
    capabilities: [
      { title: "L2/L3 production support", text: "Incident analysis, fixes and coordination with your operations team." },
      { title: "Batch monitoring", text: "Job failure handling, restarts and permanent fixes for recurring abends." },
      { title: "Small enhancements", text: "Routine business changes handled under the maintenance agreement." },
      { title: "Runbooks & documentation", text: "Operational procedures and program documentation built as we work." },
      { title: "Knowledge transfer", text: "Structured shadowing when you are transitioning support from a retiring expert." },
    ],
    stack: [
      { group: "Platforms", items: ["IBM z/OS", "IBM i (AS400)", "Re-hosted COBOL"] },
      { group: "Languages", items: ["COBOL", "RPGLE", "CL", "JCL", "PL/I"] },
    ],
    useCases: [
      "Taking over support from a retiring developer",
      "Monthly maintenance retainer for an IBM i ERP",
      "Reducing recurring batch failures",
    ],
    faqs: [
      { q: "What support hours do you offer?", a: "We agree support windows and response expectations in the maintenance contract based on your business needs." },
      { q: "Can you start with a support trial?", a: "Yes. Many clients start with a short, defined period before moving to an ongoing agreement." },
    ],
    blueprintCategories: ["mainframe"],
    whatsappTopic: "legacy application maintenance",
  },

  // ---------------------------------------------------------------- MODERN
  {
    slug: "website-development",
    division: "modern",
    title: "Website Development",
    icon: "globe",
    short: "Corporate sites, web apps, WordPress, React/Next.js and Laravel.",
    heroTitle: "Websites that load fast, rank well and turn visitors into enquiries.",
    heroLead:
      "Corporate websites, custom web applications and redesigns — built on WordPress, React/Next.js or Laravel depending on what your team needs to run it.",
    overview: [
      "Your website is often the first conversation a prospect has with your company. If it is slow, hard to use on mobile or vague about what you do, that conversation ends quickly.",
      "We design and build websites and web applications with clear messaging, fast performance, SEO foundations and an admin experience your team can actually use.",
    ],
    problems: [
      { title: "Few enquiries", text: "Traffic arrives but does not convert into calls or forms." },
      { title: "Slow & outdated", text: "Poor Core Web Vitals and a design that does not reflect the business today." },
      { title: "Hard to update", text: "Every text change needs a developer." },
      { title: "Not mobile-ready", text: "Layouts that break on phones, where most visitors are." },
    ],
    capabilities: [
      { title: "Corporate websites", text: "Multi-page company sites with clear service architecture and lead capture." },
      { title: "Custom web applications", text: "Portals, dashboards and internal tools with authentication and role-based access." },
      { title: "WordPress development", text: "Custom themes and plugins, not page-builder bloat." },
      { title: "React & Next.js", text: "Fast, SEO-friendly front ends and full-stack apps." },
      { title: "PHP & Laravel", text: "Robust back ends, admin panels and APIs." },
      { title: "Redesign & optimization", text: "Speed, accessibility and SEO improvements for existing sites." },
    ],
    stack: [
      { group: "Front end", items: ["React", "Next.js", "Tailwind CSS", "TypeScript"] },
      { group: "CMS", items: ["WordPress", "Headless CMS"] },
      { group: "Back end", items: ["Node.js", "PHP", "Laravel", "MySQL", "PostgreSQL"] },
      { group: "Delivery", items: ["Vercel", "AWS", "cPanel / VPS", "Cloudflare"] },
    ],
    useCases: [
      "Company website redesign with service-level pages",
      "Customer or dealer portal with login",
      "Booking, enquiry or quotation web app",
      "Landing pages for campaigns",
    ],
    faqs: [
      { q: "WordPress or a custom build?", a: "WordPress suits content-heavy sites your team edits often. Custom React/Next.js or Laravel suits applications with complex logic. We recommend based on your needs." },
      { q: "Will I be able to edit the content?", a: "Yes. We set up an admin or CMS appropriate to the site and show your team how to use it." },
      { q: "Do you handle hosting and domains?", a: "We can set up and manage hosting, SSL, backups and deployments, or work with your existing provider." },
    ],
    blueprintCategories: ["web", "ecommerce"],
    whatsappTopic: "website development",
  },
  {
    slug: "mobile-app-development",
    division: "modern",
    title: "Mobile App Development",
    icon: "mobile",
    short: "Android, iOS, Flutter and React Native apps with real back ends.",
    heroTitle: "Mobile apps your customers keep using after the first week.",
    heroLead:
      "Android and iOS apps built with Flutter, React Native or native tools — connected to your systems, published to the stores and maintained release after release.",
    overview: [
      "A mobile app is only valuable if it does something useful, works reliably and is kept up to date. We focus on the full lifecycle: product definition, UX, development, APIs, store release and ongoing maintenance.",
      "Cross-platform frameworks like Flutter and React Native let one codebase serve Android and iOS, reducing build and maintenance cost without compromising experience.",
    ],
    problems: [
      { title: "Field teams on paper", text: "Sales, service or delivery staff still capture data manually." },
      { title: "No customer app", text: "Customers expect to order, book or track from their phone." },
      { title: "Unstable existing app", text: "Crashes, poor reviews and an app nobody wants to maintain." },
    ],
    capabilities: [
      { title: "Android development", text: "Kotlin/Java native apps and Play Store publishing." },
      { title: "iOS development", text: "Swift apps and App Store publishing." },
      { title: "Flutter", text: "Single codebase for Android and iOS with native-quality UI." },
      { title: "React Native", text: "Cross-platform apps sharing logic with React web projects." },
      { title: "APIs & back ends", text: "Secure APIs, push notifications, payments and integrations with existing systems." },
      { title: "Maintenance & scaling", text: "OS updates, performance tuning, crash monitoring and new feature releases." },
    ],
    stack: [
      { group: "Cross-platform", items: ["Flutter", "Dart", "React Native"] },
      { group: "Native", items: ["Kotlin", "Swift"] },
      { group: "Back end", items: ["Node.js", "Firebase", "Laravel", "Spring Boot"] },
      { group: "Services", items: ["FCM push", "Payment gateways", "Maps", "Analytics"] },
    ],
    useCases: [
      "Field sales or service app with offline support",
      "Customer ordering and tracking app",
      "Employee self-service app connected to HR or ERP",
      "Mobile front end over legacy system APIs",
    ],
    faqs: [
      { q: "Flutter or native?", a: "For most business apps Flutter or React Native is faster and more cost-effective. Native is preferred when you need deep platform-specific features." },
      { q: "Do you publish to the app stores?", a: "Yes, we handle Play Store and App Store submission and review requirements." },
    ],
    blueprintCategories: ["mobile"],
    whatsappTopic: "mobile application development",
  },
  {
    slug: "custom-software-development",
    division: "modern",
    title: "Custom Software Development",
    icon: "layers",
    short: "Business management software, dashboards and workflow automation.",
    heroTitle: "Custom software shaped around how your business actually works.",
    heroLead:
      "When off-the-shelf tools force your team into workarounds, we build software that fits your process — from operations dashboards to full business management systems.",
    overview: [
      "Spreadsheets and generic tools work until they do not. Data gets duplicated, approvals get lost and nobody has an accurate view of the business.",
      "We design custom applications around your real workflows: role-based access, approvals, reporting, integrations with accounting or ERP, and dashboards that give management a live picture.",
    ],
    problems: [
      { title: "Spreadsheet sprawl", text: "Critical data spread across files with no single source of truth." },
      { title: "Manual approvals", text: "Requests and approvals chased over email and chat." },
      { title: "No visibility", text: "Management waits for weekly reports instead of seeing live numbers." },
    ],
    capabilities: [
      { title: "Business management software", text: "Inventory, billing, projects, HR or operations modules built for your process." },
      { title: "Workflow automation", text: "Approvals, notifications and task routing that remove manual follow-up." },
      { title: "Dashboards & reporting", text: "Live KPIs, exports and scheduled reports." },
      { title: "Enterprise applications", text: "Multi-user, multi-branch systems with audit trails and permissions." },
      { title: "Third-party integrations", text: "Accounting, payment, SMS, email, WhatsApp and ERP integrations." },
      { title: "Desktop utilities", text: "Lightweight desktop tools where a browser app is not the right fit." },
    ],
    stack: [
      { group: "Web", items: ["React", "Node.js", "Laravel", "Spring Boot"] },
      { group: "Data", items: ["PostgreSQL", "MySQL", "Oracle", "Redis"] },
      { group: "Reporting", items: ["Charts", "PDF/Excel export", "Scheduled reports"] },
    ],
    useCases: [
      "Billing and invoice generation system",
      "Multi-branch inventory and order management",
      "Approval workflow for purchase requests",
      "Management dashboard over existing databases",
    ],
    faqs: [
      { q: "Who owns the source code?", a: "Ownership terms are agreed in the contract. For custom development, clients typically own the code delivered for their project." },
      { q: "Can you build on top of our existing database?", a: "Yes. We often add new applications and dashboards over existing Oracle, DB2, MySQL or SQL Server data." },
    ],
    blueprintCategories: ["crm"],
    whatsappTopic: "custom software development",
  },
  {
    slug: "crm-development",
    division: "modern",
    title: "CRM Development",
    icon: "users",
    short: "Custom CRM for leads, sales pipeline, service and follow-ups.",
    heroTitle: "A CRM that matches your sales process — not the other way around.",
    heroLead:
      "Custom CRM systems for lead capture, pipeline management, follow-ups, customer service and reporting, integrated with your website, WhatsApp, email and accounting tools.",
    overview: [
      "Generic CRMs are powerful but often too complex, too expensive per user or missing the one workflow that matters most to your team.",
      "We build focused CRMs — or extend existing ones — so every enquiry is captured, assigned and followed up, and management can see the pipeline at a glance.",
    ],
    problems: [
      { title: "Lost leads", text: "Enquiries from the website, calls and WhatsApp are not tracked in one place." },
      { title: "Missed follow-ups", text: "No reminders, so warm prospects go cold." },
      { title: "No pipeline view", text: "Forecasting is guesswork." },
    ],
    capabilities: [
      { title: "Lead capture", text: "Website forms, landing pages, WhatsApp and email leads in one inbox." },
      { title: "Pipeline & deals", text: "Custom stages, assignment rules and activity tracking." },
      { title: "Follow-up automation", text: "Reminders, templated messages and escalation rules." },
      { title: "Service & tickets", text: "Customer issues tracked from request to resolution." },
      { title: "Reports", text: "Conversion, source and team performance reporting." },
      { title: "Integrations", text: "Accounting, telephony, email and messaging integrations." },
    ],
    stack: [
      { group: "Application", items: ["React", "Laravel", "Node.js", "Spring Boot"] },
      { group: "Integrations", items: ["WhatsApp Business API", "SMTP / Gmail", "Payment gateways", "Accounting APIs"] },
    ],
    useCases: [
      "Real-estate or education lead management",
      "B2B sales pipeline with quotations",
      "After-sales service ticketing",
    ],
    faqs: [
      { q: "Can you customize an existing CRM instead?", a: "Yes. If an existing CRM fits most of your needs, extending it is often the better investment." },
    ],
    blueprintCategories: ["crm"],
    whatsappTopic: "CRM development",
  },
  {
    slug: "ai-automation",
    division: "modern",
    title: "AI & Automation",
    icon: "spark",
    short: "Generative AI apps, chatbots, RAG, AI agents and process automation.",
    heroTitle: "Practical AI that removes real work from your team's day.",
    heroLead:
      "Generative AI applications, chatbots, retrieval-augmented generation (RAG) over your documents, AI agents and workflow automation — integrated with OpenAI, Claude and Gemini models and connected to your systems.",
    overview: [
      "The value of AI is not in a demo — it is in answering the 200 repetitive questions your team handles every week, extracting data from documents, or drafting the first version of routine work.",
      "We identify where AI can measurably help, build a focused solution with the right model and guardrails, and integrate it into the tools your team already uses.",
    ],
    problems: [
      { title: "Repetitive queries", text: "Support and sales teams answer the same questions again and again." },
      { title: "Document overload", text: "Information buried in PDFs, manuals and policies that nobody can search quickly." },
      { title: "Manual data entry", text: "Staff copy data from emails, invoices and forms into systems." },
      { title: "AI uncertainty", text: "Interest in AI, but no clear, safe place to start." },
    ],
    capabilities: [
      { title: "Generative AI applications", text: "Drafting, summarization and content tools built for a specific business task." },
      { title: "AI chatbots", text: "Website, WhatsApp or internal assistants grounded in your own content." },
      { title: "RAG", text: "Search and Q&A over your documents with source citations." },
      { title: "AI agents", text: "Multi-step agents that call your tools and APIs, with human approval where needed." },
      { title: "LangChain & LangGraph", text: "Orchestrated pipelines and stateful agent workflows." },
      { title: "Process automation", text: "Document extraction, classification and routing integrated with your systems." },
    ],
    stack: [
      { group: "Models", items: ["OpenAI", "Claude", "Gemini", "Open-source LLMs"] },
      { group: "Frameworks", items: ["LangChain", "LangGraph", "Python", "FastAPI"] },
      { group: "Retrieval", items: ["Vector databases", "Embeddings", "Hybrid search"] },
      { group: "Integration", items: ["REST APIs", "WhatsApp", "Email", "CRM / ERP"] },
    ],
    useCases: [
      "Customer support assistant trained on your FAQs and manuals",
      "Internal policy and SOP search with citations",
      "Invoice or form data extraction into your system",
      "AI assistance for understanding legacy COBOL code",
    ],
    faqs: [
      { q: "Is our data safe with AI models?", a: "We design for data protection: choosing appropriate model providers and settings, limiting what is sent, and keeping sensitive data in your environment where required." },
      { q: "How do you prevent wrong answers?", a: "Grounding answers in your documents (RAG), showing sources, setting confidence thresholds and routing uncertain cases to a person." },
      { q: "Which model should we use?", a: "It depends on the task, cost and data requirements. We often prototype with more than one and choose based on results." },
    ],
    blueprintCategories: ["ai"],
    whatsappTopic: "AI development and automation",
  },
  {
    slug: "java-enterprise-solutions",
    division: "modern",
    title: "Java & Enterprise Solutions",
    icon: "cube",
    short: "Java, Spring Boot, microservices, APIs and system integration.",
    heroTitle: "Java and Spring Boot back ends built for scale and integration.",
    heroLead:
      "Enterprise Java development — Spring Boot services, microservices, APIs and integrations — including the bridge between legacy platforms and modern applications.",
    overview: [
      "Java remains the backbone of enterprise back ends, and it is often the natural target when modernizing mainframe workloads.",
      "Our Java team builds scalable services and APIs, modernizes older Java applications, and integrates enterprise systems — with a particular strength in connecting to mainframe and IBM i.",
    ],
    problems: [
      { title: "Monolithic Java apps", text: "Old J2EE applications that are slow to change and hard to deploy." },
      { title: "Integration complexity", text: "Many systems that need to share data reliably." },
      { title: "Scaling limits", text: "Back ends that struggle under growing load." },
    ],
    capabilities: [
      { title: "Java development", text: "Clean, tested Java services and applications." },
      { title: "Spring Boot", text: "REST APIs, security, data access and batch with Spring." },
      { title: "Microservices", text: "Service decomposition, messaging and containerized deployment." },
      { title: "Enterprise modernization", text: "Upgrading legacy Java/J2EE apps and re-platforming mainframe logic to Java." },
      { title: "API development", text: "Documented, versioned APIs for web, mobile and partners." },
      { title: "System integration", text: "MQ, Kafka, REST and file-based integration with legacy systems." },
    ],
    stack: [
      { group: "Core", items: ["Java 17+", "Spring Boot", "Spring Security", "Spring Batch"] },
      { group: "Data & messaging", items: ["Oracle", "PostgreSQL", "DB2", "Kafka", "IBM MQ"] },
      { group: "Delivery", items: ["Docker", "Kubernetes", "AWS", "CI/CD"] },
    ],
    useCases: [
      "API layer between a mainframe and a mobile app",
      "Re-platforming COBOL batch logic to Spring Batch",
      "Splitting a monolith into services",
    ],
    faqs: [
      { q: "Can Java talk directly to our mainframe or IBM i?", a: "Yes — through JDBC to DB2, MQ, CICS/IWS web services or JTOpen for IBM i." },
    ],
    blueprintCategories: ["mainframe", "crm"],
    whatsappTopic: "Java and enterprise application development",
  },
  {
    slug: "ecommerce-development",
    division: "modern",
    title: "E-commerce Development",
    icon: "cart",
    short: "Shopify, WooCommerce and custom stores built to sell.",
    heroTitle: "Online stores your team can run — and customers enjoy buying from.",
    heroLead:
      "Shopify, WooCommerce and custom e-commerce builds with clean catalogues, smooth checkout, payment and shipping integrations, and the speed that keeps buyers on the page.",
    overview: [
      "A store is not just a theme. Product data, checkout, payments, shipping, inventory and marketing integrations all have to work together.",
      "We build stores on the platform that fits your business and make sure your team can manage products, orders and promotions without calling a developer.",
    ],
    problems: [
      { title: "Low conversion", text: "Visitors browse but abandon at checkout." },
      { title: "Manual order handling", text: "Orders re-typed into inventory or accounting tools." },
      { title: "Slow store", text: "Heavy themes and apps that slow the site down." },
    ],
    capabilities: [
      { title: "Shopify development", text: "Theme customization, custom sections and app integrations." },
      { title: "WooCommerce", text: "WordPress stores with custom functionality." },
      { title: "Custom e-commerce", text: "Bespoke storefronts and B2B ordering portals." },
      { title: "Payments & shipping", text: "Indian and international payment gateways and courier integrations." },
      { title: "Inventory & ERP sync", text: "Stock, orders and invoices synced with back-office systems." },
      { title: "Performance & SEO", text: "Fast pages, structured data and clean URLs." },
    ],
    stack: [
      { group: "Platforms", items: ["Shopify", "WooCommerce", "Custom (React / Laravel)"] },
      { group: "Payments", items: ["Razorpay", "Stripe", "PayPal", "UPI"] },
      { group: "Ops", items: ["Shiprocket / couriers", "Inventory sync", "Analytics"] },
    ],
    useCases: [
      "D2C brand store on Shopify",
      "WooCommerce store with custom pricing rules",
      "B2B ordering portal for dealers",
    ],
    faqs: [
      { q: "Shopify or WooCommerce?", a: "Shopify is simpler to operate and host; WooCommerce gives more control and no platform fees. We help you choose." },
    ],
    blueprintCategories: ["ecommerce", "web"],
    whatsappTopic: "e-commerce development",
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
export const servicesByDivision = (key) => services.filter((s) => s.division === key);
