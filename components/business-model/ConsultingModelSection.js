export default function ConsultingModelSection() {
  const stages = [
    {
      number: "01",
      title: "Identify a Need",
      description:
        "Understand the school's challenges, priorities, and growth objectives before recommending a solution.",
    },
    {
      number: "02",
      title: "Define Your Offer",
      description:
        "Package your expertise into a clear service that addresses a specific school growth problem.",
    },
    {
      number: "03",
      title: "Deliver the Solution",
      description:
        "Use structured frameworks, practical tools, and professional expertise to help the school address the identified challenge.",
    },
    {
      number: "04",
      title: "Demonstrate Value",
      description:
        "Track progress, communicate outcomes, and help the client understand the value created through the engagement.",
    },
    {
      number: "05",
      title: "Build the Relationship",
      description:
        "Strong delivery can create opportunities for continued advisory support, additional projects, or referrals.",
    },
  ];

  return (
    <section className="bg-sga-off-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
            The Consulting Model
          </p>

          <h2 className="mt-4 font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
            Build Revenue by Solving Real School Growth Problems.
          </h2>

          <p className="mt-6 font-sga-body text-lg leading-relaxed text-sga-slate">
            A sustainable consulting practice begins with understanding what
            schools genuinely need. SGA helps you connect your expertise to
            specific problems, deliver measurable value, and develop
            relationships that can grow into recurring engagements.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {stages.map((stage) => (
            <article
              key={stage.number}
              className="rounded-sga border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_-4px_rgba(10,25,47,0.10)] md:p-7"
            >
              <span className="font-sga-heading text-3xl font-extrabold text-sga-emerald/30">
                {stage.number}
              </span>

              <h3 className="mt-4 font-sga-heading text-xl font-bold text-sga-navy">
                {stage.title}
              </h3>

              <p className="mt-3 font-sga-body text-sm leading-relaxed text-sga-slate">
                {stage.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-sga bg-sga-navy p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
                Revenue Model
              </p>

              <h3 className="mt-3 font-sga-heading text-2xl font-extrabold leading-tight text-white md:text-3xl">
                Multiple Ways to Monetise Your School Growth Expertise.
              </h3>

              <p className="mt-4 font-sga-body text-base leading-relaxed text-slate-300">
                Your practice can combine project-based services, recurring
                advisory relationships, technology revenue, and professional
                workshops.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-sga border border-white/10 bg-white/5 p-5">
                <p className="font-sga-heading text-xl font-bold text-white">
                  ₦50k–₦150k
                </p>

                <p className="mt-1 font-sga-body text-sm text-slate-300">
                  Paid school diagnostics
                </p>
              </div>

              <div className="rounded-sga border border-white/10 bg-white/5 p-5">
                <p className="font-sga-heading text-xl font-bold text-white">
                  ₦100k–₦300k
                </p>

                <p className="mt-1 font-sga-body text-sm text-slate-300">
                  Monthly consulting retainers
                </p>
              </div>

              <div className="rounded-sga border border-white/10 bg-white/5 p-5">
                <p className="font-sga-heading text-xl font-bold text-white">
                  20%–25%
                </p>

                <p className="mt-1 font-sga-body text-sm text-slate-300">
                  Recurring software commissions
                </p>
              </div>

              <div className="rounded-sga border border-white/10 bg-white/5 p-5">
                <p className="font-sga-heading text-xl font-bold text-white">
                  Workshops
                </p>

                <p className="mt-1 font-sga-body text-sm text-slate-300">
                  Staff & leadership training
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-white/10 pt-6">
            <p className="font-sga-body text-sm leading-relaxed text-slate-400">
              Software commissions are based on termly school subscriptions
              priced at ₦99,999–₦149,950.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}