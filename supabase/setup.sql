-- Run this ONCE in your Supabase SQL Editor
-- Dashboard → SQL Editor → New query → paste → Run

CREATE TABLE IF NOT EXISTS resume_stats (
  id TEXT PRIMARY KEY,
  value BIGINT NOT NULL DEFAULT 0
);

-- Seed with the number already shown on the site
INSERT INTO resume_stats (id, value)
VALUES ('total_scans', 1000)
ON CONFLICT DO NOTHING;

-- Atomic increment function (avoids race conditions)
CREATE OR REPLACE FUNCTION increment_resume_scans()
RETURNS void AS $$
  UPDATE resume_stats SET value = value + 1 WHERE id = 'total_scans';
$$ LANGUAGE sql SECURITY DEFINER;

-- Pro access codes (run this to enable promo code gifting)
CREATE TABLE IF NOT EXISTS pro_codes (
  code       TEXT PRIMARY KEY,
  note       TEXT,                        -- who you gave it to, e.g. "Niki LinkedIn"
  redeemed   BOOLEAN NOT NULL DEFAULT false,
  redeemed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Example: insert a code manually in Supabase SQL Editor like:
-- INSERT INTO pro_codes (code, note) VALUES ('NIKI2026', 'Niki Avraam - LinkedIn feedback');

-- Email leads captured from resume scan
CREATE TABLE IF NOT EXISTS email_leads (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email      TEXT NOT NULL UNIQUE,
  score      INTEGER,
  role       TEXT,
  source     TEXT DEFAULT 'resume_scan',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
