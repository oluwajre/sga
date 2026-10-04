export default function MentorRoleSection() {
  const roles = [
    {
      number: "01",
      title: "Diagnose",
      description:
        "Assess the school's challenges, bottlenecks, and growth gaps to understand what needs attention.",
    },
    {
      number: "02",
      title: "Evaluate",
      description:
        "Review financial performance, enrolment, staffing, operations, technology, and other factors affecting growth.",
    },
    {
      number: "03",
      title: "Strategize",
      description:
        "Turn findings into clear priorities, measurable objectives, and a practical school growth plan.",
    },
    {
      number: "04",
      title: "Implement",
      description:
        "Help put recommended systems, campaigns, processes, and improvement initiatives into action.",
    },
    {
      number: "05",
      title: "Govern",
      description:
        "Establish accountability, performance indicators, controls, and monitoring systems to keep progress on track.",
    },
    {
      number: "06",
      title: "Navigate",
      description:
        "Use performance insights to guide decisions, improve results, and support sustainable long-term growth.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Introduction */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
            The School Growth Mentor
          </p>

          <h2 className="mt-4 font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
            A Structured Role From Diagnosis to Sustainable Growth.
          </h2>

          <p className="mt-6 font-sga-body text-lg leading-relaxed text-sga-slate">
            School Growth Mentors use the SGA 6-Stage Growth Framework to move
            from understanding a school&apos;s challenges to implementing
            solutions, governing performance, and navigating long-term growth.
          </p>
        </div>

        {/* Six-stage roadmap */}
        <div className="relative mt-16">
          {/* Desktop connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-[8%] right-[8%] top-7 hidden h-px bg-sga-emerald/20 lg:block"
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
            {roles.map((role) => (
              <article key={role.number} className="group relative">
                {/* Stage marker */}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-sga-emerald/30 bg-white font-sga-heading text-sm font-extrabold text-sga-emerald shadow-sm transition-all duration-300 group-hover:border-sga-emerald group-hover:bg-sga-emerald group-hover:text-white group-hover:shadow-[0_8px_20px_-6px_rgba(5,150,105,0.45)]">
                  {role.number}
                </div>

                <div className="mt-5">
                  <h3 className="font-sga-heading text-xl font-bold text-sga-navy">
                    {role.title}
                  </h3>

                  <p className="mt-3 font-sga-body text-sm leading-relaxed text-sga-slate">
                    {role.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Methodology link */}
        <div className="mt-14 text-center">
          <a
            href="/methodology"
            className="inline-flex items-center gap-2 rounded-full border border-sga-emerald/30 px-5 py-2.5 font-sga-body text-sm font-bold text-sga-emerald transition-all duration-200 hover:border-sga-emerald hover:bg-sga-emerald hover:text-white"
          >
            Explore the SGA Methodology
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}