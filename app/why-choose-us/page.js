import ExperienceSection from "@/components/about/ExperienceSection";
import CTASection from "@/components/common/CTASection";
import MeasurableValueSection from "@/components/why-choose-us/MeasurableValueSection";
import PracticalLearningSection from "@/components/why-choose-us/PracticalLearningSection";
import StructuredProgressionSection from "@/components/why-choose-us/StructuredProgressionSection";
import TechnologyEnablerSection from "@/components/why-choose-us/TechnologyEnablerSection";
import WhyChooseUsHero from "@/components/why-choose-us/WhyChooseUsHero";

export default function WhyChooseUsPage() {
  return (
    <main>
      <WhyChooseUsHero />
      <PracticalLearningSection />
      <ExperienceSection />
      <TechnologyEnablerSection />
      <StructuredProgressionSection />
      <MeasurableValueSection />
      <CTASection
        eyebrow="Your Next Step"
        title="Ready to Build Your Education Expertise?"
        description="Explore the SGA programmes and discover a practical pathway to developing the knowledge, skills, and perspective needed to create meaningful value in education."
        primaryText="Explore Programmes"
        primaryHref="/programmes"
        secondaryText="Apply Now"
        secondaryHref="/apply"
        />
    </main>
  );
}