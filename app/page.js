'use client'

import { useState } from 'react'
import { Search, Calendar, Shield, Heart, Users, Clock, ArrowRight, Play, CheckCircle, Star, Globe, Plane, Award } from 'lucide-react'

const TABS = [
  { key: 'doctors', label: 'Find Doctors', placeholder: 'Search doctors, specialties...', icon: '👨‍⚕️' },
  { key: 'packages', label: 'Treatment Packages', placeholder: 'Search treatment packages...', icon: '📦' },
  { key: 'hospitals', label: 'Hospitals', placeholder: 'Search hospitals...', icon: '🏥' },
]

const COUNTRIES = [
  { code: 'IN', name: 'India', flag: '🇮🇳', savings: 'Save up to 80%' },
  { code: 'TH', name: 'Thailand', flag: '🇹🇭', savings: 'Save up to 70%' },
  { code: 'SG', name: 'Singapore', flag: '🇸🇬', savings: 'Save up to 60%' },
  { code: 'MY', name: 'Malaysia', flag: '🇲🇾', savings: 'Save up to 75%' },
  { code: 'TR', name: 'Turkey', flag: '🇹🇷', savings: 'Save up to 65%' },
]

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(TABS[0])
  const [query, setQuery] = useState('')
  const [country, setCountry] = useState('')

  const onSearch = () => {
    console.log('search', activeTab.key, query, country)
    // Route to search results
  }

  const popularTreatments = [
    { name: 'Heart Surgery', price: 'From $8,000', savings: '80% savings', flag: '🇮🇳' },
    { name: 'Knee Replacement', price: 'From $5,500', savings: '75% savings', flag: '🇹🇭' },
    { name: 'Cancer Treatment', price: 'From $12,000', savings: '70% savings', flag: '🇸🇬' },
    { name: 'Fertility Treatment', price: 'From $3,500', savings: '65% savings', flag: '🇮🇳' },
    { name: 'Cosmetic Surgery', price: 'From $2,800', savings: '70% savings', flag: '🇹🇷' },
    { name: 'Dental Implants', price: 'From $800', savings: '85% savings', flag: '🇲🇾' }
  ]

  const featuredHospitals = [
    {
      name: 'Apollo Hospitals',
      location: 'Chennai, India',
      rating: 4.9,
      accreditation: 'JCI Accredited',
      specialties: ['Cardiology', 'Oncology', 'Orthopedics'],
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=300&h=200&fit=crop',
      flag: '🇮🇳'
    },
    {
      name: 'Bumrungrad Hospital',
      location: 'Bangkok, Thailand',
      rating: 4.8,
      accreditation: 'JCI Accredited',
      specialties: ['Cosmetic Surgery', 'Fertility', 'Cardiology'],
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=300&h=200&fit=crop',
      flag: '🇹🇭'
    },
    {
      name: 'Mount Elizabeth Hospital',
      location: 'Singapore',
      rating: 4.9,
      accreditation: 'JCI Accredited',
      specialties: ['Cancer Treatment', 'Neurology', 'Pediatrics'],
      image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=300&h=200&fit=crop',
      flag: '🇸🇬'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'USA',
      treatment: 'Heart Surgery in India',
      text: 'Saved $45,000 and received world-class treatment. The entire process was seamless!',
      rating: 5,
      savings: '$45,000 saved',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face'
    },
    {
      name: 'James Wilson',
      location: 'UK',
      treatment: 'Knee Replacement in Thailand',
      text: 'Amazing facilities and caring staff. Recovery was faster than expected.',
      rating: 5,
      savings: '$28,000 saved',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face'
    },
    {
      name: 'Maria Garcia',
      location: 'Spain',
      treatment: 'Fertility Treatment in Singapore',
      text: 'Professional care and successful treatment. Highly recommend!',
      rating: 5,
      savings: '$15,000 saved',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Enhanced Search */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full flex items-center text-sm font-medium">
              <Heart className="h-4 w-4 mr-2" />
              Trusted by <strong className="ml-1">50K+</strong> patients
            </div>
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full flex items-center text-sm font-medium">
              <Globe className="h-4 w-4 mr-2" />
              <strong>200+</strong> Partner hospitals
            </div>
            <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full flex items-center text-sm font-medium">
              <Award className="h-4 w-4 mr-2" />
              <strong>95%</strong> Success rate
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              World-Class Healthcare
              <span className="block text-yellow-300">At Affordable Prices</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Connect with top doctors and hospitals globally. Save up to 80% on medical treatments with our trusted international healthcare network.
            </p>
            
            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-blue-500/30 backdrop-blur px-6 py-3 rounded-xl flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span className="font-medium">JCI Accredited Hospitals</span>
              </div>
              <div className="bg-blue-500/30 backdrop-blur px-6 py-3 rounded-xl flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span className="font-medium">Board Certified Doctors</span>
              </div>
              <div className="bg-blue-500/30 backdrop-blur px-6 py-3 rounded-xl flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span className="font-medium">Complete Travel Support</span>
              </div>
            </div>
          </div>

          {/* Enhanced Search Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-gray-800 max-w-5xl mx-auto">
            {/* Search Tabs */}
            <div className="flex flex-wrap gap-3 mb-6">
              {TABS.map(tab => (
                <button
                  key={tab.key}
                  onClick={() => {
                    setActiveTab(tab)
                    setQuery('')
                  }}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2 ${
                    activeTab.key === tab.key
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                  }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Inputs */}
            <div className="grid md:grid-cols-12 gap-4 mb-6">
              <div className="md:col-span-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What are you looking for?
                </label>
                <div className="relative">
                  <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                  <input
                    placeholder={activeTab.placeholder}
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  />
                </div>
              </div>
              
              <div className="md:col-span-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Country
                </label>
                <select
                  value={country}
                  onChange={e => setCountry(e.target.value)}
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg bg-white"
                >
                  <option value="">Select Country</option>
                  {COUNTRIES.map(c => (
                    <option key={c.code} value={c.code}>
                      {c.flag} {c.name} - {c.savings}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  &nbsp;
                </label>
                <button
                  onClick={onSearch}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Search
                </button>
              </div>
            </div>

            {/* Popular Searches */}
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-3">Popular treatments:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {['Heart Surgery', 'Knee Replacement', 'Cancer Treatment', 'Fertility', 'Cosmetic Surgery', 'Dental Implants'].map(treatment => (
                  <button
                    key={treatment}
                    onClick={() => setQuery(treatment)}
                    className="px-4 py-2 bg-gray-100 hover:bg-blue-50 text-gray-700 hover:text-blue-600 rounded-full text-sm transition-colors"
                  >
                    {treatment}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Treatment Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Treatment Packages</h2>
            <p className="text-xl text-gray-600">Save significantly on world-class medical treatments</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularTreatments.map((treatment, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{treatment.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{treatment.flag}</span>
                      <span className="text-sm text-gray-600">Multiple locations available</span>
                    </div>
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {treatment.savings}
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-3xl font-bold text-blue-600 mb-1">{treatment.price}</div>
                  <div className="text-sm text-gray-500">All-inclusive package</div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    JCI Accredited hospitals
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Board certified surgeons
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Travel & accommodation
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-colors">
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Hospitals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Partner Hospitals</h2>
            <p className="text-xl text-gray-600">World-renowned healthcare institutions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredHospitals.map((hospital, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={hospital.image}
                    alt={hospital.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2">
                    <span className="text-2xl">{hospital.flag}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{hospital.name}</h3>
                      <p className="text-gray-600">{hospital.location}</p>
                    </div>
                    <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-lg">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="font-medium text-yellow-800">{hospital.rating}</span>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                    {hospital.accreditation}
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-2">
                      {hospital.specialties.map((specialty, i) => (
                        <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-colors">
                    View Hospital
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Success Stories */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Patient Success Stories</h2>
            <p className="text-xl text-gray-600">Real experiences from our global patients</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.location}</p>
                      <p className="text-blue-600 text-sm font-medium">{testimonial.treatment}</p>
                    </div>
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.savings}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Medical Tourism Works</h2>
            <p className="text-xl text-gray-600">Your journey to affordable healthcare in 4 simple steps</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Consultation',
                description: 'Share your medical needs and get personalized treatment recommendations',
                icon: '💬'
              },
              {
                step: '2',
                title: 'Planning',
                description: 'We arrange everything - hospital, doctor, travel, and accommodation',
                icon: '📋'
              },
              {
                step: '3',
                title: 'Treatment',
                description: 'Receive world-class treatment at our partner hospitals',
                icon: '🏥'
              },
              {
                step: '4',
                title: 'Recovery',
                description: 'Follow-up care and support throughout your recovery journey',
                icon: '❤️'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Healthcare Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free consultation and personalized treatment plan today
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-xl text-lg transition-colors flex items-center justify-center">
              <Calendar className="h-5 w-5 mr-2" />
              Free Consultation
            </button>
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-colors border-2 border-blue-500 flex items-center justify-center">
              <Plane className="h-5 w-5 mr-2" />
              Plan My Treatment
            </button>
          </div>
          
          <p className="text-blue-100 text-sm mt-6">
            💬 24/7 support • 🌍 Global network • 💰 Best price guarantee
          </p>
        </div>
      </section>
    </div>
  )
}