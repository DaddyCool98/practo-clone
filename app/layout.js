import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HealthBridge | Healthcare Without Borders',
  description: 'Access world-class medical treatments at up to 85% savings. Professional care, transparent pricing, seamless experience.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-100 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">H</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900">HealthBridge</span>
                </div>
              </div>
              
              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Home
                </a>
                <a href="/search" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Treatments
                </a>
                <a href="/doctors" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Specialists
                </a>
                <a href="/destinations" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Destinations
                </a>
                <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  About
                </a>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex items-center space-x-4">
                <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  Sign In
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-medium transition-colors">
                  Get Started
                </button>
                
                {/* Mobile menu button */}
                <button className="md:hidden p-2">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
        
        {/* Main Content */}
        <main className="pt-16">{children}</main>
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-5 gap-8">
              {/* Brand */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">H</span>
                  </div>
                  <span className="text-xl font-bold">HealthBridge</span>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Connecting patients with world-class healthcare at transparent, affordable prices. 
                  Your health journey, simplified.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <span className="text-sm">f</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <span className="text-sm">t</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <span className="text-sm">in</span>
                  </a>
                </div>
              </div>
              
              {/* Services */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Services</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Treatment Search</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Specialist Consultation</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Travel Planning</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Recovery Support</a></li>
                </ul>
              </div>
              
              {/* Destinations */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Destinations</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">India</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Thailand</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Singapore</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Turkey</a></li>
                </ul>
              </div>
              
              {/* Support */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Support</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            
            {/* Bottom Bar */}
            <div className="border-t border-gray-800 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm">
                  © 2024 HealthBridge. All rights reserved.
                </p>
                <div className="flex items-center space-x-6 mt-4 md:mt-0">
                  <div className="flex items-center text-sm text-gray-400">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                    <span>All systems operational</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    🔒 HIPAA Compliant
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}