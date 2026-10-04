export default function StructuredProgressionSection() {
  const levels = [
    {
      number: "01",
      level: "Level 1",
      title: "School Growth Mentorship",
      description:
        "Build a strong foundation in school growth, understand common challenges, and develop practical ways to create value for schools.",
      focus: "Foundation & Understanding",
    },
    {
      number: "02",
      level: "Level 2",
      title: "Educational Business Consulting",
      description:
        "Develop the strategic and consulting skills needed to help schools solve growth challenges and create measurable value.",
      focus: "Strategy & Consulting",
    },
    {
      number: "03",
      level: "Level 3",
      title: "Executive Masterclass",
      description:
        "Explore advanced areas of education leadership, including valuation, M&A, multi-campus governance, growth, and academy management.",
      focus: "Advanced Leadership",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
            04 — Structured Progression
          </p>

          <h2 className="mt-4 font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
            A Pathway Designed to Grow With You.
          </h2>

          <p className="mt-6 font-sga-body text-lg leading-relaxed text-sga-slate">
            Your starting point may be different from someone else's. That's
            why SGA provides progressive learning levels designed to support
            different stages of professional development and ambition.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {levels.map((level) => (
            <article
              key={level.number}
              className="relative overflow-hidden rounded-sga border border-slate-200 bg-sga-off-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-4px_rgba(10,25,47,0.10)]"
            >
              <div className="flex items-center justify-between">
                <span className="font-sga-heading text-4xl font-extrabold text-sga-emerald/30">
                  {level.number}
                </span>

                <span className="rounded-full bg-sga-navy px-3 py-1 font-sga-body text-xs font-bold text-white">
                  {level.level}
                </span>
              </div>

              <h3 className="mt-6 font-sga-heading text-xl font-bold text-sga-navy">
                {level.title}
              </h3>

              <p className="mt-3 font-sga-body leading-relaxed text-sga-slate">
                {level.description}
              </p>

              <div className="mt-6 border-t border-slate-200 pt-5">
                <p className="font-sga-body text-xs font-bold uppercase tracking-wider text-sga-emerald">
                  {level.focus}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-sga bg-sga-navy p-7 md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-sga-heading text-xl font-bold text-white">
                One Framework. Progressive Expertise.
              </p>

              <p className="mt-2 max-w-2xl font-sga-body leading-relaxed text-slate-300">
                Across the learning pathway, the 6-D framework provides a
                practical foundation for understanding challenges, designing
                solutions, taking action, and driving sustainable growth.
              </p>
            </div>

            <a
              href="/programmes"
              className="inline-flex shrink-0 items-center justify-center rounded-sga bg-sga-amber px-6 py-3 font-sga-body text-sm font-bold text-sga-navy transition-colors hover:bg-sga-amber-dark hover:text-white"
            >
              View Programmes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}