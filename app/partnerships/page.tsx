"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Handshake,
  Globe,
  TrendingUp,
  Users,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle,
  Building,
  Lightbulb,
  Target,
  Award,
} from "lucide-react"
import { useState } from "react"

const partnershipTypes = [
  {
    id: "technology",
    title: "Technology Integration",
    icon: Zap,
    description: "Integrate your solutions with our platform ecosystem",
    benefits: ["API Access", "Technical Support", "Co-development", "Market Reach"],
    color: "from-cyan-400 to-blue-600",
  },
  {
    id: "strategic",
    title: "Strategic Alliance",
    icon: Target,
    description: "Long-term strategic partnerships for mutual growth",
    benefits: ["Joint Ventures", "Shared Resources", "Market Expansion", "Innovation Labs"],
    color: "from-purple-400 to-pink-600",
  },
  {
    id: "channel",
    title: "Channel Partnership",
    icon: Globe,
    description: "Become an authorized reseller or distributor",
    benefits: ["Sales Training", "Marketing Support", "Lead Generation", "Commission Structure"],
    color: "from-green-400 to-emerald-600",
  },
  {
    id: "startup",
    title: "Startup Accelerator",
    icon: Lightbulb,
    description: "Join our innovation program for emerging companies",
    benefits: ["Funding Support", "Mentorship", "Office Space", "Network Access"],
    color: "from-orange-400 to-red-600",
  },
]

const currentPartners = [
  {
    name: "Microsoft",
    type: "Technology Partner",
    description: "Cloud infrastructure and AI development collaboration",
    logo: "/placeholder.svg?height=80&width=120",
    since: "2023",
  },
  {
    name: "Amazon Web Services",
    type: "Cloud Partner",
    description: "Scalable cloud solutions and enterprise services",
    logo: "/placeholder.svg?height=80&width=120",
    since: "2023",
  },
  {
    name: "NVIDIA",
    type: "AI Hardware Partner",
    description: "GPU computing and AI acceleration technologies",
    logo: "/placeholder.svg?height=80&width=120",
    since: "2024",
  },
  {
    name: "Tesla",
    type: "Innovation Partner",
    description: "Sustainable technology and smart city initiatives",
    logo: "/placeholder.svg?height=80&width=120",
    since: "2024",
  },
  {
    name: "Google Cloud",
    type: "Technology Partner",
    description: "Machine learning and data analytics platforms",
    logo: "/placeholder.svg?height=80&width=120",
    since: "2023",
  },
  {
    name: "Salesforce",
    type: "Business Partner",
    description: "CRM integration and business automation",
    logo: "/placeholder.svg?height=80&width=120",
    since: "2024",
  },
]

const benefits = [
  {
    icon: TrendingUp,
    title: "Revenue Growth",
    description: "Access new markets and revenue streams through our global network",
    stats: "Average 40% revenue increase",
  },
  {
    icon: Users,
    title: "Customer Base Expansion",
    description: "Reach our 5M+ active users across multiple industries",
    stats: "5M+ potential customers",
  },
  {
    icon: Shield,
    title: "Technical Support",
    description: "Dedicated technical teams and comprehensive documentation",
    stats: "24/7 support available",
  },
  {
    icon: Award,
    title: "Co-Marketing",
    description: "Joint marketing campaigns and brand visibility opportunities",
    stats: "Shared marketing budget",
  },
]

