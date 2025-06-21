"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Building2,
  Leaf,
  Zap,
  Shield,
  MapPin,
  Search,
  Filter,
  Eye,
  ArrowRight,
  TreePine,
  SunIcon as Solar,
  Droplets,
  Wind,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "EcoTower Metroplex",
    location: "Downtown Tech City",
    type: "Mixed-Use Development",
    status: "Under Construction",
    completion: "2025",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Smart Building Systems", "Solar Energy", "Green Rooftops", "EV Charging"],
    sustainability: 95,
    price: "$2.5M - $8.9M",
    units: 250,
  },
  {
    id: 2,
    title: "Smart Residential Complex",
    location: "Green Valley District",
    type: "Residential",
    status: "Available",
    completion: "2024",
    image: "/placeholder.svg?height=400&width=600",
    features: ["IoT Integration", "Energy Efficient", "Community Gardens", "Smart Security"],
    sustainability: 88,
    price: "$850K - $2.1M",
    units: 180,
  },
  {
    id: 3,
    title: "Innovation Campus",
    location: "University Quarter",
    type: "Commercial",
    status: "Planning",
    completion: "2026",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Co-working Spaces", "Research Labs", "Conference Centers", "Sustainable Design"],
    sustainability: 92,
    price: "Contact for Pricing",
    units: 50,
  },
]

const services = [
  {
    icon: Building2,
    title: "Smart City Development",
    description: "Comprehensive urban planning with integrated IoT infrastructure and sustainable design principles",
    color: "from-blue-400 to-cyan-600",
  },
  {
    icon: Leaf,
    title: "Sustainable Architecture",
    description: "Eco-friendly buildings with renewable energy systems and green building certifications",
    color: "from-green-400 to-emerald-600",
  },
  {
    icon: Zap,
    title: "PropTech Solutions",
    description: "Technology-driven property management and smart building automation systems",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Shield,
    title: "Urban Planning",
    description: "Strategic city planning with focus on livability, sustainability, and economic growth",
    color: "from-purple-400 to-pink-600",
  },
]

const sustainability = [
  { icon: Solar, title: "Solar Energy", description: "100% renewable energy integration", value: "2.5MW" },
  { icon: Droplets, title: "Water Conservation", description: "Rainwater harvesting systems", value: "40%" },
  { icon: Wind, title: "Carbon Neutral", description: "Net-zero carbon emissions", value: "0 CO₂" },
  { icon: TreePine, title: "Green Spaces", description: "Urban forest integration", value: "60%" },
]

export default function RealEstatePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [propertyType, setPropertyType] = useState("")
  const [priceRange, setPriceRange] = useState("")

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(34,197,94,0.1),transparent_50%)]" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Building2 className="w-16 h-16 text-emerald-400 mr-4" />
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 to-teal-600 bg-clip-text text-transparent">
                Real Estate
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Building tomorrow's cities today with smart, sustainable, and innovative real estate solutions that
              redefine urban living.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2">Smart Cities</Badge>
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2">
                Sustainable Design
              </Badge>
              <Badge className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-4 py-2">
                PropTech Innovation
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Property Search */}
      <section className="py-12 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-black/40 backdrop-blur-md border border-gray-800 rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">Find Your Perfect Property</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-gray-900 border-gray-700 text-white"
                />
              </div>
              <Select onValueChange={setPropertyType}>
                <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential">Residential</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="mixed">Mixed-Use</SelectItem>
                </SelectContent>
              </Select>
              <Select onValueChange={setPriceRange}>
                <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-1m">Under $1M</SelectItem>
                  <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                  <SelectItem value="over-5m">Over $5M</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white">
                <Filter className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300">
              Discover our latest smart city developments and sustainable architecture projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden bg-black/40 backdrop-blur-md border border-gray-800 hover:border-gray-600 transition-all duration-300 group">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge
                        className={`${
                          project.status === "Available"
                            ? "bg-green-600"
                            : project.status === "Under Construction"
                              ? "bg-yellow-600"
                              : "bg-blue-600"
                        } text-white`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div className="flex items-center bg-black/60 backdrop-blur-sm rounded-full px-3 py-1">
                        <Leaf className="w-4 h-4 text-green-400 mr-1" />
                        <span className="text-white text-sm">{project.sustainability}% Sustainable</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <MapPin className="w-4 h-4 text-gray-400 mr-1" />
                      <span className="text-gray-400 text-sm">{project.location}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-emerald-400 text-sm mb-3">{project.type}</p>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-gray-400">Price Range:</span>
                        <div className="text-white font-semibold">{project.price}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">Units:</span>
                        <div className="text-white font-semibold">{project.units}</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {project.features.slice(0, 2).map((feature, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md">
                            {feature}
                          </span>
                        ))}
                        {project.features.length > 2 && (
                          <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md">
                            +{project.features.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-sm">
                        <Eye className="w-4 h-4 mr-1" />
                        View Details
                      </Button>
                      <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 text-sm">
                        360° Tour
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-emerald-600 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-300">Comprehensive real estate solutions for the cities of tomorrow.</p>
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
                  <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Sustainability First
            </h2>
            <p className="text-xl text-gray-300">
              Leading the way in eco-friendly development and carbon-neutral construction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sustainability.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-black/40 backdrop-blur-md border border-gray-800 hover:border-green-600 transition-all duration-300 text-center group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 p-4 mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                  <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                    {item.value}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-600 bg-clip-text text-transparent">
              Ready to Invest in the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Discover investment opportunities in our smart city developments and sustainable projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-3">
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3">
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
