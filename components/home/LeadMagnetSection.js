import LeadMagnetForm from "@/components/forms/LeadMagnetForm";

export default function LeadMagnetSection() {
  return (
    <section
      id="opportunity-report"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
              Free Opportunity Report
            </p>

            <h2 className="mt-3 font-sga-heading text-3xl font-extrabold tracking-tight text-sga-navy sm:text-4xl">
              The 2026 African Private School Growth & Consulting Opportunity Report
            </h2>

            <p className="mt-6 max-w-xl font-sga-body text-lg leading-8 text-sga-slate">
              Download our 32-page data report detailing private school revenue gaps, consultant retainer benchmarks, 
              and market expansion strategies across West and East Africa.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex gap-3">
                <span className="font-sga-heading font-bold text-sga-emerald">
                  ✓
                </span>
                <p className="font-sga-body text-base text-sga-slate">
                  Understand the private school growth market.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="font-sga-heading font-bold text-sga-emerald">
                  ✓
                </span>
                <p className="font-sga-body text-base text-sga-slate">
                  Identify consulting opportunities in the education sector.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="font-sga-heading font-bold text-sga-emerald">
                  ✓
                </span>
                <p className="font-sga-body text-base text-sga-slate">
                  See how school growth consulting can become a recurring
                  income practice.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-sga border border-slate-200 bg-sga-off-white p-6 shadow-[0_12px_35px_-8px_rgba(10,25,47,0.12)] sm:p-8">
            <div
                aria-hidden="true"
                className="absolute right-0 top-0 h-24 w-24 -translate-y-1/2 translate-x-1/2 rounded-full bg-sga-emerald/10"
            />

            <div className="relative">
                <div className="flex items-center gap-3">
                <div
                    aria-hidden="true"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-sga-emerald text-white"
                >
                    ↓
                </div>

                <div>
                    <h3 className="font-sga-heading text-2xl font-bold text-sga-navy">
                    Get the Free Report
                    </h3>

                    <p className="mt-1 font-sga-body text-sm leading-6 text-sga-slate">
                    Enter your details and we'll provide access to the report.
                    </p>
                </div>
                </div>

                <div className="mt-6">
                <LeadMagnetForm />
                </div>
            </div>
         </div>
        </div>
      </div>
    </section>
  );
}