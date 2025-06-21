import Link from "next/link"
import { Triangle, Linkedin, Twitter, Youtube, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Triangle className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                TRIANGLES
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Building the future across every dimension through innovation, technology, and sustainable growth.
            </p>
            <div className="flex space-x-4">
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
              <Mail className="w-5 h-5 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                About Us
              </Link>
              <Link href="/careers" className="block text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Careers
              </Link>
              <Link href="/investors" className="block text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Investors
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-white font-semibold mb-4">Industries</h3>
            <div className="space-y-2">
              <Link href="/it-division" className="block text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                IT & AI
              </Link>
              <Link href="/real-estate" className="block text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Real Estate
              </Link>
              <Link href="/news-media" className="block text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                News & Media
              </Link>
              <Link href="/entertainment" className="block text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Entertainment
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <Link href="/privacy" className="block text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="block text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2024 Triangles Consolidated Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
