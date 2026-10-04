import Image from 'next/image';
import React from 'react'


export default function AboutHero() {
    return (
        <section className="relative overflow-hidden bg-sga-navy py-16 md:py-24 lg:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

                    {/* Text */}
                    <div className="max-w-3xl">
                        <p className="mb-5 font-sga-body text-sm font-bold uppercase tracking-[0.2em] text-sga-emerald">
                        About School Growth Academy
                        </p>

                        <h1 className="font-sga-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
                        Building Africa&apos;s Network of Certified School Growth Professionals.
                        </h1>

                        <p className="mt-6 max-w-2xl font-sga-body text-lg leading-relaxed text-slate-300 md:text-xl">
                        School Growth Academy empowers ambitious graduates, professionals,
                        educators, consultants, and school leaders with practical frameworks,
                        business expertise, and EdTech tools to build sustainable school-growth
                        practices while transforming African education.
                        </p>

                        {/* Small positioning statement */}
                        <div className="mt-8 flex items-center gap-4">
                            <span className="h-px w-10 bg-sga-emerald" />

                            <p className="font-sga-body text-sm font-medium text-slate-400">
                                Education • Business • Technology • Growth
                            </p>
                        </div>
                    </div>

                    {/* Visual */}
                    <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
                        {/* Decorative glow */}
                        <div
                        aria-hidden="true"
                        className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-sga-emerald/10 blur-2xl"
                        />

                        {/* Image frame */}
                        <div className="relative overflow-hidden rounded-sga border border-white/10 bg-white/5 p-2">
                            <div className="relative aspect-4/3 overflow-hidden rounded-sga">
                                <Image
                                src="/images/about/about-hero.jpg"
                                alt="Education professionals collaborating on school growth and development"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                                />

                                {/* Image overlay */}
                                <div className="absolute inset-0 bg-linear-to-tr from-sga-navy/50 via-transparent to-transparent" />
                            </div>
                        </div>

                        {/* Small brand detail */}
                        <div className="absolute -bottom-5 -left-5 hidden rounded-sga bg-sga-amber px-5 py-4 shadow-xl sm:block">
                        <p className="font-sga-heading text-xl font-extrabold text-sga-navy">
                            25+
                        </p>
                        <p className="font-sga-body text-xs font-semibold uppercase tracking-wider text-sga-navy/70">
                            Years of Experience
                        </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}