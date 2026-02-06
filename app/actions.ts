"use server"

import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export type ContactState = {
  success: boolean
  message: string
  errors?: {
    name?: string[]
    email?: string[]
    message?: string[]
  }
}

export async function sendEmail(prevState: ContactState, formData: FormData): Promise<ContactState> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  })

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Please check your input.",
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // Here you would typically integrate with an email service like Resend, SendGrid, or Nodemailer
  // Example with Resend:
  // await resend.emails.send({
  //   from: 'Portfolio <onboarding@resend.dev>',
  //   to: 'your-email@example.com',
  //   subject: `New message from ${validatedFields.data.name}`,
  //   text: validatedFields.data.message,
  // })

  console.log("Email sent successfully:", validatedFields.data)

  return {
    success: true,
    message: "Message sent successfully! I'll get back to you soon.",
  }
}
