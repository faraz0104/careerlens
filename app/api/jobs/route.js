import { rateLimit } from "@/lib/rateLimit";

const COMPANY_EMOJI = {
  google: "🔵", amazon: "📦", microsoft: "🪟", meta: "🔷", apple: "🍎",
  tcs: "🏢", infosys: "🔶", wipro: "⚙️", freshworks: "🌿", hcl: "🏭",
  swiggy: "🧡", zomato: "🍕", razorpay: "💳", cred: "💎", phonepe: "💜",
  meesho: "🛍️", zepto: "⚡", ola: "🚗", flipkart: "🛒", paytm: "🔵",
  groww: "📈", urban: "🏠", byju: "📚", unacademy: "🎓", sharechat: "💬",
  adobe: "🎨", salesforce: "☁️", ibm: "💻", accenture: "🔷", cognizant: "🧠",
  deloitte: "🔷", capgemini: "🔵", mindtree: "🌳", mphasis: "🔵", ltimindtree: "🌳",
  persistent: "🔵", hexaware: "🔷", oracle: "🔴", sap: "🔵", linkedin: "🔷",
  uber: "⚫", netflix: "🔴", twitter: "🐦", airbnb: "🏠", stripe: "💳",
  instacart: "🛒", coinbase: "🪙", figma: "🎨", notion: "📝", slack: "💬",
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
  if (diff < 2) return "Just now";
  if (diff < 24) return `${diff}h ago`;
  const days = Math.floor(diff / 24);
  if (days === 1) return "1d ago";
  if (days < 30) return `${days}d ago`;
  return `${Math.floor(days / 30)}mo ago`;
}

function formatType(t = "") {
  const map = { FULLTIME: "Full-time", PARTTIME: "Part-time", CONTRACTOR: "Contract", INTERN: "Internship", REMOTE: "Remote" };
  return map[t] || "Full-time";
}

function formatSalary(min, max, currency) {
  if (!min && !max) return null;
  const fmt = (n) => {
    if (currency === "INR" || !currency) return `₹${Math.round(n / 100000)}L`;
    return `$${Math.round(n / 1000)}k`;
  };
  if (min && max) return `${fmt(min)}–${fmt(max)} PA`;
  if (min) return `${fmt(min)}+ PA`;
  return `Up to ${fmt(max)} PA`;
}

const KNOWN_SKILLS = [
  "React","Node.js","Python","Java","JavaScript","TypeScript","AWS","Docker","Kubernetes",
  "SQL","MongoDB","Go","Rust","C++","Angular","Vue","Spring","Django","FastAPI","Kafka","Redis",
  "GraphQL","REST","Git","PostgreSQL","MySQL","Flutter","Swift","Kotlin","Ruby","PHP","Scala",
  "Terraform","Azure","GCP","Spark","Hadoop","TensorFlow","PyTorch","scikit-learn","pandas",
  "Spring Boot","Express","Next.js","Elasticsearch","Jenkins","CI/CD","Microservices",
  "Linux","Bash","Ansible","Prometheus","Grafana","Selenium","Jest","Cypress","DevOps",
];

function extractSkills(job) {
  const text = [
    ...(job.job_required_skills || []),
    ...(job.job_highlights?.Qualifications || []),
    ...(job.job_highlights?.Responsibilities || []),
    job.job_description || "",
  ].join(" ");
  return KNOWN_SKILLS.filter(s => new RegExp(`\\b${s.replace(/[.+]/g, "\\$&")}\\b`, "i").test(text)).slice(0, 5);
}

function calcMatch(jobSkills = [], candidateSkills = []) {
  if (!jobSkills.length) return Math.floor(Math.random() * 20) + 62;
  const cLower = candidateSkills.map(s => s.toLowerCase());
  const matched = jobSkills.filter(s => cLower.some(c => c.includes(s.toLowerCase()) || s.toLowerCase().includes(c)));
  return Math.min(97, Math.max(54, Math.round(54 + (matched.length / jobSkills.length) * 43)));
}

