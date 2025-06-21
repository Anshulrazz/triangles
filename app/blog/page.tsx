"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Calendar, Clock, Eye, Share2, ArrowRight, Tag, TrendingUp, Bookmark } from "lucide-react"
import { useState } from "react"

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Enterprise: Beyond Automation",
    excerpt:
      "Exploring how artificial intelligence is transforming business operations and creating new opportunities for innovation and growth.",
    content:
      "As we stand at the precipice of a new technological era, artificial intelligence is no longer just a buzzword—it's becoming the backbone of modern enterprise operations...",
    author: "Dr. Sarah Chen",
    authorRole: "Chief AI Researcher",
    authorImage: "/placeholder.svg?height=100&width=100",
    publishedAt: "2024-12-15",
    readTime: "8 min read",
    views: "15.2K",
    category: "Technology",
    tags: ["AI", "Enterprise", "Innovation", "Future Tech"],
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
  },
  {
    id: 2,
    title: "Sustainable Cities: Building Tomorrow's Urban Landscapes",
    excerpt:
      "How smart city technologies and sustainable design principles are reshaping urban development for a greener future.",
    content:
      "The rapid urbanization of our planet presents both challenges and opportunities. As more people move to cities, we must reimagine how we design and build urban spaces...",
    author: "Michael Rodriguez",
    authorRole: "Urban Planning Director",
    authorImage: "/placeholder.svg?height=100&width=100",
    publishedAt: "2024-12-10",
    readTime: "6 min read",
    views: "12.8K",
    category: "Sustainability",
    tags: ["Smart Cities", "Sustainability", "Urban Planning", "Green Tech"],
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: 3,
    title: "The Evolution of Digital Journalism in the AI Age",
    excerpt:
      "Examining how artificial intelligence and data analytics are revolutionizing news gathering, fact-checking, and content distribution.",
    content:
      "The journalism industry is undergoing a fundamental transformation. With the advent of AI-powered tools and data analytics, newsrooms are becoming more efficient...",
    author: "Emma Thompson",
    authorRole: "Digital Media Strategist",
    authorImage: "/placeholder.svg?height=100&width=100",
    publishedAt: "2024-12-05",
    readTime: "7 min read",
    views: "9.5K",
    category: "Media",
    tags: ["Journalism", "AI", "Digital Media", "Innovation"],
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: 4,
    title: "Immersive Entertainment: The Next Frontier",
    excerpt:
      "Virtual reality, augmented reality, and interactive storytelling are creating new paradigms in entertainment consumption.",
    content:
      "Entertainment has always been about transporting audiences to different worlds. Today, technology is making that transportation more literal than ever before...",
    author: "Alex Kim",
    authorRole: "Creative Technology Lead",
    authorImage: "/placeholder.svg?height=100&width=100",
    publishedAt: "2024-11-28",
    readTime: "5 min read",
    views: "11.3K",
    category: "Entertainment",
    tags: ["VR", "AR", "Entertainment", "Technology"],
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: 5,
    title: "Quantum Computing: Unlocking Unprecedented Possibilities",
    excerpt:
      "A deep dive into quantum computing technology and its potential to solve complex problems across industries.",
    content:
      "Quantum computing represents a paradigm shift in computational power. Unlike classical computers that process information in binary...",
    author: "Dr. James Wilson",
    authorRole: "Quantum Research Scientist",
    authorImage: "/placeholder.svg?height=100&width=100",
    publishedAt: "2024-11-20",
    readTime: "10 min read",
    views: "18.7K",
    category: "Technology",
    tags: ["Quantum Computing", "Research", "Innovation", "Science"],
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
  },
]

const categories = ["All", "Technology", "Sustainability", "Media", "Entertainment", "Business", "Innovation"]

const trendingTopics = [
  { tag: "Artificial Intelligence", count: 24 },
  { tag: "Sustainable Development", count: 18 },
  { tag: "Digital Transformation", count: 15 },
  { tag: "Future of Work", count: 12 },
  { tag: "Climate Tech", count: 10 },
  { tag: "Quantum Computing", count: 8 },
]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("latest")

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.1),transparent_50%)]" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Thought Leadership
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Insights, innovations, and ideas from the minds shaping the future of technology, sustainability, and
              human progress.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2">Expert Insights</Badge>
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2">
                Industry Analysis
              </Badge>
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2">
                Future Trends
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-black/40 backdrop-blur-md border border-gray-800 rounded-lg p-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="relative md:col-span-2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search articles, topics, or authors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-gray-900 border-gray-700 text-white"
                />
              </div>
              <Select onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase()}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select onValueChange={setSortBy}>
                <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="latest">Latest</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="trending">Trending</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category.toLowerCase() ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.toLowerCase())}
                  className={`${
                    selectedCategory === category.toLowerCase()
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                      : "border-gray-600 text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-300">Our most impactful insights and thought-provoking analyses.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={post.featured ? "lg:col-span-2 lg:row-span-2" : ""}
              >
                <Card className="overflow-hidden bg-black/40 backdrop-blur-md border border-gray-800 hover:border-gray-600 transition-all duration-300 group h-full">
                  <div className={`relative overflow-hidden ${post.featured ? "h-80" : "h-48"}`}>
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">{post.category}</Badge>
                    </div>
                    {post.featured && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-yellow-600 text-white">Featured</Badge>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3
                      className={`font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors ${
                        post.featured ? "text-2xl" : "text-lg"
                      }`}
                    >
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{post.excerpt}</p>

                    {/* Author Info */}
                    <div className="flex items-center mb-4">
                      <img
                        src={post.authorImage || "/placeholder.svg"}
                        alt={post.author}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <div className="text-white text-sm font-semibold">{post.author}</div>
                        <div className="text-gray-400 text-xs">{post.authorRole}</div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {post.views}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-sm">
                        Read Article
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                      <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 text-sm">
                        <Bookmark className="w-4 h-4" />
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

      {/* Trending Topics */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
              Trending Topics
            </h2>
            <p className="text-xl text-gray-300">The most discussed topics in our thought leadership community.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingTopics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-black/40 backdrop-blur-md border border-gray-800 hover:border-orange-600 transition-all duration-300 group cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Tag className="w-5 h-5 text-orange-400 mr-3" />
                      <span className="text-white font-semibold group-hover:text-orange-400 transition-colors">
                        {topic.tag}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                      <span className="text-green-400 font-semibold">{topic.count}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Stay Ahead of the Curve
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest insights, trends, and innovations delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input placeholder="Enter your email address" className="bg-gray-900 border-gray-700 text-white" />
              <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
