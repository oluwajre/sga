import Image from "next/image";

export default function OpportunityHero() {
  return (
    <section className="relative overflow-hidden bg-sga-navy py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Text */}
          <div className="relative z-10 max-w-2xl">
            <p className="font-sga-body text-sm font-bold uppercase tracking-[0.2em] text-sga-emerald">
              The Opportunity
            </p>

            <h1 className="mt-5 font-sga-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
              Africa&apos;s Private School Sector Needs Growth Professionals.
            </h1>

            <p className="mt-6 max-w-xl font-sga-body text-lg leading-relaxed text-slate-300 md:text-xl">
              With more than 80,000 private schools operating in Nigeria alone,
              there is a significant need for professionals who can help schools
              improve enrolment, recover revenue, strengthen operations, and adopt
              practical technology for sustainable growth.
            </p>
          </div>

          {/* Illustration */}
          <div className="relative min-h-80 w-full lg:min-h-107">
            <Image
              src="/images/opportunity/opportunity-hero.jpg"
              alt=""
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-contain object-center"
            />
          </div>

        </div>
      </div>
    </section>
  );
}