import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("resume_stats")
      .select("value")
      .eq("id", "total_scans")
      .single();

    if (error) {
      console.error("resume_stats read error:", error.message, error.code);
      return Response.json({ total_scans: null, debug: error.message });
    }

    return Response.json({ total_scans: data?.value ?? null });
  } catch (e) {
    console.error("stats route exception:", e.message);
    return Response.json({ total_scans: null, debug: e.message });
  }
}
