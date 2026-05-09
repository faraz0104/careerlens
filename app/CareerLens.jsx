'use client';
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

/* ── MOBILE NAV ──────────────────────────────────── */
.nav-hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; padding: 6px; border-radius: 8px; background: transparent; border: none; margin-left: auto; }
.nav-hamburger span { display: block; width: 22px; height: 2px; background: var(--ink); border-radius: 2px; transition: all .2s; }
.mobile-menu { display: none; position: fixed; inset: 0; top: 58px; background: rgba(247,246,242,0.97); backdrop-filter: blur(16px); z-index: 99; padding: 16px; flex-direction: column; gap: 4px; overflow-y: auto; }
.mobile-menu.open { display: flex; }
.mobile-menu-link { padding: 12px 16px; border-radius: var(--r); font-size: .95rem; font-weight: 600; color: var(--ink2); background: transparent; text-align: left; border: none; cursor: pointer; transition: all .15s; }
.mobile-menu-link:hover, .mobile-menu-link.active { color: var(--accent); background: var(--accent-dim); }
.mobile-menu-divider { height: 1px; background: var(--border); margin: 8px 0; }

/* ── RESPONSIVE ──────────────────────────────────── */
@media (max-width: 768px) {
  /* Nav */
  .nav { padding: 0 1rem; }
  .nav-links { display: none; }
  .nav-right .btn { display: none; }
  .nav-hamburger { display: flex; }

  /* Hero */
  .hero { padding: 48px 1rem 36px; }
  .hero-title { font-size: clamp(1.7rem, 7vw, 2.4rem); }
  .hero-sub { font-size: .88rem; }
  .hero-stats { gap: 20px; }
  .hero-stat-n { font-size: 1.4rem; }

  /* Page */
  .page { padding: 20px 14px; }
  .page-title { font-size: 1.3rem; }

  /* Layouts */
  .two-col { grid-template-columns: 1fr; }
  .three-col { grid-template-columns: 1fr 1fr; }

  /* Pricing */
  .pricing-grid { grid-template-columns: 1fr; max-width: 400px; }

  /* Footer */
  .footer { padding: 36px 1rem 20px; margin-top: 40px; }
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 24px; }
  .footer-bottom { flex-direction: column; gap: 8px; text-align: center; }

  /* Job cards */
  .job-card { flex-wrap: wrap; gap: 10px; padding: 14px; }
  .job-match { margin-left: 0; }

  /* Company grid */
  .company-grid { grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 8px; }
  .company-card { padding: 10px; }
  .company-logo { font-size: 1.3rem; }

  /* Salary */
  .salary-range { flex-direction: column; align-items: flex-start; gap: 4px; }
  .salary-num { font-size: 1.4rem; }

  /* Cards */
  .card-head { padding: 12px 14px; flex-wrap: wrap; gap: 6px; }
  .card-body { padding: 14px; }

  /* Score ring */
  .score-ring { width: 90px; height: 90px; }

  /* Tabs */
  .tabs { overflow-x: auto; }
  .tab { white-space: nowrap; flex: none; padding: 7px 14px; }

  /* Upload */
  .upload-zone { padding: 32px 16px; }

  /* Sections */
  .features-section { padding: 40px 1rem; }
  .features-grid { grid-template-columns: 1fr; }

  /* Toast */
  .toast { bottom: 16px; right: 12px; left: 12px; font-size: .8rem; }

  /* Ad slots */
  .ad-leaderboard { height: 60px; }
  .ad-rectangle { height: 180px; }
}

@media (max-width: 480px) {
  /* Nav logo — shorter */
  .nav-logo span { display: none; }

  /* Three col → single */
  .three-col { grid-template-columns: 1fr; }

  /* Footer → single col */
  .footer-grid { grid-template-columns: 1fr; }

  /* Hero */
  .hero-actions { flex-direction: column; align-items: center; }
  .hero-actions .btn { width: 100%; max-width: 280px; }

  /* Pricing */
  .price-card { padding: 22px 18px; }
  .price-amount { font-size: 2rem; }

  /* Page title */
  .page-title { font-size: 1.2rem; }

  /* Job card compact */
  .job-logo { width: 40px; height: 40px; font-size: 1.1rem; }
  .job-title { font-size: .88rem; }
}
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
        let msg = "Failed to analyze resume";
        try { const err = await response.json(); msg = err.error || msg; } catch {}
        throw new Error(msg);
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

      <JobAlertSignup />
    </div>
  );
}

