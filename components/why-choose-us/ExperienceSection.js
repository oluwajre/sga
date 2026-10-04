export default function ExperienceSection() {
  const highlights = [
    {
      value: "25+",
      label: "Years of Post-Qualification Leadership Experience",
    },
    {
      value: "6-D",
      label: "Practical School Growth Framework",
    },
    {
      value: "3",
      label: "Progressive Learning Levels",
    },
  ];

  return (
    <section className="bg-sga-navy py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          {/* Introduction */}
          <div>
            <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
              02 — Experience
            </p>

            <h2 className="mt-4 font-sga-heading text-3xl font-extrabold leading-tight text-white md:text-4xl">
              Built on Experience. Designed for What Comes Next.
            </h2>

            <p className="mt-6 font-sga-body text-lg leading-relaxed text-slate-300">
              SGA draws on more than 25 years of post-qualification leadership
              experience to bring a practical perspective to education growth,
              professional development, and organisational thinking.
            </p>

            <p className="mt-4 font-sga-body leading-relaxed text-slate-300">
              That experience informs the frameworks, principles, and
              perspective behind the Academy — helping learners connect
              structured knowledge with the realities of growth and leadership.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {highlights.map((highlight) => (
              <div
                key={highlight.value}
                className="rounded-sga border border-slate-700 bg-slate-900/50 p-6 md:p-7"
              >
                <p className="font-sga-heading text-4xl font-extrabold text-sga-emerald md:text-5xl">
                  {highlight.value}
                </p>

                <p className="mt-3 font-sga-body leading-relaxed text-slate-300">
                  {highlight.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}