export async function POST(req) {
  const { allowed, minutesLeft } = rateLimit(req, "jobs", 15, 60);
  if (!allowed) {
    return Response.json(
      { error: `Too many requests. Try again in ${minutesLeft} minute${minutesLeft !== 1 ? "s" : ""}.` },
      { status: 429 }
    );
  }

  try {
    const {
      skills = [],
      role = "Software Engineer",
      experience = "",
      missing = [],
      freshness = "",
      jobType = "",
      experienceLevel = "",
      locationFilter = "India",
      pageNum = 1,
    } = await req.json();

    // Build the search query
    const location = locationFilter === "India" || !locationFilter ? "India" : `${locationFilter} India`;
    const query = encodeURIComponent(`${role} ${location}`);

    // Map freshness filter
    const datePosted = freshness || "month";

    // Map employment type
    const empTypes = jobType && jobType !== "REMOTE" ? jobType : undefined;
    const remoteOnly = jobType === "REMOTE" ? "true" : "false";

    // Map experience level to job_requirements
    const expMap = {
      fresher: "no_experience,under_3_years_experience",
      junior: "under_3_years_experience",
      mid: "more_than_3_years_experience",
      senior: "more_than_3_years_experience",
    };
    const jobRequirements = expMap[experienceLevel] || undefined;

    // Fetch up to 3 pages to get ~30 results per load
    const numPages = pageNum === 1 ? 2 : 1;
    const startPage = pageNum === 1 ? 1 : pageNum + 1;

    let params = `query=${query}&page=${startPage}&num_pages=${numPages}&date_posted=${datePosted}&country=in&remote_jobs_only=${remoteOnly}`;
    if (empTypes) params += `&employment_types=${empTypes}`;
    if (jobRequirements) params += `&job_requirements=${jobRequirements}`;

    const res = await fetch(
      `https://jsearch.p.rapidapi.com/search-v2?${params}`,
      {
        headers: {
          "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
          "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
      }
    );

    if (!res.ok) throw new Error(`JSearch error: ${res.status}`);

    const data = await res.json();
    const raw = data.data?.jobs || data.data || [];

    if (!raw.length) return Response.json([]);

    const allSkills = [...skills, ...(missing || [])];

    const jobs = raw
      .filter(j => j.job_apply_link)
      .map((j, i) => {
        const jobSkills = extractSkills(j);
        const salary = formatSalary(j.job_min_salary, j.job_max_salary, j.job_salary_currency);
        return {
          id: (pageNum - 1) * 20 + i + 1,
          title: j.job_title,
          company: j.employer_name,
          logo: getEmoji(j.employer_name),
          location: [j.job_city, j.job_state, "India"].filter((v, idx, arr) => v && arr.indexOf(v) === idx).join(", "),
          type: formatType(j.job_employment_type),
          salary: salary || "Salary not listed",
          match: calcMatch(jobSkills, allSkills),
          skills: jobSkills,
          posted: formatPosted(j.job_posted_at_datetime_utc),
          postedDate: j.job_posted_at_datetime_utc,
          why: jobSkills.length
            ? `Matches your ${jobSkills.slice(0, 2).join(" & ")} experience`
            : `${role} role at ${j.employer_name}`,
          apply_url: j.job_apply_link,
        };
      })
      .sort((a, b) => b.match - a.match);

    // Notify owner on first search (not on load-more)
    if (pageNum === 1 && jobs.length) {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: "CareerLens <onboarding@resend.dev>",
          to: "khan97faraz@gmail.com",
          subject: `🔍 Job search — ${role} in ${locationFilter}`,
          html: `
            <p style="font-family:sans-serif;font-size:14px;">
              Someone searched for <strong>${role}</strong> jobs in <strong>${locationFilter}</strong>.<br><br>
              <b>Experience level:</b> ${experienceLevel || "Any"}<br>
              <b>Job type:</b> ${jobType || "Any"}<br>
              <b>Results found:</b> ${jobs.length}
            </p>
          `,
        });
      } catch (_) {}
    }

    return Response.json(jobs);
  } catch (error) {
    console.error("Jobs API error:", error);
    return Response.json([], { status: 500 });
  }
}
