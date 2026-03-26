"use server";

import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(7, "Valid phone number is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
  city: z.string().optional(),
});

export type ContactFormState = {
  success: boolean;
  error?: string;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    service: formData.get("service"),
    message: formData.get("message"),
    city: formData.get("city"),
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.message || "Please check your inputs.",
    };
  }

  const data = parsed.data;

  // If RESEND_API_KEY is configured, send via Resend
  const resendKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL || "info@cornerstoneroofingco.com";

  if (resendKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Cornerstone Website <onboarding@resend.dev>",
          to: [contactEmail],
          subject: `New Estimate Request: ${data.service}${data.city ? ` — ${data.city}` : ""}`,
          html: `
            <h2>New Free Estimate Request</h2>
            <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Service:</strong> ${data.service}</p>
            ${data.city ? `<p><strong>City:</strong> ${data.city}</p>` : ""}
            ${data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : ""}
          `,
        }),
      });

      if (!res.ok) {
        console.error("Resend API error:", await res.text());
        return { success: false, error: "Failed to send. Please call us directly." };
      }
    } catch (err) {
      console.error("Email send error:", err);
      return { success: false, error: "Failed to send. Please call us directly." };
    }
  } else {
    // Log to server console when no email service is configured
    console.log("=== NEW CONTACT FORM SUBMISSION ===");
    console.log(JSON.stringify(data, null, 2));
    console.log("===================================");
    console.log("Set RESEND_API_KEY and CONTACT_EMAIL in .env.local to enable email delivery.");
  }

  return { success: true };
}
