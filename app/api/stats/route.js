import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("resume_stats")
      .select("value")
      .eq("id", "total_scans")
      .single();

    if (error || !data) {
      return Response.json({ total_scans: null });
    }

    return Response.json({ total_scans: data.value });
  } catch {
    return Response.json({ total_scans: null });
  }
}
