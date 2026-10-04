export default function EdMetricsSection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <div>
            <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
              Technology Pillar 01
            </p>

            <h2 className="mt-4 font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
              EdMetrics AI
            </h2>

            <p className="mt-5 font-sga-body text-lg leading-relaxed text-sga-slate">
              A school performance analytics engine designed to turn education
              data into clearer insights.
            </p>

            <p className="mt-4 font-sga-body leading-relaxed text-sga-slate">
              EdMetrics AI helps schools and school growth professionals
              organize and interpret performance information across areas such
              as enrolment, student retention, revenue, and learning
              performance—supporting more informed decisions and targeted
              improvement efforts.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Bring key school performance information into clearer view",
                "Identify patterns, gaps, and areas requiring attention",
                "Support data-informed school growth decisions",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sga-emerald text-xs font-bold text-white">
                    ✓
                  </span>

                  <p className="font-sga-body text-sga-slate">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="rounded-sga bg-sga-off-white p-6 md:p-8">
            <div className="rounded-sga bg-white p-6 shadow-[0_4px_20px_-2px_rgba(10,25,47,0.08)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-sga-body text-sm text-sga-slate">
                    School Analytics
                  </p>

                  <p className="mt-1 font-sga-heading text-2xl font-extrabold text-sga-navy">
                    Performance Overview
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sga-emerald/10 text-sga-emerald">
                  ↗
                </div>
              </div>

              <div className="mt-8 flex h-40 items-end gap-3">
                {[42, 55, 48, 64, 58, 72, 68].map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-md bg-sga-emerald/20"
                    style={{ height: `${height}%` }}
                  >
                    <div
                      className="h-full rounded-t-md bg-sga-emerald"
                      style={{ height: `${height * 0.7}%` }}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-md bg-sga-off-white p-3">
                  <p className="text-xs text-sga-slate">Enrolment</p>
                  <p className="mt-1 font-sga-heading font-bold text-sga-navy">
                    Trends
                  </p>
                </div>

                <div className="rounded-md bg-sga-off-white p-3">
                  <p className="text-xs text-sga-slate">Retention</p>
                  <p className="mt-1 font-sga-heading font-bold text-sga-navy">
                    Insights
                  </p>
                </div>

                <div className="rounded-md bg-sga-off-white p-3">
                  <p className="text-xs text-sga-slate">Performance</p>
                  <p className="mt-1 font-sga-heading font-bold text-sga-navy">
                    Analysis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}