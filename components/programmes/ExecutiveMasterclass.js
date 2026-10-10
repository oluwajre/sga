export default function ExecutiveMasterclass() {
  const focusAreas = [
    {
      number: "01",
      title: "School Data & Visibility",
      description:
        "Explore how school information can be organised and interpreted to support clearer understanding of institutional performance.",
      label: "Understand",
    },
    {
      number: "02",
      title: "AI-Assisted Thinking",
      description:
        "Examine ways AI tools can support analysis, idea development, and structured problem-solving in an educational business context.",
      label: "Explore",
    },
    {
      number: "03",
      title: "Operational Workflows",
      description:
        "Identify school and consulting activities where technology may help organise information and reduce repetitive manual work.",
      label: "Apply",
    },
    {
      number: "04",
      title: "Growth Decisions",
      description:
        "Connect data-informed thinking with planning, performance reviews, and the identification of potential growth priorities.",
      label: "Plan",
    },
  ];

  const journey = [
    {
      number: "01",
      title: "School Information",
      description: "Organise the information available",
    },
    {
      number: "02",
      title: "AI & Data Exploration",
      description: "Explore patterns and useful insights",
    },
    {
      number: "03",
      title: "Growth Planning",
      description: "Consider informed next steps",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-sga-navy py-20 md:py-28">
      {/* Ambient decoration creates a distinct technology-focused identity. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full border border-sga-emerald/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-[20rem] w-[20rem] rounded-full border border-sga-emerald/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-sga-emerald/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section introduction */}
        <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-sga-emerald/30 bg-sga-emerald/10 px-4 py-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sga-emerald opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sga-emerald" />
              </span>
              <span className="font-sga-body text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
                Step 4 · AI & Education Technology
              </span>
            </div>

            <h2 className="font-sga-heading text-3xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
              NoVance
              <span className="block text-sga-emerald">
                EdMetrics AI Stacks
              </span>
            </h2>

            <p className="mt-6 max-w-2xl font-sga-body text-lg leading-relaxed text-slate-300 md:text-xl">
              Explore the intersection of educational business, data, and
              artificial intelligence—and how technology can support more
              structured school-growth decisions.
            </p>
          </div>

          <div className="w-full rounded-sga border border-white/10 bg-white/5 p-5 backdrop-blur-sm lg:w-64">
            <p className="font-sga-body text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
              Programme Investment
            </p>
            <p className="mt-2 font-sga-heading text-3xl font-extrabold text-white md:text-4xl">
              ₦149,950
            </p>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-sga-emerald to-sga-amber" />
            </div>
            <p className="mt-3 font-sga-body text-sm text-slate-400">
              Technology-focused pathway
            </p>
          </div>
        </div>

        {/* Main technology-inspired composition */}
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left: programme context */}
          <div className="relative flex flex-col overflow-hidden rounded-sga border border-white/10 bg-gradient-to-br from-slate-800/90 to-slate-900/90 p-7 md:p-9">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-sga-emerald/20"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-5 -top-5 h-24 w-24 rounded-full border border-sga-amber/20"
            />

            <div className="relative">
              <p className="font-sga-body text-xs font-bold uppercase tracking-[0.2em] text-sga-emerald">
                The Technology Pathway
              </p>

              <h3 className="mt-4 max-w-md font-sga-heading text-2xl font-extrabold leading-snug text-white md:text-3xl">
                Bring school-growth thinking into the AI era.
              </h3>

              <p className="mt-5 font-sga-body text-base leading-relaxed text-slate-300">
                This pathway explores how data and AI can contribute to
                educational business analysis, workflow thinking, and growth
                planning. It builds on the earlier pathways by introducing a
                technology-oriented perspective.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sga-emerald/15 text-sm font-bold text-emerald-300">
                    1
                  </span>
                  <div>
                    <p className="font-sga-heading text-base font-bold text-white">
                      Understand the information
                    </p>
                    <p className="mt-1 font-sga-body text-sm leading-relaxed text-slate-400">
                      Consider what school data can tell you.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sga-emerald/15 text-sm font-bold text-emerald-300">
                    2
                  </span>
                  <div>
                    <p className="font-sga-heading text-base font-bold text-white">
                      Explore technology-supported thinking
                    </p>
                    <p className="mt-1 font-sga-body text-sm leading-relaxed text-slate-400">
                      Examine possible uses of AI and structured workflows.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sga-emerald/15 text-sm font-bold text-emerald-300">
                    3
                  </span>
                  <div>
                    <p className="font-sga-heading text-base font-bold text-white">
                      Connect insights to action
                    </p>
                    <p className="mt-1 font-sga-body text-sm leading-relaxed text-slate-400">
                      Use informed thinking to consider potential priorities.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="/apply"
                className="mt-9 inline-flex w-full items-center justify-center rounded-sga bg-sga-amber px-6 py-4 font-sga-body text-sm font-bold text-sga-navy transition-all hover:-translate-y-0.5 hover:bg-sga-amber-dark hover:text-white sm:w-auto"
              >
                Explore EdMetrics AI Stacks
                <span aria-hidden="true" className="ml-3 text-lg">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Right: illustrative data-lab visual and focus areas */}
          <div className="overflow-hidden rounded-sga border border-white/10 bg-[#0D2238]">
            <div className="border-b border-white/10 px-6 py-5 md:px-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="font-sga-body text-xs font-bold uppercase tracking-[0.2em] text-sga-emerald">
                    EdMetrics Data Lab
                  </p>
                  <h3 className="mt-2 font-sga-heading text-xl font-extrabold text-white md:text-2xl">
                    From information to insight
                  </h3>
                </div>
                <span className="rounded-full border border-sga-amber/30 bg-sga-amber/10 px-3 py-1.5 font-sga-body text-[10px] font-bold uppercase tracking-wider text-amber-300">
                  Illustrative concept
                </span>
              </div>
            </div>

            {/* Conceptual workflow — not a live product dashboard. */}
            <div className="p-6 md:p-8">
              <div className="grid gap-3 sm:grid-cols-3">
                {journey.map((item, index) => (
                  <div key={item.number} className="relative">
                    <div className="h-full rounded-sga border border-white/10 bg-white/[0.04] p-4">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-sga-heading text-xs font-extrabold text-sga-emerald">
                          {item.number}
                        </span>
                        <span
                          className={`h-2 w-2 rounded-full ${
                            index === 1 ? "bg-sga-amber" : "bg-sga-emerald"
                          }`}
                        />
                      </div>
                      <h4 className="mt-4 font-sga-heading text-sm font-bold leading-snug text-white">
                        {item.title}
                      </h4>
                      <p className="mt-2 font-sga-body text-xs leading-relaxed text-slate-400">
                        {item.description}
                      </p>
                    </div>
                    {index < journey.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute -right-2.5 top-1/2 z-10 hidden -translate-y-1/2 text-sga-emerald sm:block"
                      >
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-sga border border-sga-emerald/20 bg-sga-emerald/5 p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sga bg-sga-emerald/15">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-6 w-6 text-sga-emerald"
                    >
                      <path
                        d="M12 3v3m0 12v3M3 12h3m12 0h3M5.64 5.64l2.12 2.12m8.48 8.48 2.12 2.12m0-12.72-2.12 2.12m-8.48 8.48-2.12 2.12"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="4"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sga-heading text-base font-bold text-white">
                      Technology with a purpose
                    </p>
                    <p className="mt-2 font-sga-body text-sm leading-relaxed text-slate-300">
                      The goal is to connect technology exploration with
                      meaningful educational business questions—not use AI
                      without context.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="mb-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="font-sga-body text-xs font-bold uppercase tracking-[0.2em] text-sga-emerald">
                      Areas of Exploration
                    </p>
                    <h3 className="mt-2 font-sga-heading text-xl font-extrabold text-white">
                      Four technology themes
                    </h3>
                  </div>
                  <span className="font-sga-heading text-3xl font-extrabold text-white/10">
                    04
                  </span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {focusAreas.map((area) => (
                    <article
                      key={area.number}
                      className="group rounded-sga border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-sga-emerald/40 hover:bg-white/[0.06]"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-sga-heading text-sm font-extrabold text-sga-emerald">
                          {area.number}
                        </span>
                        <span className="rounded-full bg-white/5 px-2.5 py-1 font-sga-body text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          {area.label}
                        </span>
                      </div>
                      <h4 className="mt-4 font-sga-heading text-base font-bold text-white">
                        {area.title}
                      </h4>
                      <p className="mt-2 font-sga-body text-sm leading-relaxed text-slate-400">
                        {area.description}
                      </p>
                      <div className="mt-4 h-0.5 w-8 rounded-full bg-sga-amber transition-all duration-300 group-hover:w-14" />
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-5 font-sga-body text-xs leading-relaxed text-slate-500">
          Programme duration, specific tools, and included deliverables should
          be confirmed in the final programme details before publication.
        </p>
      </div>
    </section>
  );
}