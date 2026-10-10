"use client";

import { useState } from "react";
import SuccessStoriesCarousel from "./SuccessStoriesCarousel";
import { successStoriesData } from "./successStoriesData";

export default function SuccessStoriesSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const stories = successStoriesData
    .filter((story) => story.published)
    .sort((a, b) => a.sortOrder - b.sortOrder);

    const story = stories[currentIndex];
    const totalStories = stories.length;

    if (totalStories === 0) {
        return null;
    };

    const goToPrevious = () => {
    setCurrentIndex((current) =>
        current === 0 ? totalStories - 1 : current - 1,
    );
    };

    const goToNext = () => {
    setCurrentIndex((current) =>
        current === totalStories - 1 ? 0 : current + 1,
    );
    };

    const goToStory = (index) => {
    setCurrentIndex(index);
    };

  return (
    <section className="bg-sga-navy py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
            Success Stories
          </p>

          <h2 className="font-sga-heading text-3xl font-extrabold leading-tight text-white md:text-4xl">
            Real-World School Growth in Practice
          </h2>

          <p className="mt-5 font-sga-body text-lg leading-relaxed text-slate-300">
            Explore examples of how school growth mentorship and consulting can
            translate practical frameworks into measurable outcomes for schools
            and sustainable opportunities for professionals.
          </p>

          <div
            aria-hidden="true"
            className="mt-7 h-1 w-16 rounded-full bg-sga-emerald"
            />
        </div>

        <div className="grid items-stretch gap-8 lg:grid-cols-[1.5fr_1fr]">
            {/* Testimonial Carousel */}
            <div className="relative overflow-hidden rounded-sga bg-white shadow-[0_12px_35px_-8px_rgba(0,0,0,0.2)]">
                <div
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-full w-1 bg-sga-emerald"
                />

                <div className="p-8 md:p-10">
                    <SuccessStoriesCarousel
                        stories={stories}
                        currentIndex={currentIndex}
                        onPrevious={goToPrevious}
                        onNext={goToNext}
                        onSelect={goToStory}
                    />
                </div>
            </div>

          {/* Result */}
          <div className="flex flex-col justify-between rounded-sga border border-white/10 bg-white/5 p-8 md:p-10">
            <div>
              <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
                Key Outcome
              </p>

                <div className="mt-6 flex items-center gap-3">
                    <div
                        aria-hidden="true"
                        className="h-px w-10 bg-sga-amber"
                    />

                    <span className="font-sga-body text-xs font-bold uppercase tracking-widest text-sga-amber">
                        Result
                    </span>
                </div>

                <h3 className="mt-6 font-sga-heading text-3xl font-extrabold leading-tight text-white md:text-4xl">
                {story.result}
                </h3>

                <p className="mt-5 max-w-lg font-sga-body text-base leading-relaxed text-slate-300">
                    Our case studies will showcase practical school-growth engagements,
                    measurable outcomes, and the opportunities available to professionals
                    who apply the SGA methodology.
                </p>
            </div>

            <div className="mt-10 flex gap-2">
              {successStoriesData.map((_, index) => (
                <span
                  key={index}
                  className={`h-2 rounded-full ${
                    index === 0
                      ? "w-8 bg-sga-amber"
                      : "w-2 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}