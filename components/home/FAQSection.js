"use client";

import { useState } from "react";
import { faqData } from "./faqData";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  function toggleFAQ(index) {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  }

  return (
    <section className="bg-sga-off-white py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
            Frequently Asked Questions
          </p>

          <h2 className="font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
            Questions You May Have
          </h2>

          <p className="mx-auto mt-5 max-w-2xl font-sga-body text-lg leading-relaxed text-sga-slate">
            Find answers to common questions about the School Growth Academy
            programme, certification, and consulting pathway.
          </p>
        </div>

        {/* FAQ list */}
        <div className="divide-y divide-slate-200 rounded-sga bg-white shadow-[0_4px_20px_-2px_rgba(10,25,47,0.08)]">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
                <div
                    key={item.question}
                    className={`px-6 md:px-8 transition-colors duration-200 ${
                        isOpen ? "bg-sga-emerald/3" : ""
                    }`}
                >
                    <button
                        type="button"
                        id={`faq-question-${index}`}
                        onClick={() => toggleFAQ(index)}
                        className="group flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sga-emerald focus-visible:ring-offset-2"
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${index}`}
                    >
                        <span className="font-sga-heading text-lg font-bold text-sga-navy transition-colors duration-200 group-hover:text-sga-emerald">
                            {item.question}
                        </span>

                        <span
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
                                isOpen
                                ? "rotate-0 bg-sga-emerald text-white"
                                : "bg-sga-emerald/10 text-sga-emerald group-hover:bg-sga-emerald group-hover:text-white"
                            }`}
                            aria-hidden="true"
                        >
                            {isOpen ? "−" : "+"}
                        </span>
                    </button>

                    {isOpen && (
                    <div
                        id={`faq-answer-${index}`}
                        className="pb-6 pr-12"
                        role="region"
                        aria-labelledby={`faq-question-${index}`}
                    >
                        <p className="font-sga-body text-base leading-relaxed text-sga-slate">
                        {item.answer}
                        </p>
                    </div>
                    )}
                </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}