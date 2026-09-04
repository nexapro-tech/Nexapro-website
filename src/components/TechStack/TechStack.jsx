import {
  SiReact,
  SiFlutter,
  SiNodedotjs,
  SiWordpress,
  SiShopify,
  SiWoocommerce,
  SiPython,
  SiIbm,
  SiAndroid,
  SiApple,
  SiJavascript,
  SiTensorflow,
  SiPhp,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { FaServer, FaDatabase, FaJava, FaCode } from "react-icons/fa";
import { techStack } from "../../data/content";

const brandIcons = {
  react: SiReact,
  reactweb: SiReact,
  flutter: SiFlutter,
  node: SiNodedotjs,
  wordpress: SiWordpress,
  shopify: SiShopify,
  woo: SiWoocommerce,
  python: SiPython,
  ibm: SiIbm,
  java: FaJava,
  ios: SiApple,
  android: SiAndroid,
  javascript: SiJavascript,
  tensorflow: SiTensorflow,
  php: SiPhp,
  html: SiHtml5,
  css: SiCss3,
  as400: FaDatabase,
  cobol: FaServer,
  rpg: FaCode,
  mainframe: FaServer,
  jcl: FaCode,
  db2: FaDatabase,
  cics: FaServer,
  api: FaCode,
};

const TechBadge = ({ item }) => {
  const Icon = brandIcons[item.brand];
  return (
    <div className="tech-chip shrink-0 min-w-[200px] md:min-w-[220px] rounded-3xl border border-white/10 bg-surface/80 px-6 py-5 flex items-center gap-4 shadow-card">
      {Icon ? <Icon className="text-3xl md:text-4xl text-primary shrink-0" /> : null}
      <span className="text-base md:text-lg font-medium text-white tracking-wide whitespace-nowrap">
        {item.name}
      </span>
    </div>
  );
};

const TechStack = () => {
  const loop = [...techStack, ...techStack];

  return (
    <section id="technology" className="section-padding overflow-hidden">
      <div className="container-custom">
        <div className="section-header">
          <p className="section-subtitle">Technology we work with</p>
          <h2 className="section-title">The stacks behind client delivery</h2>
          <p className="text-slate-300 leading-relaxed">
            One continuous line of the platforms we ship on — React, Node.js, WordPress,
            Shopify, WooCommerce, React Native, Flutter, Python, mainframe, AS/400, COBOL,
            and the rest of the stack behind our services.
          </p>
        </div>
      </div>

      <div className="tech-ticker relative mt-2" aria-label="Technologies we work with">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-28 bg-gradient-to-r from-ink to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-28 bg-gradient-to-l from-ink to-transparent z-10" />
        <div className="tech-track">
          {loop.map((item, index) => (
            <TechBadge key={`${item.name}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
