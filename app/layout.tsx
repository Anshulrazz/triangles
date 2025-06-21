import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TribotChat } from "@/components/tribot-chat"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })

export const viewport: Viewport = {
  themeColor: "#06b6d4",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://trianglesconsolidated.in"),
  title: {
    default: "Triangles Consolidated Limited - Building the Future",
    template: "%s | Triangles Consolidated Limited"
  },
  description: "A futuristic conglomerate with operations across IT & AI, Real Estate, News & Media, and Entertainment. Leading innovation in AI, sustainable development, digital journalism, and immersive entertainment.",
  keywords: [
    "AI",
    "artificial intelligence", 
    "smart cities",
    "real estate",
    "digital media",
    "entertainment",
    "technology",
    "innovation",
    "sustainability",
    "conglomerate",
    "future technology",
    "digital transformation",
    "sustainable development",
    "media innovation",
    "entertainment platforms"
  ],
  authors: [{ name: "Triangles Consolidated Limited" }],
  creator: "Triangles Consolidated Limited",
  publisher: "Triangles Consolidated Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://trianglesconsolidated.in",
    siteName: "Triangles Consolidated Limited",
    title: "Triangles Consolidated Limited - Building the Future",
    description: "Leading innovation across IT & AI, Real Estate, News & Media, and Entertainment. We build the future across every dimension.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Triangles Consolidated Limited - Building the Future",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@triangles_consolidated",
    creator: "@triangles_consolidated",
    title: "Triangles Consolidated Limited - Building the Future",
    description: "Leading innovation across IT & AI, Real Estate, News & Media, and Entertainment",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://triangles-consolidated.com",
    languages: {
      "en-US": "https://triangles-consolidated.com",
    },
  },
  category: "technology",
  classification: "Business",
  other: {
    "msapplication-TileColor": "#06b6d4",
    "msapplication-config": "/browserconfig.xml",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Triangles Consolidated Limited",
              "url": "https://triangles-consolidated.com",
              "logo": "https://triangles-consolidated.com/favicon.svg",
              "description": "A futuristic conglomerate with operations across IT & AI, Real Estate, News & Media, and Entertainment",
              "foundingDate": "2020",
              "industry": "Technology",
              "numberOfEmployees": "1000+",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Global"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "url": "https://triangles-consolidated.com/contact"
              },
              "sameAs": [
                "https://twitter.com/triangles_consolidated",
                "https://linkedin.com/company/triangles-consolidated",
                "https://facebook.com/triangles.consolidated"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI & IT Solutions",
                      "description": "Cutting-edge AI solutions and cloud technologies"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Real Estate Development",
                      "description": "Smart cities and sustainable architecture"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "News & Media",
                      "description": "Digital journalism and media innovation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Entertainment",
                      "description": "Original content and entertainment platforms"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* Structured Data for Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Triangles Consolidated Limited",
              "url": "https://triangles-consolidated.com",
              "description": "Building the Future Across Every Dimension",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://triangles-consolidated.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-black text-white`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <TribotChat />
      </body>
    </html>
  )
}
