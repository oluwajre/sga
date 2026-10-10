import CTASection from "@/components/common/CTASection";
import { journeyStages } from "@/components/common/journeyStages";
import WhoShouldJoinSection from "@/components/home/WhoShouldJoinSection";
import EducationalBusinessConsulting from "@/components/programmes/EducationalBusinessConsulting";
import ExecutiveMasterclass from "@/components/programmes/ExecutiveMasterclass";
import OpportunityDiscoveryDay from "@/components/programmes/OpportunityDiscoveryDay";
import ProgrammeComparison from "@/components/programmes/ProgrammeComparison";
import SchoolGrowthMentorship from "@/components/programmes/SchoolGrowthMentorship";
import Image from "next/image";

export default function ProgrammesPage() {

  return (
    <main>
      {/* Programme Hero */}
      <section className="relative overflow-hidden bg-sga-navy py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Content */}
            <div className="relative z-10 max-w-2xl">
              <p className="font-sga-body text-sm font-bold uppercase tracking-[0.2em] text-sga-emerald">
                SGA Professional Programmes
              </p>

              <h1 className="mt-5 font-sga-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
                Build a Professional Career in School Growth Mentorship &
                Educational Business Consulting
              </h1>

              <p className="mt-6 max-w-xl font-sga-body text-base leading-8 text-slate-300 md:text-lg">
                Develop the practical expertise, mentorship methodologies,
                consulting skills, and strategic capabilities needed to help
                schools grow, create measurable business impact, and build a
                rewarding professional practice.
              </p>

              <p className="mt-4 max-w-xl font-sga-body text-base leading-8 text-slate-300">
                Through progressive professional pathways, NoVance equips you
                with school-growth frameworks, mentorship and consulting
                skills, AI-powered tools, business-growth strategies, and
                practical experience to confidently support school owners and
                leaders.
              </p>

              {/* Professional journey */}
              <div className="mt-8">
                <p className="mb-4 font-sga-body text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  Your Professional Journey
                </p>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
                  {journeyStages.map((stage, index) => (
                    <div key={stage} className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-sga-emerald/50 font-sga-body text-xs font-bold text-sga-emerald">
                          {index + 1}
                        </span>

                        <span className="font-sga-body text-sm font-medium text-slate-200">
                          {stage}
                        </span>
                      </div>

                      {index < journeyStages.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="hidden text-sga-emerald sm:inline"
                        >
                          →
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sga">
                <Image
                  src="/images/programmes/programmes-hero.jpg"
                  alt="Professionals participating in a school growth training programme"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-tr from-sga-navy/40 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-3 -left-3 h-16 w-16 rounded-sga border border-sga-emerald/30 bg-sga-emerald/10" />
            </div>
          </div>
        </div>
      </section>
    
        <WhoShouldJoinSection />
        <OpportunityDiscoveryDay />
      <SchoolGrowthMentorship />
      <EducationalBusinessConsulting />
      <ExecutiveMasterclass />
      <ProgrammeComparison />

      <CTASection
        eyebrow="Choose Your Path"
        title="Ready to Build Your School Growth Practice?"
        description="Start your journey toward developing school-growth expertise, practical consulting skills, and the capability to build a professional practice."
        primaryText="Apply for the Next Cohort"
        primaryHref="/apply"
        secondaryText="Explore the Opportunity"
        secondaryHref="/opportunity"
      />
    </main>
  );
}