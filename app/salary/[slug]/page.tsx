import type { Metadata } from "next";
import { notFound } from "next/navigation";
import App from "../../CareerLens";

const ROLES = ["software-engineer","frontend-developer","backend-developer","data-scientist","devops-engineer","product-manager","full-stack-developer","mobile-developer"];
const CITIES = ["bangalore","hyderabad","pune","mumbai","delhi-ncr","chennai","remote"];

const ROLE_LABELS: Record<string, string> = {
  "software-engineer": "Software Engineer",
  "frontend-developer": "Frontend Developer",
  "backend-developer": "Backend Developer",
  "data-scientist": "Data Scientist",
  "devops-engineer": "DevOps Engineer",
  "product-manager": "Product Manager",
  "full-stack-developer": "Full Stack Developer",
  "mobile-developer": "Mobile Developer",
};

const CITY_LABELS: Record<string, string> = {
  "bangalore": "Bangalore",
  "hyderabad": "Hyderabad",
  "pune": "Pune",
  "mumbai": "Mumbai",
  "delhi-ncr": "Delhi NCR",
  "chennai": "Chennai",
  "remote": "Remote (India)",
};

// Salary data per role per city (entry / mid / senior in LPA)
const SALARY: Record<string, Record<string, [string, string, string]>> = {
  "software-engineer": {
    "bangalore":  ["6–10","18–32","40–75"], "hyderabad": ["5–9","16–28","35–65"],
    "pune":       ["5–8","14–25","30–55"],  "mumbai":    ["6–10","16–28","35–60"],
    "delhi-ncr":  ["5–9","15–26","32–60"],  "chennai":   ["5–8","13–22","28–50"],
    "remote":     ["6–12","20–35","42–80"],
  },
  "frontend-developer": {
    "bangalore":  ["5–9","15–28","35–60"],  "hyderabad": ["4–8","13–24","30–55"],
    "pune":       ["4–7","12–22","28–50"],  "mumbai":    ["5–9","14–26","32–58"],
    "delhi-ncr":  ["4–8","13–24","30–55"],  "chennai":   ["4–7","11–20","25–45"],
    "remote":     ["5–10","16–30","38–65"],
  },
  "backend-developer": {
    "bangalore":  ["6–10","18–32","40–72"],  "hyderabad": ["5–9","16–28","35–65"],
    "pune":       ["5–8","14–25","30–55"],   "mumbai":    ["6–10","16–28","36–62"],
    "delhi-ncr":  ["5–9","15–26","32–60"],   "chennai":   ["5–8","13–22","28–50"],
    "remote":     ["6–12","20–35","42–78"],
  },
  "data-scientist": {
    "bangalore":  ["6–10","16–28","35–65"],  "hyderabad": ["5–9","14–25","30–58"],
    "pune":       ["5–8","12–22","28–50"],   "mumbai":    ["6–10","15–26","32–60"],
    "delhi-ncr":  ["5–9","14–24","30–55"],   "chennai":   ["4–8","12–20","25–45"],
    "remote":     ["5–10","16–30","36–68"],
  },
  "devops-engineer": {
    "bangalore":  ["5–9","15–26","32–60"],  "hyderabad": ["4–8","13–23","28–52"],
    "pune":       ["4–7","12–20","26–48"],  "mumbai":    ["5–9","14–24","30–56"],
    "delhi-ncr":  ["4–8","13–22","28–52"],  "chennai":   ["4–7","11–18","24–45"],
    "remote":     ["5–10","16–28","34–62"],
  },
  "product-manager": {
    "bangalore":  ["10–18","22–40","45–80"], "hyderabad": ["8–16","20–35","40–72"],
    "pune":       ["8–14","18–30","35–65"],  "mumbai":    ["10–18","22–38","42–75"],
    "delhi-ncr":  ["9–16","20–35","40–72"],  "chennai":   ["7–13","16–28","32–58"],
    "remote":     ["10–20","24–42","48–85"],
  },
  "full-stack-developer": {
    "bangalore":  ["6–10","18–32","38–70"],  "hyderabad": ["5–9","15–27","34–62"],
    "pune":       ["5–8","13–24","28–52"],   "mumbai":    ["6–10","16–28","34–62"],
    "delhi-ncr":  ["5–9","15–26","32–58"],   "chennai":   ["4–8","12–22","26–48"],
    "remote":     ["6–11","18–33","40–72"],
  },
  "mobile-developer": {
    "bangalore":  ["5–9","15–27","32–58"],  "hyderabad": ["4–8","13–23","28–52"],
    "pune":       ["4–7","12–20","26–48"],  "mumbai":    ["5–9","14–24","30–55"],
    "delhi-ncr":  ["4–8","13–22","28–50"],  "chennai":   ["4–7","11–18","23–42"],
    "remote":     ["5–10","15–28","34–62"],
  },
};

