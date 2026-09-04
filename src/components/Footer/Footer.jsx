import { companyInfo, navLinks } from "../../data/content";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-slate-300 border-t border-white/10">
      <div className="container-custom py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo-circle.png" alt="Nexapro Technologies" className="logo-circle h-14 w-14" />
              <div>
                <p className="text-white font-semibold">Nexapro</p>
                <p className="text-primary text-[10px] uppercase tracking-[0.28em]">technologies</p>
              </div>
            </div>
            <p className="text-slate-400 mb-2">{companyInfo.tagline}</p>
            <p className="text-slate-500 text-sm leading-relaxed">{companyInfo.subtitle}</p>
            <p className="text-primary/80 text-xs tracking-wide mt-3">
              Secure, reliable infrastructure is our quality standard on every engagement.
            </p>
          </div>

          <div>
            <h4 className="text-white text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>AI / ML &amp; mobile (6+ years)</li>
              <li>Mainframe, AS/400 &amp; COBOL (10+ years)</li>
              <li>Legacy maintenance &amp; integration</li>
              <li>React, Node.js &amp; custom websites</li>
              <li>WordPress &amp; Shopify ecommerce</li>
              <li>Custom business websites</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg mb-4">Navigate</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-accent transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg mb-4">Contact</h4>
            <div className="space-y-2 text-slate-400">
              <p>
                <a href={`mailto:${companyInfo.email}`} className="hover:text-accent transition-colors duration-300">
                  {companyInfo.email}
                </a>
              </p>
              <p>{companyInfo.phone}</p>
              <p>{companyInfo.location}</p>
            </div>
            <div className="flex gap-4 mt-6">
              <a
                href={companyInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href={companyInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={22} />
              </a>
              <a href={`mailto:${companyInfo.email}`} className="hover:text-accent" aria-label="Email">
                <FaEnvelope size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-slate-500 text-sm">
          <p>
            &copy; {currentYear} {companyInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
