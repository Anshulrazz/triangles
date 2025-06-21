"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Film,
  Music,
  Tv,
  Gamepad2,
  Play,
  Star,
  Calendar,
  Users,
  Award,
  TrendingUp,
  Volume2,
  Camera,
  ArrowRight,
  Download,
  Share2,
} from "lucide-react"
import Link from "next/link"

const content = [
  {
    id: 1,
    title: "Quantum Horizons",
    type: "Original Series",
    genre: "Sci-Fi Drama",
    status: "Now Streaming",
    rating: 9.2,
    episodes: 10,
    duration: "45 min",
    description: "A groundbreaking series exploring humanity's first contact with quantum consciousness.",
    image: "/placeholder.svg?height=400&width=600",
    trailer: true,
    featured: true,
  },
  {
    id: 2,
    title: "Future Beats",
    type: "Music Album",
    genre: "Electronic",
    status: "Available",
    rating: 8.8,
    tracks: 12,
    duration: "52 min",
    description: "An innovative electronic album blending AI-generated melodies with human creativity.",
    image: "/placeholder.svg?height=400&width=600",
    trailer: false,
    featured: false,
  },
  {
    id: 3,
    title: "Neural Network",
    type: "Documentary",
    genre: "Technology",
    status: "Coming Soon",
    rating: null,
    episodes: 6,
    duration: "60 min",
    description: "Deep dive into the minds behind the AI revolution and its impact on society.",
    image: "/placeholder.svg?height=400&width=600",
    trailer: true,
    featured: false,
  },
]

const platforms = [
  {
    name: "TriStream",
    description: "Our flagship streaming platform",
    subscribers: "2.5M",
    content: "1000+",
    features: ["4K HDR", "Dolby Atmos", "AI Recommendations", "Offline Downloads"],
    color: "from-purple-500 to-pink-600",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "TriMusic",
    description: "Next-generation music streaming",
    subscribers: "1.8M",
    content: "50M+",
    features: ["Lossless Audio", "AI Playlists", "Live Concerts", "Artist Collaborations"],
    color: "from-green-500 to-emerald-600",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "TriGaming",
    description: "Interactive entertainment platform",
    subscribers: "900K",
    content: "500+",
    features: ["Cloud Gaming", "VR Support", "Cross-Platform", "Social Features"],
    color: "from-blue-500 to-cyan-600",
    image: "/placeholder.svg?height=300&width=400",
  },
]

const services = [
  {
    icon: Film,
    title: "Original Content Production",
    description: "Award-winning films, series, and documentaries created by world-class talent",
    stats: "50+ Originals",
    color: "from-red-400 to-pink-600",
  },
  {
    icon: Music,
    title: "Music Production & Distribution",
    description: "Full-service music production with global distribution and artist development",
    stats: "200+ Artists",
    color: "from-green-400 to-emerald-600",
  },
  {
    icon: Tv,
    title: "Streaming Technology",
    description: "Advanced streaming infrastructure with AI-powered content delivery and personalization",
    stats: "99.9% Uptime",
    color: "from-blue-400 to-cyan-600",
  },
  {
    icon: Gamepad2,
    title: "Interactive Entertainment",
    description: "Immersive gaming experiences and virtual reality content for next-gen entertainment",
    stats: "10M+ Players",
    color: "from-purple-400 to-indigo-600",
  },
]

const achievements = [
  { icon: Award, title: "Emmy Awards", count: "15", description: "Outstanding achievements in television" },
  { icon: Star, title: "Film Festival Wins", count: "32", description: "International recognition" },
  { icon: TrendingUp, title: "Streaming Growth", count: "300%", description: "Year-over-year subscriber growth" },
  { icon: Users, title: "Global Audience", count: "5M+", description: "Active monthly users" },
]

