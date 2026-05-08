const store = new Map();

// Clean up old entries every 10 minutes to prevent memory leak
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of store.entries()) {
    if (now > entry.resetAt) store.delete(key);
  }
}, 10 * 60 * 1000);

export function rateLimit(req, key, limit, windowMinutes = 60) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  const mapKey = `${ip}:${key}`;
  const now = Date.now();
  const windowMs = windowMinutes * 60 * 1000;

  const entry = store.get(mapKey);

  if (!entry || now > entry.resetAt) {
    store.set(mapKey, { count: 1, resetAt: now + windowMs });
    return { allowed: true };
  }

  if (entry.count >= limit) {
    const minutesLeft = Math.ceil((entry.resetAt - now) / 60000);
    return { allowed: false, minutesLeft };
  }

  entry.count++;
  return { allowed: true };
}
