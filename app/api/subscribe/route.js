import { supabase } from "@/lib/supabase";
import { rateLimit } from "@/lib/rateLimit";

export async function POST(req) {
  const { allowed, minutesLeft } = rateLimit(req, "subscribe", 5, 60);
  if (!allowed) {
    return Response.json(
      { error: `Too many requests. Try again in ${minutesLeft} minute${minutesLeft !== 1 ? "s" : ""}.` },
      { status: 429 }
    );
  }

  try {
    const { email, name, role, city } = await req.json();

    if (!email?.trim() || !role?.trim()) {
      return Response.json({ error: "Email and role are required." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const { error } = await supabase
      .from("job_alerts")
      .upsert(
        { email: email.trim().toLowerCase(), name: name?.trim() || "", role: role.trim(), city: city || "Any" },
        { onConflict: "email" }
      );

    if (error) throw error;

    return Response.json({ success: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return Response.json({ error: "Failed to subscribe. Please try again." }, { status: 500 });
  }
}
