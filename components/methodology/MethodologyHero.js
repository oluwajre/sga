import Image from "next/image";

export default function MethodologyHero() {
  const stages = [
    "Diagnose",
    "Evaluate",
    "Strategize",
    "Implement",
    "Govern",
    "Navigate",
  ];

  return (
    <section className="relative overflow-hidden bg-sga-navy py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          
          {/* Content */}
          <div className="relative z-10 max-w-2xl">
            <p className="font-sga-body text-sm font-bold uppercase tracking-[0.2em] text-sga-emerald">
              SGA Methodology
            </p>

            <h1 className="mt-5 font-sga-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
              A Practical Framework for Turning School Challenges Into
              Sustainable Growth.
            </h1>

            <p className="mt-6 max-w-xl font-sga-body text-lg leading-relaxed text-slate-300 md:text-xl">
              The SGA 6-Stage Growth Framework™ provides a structured approach
              to diagnosing school challenges, evaluating performance,
              developing strategies, implementing solutions, establishing
              accountability, and navigating long-term growth.
            </p>
          </div>

          {/* Methodology visual */}
          <div className="relative">
            <div className="relative aspect-4/3 overflow-hidden rounded-sga">
              <Image
                src="/images/methodology/methodology-hero.jpg"
                alt="Strategic illustration representing the six-stage SGA growth methodology"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-tr from-sga-navy/30 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-3 -left-3 h-16 w-16 rounded-sga border border-sga-emerald/30 bg-sga-emerald/10" />
          </div>
        </div>
      </div>
    </section>
  );
}