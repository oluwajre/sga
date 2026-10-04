export default function OpportunityPathwaySection() {
  const pathway = [
    {
      number: "01",
      title: "Audit",
      description:
        "Diagnose the school's challenges and identify opportunities across enrolment, revenue, operations, staffing, and technology.",
    },
    {
      number: "02",
      title: "Drive Admissions",
      description:
        "Implement practical enrolment and parent-conversion strategies designed to help the school attract new students.",
    },
    {
      number: "03",
      title: "Create Revenue",
      description:
        "Help schools strengthen revenue systems and unlock additional income through improved enrolment and operations.",
    },
    {
      number: "04",
      title: "Build a Retainer",
      description:
        "Turn successful project work into an ongoing advisory relationship through monthly school growth consulting.",
    },
    {
      number: "05",
      title: "Grow the Portfolio",
      description:
        "Develop long-term client relationships and expand your school growth practice as your expertise and results grow.",
    },
  ];

  return (
    <section className="bg-sga-off-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Introduction */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
            The Opportunity Pathway
          </p>

          <h2 className="mt-4 font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
            From School Audit to Recurring Consulting Opportunity.
          </h2>

          <p className="mt-6 font-sga-body text-lg leading-relaxed text-sga-slate">
            SGA teaches professionals how to identify school growth
            opportunities, deliver practical solutions, and develop ongoing
            consulting relationships.
          </p>
        </div>

        {/* Business growth pathway */}
        <div className="mx-auto mt-14 max-w-5xl">
          <div className="space-y-3">
            {pathway.map((stage, index) => (
              <article
                key={stage.number}
                className={`group relative overflow-hidden rounded-sga border border-slate-200 bg-white shadow-[0_4px_20px_-4px_rgba(10,25,47,0.06)] transition-all duration-300 hover:border-sga-emerald/30 hover:shadow-[0_10px_30px_-6px_rgba(10,25,47,0.10)] ${
                  index === 1
                    ? "lg:ml-10"
                    : index === 2
                      ? "lg:ml-20"
                      : index === 3
                        ? "lg:ml-30"
                        : index === 4
                          ? "lg:ml-40"
                          : ""
                }`}
              >
                <div className="flex items-start gap-5 p-6 md:items-center md:gap-7 md:p-7">
                  {/* Stage marker */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sga-navy font-sga-heading text-sm font-extrabold text-sga-emerald transition-colors duration-300 group-hover:bg-sga-emerald group-hover:text-white">
                    {stage.number}
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
                      <h3 className="font-sga-heading text-xl font-bold text-sga-navy">
                        {stage.title}
                      </h3>

                      {index < pathway.length - 1 && (
                        <span className="hidden font-sga-body text-xs font-semibold uppercase tracking-wider text-sga-emerald/70 md:inline">
                          Next stage
                        </span>
                      )}
                    </div>

                    <p className="mt-2 max-w-3xl font-sga-body leading-relaxed text-sga-slate">
                      {stage.description}
                    </p>
                  </div>

                  {/* Progress indicator */}
                  <div
                    aria-hidden="true"
                    className="hidden h-10 w-1 shrink-0 rounded-full bg-slate-100 md:block"
                  >
                    <div
                      className={`w-full rounded-full bg-sga-emerald ${
                        index === 0
                          ? "h-1/5"
                          : index === 1
                            ? "h-2/5"
                            : index === 2
                              ? "h-3/5"
                              : index === 3
                                ? "h-4/5"
                                : "h-full"
                      }`}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Outcome */}
          <div className="mt-8 rounded-sga bg-sga-navy p-7 text-center md:p-9">
            <p className="font-sga-body text-xs font-bold uppercase tracking-[0.2em] text-sga-emerald">
              The Long-Term Opportunity
            </p>

            <p className="mx-auto mt-3 max-w-2xl font-sga-heading text-xl font-bold leading-relaxed text-white md:text-2xl">
              Build from one school engagement into a structured, recurring
              consulting practice.
            </p>
          </div>
        </div>

        {/* Business model link */}
        <div className="mt-10 text-center">
          <a
            href="/business-model"
            className="inline-flex items-center gap-2 rounded-full border border-sga-emerald/30 px-5 py-2.5 font-sga-body text-sm font-bold text-sga-emerald transition-all duration-200 hover:border-sga-emerald hover:bg-sga-emerald hover:text-white"
          >
            Explore the SGA Business Model
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}