export async function GET(req) {
  const country = req.headers.get("x-vercel-ip-country") || "IN";
  const isIndia = country === "IN";
  return Response.json({ country, isIndia });
}
