export default function TechnologyEnablerSection() {
  const benefits = [
    {
      number: "01",
      title: "Better Decisions",
      description:
        "Technology can help professionals turn information into clearer insights and make more informed decisions.",
    },
    {
      number: "02",
      title: "Better Learning",
      description:
        "Digital learning tools make it easier to continue developing knowledge and skills beyond a single training experience.",
    },
    {
      number: "03",
      title: "Better Execution",
      description:
        "Practical productivity tools help consultants organise their work, deliver value, and focus more attention on meaningful outcomes.",
    },
  ];

  return (
    <section className="bg-sga-off-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <div>
            <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
              03 — Technology as an Enabler
            </p>

            <h2 className="mt-4 font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
              Better Thinking. Better Tools. Better Execution.
            </h2>

            <p className="mt-6 font-sga-body text-lg leading-relaxed text-sga-slate">
              Technology is an important part of modern school growth, but it
              should always serve a purpose. SGA connects practical technology
              with learning, decision-making, and consulting execution.
            </p>

            <p className="mt-4 font-sga-body leading-relaxed text-sga-slate">
              From data and digital learning to consultant productivity, our
              technology approach is designed to make it easier for
              professionals to understand problems, develop their expertise,
              and take action.
            </p>

            <a
              href="/technology"
              className="mt-8 inline-flex items-center font-sga-body text-sm font-bold text-sga-emerald transition-colors hover:text-sga-navy"
            >
              Explore SGA Technology
              <span className="ml-2">→</span>
            </a>
          </div>

          <div className="space-y-4">
            {benefits.map((benefit) => (
              <article
                key={benefit.number}
                className="rounded-sga border border-slate-200 bg-white p-6 shadow-[0_4px_20px_-2px_rgba(10,25,47,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-4px_rgba(10,25,47,0.10)] md:p-7"
              >
                <div className="flex gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sga-navy font-sga-heading text-sm font-extrabold text-sga-emerald">
                    {benefit.number}
                  </span>

                  <div>
                    <h3 className="font-sga-heading text-xl font-bold text-sga-navy">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 font-sga-body leading-relaxed text-sga-slate">
                      {benefit.description}
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