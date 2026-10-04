"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadMagnetSchema } from "./leadMagnetSchema";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function LeadMagnetForm() {
  const searchParams = useSearchParams();
  const referralCode = searchParams.get("ref");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(leadMagnetSchema),
  });

  const [serverError, setServerError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if(!isSuccess) return;

    const timer = setTimeout(() => {
        setIsSuccess(false);
        reset();
    }, 7000);

    return () => clearTimeout(timer);
  }, [isSuccess, reset]);

    async function onSubmit(data) {
        setServerError("");
        setIsSuccess(false);

        try {
            const response = await fetch("/api/lead-magnet", {
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
            setServerError(
                result.message || "Something went wrong. Please try again."
            );

            return;
            }

            setIsSuccess(true);
            console.log(result);

            const downloadResponse = await fetch("/api/lead-magnet/download");

            if (!downloadResponse.ok) {
              throw new Error("Unable to download the report.");
            }

            const blob = await downloadResponse.blob();

            const downloadUrl = window.URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = downloadUrl;
            link.download = "sga-school-growth-report.pdf";

            document.body.appendChild(link);
            link.click();
            link.remove();

            window.URL.revokeObjectURL(downloadUrl);
          } catch (error) {
              console.error(error);

              setServerError("Unable to submit the form. Please try again.");
          }
      }

    if (isSuccess) {
        return (
            <div className="rounded-sga bg-white p-8 text-center shadow-[0_4px_20px_-2px_rgba(10,25,47,0.08)] md:p-10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sga-emerald text-2xl font-bold text-white">
                ✓
            </div>

            <h3 className="mt-5 font-sga-heading text-2xl font-extrabold text-sga-navy">
                You're in!
            </h3>

            <p className="mx-auto mt-3 max-w-md font-sga-body text-base leading-relaxed text-sga-slate">
                Your request for the School Growth Opportunity Report has been
                received successfully.
            </p>

            <p className="mt-4 font-sga-body text-sm leading-relaxed text-sga-slate">
                We'll be in touch with the next steps.
            </p>
            </div>
        );
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
          {...register("name")}
          className="mt-2 w-full rounded-sga border border-slate-200 px-4 py-3 font-sga-body text-sga-slate outline-none focus:border-sga-emerald"
          placeholder="Enter your full name"
        />

        {errors.name && (
          <p className="mt-1 font-sga-body text-sm text-red-600">
            {errors.name.message}
          </p>
        )}
      </div>

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
          {...register("email")}
          className="mt-2 w-full rounded-sga border border-slate-200 px-4 py-3 font-sga-body text-sga-slate outline-none focus:border-sga-emerald"
          placeholder="you@example.com"
        />

        {errors.email && (
          <p className="mt-1 font-sga-body text-sm text-red-600">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="whatsapp"
          className="font-sga-body text-sm font-semibold text-sga-navy"
        >
          WhatsApp Number <span className="text-red-500">*</span>
        </label>

        <input
          id="whatsapp"
          type="tel"
          {...register("whatsapp")}
          className="mt-2 w-full rounded-sga border border-slate-200 px-4 py-3 font-sga-body text-sga-slate outline-none focus:border-sga-emerald"
          placeholder="e.g. +234 801 234 5678"
        />

        {errors.whatsapp && (
          <p className="mt-1 font-sga-body text-sm text-red-600">
            {errors.whatsapp.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="profession"
          className="font-sga-body text-sm font-semibold text-sga-navy"
        >
          Current Profession / City <span className="text-red-500">*</span>
        </label>

        <input
          id="profession"
          type="text"
          {...register("profession")}
          className="mt-2 w-full rounded-sga border border-slate-200 px-4 py-3 font-sga-body text-sga-slate outline-none focus:border-sga-emerald"
          placeholder="e.g. Teacher / Lagos"
        />

        {errors.profession && (
          <p className="mt-1 font-sga-body text-sm text-red-600">
            {errors.profession.message}
          </p>
        )}
      </div>

      {/* Where Did You Hear About Us? */}
      <div>
        <label
            htmlFor="heardAboutUs"
            className="font-sga-body text-sm font-semibold text-sga-navy"
        >
            Where Did You Hear About Us?
        </label>

        <select
            id="heardAboutUs"
            {...register("heardAboutUs")}
            defaultValue=""
            className={`mt-2 w-full rounded-sga border bg-white px-4 py-3.5 font-sga-body text-sm text-sga-navy outline-none transition focus:ring-2 ${
            errors.heardAboutUs
                ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                : "border-slate-200 focus:border-sga-emerald focus:ring-sga-emerald/10"
            }`}
        >
            <option value="">Select an option</option>
            <option value="Google Search">Google Search</option>
            <option value="Facebook">Facebook</option>
            <option value="Instagram">Instagram</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="YouTube">YouTube</option>
            <option value="TikTok">TikTok</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Friend / Colleague">Friend / Colleague</option>
            <option value="Referral">Referral</option>
            <option value="Event / Workshop">Event / Workshop</option>
            <option value="SGA Website">SGA Website</option>
            <option value="Other">Other</option>
        </select>

        {errors.heardAboutUs && (
            <p className="mt-1.5 font-sga-body text-sm text-red-600">
            {errors.heardAboutUs.message}
            </p>
        )}
      </div>


    {serverError && (
        <p className="font-sga-body text-sm text-red-600">
            {serverError}
        </p>
    )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-sga bg-sga-amber px-6 py-4 font-sga-body text-base font-bold text-sga-navy transition-colors hover:bg-sga-amber-dark disabled:opacity-60 cursor-pointer disabled:text-gray-100 disabled:cursor-not-allowed disabled:bg-sga-slate"
      >
        {isSubmitting ? (
            <>
            <span
                className="h-5 w-5 animate-spin rounded-full border-2 border-gray-100 border-t-transparent"
                aria-hidden="true"
            />
            <span>Submitting...</span>
            </>
        ) : (
            "Get Instant Access (PDF) →"
        )}
      </button>
    </form>
  );
}