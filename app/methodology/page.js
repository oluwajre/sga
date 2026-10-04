import CTASection from "@/components/common/CTASection";
import FrameworkApplication from "@/components/methodology/FrameworkApplication";
import FrameworkOverview from "@/components/methodology/FrameworkOverview";
import MethodologyHero from "@/components/methodology/MethodologyHero";
import MethodologyPrinciples from "@/components/methodology/MethodologyPrinciples";

export default function MethodologyPage() {
  return (
    <main>
      <MethodologyHero />
      <FrameworkOverview />
      <FrameworkApplication />
      <MethodologyPrinciples />

      <CTASection
        eyebrow="Put the Framework Into Practice"
        title="Ready to Build Your School Growth Expertise?"
        description="Learn how to apply structured thinking, practical frameworks, and technology to help schools solve challenges and create sustainable growth."
        primaryText="Explore Programmes"
        primaryHref="/programmes"
        secondaryText="Apply Now"
        secondaryHref="/apply"
      />
    </main>
  );
}