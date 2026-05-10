import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function GET(req) {
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data: subscribers, error } = await supabase
    .from("job_alerts")
    .select("*")
    .eq("active", true);

  if (error) {
    console.error("Fetch subscribers error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }

  if (!subscribers?.length) {
    return Response.json({ sent: 0, message: "No active subscribers" });
  }

  let sent = 0;
  let failed = 0;

  for (const sub of subscribers) {
    try {
      const jobs = await generateJobs(sub.role, sub.city);
      if (!jobs.length) continue;

      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "CareerLens Jobs <onboarding@resend.dev>",
        to: sub.email,
        subject: `🎯 5 jobs for ${sub.role} this week — ${sub.city !== "Any" ? sub.city : "India"}`,
        html: buildEmail(sub, jobs),
      });

      sent++;
      await new Promise(r => setTimeout(r, 300));
    } catch (err) {
      console.error(`Failed for ${sub.email}:`, err.message);
      failed++;
    }
  }

  return Response.json({ sent, failed, total: subscribers.length });
}

async function generateJobs(role, city) {
  try {
    const location = city !== "Any" ? city : "India";
    const query = encodeURIComponent(`${role} ${location}`);
    const res = await fetch(
      `https://jsearch.p.rapidapi.com/search-v2?query=${query}&page=1&num_pages=1&date_posted=week&country=in`,
      {
        headers: {
          "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
          "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
      }
    );
    const data = await res.json();
    return (data.data?.jobs || data.data || [])
      .filter(j => j.job_apply_link)
      .slice(0, 5)
      .map(j => ({
        title: j.job_title,
        company: j.employer_name,
        location: [j.job_city, "India"].filter(Boolean).join(", "),
        salary: j.job_min_salary ? `₹${Math.round(j.job_min_salary / 100000)}–${Math.round(j.job_max_salary / 100000)}L PA` : "Competitive",
        skills: (j.job_required_skills || []).slice(0, 3),
        highlight: `Real opening at ${j.employer_name} — posted ${j.job_posted_at_datetime_utc ? Math.floor((Date.now() - new Date(j.job_posted_at_datetime_utc)) / 86400000) + "d ago" : "recently"}`,
        apply_url: j.job_apply_link,
      }));
  } catch {
    return [];
  }
}

function buildEmail(sub, jobs) {
  const jobCards = jobs.map(j => `
    <a href="${j.apply_url}" target="_blank" rel="noopener noreferrer" style="display:block;text-decoration:none;background:#fff;border:1px solid #e5e2de;border-radius:10px;padding:16px 20px;margin-bottom:12px;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;">
        <div>
          <div style="font-weight:700;font-size:.95rem;color:#1a1916;">${j.title}</div>
          <div style="color:#5a5650;font-size:.83rem;margin-top:2px;">${j.company} · ${j.location}</div>
        </div>
        <div style="font-weight:700;font-size:.82rem;color:#2d8a4e;white-space:nowrap;margin-left:12px;">${j.salary}</div>
      </div>
      ${j.skills.length ? `<div style="font-size:.78rem;color:#9a958f;margin-bottom:10px;">${j.skills.join(" · ")}</div>` : ""}
      <div style="font-size:.8rem;color:#e85a2a;font-weight:600;">✦ ${j.highlight} → Apply now</div>
    </a>
  `).join("");

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f7f6f2;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:32px 16px;">

    <div style="text-align:center;margin-bottom:28px;">
      <div style="display:inline-flex;align-items:center;gap:8px;background:#1a1916;color:#f7f6f2;padding:8px 20px;border-radius:99px;font-weight:800;font-size:1rem;letter-spacing:-.02em;">
        <span style="background:#e85a2a;color:#fff;width:24px;height:24px;border-radius:6px;display:inline-flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:900;">C</span>
        CareerLens
      </div>
    </div>

    <div style="background:#fff;border:1px solid #e5e2de;border-radius:14px;padding:24px 24px 8px;margin-bottom:16px;">
      <div style="font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#e85a2a;margin-bottom:8px;">Weekly Job Alerts</div>
      <h1 style="margin:0 0 8px;font-size:1.3rem;font-weight:800;color:#1a1916;letter-spacing:-.03em;">
        5 ${sub.role} jobs picked for you 🎯
      </h1>
      <p style="margin:0 0 20px;font-size:.85rem;color:#5a5650;line-height:1.6;">
        Here are this week's best matches${sub.city !== "Any" ? ` in <strong>${sub.city}</strong>` : " across India"}. Click any job to see full details on CareerLens.
      </p>
    </div>

    ${jobCards}

    <div style="text-align:center;margin:24px 0;">
      <a href="https://www.carrerlens.com/jobs" style="display:inline-block;background:#e85a2a;color:#fff;padding:13px 32px;border-radius:10px;font-weight:700;font-size:.9rem;text-decoration:none;letter-spacing:-.01em;">
        See all your matches + match % →
      </a>
    </div>

    <div style="background:linear-gradient(135deg,#1a1916,#2d2c28);border-radius:12px;padding:20px 24px;margin-bottom:24px;text-align:center;">
      <div style="font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#e8a020;margin-bottom:6px;">Upgrade to Pro — ₹299/month</div>
      <div style="color:rgba(247,246,242,.8);font-size:.83rem;line-height:1.6;margin-bottom:14px;">
        Get <strong style="color:#f7f6f2;">15+ job matches with exact match %</strong>, salary negotiation scripts, company-specific interview questions, and a personalised career roadmap.
      </div>
      <a href="https://www.carrerlens.com/pricing" style="display:inline-block;background:#e85a2a;color:#fff;padding:9px 24px;border-radius:8px;font-weight:700;font-size:.82rem;text-decoration:none;">
        Unlock Pro →
      </a>
    </div>

    <div style="text-align:center;font-size:.72rem;color:#9a958f;line-height:1.8;">
      You're receiving this because you subscribed to CareerLens job alerts.<br>
      <a href="https://www.carrerlens.com/api/unsubscribe?id=${sub.id}" style="color:#9a958f;">Unsubscribe</a>
    </div>

  </div>
</body>
</html>
  `;
}
