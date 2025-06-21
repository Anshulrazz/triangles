"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Leaf,
  Recycle,
  Zap,
  Droplets,
  Wind,
  TreePine,
  Globe,
  TrendingDown,
  Award,
  ArrowRight,
  CheckCircle,
  BarChart3,
} from "lucide-react"
import Link from "next/link"

const sustainabilityMetrics = [
  {
    icon: TrendingDown,
    title: "Carbon Reduction",
    value: "75%",
    description: "Reduction in carbon emissions since 2024",
    color: "from-green-400 to-emerald-600",
  },
  {
    icon: Zap,
    title: "Renewable Energy",
    value: "100%",
    description: "Operations powered by renewable sources",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Droplets,
    title: "Water Conservation",
    value: "60%",
    description: "Reduction in water usage through smart systems",
    color: "from-blue-400 to-cyan-600",
  },
  {
    icon: Recycle,
    title: "Waste Reduction",
    value: "85%",
    description: "Waste diverted from landfills through recycling",
    color: "from-purple-400 to-pink-600",
  },
]

const initiatives = [
  {
    icon: TreePine,
    title: "Carbon Neutral Operations",
    description: "Achieving net-zero carbon emissions across all facilities and operations by 2025",
    progress: 85,
    color: "from-green-400 to-emerald-600",
    achievements: [
      "Solar panel installation on all buildings",
      "Electric vehicle fleet transition",
      "Carbon offset partnerships",
      "Energy-efficient data centers",
    ],
  },
  {
    icon: Wind,
    title: "Renewable Energy Transition",
    description: "100% renewable energy sourcing for all global operations and facilities",
    progress: 95,
    color: "from-blue-400 to-cyan-600",
    achievements: [
      "Wind farm partnerships",
      "Solar energy contracts",
      "Battery storage systems",
      "Smart grid integration",
    ],
  },
  {
    icon: Droplets,
    title: "Water Stewardship",
    description: "Comprehensive water conservation and quality protection programs",
    progress: 70,
    color: "from-cyan-400 to-blue-600",
    achievements: [
      "Rainwater harvesting systems",
      "Greywater recycling",
      "Smart irrigation technology",
      "Water quality monitoring",
    ],
  },
  {
    icon: Recycle,
    title: "Circular Economy",
    description: "Implementing circular design principles to minimize waste and maximize resource efficiency",
    progress: 78,
    color: "from-purple-400 to-pink-600",
    achievements: [
      "Zero waste to landfill",
      "Material recovery programs",
      "Sustainable packaging",
      "Product lifecycle optimization",
    ],
  },
]

const projects = [
  {
    title: "Smart City Carbon Monitoring",
    location: "San Francisco, CA",
    impact: "30% emission reduction",
    description: "AI-powered monitoring system tracking and optimizing city-wide carbon emissions",
    image: "/placeholder.svg?height=300&width=400",
    status: "Active",
  },
  {
    title: "Renewable Energy Microgrid",
    location: "Austin, TX",
    impact: "100% renewable power",
    description: "Self-sustaining microgrid providing clean energy to local communities",
    image: "/placeholder.svg?height=300&width=400",
    status: "Completed",
  },
  {
    title: "Ocean Plastic Recovery",
    location: "Pacific Ocean",
    impact: "50 tons plastic removed",
    description: "Advanced technology for collecting and recycling ocean plastic waste",
    image: "/placeholder.svg?height=300&width=400",
    status: "Ongoing",
  },
]

const certifications = [
  { name: "LEED Platinum", description: "Green building certification", icon: Award },
  { name: "B Corp Certified", description: "Social and environmental performance", icon: Globe },
  { name: "Carbon Neutral", description: "Net-zero carbon emissions", icon: Leaf },
  { name: "ISO 14001", description: "Environmental management systems", icon: CheckCircle },
]

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,197,94,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.1),transparent_50%)]" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Leaf className="w-16 h-16 text-green-400 mr-4" />
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                Sustainability
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Leading the charge toward a sustainable future through innovative technologies, responsible practices, and
              measurable environmental impact across all our operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2">
                Carbon Neutral
              </Badge>
              <Badge className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2">100% Renewable</Badge>
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2">Zero Waste</Badge>
            </div>
          </motion.div>

          {/* Sustainability Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {sustainabilityMetrics.map((metric, index) => (
              <Card key={index} className="p-6 bg-black/40 backdrop-blur-md border border-gray-800 text-center">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${metric.color} p-3 mx-auto mb-4`}>
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
                <div
                  className={`text-4xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}
                >
                  {metric.value}
                </div>
                <div className="text-white font-semibold mb-2">{metric.title}</div>
                <div className="text-gray-400 text-sm">{metric.description}</div>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sustainability Initiatives */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Our Sustainability Initiatives
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive programs driving environmental responsibility and positive impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="p-8 bg-black/40 backdrop-blur-md border border-gray-800 hover:border-gray-600 transition-all duration-300 group h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${initiative.color} p-4 group-hover:scale-110 transition-transform`}
                    >
                      <initiative.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div
                        className={`text-2xl font-bold bg-gradient-to-r ${initiative.color} bg-clip-text text-transparent`}
                      >
                        {initiative.progress}%
                      </div>
                      <div className="text-gray-400 text-sm">Complete</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-green-400 transition-colors">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{initiative.description}</p>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${initiative.color} transition-all duration-1000`}
                        style={{ width: `${initiative.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2">
                    {initiative.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Projects */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent">
              Environmental Impact Projects
            </h2>
            <p className="text-xl text-gray-300">Real-world projects creating measurable environmental benefits.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden bg-black/40 backdrop-blur-md border border-gray-800 hover:border-gray-600 transition-all duration-300 group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge
                        className={`${
                          project.status === "Active"
                            ? "bg-green-600"
                            : project.status === "Completed"
                              ? "bg-blue-600"
                              : "bg-yellow-600"
                        } text-white`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <Badge className="bg-black/60 backdrop-blur-sm text-white">{project.impact}</Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-green-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-gray-400 text-sm mb-3">
                      <Globe className="w-4 h-4 mr-1" />
                      {project.location}
                    </div>
                    <p className="text-gray-400 mb-4">{project.description}</p>

                    <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Certifications & Recognition
            </h2>
            <p className="text-xl text-gray-300">Third-party validation of our environmental and social commitments.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-black/40 backdrop-blur-md border border-gray-800 hover:border-green-600 transition-all duration-300 text-center group h-full">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 p-4 mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <cert.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{cert.name}</h3>
                  <p className="text-gray-400 text-sm">{cert.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Join Our Sustainability Mission
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Partner with us to create a more sustainable future through innovation, collaboration, and shared
              commitment to environmental stewardship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-3">
                  Partner With Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3">
                <BarChart3 className="w-4 h-4 mr-2" />
                View Impact Report
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
