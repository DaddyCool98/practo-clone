'use client'

import { Search, Calendar, FileText, Shield, Star, MapPin } from 'lucide-react'

export default function HomePage() {
  const specialties = [
    { name: 'Cardiology', icon: '❤️', doctors: 150 },
    { name: 'Dermatology', icon: '🧴', doctors: 89 },
    { name: 'Pediatrics', icon: '👶', doctors: 120 },
    { name: 'Orthopedics', icon: '🦴', doctors: 95 },
    { name: 'Neurology', icon: '🧠', doctors: 67 },
    { name: 'Gynecology', icon: '👩‍⚕️', doctors: 78 }
  ]

  const featuredDoctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      rating: 4.9,
      experience: '15 years',
      location: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Dr. Rajesh Kumar',
      specialty: 'Dermatologist',
      rating: 4.8,
      experience: '12 years',
      location: 'Delhi',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Dr. Priya Sharma',
      specialty: 'Pediatrician',
      rating: 4.9,
      experience: '10 years',
      location: 'Bangalore',
      image: 'https://images.unsplash.com/photo-1594824475317-d3b9b4b8b1b1?w=150&h=150&fit=crop&crop=face'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-50 to-medical-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Find & Book the best
              <span className="text-primary-600"> doctors</span> near you
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Book appointments with verified doctors, access health records, and manage your healthcare journey all in one place.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4 flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search doctors, specialties, conditions..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
              <button className="btn-primary px-8 py-3 text-lg">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose HealthCare+?</h2>
            <p className="text-lg text-gray-600">Your health deserves the best care</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Find Doctors</h3>
              <p className="text-gray-600">Search from 1000+ verified doctors across specialties</p>
            </div>
            
            <div className="text-center">
              <div className="bg-medical-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-medical-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Book Appointments</h3>
              <p className="text-gray-600">Instant booking with real-time availability</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Health Records</h3>
              <p className="text-gray-600">Secure digital health records and prescriptions</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
              <p className="text-gray-600">HIPAA compliant with end-to-end encryption</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Specialties</h2>
            <p className="text-lg text-gray-600">Find doctors by specialty</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {specialties.map((specialty, index) => (
              <div key={index} className="card text-center hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-4xl mb-3">{specialty.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{specialty.name}</h3>
                <p className="text-sm text-gray-600">{specialty.doctors} doctors</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Top Rated Doctors</h2>
            <p className="text-lg text-gray-600">Meet our most trusted healthcare professionals</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredDoctors.map((doctor, index) => (
              <div key={index} className="card hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{doctor.name}</h3>
                    <p className="text-primary-600">{doctor.specialty}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span>{doctor.rating}</span>
                  </div>
                  <span>{doctor.experience}</span>
                  <span>{doctor.location}</span>
                </div>
                
                <button className="btn-primary w-full">Book Appointment</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to take control of your health?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of patients who trust HealthCare+ for their medical needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors">
              Find a Doctor
            </button>
            <button className="bg-primary-700 hover:bg-primary-800 text-white font-medium py-3 px-8 rounded-lg transition-colors">
              Download App
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}