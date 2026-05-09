import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

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
    const customer_email = data.customer_details?.customer_email;
    const customer_name = data.customer_details?.customer_name || "there";
    const planLabel = plan === "pro" ? "Pro" : "Team";
    const planPrice = plan === "pro" ? "₹299/month" : "₹499/student/month";

    const { error } = await supabase.from("payments").insert({ payment_id, order_id, plan });
    if (error && error.code !== "23505") console.error("DB save error:", error);

    if (customer_email) {
      await resend.emails.send({
        from: "CareerLens <hello@carrerlens.com>",
        to: customer_email,
        subject: `Welcome to CareerLens ${planLabel} ✦`,
        html: `
          <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:560px;margin:0 auto;background:#f7f6f2;padding:32px 16px">
            <div style="background:#1a1916;border-radius:12px;padding:28px 32px;text-align:center;margin-bottom:24px">
              <div style="display:inline-flex;align-items:center;gap:8px;color:#f7f6f2;font-weight:800;font-size:1.1rem">
                <span style="background:#e85a2a;color:#fff;width:28px;height:28px;border-radius:7px;display:inline-flex;align-items:center;justify-content:center;font-size:.8rem;font-weight:900">C</span>
                CareerLens
              </div>
            </div>
            <div style="background:#fff;border:1px solid #e5e2de;border-radius:12px;padding:32px">
              <div style="font-size:2rem;margin-bottom:12px">🎉</div>
              <h1 style="font-weight:800;font-size:1.4rem;color:#1a1916;margin:0 0 8px;letter-spacing:-.03em">
                You're now on ${planLabel}!
              </h1>
              <p style="color:#5a5650;font-size:.9rem;line-height:1.7;margin:0 0 24px">
                Hi ${customer_name}, your payment was successful. Welcome to CareerLens ${planLabel} — ${planPrice}.
              </p>
              <div style="background:#f7f6f2;border-radius:10px;padding:18px 20px;margin-bottom:24px">
                <div style="font-weight:700;font-size:.82rem;color:#1a1916;margin-bottom:12px">What's unlocked for you:</div>
                ${plan === "pro" ? `
                  <div style="font-size:.82rem;color:#3a3632;line-height:2">
                    ✅ Unlimited resume scans<br/>
                    ✅ Unlimited job matches<br/>
                    ✅ All interview questions + AI answers<br/>
                    ✅ Cold email generator<br/>
                    ✅ Resume tailoring per job<br/>
                    ✅ Salary negotiation script<br/>
                    ✅ Career roadmap<br/>
                    ✅ Priority support
                  </div>
                ` : `
                  <div style="font-size:.82rem;color:#3a3632;line-height:2">
                    ✅ Everything in Pro<br/>
                    ✅ Team admin dashboard<br/>
                    ✅ Student progress tracking<br/>
                    ✅ Bulk resume analysis<br/>
                    ✅ AI mock interview simulator<br/>
                    ✅ Dedicated account manager
                  </div>
                `}
              </div>
              <a href="https://www.carrerlens.com" style="display:block;background:#e85a2a;color:#fff;text-align:center;padding:13px 24px;border-radius:9px;font-weight:700;font-size:.9rem;text-decoration:none">
                Go to CareerLens →
              </a>
            </div>
            <div style="text-align:center;font-size:.72rem;color:#9a958f;margin-top:20px;line-height:1.8">
              Order ID: ${order_id}<br/>
              Questions? Email us at <a href="mailto:hello@careerlens.io" style="color:#e85a2a">hello@careerlens.io</a>
            </div>
          </div>
        `,
      }).catch(err => console.error("Email send error:", err));
    }

    return Response.json({ success: true, plan, payment_id });
  } catch (error) {
    console.error("Payment verify error:", error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
