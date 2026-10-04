import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name."),

  email: z
    .string()
    .trim()
    .pipe(z.email("Please enter a valid email address.")),

  whatsapp: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone or WhatsApp number."),

  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little more about how we can help."),
});