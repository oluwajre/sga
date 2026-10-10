
export default function LearnNovaSection() {
  const learningFeatures = [
    {
      number: "01",
      title: "Digital Learning",
      description:
        "Deliver structured digital learning experiences that support continuous learning and development.",
    },
    {
      number: "02",
      title: "Home Learning",
      description:
        "Support learning beyond the classroom, including continued access to learning activities outside school.",
    },
    {
      number: "03",
      title: "CBT & Assessments",
      description:
        "Support structured assessments and computer-based testing within the learning environment.",
    },
    {
      number: "04",
      title: "Learning Resources",
      description:
        "Organise digital learning materials to support teaching, revision, and independent study.",
    },
    {
      number: "05",
      title: "Student Engagement",
      description:
        "Support learner participation through accessible digital learning experiences.",
    },
    {
      number: "06",
      title: "Learning Continuity",
      description:
        "Support access to learning in low-bandwidth environments and where internet connectivity is unreliable.",
    },
  ];

  return (
    <section className="bg-sga-navy py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section introduction and product visual */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* LearnNova visual */}
          <div className="order-2 lg:order-1">
            <div className="rounded-sga border border-slate-700 bg-slate-900 p-5 sm:p-7">
              <div className="flex items-center justify-between gap-4 border-b border-slate-700 pb-5">
                <div>
                  <p className="font-sga-body text-xs font-bold uppercase tracking-widest text-sga-emerald">
                    LearnNova
                  </p>

                  <h3 className="mt-2 font-sga-heading text-xl font-bold text-white sm:text-2xl">
                    Digital Learning & CBT
                  </h3>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sga-amber text-lg font-bold text-sga-navy">
                  <span aria-hidden="true">→</span>
                </div>
              </div>

              <p className="mt-5 font-sga-body text-sm leading-relaxed text-slate-400">
                Learning and assessment designed to work in different
                connectivity conditions.
              </p>

              <div className="mt-6 space-y-4">
                {[
                  {
                    title: "Professional Learning",
                    status: "Available",
                    statusClass: "text-emerald-300",
                    width: "w-3/4",
                    barClass: "bg-sga-emerald",
                  },
                  {
                    title: "School Courses",
                    status: "Available",
                    statusClass: "text-amber-300",
                    width: "w-1/2",
                    barClass: "bg-sga-amber",
                  },
                  {
                    title: "CBT & Assessments",
                    status: "Available",
                    statusClass: "text-emerald-300",
                    width: "w-2/3",
                    barClass: "bg-sga-emerald",
                  },
                ].map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-lg border border-slate-700 bg-slate-800 p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-sga-body text-sm font-medium text-white">
                        {feature.title}
                      </p>

                      <span
                        className={`font-sga-body text-xs font-semibold ${feature.statusClass}`}
                      >
                        {feature.status}
                      </span>
                    </div>

                    <div className="mt-3 h-2 rounded-full bg-slate-700">
                      <div
                        className={`h-2 rounded-full ${feature.width} ${feature.barClass}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-lg bg-sga-emerald/10 p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sga-emerald/15 text-sga-emerald">
                  <span aria-hidden="true">✓</span>
                </span>

                <p className="font-sga-body text-sm leading-relaxed text-slate-300">
                  Supports offline learning and low-bandwidth use.
                </p>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-slate-500">
                Illustrative product overview, not a live dashboard.
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div className="order-1 lg:order-2">
            <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
              Technology Pillar 02
            </p>

            <h2 className="mt-4 font-sga-heading text-3xl font-extrabold leading-tight text-white md:text-4xl">
              LearnNova
            </h2>

            <h3 className="mt-4 font-sga-heading text-xl font-bold leading-snug text-white md:text-2xl">
              Extend Learning Beyond the Classroom
            </h3>

            <p className="mt-5 font-sga-body text-lg leading-relaxed text-slate-300">
              LearnNova is a digital learning and Computer-Based Testing
              (CBT) platform designed to support accessible education
              delivery in African school environments.
            </p>

            <p className="mt-4 font-sga-body leading-relaxed text-slate-300">
              With support for offline learning and use in low-bandwidth
              settings, LearnNova helps schools and education professionals
              deliver structured learning and assessments even where
              reliable internet access is limited or unavailable.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {["Digital learning", "Offline learning", "CBT & assessments"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1.5 font-sga-body text-sm font-medium text-slate-200"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Learning and engagement features */}
        <div className="mt-16 border-t border-slate-700 pt-12 md:mt-20 md:pt-16">
          <div className="max-w-2xl">
            <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
              Learning & Engagement
            </p>

            <h3 className="mt-3 font-sga-heading text-2xl font-extrabold text-white md:text-3xl">
              Learning That Goes Beyond the Classroom
            </h3>

            <p className="mt-4 font-sga-body leading-relaxed text-slate-300">
              LearnNova supports digital learning and assessment experiences
              designed to make learning more accessible and flexible.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {learningFeatures.map((feature) => (
              <article
                key={feature.number}
                className="rounded-sga border border-slate-700 bg-slate-900/70 p-5 transition-colors hover:border-sga-emerald/50 sm:p-6"
              >
                <span className="font-sga-heading text-sm font-bold text-sga-emerald">
                  {feature.number}
                </span>

                <h4 className="mt-3 font-sga-heading text-lg font-bold text-white">
                  {feature.title}
                </h4>

                <p className="mt-3 font-sga-body text-sm leading-relaxed text-slate-400">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
