'use client'

import { useState } from 'react'
import { Search, Filter, Star, MapPin, Calendar, Clock, Video, Shield, Award, Heart } from 'lucide-react'

export default function DoctorsPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('all')
  const [selectedLocation, setSelectedLocation] = useState('all')
  const [consultationType, setConsultationType] = useState('all')
  const [showFilters, setShowFilters] = useState(false)

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
      languages: ['English', 'Hindi'],
      consultationTypes: ['In-person', 'Video'],
      verified: true,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
      specializations: ['Heart Surgery', 'Preventive Cardiology'],
      awards: 2
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
      languages: ['English', 'Hindi', 'Punjabi'],
      consultationTypes: ['In-person', 'Video'],
      verified: true,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
      specializations: ['Acne Treatment', 'Skin Cancer'],
      awards: 1
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
      languages: ['English', 'Hindi', 'Kannada'],
      consultationTypes: ['In-person', 'Video'],
      verified: true,
      image: 'https://images.unsplash.com/photo-1594824475317-d3b9b4b8b1b1?w=150&h=150&fit=crop&crop=face',
      specializations: ['Child Development', 'Vaccination'],
      awards: 3
    }
  ]

  const specialties = ['all', 'Cardiologist', 'Dermatologist', 'Pediatrician', 'Orthopedic', 'Gynecologist', 'Neurologist']
  const locations = ['all', 'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad']

  const filteredDoctors = doctors.filter(doctor => {
    const specialtyMatch = selectedSpecialty === 'all' || doctor.specialty === selectedSpecialty
    const locationMatch = selectedLocation === 'all' || doctor.location === selectedLocation
    const consultationMatch = consultationType === 'all' || doctor.consultationTypes.includes(consultationType)
    return specialtyMatch && locationMatch && consultationMatch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Your Perfect Doctor</h1>
          <p className="text-xl text-gray-600">Connect with verified healthcare professionals near you</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 border border-gray-100">
          <div className="grid lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search doctors, symptoms, or conditions..."
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>
            
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="w-full py-4 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
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
              className="w-full py-4 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            >
              {locations.map(location => (
                <option key={location} value={location}>
                  {location === 'all' ? 'All Locations' : location}
                </option>
              ))}
            </select>
            
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center"
            >
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </button>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Consultation Type</label>
                  <div className="space-y-2">
                    {['all', 'In-person', 'Video'].map(type => (
                      <label key={type} className="flex items-center">
                        <input
                          type="radio"
                          name="consultationType"
                          value={type}
                          checked={consultationType === type}
                          onChange={(e) => setConsultationType(e.target.value)}
                          className="mr-3 text-blue-600"
                        />
                        <span className="text-gray-700">{type === 'all' ? 'All Types' : type}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Experience</label>
                  <select className="w-full py-3 px-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Any Experience</option>
                    <option>5+ years</option>
                    <option>10+ years</option>
                    <option>15+ years</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Availability</label>
                  <select className="w-full py-3 px-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Any Time</option>
                    <option>Available Today</option>
                    <option>Available Tomorrow</option>
                    <option>This Week</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Count and Sort */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            <span className="font-semibold text-gray-900">{filteredDoctors.length} doctors</span> available
            {selectedSpecialty !== 'all' && ` for ${selectedSpecialty}`}
            {selectedLocation !== 'all' && ` in ${selectedLocation}`}
          </p>
          
          <select className="py-2 px-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>Sort by Relevance</option>
            <option>Highest Rated</option>
            <option>Most Experienced</option>
            <option>Lowest Fee</option>
            <option>Earliest Available</option>
          </select>
        </div>

        {/* Doctors List */}
        <div className="space-y-6">
          {filteredDoctors.map(doctor => (
            <div key={doctor.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-200">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start space-x-6 mb-6 lg:mb-0">
                  <div className="relative">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-24 h-24 rounded-2xl object-cover"
                    />
                    {doctor.verified && (
                      <div className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full p-1">
                        <Shield className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                        <p className="text-blue-600 font-semibold text-lg">{doctor.specialty}</p>
                      </div>
                      {doctor.awards > 0 && (
                        <div className="flex items-center bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-sm">
                          <Award className="h-4 w-4 mr-1" />
                          {doctor.awards} Award{doctor.awards > 1 ? 's' : ''}
                        </div>
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-3">{doctor.qualification}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Award className="h-4 w-4 mr-1 text-blue-500" />
                        <span>{doctor.experience} years experience</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1 text-yellow-400" />
                        <span className="font-medium">{doctor.rating}</span>
                        <span className="ml-1">({doctor.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1 text-green-500" />
                        <span>{doctor.hospital}, {doctor.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {doctor.specializations.map((spec, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                          {spec}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center">
                        <span className="text-gray-600 mr-2">Languages:</span>
                        <span className="text-gray-900">{doctor.languages.join(', ')}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {doctor.consultationTypes.includes('Video') && (
                          <div className="flex items-center bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs">
                            <Video className="h-3 w-3 mr-1" />
                            Video
                          </div>
                        )}
                        {doctor.consultationTypes.includes('In-person') && (
                          <div className="flex items-center bg-purple-50 text-purple-700 px-2 py-1 rounded-full text-xs">
                            <MapPin className="h-3 w-3 mr-1" />
                            In-person
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:text-right lg:min-w-[200px]">
                  <div className="mb-4">
                    <div className="flex items-baseline justify-end mb-1">
                      <span className="text-3xl font-bold text-gray-900">₹{doctor.consultationFee}</span>
                    </div>
                    <p className="text-sm text-gray-600">Consultation fee</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-end text-sm text-green-600 mb-1">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="font-medium">Next available</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-900">{doctor.nextAvailable}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Appointment
                    </button>
                    <div className="grid grid-cols-2 gap-2">
                      <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-medium transition-colors text-sm">
                        View Profile
                      </button>
                      <button className="bg-green-100 hover:bg-green-200 text-green-800 py-2 px-4 rounded-lg font-medium transition-colors text-sm flex items-center justify-center">
                        <Video className="h-3 w-3 mr-1" />
                        Video Call
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200 px-8 py-4 rounded-xl font-semibold transition-colors">
            Load More Doctors
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Why Choose Our Doctors?</h3>
            <p className="text-gray-600">Quality healthcare you can trust</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">100% Verified</h4>
              <p className="text-gray-600 text-sm">All doctors are verified with proper credentials and licenses</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Patient-Centric</h4>
              <p className="text-gray-600 text-sm">Focused on providing the best patient care and experience</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Award Winning</h4>
              <p className="text-gray-600 text-sm">Many of our doctors have received prestigious medical awards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}