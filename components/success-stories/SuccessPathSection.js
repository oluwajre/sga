export default function SuccessPathSection() {
  const stages = [
    {
      number: "01",
      title: "Learn",
      description:
        "Build practical knowledge around school growth, education business, consulting, leadership, and technology.",
    },
    {
      number: "02",
      title: "Apply",
      description:
        "Use structured frameworks and practical thinking to work through real education and school-growth challenges.",
    },
    {
      number: "03",
      title: "Create Value",
      description:
        "Turn your developing expertise into meaningful contributions for schools, organisations, clients, and the wider education sector.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
            The Path to Impact
          </p>

          <h2 className="mt-4 font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
            Learn. Apply. Create Value.
          </h2>

          <p className="mt-6 font-sga-body text-lg leading-relaxed text-sga-slate">
            SGA is designed to move professional development beyond knowledge
            acquisition and toward practical capability and meaningful
            contribution.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-1/2 top-14 hidden h-px w-[66%] -translate-x-1/2 bg-slate-200 lg:block" />

          <div className="grid gap-6 lg:grid-cols-3">
            {stages.map((stage) => (
              <article
                key={stage.number}
                className="relative rounded-sga border border-slate-200 bg-sga-off-white p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-4px_rgba(10,25,47,0.10)] md:p-8"
              >
                <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sga-navy font-sga-heading text-base font-extrabold text-sga-emerald ring-8 ring-sga-off-white">
                  {stage.number}
                </div>

                <h3 className="mt-7 font-sga-heading text-2xl font-bold text-sga-navy">
                  {stage.title}
                </h3>

                <p className="mt-3 font-sga-body leading-relaxed text-sga-slate">
                  {stage.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}