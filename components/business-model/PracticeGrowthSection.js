export default function PracticeGrowthSection() {
  const pillars = [
    {
      number: "01",
      title: "Start With Diagnostics",
      description:
        "Begin with a focused school assessment that helps identify operational, financial, enrolment, staffing, technology, and growth opportunities.",
      value: "₦50k–₦150k",
      label: "Diagnostic Engagements",
    },
    {
      number: "02",
      title: "Develop a Service Offer",
      description:
        "Turn identified school challenges into a clearly defined service, such as fee recovery, enrolment improvement, staff performance, or technology deployment.",
      value: "Project-Based",
      label: "Specialised Services",
    },
    {
      number: "03",
      title: "Build Recurring Retainers",
      description:
        "Where ongoing support is appropriate, develop recurring advisory relationships that allow you to continue helping schools monitor performance and execute growth initiatives.",
      value: "₦100k–₦300k",
      label: "Monthly Retainers",
    },
    {
      number: "04",
      title: "Add Technology Revenue",
      description:
        "Introduce relevant EdTech solutions such as EdMetrics AI and LearnNova and participate in recurring software subscription revenue.",
      value: "20%–25%",
      label: "Recurring Commission",
    },
    {
      number: "05",
      title: "Grow Your School Portfolio",
      description:
        "Strengthen your reputation, relationships, and delivery capability to expand your client portfolio, develop referrals, and take on larger opportunities.",
      value: "Scale",
      label: "Client Portfolio",
    },
  ];

  return (
    <section className="bg-sga-off-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
              Building Your Practice
            </p>

            <h2 className="mt-4 font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
              From Your First School Engagement to a Growing Consulting
              Portfolio.
            </h2>

            <p className="mt-6 font-sga-body text-lg leading-relaxed text-sga-slate">
              Build your practice progressively. Start by solving a specific
              school problem, demonstrate value, develop ongoing relationships,
              and expand your portfolio as your experience grows.
            </p>
          </div>

          <div className="space-y-4">
            {pillars.map((pillar) => (
              <article
                key={pillar.number}
                className="rounded-sga border border-slate-200 bg-white p-6 shadow-[0_4px_20px_-2px_rgba(10,25,47,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-4px_rgba(10,25,47,0.10)] md:p-7"
              >
                <div className="flex gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sga-navy font-sga-heading text-sm font-extrabold text-sga-emerald">
                    {pillar.number}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <h3 className="font-sga-heading text-xl font-bold text-sga-navy">
                        {pillar.title}
                      </h3>

                      <div className="shrink-0 sm:text-right">
                        <p className="font-sga-heading text-base font-bold text-sga-emerald">
                          {pillar.value}
                        </p>

                        <p className="mt-0.5 font-sga-body text-xs font-semibold uppercase tracking-wide text-sga-slate">
                          {pillar.label}
                        </p>
                      </div>
                    </div>

                    <p className="mt-2 font-sga-body leading-relaxed text-sga-slate">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-sga border border-sga-emerald/20 bg-white p-7 md:p-9">
          <p className="font-sga-heading text-xl font-bold text-sga-navy md:text-2xl">
            Growth Happens Progressively.
          </p>

          <p className="mt-3 max-w-4xl font-sga-body leading-relaxed text-sga-slate">
            The objective is not to promise a specific income or number of
            clients. Build a credible practice by creating value for schools,
            developing strong client relationships, and expanding your
            capabilities and portfolio over time.
          </p>
        </div>
      </div>
    </section>
  );
}