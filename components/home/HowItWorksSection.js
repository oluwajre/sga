import HowItWorksStep from "./HowItWorksStep";
import { howItWorksData } from "./howItWorksData";

export default function HowItWorksSection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
            How It Works
          </p>

          <h2 className="font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
            From Learning to Building a Profitable Consulting Practice
          </h2>

          <p className="mt-5 font-sga-body text-lg leading-relaxed text-sga-slate">
            Follow a practical pathway designed to equip you with the
            knowledge, tools, certification, and confidence to help schools
            grow.
          </p>

            <div
                aria-hidden="true"
                className="mx-auto mt-7 h-1 w-16 rounded-full bg-sga-emerald"
            />
        </div>

        {/* Steps */}
        <div className="relative">
            {/* Journey line */}
            <div
                aria-hidden="true"
                className="absolute left-0 right-0 top-6 hidden h-px bg-sga-emerald/20 lg:block"
            />

            <div className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                {howItWorksData.map((step) => (
                    <HowItWorksStep
                    key={step.number}
                    number={step.number}
                    title={step.title}
                    description={step.description}
                    />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}