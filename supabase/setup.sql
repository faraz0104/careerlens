-- Run this ONCE in your Supabase SQL Editor
-- Dashboard → SQL Editor → New query → paste → Run

CREATE TABLE IF NOT EXISTS resume_stats (
  id TEXT PRIMARY KEY,
  value BIGINT NOT NULL DEFAULT 0
);

-- Seed with the number already shown on the site
INSERT INTO resume_stats (id, value)
VALUES ('total_scans', 3200)
ON CONFLICT DO NOTHING;

-- Atomic increment function (avoids race conditions)
CREATE OR REPLACE FUNCTION increment_resume_scans()
RETURNS void AS $$
  UPDATE resume_stats SET value = value + 1 WHERE id = 'total_scans';
$$ LANGUAGE sql SECURITY DEFINER;
