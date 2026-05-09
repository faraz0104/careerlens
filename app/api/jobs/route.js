import { rateLimit } from "@/lib/rateLimit";

const COMPANY_EMOJI = {
  google: "🔵", amazon: "📦", microsoft: "🪟", meta: "🔷", apple: "🍎",
  tcs: "🏢", infosys: "🔶", wipro: "⚙️", freshworks: "🌿", hcl: "🏭",
  swiggy: "🧡", zomato: "🍕", razorpay: "💳", cred: "💎", phonepe: "💜",
  meesho: "🛍️", zepto: "⚡", ola: "🚗", flipkart: "🛒", paytm: "🔵",
  groww: "📈", urban: "🏠", byju: "📚", unacademy: "🎓", sharechat: "💬",
  adobe: "🎨", salesforce: "☁️", ibm: "💻", accenture: "🔷", cognizant: "🧠",
};

function getEmoji(company = "") {
  const key = company.toLowerCase();
  for (const [k, v] of Object.entries(COMPANY_EMOJI)) {
    if (key.includes(k)) return v;
  }
  return "🏢";
}

function formatPosted(dateStr) {
  if (!dateStr) return "Recently";
  const diff = Math.floor((Date.now() - new Date(dateStr)) / 3600000);
  if (diff < 24) return `${diff}h ago`;
  const days = Math.floor(diff / 24);
  if (days === 1) return "1d ago";
  if (days < 30) return `${days}d ago`;
  return `${Math.floor(days / 30)}mo ago`;
}

function formatType(t = "") {
  const map = { FULLTIME: "Full-time", PARTTIME: "Part-time", CONTRACTOR: "Contract", INTERN: "Internship" };
  return map[t] || "Full-time";
}

function formatSalary(min, max, currency) {
  if (!min && !max) return "Salary not listed";
  const fmt = (n) => {
    if (currency === "INR") return `₹${Math.round(n / 100000)}L`;
    return `$${Math.round(n / 1000)}k`;
  };
  if (min && max) return `${fmt(min)}–${fmt(max)} PA`;
  if (min) return `${fmt(min)}+ PA`;
  return `Up to ${fmt(max)} PA`;
}

function calcMatch(jobSkills = [], candidateSkills = []) {
  if (!jobSkills.length) return Math.floor(Math.random() * 20) + 60;
  const cLower = candidateSkills.map(s => s.toLowerCase());
  const matched = jobSkills.filter(s => cLower.some(c => c.includes(s.toLowerCase()) || s.toLowerCase().includes(c)));
  return Math.min(97, Math.max(52, Math.round(52 + (matched.length / jobSkills.length) * 45)));
}

function extractSkills(job) {
  const KNOWN = ["React","Node.js","Python","Java","JavaScript","TypeScript","AWS","Docker","Kubernetes",
    "SQL","MongoDB","Go","Rust","C++","Angular","Vue","Spring","Django","FastAPI","Kafka","Redis",
    "GraphQL","REST","Git","PostgreSQL","MySQL","Flutter","Swift","Kotlin","Ruby","PHP","Scala",
    "Terraform","Azure","GCP","Spark","Hadoop","TensorFlow","PyTorch","scikit-learn","pandas",
    "Spring Boot","Express","Next.js","Redis","Elasticsearch","Jenkins","CI/CD"];

  const text = [
    ...(job.job_required_skills || []),
    ...(job.job_highlights?.Qualifications || []),
    ...(job.job_highlights?.Responsibilities || []),
    job.job_description || "",
  ].join(" ");

  return KNOWN.filter(s => new RegExp(`\\b${s.replace(/[.+]/g, "\\$&")}\\b`, "i").test(text)).slice(0, 5);
}

export async function POST(req) {
  const { allowed, minutesLeft } = rateLimit(req, "jobs", 10, 60);
  if (!allowed) {
    return Response.json(
      { error: `Too many requests. Try again in ${minutesLeft} minute${minutesLeft !== 1 ? "s" : ""}.` },
      { status: 429 }
    );
  }

  try {
    const { skills = [], role = "", experience = "" } = await req.json();

    const query = encodeURIComponent(`${role} India`);
    const res = await fetch(
      `https://jsearch.p.rapidapi.com/search?query=${query}&page=1&num_pages=2&date_posted=month&country=in`,
      {
        headers: {
          "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
          "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
      }
    );

    if (!res.ok) throw new Error(`JSearch error: ${res.status}`);

    const data = await res.json();
    const raw = data.data || [];

    if (!raw.length) return Response.json([]);

    const jobs = raw
      .filter(j => j.job_apply_link)
      .map((j, i) => {
        const jobSkills = extractSkills(j);
        return {
          id: i + 1,
          title: j.job_title,
          company: j.employer_name,
          logo: getEmoji(j.employer_name),
          location: [j.job_city, j.job_state, "India"].filter(Boolean).join(", "),
          type: formatType(j.job_employment_type),
          salary: formatSalary(j.job_min_salary, j.job_max_salary, j.job_salary_currency),
          match: calcMatch(jobSkills, skills),
          skills: jobSkills,
          posted: formatPosted(j.job_posted_at_datetime_utc),
          why: jobSkills.length
            ? `Matches your ${jobSkills.slice(0, 2).join(" & ")} experience`
            : `${role} role at ${j.employer_name}`,
          apply_url: j.job_apply_link,
        };
      })
      .sort((a, b) => b.match - a.match);

    return Response.json(jobs);
  } catch (error) {
    console.error("Jobs API error:", error);
    return Response.json([], { status: 500 });
  }
}
