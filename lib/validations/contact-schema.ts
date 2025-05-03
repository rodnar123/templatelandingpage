import { z } from "zod";

/**
 * Validation schema for the contact form
 */
export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }).max(50, {
    message: "Name cannot exceed 50 characters.",
  }),
  
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  
  subject: z.string().min(1, {
    message: "Please select a subject.",
  }),
  
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(1000, {
    message: "Message cannot exceed 1000 characters.",
  }),
  
  // Optional phone field with validation
  phone: z.string().optional()
    .refine(val => !val || /^[0-9+\-\s()]{7,20}$/.test(val), {
      message: "Please enter a valid phone number.",
    }),
    
  // Optional company field
  company: z.string().optional(),
  
  // Optional field for marketing consent
  marketingConsent: z.boolean().optional(),
});

// Type inference from zod schema
export type ContactFormValues = z.infer<typeof contactFormSchema>;