export default function PartnershipsPage() {
  const [selectedPartnership, setSelectedPartnership] = useState("")
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    industry: "",
    companySize: "",
    partnershipType: "",
    description: "",
    timeline: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Partnership application submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Handshake className="w-16 h-16 text-green-400 mr-4" />
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
                Partnerships
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join forces with Triangles Consolidated to accelerate innovation, expand market reach, and create
              transformative solutions that shape the future of technology and business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2">
                Global Network
              </Badge>
              <Badge className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2">
                Innovation Focus
              </Badge>
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2">Mutual Growth</Badge>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              { number: "200+", label: "Global Partners", icon: Globe },
              { number: "50+", label: "Countries", icon: Building },
              { number: "$2B+", label: "Partner Revenue", icon: TrendingUp },
              { number: "95%", label: "Partner Satisfaction", icon: Award },
            ].map((stat, index) => (
              <Card key={index} className="p-6 bg-black/40 backdrop-blur-md border border-gray-800 text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-blue-600 p-3 mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-300">
              Choose the partnership model that aligns with your business goals and growth strategy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((partnership, index) => (
              <motion.div
                key={partnership.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="p-8 bg-black/40 backdrop-blur-md border border-gray-800 hover:border-gray-600 transition-all duration-300 group h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${partnership.color} p-4 group-hover:scale-110 transition-transform`}
                    >
                      <partnership.icon className="w-8 h-8 text-white" />
                    </div>
                    <Badge className={`bg-gradient-to-r ${partnership.color} text-white`}>Popular</Badge>
                  </div>

                  <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-green-400 transition-colors">
                    {partnership.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{partnership.description}</p>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-gray-300">Key Benefits:</h4>
                    {partnership.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={() => setSelectedPartnership(partnership.id)}
                    className={`w-full bg-gradient-to-r ${partnership.color} hover:opacity-90 text-white`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Our Trusted Partners
            </h2>
            <p className="text-xl text-gray-300">
              We're proud to collaborate with industry leaders and innovative companies worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-black/40 backdrop-blur-md border border-gray-800 hover:border-gray-600 transition-all duration-300 group text-center h-full">
                  <div className="mb-6">
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      className="h-16 mx-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{partner.name}</h3>
                  <Badge className="mb-3 bg-blue-600 text-white">{partner.type}</Badge>
                  <p className="text-gray-400 text-sm mb-4">{partner.description}</p>
                  <div className="text-xs text-gray-500">Partner since {partner.since}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-600 bg-clip-text text-transparent">
              Partnership Benefits
            </h2>
            <p className="text-xl text-gray-300">
              Unlock new opportunities and accelerate your business growth with our comprehensive partner program
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="p-8 bg-black/40 backdrop-blur-md border border-gray-800 hover:border-gray-600 transition-all duration-300 group">
                  <div className="flex items-start">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-600 p-4 mr-6 group-hover:scale-110 transition-transform flex-shrink-0">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-emerald-400 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-400 mb-3">{benefit.description}</p>
                      <div className="text-emerald-400 font-semibold">{benefit.stats}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Apply for Partnership
            </h2>
            <p className="text-xl text-gray-300">
              Ready to join our partner ecosystem? Fill out the form below and we'll get back to you within 48 hours.
            </p>
          </motion.div>

          <Card className="p-8 bg-black/40 backdrop-blur-md border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company Name *</label>
                  <Input
                    value={formData.companyName}
                    onChange={(e) => handleInputChange("companyName", e.target.value)}
                    className="bg-gray-900 border-gray-700 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Contact Name *</label>
                  <Input
                    value={formData.contactName}
                    onChange={(e) => handleInputChange("contactName", e.target.value)}
                    className="bg-gray-900 border-gray-700 text-white"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-gray-900 border-gray-700 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="bg-gray-900 border-gray-700 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company Website</label>
                  <Input
                    type="url"
                    value={formData.website}
                    onChange={(e) => handleInputChange("website", e.target.value)}
                    className="bg-gray-900 border-gray-700 text-white"
                    placeholder="https://"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Industry *</label>
                  <Select onValueChange={(value) => handleInputChange("industry", value)}>
                    <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company Size *</label>
                  <Select onValueChange={(value) => handleInputChange("companySize", value)}>
                    <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="startup">Startup (1-10 employees)</SelectItem>
                      <SelectItem value="small">Small (11-50 employees)</SelectItem>
                      <SelectItem value="medium">Medium (51-200 employees)</SelectItem>
                      <SelectItem value="large">Large (201-1000 employees)</SelectItem>
                      <SelectItem value="enterprise">Enterprise (1000+ employees)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Partnership Type *</label>
                  <Select onValueChange={(value) => handleInputChange("partnershipType", value)}>
                    <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                      <SelectValue placeholder="Select partnership type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology Integration</SelectItem>
                      <SelectItem value="strategic">Strategic Alliance</SelectItem>
                      <SelectItem value="channel">Channel Partnership</SelectItem>
                      <SelectItem value="startup">Startup Accelerator</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Partnership Description *</label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  className="bg-gray-900 border-gray-700 text-white min-h-[120px]"
                  placeholder="Describe your company, what you do, and how you envision partnering with Triangles Consolidated..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Expected Timeline</label>
                <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                  <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                    <SelectValue placeholder="When would you like to start?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediately</SelectItem>
                    <SelectItem value="1month">Within 1 month</SelectItem>
                    <SelectItem value="3months">Within 3 months</SelectItem>
                    <SelectItem value="6months">Within 6 months</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="text-center pt-6">
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-12 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Submit Application
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>
    </div>
  )
}
