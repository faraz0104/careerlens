import { Resend } from "resend";
import { rateLimit } from "@/lib/rateLimit";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { allowed, minutesLeft } = rateLimit(req, "contact", 3, 60);
  if (!allowed) {
    return Response.json(
      { error: `Too many requests. Try again in ${minutesLeft} minute${minutesLeft !== 1 ? "s" : ""}.` },
      { status: 429 }
    );
  }

  try {
    const { name, email, subject, message } = await req.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return Response.json({ error: "Name, email and message are required." }, { status: 400 });
    }

    await resend.emails.send({
      from: "CareerLens <onboarding@resend.dev>",
      to: "khan97faraz@gmail.com",
      replyTo: email.trim(),
      subject: `[CareerLens] ${subject || "General Enquiry"} — from ${name.trim()}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:24px;border:1px solid #eee;border-radius:8px;">
          <h2 style="margin:0 0 16px;color:#1a1916;">New message on CareerLens</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#5a5650;width:100px;vertical-align:top;"><strong>Name</strong></td><td style="padding:8px 0;">${name.trim()}</td></tr>
            <tr><td style="padding:8px 0;color:#5a5650;vertical-align:top;"><strong>Email</strong></td><td style="padding:8px 0;"><a href="mailto:${email.trim()}">${email.trim()}</a></td></tr>
            <tr><td style="padding:8px 0;color:#5a5650;vertical-align:top;"><strong>Subject</strong></td><td style="padding:8px 0;">${subject || "General Enquiry"}</td></tr>
            <tr><td style="padding:8px 0;color:#5a5650;vertical-align:top;"><strong>Message</strong></td><td style="padding:8px 0;white-space:pre-wrap;">${message.trim()}</td></tr>
          </table>
          <hr style="margin:20px 0;border:none;border-top:1px solid #eee;">
          <p style="margin:0;font-size:12px;color:#9a958f;">Sent via CareerLens contact form · Reply directly to this email to respond.</p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return Response.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
