'use client'

import { useState, useEffect } from 'react'
import { Search, ArrowRight, Play, CheckCircle, Star, Globe, Shield, Zap, Users, TrendingUp, Clock, Award } from 'lucide-react'

const SEARCH_CATEGORIES = [
  { key: 'treatments', label: 'Treatments', icon: '🏥', placeholder: 'Search treatments, procedures...' },
  { key: 'doctors', label: 'Specialists', icon: '👨‍⚕️', placeholder: 'Find specialist doctors...' },
  { key: 'hospitals', label: 'Hospitals', icon: '🌟', placeholder: 'Discover top hospitals...' },
]

const DESTINATIONS = [
  { code: 'IN', name: 'India', savings: '85%', procedures: '2.5M+', flag: '🇮🇳' },
  { code: 'TH', name: 'Thailand', savings: '75%', procedures: '1.2M+', flag: '🇹🇭' },
  { code: 'SG', name: 'Singapore', savings: '60%', procedures: '800K+', flag: '🇸🇬' },
  { code: 'TR', name: 'Turkey', savings: '70%', procedures: '1.5M+', flag: '🇹🇷' },
]

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState(SEARCH_CATEGORIES[0])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDestination, setSelectedDestination] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSearch = () => {
    console.log('Search:', { category: activeCategory.key, query: searchQuery, destination: selectedDestination })
  }

  const featuredTreatments = [
    {
      name: 'Cardiac Surgery',
      startingPrice: '$8,500',
      savings: '85%',
      duration: '7-10 days',
      destinations: ['🇮🇳', '🇹🇭'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop'
    },
    {
      name: 'Orthopedic Surgery',
      startingPrice: '$5,200',
      savings: '78%',
      duration: '5-8 days',
      destinations: ['🇹🇭', '🇹🇷'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop'
    },
    {
      name: 'Cancer Treatment',
      startingPrice: '$12,000',
      savings: '70%',
      duration: '14-21 days',
      destinations: ['🇸🇬', '🇮🇳'],
      image: 'https://images.unsplash.com/photo-1582560469781-1965b9af903d?w=400&h=300&fit=crop'
    },
    {
      name: 'Fertility Treatment',
      startingPrice: '$3,800',
      savings: '75%',
      duration: '3-4 weeks',
      destinations: ['🇮🇳', '🇹🇷'],
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop'
    }
  ]

  const stats = [
    { value: '500K+', label: 'Patients Treated', icon: Users },
    { value: '98.5%', label: 'Success Rate', icon: TrendingUp },
    { value: '200+', label: 'Partner Hospitals', icon: Globe },
    { value: '24/7', label: 'Support Available', icon: Clock }
  ]

  const testimonials = [
    {
      name: 'Sarah Chen',
      location: 'San Francisco, USA',
      treatment: 'Heart Surgery',
      savings: '$42,000',
      text: 'Exceptional care at a fraction of the cost. The entire process was seamless and professional.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face'
    },
    {
      name: 'James Wilson',
      location: 'London, UK',
      treatment: 'Knee Replacement',
      savings: '$35,000',
      text: 'World-class treatment with incredible savings. Highly recommend this platform.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          {/* Trust Badge */}
          <div className={`flex justify-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3 shadow-sm">
              <Shield className="h-4 w-4 text-emerald-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">Trusted by 500K+ patients worldwide</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Healthcare
              <span className="block bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Without Borders
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Access world-class medical treatments at up to 85% savings. 
              <br className="hidden md:block" />
              Professional care, transparent pricing, seamless experience.
            </p>
          </div>

          {/* Search Interface */}
          <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2 mb-8 justify-center">
                {SEARCH_CATEGORIES.map(category => (
                  <button
                    key={category.key}
                    onClick={() => setActiveCategory(category)}
                    className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                      activeCategory.key === category.key
                        ? 'bg-blue-600 text-white shadow-lg scale-105'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="text-lg">{category.icon}</span>
                    {category.label}
                  </button>
                ))}
              </div>

              {/* Search Form */}
              <div className="grid md:grid-cols-12 gap-4">
                <div className="md:col-span-6">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder={activeCategory.placeholder}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg bg-gray-50 focus:bg-white transition-colors"
                    />
                  </div>
                </div>
                
                <div className="md:col-span-4">
                  <select
                    value={selectedDestination}
                    onChange={(e) => setSelectedDestination(e.target.value)}
                    className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg bg-gray-50 focus:bg-white transition-colors"
                  >
                    <option value="">Select Destination</option>
                    {DESTINATIONS.map(dest => (
                      <option key={dest.code} value={dest.code}>
                        {dest.flag} {dest.name} - Save {dest.savings}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <button
                    onClick={handleSearch}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Search
                  </button>
                </div>
              </div>

              {/* Quick Suggestions */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500 mb-3">Popular searches:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {['Heart Surgery', 'Knee Replacement', 'IVF Treatment', 'Dental Implants', 'Cancer Care'].map(term => (
                    <button
                      key={term}
                      onClick={() => setSearchQuery(term)}
                      className="px-4 py-2 bg-gray-100 hover:bg-blue-50 text-gray-700 hover:text-blue-600 rounded-full text-sm transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl mb-4 group-hover:bg-blue-100 transition-colors">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Treatments */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Treatments</h2>
            <p className="text-xl text-gray-600">World-class procedures at transparent prices</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredTreatments.map((treatment, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={treatment.image}
                      alt={treatment.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Save {treatment.savings}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{treatment.name}</h3>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-bold text-blue-600">{treatment.startingPrice}</span>
                      <span className="text-sm text-gray-500">{treatment.duration}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-1">
                        {treatment.destinations.map((flag, i) => (
                          <span key={i} className="text-lg">{flag}</span>
                        ))}
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Top Destinations</h2>
            <p className="text-xl text-gray-600">Discover world-renowned healthcare hubs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DESTINATIONS.map((destination, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 hover:from-blue-50 hover:to-emerald-50 transition-all duration-500 hover:scale-105">
                  <div className="text-center">
                    <div className="text-4xl mb-4">{destination.flag}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.name}</h3>
                    <div className="text-3xl font-bold text-emerald-600 mb-1">Save {destination.savings}</div>
                    <div className="text-sm text-gray-600">{destination.procedures} procedures annually</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Patient Stories</h2>
            <p className="text-xl text-gray-600">Real experiences, real savings</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-6">"{testimonial.text}"</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.location}</div>
                      <div className="text-blue-600 text-sm font-medium">{testimonial.treatment}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-emerald-600 font-bold text-lg">{testimonial.savings}</div>
                    <div className="text-gray-500 text-sm">saved</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Your journey to affordable healthcare in 3 steps</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: '01',
                title: 'Consult',
                description: 'Share your medical needs and get personalized treatment recommendations from our experts.',
                icon: '💬'
              },
              {
                step: '02',
                title: 'Plan',
                description: 'We handle everything - from hospital selection to travel arrangements and visa assistance.',
                icon: '📋'
              },
              {
                step: '03',
                title: 'Heal',
                description: 'Receive world-class treatment with dedicated support throughout your recovery journey.',
                icon: '❤️'
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Get a free consultation and personalized treatment plan today
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 hover:scale-105 shadow-lg">
              Get Free Consultation
            </button>
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 hover:scale-105 border-2 border-blue-500 flex items-center justify-center">
              <Play className="h-5 w-5 mr-2" />
              Watch How It Works
            </button>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-8 text-blue-100 text-sm">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              Free consultation
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              No hidden fees
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              24/7 support
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}