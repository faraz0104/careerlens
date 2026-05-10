const PLANS = {
  pro:  { amountINR: 299,  amountUSD: 20,  description: "CareerLens Pro - Monthly" },
  team: { amountINR: 499,  amountUSD: 40,  description: "CareerLens Team - Per Student/Month" },
};

export async function POST(req) {
  try {
    const { plan, customer_email, customer_name, customer_phone, currency = "INR" } = await req.json();
    const planData = PLANS[plan];
    if (!planData) return Response.json({ error: "Invalid plan" }, { status: 400 });

    const isUSD = currency === "USD";
    const amount = isUSD ? planData.amountUSD : planData.amountINR;
    const orderId = `cl_${plan}_${Date.now()}`;

    const res = await fetch("https://api.cashfree.com/pg/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-version": "2023-08-01",
        "x-client-id": process.env.CASHFREE_APP_ID,
        "x-client-secret": process.env.CASHFREE_SECRET_KEY,
      },
      body: JSON.stringify({
        order_id: orderId,
        order_amount: amount,
        order_currency: currency,
        customer_details: {
          customer_id: `cust_${Date.now()}`,
          customer_name: customer_name || "CareerLens User",
          customer_email: customer_email || "user@careerlens.io",
          customer_phone: customer_phone || "9999999999",
        },
        order_meta: {
          return_url: `https://www.carrerlens.com/pricing?order_id=${orderId}`,
          notify_url: `https://www.carrerlens.com/api/payment/webhook`,
        },
        order_note: planData.description,
      }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to create order");

    return Response.json({
      order_id: data.order_id,
      payment_session_id: data.payment_session_id,
    });
  } catch (error) {
    console.error("Cashfree order error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
