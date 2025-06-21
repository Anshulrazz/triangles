"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Play, CalendarIcon, Clock, User, CheckCircle, ArrowRight, Video, Monitor, Smartphone } from "lucide-react"
import { format } from "date-fns"

const demoTypes = [
  {
    id: "ai-solutions",
    title: "AI & Machine Learning Solutions",
    duration: "45 minutes",
    description: "Explore our cutting-edge AI platforms, machine learning models, and automation tools",
    features: ["Custom AI Models", "Predictive Analytics", "Natural Language Processing", "Computer Vision"],
    icon: "🤖",
  },
  {
    id: "smart-cities",
    title: "Smart City Development",
    duration: "60 minutes",
    description: "Discover how we're building the cities of tomorrow with IoT and sustainable technologies",
    features: ["IoT Infrastructure", "Sustainable Design", "Smart Transportation", "Energy Management"],
    icon: "🏙️",
  },
  {
    id: "media-platform",
    title: "Digital Media Platform",
    duration: "30 minutes",
    description: "See our innovative journalism tools and content distribution technologies in action",
    features: ["Content Management", "AI-Powered Analytics", "Multi-Platform Publishing", "Audience Insights"],
    icon: "📺",
  },
  {
    id: "entertainment",
    title: "Entertainment & Streaming",
    duration: "40 minutes",
    description: "Experience our immersive entertainment platforms and content creation tools",
    features: ["Streaming Technology", "VR/AR Experiences", "Content Analytics", "User Personalization"],
    icon: "🎬",
  },
]

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
]

export default function DemoPage() {
  const [selectedDemo, setSelectedDemo] = useState("")
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    interests: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black text-white pt-16 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto px-6"
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-400 to-emerald-600 flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            Demo Scheduled Successfully!
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Thank you for your interest in Triangles Consolidated. We've received your demo request and will send you a
            calendar invitation shortly.
          </p>
          <div className="bg-black/40 backdrop-blur-md border border-gray-800 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-white mb-4">Demo Details</h3>
            <div className="space-y-2 text-left">
              <div className="flex justify-between">
                <span className="text-gray-400">Demo Type:</span>
                <span className="text-white">{demoTypes.find((d) => d.id === selectedDemo)?.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Date:</span>
                <span className="text-white">{selectedDate ? format(selectedDate, "PPP") : ""}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Time:</span>
                <span className="text-white">{selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Duration:</span>
                <span className="text-white">{demoTypes.find((d) => d.id === selectedDemo)?.duration}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
              Add to Calendar
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              Back to Home
            </Button>
          </div>
        </motion.div>
      </div>
    )
  }

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
              <Play className="w-16 h-16 text-cyan-400 mr-4" />
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Book a Demo
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Experience our innovative solutions firsthand. Schedule a personalized demonstration with our experts and
              discover how Triangles Consolidated can transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2">
                <Video className="w-4 h-4 mr-2" />
                Live Demo
              </Badge>
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2">
                <Monitor className="w-4 h-4 mr-2" />
                Screen Sharing
              </Badge>
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2">
                <Smartphone className="w-4 h-4 mr-2" />
                Interactive
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo Selection */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Choose Your Demo Experience
            </h2>
            <p className="text-xl text-gray-300">Select the solution you're most interested in exploring</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {demoTypes.map((demo, index) => (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card
                  className={`p-8 cursor-pointer transition-all duration-300 ${
                    selectedDemo === demo.id
                      ? "bg-cyan-900/20 border-cyan-400"
                      : "bg-black/40 backdrop-blur-md border-gray-800 hover:border-gray-600"
                  }`}
                  onClick={() => setSelectedDemo(demo.id)}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-4xl mb-4">{demo.icon}</div>
                    <div className="flex items-center text-gray-400">
                      <Clock className="w-4 h-4 mr-1" />
                      {demo.duration}
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold mb-4 text-white">{demo.title}</h3>
                  <p className="text-gray-400 mb-6">{demo.description}</p>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-300">What you'll see:</h4>
                    {demo.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {selectedDemo === demo.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-6 p-4 bg-cyan-900/20 rounded-lg border border-cyan-400/30"
                    >
                      <div className="flex items-center text-cyan-400">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        <span className="font-semibold">Selected</span>
                      </div>
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Booking Form */}
          {selectedDemo && (
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Card className="p-8 bg-black/40 backdrop-blur-md border border-gray-800 max-w-4xl mx-auto">
                <h3 className="text-2xl font-semibold mb-8 text-white text-center">Schedule Your Demo</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">First Name *</label>
                      <Input
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="bg-gray-900 border-gray-700 text-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Last Name *</label>
                      <Input
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
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
                      <label className="block text-sm font-medium text-gray-300 mb-2">Company *</label>
                      <Input
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className="bg-gray-900 border-gray-700 text-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Job Title</label>
                      <Input
                        value={formData.role}
                        onChange={(e) => handleInputChange("role", e.target.value)}
                        className="bg-gray-900 border-gray-700 text-white"
                      />
                    </div>
                  </div>

                  {/* Date and Time Selection */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Date *</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal bg-gray-900 border-gray-700 text-white hover:bg-gray-800"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-gray-900 border-gray-700">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                            initialFocus
                            className="text-white"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Time *</label>
                      <Select onValueChange={setSelectedTime}>
                        <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Specific Interests or Questions
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="bg-gray-900 border-gray-700 text-white min-h-[100px]"
                      placeholder="Tell us what you'd like to focus on during the demo..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-6">
                    <Button
                      type="submit"
                      disabled={
                        !selectedDemo ||
                        !selectedDate ||
                        !selectedTime ||
                        !formData.firstName ||
                        !formData.lastName ||
                        !formData.email ||
                        !formData.company
                      }
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Schedule Demo
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </form>
              </Card>
            </motion.div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-600 bg-clip-text text-transparent">
              Why Choose Our Demo?
            </h2>
            <p className="text-xl text-gray-300">
              Get hands-on experience with our solutions and see the impact they can have on your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: User,
                title: "Personalized Experience",
                description: "Tailored demonstrations based on your specific industry and use cases",
              },
              {
                icon: CheckCircle,
                title: "Expert Guidance",
                description: "Led by our solution architects and technical specialists",
              },
              {
                icon: ArrowRight,
                title: "Next Steps Planning",
                description: "Clear roadmap for implementation and integration with your systems",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="p-8 bg-black/40 backdrop-blur-md border border-gray-800 hover:border-gray-600 transition-all duration-300 text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-600 p-4 mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
