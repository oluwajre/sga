import CTASection from "@/components/common/CTASection";
import EducationalBusinessConsulting from "@/components/programmes/EducationalBusinessConsulting";
import ExecutiveMasterclass from "@/components/programmes/ExecutiveMasterclass";
import ProgrammeComparison from "@/components/programmes/ProgrammeComparison";
import SchoolGrowthMentorship from "@/components/programmes/SchoolGrowthMentorship";
import Image from "next/image";

export default function ProgrammesPage() {
  return (
    <main>
        <section className="relative overflow-hidden bg-sga-navy py-16 md:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                
                {/* Content */}
                <div className="relative z-10 max-w-2xl">
                    <p className="font-sga-body text-sm font-bold uppercase tracking-[0.2em] text-sga-emerald">
                    SGA Programmes
                    </p>

                    <h1 className="mt-5 font-sga-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
                    Build Your Expertise in School Growth and Educational Consulting.
                    </h1>

                    <p className="mt-6 max-w-xl font-sga-body text-lg leading-relaxed text-slate-300 md:text-xl">
                    Choose from three professional pathways designed to help you develop
                    practical school-growth expertise, consulting capability, and advanced
                    strategic skills.
                    </p>

                    {/* Programme pathway */}
                    <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                    {["Mentorship", "Consulting", "Masterclass"].map((item, index) => (
                        <div key={item} className="flex items-center gap-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-sga-emerald/40 font-sga-body text-xs font-bold text-sga-emerald">
                            {index + 1}
                        </span>

                        <span className="font-sga-body text-sm font-medium text-slate-300">
                            {item}
                        </span>
                        </div>
                    ))}
                    </div>
                </div>

                {/* Image */}
                <div className="relative">
                    <div className="relative aspect-4/3 overflow-hidden rounded-sga">
                    <Image
                        src="/images/programmes/programmes-hero.jpg"
                        alt="Professionals participating in a school growth training programme"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-linear-to-tr from-sga-navy/40 via-transparent to-transparent" />
                    </div>

                    {/* Small visual accent */}
                    <div className="absolute -bottom-3 -left-3 h-16 w-16 rounded-sga border border-sga-emerald/30 bg-sga-emerald/10" />
                </div>

                </div>
            </div>
        </section>

      <SchoolGrowthMentorship />
      <EducationalBusinessConsulting />
      <ExecutiveMasterclass />
      <ProgrammeComparison />
      <CTASection
        eyebrow="Choose Your Path"
        title="Ready to Build Your School Growth Practice?"
        description="Whether you are starting with school growth mentorship, advancing into educational business consulting, or pursuing executive-level strategy, there is a pathway designed for your next stage."
        primaryText="Apply for the Next Cohort"
        primaryHref="/apply"
        secondaryText="Explore the Opportunity"
        secondaryHref="/opportunity"
        />
    </main>
  );
}