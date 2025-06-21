import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Ecosystem",
  description: "Explore our interconnected ecosystem of four divisions: IT & AI, Real Estate, News & Media, and Entertainment. Discover how we build the future across multiple industries.",
  keywords: [
    "ecosystem",
    "business divisions",
    "IT AI division",
    "real estate innovations",
    "news media",
    "entertainment studios",
    "cross-platform innovation",
    "integrated solutions",
    "technology conglomerate"
  ],
  openGraph: {
    title: "Triangles Ecosystem - Building the Future",
    description: "Four interconnected divisions working in harmony to build the future across technology, real estate, media, and entertainment.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Triangles Ecosystem",
      },
    ],
  },
  twitter: {
    title: "Triangles Ecosystem - Building the Future",
    description: "Four interconnected divisions working in harmony to build the future across technology, real estate, media, and entertainment.",
  },
  alternates: {
    canonical: "https://triangles-consolidated.com/ecosystem",
  },
}

export default function EcosystemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 