export default function EntertainmentPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(168,85,247,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(236,72,153,0.1),transparent_50%)]" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Film className="w-16 h-16 text-purple-400 mr-4" />
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Entertainment
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Creating immersive entertainment experiences through original content, cutting-edge streaming technology,
              and innovative storytelling that captivates global audiences.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2">
                Original Content
              </Badge>
              <Badge className="bg-gradient-to-r from-pink-500 to-red-600 text-white px-4 py-2">
                Streaming Platform
              </Badge>
              <Badge className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-2">
                Global Distribution
              </Badge>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 bg-black/40 backdrop-blur-md border border-gray-800 text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-600 p-3 mx-auto mb-4">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-2">
                  {achievement.count}
                </div>
                <div className="text-white font-semibold mb-1">{achievement.title}</div>
                <div className="text-gray-400 text-sm">{achievement.description}</div>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Featured Content
            </h2>
            <p className="text-xl text-gray-300">
              Discover our latest original productions and exclusive entertainment experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {content.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={item.featured ? "lg:col-span-2 lg:row-span-2" : ""}
              >
                <Card className="overflow-hidden bg-black/40 backdrop-blur-md border border-gray-800 hover:border-gray-600 transition-all duration-300 group h-full">
                  <div className={`relative overflow-hidden ${item.featured ? "h-80" : "h-48"}`}>
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                    {/* Play Button Overlay */}
                    {item.trailer && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                    )}

                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white">{item.type}</Badge>
                    </div>

                    {item.featured && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-yellow-600 text-white">Featured</Badge>
                      </div>
                    )}

                    <div className="absolute bottom-4 left-4">
                      <Badge
                        className={`${
                          item.status === "Now Streaming"
                            ? "bg-green-600"
                            : item.status === "Coming Soon"
                              ? "bg-blue-600"
                              : "bg-purple-600"
                        } text-white`}
                      >
                        {item.status}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3
                        className={`font-bold text-white group-hover:text-purple-400 transition-colors ${
                          item.featured ? "text-2xl" : "text-lg"
                        }`}
                      >
                        {item.title}
                      </h3>
                      {item.rating && (
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span className="text-yellow-400 font-semibold">{item.rating}</span>
                        </div>
                      )}
                    </div>

                    <p className="text-purple-400 text-sm mb-2">{item.genre}</p>
                    <p className="text-gray-400 mb-4">{item.description}</p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {item.episodes ? `${item.episodes} Episodes` : `${item.tracks} Tracks`}
                        </div>
                        <span>{item.duration}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white text-sm">
                        <Play className="w-4 h-4 mr-1" />
                        {item.trailer ? "Watch Trailer" : "Play Now"}
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

      {/* Platforms */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
              Our Platforms
            </h2>
            <p className="text-xl text-gray-300">
              Next-generation entertainment platforms designed for the modern audience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden bg-black/40 backdrop-blur-md border border-gray-800 hover:border-gray-600 transition-all duration-300 group h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={platform.image || "/placeholder.svg"}
                      alt={platform.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent`} />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors">
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
                        <div className="text-white font-semibold">{platform.content}</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Features</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {platform.features.map((feature, idx) => (
                          <div key={idx} className="text-xs text-gray-400 flex items-center">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${platform.color} mr-2`} />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className={`w-full bg-gradient-to-r ${platform.color} hover:opacity-90 text-white`}>
                      <Download className="w-4 h-4 mr-2" />
                      Download App
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Entertainment Services
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive entertainment solutions from production to distribution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="p-8 bg-black/40 backdrop-blur-md border border-gray-800 hover:border-gray-600 transition-all duration-300 group h-full">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <div className={`text-lg font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                    {service.stats}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
              Behind the Scenes
            </h2>
            <p className="text-xl text-gray-300">
              Get exclusive access to the creative process and meet the talent behind our productions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Camera, title: "Production Studios", description: "State-of-the-art facilities" },
              { icon: Volume2, title: "Sound Design", description: "Immersive audio experiences" },
              { icon: Users, title: "Creative Team", description: "Award-winning professionals" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-black/40 backdrop-blur-md border border-gray-800 hover:border-purple-600 transition-all duration-300 text-center group h-full">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-pink-600 p-3 mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
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
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Join the Entertainment Revolution
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the future of entertainment with our innovative platforms and original content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3">
                  Start Streaming
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3">
                Explore Content
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
