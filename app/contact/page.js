import ContactHero from "@/components/contact/ContactHero";
import ContactOptions from "@/components/contact/ContactOptions";
import ContactForm from "@/components/forms/ContactForm";
import { Suspense } from "react";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactOptions />
      <Suspense fallback={null}>
        <ContactForm />
      </Suspense>
    </main>
  );
}