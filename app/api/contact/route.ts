import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact-schema";

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();

    // Validate the request body
    const result = contactFormSchema.safeParse(body);
    
    if (!result.success) {
      // Return validation errors
      return NextResponse.json(
        { error: "Validation failed", details: result.error.format() },
        { status: 400 }
      );
    }

    const { name, email, subject, message, phone, company, marketingConsent } = result.data;

    // Here you would typically send an email or store in a database
    // For this example, we'll just log the data and simulate a delay
    console.log("Contact form submission:", { 
      name, 
      email, 
      subject, 
      message, 
      phone: phone || 'Not provided', 
      company: company || 'Not provided',
      marketingConsent: marketingConsent || false 
    });
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    // In a real application, you might use an email service like SendGrid or Nodemailer:
    /*
    await sendEmail({
      to: "your-email@example.com",
      subject: `New contact form submission: ${subject}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Marketing Consent:</strong> ${marketingConsent ? 'Yes' : 'No'}</p>
      `,
    });
    */

    // Return success response
    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    
    // Return error response
    return NextResponse.json(
      { error: "Internal server error", message: "Failed to process your request" },
      { status: 500 }
    );
  }
}