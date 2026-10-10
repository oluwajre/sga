import Image from "next/image";

export default function WhyChooseUsHero() {
  const strengths = [
    "Practical Frameworks",
    "Field-Tested Thinking",
    "Technology",
    "Professional Development",
  ];

  return (
    <section className="relative overflow-hidden bg-sga-navy py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="relative z-10 max-w-2xl">
            <p className="font-sga-body text-sm font-bold uppercase tracking-[0.2em] text-sga-emerald">
              Why Choose SGA
            </p>

            <h1 className="mt-5 font-sga-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
              More Than Training. A Practical Path to Education Expertise.
            </h1>

            <p className="mt-6 max-w-xl font-sga-body text-lg leading-relaxed text-slate-300 md:text-xl">
              School Growth Academy combines practical frameworks, field-tested
              thinking, technology, and professional development to help you
              create meaningful value in the education sector.
            </p>

            {/* SGA strengths */}
            <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
              {strengths.map((strength, index) => (
                <div
                  key={strength}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-sga-emerald/40 font-sga-body text-xs font-bold text-sga-emerald">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="font-sga-body text-sm font-medium text-slate-300">
                    {strength}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="relative">
            <div className="relative aspect-4/3 overflow-hidden rounded-sga">
              <Image
                src="/images/why-choose/why-choose-hero.jpg"
                alt="Education and business professionals collaborating on practical school growth strategy"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-tr from-sga-navy/40 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-3 -left-3 h-16 w-16 rounded-sga border border-sga-emerald/30 bg-sga-emerald/10" />
          </div>
        </div>
      </div>
    </section>
  );
}