import Hero from "@/components/home/Hero";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionSection from "@/components/home/SolutionSection";
import FrameworkSection from "@/components/home/FrameworkSection";
import TechnologySection from "@/components/home/TechnologySection";
import LeadMagnetSection from "@/components/home/LeadMagnetSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import WhoShouldJoinSection from "@/components/home/WhoShouldJoinSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import SuccessStoriesSection from "@/components/home/SuccessStoriesSection";
import FAQSection from "@/components/home/FAQSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <FrameworkSection />
      <TechnologySection />
      <HowItWorksSection />
      <WhoShouldJoinSection />
      <WhyChooseSection />
      <SuccessStoriesSection />
      <FAQSection />
      <LeadMagnetSection />
    </main>
  );
}