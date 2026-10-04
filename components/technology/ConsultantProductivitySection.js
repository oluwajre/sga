export default function ConsultantProductivitySection() {
  const tools = [
    {
      number: "01",
      title: "Diagnose",
      description:
        "Use structured templates, checklists, and assessment tools to evaluate school challenges and identify growth gaps.",
    },
    {
      number: "02",
      title: "Plan",
      description:
        "Organize recommendations, priorities, action plans, and client engagements into a clear consulting workflow.",
    },
    {
      number: "03",
      title: "Deliver",
      description:
        "Support school engagements with practical resources, presentation materials, reporting tools, and consulting templates.",
    },
    {
      number: "04",
      title: "Monitor",
      description:
        "Track actions, key activities, and progress so consultants can maintain accountability throughout an engagement.",
    },
  ];

  return (
    <section className="bg-sga-off-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Introduction */}
          <div>
            <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
              Technology Pillar 03
            </p>

            <h2 className="mt-4 font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
              Mentorship & Consulting Toolkit
            </h2>

            <p className="mt-5 font-sga-body text-lg leading-relaxed text-sga-slate">
              Practical resources designed to help School Growth Mentors
              structure their work, deliver professional engagements, and
              support schools more effectively.
            </p>

            <p className="mt-4 font-sga-body leading-relaxed text-sga-slate">
              The toolkit brings together practical consulting resources such
              as diagnostic audit templates, school-growth tools, spreadsheets,
              pitch decks, and other materials that can reduce friction across
              the consulting workflow.
            </p>
          </div>

          {/* Productivity Areas */}
          <div className="grid gap-4 sm:grid-cols-2">
            {tools.map((tool) => (
              <div
                key={tool.number}
                className="rounded-sga bg-white p-6 shadow-[0_4px_20px_-2px_rgba(10,25,47,0.08)] transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="font-sga-heading text-sm font-extrabold text-sga-emerald">
                  {tool.number}
                </span>

                <h3 className="mt-5 font-sga-heading text-xl font-bold text-sga-navy">
                  {tool.title}
                </h3>

                <p className="mt-3 font-sga-body text-sm leading-relaxed text-sga-slate">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-12 rounded-sga border border-sga-navy/10 bg-white p-6 md:p-8">
          <p className="font-sga-heading text-xl font-bold leading-relaxed text-sga-navy md:text-2xl">
            The right tools help consultants spend less time building
            everything from scratch and more time focusing on schools,
            strategy, and implementation.
          </p>
        </div>
      </div>
    </section>
  );
}