import CTASection from "@/components/common/CTASection";
import ConsultantProductivitySection from "@/components/technology/ConsultantProductivitySection";
import EdMetricsSection from "@/components/technology/EdmetricsSection";
import GrowthTechnologyFramework from "@/components/technology/GrowthTechnologyFramework";
import LearnNovaSection from "@/components/technology/LearnNovaSection";
import TechnologyHero from "@/components/technology/TechnologyHero";
import TechnologyPrinciples from "@/components/technology/TechnologyPrinciples";
import TechnologyStackSection from "@/components/technology/TechnologyStackSection";

export default function TechnologyPage() {
  return (
    <main>
      <TechnologyHero />
      <EdMetricsSection />
      <LearnNovaSection />
      <ConsultantProductivitySection />
      <TechnologyStackSection />
      <GrowthTechnologyFramework />
      <TechnologyPrinciples />
      <CTASection
        eyebrow="The Next Step"
        title="Build Your School Growth Expertise With the Right Tools."
        description="Explore the SGA programmes and discover how practical frameworks, learning, and technology can help you create meaningful growth in education."
        primaryText="Explore Programmes"
        primaryHref="/programmes"
        secondaryText="Apply Now"
        secondaryHref="/apply"
        />
    </main>
  );
}