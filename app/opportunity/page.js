import CTASection from "@/components/common/CTASection";
import LeadMagnetSection from "@/components/home/LeadMagnetSection";
import ConsultingOpportunitySection from "@/components/opportunity/ConsultingOpportunitySection";
import EducationMarketSection from "@/components/opportunity/EducationMarketSection";
import MentorRoleSection from "@/components/opportunity/MentorRoleSection";
import OpportunityAudienceSection from "@/components/opportunity/OpportunityAudienceSection";
import OpportunityHero from "@/components/opportunity/OpportunityHero";
import OpportunityPathwaySection from "@/components/opportunity/OpportunityPathwaySection";
import SchoolGrowthGapSection from "@/components/opportunity/SchoolGrowthGapSection";

export default function OpportunityPage() {
  return (
    <main>
      <OpportunityHero />
      <EducationMarketSection />
      <SchoolGrowthGapSection />
      <ConsultingOpportunitySection />
      <MentorRoleSection />
      <OpportunityPathwaySection />
      <OpportunityAudienceSection />
      <LeadMagnetSection />
      <CTASection
        eyebrow="Build Your Opportunity"
        title="Ready to Build a Practice in School Growth?"
        description="Explore the SGA programmes and develop the frameworks, tools, and practical capabilities needed to create value for private schools."
        primaryText="Explore Programmes"
        primaryHref="/programmes"
        secondaryText="Apply Now"
        secondaryHref="/apply"
      />
    </main>
  );
}