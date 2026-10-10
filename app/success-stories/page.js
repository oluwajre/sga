import CTASection from "@/components/common/CTASection";
import SuccessStoriesSection from "@/components/home/SuccessStoriesSection";
import RealWorldApplicationSection from "@/components/success-stories/RealWorldApplicationSection";
import SuccessJourneySection from "@/components/success-stories/SuccessJourneySection";
import SuccessPathSection from "@/components/success-stories/SuccessPathSection";
import SuccessStoriesHero from "@/components/success-stories/SuccessStoriesHero";

export default function SuccessStoriesPage() {
  return (
    <main>
      <SuccessStoriesHero />
      <SuccessJourneySection />
      <SuccessStoriesSection />
      <RealWorldApplicationSection />
      <SuccessPathSection />
      <CTASection
        eyebrow="Your Next Step"
        title="Ready to Start Your Own Growth Journey?"
        description="Explore the SGA programmes and discover a practical pathway to developing the knowledge, skills, and perspective needed to create meaningful value in education."
        primaryText="Explore Programmes"
        primaryHref="/programmes"
        secondaryText="Apply Now"
        secondaryHref="/apply"
        />
    </main>
  );
}