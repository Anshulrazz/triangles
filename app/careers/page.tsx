"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Users,
  TrendingUp,
  Heart,
  Zap,
  Search,
  Filter,
  ArrowRight,
  Globe,
  Coffee,
  Laptop,
  GraduationCap,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const jobOpenings = [
  {
    id: 1,
    title: "Senior AI Engineer",
    department: "IT & AI Division",
    location: "San Francisco, CA",
    type: "Full-time",
    level: "Senior",
    salary: "$150K - $200K",
    posted: "2 days ago",
    description: "Lead the development of cutting-edge AI solutions and machine learning models.",
    requirements: ["5+ years ML experience", "Python/TensorFlow", "PhD preferred"],
    featured: true,
  },
  {
    id: 2,
    title: "Sustainable Architecture Lead",
    department: "Real Estate",
    location: "New York, NY",
    type: "Full-time",
    level: "Senior",
    salary: "$120K - $160K",
    posted: "1 week ago",
    description: "Design and oversee sustainable building projects and smart city developments.",
    requirements: ["Architecture degree", "LEED certification", "10+ years experience"],
    featured: false,
  },
  {
    id: 3,
    title: "Digital Content Producer",
    department: "News & Media",
    location: "Los Angeles, CA",
    type: "Full-time",
    level: "Mid-level",
    salary: "$80K - $110K",
    posted: "3 days ago",
    description: "Create engaging digital content across multiple platforms and formats.",
    requirements: ["Content creation experience", "Video editing", "Social media expertise"],
    featured: false,
  },
  {
    id: 4,
    title: "VR Experience Designer",
    department: "Entertainment",
    location: "Remote",
    type: "Contract",
    level: "Mid-level",
    salary: "$90K - $130K",
    posted: "5 days ago",
    description: "Design immersive virtual reality experiences for entertainment platforms.",
    requirements: ["VR/AR experience", "Unity/Unreal", "Creative portfolio"],
    featured: true,
  },
  {
    id: 5,
    title: "Cloud Infrastructure Engineer",
    department: "IT & AI Division",
    location: "Austin, TX",
    type: "Full-time",
    level: "Mid-level",
    salary: "$110K - $140K",
    posted: "1 week ago",
    description: "Build and maintain scalable cloud infrastructure for global operations.",
    requirements: ["AWS/Azure expertise", "Kubernetes", "DevOps experience"],
    featured: false,
  },
  {
    id: 6,
    title: "Data Journalist",
    department: "News & Media",
    location: "Washington, DC",
    type: "Full-time",
    level: "Junior",
    salary: "$60K - $80K",
    posted: "4 days ago",
    description: "Investigate and report on data-driven stories using advanced analytics.",
    requirements: ["Journalism degree", "Data analysis", "Storytelling skills"],
    featured: false,
  },
]

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, mental health support, and wellness programs",
    color: "from-red-400 to-pink-600",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Continuous learning opportunities, mentorship programs, and clear advancement paths",
    color: "from-green-400 to-emerald-600",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Work on projects that shape the future and make a difference worldwide",
    color: "from-blue-400 to-cyan-600",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Flexible schedules, remote work options, and unlimited PTO policy",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Laptop,
    title: "Latest Technology",
    description: "Access to cutting-edge tools, equipment, and development resources",
    color: "from-purple-400 to-indigo-600",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Education stipend, conference attendance, and skill development programs",
    color: "from-pink-400 to-purple-600",
  },
]

const culture = [
  {
    title: "Innovation First",
    description: "We encourage bold ideas and creative solutions to complex challenges.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Collaborative Spirit",
    description: "Cross-functional teams working together to achieve extraordinary results.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Diversity & Inclusion",
    description: "Building a workplace where everyone feels valued and empowered to succeed.",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [department, setDepartment] = useState("")
  const [location, setLocation] = useState("")
  const [jobType, setJobType] = useState("")

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Briefcase className="w-16 h-16 text-cyan-400 mr-4" />
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Careers
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join our mission to build the future across technology, real estate, media, and entertainment. Shape
              tomorrow with innovative minds and cutting-edge projects.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2">Remote-First</Badge>
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2">Global Team</Badge>
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2">
                Innovation Culture
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
              { icon: Users, number: "500+", label: "Team Members", color: "from-cyan-400 to-blue-600" },
              { icon: Globe, number: "25+", label: "Countries", color: "from-purple-400 to-pink-600" },
              {
                icon: TrendingUp,
                number: "95%",
                label: "Employee Satisfaction",
                color: "from-green-400 to-emerald-600",
              },
              { icon: Zap, number: "50+", label: "Open Positions", color: "from-yellow-400 to-orange-500" },
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

      {/* Job Search */}
      <section className="py-12 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-black/40 backdrop-blur-md border border-gray-800 rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">Find Your Dream Job</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Job title or keyword..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-gray-900 border-gray-700 text-white"
                />
              </div>
              <Select onValueChange={setDepartment}>
                <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="it">IT & AI Division</SelectItem>
                  <SelectItem value="realestate">Real Estate</SelectItem>
                  <SelectItem value="news">News & Media</SelectItem>
                  <SelectItem value="entertainment">Entertainment</SelectItem>
                </SelectContent>
              </Select>
              <Select onValueChange={setLocation}>
                <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="sf">San Francisco</SelectItem>
                  <SelectItem value="ny">New York</SelectItem>
                  <SelectItem value="la">Los Angeles</SelectItem>
                  <SelectItem value="austin">Austin</SelectItem>
                </SelectContent>
              </Select>
              <Select onValueChange={setJobType}>
                <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fulltime">Full-time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="internship">Internship</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
                <Filter className="w-4 h-4 mr-2" />
                Search Jobs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300">Discover exciting opportunities to grow your career with us.</p>
          </motion.div>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card
                  className={`p-6 bg-black/40 backdrop-blur-md border transition-all duration-300 group hover:border-gray-600 ${
                    job.featured ? "border-cyan-600 bg-cyan-900/10" : "border-gray-800"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center mb-2">
                            <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors mr-3">
                              {job.title}
                            </h3>
                            {job.featured && (
                              <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Featured</Badge>
                            )}
                          </div>
                          <p className="text-cyan-400 mb-2">{job.department}</p>
                        </div>
                      </div>

                      <p className="text-gray-400 mb-4">{job.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.requirements.slice(0, 3).map((req, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">
                            {req}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="w-4 h-4 mr-1" />
                          {job.salary}
                        </div>
                        <div className="flex items-center">
                          <Badge variant="outline" className="border-gray-600 text-gray-400">
                            {job.level}
                          </Badge>
                        </div>
                        <span className="text-gray-500">Posted {job.posted}</span>
                      </div>
                    </div>

                    <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col sm:flex-row gap-3">
                      <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
                        Apply Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                      <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mt-12">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3">
              View All Positions
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-600 bg-clip-text text-transparent">
              Why Join Triangles?
            </h2>
            <p className="text-xl text-gray-300">
              We offer comprehensive benefits and a culture that supports your growth and well-being.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-black/40 backdrop-blur-md border border-gray-800 hover:border-gray-600 transition-all duration-300 group h-full">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${benefit.color} p-3 mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Our Culture
            </h2>
            <p className="text-xl text-gray-300">
              Experience a workplace where innovation thrives and every voice matters.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {culture.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden bg-black/40 backdrop-blur-md border border-gray-800 hover:border-gray-600 transition-all duration-300 group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">{item.description}</p>
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
              Ready to Shape the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our team of innovators and help us build tomorrow's solutions today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3">
                Browse All Jobs
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Link href="/contact">
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3">
                  Contact HR Team
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
