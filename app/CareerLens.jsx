import { useState, useEffect, useRef, useCallback } from "react";

/* ── FONTS & GLOBAL STYLES ─────────────────────────────────── */
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300;12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=DM+Mono:wght@400;500&family=Instrument+Sans:wght@400;500;600&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --bg: #f7f6f2;
  --bg2: #eeecea;
  --bg3: #e5e2de;
  --bg4: #d8d4cf;
  --ink: #1a1916;
  --ink2: #5a5650;
  --ink3: #9a958f;
  --accent: #e85a2a;
  --accent2: #f07040;
  --accent-dim: rgba(232,90,42,0.1);
  --accent-glow: rgba(232,90,42,0.25);
  --green: #2d8a4e;
  --green-dim: rgba(45,138,78,0.1);
  --blue: #2563eb;
  --blue-dim: rgba(37,99,235,0.08);
  --amber: #c2790a;
  --amber-dim: rgba(194,121,10,0.1);
  --red: #c53030;
  --red-dim: rgba(197,48,48,0.1);
  --border: rgba(26,25,22,0.08);
  --border2: rgba(26,25,22,0.14);
  --shadow: 0 1px 3px rgba(26,25,22,0.08), 0 4px 16px rgba(26,25,22,0.06);
  --shadow2: 0 2px 8px rgba(26,25,22,0.1), 0 8px 32px rgba(26,25,22,0.08);
  --r: 10px; --r2: 14px; --r3: 20px;
  --font-head: 'Bricolage Grotesque', sans-serif;
  --font-body: 'Instrument Sans', sans-serif;
  --font-mono: 'DM Mono', monospace;
}
html, body { font-family: var(--font-body); background: var(--bg); color: var(--ink); -webkit-font-smoothing: antialiased; min-height: 100vh; }
button { font-family: var(--font-body); cursor: pointer; border: none; outline: none; }
input, textarea, select { font-family: var(--font-body); outline: none; }
::-webkit-scrollbar { width: 4px; height: 4px; }
::-webkit-scrollbar-track { background: var(--bg2); }
::-webkit-scrollbar-thumb { background: var(--bg4); border-radius: 99px; }

