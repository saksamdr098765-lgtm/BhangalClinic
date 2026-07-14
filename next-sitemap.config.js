import SITE_CONFIG from "./src/app/SITE_CONFIG.js";

export default {
  siteUrl: SITE_CONFIG.url,

  generateRobotsTxt: true,

  sitemapSize: 7000,

  changefreq: "weekly",

  priority: 0.7,

  generateIndexSitemap: false,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],

    additionalSitemaps: [
      `${SITE_CONFIG.url}/sitemap.xml`,
    ],
  },

  exclude: [
    "/api/*",
    "/admin/*",
    "/dashboard/*",
    "/404",
    "/500",
  ],
};