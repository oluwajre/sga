import CTASection from "@/components/common/CTASection";
import FAQHero from "@/components/faq/FAQHero";
import FAQSection from "@/components/home/FAQSection";

export default function FAQPage() {
  return (
    <main>
      <FAQHero />
      <FAQSection />
      <CTASection
        className="bg-white py-20 md:py-24"
        eyebrow="Still Have Questions?"
        title="Ready to Take the Next Step?"
        description="Explore the SGA programmes or submit your application and begin your journey toward building practical expertise in education."
        primaryText="Explore Programmes"
        primaryHref="/programmes"
        secondaryText="Apply Now"
        secondaryHref="/apply"
        />
    </main>
  );
}