function JobAlertSignup() {
  const [form, setForm] = useState({ email: "", role: "", city: "Bangalore" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const cities = ["Bangalore","Mumbai","Hyderabad","Delhi NCR","Pune","Chennai","Kolkata","Remote","Any"];

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to subscribe");
      setDone(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%", padding: "10px 13px",
    border: "1.5px solid rgba(247,246,242,.12)",
    borderRadius: "var(--r)", fontSize: ".85rem",
    background: "rgba(247,246,242,.07)", color: "var(--bg)",
    outline: "none", transition: "border-color .2s",
  };
  const labelStyle = { display: "block", fontSize: ".72rem", fontWeight: 600, marginBottom: 5, color: "rgba(247,246,242,.5)", letterSpacing: ".03em", textTransform: "uppercase" };

  return (
    <section style={{ background: "var(--ink)", padding: "72px 2rem", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 80% at 70% 50%, rgba(232,90,42,.12) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div className="job-alert-grid" style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", position: "relative" }}>

        {/* Left — value prop */}
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: ".72rem", fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", color: "#e8a020", background: "rgba(232,160,32,.1)", border: "1px solid rgba(232,160,32,.25)", padding: "4px 12px", borderRadius: 99, marginBottom: 20 }}>📬 Free Weekly Job Alerts</div>
          <h2 style={{ fontFamily: "var(--font-head)", fontSize: "clamp(1.7rem,3.5vw,2.4rem)", fontWeight: 800, letterSpacing: "-.04em", color: "var(--bg)", lineHeight: 1.15, marginBottom: 16 }}>
            5 jobs picked for you,<br /><em style={{ color: "var(--accent)", fontStyle: "normal" }}>every Monday morning.</em>
          </h2>
          <p style={{ color: "rgba(247,246,242,.6)", fontSize: ".9rem", lineHeight: 1.7, marginBottom: 28 }}>
            Stop scrolling Naukri for hours. CareerLens AI picks the best openings for your role and city and delivers them straight to your inbox — free, every week.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
            {[
              ["🎯", "Personalised to your role & city", "Not generic listings — curated for you"],
              ["⚡", "New openings + walk-in alerts", "Including last-minute walk-in drives"],
              ["🔒", "One click to apply", "Each job links back to CareerLens with full details"],
            ].map(([icon, title, sub]) => (
              <div key={title} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{ width: 36, height: 36, borderRadius: 9, background: "rgba(247,246,242,.07)", border: "1px solid rgba(247,246,242,.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0 }}>{icon}</div>
                <div>
                  <div style={{ fontSize: ".85rem", fontWeight: 700, color: "var(--bg)", marginBottom: 2 }}>{title}</div>
                  <div style={{ fontSize: ".78rem", color: "rgba(247,246,242,.45)" }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ display: "flex" }}>
              {["👨‍💻","👩‍💼","👨‍🎓","👩‍💻","👨"].map((a, i) => (
                <div key={i} style={{ width: 28, height: 28, borderRadius: "50%", background: `hsl(${i * 40 + 200},50%,55%)`, border: "2px solid var(--ink)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".8rem", marginLeft: i ? -8 : 0 }}>{a}</div>
              ))}
            </div>
            <div style={{ fontSize: ".78rem", color: "rgba(247,246,242,.5)" }}><strong style={{ color: "rgba(247,246,242,.8)" }}>2,100+ job seekers</strong> already subscribed</div>
          </div>
        </div>

        {/* Right — form */}
        <div>
          {done ? (
            <div style={{ background: "rgba(247,246,242,.05)", border: "1px solid rgba(247,246,242,.12)", borderRadius: 16, padding: "40px 32px", textAlign: "center" }}>
              <div style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(45,138,78,.15)", border: "1px solid rgba(45,138,78,.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem", margin: "0 auto 16px" }}>✓</div>
              <div style={{ fontFamily: "var(--font-head)", fontWeight: 800, fontSize: "1.2rem", color: "var(--bg)", marginBottom: 8 }}>You're subscribed!</div>
              <div style={{ color: "rgba(247,246,242,.55)", fontSize: ".85rem", lineHeight: 1.65 }}>
                First batch of <strong style={{ color: "rgba(247,246,242,.8)" }}>{form.role} jobs in {form.city}</strong> lands this Monday morning. Check your inbox.
              </div>
              <div style={{ marginTop: 20, padding: "10px 16px", background: "rgba(45,138,78,.1)", border: "1px solid rgba(45,138,78,.2)", borderRadius: 8, fontSize: ".78rem", color: "rgba(247,246,242,.5)" }}>
                Add <strong style={{ color: "rgba(247,246,242,.7)" }}>onboarding@resend.dev</strong> to contacts so alerts don't go to spam.
              </div>
            </div>
          ) : (
            <div style={{ background: "rgba(247,246,242,.05)", border: "1px solid rgba(247,246,242,.12)", borderRadius: 16, padding: "32px 28px", backdropFilter: "blur(8px)" }}>
              <div style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "1rem", color: "var(--bg)", marginBottom: 4 }}>Get your free job alerts</div>
              <div style={{ fontSize: ".78rem", color: "rgba(247,246,242,.4)", marginBottom: 24 }}>Takes 20 seconds. No card needed.</div>
              <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <label style={labelStyle}>Your Email *</label>
                  <input type="email" required placeholder="you@gmail.com" value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    onFocus={e => e.target.style.borderColor = "var(--accent)"}
                    onBlur={e => e.target.style.borderColor = "rgba(247,246,242,.12)"}
                    style={inputStyle} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div>
                    <label style={labelStyle}>Job Role *</label>
                    <input type="text" required placeholder="Software Engineer" value={form.role}
                      onChange={e => setForm(f => ({ ...f, role: e.target.value }))}
                      onFocus={e => e.target.style.borderColor = "var(--accent)"}
                      onBlur={e => e.target.style.borderColor = "rgba(247,246,242,.12)"}
                      style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>City</label>
                    <select value={form.city} onChange={e => setForm(f => ({ ...f, city: e.target.value }))}
                      style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}>
                      {cities.map(c => <option key={c} style={{ background: "#1a1916" }}>{c}</option>)}
                    </select>
                  </div>
                </div>
                {error && (
                  <div style={{ background: "rgba(197,48,48,.12)", color: "#f87171", border: "1px solid rgba(197,48,48,.25)", borderRadius: "var(--r)", padding: "9px 13px", fontSize: ".8rem" }}>{error}</div>
                )}
                <button type="submit" className="btn btn-primary" disabled={loading}
                  style={{ width: "100%", justifyContent: "center", padding: "12px", fontSize: ".88rem", marginTop: 4 }}>
                  {loading ? <><span className="spin" />Subscribing…</> : "📬 Send me jobs every Monday — Free"}
                </button>
                <div style={{ textAlign: "center", fontSize: ".7rem", color: "rgba(247,246,242,.3)", lineHeight: 1.6 }}>
                  No spam ever. Unsubscribe in one click.
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Mobile override */}
      <style>{`
        @media (max-width: 768px) {
          .job-alert-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </section>
  );
}

/* RESUME */
function ResumePage({ resumeData, setResumeData, showToast, isPro }) {
  const [loading, setLoading] = useState(false);
  const [aiTip, setAiTip] = useState("");
  const [jd, setJd] = useState("");
  const [tailored, setTailored] = useState("");
  const [tailoring, setTailoring] = useState(false);
  const [coverJd, setCoverJd] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [coverLoading, setCoverLoading] = useState(false);
  const [linkedinBio, setLinkedinBio] = useState("");
  const [linkedinOut, setLinkedinOut] = useState("");
  const [linkedinLoading, setLinkedinLoading] = useState(false);
  const [activeProTab, setActiveProTab] = useState("tailor");
  const fileRef = useRef();

  const tailorResume = async () => {
    if (!jd.trim()) return showToast("Paste a job description first");
    setTailoring(true);
    setTailored("");
    const result = await callClaude(
      "You are an expert resume writer and ATS specialist. Rewrite resume content to perfectly match a job description. Be specific, use numbers/metrics where possible, and mirror the JD's exact keywords.",
      `My resume:
Name: ${resumeData.name}
Role: ${resumeData.role}
Experience: ${resumeData.experience}
Skills: ${resumeData.skills.join(", ")}
Summary: ${resumeData.summary}

Job Description I am applying to:
${jd.slice(0, 3000)}

Rewrite my resume profile for this specific JD. Output in this format:

**Tailored Summary (2 sentences):**
[rewritten summary using JD keywords]

**Top 5 Bullet Points for this Role:**
• [bullet 1 — quantified, JD keyword matched]
• [bullet 2]
• [bullet 3]
• [bullet 4]
• [bullet 5]

**Keywords to Add:**
[comma-separated list of keywords from JD I should add to my resume]

**Match Score:** [X/10] — [one sentence on how well my background fits]`,
      1200
    );
    setTailored(result);
    setTailoring(false);
  };

  const generateCoverLetter = async () => {
    if (!coverJd.trim()) return showToast("Paste a job description first");
    setCoverLoading(true);
    setCoverLetter("");
    const result = await callClaude(
      "You are an expert cover letter writer. Write compelling, specific, non-generic cover letters that hiring managers actually read.",
      `Write a professional cover letter for this candidate applying to this job.

Candidate:
Name: ${resumeData.name}
Role: ${resumeData.role}
Experience: ${resumeData.experience}
Skills: ${resumeData.skills.join(", ")}
Summary: ${resumeData.summary}

Job Description:
${coverJd.slice(0, 2500)}

Write a 3-paragraph cover letter:
- Para 1: Hook — specific reason why this role and company excite them (reference JD details)
- Para 2: Proof — 2 specific achievements that match JD requirements
- Para 3: Close — confident call to action

Keep it under 250 words. No clichés like "I am writing to express my interest". Sound human and confident.`,
      1000
    );
    setCoverLetter(result);
    setCoverLoading(false);
  };

  const optimizeLinkedin = async () => {
    if (!linkedinBio.trim()) return showToast("Paste your LinkedIn About section first");
    setLinkedinLoading(true);
    setLinkedinOut("");
    const result = await callClaude(
      "You are a LinkedIn profile optimization expert. Rewrite LinkedIn About sections to rank in recruiter searches and get more profile views.",
      `Rewrite this LinkedIn About section to maximize recruiter visibility and profile views.

Current About section:
${linkedinBio.slice(0, 1500)}

Candidate profile:
Role: ${resumeData.role} | Skills: ${resumeData.skills.slice(0, 6).join(", ")} | Experience: ${resumeData.experience}

Rewrite with:
- Hook in first 2 lines (visible before "see more")
- ATS keywords naturally woven in
- 1 specific achievement with numbers
- Skills recruiters search for
- Clear call to action at end
- Under 220 words (LinkedIn limit)

Output the rewritten About section only, ready to paste into LinkedIn.`,
      800
    );
    setLinkedinOut(result);
    setLinkedinLoading(false);
  };

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

  const getScanData = () => {
    try {
      const raw = localStorage.getItem("cl_scan_data");
      if (!raw) return { count: 0, month: "" };
      return JSON.parse(raw);
    } catch { return { count: 0, month: "" }; }
  };

  const incrementScan = () => {
    const now = new Date();
    const month = `${now.getFullYear()}-${now.getMonth()}`;
    const data = getScanData();
    const count = data.month === month ? data.count + 1 : 1;
    localStorage.setItem("cl_scan_data", JSON.stringify({ count, month }));
  };

  const handleFile = async (file) => {
    if (!file) return;

    if (!isPro) {
      const now = new Date();
      const month = `${now.getFullYear()}-${now.getMonth()}`;
      const data = getScanData();
      const used = data.month === month ? data.count : 0;
      if (used >= 3) {
        showToast("Free limit reached — 3 scans/month. Upgrade to Pro for unlimited scans.");
        return;
      }
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("resume", file);

      const response = await fetch("/api/analyze", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        let msg = "Failed to analyze resume";
        try { const err = await response.json(); msg = err.error || msg; } catch {}
        throw new Error(msg);
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

      if (!isPro) incrementScan();
      showToast("Resume analysed successfully!");
    } catch (error) {
      showToast("Error analyzing resume: " + error.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (!resumeData) {
    const scanData = getScanData();
    const now = new Date();
    const month = `${now.getFullYear()}-${now.getMonth()}`;
    const usedScans = !isPro && scanData.month === month ? scanData.count : 0;
    const remaining = Math.max(0, 3 - usedScans);

    return (
      <div className="page">
        <div className="page-header">
          <div className="page-title">Resume Analyser</div>
          <div className="page-sub">Get your ATS score, fix weaknesses, land more interviews</div>
        </div>
        <AdSlot type="leaderboard" />
        {!isPro && (
          <div style={{ display: "flex", gap: 8, marginBottom: 14, padding: "10px 14px", background: remaining === 0 ? "var(--red-dim)" : "var(--bg2)", borderRadius: "var(--r)", border: `1px solid ${remaining === 0 ? "rgba(197,48,48,.2)" : "var(--border)"}`, alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: ".8rem", color: remaining === 0 ? "var(--red)" : "var(--ink2)" }}>
              {remaining === 0 ? "⛔ Monthly scan limit reached — upgrade to Pro for unlimited scans" : `📊 ${remaining} free scan${remaining !== 1 ? "s" : ""} remaining this month`}
            </span>
            {remaining === 0 && <button className="btn btn-primary btn-sm" onClick={() => showToast("Go to Pricing to upgrade!")}>Upgrade to Pro</button>}
          </div>
        )}
        <label style={{ cursor: remaining === 0 && !isPro ? "not-allowed" : "pointer" }}>
          <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" style={{ display: "none" }} onChange={e => handleFile(e.target.files[0])} disabled={remaining === 0 && !isPro} />
          <div className="upload-zone" style={{ opacity: remaining === 0 && !isPro ? 0.5 : 1 }}>
            <div className="upload-icon">📄</div>
            <div className="upload-title">Drop your resume here or click to upload</div>
            <div className="upload-sub">Supports PDF — analysed in under 10 seconds by Claude AI</div>
            {loading && <div style={{ marginTop: 12 }}><span className="spin" style={{ color: "var(--accent)" }} /> &nbsp;Analysing...</div>}
          </div>
        </label>
        {!isPro && (
          <div className="card" style={{ marginTop: 20, background: "linear-gradient(135deg, #1a1916 0%, #2d2c28 100%)", border: "none", color: "#fff" }}>
            <div className="card-body" style={{ padding: "20px" }}>
              <div style={{ fontFamily: "var(--font-head)", fontWeight: 800, fontSize: "1rem", marginBottom: 8 }}>✦ Pro users get unlimited scans</div>
              <div style={{ fontSize: ".8rem", color: "rgba(247,246,242,.7)", lineHeight: 1.6, marginBottom: 14 }}>Plus: Cover letter generator, resume tailoring per JD, cold email to hiring manager, LinkedIn optimizer, salary negotiation script, unlimited job matches and all interview questions.</div>
              <span style={{ fontSize: ".78rem", background: "var(--accent)", color: "#fff", padding: "4px 12px", borderRadius: "99px", fontWeight: 700 }}>₹299/month — less than one coffee</span>
            </div>
          </div>
        )}
      </div>
    );
  }

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

          {isPro ? (
            <div className="card mb-4">
              <div className="card-head" style={{ flexDirection: "column", alignItems: "flex-start", gap: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, width: "100%" }}>
                  <div className="card-title">✦ Pro AI Toolkit</div>
                  <span className="pro-badge">PRO</span>
                </div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {[["tailor","Resume Tailor"],["cover","Cover Letter"],["linkedin","LinkedIn Bio"]].map(([id, label]) => (
                    <button key={id} onClick={() => setActiveProTab(id)} className="btn btn-sm" style={{ background: activeProTab === id ? "var(--accent)" : "var(--bg2)", color: activeProTab === id ? "#fff" : "var(--ink2)", fontWeight: activeProTab === id ? 700 : 500 }}>{label}</button>
                  ))}
                </div>
              </div>
              <div className="card-body">
                {activeProTab === "tailor" && (<>
                  <div className="input-group" style={{ marginBottom: 10 }}>
                    <label className="input-label">Paste the Job Description</label>
                    <textarea className="input" rows={5} placeholder="Paste JD from LinkedIn, Naukri, company site..." value={jd} onChange={e => setJd(e.target.value)} style={{ resize: "vertical", fontFamily: "var(--font-body)", fontSize: ".82rem" }} />
                  </div>
                  <button className="btn btn-primary w-full" onClick={tailorResume} disabled={tailoring || !jd.trim()}>
                    {tailoring ? <><span className="spin" />Tailoring...</> : "Rewrite my resume for this JD →"}
                  </button>
                  {tailored && (
                    <div style={{ marginTop: 14, padding: "14px", background: "var(--bg)", borderRadius: "var(--r)", border: "1px solid var(--border)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                        <span style={{ fontWeight: 700, fontSize: ".85rem" }}>Tailored resume</span>
                        <button className="btn btn-sm btn-ghost" onClick={() => { navigator.clipboard.writeText(tailored); showToast("Copied!"); }}>Copy</button>
                      </div>
                      <div style={{ fontSize: ".8rem", lineHeight: 1.8, whiteSpace: "pre-wrap" }}>{tailored}</div>
                    </div>
                  )}
                </>)}
                {activeProTab === "cover" && (<>
                  <div className="input-group" style={{ marginBottom: 10 }}>
                    <label className="input-label">Paste the Job Description</label>
                    <textarea className="input" rows={5} placeholder="Paste the JD — AI writes a personalised cover letter matching it exactly..." value={coverJd} onChange={e => setCoverJd(e.target.value)} style={{ resize: "vertical", fontFamily: "var(--font-body)", fontSize: ".82rem" }} />
                  </div>
                  <button className="btn btn-primary w-full" onClick={generateCoverLetter} disabled={coverLoading || !coverJd.trim()}>
                    {coverLoading ? <><span className="spin" />Writing cover letter...</> : "Generate cover letter →"}
                  </button>
                  {coverLetter && (
                    <div style={{ marginTop: 14, padding: "14px", background: "var(--bg)", borderRadius: "var(--r)", border: "1px solid var(--border)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                        <span style={{ fontWeight: 700, fontSize: ".85rem" }}>Your cover letter</span>
                        <button className="btn btn-sm btn-ghost" onClick={() => { navigator.clipboard.writeText(coverLetter); showToast("Copied!"); }}>Copy</button>
                      </div>
                      <div style={{ fontSize: ".8rem", lineHeight: 1.9, whiteSpace: "pre-wrap" }}>{coverLetter}</div>
                    </div>
                  )}
                </>)}
                {activeProTab === "linkedin" && (<>
                  <div className="input-group" style={{ marginBottom: 10 }}>
                    <label className="input-label">Your current LinkedIn About section</label>
                    <textarea className="input" rows={5} placeholder="Paste your current LinkedIn About section (or leave blank to generate from scratch)..." value={linkedinBio} onChange={e => setLinkedinBio(e.target.value)} style={{ resize: "vertical", fontFamily: "var(--font-body)", fontSize: ".82rem" }} />
                  </div>
                  <button className="btn btn-primary w-full" onClick={optimizeLinkedin} disabled={linkedinLoading}>
                    {linkedinLoading ? <><span className="spin" />Optimizing...</> : "Optimize my LinkedIn bio →"}
                  </button>
                  {linkedinOut && (
                    <div style={{ marginTop: 14, padding: "14px", background: "var(--bg)", borderRadius: "var(--r)", border: "1px solid var(--border)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                        <span style={{ fontWeight: 700, fontSize: ".85rem" }}>Optimized LinkedIn About</span>
                        <button className="btn btn-sm btn-ghost" onClick={() => { navigator.clipboard.writeText(linkedinOut); showToast("Copied!"); }}>Copy</button>
                      </div>
                      <div style={{ fontSize: ".8rem", lineHeight: 1.8, whiteSpace: "pre-wrap" }}>{linkedinOut}</div>
                    </div>
                  )}
                </>)}
              </div>
            </div>
          ) : (
            <div className="card mb-4" style={{ background: "linear-gradient(135deg,#1a1916,#2d2c28)", border: "none", color: "#fff" }}>
              <div className="card-body" style={{ padding: "22px" }}>
                <div style={{ fontFamily: "var(--font-head)", fontWeight: 800, fontSize: "1rem", marginBottom: 10 }}>✦ Pro AI Toolkit — 3 features free users don't have</div>
                {[
                  ["📄 Resume Tailor", "Paste any JD → AI rewrites your bullets with exact ATS keywords"],
                  ["✉️ Cover Letter", "Instant personalised cover letter for any job in 10 seconds"],
                  ["💼 LinkedIn Optimizer", "Rewrite your bio to rank in recruiter searches"],
                ].map(([title, desc]) => (
                  <div key={title} style={{ display: "flex", gap: 10, marginBottom: 10, padding: "8px 10px", background: "rgba(255,255,255,0.07)", borderRadius: "var(--r)" }}>
                    <span style={{ fontSize: ".85rem", fontWeight: 700, minWidth: 130 }}>{title}</span>
                    <span style={{ fontSize: ".76rem", color: "rgba(247,246,242,.65)", lineHeight: 1.5 }}>{desc}</span>
                  </div>
                ))}
                <div style={{ marginTop: 14, padding: "10px 14px", background: "var(--accent)", borderRadius: "var(--r)", textAlign: "center", fontWeight: 700, fontSize: ".88rem" }}>₹299/month — Unlock all 3 →</div>
              </div>
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
  const [coldCompany, setColdCompany] = useState("");
  const [coldRole, setColdRole] = useState("");
  const [coldEmail, setColdEmail] = useState("");
  const [coldLoading, setColdLoading] = useState(false);

  const generateColdEmail = async () => {
    if (!coldCompany.trim() || !coldRole.trim()) return;
    setColdLoading(true);
    setColdEmail("");
    const result = await callClaude(
      "You are an expert at cold outreach emails that actually get replies from hiring managers and recruiters.",
      `Write a cold email to a hiring manager at ${coldCompany} for a ${coldRole} position.

Candidate:
Name: ${resumeData?.name || "the candidate"}
Current role: ${resumeData?.role || "Software Developer"}
Experience: ${resumeData?.experience || "3 years"}
Top skills: ${resumeData?.skills?.slice(0, 4).join(", ") || "software development"}

Write a cold email with:
- Subject line (magnetic, specific to ${coldCompany})
- 4-line email body max
- Line 1: Specific compliment about ${coldCompany} (product, culture, recent news)
- Line 2: One specific achievement that's relevant to ${coldRole}
- Line 3: Clear ask (15-min call, not "any openings?")
- Line 4: Sign-off

No fluff. No "I hope this email finds you well". Sound like a human, not a template.

Format:
Subject: [subject line]

[email body]`,
      600
    );
    setColdEmail(result);
    setColdLoading(false);
  };

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

          {isPro ? (
            <div className="card" style={{ marginTop: 8 }}>
              <div className="card-head">
                <div className="card-title">✉️ Cold Email to Hiring Manager</div>
                <span className="pro-badge">PRO</span>
              </div>
              <div className="card-body">
                <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                  <div className="input-group" style={{ flex: 1, marginBottom: 0 }}>
                    <label className="input-label">Company</label>
                    <input className="input" placeholder="e.g. Google, Zepto, Razorpay" value={coldCompany} onChange={e => setColdCompany(e.target.value)} />
                  </div>
                  <div className="input-group" style={{ flex: 1, marginBottom: 0 }}>
                    <label className="input-label">Role you want</label>
                    <input className="input" placeholder="e.g. Senior SDE, Product Manager" value={coldRole} onChange={e => setColdRole(e.target.value)} />
                  </div>
                </div>
                <button className="btn btn-primary w-full" onClick={generateColdEmail} disabled={coldLoading || !coldCompany.trim() || !coldRole.trim()}>
                  {coldLoading ? <><span className="spin" />Writing email...</> : "Write cold email →"}
                </button>
                {coldEmail && (
                  <div style={{ marginTop: 14, padding: "14px", background: "var(--bg)", borderRadius: "var(--r)", border: "1px solid var(--border)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                      <span style={{ fontWeight: 700, fontSize: ".85rem" }}>Your cold email</span>
                      <button className="btn btn-sm btn-ghost" onClick={() => { navigator.clipboard.writeText(coldEmail); }}>Copy</button>
                    </div>
                    <div style={{ fontSize: ".8rem", lineHeight: 1.9, whiteSpace: "pre-wrap" }}>{coldEmail}</div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="card" style={{ background: "var(--ink)", color: "var(--bg)", marginTop: 8 }}>
              <div className="card-body" style={{ padding: "20px" }}>
                <div style={{ fontFamily: "var(--font-head)", fontWeight: 800, fontSize: ".95rem", marginBottom: 8 }}>✉️ Cold Email Generator — Pro Only</div>
                <div style={{ fontSize: ".78rem", color: "rgba(247,246,242,.65)", marginBottom: 14, lineHeight: 1.6 }}>Enter any company + role → AI writes a 4-line cold email to the hiring manager that actually gets replies. No fluff, no templates.</div>
                <button className="btn btn-sm" style={{ background: "var(--accent)", color: "#fff" }} onClick={() => setPage("pricing")}>Upgrade to Pro →</button>
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
          { name:"Pro", who:"Active job seekers", price:"₹299", trial:"Billed monthly", features:["Unlimited resume scans","Unlimited job matches","All interview questions","AI model answers","Live code review","Salary negotiation script","Cold email generator","Resume tailoring per JD","Career roadmap","Priority support"], locked:[], plan:"pro", featured:true },
          { name:"Team", who:"Colleges & bootcamps", price:"₹499", trial:"Per student/month", features:["Everything in Pro","Team admin dashboard","Student progress tracking","Bulk resume analysis reports","Placement success analytics","AI mock interview simulator","Custom company question banks","Referral & cold email templates","1-on-1 placement coaching","Dedicated account manager","White-label option","API access"], locked:[], plan:"team", comingSoon:true },
        ].map(p => (
          <div key={p.name} className={`price-card ${p.featured ? "featured" : ""}`} style={p.comingSoon ? { opacity: 0.85, position: "relative" } : {}}>
            {p.featured && <div className="price-badge">MOST POPULAR</div>}
            {p.comingSoon && (
              <div style={{ position: "absolute", top: -12, right: 16, background: "#a855f7", color: "#fff", fontSize: ".65rem", fontWeight: 800, padding: "3px 12px", borderRadius: "99px", letterSpacing: ".06em" }}>COMING SOON</div>
            )}
            <div className="price-name">{p.name}</div>
            <div className="price-who">{p.who}</div>
            <div className="price-amount">{p.price}{p.price !== "₹0" && <span>/mo</span>}</div>
            <div className="price-trial" style={{ color: p.plan === "free" ? "var(--green)" : p.comingSoon ? "#a855f7" : "var(--amber)" }}>{p.trial}</div>
            <div className="price-features">
              {p.features.map(f => <div key={f} className="price-feature">{f}</div>)}
              {p.locked.map(f => <div key={f} className="price-feature no">{f}</div>)}
            </div>
            {p.comingSoon ? (
              <div>
                <button className="btn w-full" style={{ background: "#a855f7", color: "#fff", opacity: 0.9, cursor: "not-allowed" }} disabled>
                  Notify me when available
                </button>
                <div style={{ textAlign: "center", fontSize: ".72rem", color: "var(--ink3)", marginTop: 8 }}>Expected Q3 2025 · Join waitlist →</div>
              </div>
            ) : (
              <button
                className={`btn w-full ${p.featured ? "btn-primary" : p.plan === "free" ? "btn-ghost" : "btn-dark"}`}
                onClick={() => handleBuy(p.plan)}
                disabled={loading === p.plan || (p.plan !== "free" && isPro)}
              >
                {loading === p.plan ? <><span className="spin" />Processing...</> :
                 isPro && p.plan === "pro" ? "✓ Current plan" :
                 p.plan === "free" ? "Start for free" : "Upgrade to Pro"}
              </button>
            )}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 32, textAlign: "center", fontSize: ".8rem", color: "var(--ink3)" }}>
        Secure payment via Razorpay · Instant access after payment · GST invoice available · Cancel anytime
      </div>

      <div style={{ marginTop: 40 }}>
        <div className="section-title" style={{ textAlign: "center", marginBottom: 20 }}>Frequently asked questions</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {[
            ["Is the free plan really free?","Yes, always. No credit card needed. You get 3 resume scans, 10 job matches, and 20 interview questions every month."],
            ["What do I get with Pro?","Full access to all features: unlimited resume scans, cover letter generator, LinkedIn optimizer, cold email writer, all interview questions with AI answers, salary negotiation script and more."],
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
/* ── CONTACT PAGE ─────────────────────────────────── */
function ContactPage({ showToast }) {
  const [form, setForm] = useState({ name: "", email: "", subject: "General Enquiry", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const subjects = ["General Enquiry", "Collaboration / Partnership", "Advertise with Us", "Bug Report", "Feature Request", "Other"];

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send");
      setSent(true);
      showToast("Message sent! We'll get back to you soon.");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "60px 1.5rem" }}>
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: ".75rem", fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--accent)", background: "var(--accent-dim)", border: "1px solid rgba(232,90,42,.2)", padding: "4px 12px", borderRadius: 99, marginBottom: 16 }}>✉ Contact</div>
        <h1 style={{ fontFamily: "var(--font-head)", fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 800, letterSpacing: "-.04em", marginBottom: 12 }}>Get in touch</h1>
        <p style={{ color: "var(--ink2)", lineHeight: 1.65, fontSize: ".95rem" }}>Have a question, want to collaborate, or just say hi? Fill in the form and I'll reply within 24 hours.</p>
      </div>

      {sent ? (
        <div className="card" style={{ padding: "40px 32px", textAlign: "center" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>✅</div>
          <h2 style={{ fontFamily: "var(--font-head)", fontWeight: 700, marginBottom: 8 }}>Message sent!</h2>
          <p style={{ color: "var(--ink2)", fontSize: ".9rem" }}>Thanks for reaching out. I'll get back to you at <strong>{form.email}</strong> within 24 hours.</p>
          <button className="btn btn-ghost" style={{ marginTop: 24 }} onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "General Enquiry", message: "" }); }}>Send another message</button>
        </div>
      ) : (
        <div className="card">
          <div className="card-body">
            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <div>
                  <label style={{ display: "block", fontSize: ".78rem", fontWeight: 600, marginBottom: 6, color: "var(--ink2)" }}>Your Name *</label>
                  <input
                    type="text" required placeholder="Rahul Sharma"
                    value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    style={{ width: "100%", padding: "9px 12px", border: "1.5px solid var(--border2)", borderRadius: "var(--r)", fontSize: ".85rem", background: "var(--bg)", color: "var(--ink)" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: ".78rem", fontWeight: 600, marginBottom: 6, color: "var(--ink2)" }}>Email Address *</label>
                  <input
                    type="email" required placeholder="rahul@example.com"
                    value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    style={{ width: "100%", padding: "9px 12px", border: "1.5px solid var(--border2)", borderRadius: "var(--r)", fontSize: ".85rem", background: "var(--bg)", color: "var(--ink)" }}
                  />
                </div>
              </div>
              <div>
                <label style={{ display: "block", fontSize: ".78rem", fontWeight: 600, marginBottom: 6, color: "var(--ink2)" }}>Subject</label>
                <select
                  value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                  style={{ width: "100%", padding: "9px 12px", border: "1.5px solid var(--border2)", borderRadius: "var(--r)", fontSize: ".85rem", background: "var(--bg)", color: "var(--ink)" }}
                >
                  {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label style={{ display: "block", fontSize: ".78rem", fontWeight: 600, marginBottom: 6, color: "var(--ink2)" }}>Message *</label>
                <textarea
                  required rows={5} placeholder="Tell me what's on your mind..."
                  value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  style={{ width: "100%", padding: "9px 12px", border: "1.5px solid var(--border2)", borderRadius: "var(--r)", fontSize: ".85rem", background: "var(--bg)", color: "var(--ink)", resize: "vertical", lineHeight: 1.6 }}
                />
              </div>
              {error && <div style={{ background: "var(--red-dim)", color: "var(--red)", border: "1px solid rgba(197,48,48,.2)", borderRadius: "var(--r)", padding: "10px 14px", fontSize: ".83rem" }}>{error}</div>}
              <button type="submit" className="btn btn-primary" disabled={loading} style={{ alignSelf: "flex-start", minWidth: 160 }}>
                {loading ? "Sending…" : "Send Message →"}
              </button>
            </form>
          </div>
        </div>
      )}

      <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ fontSize: ".78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em", color: "var(--ink3)" }}>Other ways to reach me</div>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          <a href="mailto:khan97faraz@gmail.com" style={{ color: "var(--accent)", fontSize: ".85rem", fontWeight: 600, textDecoration: "none" }}>✉ khan97faraz@gmail.com</a>
          <a href="https://www.linkedin.com/in/faraz-yar-khan-a4a948156/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--blue)", fontSize: ".85rem", fontWeight: 600, textDecoration: "none" }}>in LinkedIn</a>
        </div>
      </div>
    </div>
  );
}

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
          {[["Contact Us","contact"],["Advertise with Us","contact"],["Pricing","pricing"],["Privacy Policy",null],["Terms of Service",null]].map(([l,p]) => (
            <a key={l} className="footer-link" onClick={() => p && setPage(p)} style={{ cursor: p ? "pointer" : "default" }}>{l}</a>
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
export default function App({ defaultTab = "home" } = {}) {
  const [page, setPage] = useState(defaultTab);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = (id) => {
    setPage(id);
    setMobileMenuOpen(false);
    if (typeof window !== "undefined") {
      const path = id === "home" ? "/" : `/${id}`;
      window.history.pushState(null, "", path);
    }
  };
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
          <a href="/" className="nav-logo" onClick={(e) => { e.preventDefault(); navigate("home"); }}>
            <div className="nav-logo-icon">C</div><span>CareerLens</span>
          </a>
          <div className="nav-links">
            {NAV_ITEMS.map(n => (
              <a key={n.id} href={n.id === "home" ? "/" : `/${n.id}`} className={`nav-link ${page === n.id ? "active" : ""}`} onClick={(e) => { e.preventDefault(); navigate(n.id); }}>{n.label}</a>
            ))}
          </div>
          <div className="nav-right">
            {isPro ? (
              <span className="pro-badge">PRO ✦</span>
            ) : (
              <button className="btn btn-primary btn-sm" onClick={() => navigate("pricing")}>Upgrade to Pro</button>
            )}
          </div>
          <button className="nav-hamburger" onClick={() => setMobileMenuOpen(o => !o)} aria-label="Menu">
            <span style={{ transform: mobileMenuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
            <span style={{ opacity: mobileMenuOpen ? 0 : 1 }} />
            <span style={{ transform: mobileMenuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
          </button>
        </nav>

        <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
          {NAV_ITEMS.map(n => (
            <button key={n.id} className={`mobile-menu-link ${page === n.id ? "active" : ""}`} onClick={() => navigate(n.id)}>{n.label}</button>
          ))}
          <div className="mobile-menu-divider" />
          {isPro ? (
            <div style={{ padding: "10px 16px" }}><span className="pro-badge">PRO ✦ Active</span></div>
          ) : (
            <button className="btn btn-primary w-full" style={{ marginTop: 4 }} onClick={() => navigate("pricing")}>Upgrade to Pro — ₹299/month</button>
          )}
        </div>

        <main style={{ flex: 1 }}>
          {page === "home" && <HomePage setPage={navigate} setResumeData={setResumeData} />}
          {page === "resume" && <ResumePage resumeData={resumeData} setResumeData={setResumeData} showToast={showToast} isPro={isPro} />}
          {page === "jobs" && <JobsPage resumeData={resumeData} isPro={isPro} setPage={navigate} />}
          {page === "interview" && <InterviewPage isPro={isPro} setPage={navigate} />}
          {page === "coding" && <CodingPage isPro={isPro} />}
          {page === "salary" && <SalaryPage resumeData={resumeData} isPro={isPro} showToast={showToast} />}
          {page === "roadmap" && <RoadmapPage resumeData={resumeData} isPro={isPro} showToast={showToast} />}
          {page === "pricing" && <PricingPage isPro={isPro} setIsPro={setIsPro} showToast={showToast} />}
          {page === "contact" && <ContactPage showToast={showToast} />}
        </main>

        <Footer setPage={navigate} />
        {toast && <Toast msg={toast} onDone={() => setToast(null)} />}
      </div>
    </>
  );
}