/* ── NAV ─────────────────────────────────────────── */
.nav {
  height: 58px; display: flex; align-items: center; padding: 0 2rem; gap: 8px;
  background: rgba(247,246,242,0.92); backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border); position: sticky; top: 0; z-index: 100;
}
.nav-logo { display: flex; align-items: center; gap: 8px; font-family: var(--font-head); font-weight: 800; font-size: 1.1rem; letter-spacing: -0.03em; margin-right: 12px; text-decoration: none; color: var(--ink); }
.nav-logo-icon { width: 30px; height: 30px; background: var(--accent); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: .85rem; font-weight: 900; color: #fff; }
.nav-links { display: flex; gap: 2px; flex: 1; }
.nav-link { padding: 6px 12px; border-radius: 7px; font-size: .8rem; font-weight: 600; color: var(--ink2); background: transparent; transition: all .15s; text-decoration: none; }
.nav-link:hover { color: var(--ink); background: var(--bg2); }
.nav-link.active { color: var(--accent); background: var(--accent-dim); }
.nav-right { display: flex; align-items: center; gap: 8px; margin-left: auto; }
.pro-badge { font-size: .68rem; font-weight: 700; padding: 2px 8px; border-radius: 99px; background: linear-gradient(135deg,#e8a020,#e8602a); color: #fff; letter-spacing: .04em; }

/* ── BUTTONS ─────────────────────────────────────── */
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 7px; padding: 9px 18px; border-radius: var(--r); font-size: .83rem; font-weight: 600; transition: all .15s; white-space: nowrap; font-family: var(--font-body); }
.btn-primary { background: var(--accent); color: #fff; box-shadow: 0 2px 8px var(--accent-glow); }
.btn-primary:hover { background: var(--accent2); transform: translateY(-1px); box-shadow: 0 4px 16px var(--accent-glow); }
.btn-ghost { background: transparent; color: var(--ink2); border: 1.5px solid var(--border2); }
.btn-ghost:hover { color: var(--ink); background: var(--bg2); border-color: var(--bg4); }
.btn-dark { background: var(--ink); color: var(--bg); }
.btn-dark:hover { background: #2d2c28; transform: translateY(-1px); }
.btn-green { background: var(--green-dim); color: var(--green); border: 1px solid rgba(45,138,78,.2); }
.btn-green:hover { background: rgba(45,138,78,.18); }
.btn-sm { padding: 5px 12px; font-size: .76rem; }
.btn-lg { padding: 12px 28px; font-size: .92rem; }
.btn:disabled { opacity: .5; cursor: not-allowed; transform: none; }

/* ── CARDS ───────────────────────────────────────── */
.card { background: #fff; border: 1px solid var(--border); border-radius: var(--r2); box-shadow: var(--shadow); }
.card-head { padding: 14px 18px; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.card-title { font-family: var(--font-head); font-size: .92rem; font-weight: 700; letter-spacing: -.02em; }
.card-body { padding: 18px; }

/* ── HERO ────────────────────────────────────────── */
.hero { padding: 80px 2rem 60px; text-align: center; position: relative; overflow: hidden; }
.hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(232,90,42,.06) 0%, transparent 70%); pointer-events: none; }
.hero-label { display: inline-flex; align-items: center; gap: 6px; font-size: .75rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: var(--accent); background: var(--accent-dim); border: 1px solid rgba(232,90,42,.2); padding: 4px 12px; border-radius: 99px; margin-bottom: 20px; }
.hero-title { font-family: var(--font-head); font-size: clamp(2rem, 5vw, 3.4rem); font-weight: 800; letter-spacing: -.04em; line-height: 1.1; margin-bottom: 16px; max-width: 820px; margin-left: auto; margin-right: auto; }
.hero-title em { color: var(--accent); font-style: normal; }
.hero-sub { font-size: 1rem; color: var(--ink2); max-width: 560px; margin: 0 auto 32px; line-height: 1.65; }
.hero-actions { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-bottom: 48px; }
.hero-stats { display: flex; gap: 32px; justify-content: center; flex-wrap: wrap; padding-top: 32px; border-top: 1px solid var(--border); max-width: 600px; margin: 0 auto; }
.hero-stat-n { font-family: var(--font-head); font-size: 1.8rem; font-weight: 800; letter-spacing: -.04em; }
.hero-stat-l { font-size: .75rem; color: var(--ink3); font-weight: 500; margin-top: 2px; }

/* ── UPLOAD ZONE ─────────────────────────────────── */
.upload-zone { border: 2px dashed var(--border2); border-radius: var(--r2); padding: 48px 24px; text-align: center; transition: all .2s; cursor: pointer; background: var(--bg); }
.upload-zone:hover, .upload-zone.drag { border-color: var(--accent); background: var(--accent-dim); }
.upload-icon { font-size: 2.5rem; margin-bottom: 12px; }
.upload-title { font-family: var(--font-head); font-size: 1rem; font-weight: 700; margin-bottom: 4px; }
.upload-sub { font-size: .8rem; color: var(--ink3); }

/* ── SCORE RING ──────────────────────────────────── */
.score-ring-wrap { display: flex; flex-direction: column; align-items: center; gap: 8px; }
.score-ring { width: 120px; height: 120px; position: relative; }
.score-ring svg { transform: rotate(-90deg); }
.score-ring-bg { fill: none; stroke: var(--bg3); stroke-width: 10; }
.score-ring-fill { fill: none; stroke-width: 10; stroke-linecap: round; transition: stroke-dashoffset .8s cubic-bezier(.4,0,.2,1); }
.score-num { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-family: var(--font-head); font-size: 1.8rem; font-weight: 800; letter-spacing: -.04em; }
.score-label { font-size: .75rem; font-weight: 600; color: var(--ink2); }

/* ── FEATURE GRID ────────────────────────────────── */
.features-section { padding: 60px 2rem; }
.features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; max-width: 1100px; margin: 0 auto; }
.feature-card { background: #fff; border: 1px solid var(--border); border-radius: var(--r2); padding: 22px; transition: all .2s; }
.feature-card:hover { transform: translateY(-2px); box-shadow: var(--shadow2); border-color: var(--accent); }
.feature-icon { width: 44px; height: 44px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; margin-bottom: 12px; }
.feature-name { font-family: var(--font-head); font-size: .95rem; font-weight: 700; margin-bottom: 5px; letter-spacing: -.02em; }
.feature-desc { font-size: .8rem; color: var(--ink2); line-height: 1.6; }
.feature-tag { font-size: .65rem; font-weight: 700; padding: 2px 7px; border-radius: 99px; margin-top: 8px; display: inline-block; }

/* ── PAGE LAYOUT ─────────────────────────────────── */
.page { max-width: 1000px; margin: 0 auto; padding: 32px 20px; }
.page-header { margin-bottom: 28px; }
.page-title { font-family: var(--font-head); font-size: 1.6rem; font-weight: 800; letter-spacing: -.04em; margin-bottom: 4px; }
.page-sub { font-size: .84rem; color: var(--ink2); }

/* ── TAGS & BADGES ───────────────────────────────── */
.tag { font-size: .67rem; font-weight: 700; padding: 2px 8px; border-radius: 99px; }
.tag-green { background: var(--green-dim); color: var(--green); }
.tag-orange { background: var(--accent-dim); color: var(--accent); }
.tag-blue { background: var(--blue-dim); color: var(--blue); }
.tag-amber { background: var(--amber-dim); color: var(--amber); }
.tag-red { background: var(--red-dim); color: var(--red); }
.tag-gray { background: var(--bg3); color: var(--ink2); }
.difficulty-easy { background: var(--green-dim); color: var(--green); }
.difficulty-medium { background: var(--amber-dim); color: var(--amber); }
.difficulty-hard { background: var(--red-dim); color: var(--red); }

/* ── FORMS ───────────────────────────────────────── */
.input { width: 100%; background: var(--bg); border: 1.5px solid var(--border2); border-radius: var(--r); padding: 9px 13px; color: var(--ink); font-size: .85rem; transition: border-color .2s; }
.input:focus { border-color: var(--accent); background: #fff; }
.input::placeholder { color: var(--ink3); }
.select { appearance: none; cursor: pointer; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%239a958f' stroke-width='1.5' fill='none'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 12px center; padding-right: 32px; }
.input-group { margin-bottom: 14px; }
.input-label { font-size: .78rem; font-weight: 600; margin-bottom: 5px; display: block; color: var(--ink2); }

/* ── INFO BOXES ──────────────────────────────────── */
.info-box { border-radius: var(--r); padding: 11px 14px; display: flex; gap: 9px; font-size: .79rem; line-height: 1.55; }
.info-success { background: var(--green-dim); border: 1px solid rgba(45,138,78,.2); }
.info-warn { background: var(--amber-dim); border: 1px solid rgba(194,121,10,.2); }
.info-accent { background: var(--accent-dim); border: 1px solid rgba(232,90,42,.2); }
.info-blue { background: var(--blue-dim); border: 1px solid rgba(37,99,235,.15); }

/* ── TABS ────────────────────────────────────────── */
.tabs { display: flex; gap: 4px; background: var(--bg2); border-radius: var(--r); padding: 4px; margin-bottom: 20px; }
.tab { flex: 1; padding: 7px 12px; border-radius: 7px; font-size: .8rem; font-weight: 600; color: var(--ink2); background: transparent; transition: all .15s; text-align: center; }
.tab.active { background: #fff; color: var(--ink); box-shadow: var(--shadow); }

/* ── COMPANY CARDS ───────────────────────────────── */
.company-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 10px; margin-bottom: 20px; }
.company-card { background: #fff; border: 1.5px solid var(--border); border-radius: var(--r2); padding: 14px; text-align: center; cursor: pointer; transition: all .15s; }
.company-card:hover { border-color: var(--accent); transform: translateY(-1px); box-shadow: var(--shadow); }
.company-card.selected { border-color: var(--accent); background: var(--accent-dim); }
.company-logo { font-size: 1.6rem; margin-bottom: 6px; }
.company-name { font-size: .82rem; font-weight: 700; margin-bottom: 2px; }
.company-meta { font-size: .7rem; color: var(--ink3); }

/* ── QUESTION CARDS ──────────────────────────────── */
.question-card { background: #fff; border: 1px solid var(--border); border-radius: var(--r2); padding: 16px; margin-bottom: 10px; transition: all .15s; }
.question-card:hover { border-color: var(--border2); box-shadow: var(--shadow); }
.q-top { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 8px; }
.q-num { width: 24px; height: 24px; border-radius: 50%; background: var(--accent-dim); color: var(--accent); font-size: .72rem; font-weight: 800; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; }
.q-text { font-size: .85rem; font-weight: 600; color: var(--ink); line-height: 1.5; flex: 1; }
.q-answer { font-size: .8rem; color: var(--ink2); line-height: 1.6; background: var(--bg); border-radius: var(--r); padding: 10px 12px; margin-top: 8px; }

/* ── JOB CARDS ───────────────────────────────────── */
.job-card { background: #fff; border: 1px solid var(--border); border-radius: var(--r2); padding: 18px; margin-bottom: 10px; display: flex; gap: 14px; transition: all .15s; }
.job-card:hover { border-color: var(--accent); box-shadow: var(--shadow); }
.job-logo { width: 48px; height: 48px; border-radius: 10px; background: var(--bg2); display: flex; align-items: center; justify-content: center; font-size: 1.4rem; flex-shrink: 0; }
.job-title { font-family: var(--font-head); font-size: .95rem; font-weight: 700; margin-bottom: 3px; }
.job-company { font-size: .82rem; color: var(--ink2); margin-bottom: 6px; }
.job-tags { display: flex; gap: 5px; flex-wrap: wrap; }
.job-match { font-family: var(--font-head); font-size: 1.1rem; font-weight: 800; color: var(--green); margin-left: auto; flex-shrink: 0; }

/* ── PRICING ─────────────────────────────────────── */
.pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; max-width: 860px; margin: 0 auto; }
.price-card { background: #fff; border: 1.5px solid var(--border); border-radius: var(--r3); padding: 28px 24px; position: relative; }
.price-card.featured { border-color: var(--accent); background: linear-gradient(135deg, rgba(232,90,42,.02), #fff); }
.price-badge { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: var(--accent); color: #fff; font-size: .68rem; font-weight: 800; padding: 3px 12px; border-radius: 99px; white-space: nowrap; letter-spacing: .04em; }
.price-name { font-family: var(--font-head); font-size: 1rem; font-weight: 800; margin-bottom: 4px; }
.price-who { font-size: .75rem; color: var(--ink3); margin-bottom: 16px; }
.price-amount { font-family: var(--font-head); font-size: 2.6rem; font-weight: 900; letter-spacing: -.06em; margin-bottom: 4px; }
.price-amount span { font-size: .9rem; color: var(--ink2); font-weight: 400; letter-spacing: 0; }
.price-trial { font-size: .72rem; color: var(--green); font-weight: 600; margin-bottom: 20px; }
.price-features { display: flex; flex-direction: column; gap: 8px; margin-bottom: 24px; }
.price-feature { font-size: .8rem; color: var(--ink2); display: flex; gap: 7px; align-items: flex-start; }
.price-feature::before { content: '✓'; color: var(--green); font-weight: 800; flex-shrink: 0; }
.price-feature.no::before { content: '✗'; color: var(--ink3); }
.price-feature.no { color: var(--ink3); }

/* ── SALARY DISPLAY ──────────────────────────────── */
.salary-range { display: flex; align-items: center; gap: 12px; padding: 16px; background: var(--green-dim); border: 1px solid rgba(45,138,78,.2); border-radius: var(--r2); margin-bottom: 14px; }
.salary-num { font-family: var(--font-head); font-size: 1.8rem; font-weight: 900; color: var(--green); letter-spacing: -.04em; }
.salary-label { font-size: .75rem; color: var(--green); font-weight: 600; }

/* ── SKILL GAPS ──────────────────────────────────── */
.skill-pill { display: inline-flex; align-items: center; gap: 5px; padding: 4px 10px; border-radius: 99px; font-size: .77rem; font-weight: 600; margin: 3px; }
.skill-have { background: var(--green-dim); color: var(--green); border: 1px solid rgba(45,138,78,.2); }
.skill-missing { background: var(--red-dim); color: var(--red); border: 1px solid rgba(197,48,48,.2); }
.skill-learn { background: var(--amber-dim); color: var(--amber); border: 1px solid rgba(194,121,10,.2); }

/* ── CODE EDITOR ─────────────────────────────────── */
.code-editor { background: #1a1916; border-radius: var(--r2); overflow: hidden; }
.code-editor-header { display: flex; align-items: center; gap: 8px; padding: 10px 14px; background: #2a2926; border-bottom: 1px solid rgba(255,255,255,.08); }
.code-dot { width: 10px; height: 10px; border-radius: 50%; }
.code-textarea { width: 100%; min-height: 200px; background: #1a1916; color: #e8e4de; font-family: var(--font-mono); font-size: .82rem; line-height: 1.7; padding: 16px; border: none; resize: vertical; }

/* ── TOAST ───────────────────────────────────────── */
.toast { position: fixed; bottom: 24px; right: 24px; background: var(--ink); color: var(--bg); border-radius: var(--r2); padding: 12px 18px; font-size: .82rem; font-weight: 600; z-index: 999; display: flex; align-items: center; gap: 8px; box-shadow: var(--shadow2); animation: toastIn .3s ease; }
@keyframes toastIn { from { transform: translateY(12px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

/* ── SPINNER ─────────────────────────────────────── */
.spin { width: 15px; height: 15px; border: 2px solid rgba(255,255,255,.3); border-top-color: currentColor; border-radius: 50%; animation: spinning .6s linear infinite; display: inline-block; }
@keyframes spinning { to { transform: rotate(360deg); } }

/* ── PROGRESS BAR ────────────────────────────────── */
.progress-bar { height: 6px; background: var(--bg3); border-radius: 99px; overflow: hidden; margin: 8px 0; }
.progress-fill { height: 100%; border-radius: 99px; transition: width .6s ease; }

/* ── MODAL ───────────────────────────────────────── */
.overlay { position: fixed; inset: 0; background: rgba(26,25,22,.6); backdrop-filter: blur(6px); z-index: 500; display: flex; align-items: center; justify-content: center; padding: 20px; }
.modal { background: #fff; border-radius: var(--r3); padding: 28px; width: 100%; max-width: 520px; max-height: 90vh; overflow-y: auto; box-shadow: var(--shadow2); }
.modal-title { font-family: var(--font-head); font-size: 1.2rem; font-weight: 800; letter-spacing: -.03em; margin-bottom: 6px; }
.modal-sub { font-size: .83rem; color: var(--ink2); margin-bottom: 20px; line-height: 1.5; }

/* ── ADSENSE PLACEHOLDER ──────────────────────────── */
.ad-slot { background: var(--bg2); border: 1px dashed var(--bg4); border-radius: var(--r); display: flex; align-items: center; justify-content: center; color: var(--ink3); font-size: .72rem; font-weight: 600; text-transform: uppercase; letter-spacing: .08em; }
.ad-leaderboard { height: 90px; margin: 0 0 20px; }
.ad-rectangle { height: 250px; margin-bottom: 20px; }
.ad-sidebar { height: 600px; }

/* ── SECTION HEADERS ─────────────────────────────── */
.section-header { text-align: center; max-width: 600px; margin: 0 auto 40px; }
.section-tag { font-size: .7rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: var(--accent); margin-bottom: 10px; }
.section-title { font-family: var(--font-head); font-size: clamp(1.4rem, 3vw, 2rem); font-weight: 800; letter-spacing: -.04em; margin-bottom: 10px; }
.section-sub { font-size: .88rem; color: var(--ink2); line-height: 1.6; }

/* ── FOOTER ──────────────────────────────────────── */
.footer { background: var(--ink); color: rgba(247,246,242,.7); padding: 48px 2rem 24px; margin-top: 60px; }
.footer-grid { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 32px; max-width: 1100px; margin: 0 auto 32px; }
.footer-brand { font-family: var(--font-head); font-size: 1.1rem; font-weight: 800; color: var(--bg); margin-bottom: 8px; }
.footer-tagline { font-size: .78rem; line-height: 1.6; }
.footer-heading { font-size: .72rem; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; color: rgba(247,246,242,.4); margin-bottom: 10px; }
.footer-link { display: block; font-size: .8rem; color: rgba(247,246,242,.6); margin-bottom: 6px; cursor: pointer; transition: color .15s; text-decoration: none; }
.footer-link:hover { color: var(--bg); }
.footer-bottom { border-top: 1px solid rgba(247,246,242,.08); padding-top: 20px; display: flex; justify-content: space-between; align-items: center; max-width: 1100px; margin: 0 auto; font-size: .75rem; }

/* ── ROADMAP ─────────────────────────────────────── */
.roadmap-item { display: flex; gap: 14px; padding: 14px 0; position: relative; }
.roadmap-item:not(:last-child)::after { content: ''; position: absolute; left: 15px; top: 48px; bottom: 0; width: 1px; background: var(--border2); }
.roadmap-dot { width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: .72rem; font-weight: 800; flex-shrink: 0; color: #fff; z-index: 1; }
.roadmap-month { font-size: .7rem; font-weight: 700; color: var(--ink3); text-transform: uppercase; letter-spacing: .06em; margin-bottom: 3px; }
.roadmap-action { font-size: .85rem; font-weight: 600; margin-bottom: 2px; }
.roadmap-detail { font-size: .78rem; color: var(--ink2); line-height: 1.5; }

/* ── MISC ────────────────────────────────────────── */
.divider { height: 1px; background: var(--border); margin: 16px 0; }
.two-col { display: grid; grid-template-columns: 1fr 340px; gap: 20px; }
.three-col { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; }
.flex { display: flex; } .items-center { align-items: center; } .gap-2 { gap: 8px; } .gap-3 { gap: 12px; } .ml-auto { margin-left: auto; }
.fw-700 { font-weight: 700; } .text2 { color: var(--ink2); } .text3 { color: var(--ink3); }
.fs-sm { font-size: .82rem; } .fs-xs { font-size: .74rem; }
.mt-2 { margin-top: 8px; } .mt-3 { margin-top: 12px; } .mt-4 { margin-top: 16px; }
.mb-2 { margin-bottom: 8px; } .mb-3 { margin-bottom: 12px; } .mb-4 { margin-bottom: 16px; }
.w-full { width: 100%; } .text-center { text-align: center; }
.bg-card { background: #fff; border: 1px solid var(--border); border-radius: var(--r2); padding: 18px; }
`;

/* ── DATA ───────────────────────────────────────── */
const COMPANIES = [
  { id:"google", name:"Google", logo:"🔵", roles:["SWE L3","SWE L4","SWE L5","PM","Data Scientist"], questions:120 },
  { id:"amazon", name:"Amazon", logo:"📦", roles:["SDE1","SDE2","SDE3","PM","BA"], questions:180 },
  { id:"microsoft", name:"Microsoft", logo:"🪟", roles:["SWE 59","SWE 60","SWE 62","PM","DS"], questions:140 },
  { id:"meta", name:"Meta", logo:"🔷", roles:["E3","E4","E5","PM","DS"], questions:110 },
  { id:"apple", name:"Apple", logo:"🍎", roles:["ICT2","ICT3","ICT4","PM","ML Engineer"], questions:95 },
  { id:"netflix", name:"Netflix", logo:"🎬", roles:["SWE L4","SWE L5","SWE L6","PM"], questions:80 },
  { id:"uber", name:"Uber", logo:"🚗", roles:["SWE-2","SWE-3","Senior SWE","PM"], questions:100 },
  { id:"flipkart", name:"Flipkart", logo:"🛒", roles:["SDE1","SDE2","Senior SDE","PM"], questions:95 },
  { id:"swiggy", name:"Swiggy", logo:"🧡", roles:["SDE1","SDE2","SDE3","PM"], questions:75 },
  { id:"zomato", name:"Zomato", logo:"🍕", roles:["SDE1","SDE2","SDE3","PM"], questions:70 },
  { id:"razorpay", name:"Razorpay", logo:"💳", roles:["SDE1","SDE2","Senior SDE","PM"], questions:60 },
  { id:"phonepe", name:"PhonePe", logo:"💜", roles:["SDE1","SDE2","SDE3","PM"], questions:65 },
  { id:"cred", name:"CRED", logo:"💎", roles:["SDE1","SDE2","Senior SDE"], questions:55 },
  { id:"zepto", name:"Zepto", logo:"⚡", roles:["SDE1","SDE2","SDE3","PM"], questions:45 },
  { id:"meesho", name:"Meesho", logo:"🛍️", roles:["SDE1","SDE2","SDE3","PM"], questions:50 },
  { id:"adobe", name:"Adobe", logo:"🎨", roles:["SWE L1","SWE L2","SWE L3","PM"], questions:85 },
  { id:"tcs", name:"TCS", logo:"🏢", roles:["Ninja","Digital","Prime"], questions:200 },
  { id:"infosys", name:"Infosys", logo:"🔶", roles:["SE","SSE","Tech Lead"], questions:160 },
  { id:"wipro", name:"Wipro", logo:"🌐", roles:["SE","SSE","Tech Lead","Architect"], questions:140 },
  { id:"accenture", name:"Accenture", logo:"🎯", roles:["Associate","Analyst","Consultant","Manager"], questions:120 },
];

const MOCK_JOBS = [
  { id:1, title:"Senior Frontend Developer", company:"Razorpay", logo:"💳", location:"Bangalore", type:"Full-time", salary:"₹28-40 LPA", match:94, skills:["React","TypeScript","Node.js"], posted:"2d ago", why:"Your React and JavaScript skills are a strong match" },
  { id:2, title:"Full Stack Engineer", company:"Zepto", logo:"⚡", location:"Mumbai", type:"Full-time", salary:"₹22-32 LPA", match:88, skills:["React","Python","AWS"], posted:"1d ago", why:"Full stack experience aligns with this fast-paced role" },
  { id:3, title:"SDE-2 Frontend", company:"Swiggy", logo:"🧡", location:"Bangalore", type:"Full-time", salary:"₹25-35 LPA", match:87, skills:["React","Node.js","Redis"], posted:"4d ago", why:"Your experience level matches the 3-5 year requirement" },
  { id:4, title:"React Developer", company:"CRED", logo:"💎", location:"Bangalore", type:"Full-time", salary:"₹18-28 LPA", match:91, skills:["React","Redux","GraphQL"], posted:"5h ago", why:"React expertise is a near-perfect match for this role" },
  { id:5, title:"Frontend Engineer", company:"Zomato", logo:"🍕", location:"Gurgaon", type:"Full-time", salary:"₹18-26 LPA", match:89, skills:["React","TypeScript","GraphQL"], posted:"3d ago", why:"Consumer-facing React work matches your background" },
  { id:6, title:"Software Engineer", company:"PhonePe", logo:"💜", location:"Bangalore", type:"Full-time", salary:"₹20-30 LPA", match:85, skills:["Java","Spring Boot","MySQL"], posted:"2d ago", why:"Core software engineering skills match well" },
  { id:7, title:"Backend Engineer", company:"Meesho", logo:"🛍️", location:"Remote", type:"Full-time", salary:"₹20-30 LPA", match:82, skills:["Python","Kafka","PostgreSQL"], posted:"1d ago", why:"Backend and API skills are relevant here" },
  { id:8, title:"Software Engineer II", company:"Google", logo:"🔵", location:"Hyderabad", type:"Full-time", salary:"₹35-55 LPA", match:76, skills:["Java","Go","Distributed Systems"], posted:"3d ago", why:"Strong fundamentals match, consider building systems design skills" },
  { id:9, title:"Full Stack Developer", company:"Freshworks", logo:"🌿", location:"Chennai", type:"Full-time", salary:"₹16-24 LPA", match:80, skills:["React","Ruby on Rails","PostgreSQL"], posted:"5d ago", why:"JavaScript skills transfer well to this product role" },
  { id:10, title:"Software Developer", company:"Paytm", logo:"🔵", location:"Noida", type:"Full-time", salary:"₹15-22 LPA", match:78, skills:["Java","Spring","MySQL"], posted:"1d ago", why:"Core engineering skills are a good fit" },
  { id:11, title:"React Native Developer", company:"Ola", logo:"🚗", location:"Bangalore", type:"Full-time", salary:"₹16-24 LPA", match:74, skills:["React Native","JavaScript","Redux"], posted:"6d ago", why:"React knowledge transfers to mobile with some upskilling" },
  { id:12, title:"SDE-1", company:"Amazon", logo:"📦", location:"Bangalore", type:"Full-time", salary:"₹22-32 LPA", match:79, skills:["Java","Data Structures","System Design"], posted:"2d ago", why:"Strong DSA skills are needed — focus on leadership principles" },
];

const MOCK_INTERVIEW_QS = {
  behavioral: [
    { q:"Tell me about a time you had a major conflict with a teammate. How did you resolve it?", hint:"Use STAR method. Focus on listening, compromise, and outcome." },
    { q:"Describe a project where you had to work under extreme time pressure. What did you do?", hint:"Show prioritisation, communication with stakeholders, and results." },
    { q:"Give an example of when you had to make a decision with incomplete information.", hint:"Emphasise your reasoning process and how you mitigated risk." },
    { q:"Tell me about a time you failed. What did you learn?", hint:"Be honest. Show self-awareness and a concrete lesson learned." },
    { q:"Describe a situation where you influenced someone without formal authority.", hint:"Show persuasion through data, relationship building, and empathy." },
    { q:"Tell me about your most impactful project. What was your specific contribution?", hint:"Quantify impact with numbers: users served, revenue, performance gain." },
    { q:"How do you handle disagreements with your manager?", hint:"Show respectful pushback with data, then willingness to align and execute." },
    { q:"Describe a time you had to learn something completely new under pressure.", hint:"Show resourcefulness, structured learning approach, and time management." },
  ],
  technical: [
    { q:"Explain the difference between SQL and NoSQL databases. When would you use each?", hint:"Mention ACID, schema flexibility, horizontal vs vertical scaling." },
    { q:"What happens when you type a URL in a browser and press Enter?", hint:"DNS → TCP handshake → HTTP request → server → HTML parsing → rendering." },
    { q:"How does React's Virtual DOM work and why is it performant?", hint:"Diffing algorithm, batched updates, reconciliation — avoids direct DOM manipulation." },
    { q:"Explain CAP theorem in distributed systems.", hint:"Consistency, Availability, Partition tolerance — can only guarantee 2 of 3." },
    { q:"What is the difference between authentication and authorisation?", hint:"AuthN = who you are (identity). AuthZ = what you can do (permissions). JWT handles both." },
    { q:"Explain how HTTPS works and why it's more secure than HTTP.", hint:"TLS handshake, certificate validation, asymmetric key exchange, then symmetric encryption." },
    { q:"What is database indexing and what are the trade-offs?", hint:"Faster reads, slower writes, extra storage. B-tree for range queries, hash for equality." },
    { q:"How would you design a system to handle 1 million concurrent users?", hint:"Load balancer → stateless servers → Redis cache → read replicas → CDN → async queues." },
  ],
  coding: [
    { q:"Two Sum — find two numbers that add up to target", company:"Google", difficulty:"easy", hint:"Use a hashmap. O(n) time, O(n) space." },
    { q:"LRU Cache — implement get and put with O(1) complexity", company:"Amazon", difficulty:"medium", hint:"Doubly linked list + HashMap. List tracks order, map gives O(1) access." },
    { q:"Merge K Sorted Lists", company:"Meta", difficulty:"hard", hint:"Min-heap of size k. Pop minimum, push next node from same list. O(N log k)." },
    { q:"Design a URL shortener like bit.ly", company:"Microsoft", difficulty:"medium", hint:"Base62 encoding for short code, consistent hashing for distribution, cache popular URLs." },
    { q:"Valid Parentheses — check if brackets are balanced", company:"Google", difficulty:"easy", hint:"Stack — push open brackets, pop and verify on close brackets." },
    { q:"Binary Tree Level Order Traversal", company:"Amazon", difficulty:"medium", hint:"BFS with a queue. Track level size to group nodes per level." },
    { q:"Find median from a data stream", company:"Meta", difficulty:"hard", hint:"Two heaps: max-heap for lower half, min-heap for upper half. Rebalance on each insert." },
    { q:"Design a rate limiter", company:"Flipkart", difficulty:"medium", hint:"Token bucket or sliding window counter. Use Redis for distributed rate limiting." },
  ],
};

const SALARY_DATA = {
  "Software Engineer": { entry: "8-14 LPA", mid: "18-30 LPA", senior: "35-60 LPA", lead: "60-100 LPA" },
  "Data Scientist": { entry: "6-12 LPA", mid: "15-25 LPA", senior: "28-50 LPA", lead: "50-80 LPA" },
  "Product Manager": { entry: "10-18 LPA", mid: "20-35 LPA", senior: "40-70 LPA", lead: "70-120 LPA" },
  "DevOps Engineer": { entry: "7-12 LPA", mid: "15-25 LPA", senior: "28-45 LPA", lead: "45-75 LPA" },
};

/* ── HELPERS ────────────────────────────────────── */
function Toast({ msg, onDone }) {
  useEffect(() => { const t = setTimeout(onDone, 3500); return () => clearTimeout(t); }, []);
  return <div className="toast">✓ {msg}</div>;
}

function AdSlot({ type = "leaderboard", label = "Advertisement" }) {
  return (
    <div className={`ad-slot ad-${type}`} style={{ fontSize: ".7rem", color: "var(--ink3)" }}>
      {label} · Google AdSense
    </div>
  );
}

function ScoreRing({ score, size = 120 }) {
  const r = 50, c = 2 * Math.PI * r;
  const offset = c - (score / 100) * c;
  const color = score >= 75 ? "#2d8a4e" : score >= 50 ? "#c2790a" : "#c53030";
  return (
    <div className="score-ring-wrap">
      <div className="score-ring" style={{ width: size, height: size }}>
        <svg viewBox="0 0 120 120" width={size} height={size}>
          <circle className="score-ring-bg" cx="60" cy="60" r={r} />
          <circle className="score-ring-fill" cx="60" cy="60" r={r}
            stroke={color} strokeDasharray={c} strokeDashoffset={offset} />
        </svg>
        <div className="score-num" style={{ color, fontSize: size * .15 }}>{score}</div>
      </div>
      <div className="score-label" style={{ color }}>
        {score >= 75 ? "Strong" : score >= 50 ? "Average" : "Needs work"}
      </div>
    </div>
  );
}

/* ── API CALL ────────────────────────────────────── */
async function callClaude(system, user, max = 800) {
  const res = await fetch("/api/claude", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ system, user, max }),
  });
  const d = await res.json();
  return d.text || "";
}

function loadRazorpay() {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

/* ── PAGES ──────────────────────────────────────── */

/* HOME */
function HomePage({ setPage, setResumeData }) {
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [fileName, setFileName] = useState("");
  const fileRef = useRef();

  const handleFile = async (file) => {
    if (!file) return;
    setFileName(file.name);
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("resume", file);

      const response = await fetch("/api/analyze", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || "Failed to analyze");
      }

      const data = await response.json();

      setResumeData({
        name: data.name,
        score: data.score,
        skills: data.skills,
        missing: data.missing,
        experience: data.experience,
        role: data.role,
        summary: data.summary,
        improvements: data.improvements,
      });

      setPage("resume");
    } catch (error) {
      alert("Error analyzing resume: " + error.message);
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  const features = [
    { icon:"📊", name:"Resume Score & Roast", desc:"Get an honest score out of 100 with specific fixes that will get you more interviews", color:"#fff3ed", tag:"Free", tagClass:"tag-orange" },
    { icon:"🎯", name:"AI Job Matching", desc:"See your match % for real jobs. Know exactly why you're not getting called back", color:"#f0fdf4", tag:"Free", tagClass:"tag-green" },
    { icon:"🏢", name:"Company Interview Prep", desc:"Actual questions asked at Google, Amazon, TCS, Flipkart — updated weekly", color:"#eff6ff", tag:"Popular", tagClass:"tag-blue" },
    { icon:"💻", name:"Coding Practice", desc:"Company-specific DSA questions with AI code review and time complexity analysis", color:"#fefce8", tag:"Pro", tagClass:"tag-amber" },
    { icon:"💰", name:"Salary Intelligence", desc:"Know your market value. Get the exact script to negotiate 20-30% more", color:"#f0fdf4", tag:"Pro", tagClass:"tag-green" },
    { icon:"🗺️", name:"Career Roadmap", desc:"Personalised 6-month plan from your current role to your dream role", color:"#fdf4ff", tag:"Pro", tagClass:"tag-amber" },
  ];

  return (
    <div>
      <AdSlot type="leaderboard" label="Advertisement — Top Banner" />

      <div className="hero">
        <div className="hero-label">✦ AI-Powered Career Intelligence</div>
        <h1 className="hero-title">
          Upload your resume.<br/>
          <em>Know exactly what to fix.</em>
        </h1>
        <p className="hero-sub">
          CareerLens analyses your resume, matches you to real jobs, and preps you for interviews at your target companies — all in one place.
        </p>
        <div className="hero-actions">
          <label style={{ cursor: "pointer" }}>
            <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" style={{ display: "none" }} onChange={e => handleFile(e.target.files[0])} />
            <div className="btn btn-primary btn-lg">
              {uploading ? <><span className="spin" />Analysing...</> : "📄 Upload Resume — It's Free"}
            </div>
          </label>
          <button className="btn btn-ghost btn-lg" onClick={() => setPage("interview")}>
            Browse Interview Questions →
          </button>
        </div>

        {fileName && !uploading && (
          <div className="info-box info-success" style={{ maxWidth: 400, margin: "0 auto 20px" }}>
            <span>✓</span><span>Analysing <strong>{fileName}</strong>...</span>
          </div>
        )}

        <div className="hero-stats">
          {[["2.1M+","Resumes analysed"],["94%","Got more interviews"],["₹0","Cost to start"],["500+","Company question banks"]].map(([n,l]) => (
            <div key={l} className="text-center">
              <div className="hero-stat-n">{n}</div>
              <div className="hero-stat-l">{l}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="features-section">
        <div className="section-header">
          <div className="section-tag">Features</div>
          <div className="section-title">Everything you need to land your dream job</div>
          <div className="section-sub">Not just a job board. A full career intelligence engine that tells you exactly what to do next.</div>
        </div>
        <div className="features-grid">
          {features.map(f => (
            <div key={f.name} className="feature-card" style={{ background: f.color }} onClick={() => setPage(f.name.includes("Resume") ? "resume" : f.name.includes("Job") ? "jobs" : f.name.includes("Interview") ? "interview" : f.name.includes("Coding") ? "coding" : f.name.includes("Salary") ? "salary" : "roadmap")}>
              <div className="feature-icon" style={{ background: "rgba(255,255,255,.7)" }}>{f.icon}</div>
              <div className="feature-name">{f.name}</div>
              <div className="feature-desc">{f.desc}</div>
              <span className={`feature-tag tag ${f.tagClass}`}>{f.tag}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "60px 2rem", background: "var(--ink)" }}>
        <div className="section-header" style={{ color: "var(--bg)" }}>
          <div className="section-tag" style={{ color: "#e8a020" }}>Company Questions</div>
          <div className="section-title" style={{ color: "var(--bg)" }}>Interview questions from top companies</div>
          <div className="section-sub" style={{ color: "rgba(247,246,242,.6)" }}>Real questions asked in actual interviews. Updated weekly by our community.</div>
        </div>
        <div className="company-grid" style={{ maxWidth: 1000, margin: "0 auto" }}>
          {COMPANIES.slice(0, 6).map(c => (
            <div key={c.id} className="company-card" style={{ background: "rgba(247,246,242,.06)", border: "1px solid rgba(247,246,242,.1)", color: "var(--bg)" }} onClick={() => setPage("interview")}>
              <div className="company-logo">{c.logo}</div>
              <div className="company-name">{c.name}</div>
              <div className="company-meta" style={{ color: "rgba(247,246,242,.4)" }}>{c.questions} questions</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 24 }}>
          <button className="btn" style={{ background: "rgba(247,246,242,.1)", color: "var(--bg)", border: "1px solid rgba(247,246,242,.2)" }} onClick={() => setPage("interview")}>View all companies →</button>
        </div>
      </section>

      <AdSlot type="rectangle" label="Advertisement — Middle Banner" />

      <section style={{ padding: "60px 2rem", background: "var(--bg2)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div className="section-tag">Trusted by 2.1M job seekers</div>
          <div className="section-title" style={{ marginBottom: 32 }}>Real results from real people</div>
          <div className="three-col" style={{ gap: 16 }}>
            {[
              { name:"Priya M.", role:"Got SDE2 at Amazon", text:"Resume went from 54 to 89 after fixing the suggestions. Got 4 calls in 2 weeks.", avatar:"👩" },
              { name:"Rahul K.", role:"Got PM at Flipkart", text:"The company-specific questions were exactly what was asked. Prepared 10x better.", avatar:"👨" },
              { name:"Ananya S.", role:"Got DS at Google", text:"Salary negotiation script got me 28% more than the initial offer. Life-changing.", avatar:"👩‍💼" },
            ].map(t => (
              <div key={t.name} className="bg-card" style={{ textAlign: "left" }}>
                <div style={{ fontSize: "1.2rem", marginBottom: 8 }}>{"★★★★★"}</div>
                <div style={{ fontSize: ".83rem", color: "var(--ink2)", lineHeight: 1.6, marginBottom: 12 }}>"{t.text}"</div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: "1.3rem" }}>{t.avatar}</span>
                  <div>
                    <div style={{ fontSize: ".82rem", fontWeight: 700 }}>{t.name}</div>
                    <div style={{ fontSize: ".73rem", color: "var(--green)", fontWeight: 600 }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* RESUME */
function ResumePage({ resumeData, setResumeData, showToast, isPro }) {
  const [loading, setLoading] = useState(false);
  const [aiTip, setAiTip] = useState("");
  const fileRef = useRef();

  const getAITip = async () => {
    if (!resumeData) return;
    setLoading(true);
    const tip = await callClaude(
      "You are a senior tech recruiter. Give a specific, actionable resume tip in 2 sentences max.",
      `Resume score: ${resumeData.score}/100. Skills: ${resumeData.skills.join(", ")}. Missing: ${resumeData.missing.join(", ")}. Give one specific improvement tip.`
    );
    setAiTip(tip);
    setLoading(false);
  };

  const handleFile = async (file) => {
    if (!file) return;
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("resume", file);

      const response = await fetch("/api/analyze", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || "Failed to analyze");
      }

      const data = await response.json();

      setResumeData({
        name: data.name,
        score: data.score,
        skills: data.skills,
        missing: data.missing,
        experience: data.experience,
        role: data.role,
        summary: data.summary,
        improvements: data.improvements,
      });

      showToast("Resume analysed successfully!");
    } catch (error) {
      showToast("Error analyzing resume: " + error.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (!resumeData) return (
    <div className="page">
      <div className="page-header">
        <div className="page-title">Resume Analyser</div>
        <div className="page-sub">Get your score, fix your weaknesses, land more interviews</div>
      </div>
      <AdSlot type="leaderboard" />
      <label style={{ cursor: "pointer" }}>
        <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" style={{ display: "none" }} onChange={e => handleFile(e.target.files[0])} />
        <div className="upload-zone">
          <div className="upload-icon">📄</div>
          <div className="upload-title">Drop your resume here or click to upload</div>
          <div className="upload-sub">Supports PDF, DOC, DOCX — analysed in under 10 seconds</div>
          {loading && <div style={{ marginTop: 12 }}><span className="spin" style={{ color: "var(--accent)" }} /> &nbsp;Analysing...</div>}
        </div>
      </label>
    </div>
  );

  return (
    <div className="page">
      <AdSlot type="leaderboard" />
      <div className="page-header">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div className="page-title">Resume Analysis — {resumeData.name}</div>
            <div className="page-sub">{resumeData.role} · {resumeData.experience} experience</div>
          </div>
          <label style={{ cursor: "pointer" }}>
            <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" style={{ display: "none" }} onChange={e => handleFile(e.target.files[0])} />
            <button className="btn btn-ghost btn-sm" onClick={() => fileRef.current?.click()}>Re-upload</button>
          </label>
        </div>
      </div>

      <div className="two-col">
        <div>
          <div className="card mb-4">
            <div className="card-head"><div className="card-title">Resume Score</div><span className="tag tag-amber">67/100</span></div>
            <div className="card-body">
              <div style={{ display: "flex", gap: 20, alignItems: "center", marginBottom: 16 }}>
                <ScoreRing score={resumeData.score} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "var(--font-head)", fontSize: "1rem", fontWeight: 700, marginBottom: 4 }}>Room for improvement</div>
                  <div style={{ fontSize: ".82rem", color: "var(--ink2)", lineHeight: 1.6 }}>{resumeData.summary}</div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {[["ATS Compatibility","78%","var(--blue)"],["Skills Match","62%","var(--amber)"],["Content Quality","71%","var(--green)"],["Formatting","85%","var(--green)"]].map(([l,v,c]) => (
                  <div key={l}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: ".77rem", marginBottom: 3 }}>
                      <span style={{ color: "var(--ink2)" }}>{l}</span>
                      <span style={{ fontWeight: 700 }}>{v}</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: v, background: c }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-head"><div className="card-title">🔥 What needs fixing — be brutal</div></div>
            <div className="card-body" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {resumeData.improvements.map((imp, i) => (
                <div key={i} style={{ display: "flex", gap: 10, padding: "8px 10px", background: "var(--red-dim)", borderRadius: "var(--r)", border: "1px solid rgba(197,48,48,.15)" }}>
                  <span style={{ color: "var(--red)", fontWeight: 800, flexShrink: 0 }}>#{i+1}</span>
                  <span style={{ fontSize: ".8rem", color: "var(--ink)", lineHeight: 1.5 }}>{imp}</span>
                </div>
              ))}
            </div>
          </div>

          {!isPro && (
            <div className="info-box info-accent" style={{ marginBottom: 16 }}>
              <span>✦</span>
              <span style={{ fontSize: ".8rem" }}><strong>Pro feature:</strong> Resume tailoring per job description. Paste any JD → AI rewrites your bullets to match perfectly. <button className="btn btn-sm btn-primary" style={{ marginLeft: 8 }}>Upgrade to Pro</button></span>
            </div>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div className="card">
            <div className="card-head"><div className="card-title">✅ Skills you have</div></div>
            <div className="card-body">
              {resumeData.skills.map(s => <span key={s} className="skill-pill skill-have">✓ {s}</span>)}
            </div>
          </div>
          <div className="card">
            <div className="card-head"><div className="card-title">❌ Missing skills</div></div>
            <div className="card-body">
              {resumeData.missing.map(s => <span key={s} className="skill-pill skill-missing">+ {s}</span>)}
              <div style={{ marginTop: 10, fontSize: ".75rem", color: "var(--ink3)" }}>These appear in 70%+ of senior job descriptions</div>
            </div>
          </div>

          <div className="card">
            <div className="card-head"><div className="card-title">✦ AI Career Tip</div></div>
            <div className="card-body">
              {aiTip ? (
                <div style={{ fontSize: ".82rem", color: "var(--ink2)", lineHeight: 1.6 }}>{aiTip}</div>
              ) : (
                <button className="btn btn-primary w-full" onClick={getAITip} disabled={loading}>
                  {loading ? <><span className="spin" />Generating...</> : "Get personalised tip from AI →"}
                </button>
              )}
            </div>
          </div>

          <AdSlot type="rectangle" label="Advertisement" />
        </div>
      </div>
    </div>
  );
}

/* JOBS */
function JobsPage({ resumeData, isPro, setPage }) {
  const [filter, setFilter] = useState("all");
  const [aiJobs, setAiJobs] = useState([]);
  const [loadingJobs, setLoadingJobs] = useState(false);

  useEffect(() => {
    if (!resumeData) return;
    setLoadingJobs(true);
    setAiJobs([]);
    fetch("/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ skills: resumeData.skills, role: resumeData.role, experience: resumeData.experience, missing: resumeData.missing }),
    })
      .then(r => r.json())
      .then(jobs => { setAiJobs(Array.isArray(jobs) ? jobs : []); setLoadingJobs(false); })
      .catch(() => setLoadingJobs(false));
  }, [resumeData]);

  const FREE_LIMIT = 10;
  const allJobs = aiJobs.length > 0 ? aiJobs : MOCK_JOBS;
  const filtered = filter === "all" ? allJobs : allJobs.filter(j => j.match >= 85);
  const visibleJobs = isPro ? filtered : filtered.slice(0, FREE_LIMIT);
  const lockedJobs = isPro ? [] : filtered.slice(FREE_LIMIT);

  return (
    <div className="page">
      <AdSlot type="leaderboard" />
      <div className="page-header">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
          <div>
            <div className="page-title">Job Matches</div>
            <div className="page-sub">
              {loadingJobs ? "Scanning jobs that match your resume..." :
               resumeData ? `Based on your resume — ${allJobs.length} jobs found` :
               "Upload your resume for personalised matches"}
            </div>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            {["all","top matches"].map(f => (
              <button key={f} className={`btn btn-sm ${filter===f?"btn-primary":"btn-ghost"}`} onClick={() => setFilter(f)} style={{ textTransform: "capitalize" }}>{f}</button>
            ))}
          </div>
        </div>
      </div>

      {!resumeData && (
        <div className="info-box info-accent mb-4">
          <span>📄</span><span>Upload your resume to see your personal match % for each job and know exactly why you're not getting called back.</span>
        </div>
      )}

      <div className="two-col">
        <div>
          {loadingJobs && (
            <div style={{ textAlign: "center", padding: "48px 24px", color: "var(--ink2)" }}>
              <span className="spin" style={{ color: "var(--accent)", fontSize: "1.2rem" }} />
              <div style={{ marginTop: 12, fontSize: ".85rem" }}>Finding jobs that match your skills...</div>
            </div>
          )}

          {!loadingJobs && visibleJobs.map(job => (
            <div key={job.id} className="job-card">
              <div className="job-logo">{job.logo}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="job-title">{job.title}</div>
                <div className="job-company">{job.company} · {job.location} · {job.type}</div>
                <div className="job-tags">
                  {(job.skills || []).map(s => <span key={s} className="tag tag-gray">{s}</span>)}
                  <span style={{ fontSize: ".74rem", color: "var(--ink3)", marginLeft: 4 }}>{job.salary}</span>
                </div>
                {job.why && <div style={{ fontSize: ".73rem", color: "var(--green)", marginTop: 5, fontWeight: 500 }}>✓ {job.why}</div>}
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
                <div className="job-match">{job.match}%</div>
                <div style={{ fontSize: ".7rem", color: "var(--ink3)" }}>match</div>
                <button className="btn btn-sm btn-primary">Apply</button>
                <div style={{ fontSize: ".7rem", color: "var(--ink3)" }}>{job.posted}</div>
              </div>
            </div>
          ))}

          {!isPro && lockedJobs.length > 0 && !loadingJobs && (
            <div style={{ position: "relative", borderRadius: "var(--r2)", overflow: "hidden", marginTop: 8 }}>
              <div style={{ filter: "blur(4px)", pointerEvents: "none", opacity: 0.5 }}>
                {lockedJobs.slice(0, 3).map(job => (
                  <div key={job.id} className="job-card">
                    <div className="job-logo">{job.logo}</div>
                    <div style={{ flex: 1 }}>
                      <div className="job-title">{job.title}</div>
                      <div className="job-company">{job.company} · {job.location}</div>
                    </div>
                    <div className="job-match">{job.match}%</div>
                  </div>
                ))}
              </div>
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "rgba(247,246,242,0.88)", gap: 10, padding: 20 }}>
                <div style={{ fontSize: "1.4rem" }}>🔒</div>
                <div style={{ fontFamily: "var(--font-head)", fontWeight: 800, fontSize: "1rem", textAlign: "center" }}>{lockedJobs.length} more job matches hidden</div>
                <div style={{ fontSize: ".78rem", color: "var(--ink2)", textAlign: "center" }}>Upgrade to Pro to see all {allJobs.length} personalised matches</div>
                <button className="btn btn-primary btn-sm" onClick={() => setPage("pricing")}>Unlock all jobs →</button>
              </div>
            </div>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div className="card">
            <div className="card-head"><div className="card-title">Job sources</div></div>
            <div className="card-body" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[["LinkedIn","1,284 jobs","🔵"],["Naukri","3,421 jobs","🟠"],["Indeed","891 jobs","🔷"],["AngelList","234 jobs","🚀"],["Company sites","567 jobs","🏢"]].map(([s,n,i]) => (
                <div key={s} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0", borderBottom: "1px solid var(--border)", fontSize: ".8rem" }}>
                  <span>{i}</span><span style={{ flex: 1, fontWeight: 600 }}>{s}</span><span style={{ color: "var(--ink3)" }}>{n}</span>
                </div>
              ))}
            </div>
          </div>

          {!isPro && (
            <div className="card" style={{ background: "var(--ink)", color: "var(--bg)" }}>
              <div className="card-body" style={{ textAlign: "center", padding: "20px" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: 8 }}>✉️</div>
                <div style={{ fontFamily: "var(--font-head)", fontWeight: 800, fontSize: ".95rem", marginBottom: 6 }}>Cold Email Generator</div>
                <div style={{ fontSize: ".78rem", color: "rgba(247,246,242,.6)", marginBottom: 14, lineHeight: 1.5 }}>AI writes a personalised cold email to the hiring manager for any job. Pro feature.</div>
                <button className="btn btn-sm" style={{ background: "var(--accent)", color: "#fff" }} onClick={() => setPage("pricing")}>Upgrade to Pro</button>
              </div>
            </div>
          )}
          <AdSlot type="rectangle" label="Advertisement" />
        </div>
      </div>
    </div>
  );
}

/* INTERVIEW */
function InterviewPage({ isPro, setPage }) {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [questionType, setQuestionType] = useState("behavioral");
  const [expandedQ, setExpandedQ] = useState(null);
  const [aiAnswer, setAiAnswer] = useState({});
  const [loadingQ, setLoadingQ] = useState(null);
  const [generatedQs, setGeneratedQs] = useState({});
  const [generatingQs, setGeneratingQs] = useState(false);
  const requestedQs = useRef(new Set());

  useEffect(() => {
    if (!selectedCompany) return;
    const key = `${selectedCompany.id}-${questionType}`;
    if (requestedQs.current.has(key)) return;
    requestedQs.current.add(key);
    setGeneratingQs(true);
    setExpandedQ(null);
    setAiAnswer({});
    const codingExtra = questionType === "coding"
      ? `, also add "difficulty": "easy|medium|hard" and "company": "${selectedCompany.name}" to each`
      : "";
    callClaude(
      "You are an expert interview question generator. Return ONLY a valid JSON array with no extra text or markdown.",
      `Generate 8 real ${questionType} interview questions that ${selectedCompany.name} actually asks candidates for software engineering roles. Return ONLY a JSON array: [{"q":"question text","hint":"concise answer hint"}${codingExtra}]`,
      1500
    ).then(result => {
      try {
        const match = result.match(/\[[\s\S]*\]/);
        if (match) setGeneratedQs(prev => ({ ...prev, [key]: JSON.parse(match[0]) }));
      } catch {}
      setGeneratingQs(false);
    });
  }, [selectedCompany, questionType]);

  const getAIAnswer = async (q, idx) => {
    if (!isPro) return;
    setLoadingQ(idx);
    const ans = await callClaude(
      "You are a senior tech interviewer. Give a concise model answer for this interview question in 3-4 sentences.",
      `Question: ${q.q}`
    );
    setAiAnswer(a => ({ ...a, [idx]: ans }));
    setLoadingQ(null);
  };

  const questions = selectedCompany && generatedQs[`${selectedCompany.id}-${questionType}`]
    ? generatedQs[`${selectedCompany.id}-${questionType}`]
    : MOCK_INTERVIEW_QS[questionType] || [];

  const FREE_Q_LIMIT = 5;
  const visibleQs = isPro ? questions : questions.slice(0, FREE_Q_LIMIT);
  const lockedQsCount = isPro ? 0 : Math.max(0, questions.length - FREE_Q_LIMIT);

  return (
    <div className="page">
      <AdSlot type="leaderboard" />
      <div className="page-header">
        <div className="page-title">Interview Preparation</div>
        <div className="page-sub">Real questions from real interviews at top companies</div>
      </div>

      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: ".78rem", fontWeight: 600, color: "var(--ink2)", marginBottom: 10 }}>Select a company</div>
        <div className="company-grid">
          {COMPANIES.map(c => (
            <div key={c.id} className={`company-card ${selectedCompany?.id === c.id ? "selected" : ""}`} onClick={() => setSelectedCompany(c)}>
              <div className="company-logo">{c.logo}</div>
              <div className="company-name">{c.name}</div>
              <div className="company-meta">{c.questions} questions</div>
            </div>
          ))}
        </div>
      </div>

      {selectedCompany && (
        <div className="info-box info-blue mb-4">
          <span>ℹ</span>
          <span><strong>{selectedCompany.name}</strong> — {selectedCompany.questions} verified questions. Roles: {selectedCompany.roles.join(", ")}</span>
        </div>
      )}

      <div className="tabs">
        {["behavioral","technical","coding"].map(t => (
          <button key={t} className={`tab ${questionType===t?"active":""}`} onClick={() => setQuestionType(t)} style={{ textTransform: "capitalize" }}>{t}</button>
        ))}
      </div>

      <div className="two-col">
        <div>
          {generatingQs && (
            <div style={{ textAlign: "center", padding: "32px", color: "var(--ink2)", fontSize: ".85rem" }}>
              <span className="spin" style={{ color: "var(--accent)" }} /> &nbsp;Generating real {selectedCompany?.name} questions...
            </div>
          )}
          {!generatingQs && visibleQs.map((q, i) => (
            <div key={i} className="question-card">
              <div className="q-top">
                <div className="q-num">{i+1}</div>
                <div className="q-text">{q.q}</div>
                {q.difficulty && <span className={`tag difficulty-${q.difficulty}`}>{q.difficulty}</span>}
                {q.company && <span className="tag tag-blue">{q.company}</span>}
              </div>
              <div style={{ display: "flex", gap: 6, marginLeft: 34 }}>
                <button className="btn btn-sm btn-ghost" onClick={() => setExpandedQ(expandedQ === i ? null : i)}>
                  {expandedQ === i ? "Hide hint" : "Show hint"}
                </button>
                {isPro && (
                  <button className="btn btn-sm btn-green" onClick={() => getAIAnswer(q, i)} disabled={loadingQ === i}>
                    {loadingQ === i ? <><span className="spin" />Loading...</> : "✦ AI model answer"}
                  </button>
                )}
              </div>
              {expandedQ === i && (
                <div className="q-answer">
                  <strong>💡 Hint:</strong> {q.hint}
                  {aiAnswer[i] && <div style={{ marginTop: 8, paddingTop: 8, borderTop: "1px solid var(--border)" }}><strong>✦ AI Answer:</strong> {aiAnswer[i]}</div>}
                </div>
              )}
            </div>
          ))}

          {!isPro && lockedQsCount > 0 && !generatingQs && (
            <div style={{ border: "1px solid var(--border)", borderRadius: "var(--r2)", padding: "20px", textAlign: "center", background: "var(--bg2)", marginTop: 8 }}>
              <div style={{ fontSize: "1.2rem", marginBottom: 6 }}>🔒</div>
              <div style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: ".9rem", marginBottom: 4 }}>{lockedQsCount} more questions locked</div>
              <div style={{ fontSize: ".76rem", color: "var(--ink2)", marginBottom: 12 }}>Pro users see all questions + AI model answers for every question</div>
              <button className="btn btn-primary btn-sm" onClick={() => setPage("pricing")}>Upgrade to Pro →</button>
            </div>
          )}

          {!isPro && questionType === "coding" && (
            <div className="info-box info-accent">
              <span>🔒</span><span>Pro users get AI code review, optimal solution hints, and time complexity analysis for every coding question. <button className="btn btn-sm btn-primary" style={{ marginLeft: 8 }} onClick={() => setPage("pricing")}>Upgrade</button></span>
            </div>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div className="card">
            <div className="card-head"><div className="card-title">Interview tips</div></div>
            <div className="card-body" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {["Use STAR method for behavioral questions","Research the company's recent news before the interview","Prepare 3 questions to ask the interviewer","For coding: think out loud, don't code in silence","Follow up with a thank-you email within 24 hours"].map((t,i) => (
                <div key={i} style={{ fontSize: ".79rem", color: "var(--ink2)", display: "flex", gap: 7, padding: "6px 0", borderBottom: "1px solid var(--border)" }}>
                  <span style={{ color: "var(--accent)", fontWeight: 800, flexShrink: 0 }}>→</span>{t}
                </div>
              ))}
            </div>
          </div>
          <AdSlot type="rectangle" label="Advertisement" />
        </div>
      </div>
    </div>
  );
}

/* CODING */
function CodingPage({ isPro }) {
  const [code, setCode] = useState("// Write your solution here\nfunction twoSum(nums, target) {\n  \n}");
  const [selectedQ, setSelectedQ] = useState(MOCK_INTERVIEW_QS.coding[0]);
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  const reviewCode = async () => {
    if (!isPro) return;
    setLoading(true);
    const r = await callClaude(
      "You are a senior software engineer doing a code review. Be specific and constructive.",
      `Problem: ${selectedQ.q}\nCode submitted:\n${code}\n\nReview the code: correctness, time/space complexity, edge cases, improvements.`
    );
    setReview(r);
    setLoading(false);
  };

  return (
    <div className="page">
      <AdSlot type="leaderboard" />
      <div className="page-header">
        <div className="page-title">Coding Practice</div>
        <div className="page-sub">Company-specific DSA questions with AI code review</div>
      </div>

      <div className="two-col">
        <div>
          <div className="card mb-4">
            <div className="card-head">
              <div className="card-title">{selectedQ.q}</div>
              <span className={`tag difficulty-${selectedQ.difficulty}`}>{selectedQ.difficulty}</span>
            </div>
            <div className="card-body">
              <div className="info-box info-blue mb-3">
                <span>💡</span><span style={{ fontSize: ".78rem" }}><strong>Hint:</strong> {selectedQ.hint}</span>
              </div>
              <div className="code-editor">
                <div className="code-editor-header">
                  <div className="code-dot" style={{ background: "#ff5f57" }} />
                  <div className="code-dot" style={{ background: "#ffbd2e" }} />
                  <div className="code-dot" style={{ background: "#28c840" }} />
                  <span style={{ color: "rgba(247,246,242,.4)", fontSize: ".72rem", marginLeft: 6 }}>JavaScript</span>
                </div>
                <textarea className="code-textarea" value={code} onChange={e => setCode(e.target.value)} />
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                {isPro ? (
                  <button className="btn btn-primary" onClick={reviewCode} disabled={loading}>
                    {loading ? <><span className="spin" />Reviewing...</> : "✦ Review my code with AI"}
                  </button>
                ) : (
                  <button className="btn btn-ghost">🔒 AI Review (Pro)</button>
                )}
                <button className="btn btn-ghost">Run tests</button>
              </div>
              {review && (
                <div style={{ marginTop: 14, background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "var(--r)", padding: "14px", fontSize: ".82rem", color: "var(--ink2)", lineHeight: 1.6, whiteSpace: "pre-wrap" }}>
                  {review}
                </div>
              )}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div className="card">
            <div className="card-head"><div className="card-title">Question bank</div></div>
            <div className="card-body" style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {MOCK_INTERVIEW_QS.coding.map((q, i) => (
                <div key={i} onClick={() => setSelectedQ(q)} style={{ padding: "8px 10px", borderRadius: "var(--r)", cursor: "pointer", background: selectedQ === q ? "var(--accent-dim)" : "var(--bg)", border: `1px solid ${selectedQ === q ? "var(--accent)" : "var(--border)"}`, fontSize: ".8rem", fontWeight: selectedQ === q ? 700 : 400 }}>
                  <div style={{ marginBottom: 3 }}>{q.q.slice(0, 45)}...</div>
                  <div style={{ display: "flex", gap: 5 }}>
                    <span className={`tag difficulty-${q.difficulty}`}>{q.difficulty}</span>
                    <span className="tag tag-blue">{q.company}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <AdSlot type="rectangle" label="Advertisement" />
        </div>
      </div>
    </div>
  );
}

/* SALARY */
function SalaryPage({ resumeData, isPro, showToast }) {
  const [role, setRole] = useState("Software Engineer");
  const [city, setCity] = useState("Bangalore");
  const [exp, setExp] = useState("mid");
  const [script, setScript] = useState("");
  const [loading, setLoading] = useState(false);

  const data = SALARY_DATA[role] || SALARY_DATA["Software Engineer"];

  const getScript = async () => {
    if (!isPro) return showToast("Upgrade to Pro for salary negotiation script");
    setLoading(true);
    const s = await callClaude(
      "You are a salary negotiation coach. Write a specific, confident negotiation script.",
      `Role: ${role}, City: ${city}, Experience: ${exp} level. Current market: ${data[exp]}. Write a 4-5 sentence negotiation script to ask for 20% more.`
    );
    setScript(s);
    setLoading(false);
  };

  return (
    <div className="page">
      <AdSlot type="leaderboard" />
      <div className="page-header">
        <div className="page-title">Salary Intelligence</div>
        <div className="page-sub">Know your market value. Negotiate with confidence.</div>
      </div>

      <div className="two-col">
        <div>
          <div className="card mb-4">
            <div className="card-head"><div className="card-title">Your market value</div></div>
            <div className="card-body">
              <div className="three-col" style={{ gap: 10, marginBottom: 16 }}>
                <div className="input-group" style={{ marginBottom: 0 }}>
                  <label className="input-label">Role</label>
                  <select className="input select" value={role} onChange={e => setRole(e.target.value)}>
                    {Object.keys(SALARY_DATA).map(r => <option key={r}>{r}</option>)}
                  </select>
                </div>
                <div className="input-group" style={{ marginBottom: 0 }}>
                  <label className="input-label">City</label>
                  <select className="input select" value={city} onChange={e => setCity(e.target.value)}>
                    {["Bangalore","Mumbai","Hyderabad","Delhi NCR","Pune","Chennai","Remote"].map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div className="input-group" style={{ marginBottom: 0 }}>
                  <label className="input-label">Level</label>
                  <select className="input select" value={exp} onChange={e => setExp(e.target.value)}>
                    <option value="entry">Entry (0-2 yrs)</option>
                    <option value="mid">Mid (3-5 yrs)</option>
                    <option value="senior">Senior (6-9 yrs)</option>
                    <option value="lead">Lead (10+ yrs)</option>
                  </select>
                </div>
              </div>

              <div className="salary-range">
                <div style={{ fontSize: "2rem", marginRight: 4 }}>💰</div>
                <div>
                  <div className="salary-num">{data[exp]}</div>
                  <div className="salary-label">{role} · {city} · {exp} level</div>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {Object.entries(data).map(([level, range]) => (
                  <div key={level} style={{ display: "flex", justifyContent: "space-between", padding: "8px 12px", background: level === exp ? "var(--green-dim)" : "var(--bg)", borderRadius: "var(--r)", border: `1px solid ${level === exp ? "rgba(45,138,78,.2)" : "var(--border)"}`, fontSize: ".82rem" }}>
                    <span style={{ textTransform: "capitalize", fontWeight: level === exp ? 700 : 400 }}>{level === "entry" ? "Entry (0-2 yrs)" : level === "mid" ? "Mid (3-5 yrs)" : level === "senior" ? "Senior (6-9 yrs)" : "Lead (10+ yrs)"}</span>
                    <span style={{ fontWeight: 700, color: level === exp ? "var(--green)" : "var(--ink2)" }}>{range}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-head">
              <div className="card-title">💬 Negotiation Script</div>
              {!isPro && <span className="tag tag-amber">Pro</span>}
            </div>
            <div className="card-body">
              <button className="btn btn-primary w-full mb-3" onClick={getScript} disabled={loading}>
                {loading ? <><span className="spin" />Writing script...</> : "Generate salary negotiation script →"}
              </button>
              {script ? (
                <div style={{ fontSize: ".83rem", color: "var(--ink2)", lineHeight: 1.7, background: "var(--bg)", padding: "14px", borderRadius: "var(--r)", border: "1px solid var(--border)", whiteSpace: "pre-wrap" }}>{script}</div>
              ) : (
                <div style={{ fontSize: ".78rem", color: "var(--ink3)", textAlign: "center", padding: "12px 0" }}>Click above to generate a personalised negotiation script</div>
              )}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div className="card">
            <div className="card-head"><div className="card-title">Quick tips</div></div>
            <div className="card-body" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {["Never give a number first — let them make the offer","Always negotiate — 78% of employers expect it","Ask for 20-30% above your minimum","Get the offer in writing before giving notice","Consider total compensation: stock, bonus, WFH"].map((t,i) => (
                <div key={i} style={{ fontSize: ".78rem", color: "var(--ink2)", padding: "6px 0", borderBottom: "1px solid var(--border)", display: "flex", gap: 7 }}>
                  <span style={{ color: "var(--green)", fontWeight: 800 }}>→</span>{t}
                </div>
              ))}
            </div>
          </div>
          <AdSlot type="rectangle" label="Advertisement" />
        </div>
      </div>
    </div>
  );
}

/* ROADMAP */
function RoadmapPage({ resumeData, isPro, showToast }) {
  const [target, setTarget] = useState("");
  const [roadmap, setRoadmap] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!target.trim()) return showToast("Enter your target role first");
    setLoading(true);
    const r = await callClaude(
      "You are a career coach. Create a specific 6-month career roadmap. Format as Month 1:, Month 2:, etc.",
      `Current: ${resumeData?.role || "Software Developer"} with ${resumeData?.skills?.join(", ") || "general programming skills"}. Target: ${target}. Missing skills: ${resumeData?.missing?.join(", ") || "advanced skills"}. Create a 6-month actionable roadmap.`
    );
    setRoadmap(r);
    setLoading(false);
  };

  const parseRoadmap = (text) => {
    const months = text.split(/Month \d+:/).filter(Boolean);
    const colors = ["#e8602a","#2563eb","#2d8a4e","#c2790a","#a855f7","#0891b2"];
    return months.slice(0, 6).map((m, i) => ({ month: `Month ${i + 1}`, content: m.trim(), color: colors[i] }));
  };

  return (
    <div className="page">
      <AdSlot type="leaderboard" />
      <div className="page-header">
        <div className="page-title">Career Roadmap Generator</div>
        <div className="page-sub">Personalised 6-month plan from where you are to where you want to be</div>
      </div>

      <div className="two-col">
        <div>
          <div className="card mb-4">
            <div className="card-head"><div className="card-title">Generate your roadmap</div></div>
            <div className="card-body">
              <div className="input-group">
                <label className="input-label">Your target role / dream job</label>
                <input className="input" placeholder="e.g. Senior Software Engineer at Google, Product Manager at a startup, Data Scientist" value={target} onChange={e => setTarget(e.target.value)} />
              </div>
              {resumeData && (
                <div className="info-box info-success mb-3">
                  <span>✓</span><span style={{ fontSize: ".78rem" }}>Using your uploaded resume — current role: <strong>{resumeData.role}</strong></span>
                </div>
              )}
              <button className="btn btn-primary w-full" onClick={generate} disabled={loading}>
                {loading ? <><span className="spin" />Building your roadmap...</> : "Generate 6-month roadmap →"}
              </button>
            </div>
          </div>

          {roadmap && (
            <div className="card">
              <div className="card-head"><div className="card-title">Your personalised roadmap</div></div>
              <div className="card-body">
                {parseRoadmap(roadmap).map((m, i) => (
                  <div key={i} className="roadmap-item">
                    <div className="roadmap-dot" style={{ background: m.color }}>{i + 1}</div>
                    <div>
                      <div className="roadmap-month">{m.month}</div>
                      <div className="roadmap-detail">{m.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!roadmap && !loading && (
            <div className="card">
              <div className="card-head"><div className="card-title">Sample roadmap</div></div>
              <div className="card-body">
                {[
                  { month:"Month 1", action:"Learn Docker & containerisation", detail:"Build and deploy 2 side projects using Docker. Complete Docker official tutorial.", color:"#e8602a" },
                  { month:"Month 2", action:"Master TypeScript", detail:"Migrate one existing project to TypeScript. Complete TypeScript deep dive course.", color:"#2563eb" },
                  { month:"Month 3", action:"System design fundamentals", detail:"Study Grokking System Design. Build a URL shortener and chat app from scratch.", color:"#2d8a4e" },
                  { month:"Month 4", action:"AWS Cloud essentials", detail:"Get AWS Cloud Practitioner certification. Deploy a project on EC2 + S3 + RDS.", color:"#c2790a" },
                  { month:"Month 5", action:"Build portfolio projects", detail:"Create 2 impressive GitHub projects demonstrating all new skills. Write technical blog posts.", color:"#a855f7" },
                  { month:"Month 6", action:"Apply to target companies", detail:"Apply to 20 companies using tailored resumes. Use interview prep module for each company.", color:"#0891b2" },
                ].map((m,i) => (
                  <div key={i} className="roadmap-item">
                    <div className="roadmap-dot" style={{ background: m.color }}>{i+1}</div>
                    <div>
                      <div className="roadmap-month">{m.month}</div>
                      <div className="roadmap-action">{m.action}</div>
                      <div className="roadmap-detail">{m.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div className="card">
            <div className="card-head"><div className="card-title">Recommended resources</div></div>
            <div className="card-body" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { name:"Grokking System Design", type:"Course", link:"educative.io", discount:"30% off with CareerLens" },
                { name:"Docker Mastery", type:"Course", link:"udemy.com", discount:"₹449 this week" },
                { name:"TypeScript Deep Dive", type:"Free book", link:"basarat.gitbook.io", discount:"Completely free" },
                { name:"NeetCode 150", type:"Free practice", link:"neetcode.io", discount:"Free tier available" },
              ].map(r => (
                <div key={r.name} style={{ padding: "8px 10px", background: "var(--bg)", borderRadius: "var(--r)", border: "1px solid var(--border)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
                    <span style={{ fontSize: ".82rem", fontWeight: 700 }}>{r.name}</span>
                    <span className="tag tag-blue">{r.type}</span>
                  </div>
                  <div style={{ fontSize: ".73rem", color: "var(--green)", fontWeight: 600 }}>{r.discount}</div>
                </div>
              ))}
              <div style={{ fontSize: ".7rem", color: "var(--ink3)", textAlign: "center", marginTop: 4 }}>Affiliate links — we earn a commission at no cost to you</div>
            </div>
          </div>
          <AdSlot type="rectangle" label="Advertisement" />
        </div>
      </div>
    </div>
  );
}

/* PRICING */
function PricingPage({ isPro, setIsPro, showToast }) {
  const [loading, setLoading] = useState("");

  const handleBuy = async (plan) => {
    if (plan === "free") return;
    setLoading(plan);

    const loaded = await loadRazorpay();
    if (!loaded) {
      alert("Could not load payment gateway. Check your internet connection.");
      setLoading("");
      return;
    }

    try {
      const orderRes = await fetch("/api/payment/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      const order = await orderRes.json();
      if (order.error) throw new Error(order.error);

      const options = {
        key: order.key,
        amount: order.amount,
        currency: order.currency,
        name: "CareerLens",
        description: plan === "pro" ? "Pro Plan — Monthly" : "Team Plan — Per Student/Month",
        order_id: order.id,
        handler: async function (response) {
          const verifyRes = await fetch("/api/payment/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...response, plan }),
          });
          const result = await verifyRes.json();
          if (result.success) {
            localStorage.setItem("cl_payment_id", response.razorpay_payment_id);
            localStorage.setItem("cl_is_pro", "true");
            setIsPro(true);
            showToast(`${plan === "pro" ? "Pro" : "Team"} plan activated! Welcome to Pro ✦`);
          } else {
            alert("Payment verification failed. Please contact support@careerlens.io");
          }
        },
        prefill: { name: "", email: "", contact: "" },
        theme: { color: "#e85a2a" },
        modal: { ondismiss: () => setLoading("") },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
      setLoading("");
    } catch (error) {
      alert("Payment error: " + error.message);
      setLoading("");
    }
  };

  return (
    <div className="page" style={{ maxWidth: 900 }}>
      <AdSlot type="leaderboard" />
      <div className="page-header" style={{ textAlign: "center" }}>
        <div className="page-title" style={{ fontSize: "1.8rem" }}>Simple, honest pricing</div>
        <div className="page-sub">Start free. Upgrade when you're ready. Cancel anytime.</div>
      </div>

      <div className="pricing-grid">
        {[
          { name:"Free", who:"Getting started", price:"₹0", trial:"Always free", features:["3 resume scans/month","10 job matches","20 interview questions","Basic company questions","5 coding problems"], locked:["AI mock interview","Salary negotiation script","Cold email generator","Resume tailoring per job","Career roadmap","Unlimited everything"], plan:"free" },
          { name:"Pro", who:"Active job seekers", price:"₹299", trial:"14-day free trial", features:["Unlimited resume scans","Unlimited job matches","All interview questions","AI model answers","Live code review","Salary negotiation script","Cold email generator","Resume tailoring per JD","Career roadmap","Priority support"], locked:[], plan:"pro", featured:true },
          { name:"Team", who:"Bootcamps & colleges", price:"₹199", trial:"Per student/month", features:["Everything in Pro","Team dashboard","Progress tracking","Bulk student reports","Custom company list","Dedicated support","White-label option"], locked:[], plan:"team" },
        ].map(p => (
          <div key={p.name} className={`price-card ${p.featured ? "featured" : ""}`}>
            {p.featured && <div className="price-badge">MOST POPULAR</div>}
            <div className="price-name">{p.name}</div>
            <div className="price-who">{p.who}</div>
            <div className="price-amount">{p.price}{p.price !== "₹0" && <span>/mo</span>}</div>
            <div className="price-trial" style={{ color: p.plan === "free" ? "var(--green)" : "var(--amber)" }}>{p.trial}</div>
            <div className="price-features">
              {p.features.map(f => <div key={f} className="price-feature">{f}</div>)}
              {p.locked.map(f => <div key={f} className="price-feature no">{f}</div>)}
            </div>
            <button
              className={`btn w-full ${p.featured ? "btn-primary" : p.plan === "free" ? "btn-ghost" : "btn-dark"}`}
              onClick={() => handleBuy(p.plan)}
              disabled={loading === p.plan || (p.plan !== "free" && isPro)}
            >
              {loading === p.plan ? <><span className="spin" />Processing...</> :
               isPro && p.plan === "pro" ? "✓ Current plan" :
               p.plan === "free" ? "Start for free" : `Start ${p.trial}`}
            </button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 32, textAlign: "center", fontSize: ".8rem", color: "var(--ink3)" }}>
        Secure payment via Stripe · Cancel anytime · Instant access after payment · GST invoice provided
      </div>

      <div style={{ marginTop: 40 }}>
        <div className="section-title" style={{ textAlign: "center", marginBottom: 20 }}>Frequently asked questions</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {[
            ["Is the free plan really free?","Yes, always. No credit card needed. You get 3 resume scans, 10 job matches, and 20 interview questions every month."],
            ["How does the 14-day trial work?","Full Pro access for 14 days. Your card is charged only after the trial. Cancel before day 14 and you're never charged."],
            ["Can I cancel anytime?","Yes. Cancel from your settings with one click. No questions asked. Your data stays for 30 days after cancellation."],
            ["Do you offer refunds?","Yes — full refund within 7 days of payment if you're not satisfied. Email hello@careerlens.io."],
          ].map(([q,a]) => (
            <div key={q} className="bg-card">
              <div style={{ fontWeight: 700, fontSize: ".85rem", marginBottom: 5 }}>{q}</div>
              <div style={{ fontSize: ".78rem", color: "var(--ink2)", lineHeight: 1.6 }}>{a}</div>
            </div>
          ))}
        </div>
      </div>
      <AdSlot type="rectangle" label="Advertisement" />
    </div>
  );
}

/* ── FOOTER ─────────────────────────────────────── */
function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">CareerLens</div>
          <div className="footer-tagline">AI-powered career intelligence for the modern job seeker. Built for India, US, UK and UAE.</div>
        </div>
        <div>
          <div className="footer-heading">Product</div>
          {[["Resume Analyser","resume"],["Job Matching","jobs"],["Interview Prep","interview"],["Coding Practice","coding"],["Salary Intel","salary"],["Career Roadmap","roadmap"]].map(([l,p]) => (
            <a key={l} className="footer-link" onClick={() => setPage(p)}>{l}</a>
          ))}
        </div>
        <div>
          <div className="footer-heading">Companies</div>
          {COMPANIES.map(c => <a key={c.id} className="footer-link" onClick={() => setPage("interview")}>{c.name} Interview Questions</a>)}
        </div>
        <div>
          <div className="footer-heading">Company</div>
          {["About Us","Blog","Careers","Privacy Policy","Terms of Service","Contact Us","Advertise with us"].map(l => (
            <a key={l} className="footer-link">{l}</a>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 CareerLens. All rights reserved.</span>
        <span>Built with ❤️ for job seekers worldwide</span>
      </div>
    </footer>
  );
}

/* ── ROOT APP ────────────────────────────────────── */
export default function App() {
  const [page, setPage] = useState("home");
  const [resumeData, setResumeData] = useState(null);
  const [isPro, setIsPro] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (msg) => setToast(msg);

  useEffect(() => {
    if (localStorage.getItem("cl_is_pro") === "true") {
      setIsPro(true);
      return;
    }
    const paymentId = localStorage.getItem("cl_payment_id");
    if (!paymentId) return;
    fetch(`/api/user/check?payment_id=${paymentId}`)
      .then(r => r.json())
      .then(data => { if (data.isPro) { localStorage.setItem("cl_is_pro", "true"); setIsPro(true); } })
      .catch(() => {});
  }, []);

  const NAV_ITEMS = [
    { id:"home", label:"Home" },
    { id:"resume", label:"Resume" },
    { id:"jobs", label:"Jobs" },
    { id:"interview", label:"Interview Prep" },
    { id:"coding", label:"Coding" },
    { id:"salary", label:"Salary" },
    { id:"roadmap", label:"Roadmap" },
    { id:"pricing", label:"Pricing" },
  ];

  return (
    <>
      <style>{STYLES}</style>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <nav className="nav">
          <a className="nav-logo" onClick={() => setPage("home")}>
            <div className="nav-logo-icon">C</div>CareerLens
          </a>
          <div className="nav-links">
            {NAV_ITEMS.map(n => (
              <a key={n.id} className={`nav-link ${page === n.id ? "active" : ""}`} onClick={() => setPage(n.id)}>{n.label}</a>
            ))}
          </div>
          <div className="nav-right">
            {isPro ? (
              <span className="pro-badge">PRO ✦</span>
            ) : (
              <button className="btn btn-primary btn-sm" onClick={() => setPage("pricing")}>Upgrade to Pro</button>
            )}
          </div>
        </nav>

        <main style={{ flex: 1 }}>
          {page === "home" && <HomePage setPage={setPage} setResumeData={setResumeData} />}
          {page === "resume" && <ResumePage resumeData={resumeData} setResumeData={setResumeData} showToast={showToast} isPro={isPro} />}
          {page === "jobs" && <JobsPage resumeData={resumeData} isPro={isPro} setPage={setPage} />}
          {page === "interview" && <InterviewPage isPro={isPro} setPage={setPage} />}
          {page === "coding" && <CodingPage isPro={isPro} />}
          {page === "salary" && <SalaryPage resumeData={resumeData} isPro={isPro} showToast={showToast} />}
          {page === "roadmap" && <RoadmapPage resumeData={resumeData} isPro={isPro} showToast={showToast} />}
          {page === "pricing" && <PricingPage isPro={isPro} setIsPro={setIsPro} showToast={showToast} />}
        </main>

        <Footer setPage={setPage} />
        {toast && <Toast msg={toast} onDone={() => setToast(null)} />}
      </div>
    </>
  );
}
