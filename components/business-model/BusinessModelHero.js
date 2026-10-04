import Image from "next/image";

export default function BusinessModelHero() {
  const steps = [
    "Diagnose",
    "Deliver Services",
    "Build Retainers",
    "Grow Your Portfolio",
  ];

  return (
    <section className="relative overflow-hidden bg-sga-navy py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Content */}
          <div className="relative z-10 max-w-2xl">
            <p className="font-sga-body text-sm font-bold uppercase tracking-[0.2em] text-sga-emerald">
              The Business Model
            </p>

            <h1 className="mt-5 font-sga-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
              Turn School Growth Expertise Into a Recurring Consulting Practice.
            </h1>

            <p className="mt-6 max-w-xl font-sga-body text-lg leading-relaxed text-slate-300 md:text-xl">
              SGA equips you to diagnose school challenges, deliver specialised
              growth services, build recurring consulting relationships, and
              participate in technology revenue as your school portfolio grows.
            </p>

            {/* Business pathway */}
            <div className="mt-8">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
                {steps.map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-sga-emerald/40 font-sga-body text-xs font-bold text-sga-emerald">
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
          </div>

          {/* Consulting image */}
          <div className="relative">
            <div className="relative aspect-4/3 overflow-hidden rounded-sga">
              <Image
                src="/images/business-model/business-model-hero.jpg"
                alt="Education professionals discussing a school growth consulting strategy"
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