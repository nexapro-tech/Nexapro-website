import Hero from "../components/Hero/Hero";
import TechStack from "../components/TechStack/TechStack";
import Divisions from "../components/Divisions/Divisions";
import ProblemSolution from "../components/ProblemSolution/ProblemSolution";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Process from "../components/Process/Process";
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
      <Divisions />
      <WhyChooseUs />
      <Process />
      <Engagement />
      <CTABand />
    </>
  );
}
