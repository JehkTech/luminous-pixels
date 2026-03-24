import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, industry, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Luminous Pixels Contact <onboarding@resend.dev>",
      to: ["jehkat505@gmail.com"],
      replyTo: email,
      subject: `New inquiry from ${name} — ${company || "Independent"}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0891b2;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #71717a; width: 120px;">Name</td><td style="padding: 8px 0;"><strong>${name}</strong></td></tr>
            <tr><td style="padding: 8px 0; color: #71717a;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            ${company ? `<tr><td style="padding: 8px 0; color: #71717a;">Company</td><td style="padding: 8px 0;">${company}</td></tr>` : ""}
            ${industry ? `<tr><td style="padding: 8px 0; color: #71717a;">Industry</td><td style="padding: 8px 0;">${industry}</td></tr>` : ""}
          </table>
          <hr style="border: none; border-top: 1px solid #e4e4e7; margin: 1.5rem 0;" />
          <h3 style="color: #18181b;">Message</h3>
          <p style="color: #3f3f46; line-height: 1.7;">${message.replace(/\n/g, "<br>")}</p>
          <hr style="border: none; border-top: 1px solid #e4e4e7; margin: 1.5rem 0;" />
          <p style="font-size: 12px; color: #a1a1aa;">Sent from luminouspixels.agency contact form</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
