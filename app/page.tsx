"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SEOHead, structuredData } from "@/components/seo-head"
import {
  ArrowRight,
  Globe,
  Cpu,
  Building2,
  Newspaper,
  Film,
  ChevronDown,
  Play,
  Users,
  Award,
  TrendingUp,
  Zap,
  LucideIcon,
} from "lucide-react"
import Link from "next/link"

interface Sector {
  id: string
  title: string
  icon: LucideIcon
  color: string
  description: string
  revenue: string
  growth: string
  projects: string
  href: string
}

interface Achievement {
  icon: LucideIcon
  number: string
  label: string
  description: string
}

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  avatar: string
}

interface NewsUpdate {
  title: string
  excerpt: string
  date: string
  category: string
  urgent: boolean
}

const sectors: Sector[] = [

  {
    id: "realestate",
    title: "Real Estate",
    icon: Building2,
    color: "from-emerald-400 to-teal-600",
    description: "Smart cities and sustainable architecture",
    revenue: "$600M",
    growth: "+120%",
    projects: "150+",
    href: "/real-estate",
  },
  {
    id: "news",
    title: "News & Media",
    icon: Newspaper,
    color: "from-orange-400 to-red-600",
    description: "Digital journalism and media innovation",
    revenue: "$400M",
    growth: "+95%",
    projects: "300+",
    href: "/news-media",
  },
  {
    id: "entertainment",
    title: "Entertainment",
    icon: Film,
    color: "from-purple-400 to-pink-600",
    description: "Original content and entertainment platforms",
    revenue: "$300M",
    growth: "+200%",
    projects: "200+",
    href: "/entertainment",
  },  
  {
    id: "it",
    title: "IT & AI Division",
    icon: Cpu,
    color: "from-cyan-400 to-blue-600",
    description: "Cutting-edge AI solutions and cloud technologies",
    revenue: "$800M",
    growth: "+180%",
    projects: "500+",
    href: "/it-division",
  },
]

const achievements: Achievement[] = [
  { icon: Users, number: "5M+", label: "Global Users", description: "Active users across all platforms" },
  { icon: Award, number: "150+", label: "Industry Awards", description: "Recognition for innovation and excellence" },
  { icon: TrendingUp, number: "$2.5B", label: "Market Valuation", description: "Current company valuation" },
  { icon: Zap, number: "99.9%", label: "Uptime", description: "Service reliability guarantee" },
]

