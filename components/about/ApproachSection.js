const approachItems = [
  {
    number: "01",
    title: "Diagnose Before Recommending",
    description:
      "Start by understanding the school's challenges, operational bottlenecks, financial position, enrolment patterns, and growth gaps before proposing solutions.",
  },
  {
    number: "02",
    title: "Build Practical Strategies",
    description:
      "Turn evidence and evaluation into clear priorities, measurable objectives, and practical growth strategies designed around each school's realities.",
  },
  {
    number: "03",
    title: "Implement With Technology",
    description:
      "Combine practical execution with modern tools such as EdMetrics AI and LearnNova to improve school operations, learning, analytics, and decision-making.",
  },
  {
    number: "04",
    title: "Govern and Navigate Growth",
    description:
      "Establish accountability, monitor performance, and use insights to guide continuous improvement and sustainable long-term school growth.",
  },
];

export default function ApproachSection() {
  return (
    <section className="bg-sga-off-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          {/* Introduction */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
              Our Approach
            </p>

            <h2 className="mt-4 font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
              Practical Thinking. Structured Execution. Sustainable Growth.
            </h2>

            <p className="mt-5 max-w-md font-sga-body text-lg leading-relaxed text-sga-slate">
              Our approach is informed by the SGA 6-Stage Growth Framework,
              helping professionals move from understanding a school&apos;s
              challenges to implementing solutions, governing performance, and
              navigating long-term growth.
            </p>

            <div className="mt-8 border-l-2 border-sga-emerald/30 pl-5">
              <p className="font-sga-body text-sm font-semibold leading-relaxed text-sga-navy">
                Diagnose the reality. Build the strategy. Execute with
                discipline. Navigate growth.
              </p>
            </div>
          </div>

          {/* Approach principles */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute bottom-7 left-5 top-7 w-px bg-slate-200"
            />

            <div className="space-y-0">
              {approachItems.map((item, index) => (
                <article
                  key={item.number}
                  className={`group relative pl-14 md:pl-16 ${
                    index !== approachItems.length - 1
                      ? "border-b border-slate-200 pb-8"
                      : "pb-2"
                  } ${index !== 0 ? "pt-8" : ""}`}
                >
                  {/* Stage marker */}
                  <div className="absolute left-0 top-7 flex h-10 w-10 items-center justify-center rounded-full border border-sga-emerald/30 bg-sga-off-white transition-all duration-200 group-hover:border-sga-emerald group-hover:bg-sga-emerald">
                    <span className="font-sga-heading text-xs font-extrabold text-sga-navy group-hover:text-white">
                      {item.number}
                    </span>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-8">
                    <div className="min-w-0 flex-1">
                      <h3 className="font-sga-heading text-xl font-bold text-sga-navy md:text-2xl">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-2xl font-sga-body text-base leading-relaxed text-sga-slate">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Framework reference */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="font-sga-body text-xs font-bold uppercase tracking-widest text-sga-emerald">
                SGA Framework
              </span>

              <div className="flex flex-wrap items-center gap-2">
                {[
                  "Diagnose",
                  "Evaluate",
                  "Strategize",
                  "Implement",
                  "Govern",
                  "Navigate",
                ].map((stage, index) => (
                  <span
                    key={stage}
                    className="font-sga-body text-sm font-medium text-sga-slate"
                  >
                    {stage}
                    {index < 5 && (
                      <span aria-hidden="true" className="ml-2 text-slate-300">
                        →
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}