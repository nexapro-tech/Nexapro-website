import {
  FiServer, FiTerminal, FiCode, FiRefreshCw, FiShield, FiGlobe, FiSmartphone, FiLayers, FiUsers,
  FiCpu, FiBox, FiShoppingCart, FiArrowRight, FiArrowUpRight, FiCheck, FiPlus, FiMail, FiPhone,
  FiMapPin, FiLinkedin, FiGithub, FiMenu, FiX, FiChevronDown, FiSearch, FiDatabase, FiZap, FiClock,
} from "react-icons/fi";

const map = {
  server: FiServer, terminal: FiTerminal, code: FiCode, refresh: FiRefreshCw, shield: FiShield,
  globe: FiGlobe, mobile: FiSmartphone, layers: FiLayers, users: FiUsers, spark: FiCpu, cube: FiBox,
  cart: FiShoppingCart, arrow: FiArrowRight, arrowUp: FiArrowUpRight, check: FiCheck, plus: FiPlus,
  mail: FiMail, phone: FiPhone, pin: FiMapPin, linkedin: FiLinkedin, github: FiGithub, menu: FiMenu,
  close: FiX, down: FiChevronDown, search: FiSearch, database: FiDatabase, zap: FiZap, clock: FiClock,
};

export default function Icon({ name, className = "", ...rest }) {
  const C = map[name] || FiCode;
  return <C className={className} aria-hidden="true" {...rest} />;
}
