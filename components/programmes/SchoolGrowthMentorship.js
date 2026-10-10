export default function SchoolGrowthMentorship() {
  const focusAreas = [
    {
      number: "01",
      title: "360° School Diagnostics",
      description:
        "Learn to assess institutional challenges, identify performance gaps, and uncover opportunities for school improvement.",
    },
    {
      number: "02",
      title: "Enrolment & Parent Conversion",
      description:
        "Explore strategies for attracting prospective families, improving parent enquiries, and strengthening enrolment processes.",
    },
    {
      number: "03",
      title: "Revenue & Fee Recovery",
      description:
        "Understand practical approaches to revenue improvement, fee collection, and reducing avoidable financial leakage.",
    },
    {
      number: "04",
      title: "Operations & Performance",
      description:
        "Examine staffing, school operations, and performance systems that support more effective institutional management.",
    },
    {
      number: "05",
      title: "Growth Turnaround Planning",
      description:
        "Translate diagnostic findings into practical priorities and structured school-growth improvement plans.",
    },
    {
      number: "06",
      title: "Mentorship & Retainer Models",
      description:
        "Explore how ongoing mentorship and consulting engagements can provide structured support to schools.",
    },
  ];

  const programmeDetails = [
    {
      label: "Duration",
      value: "5 Days",
    },
    {
      label: "Investment",
      value: "₦99,950",
    },
    {
      label: "Focus",
      value: "Practical Skill Development",
    },
    {
      label: "Pathway",
      value: "School Growth Mentorship",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-sga-navy py-20 md:py-24">
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-sga-emerald/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full border border-sga-emerald/20"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Programme introduction */}
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-sga-emerald/30 bg-sga-emerald/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-sga-emerald" />
              <p className="font-sga-body text-xs font-bold uppercase tracking-widest text-emerald-300">
                Step 2 · Skills Development
              </p>
            </div>

            <h2 className="font-sga-heading text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
              School Growth Mentorship
              <span className="mt-2 block text-sga-emerald">
                Skills Development Series
              </span>
            </h2>

            <p className="mt-6 font-sga-body text-lg leading-relaxed text-slate-300">
              Move from discovering the opportunity to developing practical
              skills for understanding school challenges, identifying growth
              opportunities, and supporting school improvement.
            </p>

            <p className="mt-5 font-sga-body text-base leading-relaxed text-slate-400">
              This five-day series introduces practical school-growth
              frameworks across diagnostics, enrolment, revenue, operations,
              and mentorship. It is designed to help you build a foundation
              for further professional development in the sector.
            </p>

            {/* Programme details */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {programmeDetails.map((detail, index) => (
                <div
                  key={detail.label}
                  className={`rounded-sga border p-4 md:p-5 ${
                    index === 1
                      ? "border-sga-emerald/50 bg-sga-emerald/15"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <p className="font-sga-body text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {detail.label}
                  </p>

                  <p className="mt-2 font-sga-heading text-base font-bold leading-snug text-white md:text-lg">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="/apply"
              className="mt-8 inline-flex items-center justify-center rounded-sga bg-sga-amber px-6 py-3.5 font-sga-body text-sm font-bold text-sga-navy transition-all hover:-translate-y-0.5 hover:bg-sga-amber-dark hover:text-white"
            >
              Explore This Programme
              <span aria-hidden="true" className="ml-3">
                →
              </span>
            </a>
          </div>

          {/* Practical learning areas */}
          <div className="relative">
            <div className="absolute -inset-3 rounded-sga border border-sga-emerald/20" />

            <div className="relative overflow-hidden rounded-sga border border-white/10 bg-white p-6 shadow-2xl md:p-8 lg:p-9">
              <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-6">
                <div>
                  <p className="font-sga-body text-xs font-bold uppercase tracking-[0.18em] text-sga-emerald">
                    The Skills Lab
                  </p>

                  <h3 className="mt-2 font-sga-heading text-2xl font-extrabold text-sga-navy">
                    What You&apos;ll Explore
                  </h3>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sga bg-sga-navy font-sga-heading text-lg font-extrabold text-sga-emerald">
                  06
                </div>
              </div>

              <div className="mt-2 divide-y divide-slate-100">
                {focusAreas.map((area) => (
                  <div
                    key={area.number}
                    className="group flex gap-4 py-5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sga-off-white font-sga-heading text-xs font-extrabold text-sga-emerald transition-colors group-hover:bg-sga-emerald group-hover:text-white">
                      {area.number}
                    </span>

                    <div>
                      <h4 className="font-sga-heading text-base font-bold text-sga-navy">
                        {area.title}
                      </h4>

                      <p className="mt-1.5 font-sga-body text-sm leading-relaxed text-sga-slate">
                        {area.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 rounded-sga bg-sga-off-white p-5">
                <p className="font-sga-body text-sm font-semibold leading-relaxed text-sga-navy">
                  The objective: develop practical school-growth skills you
                  can build on as you progress through the wider pathway.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}