"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Lightbulb, Globe, Award, TrendingUp } from "lucide-react"

const timeline = [
  {
    year: "2024",
    event: "Company Founded",
    description: "Triangles Consolidated Limited established with vision to transform multiple industries",
  },
  { year: "2024", event: "IT Division Launch", description: "Launched AI and cloud technology solutions division" },
  {
    year: "2024",
    event: "Real Estate Expansion",
    description: "Entered smart city development and sustainable architecture",
  },
  {
    year: "2024",
    event: "Media Acquisition",
    description: "Acquired digital news platforms and entertainment studios",
  },
]

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pioneering breakthrough technologies that shape tomorrow",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Delivering exceptional quality in every project and service",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Creating positive change across communities worldwide",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Building strong partnerships and fostering teamwork",
    color: "from-purple-400 to-pink-500",
  },
]

const leadership = [
  {
    name: "Alex Chen",
    role: "Chief Executive Officer",
    bio: "Visionary leader with 15+ years in technology and business transformation",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Sarah Johnson",
    role: "Chief Technology Officer",
    bio: "AI and cloud computing expert driving our technological innovation",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Michael Rodriguez",
    role: "Chief Operating Officer",
    bio: "Operations strategist with expertise in scaling global enterprises",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function AboutPage() {
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              About Triangles
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a next-generation conglomerate building the future through innovation, technology, and sustainable
              growth across multiple industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Matrix */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
          >
            Our Mission Matrix
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="p-6 bg-black/40 backdrop-blur-md border border-gray-800 hover:border-gray-600 transition-all duration-300 group h-full">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${value.color} p-3 mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-cyan-600 bg-clip-text text-transparent"
          >
            Our Journey
          </motion.h2>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <Card className="p-6 bg-black/40 backdrop-blur-md border border-gray-800 max-w-md">
                  <div className="flex items-center mb-3">
                    <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">{item.year}</Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{item.event}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
          >
            Leadership Team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="p-6 bg-black/40 backdrop-blur-md border border-gray-800 hover:border-gray-600 transition-all duration-300 group text-center">
                  <div className="relative mb-6">
                    <img
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gray-800 group-hover:border-cyan-400 transition-colors"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{leader.name}</h3>
                  <p className="text-cyan-400 mb-3">{leader.role}</p>
                  <p className="text-gray-400 text-sm">{leader.bio}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
