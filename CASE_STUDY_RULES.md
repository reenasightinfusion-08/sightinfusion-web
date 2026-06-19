# Case Study Rules — SightInfusion

Give me the fields below and I will insert the case study into `caseStudiesDetail` in `src/App.jsx` and wire it up to the correct service so it appears in the portfolio and on its own detail page automatically.

---

## Required Fields

| Field | What to provide | Example |
|---|---|---|
| **ID / Slug** | Short lowercase URL-safe identifier (no spaces) | `fintrack` |
| **Service** | Pick one from the service list below | `Backend Development` |
| **Tag** | Short 2–3 word label shown as the category badge | `Fintech SaaS` |
| **Title** | Full project name | `FinTrack Expense Platform` |
| **Subtitle** | One sentence describing what was built | `A real-time expense tracking SaaS for SMEs built on a serverless backend.` |
| **Overview** | 2–3 sentence project overview | `FinTrack...` |
| **Client** | Client or company name | `FinTrack Ltd.` |
| **Industry** | Industry the client operates in | `Fintech / SaaS` |
| **Timeline** | How long the project took | `4 months` |
| **Team Size** | Number of engineers | `3 engineers` |
| **Hero Image** | Image file path or URL for the case study banner | `/cs-fintrack.png` |

---

## Service Options

Use exactly one:

| Display label | Internal key |
|---|---|
| Back-End Development | `backend` |
| Front-End Development | `frontend` |
| AI/ML Solutions | `ai-ml` |
| Mobile App Development | `mobile` |
| Cloud & DevOps | `cloud` |
| UI/UX Design | `ui-ux` |

---

## Challenge Section

Describe the core problem the client faced.

```
Challenge Summary:
One paragraph explaining the business or technical problem.

Challenge Points (bullet list, 3–6 items):
- Point one
- Point two
- Point three
```

---

## Solution Section

Describe what SightInfusion built.

```
Solution Summary:
One paragraph describing the approach and architecture.

Solution Points (bullet list, 4–7 items):
- Point one
- Point two
- Point three
- Point four
```

---

## Tech Stack

List all technologies, frameworks, and tools used, comma-separated:

```
Tech: Node.js, React, PostgreSQL, Redis, Docker, AWS
```

---

## Results

Provide 3–5 measurable outcomes. Each result needs a metric value and a short label.

```
Results:
- Metric: 65%  |  Label: Reduction in reconciliation time
- Metric: 99.9%  |  Label: Uptime over 6 months
- Metric: 2x  |  Label: Faster financial close cycle
- Metric: 500+  |  Label: SME clients onboarded
```

---

## Testimonial (Optional)

```
Quote: "The platform transformed how we handle expense approvals. Incredibly robust."
Author: CFO, FinTrack Ltd.
```

---

## Hero Image Guidelines

- Place the image in the `public/` folder
- Name it `cs-<slug>.png` (e.g. `cs-fintrack.png`)
- Recommended size: **1200 × 600px** minimum
- Format: PNG or JPG
- If no custom image is available, provide an Unsplash URL

---

## Which Service Page It Appears On

The case study will be linked from the service detail page matching the **Service** field above. Make sure the service you pick matches what the project primarily demonstrates.

---

## Example — What to send me

```
ID: smartpos
Service: Back-End Development
Tag: Retail Tech
Title: SmartPOS Inventory System
Subtitle: A cloud-native POS backend that syncs inventory across 200+ retail locations in real time.
Overview: SmartPOS is a mid-market retail chain that needed to replace their legacy POS system with a cloud-native backend capable of handling real-time inventory sync, multi-location stock transfers, and daily sales reconciliation across 200+ stores.
Client: SmartPOS Retail
Industry: Retail / Point of Sale
Timeline: 7 months
Team Size: 6 engineers
Hero Image: /cs-smartpos.png

Challenge Summary:
SmartPOS's legacy system caused stock discrepancies between stores and delayed financial reporting by 24–48 hours. They needed a modern backend that could sync inventory in real time and integrate with their existing accounting software.

Challenge Points:
- Real-time inventory sync across 200+ locations
- Legacy integration with SAP accounting system
- Peak load of 10,000+ transactions per hour during sale events
- Offline-first capability for stores with unstable internet

Solution Summary:
We built an event-driven microservices backend using Node.js and Kafka for real-time stock event streaming, with PostgreSQL as the primary store and Redis for in-store caching to support offline-first operation.

Solution Points:
- Kafka-based event streaming for real-time inventory updates
- Node.js microservices with horizontal auto-scaling on AWS ECS
- PostgreSQL primary store with per-store Redis cache
- Offline-first sync engine with conflict resolution
- SAP integration via REST adapter service
- Automated daily reconciliation report generation

Tech: Node.js, Kafka, PostgreSQL, Redis, AWS ECS, Docker, SAP REST API

Results:
- Metric: 100%  |  Label: Real-time inventory accuracy
- Metric: 48hrs → 2min  |  Label: Financial reporting time
- Metric: 10k+  |  Label: Peak transactions per hour handled
- Metric: 99.98%  |  Label: Uptime across all locations

Quote: "Our stock discrepancies dropped to zero on day one. The system handled our Black Friday peak without breaking a sweat."
Author: CTO, SmartPOS Retail
```

---

## What I Will Do With It

1. Create the entry in `caseStudiesDetail` with the slug as the key
2. Add it to the `caseStudies` array of the matching service in the `SERVICES` constant so it appears on the service page
3. The case study will be accessible at `/case-study/<slug>`
4. It will appear in the portfolio grid on `/portfolio`
