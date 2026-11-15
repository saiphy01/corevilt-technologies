import { HeroSection } from "@/components/hero";
import { BentoGrid } from "@/components/bento-grid";
import { MethodologyPipeline } from "@/components/methodology-pipeline";
import { QAEngineSection } from "@/components/qa-engine";
import { FeaturedProjectsSection } from "@/components/featured-projects";
import { RfpSection } from "@/components/rfp-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BentoGrid />
      <MethodologyPipeline />
      <QAEngineSection />
      <FeaturedProjectsSection />
      <RfpSection />
    </>
  );
}
