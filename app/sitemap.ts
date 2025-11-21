import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: "https://mansurbala.com/",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
