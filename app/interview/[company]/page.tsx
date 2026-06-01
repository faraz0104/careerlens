import type { Metadata } from "next";
import { notFound } from "next/navigation";
import App from "../../CareerLens";

const COMPANIES: Record<string, {
  name: string; logo: string; rounds: string[]; salary: string;
  roles: string[]; tips: string[]; desc: string;
}> = {
  google: {
    name: "Google", logo: "🔵",
    rounds: ["Online Assessment (DSA)", "Phone Screen (1–2 rounds)", "Onsite: 4–5 rounds (DSA, System Design, Behavioural, Googleyness)"],
    salary: "₹35–90 LPA",
    roles: ["SWE L3", "SWE L4", "SWE L5", "PM", "Data Scientist"],
    tips: ["LeetCode hard problems are expected","System design at L4+ is critical","Googleyness round tests culture fit — prepare leadership stories","Takes 4–8 weeks from first contact"],
    desc: "Google India hiring process for software engineers in 2026 — all rounds, salary, and preparation guide.",
  },
  amazon: {
    name: "Amazon", logo: "📦",
    rounds: ["Online Assessment", "Technical Phone Screen", "Onsite Loop: 4–5 rounds (DSA, System Design, 2–3 Bar Raiser BQ rounds)"],
    salary: "₹28–70 LPA",
    roles: ["SDE1", "SDE2", "SDE3", "TPM", "BA"],
    tips: ["14 Leadership Principles are mandatory — prepare 2 STAR stories per principle","Bar Raiser round is the hardest — cross-functional interviewer","Coding is LeetCode medium difficulty mostly","System design expected from SDE2 upwards"],
    desc: "Amazon India SDE interview process 2026 — Leadership Principles, all rounds, salary and preparation tips.",
  },
  microsoft: {
    name: "Microsoft", logo: "🪟",
    rounds: ["Online Assessment", "Recruiter Screen", "Technical Interview (2–3 rounds: coding, system design)", "As-Appropriate round (hiring manager)"],
    salary: "₹30–75 LPA",
    roles: ["SWE 59", "SWE 60", "SWE 62", "PM", "Data Scientist"],
    tips: ["Focus on problem solving approach, not just answer","System design expected from SWE 60+","Culture is collaborative — show teamwork stories","Microsoft India (Hyderabad) hires heavily for Azure, Teams, Office"],
    desc: "Microsoft India interview process 2026 — all rounds, SWE levels, salary and preparation strategy.",
  },
  flipkart: {
    name: "Flipkart", logo: "🛒",
    rounds: ["Online Coding Test", "Technical Round 1 (DSA)", "Technical Round 2 (System Design)", "Technical Round 3 (Architecture for senior)", "HR / Culture Fit"],
    salary: "₹22–55 LPA",
    roles: ["SDE1", "SDE2", "SDE3", "Tech Lead", "PM"],
    tips: ["Machine coding / LLD round is key differentiator","System design questions focus on e-commerce scale","DSA is LeetCode medium to hard","Flipkart values ownership and speed"],
    desc: "Flipkart SDE interview 2026 — complete guide to all rounds, LLD, system design and salary.",
  },
  zomato: {
    name: "Zomato", logo: "🍕",
    rounds: ["Take-home Assignment or Online Test", "Technical Round 1 (DSA + LLD)", "Technical Round 2 (System Design)", "Engineering Manager Round", "HR Round"],
    salary: "₹18–45 LPA",
    roles: ["SDE1", "SDE2", "SDE3", "Data Scientist", "PM"],
    tips: ["LLD (low-level design) is very important at Zomato","System design questions often related to delivery/food tech","Culture is fast-paced startup — show bias for action","Data roles require strong SQL and Python"],
    desc: "Zomato interview process 2026 — SDE rounds, system design, LLD questions and salary expectations.",
  },
  swiggy: {
    name: "Swiggy", logo: "🧡",
    rounds: ["Online Coding Test", "Technical Round 1 (Coding + LLD)", "Technical Round 2 (System Design)", "Hiring Manager Round", "Culture Fit"],
    salary: "₹20–50 LPA",
    roles: ["SDE1", "SDE2", "SDE3", "PM", "Data Engineer"],
    tips: ["Focus on scalable system design (food delivery at scale)","LLD: design a ride-sharing or food ordering system","Strong DSA required for SDE1/2","Show problem-solving at scale"],
    desc: "Swiggy engineering interview 2026 — rounds, questions, system design and salary guide.",
  },
  razorpay: {
    name: "Razorpay", logo: "💳",
    rounds: ["Online Assessment", "Technical Round 1 (DSA + problem solving)", "Technical Round 2 (System Design + LLD)", "Engineering Lead / Principal Round", "Culture + HR"],
    salary: "₹25–60 LPA",
    roles: ["SDE1", "SDE2", "Senior SDE", "Staff Engineer", "PM"],
    tips: ["Payments domain knowledge is a plus","Strong emphasis on code quality and design patterns","Distributed systems and reliability questions common","High performance team — bar is very high"],
    desc: "Razorpay interview process 2026 — all rounds, fintech focus, salary and preparation for SDE roles.",
  },
  tcs: {
    name: "TCS", logo: "🏢",
    rounds: ["TCS NQT (National Qualifier Test)", "Technical Interview", "Managerial Round", "HR Round"],
    salary: "₹3.5–10 LPA",
    roles: ["Ninja", "Digital", "Prime", "BPS", "IT Support"],
    tips: ["NQT has 4 sections: Verbal, Reasoning, Numerical, Coding","TCS Prime needs strong DSA","Prepare TCS-specific HR questions","Most roles are service-based — expect project allocation"],
    desc: "TCS interview process for freshers 2026 — NQT pattern, all rounds, Ninja vs Digital vs Prime and salary.",
  },
  infosys: {
    name: "Infosys", logo: "🔶",
    rounds: ["InfyTQ Assessment (for freshers)", "Technical Interview (DSA + OOPs)", "HR Interview"],
    salary: "₹4–8 LPA",
    roles: ["SE", "SSE", "Technology Analyst", "Lead Consultant"],
    tips: ["InfyTQ certification improves your chances significantly","Focus on OOPs concepts, data structures, DBMS","Infosys Power Programmer track has higher package","Be ready for service-based project work"],
    desc: "Infosys hiring process 2026 — InfyTQ, all interview rounds, SE vs Power Programmer salary.",
  },
  wipro: {
    name: "Wipro", logo: "🌐",
    rounds: ["Online Aptitude Test (NLTH)", "Technical Interview", "HR Interview"],
    salary: "₹3.5–8 LPA",
    roles: ["Project Engineer", "Senior Engineer", "Tech Lead", "Architect"],
    tips: ["NLTH: aptitude + programming MCQs + coding","OOPs and basic DSA is key","Wipro Elite and Turbo tracks have higher salary","Service company — expect long-term project assignments"],
    desc: "Wipro NLTH interview 2026 — test pattern, technical rounds, Elite vs Turbo salary differences.",
  },
  meta: {
    name: "Meta", logo: "🔷",
    rounds: ["Recruiter Screen", "Phone Technical Screen (45 min coding)", "Onsite: 2 coding + 1 system design + 1 behavioural + 1 cross-functional"],
    salary: "₹40–100 LPA",
    roles: ["E3", "E4", "E5", "E6", "PM"],
    tips: ["Meta focuses heavily on LeetCode hard level coding","Behavioural questions follow specific Meta values","System design at E4+ is very rigorous","Interview cycles are fast — 2–3 weeks"],
    desc: "Meta (Facebook) India interview process 2026 — all rounds, engineer levels, salary and preparation strategy.",
  },
  zepto: {
    name: "Zepto", logo: "⚡",
    rounds: ["Online Coding Test", "DSA Round", "LLD / Machine Coding Round", "System Design Round", "Hiring Manager Round"],
    salary: "₹20–65 LPA",
    roles: ["SDE1", "SDE2", "SDE3", "Data Engineer", "PM"],
    tips: ["Machine coding round is the key differentiator","Zepto moves very fast — expect offer in 1–2 weeks","Focus on high-availability systems","Culture is intense — show speed and ownership"],
    desc: "Zepto SDE interview 2026 — all rounds, machine coding focus, salary up to ₹65 LPA and prep guide.",
  },
};

