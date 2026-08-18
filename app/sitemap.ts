import type { MetadataRoute } from "next"

// Staging domain until the mercfund.com cutover — update BASE then.
const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mercurypartners.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/founder-legacy", "/investments", "/contact"].map(
    (route) => ({
      url: `${BASE}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: route === "" ? 1 : 0.7,
    })
  )
}
