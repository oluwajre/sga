export default function LearnNovaSection() {
  return (
    <section className="bg-sga-navy py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Visual */}
          <div className="order-2 lg:order-1">
            <div className="rounded-sga border border-slate-700 bg-slate-900 p-6 md:p-8">
              <div className="flex items-center justify-between border-b border-slate-700 pb-5">
                <div>
                  <p className="font-sga-body text-xs font-bold uppercase tracking-widest text-sga-emerald">
                    LearnNova
                  </p>

                  <p className="mt-2 font-sga-heading text-xl font-bold text-white">
                    Digital Learning & CBT
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sga-amber text-lg font-bold text-sga-navy">
                  →
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-lg bg-slate-800 p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-sga-body text-sm font-medium text-white">
                      Professional Learning
                    </span>

                    <span className="text-xs text-sga-emerald">
                      Available
                    </span>
                  </div>

                  <div className="mt-3 h-2 rounded-full bg-slate-700">
                    <div className="h-2 w-3/4 rounded-full bg-sga-emerald" />
                  </div>
                </div>

                <div className="rounded-lg bg-slate-800 p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-sga-body text-sm font-medium text-white">
                      School Courses
                    </span>

                    <span className="text-xs text-sga-amber">
                      Learning
                    </span>
                  </div>

                  <div className="mt-3 h-2 rounded-full bg-slate-700">
                    <div className="h-2 w-1/2 rounded-full bg-sga-amber" />
                  </div>
                </div>

                <div className="rounded-lg bg-slate-800 p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-sga-body text-sm font-medium text-white">
                      CBT & Assessments
                    </span>

                    <span className="text-xs text-slate-400">
                      Ready
                    </span>
                  </div>

                  <div className="mt-3 h-2 rounded-full bg-slate-700">
                    <div className="h-2 w-2/3 rounded-full bg-slate-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
              Technology Pillar 02
            </p>

            <h2 className="mt-4 font-sga-heading text-3xl font-extrabold leading-tight text-white md:text-4xl">
              LearnNova
            </h2>

            <p className="mt-5 font-sga-body text-lg leading-relaxed text-slate-300">
              A low-bandwidth, offline-first digital learning and CBT platform
              designed for accessible education delivery.
            </p>

            <p className="mt-4 font-sga-body leading-relaxed text-slate-300">
              LearnNova helps schools and education professionals deliver
              structured learning and assessments through a digital environment
              designed to work in contexts where reliable internet access can
              be a challenge.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-700 p-5">
                <h3 className="font-sga-heading font-bold text-white">
                  Learn
                </h3>

                <p className="mt-2 font-sga-body text-sm leading-relaxed text-slate-400">
                  Access structured digital learning experiences for continuous
                  development.
                </p>
              </div>

              <div className="rounded-lg border border-slate-700 p-5">
                <h3 className="font-sga-heading font-bold text-white">
                  Assess
                </h3>

                <p className="mt-2 font-sga-body text-sm leading-relaxed text-slate-400">
                  Support structured assessments and computer-based testing
                  within the learning environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}