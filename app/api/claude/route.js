import Anthropic from "@anthropic-ai/sdk";
import { rateLimit } from "@/lib/rateLimit";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req) {
  const { allowed, minutesLeft } = rateLimit(req, "claude", 20, 60);
  if (!allowed) {
    return Response.json(
      { error: `Too many requests. Try again in ${minutesLeft} minute${minutesLeft !== 1 ? "s" : ""}.` },
      { status: 429 }
    );
  }

  try {
    const { system, user, max } = await req.json();

    const response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: max || 800,
      system,
      messages: [{ role: "user", content: user }],
    });

    return Response.json({ text: response.content[0].text });
  } catch (error) {
    console.error("Claude API error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
