export default function RealWorldApplicationSection() {
  const applications = [
    {
      number: "01",
      title: "School Growth",
      description:
        "Apply structured thinking to challenges around enrolment, parent acquisition, retention, positioning, and sustainable school growth.",
    },
    {
      number: "02",
      title: "Revenue & Commercial Thinking",
      description:
        "Develop a stronger understanding of revenue, cash flow, pricing, and the commercial decisions that influence school sustainability.",
    },
    {
      number: "03",
      title: "Operations & Execution",
      description:
        "Understand how practical systems, processes, people, and technology can support more effective school operations.",
    },
    {
      number: "04",
      title: "Consulting & Advisory",
      description:
        "Translate your expertise into structured recommendations and practical solutions that address real school challenges.",
    },
  ];

  return (
    <section className="bg-sga-off-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
          <div className="lg:sticky lg:top-28">
            <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
              Where Expertise Creates Value
            </p>

            <h2 className="mt-4 font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
              Knowledge Becomes More Valuable When It Can Be Applied.
            </h2>

            <p className="mt-6 font-sga-body text-lg leading-relaxed text-sga-slate">
              SGA connects learning to the practical realities of the education
              sector. The expertise you develop can be applied across different
              areas of school growth and professional practice.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {applications.map((application) => (
              <article
                key={application.number}
                className="rounded-sga border border-slate-200 bg-white p-6 shadow-[0_4px_20px_-2px_rgba(10,25,47,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-4px_rgba(10,25,47,0.10)] md:p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sga-navy font-sga-heading text-sm font-extrabold text-sga-emerald">
                  {application.number}
                </div>

                <h3 className="mt-5 font-sga-heading text-xl font-bold text-sga-navy">
                  {application.title}
                </h3>

                <p className="mt-3 font-sga-body leading-relaxed text-sga-slate">
                  {application.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}