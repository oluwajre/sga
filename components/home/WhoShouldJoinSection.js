import { ConsultantIcon, GraduateIcon, LeaderIcon, SchoolIcon, TechnologyIcon } from "../common/Icons";
import WhoShouldJoinCard from "./WhoShouldJoinCard";
import { whoShouldJoinData } from "./whoShouldJoinData";

export default function WhoShouldJoinSection() {
  return (
    <section className="bg-sga-off-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          {/* Audience indicator */}
          <div
            aria-hidden="true"
            className="mb-5 flex justify-center"
          >
            <div className="flex -space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-sga-off-white bg-sga-emerald text-sm font-bold text-white">
                <GraduateIcon className="h-5 w-5 text-white" />
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-sga-off-white bg-sga-navy text-sm font-bold text-white">
                <SchoolIcon className="h-5 w-5 text-white" />
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-sga-off-white bg-sga-emerald text-sm font-bold text-white">
                <ConsultantIcon className="h-5 w-5 text-white" />
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-sga-off-white bg-sga-navy text-sm font-bold text-white">
                <TechnologyIcon className="h-5 w-5 text-white" />
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-sga-off-white bg-sga-emerald text-sm font-bold text-white">
                <LeaderIcon className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>

          <p className="mb-3 font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
            Who Should Join
          </p>

          <h2 className="font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
            Built for Professionals Ready to Build in the Education Sector
          </h2>

          <p className="mt-5 font-sga-body text-lg leading-relaxed text-sga-slate">
            Whether you are starting a new career path, already work in education,
            or have experience in consulting, technology, marketing, or sales, SGA
            gives you the frameworks and tools to create practical value for private
            schools.
          </p>
        </div>

        {/* Audience cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whoShouldJoinData.map((item) => (
            <WhoShouldJoinCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}