interface Props { params: Promise<{ company: string }> }

export async function generateStaticParams() {
  return Object.keys(COMPANIES).map(company => ({ company }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { company } = await params;
  const c = COMPANIES[company];
  if (!c) return {};
  return {
    title: `${c.name} Interview Process India 2026 — All Rounds, Questions & Salary | CareerLens`,
    description: `${c.name} ${c.roles[0]} interview 2026: ${c.rounds.length} rounds, salary ${c.salary}. ${c.tips[0]}. Complete preparation guide with company-specific questions.`,
    keywords: [
      `${c.name.toLowerCase()} interview process india 2026`,
      `${c.name.toLowerCase()} ${c.roles[0].toLowerCase()} interview`,
      `${c.name.toLowerCase()} interview questions india`,
      `${c.name.toLowerCase()} salary india 2026`,
      `how to crack ${c.name.toLowerCase()} interview india`,
    ],
    alternates: { canonical: `https://www.carrerlens.com/interview/${company}` },
    openGraph: {
      title: `${c.name} Interview India 2026 — Rounds, Questions & Salary`,
      description: `${c.desc}`,
      url: `https://www.carrerlens.com/interview/${company}`,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
  };
}

export default async function CompanyInterviewPage({ params }: Props) {
  const { company } = await params;
  const c = COMPANIES[company];
  if (!c) notFound();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How many interview rounds does ${c.name} India have?`,
        acceptedAnswer: { "@type": "Answer", text: `${c.name} India typically has ${c.rounds.length} rounds: ${c.rounds.join("; ")}. The total process takes ${company === "tcs" || company === "infosys" || company === "wipro" ? "1–3 weeks" : "3–8 weeks"}.` },
      },
      {
        "@type": "Question",
        name: `What is the ${c.name} India salary for ${c.roles[0]}?`,
        acceptedAnswer: { "@type": "Answer", text: `${c.name} India offers ${c.salary} for ${c.roles.slice(0,2).join(" and ")} roles in 2026. Compensation includes base salary, variable pay${company !== "tcs" && company !== "infosys" && company !== "wipro" ? ", ESOPs, and joining bonus" : ""}. Product companies like ${c.name} typically pay more than IT services firms.` },
      },
      {
        "@type": "Question",
        name: `How to prepare for ${c.name} interview in India?`,
        acceptedAnswer: { "@type": "Answer", text: `To prepare for ${c.name} interview: ${c.tips.join(". ")}. Use CareerLens to practice company-specific interview questions and get AI feedback on your answers.` },
      },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.carrerlens.com" },
      { "@type": "ListItem", position: 2, name: "Interview Prep", item: "https://www.carrerlens.com/interview" },
      { "@type": "ListItem", position: 3, name: `${c.name} Interview`, item: `https://www.carrerlens.com/interview/${company}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* SEO content — server rendered */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "32px 20px 0", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
        <div style={{ fontSize: ".75rem", color: "#9a958f", marginBottom: 12 }}>
          <a href="/" style={{ color: "#9a958f", textDecoration: "none" }}>Home</a> › <a href="/interview" style={{ color: "#9a958f", textDecoration: "none" }}>Interview Prep</a> › {c.name}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
          <div style={{ fontSize: "2.5rem" }}>{c.logo}</div>
          <div>
            <h1 style={{ fontWeight: 900, fontSize: "clamp(1.4rem,3vw,2rem)", color: "#1a1916", letterSpacing: "-.04em", lineHeight: 1.2, margin: 0 }}>
              {c.name} Interview Process India 2026
            </h1>
            <p style={{ color: "#5a5650", fontSize: ".88rem", margin: "6px 0 0" }}>{c.desc}</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 10, marginBottom: 24 }}>
          {[["💰 Salary", c.salary], ["📋 Rounds", `${c.rounds.length} rounds`], ["👥 Roles", c.roles.slice(0,2).join(", ")]].map(([label, val]) => (
            <div key={label as string} style={{ background: "#fff", border: "1px solid #e5e2de", borderRadius: 10, padding: "12px 16px" }}>
              <div style={{ fontSize: ".72rem", fontWeight: 700, color: "#9a958f", textTransform: "uppercase", letterSpacing: ".06em" }}>{label}</div>
              <div style={{ fontWeight: 700, fontSize: ".9rem", color: "#1a1916", marginTop: 4 }}>{val}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontWeight: 800, fontSize: "1.05rem", color: "#1a1916", margin: "0 0 10px" }}>Interview Rounds</h2>
        <ol style={{ paddingLeft: 20, marginBottom: 20 }}>
          {c.rounds.map((r, i) => <li key={i} style={{ fontSize: ".87rem", color: "#3a3632", lineHeight: 1.7, marginBottom: 4 }}>{r}</li>)}
        </ol>

        <h2 style={{ fontWeight: 800, fontSize: "1.05rem", color: "#1a1916", margin: "0 0 10px" }}>Preparation Tips</h2>
        <ul style={{ paddingLeft: 20, marginBottom: 24 }}>
          {c.tips.map((t, i) => <li key={i} style={{ fontSize: ".87rem", color: "#3a3632", lineHeight: 1.7, marginBottom: 4 }}>{t}</li>)}
        </ul>
      </div>

      <App defaultTab="interview" />
    </>
  );
}
