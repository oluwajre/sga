import ProblemCard from "./ProblemCard";
import { problems } from "./problemData";

export default function ProblemSection() {
  return (
    <section className="bg-sga-off-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section introduction */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
            The Market Reality
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl font-sga-heading text-3xl font-extrabold leading-[1.15] tracking-tight text-sga-navy sm:text-4xl lg:text-5xl">
            Private Schools in Africa Are Struggling. They Need Growth Experts, Not
            Generalists.
          </h2>

          <p className="mt-6 font-sga-body text-lg leading-8 text-sga-slate">
            School owners need practical support that improves enrolment,
            strengthens revenue, reduces operational friction, and builds
            sustainable growth.
          </p>
        </div>

        {/* Problem cards */}
        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-2 lg:gap-7">
          {problems.map((problem) => (
            <ProblemCard
              key={problem.number}
              number={problem.number}
              title={problem.title}
              reality={problem.reality}
              opportunity={problem.opportunity ?? null}
            />
          ))}
        </div>
      </div>
    </section>
  );
}