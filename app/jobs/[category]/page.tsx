import type { Metadata } from "next";
import { notFound } from "next/navigation";
import App from "../../CareerLens";

const CATEGORIES: Record<string, { title: string; role: string; desc: string; keywords: string[] }> = {
  "software-engineer-jobs-india": {
    title: "Software Engineer Jobs in India 2026",
    role: "Software Engineer",
    desc: "Find the latest Software Engineer jobs in India 2026. Browse openings at Zepto, Razorpay, Google, Amazon, TCS and more. Real jobs with salary, skills match and direct apply.",
    keywords: ["software engineer jobs India 2026","SDE jobs India","software developer jobs Bangalore","software engineer salary India"],
  },
  "frontend-developer-jobs-india": {
    title: "Frontend Developer Jobs in India 2026",
    role: "Frontend Developer",
    desc: "Latest Frontend Developer jobs across India 2026. React, Angular, Vue roles at top startups and MNCs. Salaries, match scores and one-click apply.",
    keywords: ["frontend developer jobs India","React developer jobs India 2026","UI developer jobs Bangalore","frontend engineer jobs India"],
  },
  "data-scientist-jobs-india": {
    title: "Data Scientist Jobs in India 2026",
    role: "Data Scientist",
    desc: "Find Data Scientist and ML Engineer jobs in India 2026. Roles at analytics firms, unicorns and FAANG. See salary ranges and apply in one click.",
    keywords: ["data scientist jobs India 2026","machine learning jobs India","AI jobs India","data analyst jobs Bangalore Hyderabad"],
  },
  "product-manager-jobs-india": {
    title: "Product Manager Jobs in India 2026",
    role: "Product Manager",
    desc: "Browse Product Manager jobs at top Indian startups and MNCs. Openings at Swiggy, Flipkart, Meesho, Zomato and more. Direct apply links.",
    keywords: ["product manager jobs India 2026","PM jobs Bangalore","product management jobs India","APM jobs India"],
  },
  "devops-jobs-india": {
    title: "DevOps Engineer Jobs in India 2026",
    role: "DevOps Engineer",
    desc: "DevOps and Cloud Engineer jobs in India 2026. AWS, Kubernetes, Terraform roles at product companies and MNCs. Real openings with salary data.",
    keywords: ["devops jobs India 2026","cloud engineer jobs India","AWS jobs India","kubernetes jobs Bangalore"],
  },
  "digital-marketing-jobs-india": {
    title: "Digital Marketing Jobs in India 2026",
    role: "Digital Marketing Manager",
    desc: "Find Digital Marketing jobs across India 2026. SEO, SEM, Social Media and Content roles at D2C brands, agencies and startups.",
    keywords: ["digital marketing jobs India 2026","SEO jobs India","social media jobs India","marketing manager jobs Bangalore Mumbai"],
  },
  "ux-designer-jobs-india": {
    title: "UX Designer Jobs in India 2026",
    role: "UI UX Designer",
    desc: "Browse UX and Product Designer jobs in India 2026. Roles at top product companies, startups and design studios. Direct apply.",
    keywords: ["UX designer jobs India 2026","UI designer jobs Bangalore","product designer jobs India","Figma designer jobs India"],
  },
  "finance-jobs-india": {
    title: "Finance Analyst Jobs in India 2026",
    role: "Finance Analyst",
    desc: "Finance, Accounting and Analyst jobs in India 2026. Roles at banks, startups, Big 4 and MNCs across Mumbai, Bangalore and Delhi.",
    keywords: ["finance jobs India 2026","financial analyst jobs India","CA jobs India","investment banking jobs Mumbai"],
  },
  "hr-jobs-india": {
    title: "HR Manager Jobs in India 2026",
    role: "HR Manager",
    desc: "HR and Human Resources jobs across India 2026. Talent Acquisition, HRBP, and People Operations roles at tech companies and enterprises.",
    keywords: ["HR jobs India 2026","human resources jobs India","talent acquisition jobs India","HRBP jobs Bangalore"],
  },
  "backend-developer-jobs-india": {
    title: "Backend Developer Jobs in India 2026",
    role: "Backend Developer",
    desc: "Backend and API Engineer jobs in India 2026. Java, Python, Node.js, Go roles at fast-growing startups and MNCs. Salary insights included.",
    keywords: ["backend developer jobs India 2026","Java developer jobs India","Python developer jobs Bangalore","Node.js jobs India"],
  },
};

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return Object.keys(CATEGORIES).map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = CATEGORIES[category];
  if (!cat) return {};
  return {
    title: `${cat.title} | CareerLens`,
    description: cat.desc,
    keywords: cat.keywords,
    alternates: { canonical: `https://www.carrerlens.com/jobs/${category}` },
    openGraph: {
      title: cat.title,
      description: cat.desc,
      url: `https://www.carrerlens.com/jobs/${category}`,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
  };
}

export default async function JobCategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = CATEGORIES[category];
  if (!cat) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: cat.title,
    url: `https://www.carrerlens.com/jobs/${category}`,
    description: cat.desc,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.carrerlens.com" },
        { "@type": "ListItem", position: 2, name: "Jobs", item: "https://www.carrerlens.com/jobs" },
        { "@type": "ListItem", position: 3, name: cat.title, item: `https://www.carrerlens.com/jobs/${category}` },
      ],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <App defaultTab="jobs" defaultJobRole={cat.role} />
    </>
  );
}
