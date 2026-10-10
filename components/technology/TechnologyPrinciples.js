export default function TechnologyPrinciples() {
  return (
    <section className="bg-sga-off-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Introduction */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
              Our Technology Philosophy
            </p>

            <h2 className="mt-4 font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
              Technology Is the Enabler. Expertise Drives the Outcome.
            </h2>

            <p className="mt-6 max-w-lg font-sga-body text-base leading-8 text-slate-600 md:text-lg">
              SGA does not train professionals to simply use more technology.
              We train them to use technology strategically—combining human
              expertise, school-growth frameworks, data, and AI to diagnose
              problems, develop solutions, implement strategies, measure
              results, and create sustainable growth.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="h-px w-12 bg-sga-emerald" />

              <span className="font-sga-body text-sm font-semibold text-sga-navy">
                Human judgement. Intelligent tools. Practical action.
              </span>
            </div>
          </div>

          {/* Core philosophy */}
          <div className="space-y-6">
            {/* Core equation */}
            <article className="rounded-sga bg-sga-navy p-6 sm:p-8 md:p-10">
              <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-emerald-300">
                The SGA Approach
              </p>

              <h3 className="mt-4 font-sga-heading text-2xl font-extrabold leading-tight text-white md:text-3xl">
                Smarter School Growth Starts With the Right Combination.
              </h3>

              <div className="mt-8 space-y-3">
                {[
                  {
                    number: "01",
                    title: "Human Expertise",
                    description:
                      "Professional judgement, experience, and understanding of school-growth challenges.",
                  },
                  {
                    number: "02",
                    title: "Artificial Intelligence",
                    description:
                      "Tools that support research, analysis, productivity, and problem-solving.",
                  },
                  {
                    number: "03",
                    title: "Data",
                    description:
                      "Evidence that helps professionals understand performance and evaluate progress.",
                  },
                  {
                    number: "04",
                    title: "Technology",
                    description:
                      "Practical capabilities that support planning, implementation, and measurement.",
                  },
                ].map((item) => (
                  <div
                    key={item.number}
                    className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <span className="font-sga-heading text-sm font-bold text-emerald-300">
                      {item.number}
                    </span>

                    <div>
                      <h4 className="font-sga-heading font-bold text-white">
                        {item.title}
                      </h4>

                      <p className="mt-1 font-sga-body text-sm leading-6 text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-white/15 pt-6">
                <p className="font-sga-body text-xs font-bold uppercase tracking-widest text-emerald-300">
                  The Result We Work Towards
                </p>

                <p className="mt-3 font-sga-heading text-xl font-extrabold leading-relaxed text-white sm:text-2xl">
                  Human Expertise + AI + Data + Technology
                  <span className="mt-1 block text-emerald-300">
                    = Smarter School Growth
                  </span>
                </p>
              </div>
            </article>

            {/* Professional distinction */}
            <article className="rounded-sga border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
                What Makes the Difference
              </p>

              <h3 className="mt-3 font-sga-heading text-xl font-extrabold leading-snug text-sga-navy md:text-2xl">
                We Train School Growth Professionals, Not Just Software
                Operators.
              </h3>

              <p className="mt-4 font-sga-body leading-7 text-slate-600">
                Knowing how to use a tool is only the starting point. The
                greater value comes from knowing which problem to solve, which
                information matters, which action to take, and how to assess
                whether that action is working.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="font-sga-heading font-bold text-slate-500">
                    Beyond tool operation
                  </p>
                  <p className="mt-2 font-sga-body text-sm leading-6 text-slate-600">
                    Using software without a clear connection to the problem.
                  </p>
                </div>

                <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4">
                  <p className="font-sga-heading font-bold text-emerald-800">
                    Strategic application
                  </p>
                  <p className="mt-2 font-sga-body text-sm leading-6 text-emerald-900">
                    Applying expertise and technology to solve school-growth
                    problems and measure progress.
                  </p>
                </div>
              </div>
            </article>

            {/* Closing principle */}
            <div className="rounded-sga border-l-4 border-sga-emerald bg-white p-6 shadow-sm sm:p-8">
              <span
                aria-hidden="true"
                className="font-serif text-4xl leading-none text-sga-emerald"
              >
                “
              </span>

              <blockquote className="font-sga-heading text-lg font-bold leading-relaxed text-sga-navy md:text-xl">
                SGA doesn't train people to become software operators. SGA
                trains School Growth Professionals to use technology to solve
                school-growth problems.
              </blockquote>

              <div className="mt-6 border-t border-slate-200 pt-5">
                <p className="font-sga-heading text-xl font-extrabold text-sga-navy md:text-2xl">
                  Technology Is the Enabler.
                </p>

                <p className="mt-1 font-sga-heading text-xl font-extrabold text-sga-emerald md:text-2xl">
                  Growth Is the Goal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}