"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Cpu,
  Cloud,
  Brain,
  Shield,
  Database,
  Zap,
  Code,
  Smartphone,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Award,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Advanced AI solutions including natural language processing, computer vision, and predictive analytics",
    features: ["Custom AI Models", "MLOps Platforms", "AI Consulting", "Data Science"],
    color: "from-purple-400 to-pink-600",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions with multi-cloud deployment and enterprise-grade security",
    features: ["Cloud Migration", "DevOps Automation", "Microservices", "Container Orchestration"],
    color: "from-blue-400 to-cyan-600",
  },
  {
    icon: Code,
    title: "Enterprise Software",
    description: "Custom enterprise applications and SaaS platforms built for scale and performance",
    features: ["Custom Development", "API Integration", "Legacy Modernization", "Quality Assurance"],
    color: "from-green-400 to-emerald-600",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions protecting digital assets and ensuring compliance",
    features: ["Security Audits", "Penetration Testing", "Compliance Management", "Incident Response"],
    color: "from-red-400 to-orange-600",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with advanced analytics and visualization",
    features: ["Business Intelligence", "Real-time Analytics", "Data Warehousing", "Predictive Modeling"],
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    description: "Native and cross-platform mobile applications with cutting-edge user experiences",
    features: ["iOS Development", "Android Development", "React Native", "Flutter"],
    color: "from-indigo-400 to-purple-600",
  },
]

const technologies = [
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "AWS",
  "Azure",
  "GCP",
  "Docker",
  "Kubernetes",
  "TensorFlow",
  "PyTorch",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "GraphQL",
]

const projects = [
  {
    title: "AI-Powered Healthcare Platform",
    description: "Revolutionary diagnostic AI system improving patient outcomes by 40%",
    tech: ["TensorFlow", "Python", "AWS", "React"],
    impact: "1M+ patients served",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Smart City IoT Network",
    description: "Comprehensive IoT infrastructure managing urban resources efficiently",
    tech: ["IoT", "Azure", "Node.js", "MongoDB"],
    impact: "30% energy savings",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Financial Trading Algorithm",
    description: "High-frequency trading system with advanced risk management",
    tech: ["Python", "Machine Learning", "PostgreSQL", "Redis"],
    impact: "$100M+ managed",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function ITDivisionPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Cpu className="w-16 h-16 text-cyan-400 mr-4" />
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                IT & AI Division
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Pioneering the future of technology with cutting-edge AI solutions, cloud infrastructure, and enterprise
              software that transforms businesses worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2">
                AI/ML Specialists
              </Badge>
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2">Cloud Experts</Badge>
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2">
                Enterprise Solutions
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
            {[
              { icon: TrendingUp, number: "500+", label: "Projects Delivered", color: "from-cyan-400 to-blue-600" },
              { icon: Users, number: "200+", label: "Expert Engineers", color: "from-purple-400 to-pink-600" },
              { icon: Award, number: "50+", label: "Industry Awards", color: "from-green-400 to-emerald-600" },
              { icon: Zap, number: "99.9%", label: "Uptime Guarantee", color: "from-yellow-400 to-orange-500" },
            ].map((stat, index) => (
              <Card key={index} className="p-6 bg-black/40 backdrop-blur-md border border-gray-800 text-center">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${stat.color} p-3 mx-auto mb-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-black/40 backdrop-blur-md border border-gray-800 hover:border-gray-600 transition-all duration-300 group h-full">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} p-3 mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-600 bg-clip-text text-transparent">
              Technologies We Master
            </h2>
            <p className="text-xl text-gray-300">
              Cutting-edge tools and frameworks powering next-generation solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full border border-gray-600 hover:border-cyan-400 transition-all duration-300 cursor-pointer"
              >
                <span className="text-gray-300 hover:text-cyan-400 transition-colors">{tech}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300">
              Showcasing our most impactful technology solutions and their real-world results.
            </p>
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
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">{project.impact}</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
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
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our IT and AI solutions can accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3">
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3">
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
