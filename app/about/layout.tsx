import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Triangles Consolidated Limited - a next-generation conglomerate building the future through innovation, technology, and sustainable growth across multiple industries.",
  keywords: [
    "about triangles",
    "company history",
    "leadership team",
    "mission values",
    "innovation",
    "technology conglomerate",
    "sustainable growth",
    "global impact"
  ],
  openGraph: {
    title: "About Triangles Consolidated Limited",
    description: "Discover our mission, values, and leadership team. Learn how we're building the future across multiple industries.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Triangles Consolidated Limited",
      },
    ],
  },
  twitter: {
    title: "About Triangles Consolidated Limited",
    description: "Discover our mission, values, and leadership team. Learn how we're building the future across multiple industries.",
  },
  alternates: {
    canonical: "https://triangles-consolidated.com/about",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 