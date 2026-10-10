export default function ProgrammeFitSection() {
  const programmes = [
    {
      level: "Level 1",
      title: "School Growth Mentorship",
      bestFor:
        "Graduates, career transitioners, educators, and professionals building their foundation in school growth and consulting.",
      focus:
        "Develop practical skills in school diagnostics, growth audits, enrolment, revenue, operations, and building a school-growth practice.",
      href: "/programmes",
    },
    {
      level: "Level 2",
      title: "Educational Business Consulting",
      bestFor:
        "Independent consultants, business professionals, trainers, and experienced practitioners ready to deepen their consulting capability.",
      focus:
        "Develop advanced capability in school growth strategy, board advisory, commercial thinking, enterprise strategy, and scaling.",
      href: "/programmes",
    },
    {
      level: "Level 3",
      title: "Executive Masterclass",
      bestFor:
        "Senior professionals, school owners, and education leaders seeking advanced strategic and executive-level expertise.",
      focus:
        "Explore advanced areas including M&A, valuation, multi-campus governance, education hubs, and strategic growth.",
      href: "/programmes",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
            Find Your Path
          </p>

          <h2 className="mt-4 font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
            Which SGA Programme Fits Your Goals?
          </h2>

          <p className="mt-5 font-sga-body text-lg leading-relaxed text-sga-slate">
            SGA offers different levels of professional development, allowing
            you to choose a pathway based on your experience, responsibilities,
            and the depth of expertise you want to develop.
          </p>
        </div>

        {/* Programme Options */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {programmes.map((programme) => (
            <article
              key={programme.level}
              className="flex flex-col rounded-sga bg-white p-7 shadow-[0_4px_20px_-2px_rgba(10,25,47,0.08)]"
            >
              <div className="flex items-center justify-between">
                <span className="font-sga-heading text-sm font-extrabold text-sga-emerald">
                  {programme.level}
                </span>

                <span className="rounded-full bg-sga-navy px-3 py-1 font-sga-body text-xs font-semibold text-white">
                  SGA
                </span>
              </div>

              <h3 className="mt-6 font-sga-heading text-2xl font-bold text-sga-navy">
                {programme.title}
              </h3>

              <div className="mt-6">
                <p className="font-sga-body text-xs font-bold uppercase tracking-wider text-sga-slate">
                  Best For
                </p>

                <p className="mt-2 font-sga-body leading-relaxed text-sga-slate">
                  {programme.bestFor}
                </p>
              </div>

              <div className="mt-6 border-t border-slate-200 pt-6">
                <p className="font-sga-body text-xs font-bold uppercase tracking-wider text-sga-slate">
                  Primary Focus
                </p>

                <p className="mt-2 font-sga-body leading-relaxed text-sga-slate">
                  {programme.focus}
                </p>
              </div>

              <a
                href={programme.href}
                className="mt-auto pt-8 font-sga-body text-sm font-bold text-sga-emerald transition-colors hover:text-sga-navy"
              >
                Explore Programme →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}