import { MAIN_URL_APP } from "@/constants/app";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // MAIN_URL_APP get from .env
  return [
    {
      url: MAIN_URL_APP,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${MAIN_URL_APP}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${MAIN_URL_APP}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${MAIN_URL_APP}/service`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
