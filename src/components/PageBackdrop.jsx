export default function PageBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 grid-glow opacity-[0.22]" />
      <div className="absolute -top-32 right-[-6%] h-[520px] w-[520px] rounded-full bg-primary/15 blur-[140px] animate-glow-shift" />
      <div className="absolute bottom-[-10%] left-[-8%] h-[420px] w-[420px] rounded-full bg-accent/10 blur-[120px] animate-glow-shift" />
      <span className="bg-dot" style={{ top: "18%", left: "12%" }} />
      <span className="bg-dot bg-dot--sm" style={{ top: "42%", left: "78%", animationDelay: "-2s" }} />
      <span className="bg-dot bg-dot--md" style={{ top: "68%", left: "22%", animationDelay: "-4s" }} />
      <span className="bg-dot" style={{ top: "28%", left: "88%", animationDelay: "-1.5s" }} />
    </div>
  );
}
