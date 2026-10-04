export default function TechnologyPrinciples() {
  const principles = [
    {
      number: "01",
      title: "Purpose Before Technology",
      description:
        "Technology should address a real education or consulting need. We focus on practical tools that support meaningful work rather than technology for its own sake.",
    },
    {
      number: "02",
      title: "Data Should Inform Decisions",
      description:
        "School performance information should help professionals understand what is happening, identify areas requiring attention, and make more informed decisions.",
    },
    {
      number: "03",
      title: "Learning Should Be Accessible",
      description:
        "Professional and digital learning should be structured, continuous, and accessible across different environments, including contexts with limited connectivity.",
    },
    {
      number: "04",
      title: "Tools Should Strengthen Execution",
      description:
        "Technology should reduce unnecessary friction in consulting and school operations, giving professionals better resources to plan, deliver, and monitor their work.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          {/* Introduction */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
              Our Technology Philosophy
            </p>

            <h2 className="mt-4 font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
              Technology Should Support Better Education and Better Execution.
            </h2>

            <p className="mt-6 max-w-lg font-sga-body text-lg leading-relaxed text-sga-slate">
              We believe technology is most valuable when it helps people
              understand problems more clearly, access learning more easily,
              and execute practical solutions more effectively.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="h-px w-12 bg-sga-emerald" />

              <span className="font-sga-body text-sm font-semibold text-sga-navy">
                Practical. Purposeful. Accessible.
              </span>
            </div>
          </div>

          {/* Principles */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-5.75 top-6 hidden h-[calc(100%-48px)] w-px bg-slate-200 md:block" />

            <div className="space-y-6">
              {principles.map((principle) => (
                <article
                  key={principle.number}
                  className="relative rounded-sga border border-slate-200 bg-white p-6 shadow-[0_4px_20px_-2px_rgba(10,25,47,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-4px_rgba(10,25,47,0.10)] md:p-7"
                >
                  <div className="flex gap-5">
                    {/* Number */}
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-white bg-sga-emerald font-sga-heading text-sm font-extrabold text-white">
                      {principle.number}
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="font-sga-heading text-xl font-bold text-sga-navy">
                        {principle.title}
                      </h3>

                      <p className="mt-2 max-w-2xl font-sga-body leading-relaxed text-sga-slate">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}