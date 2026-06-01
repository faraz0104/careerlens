import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

export async function POST(req) {
  try {
    const { email, score, role } = await req.json();
    if (!email || !email.includes("@")) {
      return Response.json({ error: "Valid email required" }, { status: 400 });
    }

    const clean = email.trim().toLowerCase();

    // Save to Supabase (ignore duplicate emails)
    await supabase.from("email_leads").upsert(
      { email: clean, score: score || null, role: role || null, source: "resume_scan" },
      { onConflict: "email", ignoreDuplicates: false }
    );

    // Send welcome email
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "CareerLens <onboarding@resend.dev>",
        to: "khan97faraz@gmail.com", // owner notification
        subject: `🎯 New lead — ${clean} (${role || "unknown"}, score ${score || "?"})`,
        html: `<p>New email captured: <strong>${clean}</strong><br>Role: ${role || "—"}<br>Score: ${score || "—"}/100</p>`,
      });
    } catch {}

    return Response.json({ success: true });
  } catch (e) {
    console.error("Lead capture error:", e);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
