import ContactHero from "@/components/contact/ContactHero";
import ContactOptions from "@/components/contact/ContactOptions";
import ContactForm from "@/components/forms/ContactForm";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactOptions />
      <ContactForm />
    </main>
  );
}