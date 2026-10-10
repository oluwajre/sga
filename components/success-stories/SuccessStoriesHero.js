import Image from "next/image";

export default function SuccessStoriesHero() {
  return (
    <section className="relative overflow-hidden bg-sga-navy py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          
          {/* Content */}
          <div className="relative z-10 max-w-2xl">
            <p className="font-sga-body text-sm font-bold uppercase tracking-[0.2em] text-sga-emerald">
              Success Stories
            </p>

            <h1 className="mt-5 font-sga-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
              Turning Knowledge Into Meaningful Impact.
            </h1>

            <p className="mt-6 max-w-xl font-sga-body text-lg leading-relaxed text-slate-300 md:text-xl">
              The real measure of learning is what people are able to do with it.
              Explore the kinds of professional growth, practical application,
              and value creation that the SGA approach is designed to support.
            </p>
          </div>

          {/* Success Stories Visual */}
          <div className="relative">
            <div className="relative aspect-4/3 overflow-hidden rounded-sga">
              <Image
                src="/images/success-stories/success-stories-hero.jpg"
                alt="Education professionals reviewing the results of a school growth initiative"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-tr from-sga-navy/30 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-3 -left-3 h-16 w-16 rounded-sga border border-sga-emerald/30 bg-sga-emerald/10" />
          </div>

        </div>
      </div>
    </section>
  );
}