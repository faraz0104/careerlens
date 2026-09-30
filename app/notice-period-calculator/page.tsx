'use client';

import { useMemo, useState } from "react";

const addDays = (date: Date, days: number) => {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
};

export default function NoticePeriodCalculatorPage() {
  const [noticeDays, setNoticeDays] = useState(90);
  const [lastWorkingDate, setLastWorkingDate] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate() + 10).toISOString().slice(0, 10);
  });

  const result = useMemo(() => {
    if (!lastWorkingDate) return null;
    const startDate = new Date(lastWorkingDate);
    const lastDay = addDays(startDate, noticeDays);

    return {
      noticeStart: startDate.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
      lastWorkingDay: lastDay.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
      noticeWindow: `${noticeDays} days`,
      buyoutPossible: noticeDays <= 90 ? "Usually possible with employer discussion" : "Longer notice periods usually require more negotiation",
    };
  }, [lastWorkingDate, noticeDays]);

  return (
    <main style={{ minHeight: "100vh", background: "#f8f7f4", padding: "48px 1.5rem 80px", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid rgba(79,70,229,0.25)", background: "rgba(79,70,229,0.08)", color: "#4338ca", borderRadius: 999, padding: "6px 12px", fontSize: ".72rem", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase" }}>
          Notice period
        </div>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.08, letterSpacing: "-0.06em", margin: "18px 0 14px" }}>
          Notice Period Calculator
        </h1>
        <p style={{ color: "#4b5563", fontSize: "1rem", lineHeight: 1.7, maxWidth: 760, margin: "0 0 28px" }}>
          Estimate when your current role could end based on your notice period. This is a planning tool for one step in job-search preparation, not a legal or HR guarantee.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div style={{ background: "#fff", border: "1px solid rgba(17,24,39,0.08)", borderRadius: 18, padding: 22 }}>
            <label style={{ display: "block", fontSize: ".8rem", fontWeight: 700, color: "#374151", marginBottom: 8 }}>Current last working date</label>
            <input
              type="date"
              value={lastWorkingDate}
              onChange={(e) => setLastWorkingDate(e.target.value)}
              style={{ width: "100%", padding: "11px 12px", border: "1px solid rgba(17,24,39,0.12)", borderRadius: 10, background: "#f8fafc", fontSize: ".9rem" }}
            />

            <label style={{ display: "block", fontSize: ".8rem", fontWeight: 700, color: "#374151", margin: "18px 0 8px" }}>Notice period (days)</label>
            <input
              type="range"
              min="15"
              max="180"
              step="15"
              value={noticeDays}
              onChange={(e) => setNoticeDays(Number(e.target.value))}
              style={{ width: "100%" }}
            />
            <div style={{ fontSize: "1.4rem", fontWeight: 800, letterSpacing: "-0.04em", color: "#111827", marginTop: 8 }}>{noticeDays} days</div>
          </div>

          <div style={{ background: "linear-gradient(135deg, #111827, #1f2937)", color: "#fff", borderRadius: 18, padding: 22 }}>
            <div style={{ fontSize: ".72rem", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "#cbd5e1" }}>Estimated timeline</div>
            {result ? (
              <div style={{ marginTop: 12 }}>
                <div style={{ marginBottom: 10 }}>
                  <div style={{ color: "rgba(255,255,255,0.7)", fontSize: ".76rem" }}>Notice starts</div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 700 }}>{result.noticeStart}</div>
                </div>
                <div style={{ marginBottom: 10 }}>
                  <div style={{ color: "rgba(255,255,255,0.7)", fontSize: ".76rem" }}>Estimated last working day</div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 700 }}>{result.lastWorkingDay}</div>
                </div>
                <div>
                  <div style={{ color: "rgba(255,255,255,0.7)", fontSize: ".76rem" }}>Negotiation note</div>
                  <div style={{ fontSize: ".9rem", lineHeight: 1.7, color: "#e5e7eb" }}>{result.buyoutPossible}</div>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div style={{ marginTop: 28, background: "#fff", border: "1px solid rgba(17,24,39,0.08)", borderRadius: 18, padding: 22 }}>
          <h2 style={{ margin: "0 0 12px", fontSize: "1.3rem", letterSpacing: "-0.04em" }}>Common notice-period scenarios</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
            {[
              ["30 days", "Common in startups and smaller companies with faster hiring cycles."],
              ["60 days", "Moderate notice period; common in established tech companies."],
              ["90 days", "Longer transition period; usually needs negotiation or a buyout conversation."],
            ].map(([label, desc]) => (
              <div key={label} style={{ background: "#f8fafc", borderRadius: 14, padding: 18 }}>
                <div style={{ fontWeight: 800, color: "#111827" }}>{label}</div>
                <p style={{ margin: "8px 0 0", color: "#4b5563", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
