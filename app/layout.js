import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HealthCare+ | Find Doctors, Book Appointments',
  description: 'Your trusted healthcare marketplace. Find doctors, book appointments, manage health records.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <h1 className="text-2xl font-bold text-primary-600">HealthCare+</h1>
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  <a href="/" className="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium">Home</a>
                  <a href="/doctors" className="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium">Find Doctors</a>
                  <a href="/appointments" className="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium">Appointments</a>
                  <a href="/health-records" className="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium">Health Records</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="btn-secondary">Login</button>
                <button className="btn-primary">Sign Up</button>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-gray-50 border-t mt-16">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-600">© 2024 HealthCare+. Your health, our priority.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}