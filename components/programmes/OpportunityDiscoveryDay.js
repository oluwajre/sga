export default function OpportunityDiscoveryDay() {
  const discoveryAreas = [
    {
      title: "Discover a New Career Opportunity",
      description:
        "Explore how school growth mentorship and educational business consulting can provide an alternative professional pathway beyond traditional employment.",
    },
    {
      title: "Understand the Private-School Sector",
      description:
        "Discover the growth challenges, operational needs, and business opportunities that school owners and leaders face.",
    },
    {
      title: "Explore the NoVance Approach",
      description:
        "Get introduced to practical school-growth frameworks, mentorship methodologies, consulting skills, and technology-enabled solutions.",
    },
    {
      title: "Identify Your Next Step",
      description:
        "Understand the progression from discovering the opportunity to developing practical skills and exploring a professional consulting practice.",
    },
  ];

  const programmeDetails = [
    {
      label: "Format",
      value: "Free Masterclass",
    },
    {
      label: "Investment",
      value: "₦0",
    },
    {
      label: "Focus",
      value: "Career Discovery",
    },
    {
      label: "Next Step",
      value: "Explore the Pathway",
    },
  ];

  return (
    <section className="scroll-mt-24 bg-white py-20 md:py-24" id="opportunity-discovery-day">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-3 font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
              Step 1 · Free Masterclass
            </p>

            <h2 className="font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
              Opportunity Discovery Day
            </h2>

            <p className="mt-2 font-sga-heading text-xl font-bold text-sga-emerald">
              Beyond Employment
            </p>

            <p className="mt-6 font-sga-body text-lg leading-relaxed text-sga-slate">
              Discover a professional pathway in School Growth Mentorship
              and Educational Business Consulting, and explore how your
              existing knowledge, skills, and experience could create new
              opportunities in the private-school sector.
            </p>

            <p className="mt-5 font-sga-body text-base leading-relaxed text-sga-slate">
              This free masterclass introduces the opportunity, the challenges
              schools need help solving, and the progression available to
              professionals interested in building capabilities in school
              growth and educational business consulting.
            </p>

            <div className="mt-8 overflow-hidden rounded-sga border border-slate-200">
              <div className="grid grid-cols-2 divide-x divide-y divide-slate-200">
                {programmeDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="bg-sga-off-white px-5 py-4"
                  >
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
              Register for the Free Masterclass
            </a>

            <p className="mt-3 font-sga-body text-sm text-sga-slate">
              No masterclass fee required.
            </p>
          </div>

          <div className="rounded-sga bg-sga-off-white p-8 md:p-10">
            <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
              What You&apos;ll Discover
            </p>

            <h3 className="mt-2 font-sga-heading text-xl font-bold text-sga-navy">
              Explore the Opportunity
            </h3>

            <div className="mt-6 space-y-7">
              {discoveryAreas.map((area) => (
                <div key={area.title} className="flex items-start gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sga-emerald text-sm font-bold text-white">
                    ✓
                  </span>

                  <div>
                    <h4 className="font-sga-heading text-base font-bold text-sga-navy">
                      {area.title}
                    </h4>

                    <p className="mt-2 font-sga-body text-base leading-relaxed text-sga-slate">
                      {area.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}