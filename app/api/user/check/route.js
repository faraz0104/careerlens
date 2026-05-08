import { supabase } from "@/lib/supabase";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const payment_id = searchParams.get("payment_id");

  if (!payment_id) {
    return Response.json({ isPro: false });
  }

  const { data } = await supabase
    .from("payments")
    .select("plan")
    .eq("payment_id", payment_id)
    .single();

  return Response.json({ isPro: !!data, plan: data?.plan || null });
}
