export default function OutcomesSection() {
  const outcomes = [
    {
      number: "01",
      title: "Diagnose School Growth Challenges",
      description:
        "Develop the ability to assess enrolment, revenue, staffing, operations, technology, governance, and other factors affecting school performance.",
    },
    {
      number: "02",
      title: "Apply the SGA Growth Framework",
      description:
        "Use the six-stage approach to move from diagnosis and evaluation to strategy, implementation, governance, and long-term growth navigation.",
    },
    {
      number: "03",
      title: "Deliver Specialised School Services",
      description:
        "Build practical capability around areas such as fee recovery, enrolment growth, teacher KPIs, digital learning, and governance and scaling.",
    },
    {
      number: "04",
      title: "Build a School Growth Practice",
      description:
        "Develop the foundation for positioning your expertise, engaging school clients, delivering value, developing recurring relationships, and growing your consulting portfolio.",
    },
  ];

  return (
    <section className="bg-sga-navy py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Introduction */}
          <div>
            <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
              What You Can Build
            </p>

            <h2 className="mt-4 font-sga-heading text-3xl font-extrabold leading-tight text-white md:text-4xl">
              Develop the Skills to Create Real Value for Schools.
            </h2>

            <p className="mt-5 font-sga-body text-lg leading-relaxed text-slate-300">
              SGA is designed to move you from understanding education
              challenges to developing the practical capability to assess
              schools, deliver solutions, and build a professional practice.
            </p>
          </div>

          {/* Outcomes */}
          <div className="divide-y divide-slate-700 border-y border-slate-700">
            {outcomes.map((outcome) => (
              <article
                key={outcome.number}
                className="grid gap-4 py-7 md:grid-cols-[60px_1fr] md:gap-6"
              >
                <span className="font-sga-heading text-sm font-extrabold text-sga-emerald">
                  {outcome.number}
                </span>

                <div>
                  <h3 className="font-sga-heading text-xl font-bold text-white">
                    {outcome.title}
                  </h3>

                  <p className="mt-2 font-sga-body leading-relaxed text-slate-300">
                    {outcome.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}