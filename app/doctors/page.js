'use client'

import { useState } from 'react'
import { Search, Filter, Star, MapPin, Calendar, Clock } from 'lucide-react'

export default function DoctorsPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('all')
  const [selectedLocation, setSelectedLocation] = useState('all')

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      qualification: 'MBBS, MD Cardiology',
      experience: 15,
      rating: 4.9,
      reviews: 234,
      location: 'Mumbai',
      hospital: 'Apollo Hospital',
      consultationFee: 800,
      nextAvailable: 'Today 2:30 PM',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Dr. Rajesh Kumar',
      specialty: 'Dermatologist',
      qualification: 'MBBS, MD Dermatology',
      experience: 12,
      rating: 4.8,
      reviews: 189,
      location: 'Delhi',
      hospital: 'Max Hospital',
      consultationFee: 600,
      nextAvailable: 'Tomorrow 10:00 AM',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Dr. Priya Sharma',
      specialty: 'Pediatrician',
      qualification: 'MBBS, MD Pediatrics',
      experience: 10,
      rating: 4.9,
      reviews: 156,
      location: 'Bangalore',
      hospital: 'Fortis Hospital',
      consultationFee: 500,
      nextAvailable: 'Today 4:00 PM',
      image: 'https://images.unsplash.com/photo-1594824475317-d3b9b4b8b1b1?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 4,
      name: 'Dr. Amit Patel',
      specialty: 'Orthopedic',
      qualification: 'MBBS, MS Orthopedics',
      experience: 18,
      rating: 4.7,
      reviews: 298,
      location: 'Mumbai',
      hospital: 'Lilavati Hospital',
      consultationFee: 900,
      nextAvailable: 'Tomorrow 11:30 AM',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 5,
      name: 'Dr. Neha Gupta',
      specialty: 'Gynecologist',
      qualification: 'MBBS, MD Gynecology',
      experience: 14,
      rating: 4.8,
      reviews: 167,
      location: 'Delhi',
      hospital: 'AIIMS Delhi',
      consultationFee: 700,
      nextAvailable: 'Today 6:00 PM',
      image: 'https://images.unsplash.com/photo-1594824475317-d3b9b4b8b1b1?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 6,
      name: 'Dr. Vikram Singh',
      specialty: 'Neurologist',
      qualification: 'MBBS, DM Neurology',
      experience: 16,
      rating: 4.9,
      reviews: 203,
      location: 'Bangalore',
      hospital: 'Manipal Hospital',
      consultationFee: 1000,
      nextAvailable: 'Tomorrow 9:00 AM',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face'
    }
  ]

  const specialties = ['all', 'Cardiologist', 'Dermatologist', 'Pediatrician', 'Orthopedic', 'Gynecologist', 'Neurologist']
  const locations = ['all', 'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad']

  const filteredDoctors = doctors.filter(doctor => {
    const specialtyMatch = selectedSpecialty === 'all' || doctor.specialty === selectedSpecialty
    const locationMatch = selectedLocation === 'all' || doctor.location === selectedLocation
    return specialtyMatch && locationMatch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Doctors</h1>
          <p className="text-lg text-gray-600">Book appointments with verified doctors near you</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search doctors..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {specialties.map(specialty => (
                <option key={specialty} value={specialty}>
                  {specialty === 'all' ? 'All Specialties' : specialty}
                </option>
              ))}
            </select>
            
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {locations.map(location => (
                <option key={location} value={location}>
                  {location === 'all' ? 'All Locations' : location}
                </option>
              ))}
            </select>
            
            <button className="btn-primary flex items-center justify-center">
              <Filter className="h-5 w-5 mr-2" />
              More Filters
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredDoctors.length} doctors
            {selectedSpecialty !== 'all' && ` for ${selectedSpecialty}`}
            {selectedLocation !== 'all' && ` in ${selectedLocation}`}
          </p>
        </div>

        {/* Doctors List */}
        <div className="space-y-6">
          {filteredDoctors.map(doctor => (
            <div key={doctor.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{doctor.name}</h3>
                    <p className="text-primary-600 font-medium mb-1">{doctor.specialty}</p>
                    <p className="text-sm text-gray-600 mb-2">{doctor.qualification}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                      <span>{doctor.experience} years experience</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span>{doctor.rating} ({doctor.reviews} reviews)</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{doctor.hospital}, {doctor.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:text-right">
                  <div className="mb-4">
                    <p className="text-2xl font-bold text-gray-900">₹{doctor.consultationFee}</p>
                    <p className="text-sm text-gray-600">Consultation fee</p>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center text-sm text-medical-600 mb-1">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Next available</span>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{doctor.nextAvailable}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <button className="btn-primary w-full lg:w-auto px-6">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Appointment
                    </button>
                    <button className="btn-secondary w-full lg:w-auto px-6">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="btn-secondary px-8 py-3">
            Load More Doctors
          </button>
        </div>
      </div>
    </div>
  )
}