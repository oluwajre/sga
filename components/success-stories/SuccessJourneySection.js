export default function SuccessJourneySection() {
  const outcomes = [
    {
      number: "01",
      title: "Professional Growth",
      description:
        "Develop practical knowledge and a stronger understanding of how schools operate, grow, and respond to changing opportunities.",
    },
    {
      number: "02",
      title: "Better School Decisions",
      description:
        "Use structured thinking and relevant information to approach school challenges with greater clarity and purpose.",
    },
    {
      number: "03",
      title: "Consulting Capability",
      description:
        "Build the frameworks, problem-solving skills, and practical perspective needed to support schools more effectively.",
    },
    {
      number: "04",
      title: "Value Creation",
      description:
        "Translate your knowledge into practical solutions that can help schools address challenges and pursue sustainable growth.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
            The SGA Success Journey
          </p>

          <h2 className="mt-4 font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
            Success Starts With What You Become Capable of Doing.
          </h2>

          <p className="mt-6 font-sga-body text-lg leading-relaxed text-sga-slate">
            Every professional starts from a different place. SGA is designed
            to help learners develop practical capabilities that can be applied
            to real challenges across the education sector.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {outcomes.map((outcome) => (
            <article
              key={outcome.number}
              className="rounded-sga border border-slate-200 bg-sga-off-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-4px_rgba(10,25,47,0.10)]"
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

        <div className="mt-12 rounded-sga bg-sga-navy p-8 text-center md:p-10">
          <p className="font-sga-heading text-2xl font-extrabold text-white md:text-3xl">
            From Knowledge to Capability. From Capability to Impact.
          </p>

          <p className="mx-auto mt-4 max-w-2xl font-sga-body leading-relaxed text-slate-300">
            The goal is not simply to complete a programme. It is to develop
            expertise you can apply meaningfully within the education sector.
          </p>
        </div>
      </div>
    </section>
  );
}