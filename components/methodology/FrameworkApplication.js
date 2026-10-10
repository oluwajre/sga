const applications = [
  {
    challenge: "Stagnant Enrolment",
    response:
      "Diagnose the causes of weak enrolment, evaluate the admissions and parent-conversion process, and strategize practical initiatives that can improve visibility, acquisition, and retention.",
    outcome: "A clearer and more structured approach to enrolment growth.",
  },
  {
    challenge: "Revenue & Fee-Collection Pressure",
    response:
      "Evaluate revenue performance, identify fee-collection and operational gaps, and implement practical systems for monitoring income, outstanding fees, and financial performance.",
    outcome: "Stronger revenue controls and improved financial visibility.",
  },
  {
    challenge: "Manual School Operations",
    response:
      "Evaluate existing processes, strategize improvements, and implement structured workflows and digital tools that can reduce unnecessary manual work and improve coordination.",
    outcome: "More efficient operations and better use of school resources.",
  },
  {
    challenge: "Weak Execution",
    response:
      "Turn strategic recommendations into clear implementation plans, establish responsibilities and key performance indicators, and govern progress through continuous monitoring.",
    outcome: "Greater accountability and more consistent implementation.",
  },
  {
    challenge: "Limited Growth Capacity",
    response:
      "Evaluate the school's current systems, identify scalable approaches, and navigate long-term growth by strengthening governance, processes, and performance management.",
    outcome: "A stronger foundation for sustainable growth and expansion.",
  },
  {
    challenge: "Unclear School Direction",
    response:
      "Diagnose the school's current position, evaluate its priorities and performance, and strategize a practical roadmap that connects educational, operational, and commercial objectives.",
    outcome: "Clearer strategic direction and better-informed decisions.",
  },
];

export default function FrameworkApplication() {
  return (
    <section className="bg-sga-off-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
            Practical Application
          </p>

          <h2 className="font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
            Turning Common School Challenges Into Growth Opportunities.
          </h2>

          <p className="mt-5 font-sga-body text-lg leading-relaxed text-sga-slate">
            The SGA 6-Stage Growth Framework™ helps professionals approach real
            school challenges with structure, clarity, practical action, and
            continuous performance management.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {applications.map((application) => (
            <article
              key={application.challenge}
              className="rounded-sga bg-white p-7 shadow-[0_4px_20px_-2px_rgba(10,25,47,0.08)]"
            >
              <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
                The Challenge
              </p>

              <h3 className="mt-3 font-sga-heading text-xl font-bold text-sga-navy">
                {application.challenge}
              </h3>

              <div className="mt-6 border-t border-slate-200 pt-5">
                <p className="font-sga-body text-sm font-bold uppercase tracking-wide text-sga-slate">
                  The SGA Approach
                </p>

                <p className="mt-2 font-sga-body text-base leading-relaxed text-sga-slate">
                  {application.response}
                </p>
              </div>

              <div className="mt-6 rounded-sga bg-sga-off-white p-4">
                <p className="font-sga-body text-sm font-bold uppercase tracking-wide text-sga-navy">
                  Intended Improvement
                </p>

                <p className="mt-2 font-sga-body text-sm leading-relaxed text-sga-slate">
                  {application.outcome}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}