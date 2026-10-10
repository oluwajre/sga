export default function PracticalLearningSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          {/* Content */}
          <div>
            <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
              01 — Practical Learning
            </p>

            <h2 className="mt-4 font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
              Learn What You Can Actually Use.
            </h2>

            <p className="mt-6 font-sga-body text-lg leading-relaxed text-sga-slate">
              SGA is built around the realities of running, growing, and
              supporting private schools. The goal is not simply to give you
              information, but to help you develop the ability to apply what
              you learn.
            </p>

            <p className="mt-4 font-sga-body leading-relaxed text-sga-slate">
              From understanding school growth challenges to developing
              consulting solutions, the learning experience is designed around
              practical thinking and real-world application.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-sga bg-sga-off-white p-5">
                <p className="font-sga-heading text-lg font-bold text-sga-navy">
                  Frameworks
                </p>

                <p className="mt-2 font-sga-body text-sm leading-relaxed text-sga-slate">
                  Structured approaches that help you understand and solve
                  school growth challenges.
                </p>
              </div>

              <div className="rounded-sga bg-sga-off-white p-5">
                <p className="font-sga-heading text-lg font-bold text-sga-navy">
                  Application
                </p>

                <p className="mt-2 font-sga-body text-sm leading-relaxed text-sga-slate">
                  Practical thinking that can be translated into action and
                  measurable value.
                </p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="rounded-sga bg-sga-navy p-7 md:p-9">
              <p className="font-sga-body text-xs font-bold uppercase tracking-widest text-sga-emerald">
                The SGA Approach
              </p>

              <div className="mt-8 space-y-5">
                {[
                  "Understand the challenge",
                  "Apply the right framework",
                  "Design a practical response",
                  "Put the solution into action",
                ].map((step, index) => (
                  <div key={step} className="flex items-center gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sga-emerald font-sga-heading text-sm font-bold text-white">
                      {index + 1}
                    </span>

                    <p className="font-sga-body font-medium text-white">
                      {step}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-slate-700 pt-6">
                <p className="font-sga-body text-sm leading-relaxed text-slate-400">
                  Knowledge becomes valuable when it can be applied to a real
                  problem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}