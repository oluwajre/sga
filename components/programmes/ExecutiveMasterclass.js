export default function ExecutiveMasterclass() {
  const focusAreas = [
    {
      title: "Mergers & Acquisitions",
      description:
        "Understand the strategic considerations involved in school mergers, acquisitions, and education-sector expansion.",
    },
    {
      title: "Education Business Valuation",
      description:
        "Explore the principles used to assess the value, financial position, growth potential, and strategic opportunities of education businesses.",
    },
    {
      title: "Education Hubs & Expansion",
      description:
        "Develop strategic thinking around education hubs, multi-campus models, partnerships, and scalable education ventures.",
    },
    {
      title: "Multi-Campus Governance",
      description:
        "Understand the governance structures, accountability systems, and leadership considerations required to manage expanding education organisations.",
    },
    {
      title: "Strategic Growth & Revenue",
      description:
        "Develop strategies for sustainable growth, stronger revenue performance, and long-term commercial viability.",
    },
    {
      title: "Education Business Leadership",
      description:
        "Connect strategic decision-making, operational leadership, and educational outcomes when managing complex education organisations.",
    },
  ];

  const programmeDetails = [
    {
      label: "Duration",
      value: "15 Days",
    },
    {
      label: "Investment",
      value: "₦500,000",
    },
    {
      label: "Certification",
      value: "Masterclass Fellow",
    },
    {
      label: "Practical",
      value: "Hub Practicum",
    },
  ];

  return (
    <section className="bg-sga-navy py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-3 font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
              Tier 3 · Executive
            </p>

            <h2 className="font-sga-heading text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
              Masterclass Fellow
            </h2>

            <p className="mt-6 font-sga-body text-lg leading-relaxed text-slate-300 md:text-xl">
              Develop advanced strategic capabilities for navigating complex
              education businesses, expansion opportunities, valuation, and
              long-term growth.
            </p>

            <p className="mt-5 font-sga-body text-base leading-relaxed text-slate-300">
              This 15-day executive pathway is designed for professionals
              ready to engage with higher-level education business strategy,
              including mergers and acquisitions, valuation, and education hub
              development.
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
              className="mt-8 inline-flex items-center justify-center rounded-sga bg-sga-amber px-6 py-3 font-sga-body text-sm font-bold text-sga-navy transition-all hover:-translate-y-0.5 hover:bg-sga-amber-dark hover:text-white"
            >
              Apply for the Masterclass
            </a>
          </div>

          <div>
            <div className="mb-6">
              <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
                Programme Focus
              </p>

              <h3 className="mt-2 font-sga-heading text-xl font-bold text-white">
                Advanced Strategic Capabilities
              </h3>
            </div>

            <div className="grid gap-px overflow-hidden rounded-sga bg-slate-700 sm:grid-cols-2">
              {focusAreas.map((area) => (
                <div
                  key={area.title}
                  className="bg-sga-navy p-7 transition-colors hover:bg-slate-800"
                >
                  <div className="mb-5 h-1 w-10 bg-sga-amber" />

                  <h3 className="font-sga-heading text-lg font-bold text-white">
                    {area.title}
                  </h3>

                  <p className="mt-3 font-sga-body text-base leading-relaxed text-slate-300">
                    {area.description}
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