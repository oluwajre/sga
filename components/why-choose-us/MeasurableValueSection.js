export default function MeasurableValueSection() {
  const outcomes = [
    {
      number: "01",
      title: "Understand",
      description:
        "Develop a clearer understanding of the challenges and opportunities that shape school growth.",
    },
    {
      number: "02",
      title: "Think Strategically",
      description:
        "Learn to connect school challenges with structured frameworks, practical strategies, and informed decisions.",
    },
    {
      number: "03",
      title: "Create Value",
      description:
        "Develop the ability to translate your knowledge and expertise into practical solutions for schools.",
    },
    {
      number: "04",
      title: "Take Action",
      description:
        "Move beyond knowledge and apply what you learn to real-world education and consulting opportunities.",
    },
  ];

  return (
    <section className="bg-sga-navy py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
              05 — Measurable Value
            </p>

            <h2 className="mt-4 font-sga-heading text-3xl font-extrabold leading-tight text-white md:text-4xl">
              Learning Should Lead Somewhere.
            </h2>

            <p className="mt-6 font-sga-body text-lg leading-relaxed text-slate-300">
              The value of professional development is not simply what you
              know. It is what you can understand, apply, improve, and create
              as a result.
            </p>

            <p className="mt-4 font-sga-body leading-relaxed text-slate-300">
              SGA is designed to help you move from knowledge to practical
              capability — giving you a stronger foundation for contributing
              to schools and building your professional expertise.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {outcomes.map((outcome) => (
              <article
                key={outcome.number}
                className="rounded-sga border border-slate-200 bg-white p-6 shadow-[0_4px_20px_-2px_rgba(10,25,47,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-4px_rgba(10,25,47,0.10)] md:p-7"
              >
                <span className="font-sga-heading text-sm font-extrabold text-sga-emerald">
                  {outcome.number}
                </span>

                <h3 className="mt-4 font-sga-heading text-xl font-bold text-sga-navy">
                  {outcome.title}
                </h3>

                <p className="mt-3 font-sga-body leading-relaxed text-sga-slate">
                  {outcome.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-sga border border-sga-emerald/20 bg-white p-7 text-center md:p-10">
          <p className="font-sga-heading text-xl font-bold text-sga-navy md:text-2xl">
            From Learning to Capability. From Capability to Impact.
          </p>

          <p className="mx-auto mt-3 max-w-2xl font-sga-body leading-relaxed text-sga-slate">
            SGA exists to help ambitious professionals develop expertise they
            can apply meaningfully within the education sector.
          </p>
        </div>
      </div>
    </section>
  );
}