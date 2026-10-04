import Image from "next/image";

export default function ApplyHero() {
  const steps = ["Your Details", "Your Goals", "Submit"];

  return (
    <section className="relative overflow-hidden bg-sga-navy py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="relative z-10 max-w-2xl">
            <p className="font-sga-body text-sm font-bold uppercase tracking-[0.2em] text-sga-emerald">
              Apply to SGA
            </p>

            <h1 className="mt-5 font-sga-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
              Take the Next Step in Your Education Growth Journey.
            </h1>

            <p className="mt-6 max-w-xl font-sga-body text-lg leading-relaxed text-slate-300 md:text-xl">
              Tell us about yourself, your professional background, and what
              you hope to achieve through School Growth Academy.
            </p>

            {/* Application pathway */}
            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-3">
              {steps.map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full font-sga-body text-xs font-bold ${
                        index === 0
                          ? "bg-sga-emerald text-white"
                          : "border border-white/20 text-slate-300"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="font-sga-body text-sm font-medium text-slate-300">
                      {step}
                    </span>
                  </div>

                  {index < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="hidden h-px w-5 bg-white/20 sm:block"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="relative">
            <div className="relative aspect-4/3 overflow-hidden rounded-sga">
              <Image
                src="/images/apply/apply-hero.jpg"
                alt="Professional preparing for an education growth opportunity"
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