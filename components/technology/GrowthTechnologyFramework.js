export default function GrowthTechnologyFramework() {
  const stages = [
    {
      number: "01",
      title: "Discover",
      description:
        "Understand the market, customer needs, and school performance using research and data intelligence.",
      output: "Market and performance insights",
    },
    {
      number: "02",
      title: "Attract",
      description:
        "Use digital marketing and lead-generation capabilities to improve visibility and reach prospective parents.",
      output: "Visibility and enquiries",
    },
    {
      number: "03",
      title: "Capture",
      description:
        "Organise incoming enquiries and prospect information so opportunities can be tracked and managed.",
      output: "Organised prospective-parent leads",
    },
    {
      number: "04",
      title: "Convert",
      description:
        "Apply sales and admissions processes to nurture prospects, follow up consistently, and improve enrolment conversion.",
      output: "Enrolment opportunities",
    },
    {
      number: "05",
      title: "Engage",
      description:
        "Support ongoing communication and engagement with parents, students, and customers.",
      output: "Stronger engagement and continuity",
    },
    {
      number: "06",
      title: "Automate",
      description:
        "Use AI and workflow automation to reduce repetitive tasks and improve consistency in business processes.",
      output: "More consistent workflows",
    },
    {
      number: "07",
      title: "Measure",
      description:
        "Use analytics, dashboards, and performance indicators to evaluate results and identify areas for improvement.",
      output: "Performance insights",
    },
    {
      number: "08",
      title: "Grow",
      description:
        "Apply the insights to improve retention, strengthen operations, and pursue sustainable revenue growth.",
      output: "Continuous improvement",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-sga-body text-sm font-bold uppercase tracking-[0.18em] text-sga-emerald">
            From Technology to Results
          </p>

          <h2 className="mt-4 font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
            The SGA Growth Technology Framework
          </h2>

          <p className="mt-6 font-sga-body text-base leading-8 text-slate-600 md:text-lg">
            Technology creates greater value when its different capabilities
            work together toward a clear objective. The SGA Growth Technology
            Framework connects research, marketing, admissions, engagement,
            automation, and analytics to the wider school-growth process.
          </p>
        </div>

        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-6 top-8 hidden w-px bg-emerald-200 md:block"
          />

          <div className="grid gap-5 md:grid-cols-2">
            {stages.map((stage) => (
              <article
                key={stage.number}
                className="relative rounded-sga border border-slate-200 bg-sga-off-white p-5 transition duration-300 hover:border-emerald-300 hover:shadow-md sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sga-navy font-sga-heading text-sm font-bold text-white">
                    {stage.number}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-sga-heading text-xl font-bold text-sga-navy">
                      {stage.title}
                    </h3>

                    <p className="mt-3 font-sga-body text-sm leading-7 text-slate-600">
                      {stage.description}
                    </p>

                    <div className="mt-4 border-t border-slate-200 pt-4">
                      <p className="font-sga-body text-xs font-bold uppercase tracking-wider text-slate-500">
                        Intended outcome
                      </p>

                      <p className="mt-1 font-sga-body text-sm font-semibold leading-6 text-sga-emerald">
                        {stage.output}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-sga bg-sga-navy px-5 py-8 text-center sm:px-8 md:py-10">
          <p className="font-sga-body text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
            The Growth Cycle
          </p>

          <p className="mt-4 font-sga-heading text-lg font-bold leading-relaxed text-white sm:text-xl md:text-2xl">
            Discover <span className="text-emerald-300">→</span> Attract{" "}
            <span className="text-emerald-300">→</span> Capture{" "}
            <span className="text-emerald-300">→</span> Convert{" "}
            <span className="text-emerald-300">→</span> Engage{" "}
            <span className="text-emerald-300">→</span> Automate{" "}
            <span className="text-emerald-300">→</span> Measure{" "}
            <span className="text-emerald-300">→</span> Grow
          </p>

          <p className="mx-auto mt-4 max-w-2xl font-sga-body text-sm leading-7 text-slate-300">
            Growth is an ongoing process. What the school learns from measuring
            results can inform the next round of discovery, planning, and
            improvement.
          </p>
        </div>
      </div>
    </section>
  );
}