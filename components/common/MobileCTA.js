import Link from "next/link";

export default function MobileCTA() {
  return (
    <Link
      href="/apply"
      aria-label="Apply for the next SGA cohort"
      title="Apply for the next SGA cohort"
      className="fixed bottom-24 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-sga-amber text-xl font-bold text-sga-navy shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-sga-amber-dark hover:text-white focus:outline-none focus:ring-2 focus:ring-sga-amber focus:ring-offset-2 md:hidden"
    >
      <span aria-hidden="true">→</span>
    </Link>
  );
}