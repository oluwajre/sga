
export default function EdMetricsSection() {
  const performanceAreas = [
    "Enrolment & Admissions",
    "Student Retention",
    "Revenue & Financial Performance",
    "Academic & Learning Performance",
    "Parent & Student Experience",
    "Marketing & Sales Performance",
    "Operational Performance",
  ];

  const capabilities = [
    {
      number: "01",
      title: "See What Is Happening",
      description:
        "Bring key school performance indicators into one clearer view.",
    },
    {
      number: "02",
      title: "Understand Why It Is Happening",
      description:
        "Identify patterns, gaps, trends, risks, and opportunities that may otherwise be overlooked.",
    },
    {
      number: "03",
      title: "Know What to Do Next",
      description:
        "Use data-informed insights and recommendations to address challenges and pursue growth opportunities.",
    },
    {
      number: "04",
      title: "Track Progress & Impact",
      description:
        "Monitor key performance indicators and assess whether growth strategies and interventions produce results.",
    },
    {
      number: "05",
      title: "Support Better Conversations",
      description:
        "Use evidence and insights to help school owners and leaders make more confident strategic decisions.",
    },
  ];

  const chartBars = [42, 55, 48, 64, 58, 72, 68];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Product introduction and concept dashboard */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
              Technology Pillar 01 · Planned Solution
            </p>

            <h2 className="mt-4 font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
              NoVance EdMetrics AI
            </h2>

            <h3 className="mt-4 font-sga-heading text-xl font-bold leading-snug text-sga-navy md:text-2xl">
              Turn School Data into Actionable Growth Intelligence
            </h3>

            <p className="mt-5 font-sga-body text-lg leading-relaxed text-sga-slate">
              EdMetrics AI is a planned AI-powered school performance
              intelligence platform designed to help schools and School
              Growth Mentors transform education and business data into
              clear insights, practical recommendations, and smarter
              growth decisions.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["School performance", "Data intelligence", "Growth decisions"].map(
                (label) => (
                  <span
                    key={label}
                    className="rounded-full border border-sga-emerald/20 bg-sga-emerald/5 px-3 py-1.5 font-sga-body text-sm font-medium text-sga-emerald"
                  >
                    {label}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Concept dashboard */}
          <div className="rounded-sga border border-slate-200 bg-sga-off-white p-4 sm:p-6">
            <div className="rounded-sga bg-white p-5 shadow-sm sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-sga-body text-sm font-semibold text-sga-emerald">
                    Concept Preview
                  </p>
                  <h3 className="mt-1 font-sga-heading text-xl font-extrabold text-sga-navy sm:text-2xl">
                    Performance Overview
                  </h3>
                </div>

                <span className="rounded-full bg-amber-50 px-3 py-1 font-sga-body text-xs font-semibold text-amber-700">
                  Illustrative data
                </span>
              </div>

              <div className="mt-8">
                <div className="flex items-end justify-between">
                  <p className="font-sga-body text-sm text-sga-slate">
                    Performance indicators
                  </p>
                  <p className="font-sga-body text-xs text-sga-slate">
                    Sample visual
                  </p>
                </div>

                <div
                  className="mt-4 flex h-40 items-end gap-2 sm:gap-3"
                  aria-label="Illustrative bar chart"
                >
                  {chartBars.map((height, index) => (
                    <div
                      key={index}
                      className="flex h-full flex-1 items-end overflow-hidden rounded-t-md bg-sga-emerald/10"
                    >
                      <div
                        className="w-full rounded-t-md bg-sga-emerald/80"
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-2 flex justify-between font-sga-body text-xs text-sga-slate">
                  <span>Earlier</span>
                  <span>Later</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  { label: "Enrolment", value: "Trends" },
                  { label: "Retention", value: "Insights" },
                  { label: "Operations", value: "Analysis" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg bg-sga-off-white p-3"
                  >
                    <p className="font-sga-body text-xs text-sga-slate">
                      {item.label}
                    </p>
                    <p className="mt-1 font-sga-heading text-sm font-bold text-sga-navy sm:text-base">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Performance areas */}
        <div className="mt-16 border-t border-slate-200 pt-12 md:mt-20 md:pt-16">
          <div className="max-w-2xl">
            <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
              What It Is Designed to Examine
            </p>

            <h3 className="mt-3 font-sga-heading text-2xl font-extrabold text-sga-navy md:text-3xl">
              Seven Areas of School Performance
            </h3>

            <p className="mt-4 font-sga-body leading-relaxed text-sga-slate">
              The planned platform is intended to help professionals
              examine performance across these key areas.
            </p>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {performanceAreas.map((area, index) => (
              <div
                key={area}
                className="flex items-start gap-3 rounded-lg border border-slate-200 p-4 transition-colors hover:border-sga-emerald/40"
              >
                <span className="font-sga-heading text-sm font-bold text-sga-emerald">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="font-sga-body text-sm font-medium leading-relaxed text-sga-navy">
                  {area}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Intended capabilities */}
        <div className="mt-16 md:mt-20">
          <div className="max-w-2xl">
            <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
              From Information to Action
            </p>

            <h3 className="mt-3 font-sga-heading text-2xl font-extrabold text-sga-navy md:text-3xl">
              With EdMetrics AI, School Growth Professionals Can
            </h3>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <article
                key={capability.number}
                className="rounded-sga border border-slate-200 bg-white p-5 sm:p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sga-emerald/10 font-sga-heading text-sm font-bold text-sga-emerald">
                  {capability.number}
                </span>

                <h4 className="mt-5 font-sga-heading text-lg font-bold leading-snug text-sga-navy">
                  {capability.title}
                </h4>

                <p className="mt-3 font-sga-body text-sm leading-relaxed text-sga-slate sm:text-base">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Closing growth process */}
        <div className="mt-12 overflow-hidden rounded-sga bg-sga-navy p-6 sm:p-8 md:mt-16 md:p-10">
          <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-emerald-300">
            The Growth Process
          </p>

          <h3 className="mt-4 font-sga-heading text-2xl font-extrabold leading-tight text-white md:text-3xl">
            From Data to Growth
          </h3>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-sga-heading text-sm font-bold text-white sm:text-base">
            {["Data", "Insight", "Strategy", "Action", "Growth"].map(
              (step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <span>{step}</span>
                  {index < 4 && (
                    <span className="text-emerald-300" aria-hidden="true">
                      →
                    </span>
                  )}
                </div>
              ),
            )}
          </div>

          <p className="mt-6 max-w-3xl font-sga-body leading-relaxed text-slate-300">
            EdMetrics AI is intended to help transform school growth from
            guesswork into a more structured, measurable, and
            intelligence-driven process.
          </p>
        </div>
      </div>
    </section>
  );
}