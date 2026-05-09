import { supabase } from "@/lib/supabase";

export async function POST(req) {
  try {
    const { order_id, plan } = await req.json();
    if (!order_id) return Response.json({ success: false, error: "Missing order_id" }, { status: 400 });

    const res = await fetch(`https://api.cashfree.com/pg/orders/${order_id}`, {
      headers: {
        "x-api-version": "2023-08-01",
        "x-client-id": process.env.CASHFREE_APP_ID,
        "x-client-secret": process.env.CASHFREE_SECRET_KEY,
      },
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Could not fetch order");

    if (data.order_status !== "PAID") {
      return Response.json({ success: false, error: `Payment not completed (status: ${data.order_status})` });
    }

    const payment_id = data.cf_order_id?.toString() || order_id;

    const { error } = await supabase.from("payments").insert({
      payment_id,
      order_id,
      plan,
    });

    if (error && error.code !== "23505") {
      console.error("DB save error:", error);
    }

    return Response.json({ success: true, plan, payment_id });
  } catch (error) {
    console.error("Payment verify error:", error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
