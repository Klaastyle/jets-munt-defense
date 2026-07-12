 
import type { Metadata } from "next";
import { siteUrl } from "./seo-data";

type SeoMeta = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  locale?: string;
  languages?: Record<string, string>;
};

export function buildMetadata({
  title,
  description,
  path = "",
  image = "/media/turbina/m166ts-2.jpg",
  keywords = [],
  locale = "es_ES",
  languages,
}: SeoMeta): Metadata {
  const url = new URL(path, siteUrl).toString();
  const imageUrl = new URL(image, siteUrl).toString();

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "JetsMunt",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 900,
          alt: "JetsMunt compact turbojet propulsion system",
        },
      ],
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
