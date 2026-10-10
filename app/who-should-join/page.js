import CTASection from "@/components/common/CTASection";
import AudienceSection from "@/components/who-should-join/AudienceSection";
import OutcomesSection from "@/components/who-should-join/OutcomesSection";
import ProgrammeFitSection from "@/components/who-should-join/ProgrammeFitSection";
import WhoShouldJoinHero from "@/components/who-should-join/WhoShouldJoinHero";

export default function WhoShouldJoinPage() {
  return (
    <main>
      <WhoShouldJoinHero />
      <AudienceSection />
      <OutcomesSection />
      <ProgrammeFitSection />
      <CTASection
        eyebrow="Your Next Step"
        title="Ready to Find Your Place in the School Growth Movement?"
        description="Whether you are an educator, consultant, business professional, or aspiring education entrepreneur, SGA can help you develop the practical expertise to create meaningful value in education."
        primaryText="Explore Programmes"
        primaryHref="/programmes"
        secondaryText="Apply Now"
        secondaryHref="/apply"
      />
    </main>
  );
}