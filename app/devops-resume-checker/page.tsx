import type { Metadata } from "next";
import App from "../CareerLens";

export const metadata: Metadata = {
  title: "DevOps Resume Checker India 2026 — ATS Score Free | CareerLens",
  description: "AI resume checker for DevOps engineers in India. ATS score, missing Docker/Kubernetes/AWS/CI-CD keywords, SRE signals. Free, instant, no login.",
  keywords: [
    "DevOps resume checker India 2026",
    "DevOps engineer resume India",
    "Kubernetes resume checker India",
    "Docker resume review India",
    "AWS DevOps resume India 2026",
    "SRE resume checker India",
    "cloud engineer resume India",
    "DevOps ATS score India",
    "CI CD resume India",
    "platform engineer resume India 2026",
  ],
  alternates: { canonical: "https://www.carrerlens.com/devops-resume-checker" },
  openGraph: {
    title: "DevOps Resume Checker India 2026 | CareerLens",
    description: "ATS score + Docker/K8s/AWS keyword gaps for DevOps engineers in India. Free instant review.",
    url: "https://www.carrerlens.com/devops-resume-checker",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CareerLens DevOps Resume Checker",
  url: "https://www.carrerlens.com/devops-resume-checker",
  description: "Free AI resume checker for DevOps/SRE engineers in India — Docker, Kubernetes, AWS, CI/CD keyword analysis",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "740" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What keywords should a DevOps engineer resume have in India?", acceptedAnswer: { "@type": "Answer", text: "Core DevOps keywords for India: Docker, Kubernetes, Terraform, Ansible, Jenkins/GitLab CI/GitHub Actions, AWS (EC2, ECS, EKS, Lambda, S3, RDS), Linux, Bash scripting, Python, Prometheus, Grafana, ELK Stack, Helm, ArgoCD, Vault. For SRE roles add: SLI/SLO/SLA, error budgets, incident management, on-call, chaos engineering. Include specific cloud certifications: AWS Solutions Architect, CKA (Certified Kubernetes Administrator)." } },
    { "@type": "Question", name: "How do I quantify DevOps achievements on a resume in India?", acceptedAnswer: { "@type": "Answer", text: "Use these patterns: 'Reduced deployment time from 45 minutes to 8 minutes by migrating from Jenkins to GitHub Actions with parallelised test suites.' Or: 'Designed Kubernetes cluster autoscaling strategy reducing EC2 costs by ₹12L/month at 40% average utilisation.' Or: 'Achieved 99.97% uptime for payment gateway serving ₹200 Cr daily transactions by implementing multi-region active-active setup.' Always quantify: deployment frequency, MTTR, cost savings, uptime, and infrastructure scale." } },
    { "@type": "Question", name: "Should a DevOps engineer mention cloud certifications on their resume?", acceptedAnswer: { "@type": "Answer", text: "Yes — cloud certifications are strong signals in India. In order of impact: CKA (Certified Kubernetes Administrator) and AWS Solutions Architect Professional are the most respected. AWS Solutions Architect Associate, AWS DevOps Engineer Professional, Google Cloud Professional DevOps Engineer, and Terraform Associate are all valuable. List them prominently — even before Skills for senior roles — as they're clear objective proof of expertise that beats vague claims." } },
  ],
};

const relatedTools = [
  { href: "/resume", label: "Resume Checker" },
  { href: "/software-engineer-resume-checker", label: "SWE Checker" },
  { href: "/backend-developer-resume-checker", label: "Backend Checker" },
  { href: "/ats-resume-checker", label: "ATS Checker" },
  { href: "/builder", label: "AI Builder" },
];

export default function DevOpsResumeCheckerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 20px 0", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" }}>
        <h1 style={{ fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#1a1916", letterSpacing: "-.04em", lineHeight: 1.2, margin: "0 0 10px" }}>
          DevOps Resume Checker India 2026
        </h1>
        <p style={{ color: "#5a5650", fontSize: ".95rem", lineHeight: 1.7, margin: "0 0 10px" }}>
          AI checks your DevOps/SRE resume for missing Docker, Kubernetes, AWS, and CI/CD keywords, certification gaps, and ATS compatibility. Instant score — free, no login.
        </p>
        <div style={{ margin: "0 0 4px", fontSize: ".8rem", color: "#888" }}>
          <strong style={{ color: "#555" }}>Related: </strong>
          {relatedTools.map((t, i) => (
            <span key={t.href}><a href={t.href} style={{ color: "#5046e4", textDecoration: "none" }}>{t.label}</a>{i < relatedTools.length - 1 ? " · " : ""}</span>
          ))}
        </div>
      </div>
      <App defaultTab="resume" />
    </>
  );
}
