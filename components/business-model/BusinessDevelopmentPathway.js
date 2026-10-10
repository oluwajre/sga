export default function BusinessDevelopmentPathway() {
  const levels = [
    {
      number: "01",
      level: "Stage 1",
      title: "Identify Target Schools",
      description:
        "Define the types of private schools you can serve and identify institutions whose challenges align with your expertise and service offers.",
      focus: "Market & Client Selection",
    },
    {
      number: "02",
      level: "Stage 2",
      title: "Open the Conversation",
      description:
        "Use professional networks, referrals, outreach, partnerships, and relevant business-development channels to connect with school owners and decision-makers.",
      focus: "Lead Generation",
    },
    {
      number: "03",
      level: "Stage 3",
      title: "Lead With a Diagnostic",
      description:
        "Use a structured school assessment to understand the institution's challenges and identify areas where your expertise can create value.",
      focus: "School Assessment",
    },
    {
      number: "04",
      level: "Stage 4",
      title: "Present the Solution",
      description:
        "Turn your findings into a clear proposal that connects the school's priorities to a practical service, project, or ongoing advisory engagement.",
      focus: "Proposal & Conversion",
    },
    {
      number: "05",
      level: "Stage 5",
      title: "Develop the Relationship",
      description:
        "Deliver professionally, demonstrate value, and create opportunities for continued support, referrals, additional services, and longer-term partnerships.",
      focus: "Retention & Growth",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
            Business Development Pathway
          </p>

          <h2 className="mt-4 font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
            Turn School Growth Expertise Into Real Client Opportunities.
          </h2>

          <p className="mt-6 font-sga-body text-lg leading-relaxed text-sga-slate">
            Building a consulting practice requires more than knowing how to
            solve school problems. You also need a structured approach to
            finding the right schools, starting conversations, presenting your
            value, and developing long-term client relationships.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

        <div className="mt-10 rounded-sga bg-sga-navy p-7 text-center md:p-9">
          <p className="font-sga-heading text-xl font-bold text-white md:text-2xl">
            Build Relationships, Not Just Transactions.
          </p>

          <p className="mx-auto mt-3 max-w-3xl font-sga-body leading-relaxed text-slate-300">
            A strong consulting practice is built by consistently creating
            value for schools. Successful engagements can lead to ongoing
            advisory relationships, referrals, additional projects, and a
            growing client portfolio.
          </p>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/programmes"
            className="inline-flex items-center font-sga-body text-sm font-bold text-sga-emerald transition-colors hover:text-sga-navy"
          >
            Explore the SGA Programmes
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}