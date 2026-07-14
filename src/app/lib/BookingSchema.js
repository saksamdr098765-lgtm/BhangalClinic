import { z } from "zod";

export const bookingSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Please enter your full name"),

  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit phone number"),

  email: z
    .string()
    .email("Enter a valid email address"),

  test: z
    .string()
    .min(1, "Please select a test"),

  preferredDate: z
    .string()
    .min(1, "Please select a preferred date"),

  preferredTime: z
    .string()
    .min(1, "Please select a preferred time"),

  address: z.string(),

  notes: z.string(),

  homeCollection: z.boolean(),
});