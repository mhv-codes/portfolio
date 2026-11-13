# Week 7 — Break Your Own Site

**Portfolio:** https://mhv-codes.github.io/portfolio/  
**Checked:** 2026-11-13. This report records checks performed in a cloud Chromium browser and Google PageSpeed Insights. It does not claim a physical-phone test or an independent human review.

## Where it breaks

| Check | Result | Triage |
|---|---|---|
| Submit the calculator with both number fields empty | Browser required-field validation blocked submission; the page stayed put and showed no computed result. | Pass; no fix needed. |
| Enter text (`abc`) into the total number field | The number input rejected the text, leaving the required value empty; submission was blocked. | Pass; no fix needed. |
| Enter 10 total rows and 11 covered rows | The client-side guard displayed “Enter whole-number counts with covered rows between zero and the total.” | Pass; no fix needed. |
| Submit valid values 10 and 2 twice rapidly | Both submissions left the same pure calculation result, `20.00%`; this calculator has no write or payment side effect. | Pass; no duplicate action to fix. |
| Check internal navigation and external destinations | Work, Capstone, About, and Contact sections have matching targets. The notebook, modeling notebook, GitHub profile, and LinkedIn anchors are present. | No broken target found in the rendered page. |
| Inspect mobile performance, SEO, accessibility, and best practices | PageSpeed Insights mobile run reported Performance 100, Accessibility 100, Best Practices 100, and SEO 100. FCP/LCP were 0.8 s, TBT 0 ms, CLS 0, Speed Index 0.8 s. | Pass for this Lighthouse run; scores can vary. |
| Search for the exact name/site | A search for `"Harsha Vardhan" "mhv-codes.github.io/portfolio"` returned no results. | Known limitation: search indexing is outside this static site's immediate control. Recheck after indexing. |
| Share-preview metadata | The page had title, description, `og:title`, and `og:description`, but no share image or Twitter card metadata. | Fix now: added Open Graph URL/image and Twitter large-card metadata; added `social-preview.svg`. |
| Review in a different real browser/device | This cloud check does not prove behavior on the owner's physical phone or a second browser. | Needs owner/peer check; no claim of completion. |
| Independent hardening review | No mentor or peer has reviewed this report in this session. | Required human step. Reviewer should record must-fixes and whether each was addressed below. |

## Fixes made

- Added `og:url`, `og:image`, `twitter:card`, `twitter:title`, `twitter:description`, and `twitter:image` to `index.html`.
- Added a 1200 × 630 portfolio social-preview SVG at `social-preview.svg`.
- Kept the existing page title and meta description; kept the calculator's required number constraints and explicit out-of-range message.

## Hardening review — reviewer to complete

Reviewer name/date: **pending**  
Must-fix findings: **pending**  
Fixes verified: **pending**

## Evidence

- PageSpeed Insights report: https://pagespeed.web.dev/analysis/https-mhv-codes-github-io-portfolio/sth5t20cxb?form_factor=mobile
- Live portfolio: https://mhv-codes.github.io/portfolio/
- Repository: https://github.com/mhv-codes/portfolio

This checkpoint is ready for the required reviewer pass after the metadata update is deployed. The physical-device / second-browser check and independent hardening review remain outstanding; I have left them visible rather than marking them passed.
