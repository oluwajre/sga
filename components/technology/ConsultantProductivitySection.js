
export default function ConsultantProductivitySection() {
  const tools = [
    {
      number: "01",
      title: "Diagnose",
      description:
        "Use structured audit templates, checklists, and assessment tools to evaluate school challenges and identify growth gaps.",
      outcome: "Understand the problem",
    },
    {
      number: "02",
      title: "Plan",
      description:
        "Organise recommendations, priorities, action plans, and project activities into a clear consulting workflow.",
      outcome: "Define the next steps",
    },
    {
      number: "03",
      title: "Deliver",
      description:
        "Prepare client presentations, reports, proposals, and practical resources for professional school-growth engagements.",
      outcome: "Turn plans into action",
    },
    {
      number: "04",
      title: "Monitor",
      description:
        "Track agreed actions, implementation progress, and key activities throughout a consulting engagement.",
      outcome: "Maintain accountability",
    },
  ];

  const productivityAreas = [
    "Project and task organisation",
    "Client communication and collaboration",
    "Documentation and reporting",
    "Presentations and recommendations",
    "Implementation tracking",
    "Consistent client delivery",
  ];

  return (
    <section className="bg-sga-off-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Introduction */}
        <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
              Technology Pillar 03
            </p>

            <h2 className="mt-4 font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
              Mentorship & Consulting Toolkit
            </h2>

            <h3 className="mt-4 font-sga-heading text-xl font-bold leading-snug text-sga-navy md:text-2xl">
              Work Smarter. Deliver Better.
            </h3>

            <p className="mt-5 font-sga-body text-lg leading-relaxed text-sga-slate">
              Practical resources designed to help School Growth Mentors
              and Educational Business Consultants organise their work,
              deliver professional engagements, and support schools more
              effectively.
            </p>

            <p className="mt-4 font-sga-body leading-relaxed text-sga-slate">
              The toolkit brings together resources such as diagnostic
              audit templates, school-growth tools, spreadsheets, pitch
              decks, presentations, and consulting materials to support
              the work from diagnosis through implementation.
            </p>
          </div>

          {/* Productivity and collaboration areas */}
          <div className="rounded-sga border border-slate-200 bg-white p-6 sm:p-8">
            <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
              Productivity & Collaboration
            </p>

            <h3 className="mt-3 font-sga-heading text-xl font-bold text-sga-navy">
              Organise. Collaborate. Deliver.
            </h3>

            <p className="mt-3 font-sga-body leading-relaxed text-sga-slate">
              Professional delivery also depends on organising information,
              communicating clearly, and keeping implementation on track.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {productivityAreas.map((area) => (
                <div key={area} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sga-emerald/10 text-xs font-bold text-sga-emerald">
                    ✓
                  </span>

                  <p className="font-sga-body text-sm leading-relaxed text-sga-slate">
                    {area}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Consulting workflow */}
        <div className="mt-14 md:mt-16">
          <div className="max-w-2xl">
            <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
              The Consulting Workflow
            </p>

            <h3 className="mt-3 font-sga-heading text-2xl font-extrabold text-sga-navy md:text-3xl">
              From School Diagnosis to Measurable Progress
            </h3>

            <p className="mt-4 font-sga-body leading-relaxed text-sga-slate">
              Use a structured process to move from understanding school
              challenges to planning, delivering, and monitoring solutions.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map((tool) => (
              <article
                key={tool.number}
                className="rounded-sga border border-slate-200 bg-white p-5 transition-colors hover:border-sga-emerald/40 sm:p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-sga-heading text-sm font-extrabold text-sga-emerald">
                    {tool.number}
                  </span>

                  <span className="h-px flex-1 bg-slate-200" />
                </div>

                <h4 className="mt-5 font-sga-heading text-xl font-bold text-sga-navy">
                  {tool.title}
                </h4>

                <p className="mt-3 font-sga-body text-sm leading-relaxed text-sga-slate">
                  {tool.description}
                </p>

                <p className="mt-5 border-t border-slate-100 pt-4 font-sga-body text-sm font-semibold text-sga-emerald">
                  {tool.outcome}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Closing message */}
        <div className="mt-10 flex flex-col gap-4 rounded-sga bg-sga-navy p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-emerald-300">
              Better Tools. Better Delivery.
            </p>

            <h3 className="mt-3 font-sga-heading text-xl font-bold leading-relaxed text-white md:text-2xl">
              Spend less time building everything from scratch and more
              time focusing on schools, strategy, and implementation.
            </h3>
          </div>

          <div className="shrink-0 font-sga-heading text-sm font-bold text-emerald-300">
            Organise → Collaborate → Deliver
          </div>
        </div>
      </div>
    </section>
  );
}
