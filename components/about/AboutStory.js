export default function AboutStory() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Section introduction */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-center gap-4">
              <span
                aria-hidden="true"
                className="font-sga-heading text-5xl font-extrabold tracking-tight text-sga-emerald/20 md:text-6xl"
              >
                01
              </span>

              <div className="h-px w-12 bg-sga-emerald" />
            </div>

            <p className="mt-6 font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
              Our Story
            </p>

            <h2 className="mt-3 font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
              Building the Professionals Behind Stronger African Schools.
            </h2>

            <p className="mt-5 max-w-md font-sga-body leading-relaxed text-sga-slate">
              SGA exists to develop the people and practical capabilities
              schools need to grow sustainably.
            </p>
          </div>

          {/* Story */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute bottom-2 left-0 top-2 w-px bg-slate-200"
            />

            <div className="space-y-7 pl-7 md:pl-9">
              <p className="font-sga-body text-lg leading-relaxed text-sga-slate md:text-xl">
                Private schools across Africa play an increasingly important
                role in educating the next generation. Yet many school owners
                and leaders face challenges that extend far beyond the
                classroom.
              </p>

              <p className="font-sga-body text-lg leading-relaxed text-sga-slate md:text-xl">
                Enrolment, revenue, cash flow, staffing, operations,
                technology, marketing, and leadership all influence whether a
                school can remain healthy, deliver quality education, and
                continue to grow.
              </p>

              <p className="font-sga-body text-lg leading-relaxed text-sga-slate md:text-xl">
                School Growth Academy was developed under NoVance Ltd to
                address this gap by bringing together business expertise,
                education insight, practical growth frameworks, and modern
                EdTech tools.
              </p>

              <p className="font-sga-body text-lg leading-relaxed text-sga-slate md:text-xl">
                The Academy is designed to develop professionals who can
                diagnose real school challenges, create practical growth
                strategies, implement solutions, and support schools through
                measurable improvement.
              </p>

              {/* Core philosophy */}
              <div className="border-l-4 border-sga-emerald bg-sga-off-white px-6 py-6 md:px-7 md:py-7">
                <p className="font-sga-body text-xs font-bold uppercase tracking-widest text-sga-emerald">
                  Our Core Philosophy
                </p>

                <p className="mt-3 font-sga-heading text-xl font-bold leading-relaxed text-sga-navy md:text-2xl">
                  Education quality improves when school business management
                  flourishes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}