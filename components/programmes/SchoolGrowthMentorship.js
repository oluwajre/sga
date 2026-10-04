export default function SchoolGrowthMentorship() {
  const focusAreas = [
    "360-degree school diagnostics and institutional audits",
    "Enrolment growth and parent conversion strategies",
    "Revenue improvement and fee recovery systems",
    "School operations, staffing, and performance improvement",
    "Building practical school growth turnaround plans",
    "Developing recurring school consulting and mentorship retainers",
  ];

  const programmeDetails = [
    {
      label: "Duration",
      value: "10 Days",
    },
    {
      label: "Investment",
      value: "₦250,000",
    },
    {
      label: "Certification",
      value: "CSGM",
    },
    {
      label: "Practical",
      value: "Supervised School Audit",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-3 font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
              Tier 1 · Certified School Growth Mentor
            </p>

            <h2 className="font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
              Certified School Growth Mentor (CSGM)
            </h2>

            <p className="mt-6 font-sga-body text-lg leading-relaxed text-sga-slate">
              Develop the practical skills needed to diagnose school challenges,
              design growth solutions, and support private schools through
              measurable operational and commercial improvements.
            </p>

            <p className="mt-5 font-sga-body text-base leading-relaxed text-sga-slate">
              This pathway equips you to work with private schools across
              diagnostics, audits, growth turnaround, and recurring consulting
              engagements.
            </p>

            <div className="mt-8 overflow-hidden rounded-sga border border-slate-200">
              <div className="grid grid-cols-2 divide-x divide-y divide-slate-200">
                {programmeDetails.map((detail) => (
                  <div key={detail.label} className="bg-sga-off-white px-5 py-4">
                    <p className="font-sga-body text-xs font-semibold uppercase tracking-wider text-sga-slate">
                      {detail.label}
                    </p>

                    <p className="mt-1 font-sga-heading text-base font-bold text-sga-navy">
                      {detail.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="/apply"
              className="mt-8 inline-flex items-center justify-center rounded-sga bg-sga-amber px-6 py-3 font-sga-body text-sm font-bold text-sga-navy transition-all hover:-translate-y-0.5 hover:bg-sga-amber-dark hover:text-white"
            >
              Apply for This Programme
            </a>
          </div>

          <div className="rounded-sga bg-sga-off-white p-8 md:p-10">
            <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
              Programme Focus
            </p>

            <h3 className="mt-2 font-sga-heading text-xl font-bold text-sga-navy">
              What You&apos;ll Learn
            </h3>

            <div className="mt-6 space-y-5">
              {focusAreas.map((area) => (
                <div key={area} className="flex items-start gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sga-emerald text-sm font-bold text-white">
                    ✓
                  </span>

                  <p className="font-sga-body text-base leading-relaxed text-sga-slate">
                    {area}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}