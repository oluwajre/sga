export default function SchoolGrowthGapSection() {
  const challenges = [
    {
      number: "01",
      title: "Bad Debt & Fee Defaults",
      description:
        "Uncollected fees and weak revenue controls can create serious cash-flow pressure for schools.",
    },
    {
      number: "02",
      title: "Enrolment & Parent Conversion",
      description:
        "Schools need stronger marketing, admissions, and front-desk systems to attract and retain families.",
    },
    {
      number: "03",
      title: "Staff & Payroll Challenges",
      description:
        "Weak performance systems, staff turnover, and unstructured payroll models can affect school stability.",
    },
    {
      number: "04",
      title: "Technology & Operations",
      description:
        "Manual processes and outdated systems can limit efficiency, visibility, and the ability to scale.",
    },
    {
      number: "05",
      title: "Governance & Scaling",
      description:
        "Growing schools need stronger governance, accountability, and strategies for sustainable expansion.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          {/* Introduction */}
          <div>
            <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
              The School Growth Gap
            </p>

            <h2 className="mt-4 font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
              Schools Need More Than Passion. They Need Growth Systems.
            </h2>

            <p className="mt-6 font-sga-body text-lg leading-relaxed text-sga-slate">
              School growth depends on more than academic delivery. Enrolment,
              revenue, staffing, technology, operations, and governance all
              influence a school&apos;s ability to grow sustainably.
            </p>

            <p className="mt-4 font-sga-body leading-relaxed text-sga-slate">
              These challenges create opportunities for professionals who can
              diagnose problems, develop practical strategies, implement
              solutions, and support school leaders through measurable growth.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 rounded-full bg-sga-emerald"
              />
              <span className="font-sga-body text-sm font-semibold text-sga-navy">
                Five interconnected growth areas
              </span>
            </div>
          </div>

          {/* Diagnostic map */}
          <div className="relative">
            {/* Desktop connector lines */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 hidden lg:block"
            >
              <svg
                className="h-full w-full"
                viewBox="0 0 700 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M350 300L125 110"
                  stroke="currentColor"
                  className="text-sga-emerald/20"
                  strokeWidth="1.5"
                />
                <path
                  d="M350 300L575 110"
                  stroke="currentColor"
                  className="text-sga-emerald/20"
                  strokeWidth="1.5"
                />
                <path
                  d="M350 300L110 480"
                  stroke="currentColor"
                  className="text-sga-emerald/20"
                  strokeWidth="1.5"
                />
                <path
                  d="M350 300L590 480"
                  stroke="currentColor"
                  className="text-sga-emerald/20"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            {/* Center */}
            <div className="relative mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-sga-navy text-center shadow-[0_12px_30px_-8px_rgba(10,25,47,0.3)] sm:h-36 sm:w-36 lg:absolute lg:left-1/2 lg:top-1/2 lg:mb-0 lg:-translate-x-1/2 lg:-translate-y-1/2">
              <div>
                <p className="font-sga-body text-xs font-bold uppercase tracking-widest text-sga-emerald">
                  School
                </p>
                <p className="mt-1 font-sga-heading text-lg font-extrabold text-white">
                  Growth
                </p>
              </div>
            </div>

            {/* Challenge areas */}
            <div className="grid gap-4 sm:grid-cols-2 lg:min-h-150 lg:grid-cols-2">
              {challenges.map((challenge, index) => (
                <article
                  key={challenge.number}
                  className={`relative rounded-sga border border-slate-200 bg-sga-off-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sga-emerald/30 hover:shadow-[0_8px_30px_-4px_rgba(10,25,47,0.10)] md:p-7 ${
                    index === 4 ? "sm:col-span-2 lg:col-span-2 lg:mx-auto lg:w-[48%]" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-sga-heading text-sm font-extrabold text-sga-emerald">
                      {challenge.number}
                    </span>

                    <span
                      aria-hidden="true"
                      className="h-2 w-2 rounded-full bg-sga-emerald/50"
                    />
                  </div>

                  <h3 className="mt-4 font-sga-heading text-xl font-bold text-sga-navy">
                    {challenge.title}
                  </h3>

                  <p className="mt-3 font-sga-body leading-relaxed text-sga-slate">
                    {challenge.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}