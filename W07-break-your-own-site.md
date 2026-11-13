# Week 7 — Break Your Own Site

**Live portfolio:** https://mhv-codes.github.io/portfolio/  
**Checked:** November 14, 2026. The browser checks below were performed in cloud Chromium. PageSpeed's mobile run is an emulated Moto G Power, not a physical-phone test.

## Where it breaks

| Check | Result | Triage |
|---|---|---|
| Submit the calculator with both fields empty | The browser's required-field validation blocked submission; no result was produced. | Pass; no fix needed. |
| Enter garbage (`abc`) into the numeric field | The number control did not accept the text in the cloud-browser interaction; with the field empty, required validation blocked submission. | Pass; no fix needed. |
| Enter 10 total rows and 11 covered rows | The site showed: “Enter whole-number counts with covered rows between zero and the total.” | Pass; no fix needed. |
| Submit valid values 10 and 2 twice quickly | The calculator displayed 20.00% after the repeated submit. It has no write or payment side effect. | Pass; duplicate action is harmless. |
| Check internal links and section targets | Skip, Work, Capstone, About, Contact, and the case-study link all point to existing anchors. GitHub notebook links point to public repo files. | No broken internal target found. |
| Follow the LinkedIn contact link | LinkedIn redirected an unauthenticated browser to its sign-up/auth wall. | Known limitation: visitors may need to sign in to see the profile. The link is not a dead target. |
| Check page title, description, favicon, and share metadata | The live title and description are present; the favicon resolves to `favicon.svg`; Open Graph and Twitter tags reference the live `social-preview.svg`, which opens successfully over HTTPS. | Pass; metadata fix is live. |
| Search for the exact portfolio name/site | Search for `site:mhv-codes.github.io/portfolio/ "Harsha Vardhan"` returned no results. | Known limitation: the site is not appearing in search yet. Recheck after indexing. |
| Run a mobile speed check | PageSpeed Insights reported Performance 100, Accessibility 100, Best Practices 100, and SEO 100. FCP/LCP 0.8 s, TBT 0 ms, CLS 0, Speed Index 0.8 s. | Pass for this Lighthouse run; scores can vary. |
| Try a different physical phone or browser | No physical phone or second browser was available in this check. PageSpeed used an emulated Moto G Power. | Human check still needed. |
| Independent hardening review | No mentor or peer has yet reviewed this break list and its fixes. | Human review still needed; reviewer must record must-fixes and verify them. |

## Fixes and evidence

- Added `og:url`, `og:image`, `twitter:card`, `twitter:title`, `twitter:description`, and `twitter:image` to [`index.html`](https://github.com/mhv-codes/portfolio/blob/main/index.html).
- Added and verified the live 1200 × 630 share image: [`social-preview.svg`](https://github.com/mhv-codes/portfolio/blob/main/social-preview.svg).
- Kept the page title, meta description, and favicon; the required numeric fields and out-of-range guard are working.
- PageSpeed Insights mobile report: https://pagespeed.web.dev/analysis/https-mhv-codes-github-io-portfolio/526tudan4a?form_factor=mobile
- Live portfolio: https://mhv-codes.github.io/portfolio/

## Human hardening review — pending

Reviewer name/date: **pending**  
Must-fix findings: **pending**  
Fixes verified: **pending**

This is an honest test log, but the checkpoint is **not fully complete** until a mentor or structured peer reviews the list and the owner checks the live page on a separate physical device or browser.
