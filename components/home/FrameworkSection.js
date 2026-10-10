import Link from "next/link";

export default function FrameworkSection() {
  const framework = [
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

  return (
    <section className="bg-sga-navy py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Introduction */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
            Our Framework
          </p>

          <h2 className="mt-3 font-sga-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            The SGA 6-Stage Growth Framework™
          </h2>

          <p className="mt-5 font-sga-body text-lg leading-8 text-slate-300">
            Learn a structured, practical approach to helping schools grow.
            The SGA framework guides School Growth Mentors and Educational
            Business Consultants from diagnosing school challenges and
            evaluating performance to developing strategies, implementing
            solutions, establishing accountability, and supporting continuous
            improvement.
          </p>

          <div
            aria-hidden="true"
            className="mx-auto mt-7 h-1 w-16 rounded-full bg-sga-emerald"
          />
        </div>

        {/* Framework */}
        <div className="relative mt-14">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 hidden h-px w-[80%] -translate-x-1/2 bg-sga-emerald/20 lg:block"
          />

          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {framework.map((step) => (
              <article
                key={step.number}
                className="group relative overflow-hidden rounded-sga border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sga-emerald/40 hover:bg-white/10 hover:shadow-xl hover:shadow-black/10"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-sga-amber/30 bg-sga-amber/10 font-sga-heading text-sm font-extrabold text-sga-amber">
                    {step.number}
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-xl text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-sga-emerald/70"
                  >
                    →
                  </span>
                </div>

                <div
                  aria-hidden="true"
                  className="mt-5 h-1 w-10 rounded-full bg-sga-emerald transition-all duration-300 group-hover:w-16"
                />

                <h3 className="mt-4 font-sga-heading text-2xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 font-sga-body text-base leading-7 text-slate-300">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/methodology"
            className="group inline-flex items-center gap-2 rounded-sga border border-sga-amber px-7 py-4 font-sga-body text-base font-bold text-sga-amber transition-all duration-200 hover:-translate-y-1 hover:bg-sga-amber hover:text-sga-navy focus:outline-none focus:ring-2 focus:ring-sga-amber focus:ring-offset-2 focus:ring-offset-sga-navy"
          >
            Explore Our Methodology
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}