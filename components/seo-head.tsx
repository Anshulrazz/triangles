"use client"

import { useEffect } from "react"

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: "website" | "article" | "product"
  structuredData?: object
}

export function SEOHead({
  title,
  description,
  keywords,
  image = "/og-image.jpg",
  url,
  type = "website",
  structuredData,
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title if provided
    if (title) {
      document.title = title
    }

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (description && metaDescription) {
      metaDescription.setAttribute("content", description)
    }

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (keywords && keywords.length > 0 && metaKeywords) {
      metaKeywords.setAttribute("content", keywords.join(", "))
    }

    // Update Open Graph tags
    const ogTags = {
      "og:title": title,
      "og:description": description,
      "og:image": image,
      "og:url": url,
      "og:type": type,
    }

    Object.entries(ogTags).forEach(([property, content]) => {
      if (content) {
        let meta = document.querySelector(`meta[property="${property}"]`)
        if (meta) {
          meta.setAttribute("content", content)
        }
      }
    })

    // Update Twitter Card tags
    const twitterTags = {
      "twitter:title": title,
      "twitter:description": description,
      "twitter:image": image,
    }

    Object.entries(twitterTags).forEach(([name, content]) => {
      if (content) {
        let meta = document.querySelector(`meta[name="${name}"]`)
        if (meta) {
          meta.setAttribute("content", content)
        }
      }
    })

    // Add structured data if provided
    if (structuredData) {
      const script = document.createElement("script")
      script.type = "application/ld+json"
      script.text = JSON.stringify(structuredData)
      document.head.appendChild(script)

      return () => {
        document.head.removeChild(script)
      }
    }
  }, [title, description, keywords, image, url, type, structuredData])

  return null
}

// Predefined structured data for common page types
export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Triangles Consolidated Limited",
    url: "https://trianglesconsolidated.in",
    logo: "https://trianglesconsolidated.in/favicon.svg",
    description: "A futuristic conglomerate with operations across IT & AI, Real Estate, News & Media, and Entertainment",
    foundingDate: "2020",
    industry: "Technology",
    numberOfEmployees: "1000+",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Global"
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: "https://trianglesconsolidated.in/contact"
    },
    sameAs: [
      "https://twitter.com/triangles_consolidated",
      "https://linkedin.com/company/triangles-consolidated",
      "https://facebook.com/triangles.consolidated"
    ]
  },
  
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Triangles Consolidated Limited",
    url: "https://trianglesconsolidated.in",
    description: "Building the Future Across Every Dimension",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://trianglesconsolidated.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },

  breadcrumb: (items: Array<{ name: string; url: string }>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }),

  article: (articleData: {
    headline: string
    description: string
    author: string
    datePublished: string
    image?: string
  }) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: articleData.headline,
    description: articleData.description,
    author: {
      "@type": "Person",
      name: articleData.author
    },
    datePublished: articleData.datePublished,
    image: articleData.image || "/og-image.jpg",
    publisher: {
      "@type": "Organization",
      name: "Triangles Consolidated Limited",
      logo: {
        "@type": "ImageObject",
        url: "https://trianglesconsolidated.in/favicon.svg"
      }
    }
  }),

  service: (serviceData: {
    name: string
    description: string
    provider: string
    areaServed: string
  }) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceData.name,
    description: serviceData.description,
    provider: {
      "@type": "Organization",
      name: serviceData.provider
    },
    areaServed: {
      "@type": "Country",
      name: serviceData.areaServed
    }
  })
} 