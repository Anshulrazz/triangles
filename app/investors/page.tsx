"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  TrendingUp,
  BarChart3,
  Download,
  Calendar,
  Globe,
  Zap,
  Shield,
  ArrowRight,
  FileText,
  Video,
  Presentation,
} from "lucide-react"
import Link from "next/link"

const financialHighlights = [
  { label: "Revenue Growth", value: "150%", period: "YoY", color: "from-green-400 to-emerald-600" },
  { label: "Market Valuation", value: "$2.5B", period: "2024", color: "from-blue-400 to-cyan-600" },
  { label: "Active Users", value: "5M+", period: "Global", color: "from-purple-400 to-pink-600" },
  { label: "Profit Margin", value: "35%", period: "Q4 2024", color: "from-yellow-400 to-orange-500" },
]

const divisions = [
  {
    name: "IT & AI Division",
    revenue: "$800M",
    growth: "+180%",
    marketShare: "15%",
    color: "from-cyan-400 to-blue-600",
    description: "Leading AI solutions and cloud infrastructure",
  },
  {
    name: "Real Estate",
    revenue: "$600M",
    growth: "+120%",
    marketShare: "8%",
    color: "from-emerald-400 to-teal-600",
    description: "Smart cities and sustainable development",
  },
  {
    name: "News & Media",
    revenue: "$400M",
    growth: "+95%",
    marketShare: "12%",
    color: "from-orange-400 to-red-600",
    description: "Digital journalism and content platforms",
  },
  {
    name: "Entertainment",
    revenue: "$300M",
    growth: "+200%",
    marketShare: "6%",
    color: "from-purple-400 to-pink-600",
    description: "Streaming platforms and original content",
  },
]

const reports = [
  {
    title: "Q4 2024 Earnings Report",
    type: "Quarterly Report",
    date: "January 15, 2025",
    size: "2.4 MB",
    icon: FileText,
  },
  {
    title: "Annual Report 2024",
    type: "Annual Report",
    date: "December 31, 2024",
    size: "8.7 MB",
    icon: FileText,
  },
  {
    title: "Investor Presentation Q4",
    type: "Presentation",
    date: "January 10, 2025",
    size: "15.2 MB",
    icon: Presentation,
  },
  {
    title: "ESG Impact Report",
    type: "Sustainability",
    date: "December 15, 2024",
    size: "5.1 MB",
    icon: FileText,
  },
]

const milestones = [
  {
    year: "2024",
    quarter: "Q1",
    event: "Series A Funding",
    amount: "$50M",
    description: "Initial funding round to accelerate growth across all divisions",
  },
  {
    year: "2024",
    quarter: "Q2",
    event: "Strategic Partnerships",
    amount: "$100M",
    description: "Major partnerships with Fortune 500 companies",
  },
  {
    year: "2024",
    quarter: "Q3",
    event: "International Expansion",
    amount: "$75M",
    description: "Expansion into European and Asian markets",
  },
  {
    year: "2024",
    quarter: "Q4",
    event: "IPO Preparation",
    amount: "$200M",
    description: "Preparing for public offering in 2025",
  },
]

const investmentThesis = [
  {
    icon: TrendingUp,
    title: "Market Leadership",
    description: "Dominant position in high-growth technology sectors with expanding market share",
  },
  {
    icon: Zap,
    title: "Innovation Engine",
    description: "Continuous R&D investment driving breakthrough products and services",
  },
  {
    icon: Globe,
    title: "Global Scalability",
    description: "Proven ability to scale operations across multiple markets and industries",
  },
  {
    icon: Shield,
    title: "Diversified Portfolio",
    description: "Risk mitigation through strategic diversification across four key sectors",
  },
]

