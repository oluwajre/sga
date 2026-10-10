import ApplicationForm from "@/components/forms/ApplicationForm";
import ApplyHero from "@/components/apply/ApplyHero";
import { Suspense } from "react";

export default function ApplyPage() {
  return (
    <main>
      <ApplyHero />
      <Suspense fallback={null}>
        <ApplicationForm />
      </Suspense>
    </main>
  );
}