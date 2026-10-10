export default function EducationalBusinessConsulting() {
  const capabilities = [
    {
      number: "01",
      title: "Board Advisory",
      description:
        "Develop the ability to help school owners and leadership teams evaluate strategic priorities, governance, performance, and growth opportunities.",
      tag: "Leadership",
    },
    {
      number: "02",
      title: "Enterprise Strategy",
      description:
        "Explore strategic approaches to revenue, operations, market positioning, institutional performance, and long-term business objectives.",
      tag: "Strategy",
    },
    {
      number: "03",
      title: "School Scaling",
      description:
        "Understand the structures, systems, and strategic considerations involved in school expansion and multi-campus growth.",
      tag: "Expansion",
    },
    {
      number: "04",
      title: "Consulting Delivery",
      description:
        "Learn to organise institutional challenges into consulting engagements, recommendations, and actionable plans for school leadership.",
      tag: "Execution",
    },
  ];

  const programmeDetails = [
    {
      label: "Duration",
      value: "15 Days",
    },
    {
      label: "Investment",
      value: "₦99,950",
    },
    {
      label: "Programme",
      value: "CEBC Series",
    },
    {
      label: "Focus",
      value: "Business Consulting",
    },
  ];

  return (
    <section className="bg-sga-off-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section introduction */}
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 font-sga-body text-sm font-bold uppercase tracking-[0.2em] text-sga-emerald">
              Step 3 · Professional Consulting
            </p>

            <h2 className="font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl lg:text-5xl">
              Certified Educational Business Consulting
              <span className="block text-sga-emerald">(CEBC) Series</span>
            </h2>
          </div>

          <div className="flex shrink-0 items-center gap-3 self-start rounded-full border border-slate-200 bg-white px-4 py-3 md:self-auto">
            <span className="h-2.5 w-2.5 rounded-full bg-sga-amber" />
            <span className="font-sga-body text-sm font-semibold text-sga-navy">
              From skills to strategy
            </span>
          </div>
        </div>

        {/* Premium consulting panel */}
        <div className="relative overflow-hidden rounded-sga bg-sga-navy shadow-xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full border border-sga-emerald/20"
          />

          <div className="relative grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* Programme overview */}
            <div className="flex flex-col p-7 md:p-10 lg:p-12">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-sga-emerald/30 bg-sga-emerald/10 px-3 py-2">
                <span className="font-sga-body text-xs font-bold uppercase tracking-widest text-emerald-300">
                  The Consulting Pathway
                </span>
              </div>

              <p className="mt-8 font-sga-body text-sm font-semibold uppercase tracking-wider text-slate-400">
                Programme Overview
              </p>

              <p className="mt-3 font-sga-body text-lg leading-relaxed text-slate-200">
                Develop the consulting capabilities needed to help school
                owners and education businesses examine challenges, assess
                strategic choices, and plan for sustainable growth.
              </p>

              <p className="mt-5 font-sga-body text-base leading-relaxed text-slate-400">
                Building on school-growth fundamentals, this 15-day series
                explores board advisory, enterprise strategy, school scaling,
                and structured consulting delivery.
              </p>

              {/* Investment emphasis */}
              <div className="mt-8 rounded-sga border border-white/10 bg-white/5 p-5">
                <p className="font-sga-body text-xs font-bold uppercase tracking-widest text-slate-400">
                  Programme Investment
                </p>

                <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
                  <p className="font-sga-heading text-3xl font-extrabold text-white md:text-4xl">
                    ₦99,950
                  </p>

                  <span className="rounded-full bg-sga-amber px-3 py-1.5 font-sga-body text-xs font-bold text-sga-navy">
                    15-Day Series
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {programmeDetails
                  .filter((detail) => detail.label !== "Investment")
                  .map((detail) => (
                    <div
                      key={detail.label}
                      className="border-l-2 border-sga-emerald/60 py-1 pl-3"
                    >
                      <p className="font-sga-body text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {detail.label}
                      </p>

                      <p className="mt-1 font-sga-heading text-sm font-bold text-white">
                        {detail.value}
                      </p>
                    </div>
                  ))}
              </div>

              <a
                href="/apply"
                className="mt-8 inline-flex w-fit items-center justify-center rounded-sga bg-sga-amber px-6 py-3.5 font-sga-body text-sm font-bold text-sga-navy transition-all hover:-translate-y-0.5 hover:bg-sga-amber-dark hover:text-white"
              >
                Explore the CEBC Series
                <span aria-hidden="true" className="ml-3">
                  →
                </span>
              </a>
            </div>

            {/* Capability grid */}
            <div className="bg-white p-6 md:p-10 lg:p-12">
              <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-6">
                <div>
                  <p className="font-sga-body text-xs font-bold uppercase tracking-[0.2em] text-sga-emerald">
                    Consulting Toolkit
                  </p>

                  <h3 className="mt-2 font-sga-heading text-2xl font-extrabold text-sga-navy md:text-3xl">
                    Strategic Capabilities
                  </h3>

                  <p className="mt-3 max-w-lg font-sga-body text-base leading-relaxed text-sga-slate">
                    Four core areas for developing a more structured approach
                    to educational business consulting.
                  </p>
                </div>

                <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-sga bg-sga-navy font-sga-heading text-xl font-extrabold text-sga-emerald sm:flex">
                  04
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {capabilities.map((capability) => (
                  <article
                    key={capability.number}
                    className="group rounded-sga border border-slate-200 bg-sga-off-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-sga-emerald/50 hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-sga-heading text-sm font-extrabold text-sga-emerald">
                        {capability.number}
                      </span>

                      <span className="rounded-full bg-white px-2.5 py-1 font-sga-body text-[10px] font-bold uppercase tracking-wider text-sga-slate">
                        {capability.tag}
                      </span>
                    </div>

                    <h4 className="mt-5 font-sga-heading text-lg font-bold text-sga-navy">
                      {capability.title}
                    </h4>

                    <p className="mt-3 font-sga-body text-sm leading-relaxed text-sga-slate">
                      {capability.description}
                    </p>

                    <div className="mt-5 h-1 w-8 rounded-full bg-sga-amber transition-all duration-300 group-hover:w-14" />
                  </article>
                ))}
              </div>

              <div className="mt-6 rounded-sga bg-sga-navy p-5">
                <p className="font-sga-body text-sm leading-relaxed text-slate-300">
                  <span className="font-bold text-white">
                    The intended progression:
                  </span>{" "}
                  build on your school-growth knowledge and develop the
                  strategic thinking needed for educational business
                  consulting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}