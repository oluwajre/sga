import { programmeData } from "./programmeData";

export default function ProgrammeComparison() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
            Compare the Pathways
          </p>

          <h2 className="font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl lg:text-5xl">
            Find the Right Next Step for Your Journey
          </h2>

          <p className="mt-5 font-sga-body text-lg leading-relaxed text-sga-slate">
            Start by discovering the opportunity, develop practical school
            growth skills, explore professional consulting, or take a
            technology-focused pathway with EdMetrics AI Stacks.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {programmeData.map((programme) => (
            <article
              key={programme.level}
              className={`group relative flex min-w-0 flex-col overflow-hidden rounded-sga border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-7 ${
                programme.featured
                  ? "border-sga-emerald bg-sga-navy text-white shadow-lg shadow-sga-navy/10"
                  : "border-slate-200 bg-sga-off-white hover:border-sga-emerald/40"
              }`}
            >
              {programme.featured && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full border border-sga-emerald/20"
                />
              )}

              <div className="relative">
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`font-sga-body text-xs font-bold uppercase tracking-[0.18em] ${
                      programme.featured
                        ? "text-emerald-300"
                        : "text-sga-emerald"
                    }`}
                  >
                    {programme.level}
                  </span>

                  <span
                    className={`rounded-full px-2.5 py-1 font-sga-body text-[10px] font-bold uppercase tracking-wider ${
                      programme.featured
                        ? "bg-sga-emerald/15 text-emerald-300"
                        : "bg-white text-sga-slate"
                    }`}
                  >
                    {programme.subtitle}
                  </span>
                </div>

                <h3
                  className={`mt-5 font-sga-heading text-xl font-extrabold leading-snug ${
                    programme.featured ? "text-white" : "text-sga-navy"
                  }`}
                >
                  {programme.title}
                </h3>

                <p
                  className={`mt-4 font-sga-body text-sm leading-relaxed ${
                    programme.featured ? "text-slate-300" : "text-sga-slate"
                  }`}
                >
                  {programme.bestFor}
                </p>
              </div>

              <div
                className={`mt-7 rounded-sga border p-4 ${
                  programme.featured
                    ? "border-white/10 bg-white/5"
                    : "border-slate-200 bg-white"
                }`}
              >
                <p
                  className={`font-sga-body text-xs font-semibold uppercase tracking-wider ${
                    programme.featured ? "text-slate-400" : "text-sga-slate"
                  }`}
                >
                  Investment
                </p>

                <p
                  className={`mt-1 font-sga-heading text-2xl font-extrabold ${
                    programme.featured ? "text-white" : "text-sga-navy"
                  }`}
                >
                  {programme.investment}
                </p>

                <div
                  className={`my-4 border-t ${
                    programme.featured ? "border-white/10" : "border-slate-200"
                  }`}
                />

                <p
                  className={`font-sga-body text-xs font-semibold uppercase tracking-wider ${
                    programme.featured ? "text-slate-400" : "text-sga-slate"
                  }`}
                >
                  Format / Duration
                </p>

                <p
                  className={`mt-1 font-sga-heading text-sm font-bold ${
                    programme.featured ? "text-white" : "text-sga-navy"
                  }`}
                >
                  {programme.duration}
                </p>
              </div>

              <div className="mt-6 flex-1">
                <p
                  className={`font-sga-body text-xs font-bold uppercase tracking-wider ${
                    programme.featured ? "text-emerald-300" : "text-sga-emerald"
                  }`}
                >
                  Core Focus
                </p>

                <p
                  className={`mt-3 font-sga-body text-sm font-medium leading-relaxed ${
                    programme.featured ? "text-slate-200" : "text-sga-navy"
                  }`}
                >
                  {programme.focus}
                </p>
              </div>

              <div
                className={`mt-7 border-t pt-6 ${
                  programme.featured ? "border-white/10" : "border-slate-200"
                }`}
              >
                <a
                  href="/apply"
                  className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sga px-4 py-3 text-center font-sga-body text-sm font-bold transition-all ${
                    programme.featured
                      ? "bg-sga-amber text-sga-navy hover:-translate-y-0.5 hover:bg-sga-amber-dark hover:text-white"
                      : "border-2 border-sga-navy text-sga-navy hover:-translate-y-0.5 hover:bg-sga-navy hover:text-white"
                  }`}
                >
                  {programme.action}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-center font-sga-body text-xs leading-relaxed text-sga-slate">
          EdMetrics AI Stacks duration and specific programme deliverables are
          to be confirmed. Review the individual pathway details before
          registering.
        </p>
      </div>
    </section>
  );
}