import Hero from "../component/Hero";
import AISolutions from "../component/AISolutions";
import ImpactSection from "../component/ImpactSection";
import StatsSection from "../component/StatsSection";
import FinalCTA from "../component/FinalCTA";
import IndustriesSection from "@/component/IndustriesSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <IndustriesSection />
      <ImpactSection />
      <AISolutions />
      
      <FinalCTA />
    </>
  );
}