const TOP_COMPANIES: Record<string, string[]> = {
  "bangalore": ["Zepto","Razorpay","CRED","Swiggy","Flipkart","PhonePe","Meesho","Google","Amazon","Microsoft"],
  "hyderabad": ["Microsoft","Amazon","Google","Deloitte","Infosys","TCS","Wipro","Capgemini","HSBC Tech","Apple"],
  "pune":      ["Infosys","TCS","Wipro","Persistent","KPIT","Bajaj Finserv","Synechron","Barclays","Deutsche Bank","Cummins"],
  "mumbai":    ["JPMorgan","Goldman Sachs","Nykaa","Tata Digital","Jio","Paytm","HDFC","Accenture","Citibank","ThoughtWorks"],
  "delhi-ncr": ["Paytm","InMobi","OYO","Policybazaar","Naukri","HCL","TCS","IBM","Sapient","Adobe"],
  "chennai":   ["Zoho","Freshworks","TCS","Infosys","Wipro","Cognizant","Ford Tech","Amazon","Capgemini","DXC"],
  "remote":    ["Toptal","Razorpay","Zepto","Postman","Setu","Volopay","Jupiter","Fi Money","Cred","IndiaMart"],
};

function parseSlug(slug: string): { role: string; city: string } | null {
  for (const city of CITIES) {
    const suffix = `-in-${city}`;
    if (slug.endsWith(suffix)) {
      const role = slug.slice(0, -suffix.length);
      if (ROLES.includes(role)) return { role, city };
    }
  }
  return null;
}

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return ROLES.flatMap(role => CITIES.map(city => ({ slug: `${role}-in-${city}` })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const parsed = parseSlug(slug);
  if (!parsed) return {};
  const { role, city } = parsed;
  const rl = ROLE_LABELS[role], cl = CITY_LABELS[city];
  const sal = SALARY[role]?.[city];
  const salDesc = sal ? `₹${sal[0]} LPA (fresher), ₹${sal[1]} LPA (mid), ₹${sal[2]} LPA (senior)` : "";
  return {
    title: `${rl} Salary in ${cl} 2026 — ${salDesc ? sal![1] + " LPA avg" : "Complete Guide"} | CareerLens`,
    description: `${rl} salary in ${cl} in 2026: ${salDesc}. Compare by experience, company type and skills. Find out if you're underpaid and how to negotiate more.`,
    keywords: [
      `${rl.toLowerCase()} salary in ${cl.toLowerCase()} 2026`,
      `${rl.toLowerCase()} salary ${cl.toLowerCase()}`,
      `${rl.toLowerCase()} ${cl.toLowerCase()} salary per month`,
      `average ${rl.toLowerCase()} salary india 2026`,
      `${rl.toLowerCase()} salary india`,
      `IT salary ${cl.toLowerCase()} 2026`,
    ],
    alternates: { canonical: `https://www.carrerlens.com/salary/${slug}` },
    openGraph: {
      title: `${rl} Salary in ${cl} 2026 — Real Numbers | CareerLens`,
      description: `${rl} salary in ${cl}: ${salDesc}. Know your market rate.`,
      url: `https://www.carrerlens.com/salary/${slug}`,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
  };
}

export default async function SalarySlugPage({ params }: Props) {
  const { slug } = await params;
  const parsed = parseSlug(slug);
  if (!parsed) notFound();

  const { role, city } = parsed;
  const rl = ROLE_LABELS[role], cl = CITY_LABELS[city];
  const sal = SALARY[role]?.[city] ?? ["5–8", "14–25", "30–55"];
  const companies = TOP_COMPANIES[city] ?? TOP_COMPANIES["bangalore"];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is the average ${rl} salary in ${cl} in 2026?`,
        acceptedAnswer: { "@type": "Answer", text: `The average ${rl} salary in ${cl} in 2026 ranges from ₹${sal[0]} LPA for freshers, ₹${sal[1]} LPA for mid-level engineers (3–5 years), and ₹${sal[2]} LPA for senior engineers (5+ years). Product companies and funded startups typically pay 30–50% more than IT services firms.` },
      },
      {
        "@type": "Question",
        name: `Which companies pay the most for ${rl}s in ${cl}?`,
        acceptedAnswer: { "@type": "Answer", text: `Top-paying companies for ${rl}s in ${cl} include ${companies.slice(0,5).join(", ")} and others. Startups and product companies generally offer higher base salaries plus ESOPs, while IT services companies offer more stability.` },
      },
      {
        "@type": "Question",
        name: `Is ₹${sal[1].split("–")[0]} LPA a good salary for a ${rl} in ${cl}?`,
        acceptedAnswer: { "@type": "Answer", text: `Yes, ₹${sal[1].split("–")[0]} LPA is around the market average for a mid-level ${rl} in ${cl} with 3–5 years of experience. If you have strong skills in cloud, system design or AI/ML, you can negotiate ₹${sal[1].split("–")[1]} LPA or higher. Use CareerLens to benchmark your specific profile.` },
      },
      {
        "@type": "Question",
        name: `How do I negotiate a higher salary as a ${rl} in ${cl}?`,
        acceptedAnswer: { "@type": "Answer", text: `To negotiate a higher ${rl} salary in ${cl}: (1) Research market rates using tools like CareerLens, (2) Get competing offers — even one offer from another company gives you significant leverage, (3) Highlight specific achievements with numbers, (4) Ask for a total compensation breakdown including variable pay, ESOPs and joining bonus, (5) Be prepared to counter at 15–20% above the initial offer.` },
      },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.carrerlens.com" },
      { "@type": "ListItem", position: 2, name: "Salary", item: "https://www.carrerlens.com/salary" },
      { "@type": "ListItem", position: 3, name: `${rl} in ${cl}`, item: `https://www.carrerlens.com/salary/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* SEO content block — server rendered, visible to Google */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "32px 20px 0", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
        <div style={{ fontSize: ".75rem", color: "#9a958f", marginBottom: 12 }}>
          <a href="/" style={{ color: "#9a958f", textDecoration: "none" }}>Home</a> › <a href="/salary" style={{ color: "#9a958f", textDecoration: "none" }}>Salary</a> › {rl} in {cl}
        </div>
        <h1 style={{ fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#1a1916", letterSpacing: "-.04em", lineHeight: 1.2, margin: "0 0 10px" }}>
          {rl} Salary in {cl} 2026
        </h1>
        <p style={{ color: "#5a5650", fontSize: ".95rem", lineHeight: 1.7, margin: "0 0 24px" }}>
          Real salary data for {rl}s in {cl} — entry level to senior, by company type, with negotiation benchmarks.
        </p>

        {/* Salary table */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 28 }}>
          {[["Fresher / 0–2 yrs", sal[0], "#fff7f3"], ["Mid-level / 3–5 yrs", sal[1], "#f0faf4"], ["Senior / 5+ yrs", sal[2], "#f0f4ff"]].map(([label, range, bg]) => (
            <div key={label} style={{ background: bg as string, border: "1px solid #e5e2de", borderRadius: 12, padding: "16px 18px", textAlign: "center" }}>
              <div style={{ fontSize: ".72rem", fontWeight: 700, color: "#9a958f", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 8 }}>{label}</div>
              <div style={{ fontWeight: 900, fontSize: "1.5rem", color: "#1a1916", letterSpacing: "-.04em" }}>₹{range}</div>
              <div style={{ fontSize: ".72rem", color: "#9a958f", marginTop: 4 }}>LPA</div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: ".88rem", color: "#5a5650", lineHeight: 1.7, marginBottom: 24 }}>
          The data above reflects {cl} market rates for {rl}s in 2026, based on job postings, offer letters and community data.
          Product companies like {companies.slice(0,3).join(", ")} typically pay at the higher end, while IT services firms (TCS, Infosys, Wipro) pay at the lower end.
          Use the salary tool below to benchmark your specific profile.
        </p>

        <div style={{ background: "#f7f6f2", borderRadius: 10, padding: "14px 18px", marginBottom: 28, fontSize: ".83rem", color: "#5a5650" }}>
          <strong style={{ color: "#1a1916" }}>Top companies hiring {rl}s in {cl}:</strong>{" "}
          {companies.join(", ")}
        </div>
      </div>

      <App defaultTab="salary" />
    </>
  );
}
