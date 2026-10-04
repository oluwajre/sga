"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { applicationSchema } from "./applicationSchema";
import { useEffect, useRef, useState } from "react";

export default function ApplicationForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState("");
  const [currentStep, setCurrentStep] = useState(0);

  const messageRef = useRef(null);
  
    useEffect(() => {
      if (isSuccess) {
        messageRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
  }, [isSuccess]);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(applicationSchema),
  });

  const steps = [
  {
    title: "Personal Information",
    description: "Please provide your basic contact information.",
    fields: ["name", "email", "whatsapp", "city"],
  },
  {
    title: "Professional Background",
    description: "Tell us a little about your current professional background.",
    fields: ["profession", "organisation", "experience"],
  },
  {
    title: "Programme Interest",
    description: "Tell us which SGA programme you are interested in.",
    fields: ["programme"],
  },
  {
    title: "Your Goals",
    description: "Help us understand what you hope to achieve through SGA.",
    fields: ["motivation", "goals", "heardAboutUs"],
  },
];

async function handleNext(nextStep) {
  if(nextStep < 0 || nextStep >= steps.length || nextStep === currentStep) {
    return;
  };

  if(nextStep > currentStep) {
    const fields = steps[currentStep].fields;

    const isValid = await trigger(fields);

    if (!isValid) {
      return;
    };
  };

  setCurrentStep(nextStep);
}