const testimonials: Testimonial[] = [
  {
    quote:
      "Triangles has revolutionized our digital infrastructure with their AI solutions. The results exceeded all expectations.",
    author: "Sarah Johnson",
    role: "",
    company: "Fortune 500 Technology Company",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote: "Their sustainable real estate projects are setting new standards for urban development worldwide.",
    author: "Michael Chen",
    role: "",
    company: "Metropolitan Development Authority",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote: "The media platform they built for us has transformed how we reach and engage with our global audience.",
    author: "Emma Rodriguez",
    role: "",
    company: "Global News Network",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

const newsUpdates: NewsUpdate[] = [
  {
    title: "Triangles Announces $200M Series C Funding Round",
    excerpt: "Funding will accelerate AI research and global expansion initiatives",
    date: "2 hours ago",
    category: "Funding",
    urgent: true,
  },
  {
    title: "New Smart City Project Launched in Singapore",
    excerpt: "Revolutionary urban planning initiative using IoT and AI technologies",
    date: "1 day ago",
    category: "Real Estate",
    urgent: false,
  },
  {
    title: "Entertainment Division Wins Emmy for Original Series",
    excerpt: "Quantum Horizons receives recognition for outstanding drama series",
    date: "3 days ago",
    category: "Entertainment",
    urgent: false,
  },
]

export default function HomePage() {
  const [hoveredSector, setHoveredSector] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const newsTickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)
    
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(testimonialInterval)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-sans">
      <SEOHead
        title="Triangles Consolidated Limited - Building the Future"
        description="A futuristic conglomerate with operations across IT & AI, Real Estate, News & Media, and Entertainment. Leading innovation in AI, sustainable development, digital journalism, and immersive entertainment."
        keywords={[
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
        ]}
        url="https://triangles-consolidated.com"
        structuredData={structuredData.website}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 md:pt-32 md:pb-24">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.15),transparent_50%)]" />

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
              initial={{ 
                x: Math.random() * 100, 
                y: Math.random() * 100 
              }}
              animate={{
                x: `calc(${Math.random() * 100}vw)`,
                y: `calc(${Math.random() * 100}vh)`,
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Floating Globe */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="absolute top-16 right-8 lg:top-24 lg:right-16"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Globe size={140} className="text-cyan-400" />
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-display tracking-tight"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              TRIANGLES
            </motion.h1>
            <motion.h2
              className="text-xl md:text-3xl font-light mb-6 text-gray-300 font-display tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              CONSOLIDATED LIMITED
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl mb-8 text-gray-400 font-light max-w-4xl mx-auto font-sans leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              We Build the Future Across Every Dimension - From AI-Powered Solutions to Sustainable Cities, Digital Media Innovation to Immersive Entertainment
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Link href="/ecosystem">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 font-sans">
                  Explore Our Universe
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-cyan-400 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 font-sans"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Sector Grid */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 100 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 max-w-7xl mx-auto"
          >
            {sectors.map((sector) => (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                onHoverStart={() => setHoveredSector(sector.id)}
                onHoverEnd={() => setHoveredSector(null)}
              >
                <Link href={sector.href}>
                  <Card className="relative p-6 bg-black/40 backdrop-blur-md border border-gray-800 hover:border-gray-600 transition-all duration-300 cursor-pointer h-full">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${sector.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />

                    <div className="relative z-10">
                      <sector.icon
                        className={`w-10 h-10 mb-4 bg-gradient-to-br ${sector.color} bg-clip-text text-transparent transition-transform duration-300`}
                      />
                      <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors font-display">
                        {sector.title}
                      </h3>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors mb-4 font-sans leading-relaxed">
                        {sector.description}
                      </p>

                      {/* Sector Stats */}
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <div className={`font-bold bg-gradient-to-r ${sector.color} bg-clip-text text-transparent font-display`}>
                            {sector.revenue}
                          </div>
                          <div className="text-gray-500 font-sans">Revenue</div>
                        </div>
                        <div>
                          <div className={`font-bold bg-gradient-to-r ${sector.color} bg-clip-text text-transparent font-display`}>
                            {sector.growth}
                          </div>
                          <div className="text-gray-500 font-sans">Growth</div>
                        </div>
                      </div>
                    </div>

                    <AnimatePresence>
                      {hoveredSector === sector.id && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm flex items-center justify-center"
                        >
                          <ArrowRight className="w-8 h-8 text-white" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-400 cursor-pointer hover:text-cyan-400 transition-colors font-sans"
          >
            <span className="text-sm mb-2 tracking-wide">Discover More</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* Live News Ticker */}
      <section className="py-3 bg-gradient-to-r from-red-900/20 to-orange-900/20 border-y border-red-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Badge className="bg-red-600 text-white mr-4 animate-pulse">LIVE</Badge>
            <div className="flex-1 overflow-hidden">
              <motion.div
                animate={{ x: ["0%", "-100%"] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="whitespace-nowrap text-white"
              >
                {newsUpdates.map((news, index) => (
                  <span key={index} className="inline-block mr-12">
                    <span className="font-semibold text-cyan-400">{news.category}:</span> {news.title} •
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Driving Global Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our innovative solutions are transforming industries and improving lives across the globe
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <Card className="p-6 md:p-8 bg-black/40 backdrop-blur-md border border-gray-800 hover:border-cyan-400 transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 p-3 mx-auto mb-6 transition-transform duration-300">
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-white font-semibold mb-2">{achievement.label}</div>
                  <div className="text-gray-400 text-sm">{achievement.description}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-600 bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300">See what our partners and clients say about working with Triangles</p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                <Card className="p-8 bg-black/40 backdrop-blur-md border border-gray-800">
                  <blockquote className="text-xl text-gray-300 mb-8 italic leading-relaxed">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mr-4" />
                    <div className="text-left">
                      <div className="text-white font-semibold text-lg">{testimonials[currentTestimonial].author}</div>
                      <div className="text-cyan-400">{testimonials[currentTestimonial].role}</div>
                      <div className="text-gray-400 text-sm">{testimonials[currentTestimonial].company}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Testimonial indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-cyan-400" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
              Latest News & Updates
            </h2>
            <p className="text-xl text-gray-300">Stay informed about our latest developments and industry insights</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {newsUpdates.map((news, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="p-6 bg-black/40 backdrop-blur-md border border-gray-800 hover:border-gray-600 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={`${news.urgent ? "bg-red-600" : "bg-blue-600"} text-white`}>
                      {news.category}
                    </Badge>
                    <span className="text-gray-400 text-sm">{news.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">
                    {news.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{news.excerpt}</p>
                  <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300 p-0">
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link href="/blog">
              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-cyan-400 px-8 py-3"
              >
                View All News
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Ready to Shape the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join us in building tomorrow's solutions today. Whether you're looking to partner, invest, or be part of
              our team, let's create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/careers">
                <Button
                  variant="outline"
                  className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-cyan-400 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
                >
                  Join Our Team
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}