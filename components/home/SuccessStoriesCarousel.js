"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function SuccessStoriesCarousel({
  stories,
  currentIndex,
  onPrevious,
  onNext,
  onSelect,
}) {
  const story = stories[currentIndex];
  const totalStories = stories.length;

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(false);

  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

    useEffect(() => {
        setIsVideoPlaying(false);
        setIsVideoLoading(false);
    }, [currentIndex]);

    const handleTouchStart = (event) => {
        touchStartX.current = event.touches[0].clientX;
        touchStartY.current = event.touches[0].clientY;
    };  

    const handleTouchEnd = (event) => {
    if (touchStartX.current === null || touchStartY.current === null) {
        return;
    }

    const touchEndX = event.changedTouches[0].clientX;
    const touchEndY = event.changedTouches[0].clientY;

    const deltaX = touchEndX - touchStartX.current;
    const deltaY = touchEndY - touchStartY.current;

    touchStartX.current = null;
    touchStartY.current = null;

    // Ignore mostly vertical swipes.
    if (Math.abs(deltaX) <= Math.abs(deltaY)) {
        return;
    }

    // Ignore very small movements.
    if (Math.abs(deltaX) < 50) {
        return;
    }

    if (deltaX < 0) {
        onNext();
    } else {
        onPrevious();
    }
    };

  return (
    <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Success stories"
    >
        <div 
            key={currentIndex}
            className="min-h-80 touch-pan-y animate-[successStoryIn_300ms_ease-out]"
            role="group"
            aria-roledescription="slide"
            aria-label={`Success story ${currentIndex + 1} of ${totalStories}`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
        {story.type === "text" && (
          <div>
            <div
              aria-hidden="true"
              className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-sga-amber/10 font-serif text-3xl text-sga-amber"
            >
              “
            </div>

            <blockquote className="font-sga-heading text-2xl font-bold leading-relaxed text-sga-navy md:text-3xl">
              {story.quote}
            </blockquote>

            <div className="mt-8 flex items-center gap-4 border-t border-slate-200 pt-6">
              <div
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sga-navy font-sga-heading text-sm font-bold text-sga-amber"
              >
                {story.name?.charAt(0)}
              </div>

              <div>
                <p className="font-sga-heading font-bold text-sga-navy">
                  {story.name}
                </p>

                <p className="mt-1 font-sga-body text-sm text-sga-slate">
                  {story.role}
                </p>
              </div>
            </div>
          </div>
        )}

        {story.type === "video" && (
  <div
    className={`relative overflow-hidden rounded-sga bg-sga-navy ${
        isVideoPlaying ? "touch-auto" : "touch-pan-y"
    }`}
    >
    <div className="relative aspect-video">
      {isVideoPlaying && story.videoId !== "VIDEO_ID" ? (
        <>
            <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${story.videoId}?autoplay=1`}
            title={`Video testimonial from ${story.name}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            onLoad={() => setIsVideoLoading(false)}
            />

            {isVideoLoading && (
  <div
    className="absolute inset-0 flex items-center justify-center bg-sga-navy/80"
    aria-live="polite"
    aria-label="Loading video"
  >
    <div
      aria-hidden="true"
      className="h-10 w-10 animate-spin rounded-full border-4 border-white/20 border-t-sga-amber"
    />
  </div>
)}
        </> 
      ) : (
        <>
          {story.thumbnail ? (
            <Image
              src={story.thumbnail}
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          ) : (
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-sga-navy"
            />
          )}

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-sga-navy/45"
          />

          {story.videoId === "VIDEO_ID" ? (
            <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
              <div>
                <div
                  aria-hidden="true"
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-sga-amber"
                >
                  ▶
                </div>

                <p className="mt-4 font-sga-heading text-sm font-bold text-white">
                  Video testimonial coming soon
                </p>
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => {
                    setIsVideoLoading(true);
                    setIsVideoPlaying(true);
                }}
              aria-label={`Play video testimonial from ${story.name}`}
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-sga-amber text-sga-navy shadow-xl transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sga-amber focus:ring-offset-2 focus:ring-offset-sga-navy motion-reduce:transition-none motion-reduce:hover:scale-100"
            >
              <span aria-hidden="true" className="ml-1 text-lg">
                ▶
              </span>
            </button>
          )}
        </>
      )}
    </div>

    <div className="p-5">
      <p className="font-sga-heading text-lg font-bold text-white">
        {story.name}
      </p>

      <p className="mt-1 font-sga-body text-sm text-slate-300">
        {story.role}
      </p>
    </div>
  </div>
)}
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-5">
        <p className="font-sga-body text-xs font-bold uppercase tracking-widest text-sga-slate">
          Featured Case Study
        </p>

        <p
          aria-live="polite"
          className="font-sga-heading text-sm font-bold text-sga-emerald"
        >
          {String(currentIndex + 1).padStart(2, "0")} /{" "}
          {String(totalStories).padStart(2, "0")}
        </p>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div className="flex gap-2">
          {stories.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect(index)}
              aria-label={`Go to success story ${index + 1}`}
              aria-current={index === currentIndex ? "true" : undefined}
              className={`h-2 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "w-8 bg-sga-amber"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={onPrevious}
            aria-label="Previous success story"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-sga-navy transition-colors duration-200 hover:border-sga-emerald hover:bg-sga-emerald hover:text-white focus:outline-none focus:ring-2 focus:ring-sga-emerald focus:ring-offset-2"
          >
            <span aria-hidden="true">←</span>
          </button>

          <button
            type="button"
            onClick={onNext}
            aria-label="Next success story"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-sga-navy transition-colors duration-200 hover:border-sga-emerald hover:bg-sga-emerald hover:text-white focus:outline-none focus:ring-2 focus:ring-sga-emerald focus:ring-offset-2"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}