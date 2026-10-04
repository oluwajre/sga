const programmes = [
  {
    level: "Tier 1",
    title: "Certified School Growth Mentor (CSGM)",
    bestFor:
      "Professionals who want to build practical school growth mentorship and consulting capabilities.",
    duration: "10 Days",
    investment: "₦250,000",
    certification: "CSGM",
    practical: "Supervised School Audit",
    focus: "Diagnostics, Audits, Growth Turnaround & Retainers",
  },
  {
    level: "Tier 2",
    title: "Certified Educational Business Consultant (CEBC)",
    bestFor:
      "Professionals ready to advise school owners and leadership teams on strategy, business growth, and scaling.",
    duration: "12 Days",
    investment: "₦350,000",
    certification: "CEBC",
    practical: "Board Pitch Deck",
    focus: "Board Advisory, Enterprise Strategy & Scaling",
  },
  {
    level: "Tier 3",
    title: "Masterclass Fellow",
    bestFor:
      "Professionals ready to develop advanced strategic capabilities for complex education businesses and expansion.",
    duration: "15 Days",
    investment: "₦500,000",
    certification: "Masterclass Fellow",
    practical: "Hub Practicum",
    focus: "M&A, Valuation & Education Hubs",
  },
];

export default function ProgrammeComparison() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
            Compare the Pathways
          </p>

          <h2 className="font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
            Choose the Programme That Matches Your Next Step
          </h2>

          <p className="mt-5 font-sga-body text-lg leading-relaxed text-sga-slate">
            Each pathway builds a different level of capability, from practical
            school growth mentorship to advanced education-business strategy.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {programmes.map((programme) => (
            <div
              key={programme.level}
              className="flex flex-col rounded-sga border border-slate-200 bg-sga-off-white p-7 transition-shadow duration-300 hover:shadow-[0_4px_20px_-2px_rgba(10,25,47,0.08)] md:p-8"
            >
              <div>
                <span className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
                  {programme.level}
                </span>

                <h3 className="mt-4 font-sga-heading text-2xl font-bold leading-tight text-sga-navy">
                  {programme.title}
                </h3>

                <p className="mt-4 font-sga-body text-base leading-relaxed text-sga-slate">
                  {programme.bestFor}
                </p>
              </div>

              <div className="mt-7 overflow-hidden rounded-sga border border-slate-200 bg-white">
                <div className="grid grid-cols-2 divide-x divide-y divide-slate-200">
                  <div className="px-4 py-4">
                    <p className="font-sga-body text-xs font-semibold uppercase tracking-wide text-sga-slate">
                      Duration
                    </p>

                    <p className="mt-1 font-sga-heading text-sm font-bold text-sga-navy">
                      {programme.duration}
                    </p>
                  </div>

                  <div className="px-4 py-4">
                    <p className="font-sga-body text-xs font-semibold uppercase tracking-wide text-sga-slate">
                      Investment
                    </p>

                    <p className="mt-1 font-sga-heading text-sm font-bold text-sga-navy">
                      {programme.investment}
                    </p>
                  </div>

                  <div className="px-4 py-4">
                    <p className="font-sga-body text-xs font-semibold uppercase tracking-wide text-sga-slate">
                      Certification
                    </p>

                    <p className="mt-1 font-sga-heading text-sm font-bold text-sga-navy">
                      {programme.certification}
                    </p>
                  </div>

                  <div className="px-4 py-4">
                    <p className="font-sga-body text-xs font-semibold uppercase tracking-wide text-sga-slate">
                      Practical
                    </p>

                    <p className="mt-1 font-sga-heading text-sm font-bold text-sga-navy">
                      {programme.practical}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-slate-200 pt-6">
                <p className="font-sga-body text-xs font-bold uppercase tracking-wide text-sga-slate">
                  Core Focus
                </p>

                <p className="mt-2 font-sga-body text-base font-semibold leading-relaxed text-sga-navy">
                  {programme.focus}
                </p>
              </div>

              <a
                href="/apply"
                className="mt-8 inline-flex items-center justify-center rounded-sga border-2 border-sga-navy px-5 py-3 font-sga-body text-sm font-bold text-sga-navy transition-all hover:-translate-y-0.5 hover:bg-sga-navy hover:text-white"
              >
                Apply for This Programme
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}