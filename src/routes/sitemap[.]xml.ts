import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://rrpaintersnz.com";

const TODAY = new Date().toISOString().split("T")[0];

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
  lastmod?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0", lastmod: TODAY },
  { path: "/about", changefreq: "monthly", priority: "0.8", lastmod: TODAY },
  { path: "/services", changefreq: "monthly", priority: "0.9", lastmod: TODAY },
  { path: "/projects", changefreq: "weekly", priority: "0.8", lastmod: TODAY },
  { path: "/testimonials", changefreq: "monthly", priority: "0.6", lastmod: TODAY },
  { path: "/contact", changefreq: "monthly", priority: "0.9", lastmod: TODAY },
];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
