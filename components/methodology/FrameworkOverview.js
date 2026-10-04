const frameworkSteps = [
  {
    number: "01",
    title: "Diagnose",
    description:
      "Identify the school’s key problems, operational bottlenecks, and growth gaps through a practical institutional assessment.",
  },
  {
    number: "02",
    title: "Evaluate",
    description:
      "Assess financial performance, enrolment, staffing, operations, technology, and other factors affecting school growth.",
  },
  {
    number: "03",
    title: "Strategize",
    description:
      "Create a practical growth and improvement plan with clear priorities, measurable objectives, and defined actions.",
  },
  {
    number: "04",
    title: "Implement",
    description:
      "Put the recommended systems, campaigns, processes, and improvement initiatives into practical operation.",
  },
  {
    number: "05",
    title: "Govern",
    description:
      "Establish accountability, key performance indicators, controls, and continuous monitoring across the school.",
  },
  {
    number: "06",
    title: "Navigate",
    description:
      "Use performance insights to guide long-term decision-making, optimize results, and support sustainable school growth and scaling.",
  },
];

export default function FrameworkOverview() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-3 font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
            The SGA {frameworkSteps.length}-Stage Growth Framework™
          </p>

          <h2 className="font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
            From Diagnosis to Sustainable Growth.
          </h2>

          <p className="mt-5 font-sga-body text-lg leading-relaxed text-sga-slate">
            The framework gives School Growth Mentors a structured way to move
            from understanding a school’s challenges to evaluating its
            performance, developing practical strategies, implementing
            solutions, establishing accountability, and navigating long-term
            growth.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px bg-slate-200 md:block" />

          <div className="space-y-8">
            {frameworkSteps.map((step) => (
              <div
                key={step.number}
                className="relative grid gap-5 md:grid-cols-[3rem_1fr] md:gap-8"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-sga-emerald font-sga-heading text-sm font-bold text-white">
                  {step.number}
                </div>

                <div className="rounded-sga border border-slate-200 bg-sga-off-white p-6 md:p-7">
                  <h3 className="font-sga-heading text-xl font-bold text-sga-navy">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-3xl font-sga-body text-base leading-relaxed text-sga-slate">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}