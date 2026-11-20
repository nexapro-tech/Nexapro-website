import Hero from "../components/Hero/Hero";
import TechStack from "../components/TechStack/TechStack";
import About from "../components/About/About";
import Divisions from "../components/Divisions/Divisions";
import Services from "../components/Services/Services";
import ProblemSolution from "../components/ProblemSolution/ProblemSolution";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import FeaturedCases from "../components/CaseStudies/FeaturedCases";
import Process from "../components/Process/Process";
import IndustriesStrip from "../components/Industries/IndustriesStrip";
import Engagement from "../components/Engagement/Engagement";
import CTABand from "../components/Sections/CTABand";
import { useSeo } from "../lib/seo";

export default function Home() {
  useSeo({
    title: "",
    description:
      "NexaPro Technologies develops and modernizes mainframe, AS400 (IBM i), COBOL and RPG systems, and builds websites, mobile apps, CRMs, Java back ends and AI automation. Free initial consultation.",
    path: "/",
  });
  return (
    <>
      <Hero />
      <TechStack />
      <ProblemSolution />
      <About />
      <Divisions />
      <Services />
      <WhyChooseUs />
      <FeaturedCases />
      <Process />
      <IndustriesStrip />
      <Engagement />
      <CTABand />
    </>
  );
}
