"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Newspaper,
  Radio,
  Video,
  Mic,
  Globe,
  Search,
  Clock,
  Eye,
  Share2,
  ArrowRight,
  Zap,
  BarChart3,
  Shield,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const newsArticles = [
  {
    id: 1,
    title: "AI Revolution: How Machine Learning is Transforming Healthcare",
    excerpt: "Breakthrough AI technologies are revolutionizing patient care and medical diagnostics worldwide.",
    category: "Technology",
    author: "Dr. Sarah Chen",
    publishedAt: "2 hours ago",
    readTime: "5 min read",
    views: "12.5K",
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
  },
  {
    id: 2,
    title: "Smart Cities: The Future of Urban Development",
    excerpt: "Exploring how IoT and sustainable design are creating the cities of tomorrow.",
    category: "Urban Planning",
    author: "Michael Rodriguez",
    publishedAt: "6 hours ago",
    readTime: "8 min read",
    views: "8.2K",
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
  },
  {
    id: 3,
    title: "Climate Tech Innovations Leading the Green Revolution",
    excerpt: "New technologies are paving the way for a sustainable future and carbon neutrality.",
    category: "Environment",
    author: "Emma Thompson",
    publishedAt: "1 day ago",
    readTime: "6 min read",
    views: "15.7K",
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
  },
]

const mediaFormats = [
  {
    icon: Newspaper,
    title: "Digital News",
    description: "Real-time journalism with AI-powered fact-checking and global reach",
    stats: "5M+ monthly readers",
    color: "from-blue-400 to-cyan-600",
  },
  {
    icon: Video,
    title: "Video Content",
    description: "High-quality documentaries, interviews, and breaking news coverage",
    stats: "2M+ video views",
    color: "from-red-400 to-pink-600",
  },
  {
    icon: Mic,
    title: "Podcasts",
    description: "In-depth discussions on technology, business, and innovation",
    stats: "500K+ subscribers",
    color: "from-purple-400 to-indigo-600",
  },
  {
    icon: Radio,
    title: "Live Broadcasting",
    description: "24/7 news coverage with expert analysis and real-time updates",
    stats: "1M+ daily listeners",
    color: "from-green-400 to-emerald-600",
  },
]

const platforms = [
  {
    name: "TechToday News",
    description: "Leading technology news platform",
    subscribers: "3.2M",
    articles: "50K+",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Future Cities Weekly",
    description: "Urban development and smart city insights",
    subscribers: "1.8M",
    articles: "25K+",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Innovation Podcast Network",
    description: "Business and technology podcast series",
    subscribers: "900K",
    articles: "1.2K+",
    image: "/placeholder.svg?height=200&width=300",
  },
]

const features = [
  {
    icon: Zap,
    title: "Real-time Analytics",
    description: "Advanced analytics for content performance and audience insights",
  },
  {
    icon: Shield,
    title: "Fact-checking AI",
    description: "AI-powered verification system ensuring accuracy and credibility",
  },
  {
    icon: BarChart3,
    title: "Content Distribution",
    description: "Multi-platform publishing with optimized reach and engagement",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Worldwide correspondent network for comprehensive coverage",
  },
]

export default function NewsMediaPage() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.1),transparent_50%)]" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Newspaper className="w-16 h-16 text-orange-400 mr-4" />
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                News & Media
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Pioneering digital journalism with AI-powered insights, real-time fact-checking, and innovative
              storytelling that shapes global conversations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2">Digital First</Badge>
              <Badge className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-4 py-2">AI-Powered</Badge>
              <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2">Global Reach</Badge>
            </div>
          </motion.div>

          {/* Live Ticker */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-red-600/20 backdrop-blur-md border border-red-600/30 rounded-lg p-4 mb-8"
          >
            <div className="flex items-center">
              <Badge className="bg-red-600 text-white mr-4 animate-pulse">LIVE</Badge>
              <div className="flex-1 overflow-hidden">
                <motion.div
                  animate={{ x: [-100, 100] }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="whitespace-nowrap text-white"
                >
                  Breaking: AI breakthrough in quantum computing • Smart city project launches in 5 major cities •
                  Climate tech funding reaches $50B milestone
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search news, articles, and insights..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-4 bg-black/40 backdrop-blur-md border border-gray-800 text-white text-lg rounded-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
              Latest Stories
            </h2>
            <p className="text-xl text-gray-300">Stay informed with our cutting-edge journalism and expert analysis.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={article.featured ? "lg:col-span-2 lg:row-span-2" : ""}
              >
                <Card className="overflow-hidden bg-black/40 backdrop-blur-md border border-gray-800 hover:border-gray-600 transition-all duration-300 group h-full">
                  <div className={`relative overflow-hidden ${article.featured ? "h-80" : "h-48"}`}>
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
                        {article.category}
                      </Badge>
                    </div>
                    {article.featured && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-yellow-600 text-white">Featured</Badge>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3
                      className={`font-bold mb-3 text-white group-hover:text-orange-400 transition-colors ${
                        article.featured ? "text-2xl" : "text-lg"
                      }`}
                    >
                      {article.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{article.excerpt}</p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <span>By {article.author}</span>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {article.publishedAt}
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {article.views}
                        </div>
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-sm">
                        Read Article
                      </Button>
                      <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 text-sm">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Formats */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-400 to-pink-600 bg-clip-text text-transparent">
              Multi-Format Journalism
            </h2>
            <p className="text-xl text-gray-300">
              Delivering news across all platforms with innovative storytelling techniques.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaFormats.map((format, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="p-8 bg-black/40 backdrop-blur-md border border-gray-800 hover:border-gray-600 transition-all duration-300 group h-full">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${format.color} p-4 mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <format.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-orange-400 transition-colors">
                    {format.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{format.description}</p>
                  <div className={`text-lg font-bold bg-gradient-to-r ${format.color} bg-clip-text text-transparent`}>
                    {format.stats}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Our Media Platforms
            </h2>
            <p className="text-xl text-gray-300">Trusted news sources reaching millions of readers worldwide.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden bg-black/40 backdrop-blur-md border border-gray-800 hover:border-gray-600 transition-all duration-300 group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={platform.image || "/placeholder.svg"}
                      alt={platform.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-orange-400 transition-colors">
                      {platform.name}
                    </h3>
                    <p className="text-gray-400 mb-4">{platform.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-gray-400">Subscribers:</span>
                        <div className="text-white font-semibold">{platform.subscribers}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">Content:</span>
                        <div className="text-white font-semibold">{platform.articles}</div>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white">
                      Visit Platform
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Innovation in Journalism
            </h2>
            <p className="text-xl text-gray-300">Leveraging technology to enhance accuracy, reach, and engagement.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-black/40 backdrop-blur-md border border-gray-800 hover:border-orange-600 transition-all duration-300 text-center group h-full">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-400 to-red-600 p-3 mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
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
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
              Join Our Media Network
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Partner with us to reach global audiences and shape the future of digital journalism.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-3">
                  Partner With Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3">
                Subscribe to Newsletter
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
