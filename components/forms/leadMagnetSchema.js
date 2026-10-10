import { z } from "zod";

export const leadMagnetSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your full name"),

  email: z
    .email("Please enter a valid email address"),

  whatsapp: z
  .string()
  .regex(
    /^\+?[0-9\s()-]{7,20}$/,
    "Please enter a valid WhatsApp number"
  ),

  heardAboutUs: z
    .string()
    .trim()
    .optional(),

  profession: z
    .string()
    .min(2, "Please enter your profession or city"),
});