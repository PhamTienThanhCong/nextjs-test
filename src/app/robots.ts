import { MAIN_URL_APP } from "@/constants/app";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${MAIN_URL_APP}/sitemap.xml`,
  };
}
