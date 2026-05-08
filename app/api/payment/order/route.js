import Razorpay from "razorpay";

const PLANS = {
  pro: { amount: 29900, currency: "INR", description: "CareerLens Pro - Monthly" },
  team: { amount: 19900, currency: "INR", description: "CareerLens Team - Per Student/Month" },
};

export async function POST(req) {
  try {
    const { plan } = await req.json();
    const planData = PLANS[plan];
    if (!planData) {
      return Response.json({ error: "Invalid plan" }, { status: 400 });
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const order = await razorpay.orders.create({
      amount: planData.amount,
      currency: planData.currency,
      receipt: `receipt_${Date.now()}`,
      notes: { plan, description: planData.description },
    });

    return Response.json({ ...order, key: process.env.RAZORPAY_KEY_ID });
  } catch (error) {
    console.error("Razorpay order error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
