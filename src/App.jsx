import { Suspense, lazy, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import WhatsAppButton from "./components/WhatsApp/WhatsAppButton";
import Home from "./pages/Home";
const About = lazy(() => import("./pages/About"));
const ServicesIndex = lazy(() => import("./pages/ServicesIndex"));
const ServiceRouter = lazy(() => import("./pages/ServiceRouter"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));
const Industries = lazy(() => import("./pages/Industries"));
const Careers = lazy(() => import("./pages/Careers"));
const Contact = lazy(() => import("./pages/Contact"));
const Quote = lazy(() => import("./pages/Quote"));
const Legal = lazy(() => import("./pages/Legal"));
const Sitemap = lazy(() => import("./pages/Sitemap"));
const NotFound = lazy(() => import("./pages/NotFound"));

function ScrollManager() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const legacyAnchors = { "#contact": "/contact", "#services": "/services", "#about": "/about" };
    if (pathname === "/" && legacyAnchors[hash]) {
      navigate(legacyAnchors[hash], { replace: true });
      return;
    }
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ block: "start" }));
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash, navigate]);
  return null;
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink">
      <Intro />
      <ScrollManager />
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none">
        <Suspense fallback={<div className="min-h-screen" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesIndex />} />
          <Route path="/services/:slug" element={<ServiceRouter />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-a-quote" element={<Quote />} />
          <Route path="/privacy-policy" element={<Legal kind="privacy" />} />
          <Route path="/terms" element={<Legal kind="terms" />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
