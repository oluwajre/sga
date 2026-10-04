"use client";

import { useEffect, useRef, useState } from "react";

export default function GrowthChart() {
  const chartRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = chartRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={chartRef} className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-2">
      <div className="flex items-end justify-between gap-3">
        <div className="flex h-32 flex-1 items-end gap-2">
          <div
            className={`h-[35%] w-full rounded-t-md bg-sga-emerald/40 ${
              isVisible ? "animate-grow-bar" : "opacity-0"
            }`}
          />

          <div
            className={`h-[50%] w-full rounded-t-md bg-sga-emerald/60 ${
              isVisible
                ? "animate-grow-bar-delay-1"
                : "opacity-0"
            }`}
          />

          <div
            className={`h-[68%] w-full rounded-t-md bg-sga-emerald/80 ${
              isVisible
                ? "animate-grow-bar-delay-2"
                : "opacity-0"
            }`}
          />

          <div
            className={`h-[85%] w-full rounded-t-md bg-sga-emerald ${
              isVisible
                ? "animate-grow-bar-delay-3"
                : "opacity-0"
            }`}
          />
        </div>

        <div
        className={`flex h-32 w-16 shrink-0 items-center justify-center ${
            isVisible ? "animate-growth-arrow" : "opacity-0"
        }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-10 w-10 text-sga-amber"
            aria-hidden="true"
          >
            <path d="M5 19 19 5" />
            <path d="M9 5h10v10" />
          </svg>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="font-sga-body text-xs font-medium text-slate-400">
          School Performance
        </span>

        <span className="font-sga-body text-xs font-bold text-sga-emerald-light">
          Growth in Action
        </span>
      </div>
    </div>
  );
}