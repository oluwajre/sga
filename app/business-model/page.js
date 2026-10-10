import BusinessDevelopmentPathway from "@/components/business-model/BusinessDevelopmentPathway";
import BusinessModelHero from "@/components/business-model/BusinessModelHero";
import ConsultingModelSection from "@/components/business-model/ConsultingModelSection";
import PracticeGrowthSection from "@/components/business-model/PracticeGrowthSection";
import ServiceOffersSection from "@/components/business-model/ServiceOffersSection";
import CTASection from "@/components/common/CTASection";

export default function BusinessModelPage() {
  return (
    <main>
      <BusinessModelHero />
      <ConsultingModelSection />
      <ServiceOffersSection />
      <PracticeGrowthSection />
      <BusinessDevelopmentPathway />
      <CTASection
        eyebrow="Build Your Practice"
        title="Ready to Turn Your Expertise Into Opportunity?"
        description="Explore the SGA programmes and develop the practical knowledge and consulting capability needed to create meaningful value for schools."
        primaryText="Explore Programmes"
        primaryHref="/programmes"
        secondaryText="Apply Now"
        secondaryHref="/apply"
      />
    </main>
  );
}