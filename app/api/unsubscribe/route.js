import { supabase } from "@/lib/supabase";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return new Response("Invalid unsubscribe link.", { status: 400, headers: { "Content-Type": "text/plain" } });
  }

  try {
    const { error } = await supabase
      .from("job_alerts")
      .update({ active: false })
      .eq("id", id);

    if (error) throw error;

    return new Response(
      `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Unsubscribed – CareerLens</title><style>body{font-family:sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;background:#f7f6f2;color:#1a1916}.box{text-align:center;max-width:400px;padding:40px}</style></head><body><div class="box"><div style="font-size:2.5rem;margin-bottom:16px">✅</div><h1 style="font-size:1.4rem;margin-bottom:8px">You've been unsubscribed</h1><p style="color:#5a5650;font-size:.9rem">You'll no longer receive job alerts from CareerLens.</p><a href="https://www.carrerlens.com" style="display:inline-block;margin-top:24px;padding:10px 24px;background:#e85a2a;color:#fff;border-radius:8px;text-decoration:none;font-weight:600">Back to CareerLens</a></div></body></html>`,
      { status: 200, headers: { "Content-Type": "text/html" } }
    );
  } catch (error) {
    console.error("Unsubscribe error:", error);
    return new Response("Something went wrong. Please try again.", { status: 500, headers: { "Content-Type": "text/plain" } });
  }
}
