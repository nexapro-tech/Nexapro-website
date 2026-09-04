export default function LogoOrbit({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <span className="logo-ring logo-ring--outer" aria-hidden="true" />
      <span className="logo-ring logo-ring--mid" aria-hidden="true" />
      <span className="logo-ring logo-ring--inner" aria-hidden="true" />

      <span className="absolute inset-[-20%] animate-spin-slow" aria-hidden="true">
        <span className="absolute left-1/2 top-0 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-gradient-to-b from-accent to-primary-deep shadow-glow" />
      </span>
      <span className="absolute inset-[-20%] animate-spin-reverse" aria-hidden="true">
        <span className="absolute bottom-[18%] left-[8%] h-2.5 w-2.5 rounded-full bg-gradient-to-b from-accent to-primary-deep shadow-glow" />
      </span>
      <span className="absolute inset-[-14%] animate-spin-slow" style={{ animationDuration: "22s" }} aria-hidden="true">
        <span className="absolute bottom-2 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-gradient-to-b from-accent to-primary-deep shadow-glow" />
      </span>

      <img
        src="/logo-circle.png"
        alt="Nexapro Technologies"
        className="logo-circle relative z-10 h-full w-full shadow-glow animate-float"
      />
      <span className="logo-swoosh" aria-hidden="true" />
    </div>
  );
}