export default function InvestorsPage() {
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
              <BarChart3 className="w-16 h-16 text-green-400 mr-4" />
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
                Investor Relations
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover exceptional investment opportunities in our diversified portfolio of high-growth technology
              companies shaping the future across multiple industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2">
                Strong Growth
              </Badge>
              <Badge className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2">Market Leader</Badge>
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2">
                Innovation Focus
              </Badge>
            </div>
          </motion.div>

          {/* Financial Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {financialHighlights.map((highlight, index) => (
              <Card key={index} className="p-6 bg-black/40 backdrop-blur-md border border-gray-800 text-center">
                <div
                  className={`text-4xl font-bold bg-gradient-to-r ${highlight.color} bg-clip-text text-transparent mb-2`}
                >
                  {highlight.value}
                </div>
                <div className="text-white font-semibold mb-1">{highlight.label}</div>
                <div className="text-gray-400 text-sm">{highlight.period}</div>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Division Performance */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
              Division Performance
            </h2>
            <p className="text-xl text-gray-300">
              Strong performance across all business segments with consistent growth trajectories.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {divisions.map((division, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="p-8 bg-black/40 backdrop-blur-md border border-gray-800 hover:border-gray-600 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors">
                      {division.name}
                    </h3>
                    <Badge className={`bg-gradient-to-r ${division.color} text-white`}>{division.growth}</Badge>
                  </div>

                  <p className="text-gray-400 mb-6">{division.description}</p>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div
                        className={`text-2xl font-bold bg-gradient-to-r ${division.color} bg-clip-text text-transparent`}
                      >
                        {division.revenue}
                      </div>
                      <div className="text-gray-400 text-sm">Revenue</div>
                    </div>
                    <div className="text-center">
                      <div
                        className={`text-2xl font-bold bg-gradient-to-r ${division.color} bg-clip-text text-transparent`}
                      >
                        {division.growth}
                      </div>
                      <div className="text-gray-400 text-sm">Growth</div>
                    </div>
                    <div className="text-center">
                      <div
                        className={`text-2xl font-bold bg-gradient-to-r ${division.color} bg-clip-text text-transparent`}
                      >
                        {division.marketShare}
                      </div>
                      <div className="text-gray-400 text-sm">Market Share</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Investment Thesis
            </h2>
            <p className="text-xl text-gray-300">
              Why Triangles Consolidated represents a compelling investment opportunity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {investmentThesis.map((thesis, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="p-8 bg-black/40 backdrop-blur-md border border-gray-800 hover:border-gray-600 transition-all duration-300 group h-full">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-400 to-purple-600 p-4 mb-6 group-hover:scale-110 transition-transform">
                    <thesis.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors">
                    {thesis.title}
                  </h3>
                  <p className="text-gray-400">{thesis.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Milestones */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-600 bg-clip-text text-transparent">
              Key Milestones 2024
            </h2>
            <p className="text-xl text-gray-300">Major achievements and funding rounds that have driven our growth.</p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <Card className="p-6 bg-black/40 backdrop-blur-md border border-gray-800 max-w-md">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-gradient-to-r from-emerald-500 to-cyan-600 text-white">
                      {milestone.year} {milestone.quarter}
                    </Badge>
                    <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-600 bg-clip-text text-transparent">
                      {milestone.amount}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{milestone.event}</h3>
                  <p className="text-gray-400">{milestone.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports & Documents */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Financial Reports
            </h2>
            <p className="text-xl text-gray-300">
              Access our latest financial reports, presentations, and regulatory filings.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reports.map((report, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-black/40 backdrop-blur-md border border-gray-800 hover:border-gray-600 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-pink-600 p-3 mr-4">
                        <report.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                          {report.title}
                        </h3>
                        <p className="text-purple-400 text-sm">{report.type}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {report.date}
                    </div>
                    <span>{report.size}</span>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-300">
              Join us for investor meetings, earnings calls, and industry conferences.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                date: "February 15, 2025",
                time: "9:00 AM EST",
                event: "Q4 2024 Earnings Call",
                description: "Quarterly financial results and business updates",
                type: "Virtual",
              },
              {
                date: "March 10, 2025",
                time: "2:00 PM EST",
                event: "Investor Day 2025",
                description: "Annual investor presentation and strategy overview",
                type: "In-Person",
              },
              {
                date: "April 5, 2025",
                time: "10:00 AM EST",
                event: "Tech Innovation Summit",
                description: "Showcase of latest AI and technology developments",
                type: "Hybrid",
              },
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="p-6 bg-black/40 backdrop-blur-md border border-gray-800 hover:border-gray-600 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-lg font-semibold text-white mr-3">{event.event}</h3>
                        <Badge
                          className={`${
                            event.type === "Virtual"
                              ? "bg-blue-600"
                              : event.type === "In-Person"
                                ? "bg-green-600"
                                : "bg-purple-600"
                          } text-white`}
                        >
                          {event.type}
                        </Badge>
                      </div>
                      <p className="text-gray-400 mb-2">{event.description}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {event.date} at {event.time}
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white">
                        Register
                      </Button>
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
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
              Partner with the Future
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our journey as we continue to innovate and grow across multiple high-potential markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-3">
                  Contact Investor Relations
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3">
                <Video className="w-4 h-4 mr-2" />
                Watch Investor Video
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
