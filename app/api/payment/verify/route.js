import crypto from "crypto";
import { supabase } from "@/lib/supabase";

export async function POST(req) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, plan } = await req.json();

    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return Response.json({ success: false, error: "Invalid signature" }, { status: 400 });
    }

    // Save payment to database
    const { error } = await supabase.from("payments").insert({
      payment_id: razorpay_payment_id,
      order_id: razorpay_order_id,
      plan,
    });

    if (error && error.code !== "23505") {
      // 23505 = duplicate key (payment already saved), safe to ignore
      console.error("DB save error:", error);
    }

    return Response.json({ success: true, plan, payment_id: razorpay_payment_id });
  } catch (error) {
    console.error("Payment verify error:", error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
