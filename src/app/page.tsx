import { HeroSection } from "@/components/hero";
import { InfrastructureTopology } from "@/components/infrastructure-topology";
import { BentoGrid } from "@/components/bento-grid";
import { MethodologyPipeline } from "@/components/methodology-pipeline";
import { QAEngineSection } from "@/components/qa-engine";
import { FeaturedProjectsSection } from "@/components/featured-projects";
import { SolarRoiCalculator } from "@/components/solar-roi-calculator";
import { RfpSection } from "@/components/rfp-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <InfrastructureTopology />
      <BentoGrid />
      <MethodologyPipeline />
      <QAEngineSection />
      <FeaturedProjectsSection />
      <SolarRoiCalculator />
      <RfpSection />
    </>
  );
}
