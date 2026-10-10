const beliefs = [
  {
    number: "01",
    title: "Practicality Over Theory",
    description:
      "School growth requires more than academic knowledge. We focus on practical frameworks, tools, and strategies that professionals can apply to real school challenges.",
  },
  {
    number: "02",
    title: "Education and Business Must Work Together",
    description:
      "Education quality improves when school business management flourishes. Stronger financial, operational, and growth systems create the foundation for sustainable educational outcomes.",
  },
  {
    number: "03",
    title: "Technology Should Enable Growth",
    description:
      "Technology should solve practical problems and improve execution. We equip professionals to use modern EdTech tools to strengthen school operations, learning, analytics, and decision-making.",
  },
  {
    number: "04",
    title: "Growth Must Create Measurable Value",
    description:
      "Successful school growth should produce meaningful outcomes. We focus on helping professionals connect their work to measurable improvements in enrolment, revenue, operations, and institutional performance.",
  },
];

export default function BeliefsSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Introduction */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-center gap-4">
              <span
                aria-hidden="true"
                className="h-10 w-1 rounded-full bg-sga-emerald"
              />

              <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
                What We Believe
              </p>
            </div>

            <h2 className="mt-5 font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
              The Principles Behind Our Approach
            </h2>

            <p className="mt-5 max-w-md font-sga-body text-lg leading-relaxed text-sga-slate">
              Our work is guided by a simple belief: professionals should be
              equipped to turn knowledge into action and action into measurable
              value.
            </p>

            <div className="mt-8 hidden lg:block">
              <p className="font-sga-heading text-5xl font-extrabold text-sga-navy/10">
                04
              </p>
              <p className="mt-2 font-sga-body text-sm font-medium text-sga-slate">
                principles that guide how we develop professionals and support
                school growth
              </p>
            </div>
          </div>

          {/* Principles */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute bottom-8 left-2 top-8 w-px bg-slate-200"
            />

            <div className="space-y-0">
              {beliefs.map((belief, index) => (
                <article
                  key={belief.number}
                  className={`group relative pl-10 md:pl-14 ${
                    index !== beliefs.length - 1
                      ? "border-b border-slate-200 pb-9"
                      : "pb-2"
                  } ${index !== 0 ? "pt-9" : ""}`}
                >
                  {/* Marker */}
                  <div className="absolute left-0 top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-sga-emerald bg-white transition-transform duration-200 group-hover:scale-110">
                    <span className="h-1.5 w-1.5 rounded-full bg-sga-emerald" />
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6">
                    <span className="shrink-0 font-sga-heading text-sm font-extrabold tracking-wider text-sga-amber-dark">
                      {belief.number}
                    </span>

                    <div>
                      <h3 className="font-sga-heading text-xl font-bold text-sga-navy md:text-2xl">
                        {belief.title}
                      </h3>

                      <p className="mt-3 max-w-2xl font-sga-body text-base leading-relaxed text-sga-slate">
                        {belief.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}