import { z } from "zod";

export const applicationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name"),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),

  whatsapp: z
    .string()
    .trim()
    .regex(
      /^\+?[0-9\s()-]{7,20}$/,
      "Please enter a valid WhatsApp number"
    ),

  city: z
    .string()
    .trim()
    .min(2, "Please enter your city or country"),

  profession: z
    .string()
    .trim()
    .min(2, "Please enter your profession or role"),

  organisation: z
    .string()
    .trim()
    .optional()
    .or(z.literal("")),

  experience: z
    .string()
    .optional()
    .or(z.literal("")),

  programme: z
    .enum([
      "School Growth Mentorship",
      "Educational Business Consulting",
      "Executive Masterclass",
    ])
    .refine((value) => value !== "", {
      message: "Please select a programme",
    }),

  motivation: z
    .string()
    .trim()
    .optional()
    .or(z.literal("")),

  goals: z
    .string()
    .trim()
    .optional()
    .or(z.literal("")),

  heardAboutUs: z
    .string()
    .trim()
    .optional(),
});