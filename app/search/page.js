'use client'

import { useState } from 'react'
import { Search, Filter, Star, MapPin, Calendar, Clock, Video, Shield, Award, Heart, Plane, DollarSign } from 'lucide-react'

export default function SearchResultsPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [sortBy, setSortBy] = useState('relevance')
  const [showFilters, setShowFilters] = useState(false)

  const searchResults = [
    {
      id: 1,
      type: 'package',
      title: 'Complete Heart Surgery Package',
      hospital: 'Apollo Hospitals Chennai',
      location: 'Chennai, India',
      country: 'IN',
      flag: '🇮🇳',
      price: '$8,500',
      originalPrice: '$45,000',
      savings: '81% savings',
      rating: 4.9,
      reviews: 234,
      duration: '7-10 days',
      includes: ['Surgery', 'Hospital stay', 'Medications', 'Airport transfers', '5-star accommodation'],
      accreditation: 'JCI Accredited',
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=250&fit=crop',
      doctor: 'Dr. Rajesh Kumar',
      experience: '20+ years',
      successRate: '98%'
    },
    {
      id: 2,
      type: 'package',
      title: 'Knee Replacement Surgery',
      hospital: 'Bumrungrad International Hospital',
      location: 'Bangkok, Thailand',
      country: 'TH',
      flag: '🇹🇭',
      price: '$12,000',
      originalPrice: '$48,000',
      savings: '75% savings',
      rating: 4.8,
      reviews: 189,
      duration: '5-7 days',
      includes: ['Surgery', 'Physiotherapy', 'Hospital stay', 'Visa assistance', 'Hotel accommodation'],
      accreditation: 'JCI Accredited',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=250&fit=crop',
      doctor: 'Dr. Somchai Patel',
      experience: '15+ years',
      successRate: '96%'
    },
    {
      id: 3,
      type: 'hospital',
      title: 'Mount Elizabeth Hospital',
      hospital: 'Mount Elizabeth Hospital',
      location: 'Singapore',
      country: 'SG',
      flag: '🇸🇬',
      price: 'From $15,000',
      originalPrice: '$60,000',
      savings: '75% savings',
      rating: 4.9,
      reviews: 456,
      duration: 'Varies',
      includes: ['World-class facilities', 'International patient services', 'Luxury amenities'],
      accreditation: 'JCI Accredited',
      image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&h=250&fit=crop',
      specialties: ['Cancer Treatment', 'Cardiology', 'Neurology', 'Orthopedics'],
      languages: ['English', 'Mandarin', 'Malay', 'Tamil']
    },
    {
      id: 4,
      type: 'doctor',
      title: 'Dr. Priya Sharma - Fertility Specialist',
      hospital: 'Fortis Hospital',
      location: 'Mumbai, India',
      country: 'IN',
      flag: '🇮🇳',
      price: '$3,500',
      originalPrice: '$15,000',
      savings: '77% savings',
      rating: 4.9,
      reviews: 156,
      duration: '2-3 weeks',
      includes: ['Consultation', 'IVF treatment', 'Medications', 'Follow-up care'],
      accreditation: 'Board Certified',
      image: 'https://images.unsplash.com/photo-1594824475317-d3b9b4b8b1b1?w=400&h=250&fit=crop',
      doctor: 'Dr. Priya Sharma',
      experience: '12+ years',
      successRate: '85%',
      specializations: ['IVF', 'ICSI', 'Egg Freezing', 'Male Infertility']
    }
  ]

  const filters = [
    { key: 'all', label: 'All Results', count: searchResults.length },
    { key: 'package', label: 'Treatment Packages', count: searchResults.filter(r => r.type === 'package').length },
    { key: 'hospital', label: 'Hospitals', count: searchResults.filter(r => r.type === 'hospital').length },
    { key: 'doctor', label: 'Doctors', count: searchResults.filter(r => r.type === 'doctor').length }
  ]

  const filteredResults = activeFilter === 'all' 
    ? searchResults 
    : searchResults.filter(result => result.type === activeFilter)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Header */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search treatments, hospitals, doctors..."
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                defaultValue="Heart Surgery"
              />
            </div>
            <select className="px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>All Countries</option>
              <option>🇮🇳 India</option>
              <option>🇹🇭 Thailand</option>
              <option>🇸🇬 Singapore</option>
              <option>🇲🇾 Malaysia</option>
              <option>🇹🇷 Turkey</option>
            </select>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
          <div className="flex flex-wrap gap-2 mb-4 lg:mb-0">
            {filters.map(filter => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeFilter === filter.key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="relevance">Sort by Relevance</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="savings">Highest Savings</option>
            </select>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <Filter className="h-4 w-4" />
              Filters
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            <span className="font-semibold text-gray-900">{filteredResults.length} results</span> found for "Heart Surgery"
          </p>
        </div>

        {/* Search Results */}
        <div className="space-y-6">
          {filteredResults.map(result => (
            <div key={result.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-200">
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="lg:w-80 h-64 lg:h-auto relative">
                  <img
                    src={result.image}
                    alt={result.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1 text-sm font-medium">
                    {result.flag} {result.country}
                  </div>
                  <div className="absolute top-4 right-4 bg-green-600 text-white rounded-full px-3 py-1 text-sm font-medium">
                    {result.savings}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 p-6">
                  <div className="flex flex-col lg:flex-row lg:justify-between">
                    <div className="flex-1 mb-4 lg:mb-0 lg:pr-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{result.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              <span>{result.hospital}</span>
                            </div>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-400 mr-1" />
                              <span className="font-medium">{result.rating}</span>
                              <span className="ml-1">({result.reviews} reviews)</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mb-4">
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                              {result.accreditation}
                            </span>
                            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                              {result.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Doctor Info (for packages and doctors) */}
                      {(result.type === 'package' || result.type === 'doctor') && (
                        <div className="mb-4 p-4 bg-blue-50 rounded-xl">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-gray-900">{result.doctor}</h4>
                              <p className="text-sm text-gray-600">{result.experience} experience</p>
                            </div>
                            <div className="text-right">
                              <div className="text-sm text-gray-600">Success Rate</div>
                              <div className="font-bold text-green-600">{result.successRate}</div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Specialties (for hospitals) */}
                      {result.type === 'hospital' && result.specialties && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                          <div className="flex flex-wrap gap-2">
                            {result.specialties.map((specialty, index) => (
                              <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Specializations (for doctors) */}
                      {result.type === 'doctor' && result.specializations && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Specializations:</h4>
                          <div className="flex flex-wrap gap-2">
                            {result.specializations.map((spec, index) => (
                              <span key={index} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm">
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Includes */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Package Includes:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {result.includes.map((item, index) => (
                            <div key={index} className="flex items-center text-sm text-gray-600">
                              <Shield className="h-4 w-4 text-green-500 mr-2" />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Price and Actions */}
                    <div className="lg:w-64 lg:text-right">
                      <div className="mb-6">
                        <div className="flex items-baseline justify-end mb-2">
                          <span className="text-sm text-gray-500 line-through mr-2">{result.originalPrice}</span>
                          <span className="text-3xl font-bold text-gray-900">{result.price}</span>
                        </div>
                        <div className="text-sm text-gray-600 mb-1">All-inclusive package</div>
                        <div className="text-lg font-semibold text-green-600">{result.savings}</div>
                      </div>
                      
                      <div className="space-y-3">
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-semibold transition-colors">
                          Get Free Quote
                        </button>
                        <button className="w-full bg-white hover:bg-gray-50 text-gray-800 py-3 px-6 rounded-xl font-semibold border-2 border-gray-200 transition-colors">
                          View Details
                        </button>
                        <button className="w-full bg-green-100 hover:bg-green-200 text-green-800 py-2 px-6 rounded-xl font-medium transition-colors flex items-center justify-center">
                          <Video className="h-4 w-4 mr-2" />
                          Video Consult
                        </button>
                      </div>
                      
                      <div className="mt-4 text-center">
                        <div className="text-xs text-gray-500">💬 Free consultation</div>
                        <div className="text-xs text-gray-500">🛡️ Best price guarantee</div>
                      </div>
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
            Load More Results
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Why Choose Medical Tourism?</h3>
            <p className="text-gray-600">Quality healthcare at affordable prices</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Save 60-80%</h4>
              <p className="text-gray-600 text-sm">Significant cost savings on treatments</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">World-Class Care</h4>
              <p className="text-gray-600 text-sm">JCI accredited hospitals and certified doctors</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Complete Support</h4>
              <p className="text-gray-600 text-sm">Travel, visa, and accommodation assistance</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Personalized Care</h4>
              <p className="text-gray-600 text-sm">Dedicated patient coordinators</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}