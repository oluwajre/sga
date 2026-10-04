export default function EducationalBusinessConsulting() {
  const capabilities = [
    {
      title: "Board Advisory",
      description:
        "Develop the ability to advise school owners and leadership teams on strategic priorities, performance, governance, and growth.",
    },
    {
      title: "Enterprise Strategy",
      description:
        "Build practical strategies that address school performance, revenue, operations, market positioning, and long-term business objectives.",
    },
    {
      title: "School Scaling",
      description:
        "Understand the systems, structures, and strategic considerations required to support school expansion and multi-campus growth.",
    },
    {
      title: "Strategic Consulting Delivery",
      description:
        "Turn institutional challenges into structured consulting engagements, strategic recommendations, and actionable plans for school leadership.",
    },
  ];

  const programmeDetails = [
    {
      label: "Duration",
      value: "12 Days",
    },
    {
      label: "Investment",
      value: "₦350,000",
    },
    {
      label: "Certification",
      value: "CEBC",
    },
    {
      label: "Practical",
      value: "Board Pitch Deck",
    },
  ];

  return (
    <section className="bg-sga-off-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-sga bg-sga-navy lg:grid-cols-2">
          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
            <p className="mb-3 font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
              Tier 2 · Professional
            </p>

            <h2 className="font-sga-heading text-3xl font-extrabold leading-tight text-white md:text-4xl">
              Certified Educational Business Consultant (CEBC)
            </h2>

            <p className="mt-6 font-sga-body text-lg leading-relaxed text-slate-300">
              Move beyond school growth mentorship and develop the strategic
              consulting capabilities needed to advise private schools,
              leadership teams, and education businesses.
            </p>

            <p className="mt-5 font-sga-body text-base leading-relaxed text-slate-300">
              This pathway prepares professionals to deliver higher-level
              advisory engagements covering board strategy, enterprise
              planning, and school scaling.
            </p>

            <div className="mt-8 overflow-hidden rounded-sga border border-white/10">
              <div className="grid grid-cols-2 divide-x divide-y divide-white/10">
                {programmeDetails.map((detail) => (
                  <div key={detail.label} className="bg-white/5 px-5 py-4">
                    <p className="font-sga-body text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {detail.label}
                    </p>

                    <p className="mt-1 font-sga-heading text-base font-bold text-white">
                      {detail.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="/apply"
              className="mt-8 inline-flex w-fit items-center justify-center rounded-sga bg-sga-amber px-6 py-3 font-sga-body text-sm font-bold text-sga-navy transition-all hover:-translate-y-0.5 hover:bg-sga-amber-dark hover:text-white"
            >
              Explore This Pathway
            </a>
          </div>

          <div className="bg-white p-8 md:p-12 lg:p-14">
            <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
              Programme Focus
            </p>

            <h3 className="mt-2 font-sga-heading text-xl font-bold text-sga-navy">
              Core Capabilities
            </h3>

            <div className="mt-8 space-y-7">
              {capabilities.map((capability) => (
                <div key={capability.title}>
                  <h3 className="font-sga-heading text-lg font-bold text-sga-navy">
                    {capability.title}
                  </h3>

                  <p className="mt-2 font-sga-body text-base leading-relaxed text-sga-slate">
                    {capability.description}
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