import { supabase } from "@/lib/supabase";

export async function POST(req) {
  try {
    const { code } = await req.json();
    if (!code || typeof code !== "string") {
      return Response.json({ error: "No code provided" }, { status: 400 });
    }

    const clean = code.trim().toUpperCase();

    const { data, error } = await supabase
      .from("pro_codes")
      .select("code, redeemed")
      .eq("code", clean)
      .single();

    if (error || !data) {
      return Response.json({ error: "Invalid code" }, { status: 404 });
    }

    if (data.redeemed) {
      return Response.json({ error: "This code has already been used" }, { status: 409 });
    }

    await supabase
      .from("pro_codes")
      .update({ redeemed: true, redeemed_at: new Date().toISOString() })
      .eq("code", clean);

    return Response.json({ success: true });
  } catch (e) {
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
