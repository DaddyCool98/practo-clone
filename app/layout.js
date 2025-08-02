import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MediCare+ | Your Health, Simplified',
  description: 'Connect with verified doctors, book appointments instantly, and manage your health journey with ease. Healthcare made simple and accessible.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-8">
                <div className="flex-shrink-0">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-lg">M+</span>
                    </div>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                      MediCare+
                    </h1>
                  </div>
                </div>
                
                <div className="hidden md:flex space-x-8">
                  <a href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                    Home
                  </a>
                  <div className="relative group">
                    <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors flex items-center">
                      Find Care
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <a href="/doctors" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">Find Doctors</a>
                      <a href="/instant-consult" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">Instant Consult</a>
                      <a href="/health-checkup" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">Health Checkup</a>
                    </div>
                  </div>
                  <a href="/appointments" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                    My Appointments
                  </a>
                  <a href="/health-records" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                    Health Records
                  </a>
                  <a href="/medicines" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                    Medicines
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="hidden md:flex items-center space-x-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>24/7 Support</span>
                  </div>
                </div>
                
                <button className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors">
                  Sign In
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
                  Sign Up
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
        
        <main>{children}</main>
        
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="col-span-1">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-lg">M+</span>
                  </div>
                  <h3 className="text-2xl font-bold">MediCare+</h3>
                </div>
                <p className="text-gray-400 mb-6">
                  Your trusted healthcare partner. Making quality healthcare accessible to everyone.
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
              
              <div>
                <h4 className="text-lg font-semibold mb-6">For Patients</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Find Doctors</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Book Appointment</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Instant Consult</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Health Records</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Medicine Delivery</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-6">For Doctors</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Join as Doctor</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Doctor Portal</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Telemedicine</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Practice Management</a></li>
                </ul>
              </div>
              
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
            
            <div className="border-t border-gray-800 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm">
                  © 2024 MediCare+. All rights reserved. Your health, our priority.
                </p>
                <div className="flex items-center space-x-6 mt-4 md:mt-0">
                  <div className="flex items-center text-sm text-gray-400">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
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