import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "Free Marketing Resume Checker India 2026 — ATS Score | CareerLens",
  description: "Check your digital marketing resume for ATS keywords, missing skills (SEO, SEM, Google Ads, Meta Ads, analytics) and formatting issues. Free resume checker for marketing roles in India.",
  keywords: ["marketing resume checker India","digital marketing resume checker","marketing resume review India 2026","SEO resume checker India","growth marketing resume India","performance marketing resume India","marketing resume keywords India"],
  alternates: { canonical: "https://www.carrerlens.com/marketing-resume-checker" },
  openGraph: {
    title: "Free Marketing Resume Checker India 2026 | CareerLens",
    description: "ATS score and keyword gaps for your marketing resume. Check SEO, SEM, Google Ads, Meta Ads and analytics skills. Free.",
    url: "https://www.carrerlens.com/marketing-resume-checker",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CareerLens Marketing Resume Checker",
  url: "https://www.carrerlens.com/marketing-resume-checker",
  description: "Free ATS resume checker for digital marketing and growth roles in India",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What keywords should a digital marketing resume have in India 2026?", acceptedAnswer: { "@type": "Answer", text: "Essential digital marketing keywords for Indian companies: SEO, SEM, Google Ads, Meta Ads (Facebook/Instagram Ads), Google Analytics, Google Tag Manager, content marketing, email marketing (Mailchimp, Klaviyo), CRM, HubSpot, Salesforce, conversion rate optimisation, A/B testing, performance marketing, ROAS, CPL, CAC, LTV, social media marketing, influencer marketing. Include specific campaign results with numbers." } },
    { "@type": "Question", name: "How should a digital marketer write their resume in India?", acceptedAnswer: { "@type": "Answer", text: "Lead with a skills section listing tools and channels. For each role, use performance metrics: managed ₹50L Google Ads budget with 3.2x ROAS, grew organic traffic 180% in 6 months via SEO, reduced CAC by 35% through audience segmentation. Vague statements like 'managed social media' never land callbacks. Quantify every achievement." } },
    { "@type": "Question", name: "What ATS score should a marketing resume have?", acceptedAnswer: { "@type": "Answer", text: "Marketing resumes typically score 40–55 on first scan because marketers focus on soft skills rather than explicit tool keywords. A score of 65+ will clear most ATS. Key fix: add all tools you use as explicit keywords (e.g., 'Google Ads', 'Semrush', 'Ahrefs', 'Hotjar') in a Skills section, since ATS looks for exact matches." } },
    { "@type": "Question", name: "What do growth marketing roles in India require on a resume?", acceptedAnswer: { "@type": "Answer", text: "Growth marketing roles at Zomato, Swiggy, Zepto, CRED, Razorpay look for: performance marketing (paid ads expertise), SQL or basic analytics, experimentation (A/B testing, multivariate testing), product analytics tools (Mixpanel, Amplitude, Clevertap), and funnel optimisation. These roles bridge marketing and product — show both sides on your resume." } },
  ],
};

const relatedTools = [
  { href: "/resume", label: "Resume Checker" },
  { href: "/product-manager-resume-checker", label: "PM Resume" },
  { href: "/ats-resume-checker", label: "ATS Checker" },
  { href: "/free-resume-review", label: "Free Review" },
  { href: "/jobs/digital-marketing-jobs-india", label: "Marketing Jobs India" },
];

export default function MarketingResumeCheckerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px 0", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
        <h1 style={{ fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#1a1916", letterSpacing: "-.04em", lineHeight: 1.2, margin: "0 0 10px" }}>
          Free Digital Marketing Resume Checker India 2026
        </h1>
        <p style={{ color: "#5a5650", fontSize: ".95rem", lineHeight: 1.7, margin: "0 0 10px" }}>
          Get your marketing resume scored for ATS. See which tools you're missing (Google Ads, SEO, Meta Ads, analytics), whether your campaign results are strong enough, and what to fix. Works for digital marketing, performance marketing, SEO, content, and growth roles.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "0 0 6px" }}>
          {["✓ Marketing keyword check","✓ SEO / SEM / Paid Ads skills","✓ Campaign metrics analysis","✓ ATS score out of 100","✓ Free, no login"].map(f => (
            <span key={f} style={{ background: "#f5f4f0", color: "#3a3632", fontSize: ".82rem", padding: "4px 10px", borderRadius: 20, fontWeight: 500 }}>{f}</span>
          ))}
        </div>
        <div style={{ margin: "14px 0 4px", fontSize: ".8rem", color: "#888" }}>
          <strong style={{ color: "#555" }}>Related tools: </strong>
          {relatedTools.map((t, i) => (
            <span key={t.href}><a href={t.href} style={{ color: "#c26b3a", textDecoration: "none" }}>{t.label}</a>{i < relatedTools.length - 1 ? " · " : ""}</span>
          ))}
        </div>
      </div>
      <App defaultTab="resume" />
    </>
  );
}