function handleBack() {
  setCurrentStep((step) => step - 1);
}

  const searchParams = useSearchParams();
  const referralCode = searchParams.get("ref");

  async function onSubmit(data) {
    setIsSuccess(false);
    setServerError("");

    try {
      const response = await fetch("/api/applications", {
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
      setCurrentStep(0);
      console.log("Application submitted:", result);
    } catch (error) {
      console.error("Application submission error:", error);

      setServerError(
        "Unable to submit your application. Please check your connection and try again."
      );
    }
}
  return (
    <section className="bg-sga-off-white py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-12">
          <p className="font-sga-body text-sm font-bold uppercase tracking-widest text-sga-emerald">
            Application Form
          </p>

          <h2 className="mt-4 font-sga-heading text-3xl font-extrabold leading-tight text-sga-navy md:text-4xl">
            Tell Us About Yourself
          </h2>

          <p className="mt-4 max-w-2xl font-sga-body leading-relaxed text-sga-slate">
            Complete the application below so we can understand your
            background, interests, and goals.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-sga bg-white p-6 shadow-[0_4px_20px_-2px_rgba(10,25,47,0.08)] md:p-8"
        >
          {isSuccess && (
            <div ref={messageRef} className="mb-8 rounded-sga border border-emerald-200 bg-emerald-50 p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sga-emerald font-bold text-white">
                  ✓
                </div>

                <div>
                  <h3 className="font-sga-heading text-lg font-bold text-sga-navy">
                    Application submitted successfully
                  </h3>

                  <p className="mt-1 font-sga-body text-sm leading-relaxed text-sga-slate">
                    Thank you for applying to School Growth Academy. We’ve received your
                    application and will be in touch with the next steps.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="mb-8">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.title} className="flex flex-1 items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold transition-colors cursor-pointer ${
                        index <= currentStep
                          ? "bg-sga-emerald text-white"
                          : "bg-slate-200 text-sga-slate"
                      }`}
                      onClick={() => handleNext(index)}
                    >
                      {index + 1}
                    </div>

                    <span
                      className={`mt-2 hidden text-xs font-medium sm:block ${
                        index === currentStep
                          ? "text-sga-navy"
                          : "text-sga-slate"
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>

                  {index < steps.length - 1 && (
                    <div
                      className={`mx-2 h-0.5 flex-1 transition-colors ${
                        index < currentStep
                          ? "bg-sga-emerald"
                          : "bg-slate-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentStep * 100}%)`,
              }}
            >
              {/* Personal Information */}
              <div className="w-full shrink-0">
                <div>
                  <h3 className="font-sga-heading text-xl font-bold text-sga-navy">
                    Personal Information
                  </h3>

                  <p className="mt-1 font-sga-body text-sm text-sga-slate">
                    Please provide your basic contact information.
                  </p>
                </div>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="font-sga-body text-sm font-semibold text-sga-navy"
                    >
                      Full Name <span className="text-red-600">*</span>
                    </label>

                    <input
                      id="name"
                      type="text"
                      {...register("name")}
                      className="mt-2 w-full rounded-sga border border-slate-300 px-4 py-3 font-sga-body text-sm outline-none transition focus:border-sga-emerald focus:ring-2 focus:ring-sga-emerald/20"
                    />

                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="font-sga-body text-sm font-semibold text-sga-navy"
                    >
                      Email Address <span className="text-red-600">*</span>
                    </label>

                    <input
                      id="email"
                      type="email"
                      {...register("email")}
                      className="mt-2 w-full rounded-sga border border-slate-300 px-4 py-3 font-sga-body text-sm outline-none transition focus:border-sga-emerald focus:ring-2 focus:ring-sga-emerald/20"
                    />

                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="whatsapp"
                      className="font-sga-body text-sm font-semibold text-sga-navy"
                    >
                      WhatsApp Number <span className="text-red-600">*</span>
                    </label>

                    <input
                      id="whatsapp"
                      type="tel"
                      {...register("whatsapp")}
                      className="mt-2 w-full rounded-sga border border-slate-300 px-4 py-3 font-sga-body text-sm outline-none transition focus:border-sga-emerald focus:ring-2 focus:ring-sga-emerald/20"
                    />

                    {errors.whatsapp && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.whatsapp.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="city"
                      className="font-sga-body text-sm font-semibold text-sga-navy"
                    >
                      City / Country <span className="text-red-600">*</span>
                    </label>

                    <input
                      id="city"
                      type="text"
                      {...register("city")}
                      className="mt-2 w-full rounded-sga border border-slate-300 px-4 py-3 font-sga-body text-sm outline-none transition focus:border-sga-emerald focus:ring-2 focus:ring-sga-emerald/20"
                    />

                    {errors.city && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.city.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Professional Background */}
              <div className="w-full shrink-0">
                <div>
                  <h3 className="font-sga-heading text-xl font-bold text-sga-navy">
                    Professional Background
                  </h3>

                  <p className="mt-1 font-sga-body text-sm text-sga-slate">
                    Tell us a little about your current professional background.
                  </p>
                </div>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="profession"
                      className="font-sga-body text-sm font-semibold text-sga-navy"
                    >
                      Current Profession / Role <span className="text-red-600">*</span>
                    </label>

                    <input
                      id="profession"
                      type="text"
                      {...register("profession")}
                      className="mt-2 w-full rounded-sga border border-slate-300 px-4 py-3 font-sga-body text-sm outline-none transition focus:border-sga-emerald focus:ring-2 focus:ring-sga-emerald/20"
                    />

                    {errors.profession && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.profession.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="organisation"
                      className="font-sga-body text-sm font-semibold text-sga-navy"
                    >
                      Organisation / Business
                    </label>

                    <input
                      id="organisation"
                      type="text"
                      {...register("organisation")}
                      className="mt-2 w-full rounded-sga border border-slate-300 px-4 py-3 font-sga-body text-sm outline-none transition focus:border-sga-emerald focus:ring-2 focus:ring-sga-emerald/20"
                    />

                    {errors.organisation && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.organisation.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="experience"
                      className="font-sga-body text-sm font-semibold text-sga-navy"
                    >
                      Years of Professional Experience
                    </label>

                    <select
                      id="experience"
                      {...register("experience")}
                      className="mt-2 w-full rounded-sga border border-slate-300 bg-white px-4 py-3 font-sga-body text-sm outline-none transition focus:border-sga-emerald focus:ring-2 focus:ring-sga-emerald/20"
                    >
                      <option value="">Select experience</option>
                      <option value="Less than 1 year">Less than 1 year</option>
                      <option value="1–3 years">1–3 years</option>
                      <option value="4–7 years">4–7 years</option>
                      <option value="8–12 years">8–12 years</option>
                      <option value="13+ years">13+ years</option>
                    </select>

                    {errors.experience && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.experience.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Programme Interest */}                    
              <div className="w-full shrink-0">
                <div>
                  <h3 className="font-sga-heading text-xl font-bold text-sga-navy">
                    Programme Interest
                  </h3>

                  <p className="mt-1 font-sga-body text-sm text-sga-slate">
                    Tell us which SGA programme you are interested in.
                  </p>
                </div>

                <div className="mt-8">
                  <label
                    htmlFor="programme"
                    className="font-sga-body text-sm font-semibold text-sga-navy"
                  >
                    Programme of Interest <span className="text-red-600">*</span>
                  </label>

                  <select
                    id="programme"
                    {...register("programme")}
                    className="mt-2 w-full rounded-sga border border-slate-300 bg-white px-4 py-3 font-sga-body text-sm outline-none transition focus:border-sga-emerald focus:ring-2 focus:ring-sga-emerald/20"
                  >
                    <option value="">Select a programme</option>
                    <option value="School Growth Mentorship">
                      Level 1 — School Growth Mentorship
                    </option>
                    <option value="Educational Business Consulting">
                      Level 2 — Educational Business Consulting
                    </option>
                    <option value="Executive Masterclass">
                      Level 3 — Executive Masterclass
                    </option>
                  </select>

                  {errors.programme && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.programme.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Your Goals */}                    
              <div className="w-full shrink-0">
                <div>
                  <h3 className="font-sga-heading text-xl font-bold text-sga-navy">
                    Your Goals
                  </h3>

                  <p className="mt-1 font-sga-body text-sm text-sga-slate">
                    Help us understand what you hope to achieve through SGA.
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <label
                      htmlFor="motivation"
                      className="font-sga-body text-sm font-semibold text-sga-navy"
                    >
                      Why are you interested in joining SGA?
                    </label>

                    <textarea
                      id="motivation"
                      rows={5}
                      {...register("motivation")}
                      className="mt-2 w-full resize-y rounded-sga border border-slate-300 px-4 py-3 font-sga-body text-sm leading-relaxed outline-none transition focus:border-sga-emerald focus:ring-2 focus:ring-sga-emerald/20"
                      placeholder="Tell us what attracted you to School Growth Academy..."
                    />

                    {errors.motivation && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.motivation.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="goals"
                      className="font-sga-body text-sm font-semibold text-sga-navy"
                    >
                      What do you hope to achieve?
                    </label>

                    <textarea
                      id="goals"
                      rows={5}
                      {...register("goals")}
                      className="mt-2 w-full resize-y rounded-sga border border-slate-300 px-4 py-3 font-sga-body text-sm leading-relaxed outline-none transition focus:border-sga-emerald focus:ring-2 focus:ring-sga-emerald/20"
                      placeholder="Tell us about the skills, knowledge, or opportunities you hope to develop..."
                    />

                    {errors.goals && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.goals.message}
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

                </div>
              </div>
            </div>
          </div>
        
          {serverError && (
              <p className="font-sga-body text-sm text-red-600">
                  {serverError}
              </p>
          )}
          <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6">
            {currentStep > 0 ? (
              <button
                type="button"
                onClick={handleBack}
                className="rounded-sga border border-slate-300 px-6 py-3 font-sga-body text-sm font-semibold text-sga-navy transition-colors hover:border-sga-navy hover:bg-slate-50"
              >
                Back
              </button>
            ) : (
              <div />
            )}

            {currentStep < steps.length - 1 ? (
              <button
                type="button"
                onClick={() => handleNext(currentStep + 1)}
                className="rounded-sga bg-sga-amber px-6 py-3 font-sga-body text-sm font-bold text-sga-navy transition-colors hover:bg-sga-amber-dark hover:text-white"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 rounded-sga bg-sga-amber px-6 py-3 font-sga-body text-sm font-bold text-sga-navy transition-colors hover:bg-sga-amber-dark hover:text-white disabled:cursor-not-allowed disabled:bg-sga-slate disabled:text-gray-100"
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
                  "Submit Application"
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}