"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Cpu, Building2, Newspaper, Film, ArrowRight, Zap, Shield, Globe, Rocket } from "lucide-react"
import Link from "next/link"

const ecosystems = [
  {
    id: "it",
    title: "IT & AI Division",
    icon: Cpu,
    color: "from-cyan-400 to-blue-600",
    description: "Cutting-edge artificial intelligence, cloud computing, and enterprise software solutions",
    features: ["AI/ML Platforms", "Cloud Infrastructure", "Enterprise SaaS", "Blockchain Solutions"],
    stats: { projects: "25+", clients: "100+", revenue: "$50M+" },
    href: "/it-division",
  },
  {
    id: "realestate",
    title: "Real Estate Innovations",
    icon: Building2,
    color: "from-emerald-400 to-teal-600",
    description: "Smart cities, sustainable architecture, and next-generation property development",
    features: ["Smart Cities", "Green Buildings", "PropTech Solutions", "Urban Planning"],
    stats: { projects: "15+", sqft: "2M+", cities: "5+" },
    href: "/real-estate",
  },
  {
    id: "news",
    title: "News & Journalism",
    icon: Newspaper,
    color: "from-orange-400 to-red-600",
    description: "Digital-first journalism, media innovation, and information technology platforms",
    features: ["Digital Newsrooms", "AI-Powered Analytics", "Content Distribution", "Fact-Checking Tech"],
    stats: { readers: "5M+", articles: "10K+", platforms: "3+" },
    href: "/news-media",
  },
  {
    id: "entertainment",
    title: "Entertainment Studios",
    icon: Film,
    color: "from-purple-400 to-pink-600",
    description: "Original content creation, streaming platforms, and immersive entertainment experiences",
    features: ["Original Content", "Streaming Platform", "VR/AR Experiences", "Music Production"],
    stats: { shows: "20+", subscribers: "1M+", awards: "5+" },
    href: "/entertainment",
  },
]

const synergies = [
  {
    icon: Zap,
    title: "Cross-Platform Innovation",
    description:
      "Our divisions collaborate to create breakthrough solutions that transcend traditional industry boundaries.",
  },
  {
    icon: Shield,
    title: "Integrated Security",
    description: "Unified security protocols and data protection across all our platforms and services.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Leveraging our diverse portfolio to expand market presence and create worldwide impact.",
  },
  {
    icon: Rocket,
    title: "Accelerated Growth",
    description: "Shared resources and expertise enable rapid scaling and market penetration.",
  },
]

export default function EcosystemPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Our Ecosystem
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Four interconnected divisions working in harmony to build the future across technology, real estate,
              media, and entertainment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ecosystem Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ecosystems.map((ecosystem, index) => (
              <motion.div
                key={ecosystem.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="p-8 bg-black/40 backdrop-blur-md border border-gray-800 hover:border-gray-600 transition-all duration-300 group h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${ecosystem.color} p-4 group-hover:scale-110 transition-transform`}
                    >
                      <ecosystem.icon className="w-8 h-8 text-white" />
                    </div>
                    <Badge className={`bg-gradient-to-r ${ecosystem.color} text-white`}>Division {index + 1}</Badge>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                    {ecosystem.title}
                  </h3>

                  <p className="text-gray-400 mb-6">{ecosystem.description}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {ecosystem.features.map((feature, idx) => (
                        <div key={idx} className="text-sm text-gray-400 flex items-center">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${ecosystem.color} mr-2`} />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mb-6">
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(ecosystem.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div
                            className={`text-lg font-bold bg-gradient-to-r ${ecosystem.color} bg-clip-text text-transparent`}
                          >
                            {value}
                          </div>
                          <div className="text-xs text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href={ecosystem.href}>
                    <Button className={`w-full bg-gradient-to-r ${ecosystem.color} hover:opacity-90 text-white`}>
                      Explore Division
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Synergies Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-600 bg-clip-text text-transparent">
              Ecosystem Synergies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The power of our ecosystem lies in the interconnections between our divisions, creating value that exceeds
              the sum of its parts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {synergies.map((synergy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="p-6 bg-black/40 backdrop-blur-md border border-gray-800 hover:border-gray-600 transition-all duration-300 group h-full text-center">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 p-3 mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <synergy.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">{synergy.title}</h3>
                  <p className="text-gray-400 text-sm">{synergy.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Ready to Join Our Ecosystem?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Discover opportunities to collaborate, invest, or become part of our growing network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3">
                  Get in Touch
                </Button>
              </Link>
              <Link href="/careers">
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3">
                  View Careers
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
