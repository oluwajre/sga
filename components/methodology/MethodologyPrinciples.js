const principles = [
  {
    number: "01",
    title: "Diagnose Before Recommending",
    description:
      "Start with evidence. Understand the school's current position, challenges, operational bottlenecks, resources, and objectives before proposing solutions.",
  },
  {
    number: "02",
    title: "Evaluate the Whole Institution",
    description:
      "Look beyond a single problem by considering financial performance, enrolment, staffing, operations, technology, governance, and other factors that influence school growth.",
  },
  {
    number: "03",
    title: "Turn Insight Into Strategy",
    description:
      "Use the findings from diagnosis and evaluation to establish clear priorities, measurable objectives, and practical strategies that address the school's most important growth opportunities.",
  },
  {
    number: "04",
    title: "Strategy Must Become Action",
    description:
      "A strategy creates value when it is implemented. Translate recommendations into practical systems, campaigns, processes, responsibilities, and initiatives that can be put into operation.",
  },
  {
    number: "05",
    title: "Govern Through Measurement",
    description:
      "Establish accountability, key performance indicators, controls, and continuous monitoring so school leaders can understand progress and respond when results fall short.",
  },
  {
    number: "06",
    title: "Navigate for Sustainable Growth",
    description:
      "Use performance insights and changing conditions to guide long-term decisions, improve what works, and help schools build the capacity to grow sustainably.",
  },
];

export default function MethodologyPrinciples() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-3 font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
              Our Method
            </p>

            <h2 className="font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
              Growth Requires More Than a Good Idea.
            </h2>

            <p className="mt-5 font-sga-body text-lg leading-relaxed text-sga-slate">
              The SGA methodology connects diagnosis, evaluation, strategy,
              implementation, governance, and navigation to create a practical
              approach to sustainable school growth.
            </p>
          </div>

          <div className="space-y-5">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="group rounded-sga border border-slate-200 bg-sga-off-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_-2px_rgba(10,25,47,0.08)] md:p-8"
              >
                <div className="flex gap-5">
                  <span className="font-sga-heading text-sm font-extrabold text-sga-emerald">
                    {principle.number}
                  </span>

                  <div>
                    <h3 className="font-sga-heading text-xl font-bold text-sga-navy">
                      {principle.title}
                    </h3>

                    <p className="mt-3 font-sga-body text-base leading-relaxed text-sga-slate">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}