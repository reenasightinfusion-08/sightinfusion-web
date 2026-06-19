# Blog Post Rules — SightInfusion

Give me the fields below and I will insert the post into `BLOG_POSTS` in `src/App.jsx` with the correct format automatically.

---

## Required Fields

| Field | What to provide | Example |
|---|---|---|
| **Title** | Full article headline | `How AI is Reshaping Healthcare in 2026` |
| **Category** | Pick one from the list below | `AI/ML` |
| **Date** | Publication date | `June 20, 2026` |
| **Description** | 1–2 sentence summary shown on the card | `Discover how AI tools are cutting diagnosis time by 40%...` |
| **Image** | URL or file path of cover image (min 800px wide) | `https://...` or `/blog-ai-health.jpg` |
| **Read Time** | Estimated read time | `5 Min Read` |
| **Featured** | Should this appear in the featured carousel? | `Yes` or `No` |
| **Content** | Full article body — see format below | — |

---

## Category Options

Use exactly one of these values:

| Label shown on site | Internal key to use |
|---|---|
| AI/ML | `ai-ml` |
| AR/VR | `ar-vr` |
| Fintech | `fintech` |
| Ecommerce | `ecommerce` |
| UI/UX | `ui-ux` |
| Web Dev | `web-dev` |
| Cloud | `cloud` |
| Mobile | `mobile` |
| Cybersecurity | `cybersecurity` |

---

## Content Format

Write the article as a list of sections. Each section has an optional heading and a paragraph body.

```
Section 1:
Heading: Why This Topic Matters
Body: Your paragraph text here. Can be as long as needed. No line breaks inside a paragraph.

Section 2:
Heading: Key Point One
Body: Explanation of the first key point...

Section 3:
Heading: Key Point Two
Body: Explanation of the second key point...

Section 4:
Heading: Conclusion
Body: Wrap-up paragraph...
```

- Minimum **4 sections**, recommended **5–7**
- The first section heading is usually a contextual intro (e.g. "Why This Matters")
- The last section heading should be "Conclusion"
- A section can have **no heading** — just write `Heading: (none)` and I will skip it

---

## Image Guidelines

- **Preferred**: Unsplash URL with `?w=800&q=80&auto=format&fit=crop` appended
- **Accepted**: Any publicly accessible HTTPS image URL
- **Local file**: Place the image in the `public/` folder and provide the filename (e.g. `/my-blog-image.jpg`)
- Recommended aspect ratio: **16:9** or wider
- Minimum width: **800px**

---

## Example — What to send me

```
Title: 5 Ways Machine Learning Improves Supply Chain Efficiency
Category: AI/ML
Date: June 25, 2026
Description: Learn how ML-powered demand forecasting, route optimisation, and anomaly detection are cutting costs and delays across global supply chains.
Image: https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80&auto=format&fit=crop
Read Time: 6 Min Read
Featured: No

Content:

Section 1:
Heading: The Supply Chain Problem
Body: Global supply chains have grown more complex and fragile. ML is emerging as the practical tool that gives planners real predictive power instead of reactive guesswork.

Section 2:
Heading: 1. Demand Forecasting
Body: Traditional forecasting uses historical averages. ML models incorporate weather, social trends, macroeconomic signals, and supplier lead times to produce forecasts that are 30–50% more accurate.

Section 3:
Heading: 2. Route Optimisation
Body: Dynamic routing algorithms re-calculate the most efficient delivery paths in real time as conditions change — reducing fuel costs and delivery windows simultaneously.

Section 4:
Heading: Conclusion
Body: Organisations that embed ML into their supply chain operations gain a structural cost and speed advantage. SightInfusion builds these systems end-to-end, from data pipeline to production model.
```

---

## What I Will Do With It

1. Assign the next available `id` (currently the highest is **10**)
2. Map the category label to the correct internal key
3. Format the date exactly as provided
4. Convert your sections into the `content` array format
5. Insert the entry into `BLOG_POSTS` in `src/App.jsx`
6. The post will immediately appear on `/blogs` and be readable at `/blogs/<id>`
