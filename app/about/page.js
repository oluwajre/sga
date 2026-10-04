import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import ApproachSection from "@/components/about/ApproachSection";
import BeliefsSection from "@/components/about/BeliefsSection";
import ExperienceSection from "@/components/about/ExperienceSection";
import MissionVision from "@/components/about/MissionVission";
import CTASection from "@/components/common/CTASection";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <MissionVision />
      <BeliefsSection />
      <ExperienceSection />
      <ApproachSection />
      <CTASection
        className="bg-white py-20 md:py-24"
        eyebrow="Start Your Journey"
        title="Ready to Build Your Expertise in School Growth?"
        description="Explore the School Growth Academy programmes and discover the pathway that fits your professional goals."
        primaryText="Explore Programmes"
        primaryHref="/programmes"
        secondaryText="Apply Now"
        secondaryHref="/apply"
        />
    </main>
  );
}