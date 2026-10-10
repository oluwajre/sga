"use client";

import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRightIcon, MessageIcon } from "../common/Icons";
import { useEffect, useRef, useState } from "react";
import { contactSchema } from "./ContactSchema";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const referralCode = searchParams.get("ref");

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const messageRef = useRef(null);

  useEffect(() => {
  if (successMessage || errorMessage) {
    messageRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
}, [successMessage, errorMessage]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data) {
  setSuccessMessage("");
  setErrorMessage("");

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        referralCode,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      setErrorMessage(
        result.message || "Unable to send your message. Please try again."
      );

      return;
    }

    setSuccessMessage(
      result.message || "Your message has been received successfully."
    );

    reset();
  } catch (error) {
    console.error("Contact form submission error:", error);

    setErrorMessage(
      "Something went wrong while sending your message. Please try again."
    );
  }
}

  return (
    <section className="bg-sga-off-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Intro */}
          <div className="lg:sticky lg:top-28">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sga-emerald/10 text-sga-emerald">
              <MessageIcon />
            </div>

            <p className="mt-6 font-sga-body text-sm font-bold uppercase tracking-[0.2em] text-sga-emerald">
              Send an Enquiry
            </p>

            <h2 className="mt-3 max-w-lg font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
              Tell us how we can help.
            </h2>

            <p className="mt-5 max-w-lg font-sga-body text-base leading-7 text-slate-600 md:text-lg">
              Have a question about a programme, school growth consulting,
              partnerships, or something else? Send us a message and the SGA
              team will get back to you.
            </p>

            <div className="mt-8 border-l-2 border-sga-emerald pl-5">
              <p className="font-sga-body text-sm font-semibold leading-6 text-sga-navy">
                You don&apos;t need to know exactly who to contact. Simply tell
                us what you need and we&apos;ll direct your enquiry
                appropriately.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-sga border border-slate-200 bg-white p-6 shadow-[0_12px_40px_-18px_rgba(10,25,47,0.18)] sm:p-8 md:p-10">
            <div className="mb-8 border-b border-slate-100 pb-6">
              <p className="font-sga-body text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Contact Form
              </p>

              <h3 className="mt-2 font-sga-heading text-2xl font-bold text-sga-navy">
                Start the conversation
              </h3>

              <p className="mt-2 font-sga-body text-sm leading-6 text-slate-500">
                Fill in your details below and we&apos;ll respond as soon as we
                can.
              </p>
            </div>

            {(successMessage || errorMessage) && (
                <div
                    ref={messageRef}
                    className={`rounded-sga border px-4 py-3 text-sm ${
                    successMessage
                        ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                        : "border-red-200 bg-red-50 text-red-700"
                    }`}
                    role="alert"
                >
                    {successMessage || errorMessage}
                </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="font-sga-body text-sm font-semibold text-sga-navy"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>

                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  {...register("name")}
                  placeholder="Your full name"
                  className={`mt-2 w-full rounded-sga border bg-white px-4 py-3.5 font-sga-body text-sm text-sga-navy outline-none transition placeholder:text-slate-400 focus:ring-2 ${
                    errors.name
                      ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                      : "border-slate-200 focus:border-sga-emerald focus:ring-sga-emerald/10"
                  }`}
                />

                {errors.name && (
                  <p className="mt-1.5 font-sga-body text-sm text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="font-sga-body text-sm font-semibold text-sga-navy"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>

                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  {...register("email")}
                  placeholder="you@example.com"
                  className={`mt-2 w-full rounded-sga border bg-white px-4 py-3.5 font-sga-body text-sm text-sga-navy outline-none transition placeholder:text-slate-400 focus:ring-2 ${
                    errors.email
                      ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                      : "border-slate-200 focus:border-sga-emerald focus:ring-sga-emerald/10"
                  }`}
                />

                {errors.email && (
                  <p className="mt-1.5 font-sga-body text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label
                  htmlFor="whatsapp"
                  className="font-sga-body text-sm font-semibold text-sga-navy"
                >
                  Phone / WhatsApp <span className="text-red-500">*</span>
                </label>

                <input
                  id="whatsapp"
                  type="tel"
                  autoComplete="tel"
                  {...register("whatsapp")}
                  placeholder="+234..."
                  className={`mt-2 w-full rounded-sga border bg-white px-4 py-3.5 font-sga-body text-sm text-sga-navy outline-none transition placeholder:text-slate-400 focus:ring-2 ${
                    errors.whatsapp
                      ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                      : "border-slate-200 focus:border-sga-emerald focus:ring-sga-emerald/10"
                  }`}
                />

                {errors.whatsapp && (
                  <p className="mt-1.5 font-sga-body text-sm text-red-600">
                    {errors.whatsapp.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="font-sga-body text-sm font-semibold text-sga-navy"
                >
                  How Can We Help? <span className="text-red-500">*</span>
                </label>

                <textarea
                  id="message"
                  rows={6}
                  {...register("message")}
                  placeholder="Tell us how we can help..."
                  className={`mt-2 w-full resize-y rounded-sga border bg-white px-4 py-3.5 font-sga-body text-sm leading-7 text-sga-navy outline-none transition placeholder:text-slate-400 focus:ring-2 ${
                    errors.message
                      ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                      : "border-slate-200 focus:border-sga-emerald focus:ring-sga-emerald/10"
                  }`}
                />

                {errors.message && (
                  <p className="mt-1.5 font-sga-body text-sm text-red-600">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-sga bg-sga-amber px-6 py-3.5 font-sga-body text-sm font-bold text-sga-navy transition-all duration-200 hover:-translate-y-0.5 hover:bg-sga-amber-dark hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <span
                      className="h-5 w-5 animate-spin rounded-full border-2 border-gray-100 border-t-transparent"
                      aria-hidden="true"
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  "Send Message"
                )}
                {!isSubmitting && <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}