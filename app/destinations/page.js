'use client'

import { useState } from 'react'
import { MapPin, Star, Award, Users, Clock, Plane, Shield, TrendingUp, Heart, Globe } from 'lucide-react'

export default function DestinationsPage() {
  const [selectedDestination, setSelectedDestination] = useState(null)

  const destinations = [
    {
      id: 'india',
      name: 'India',
      flag: '🇮🇳',
      tagline: 'Ancient Wisdom, Modern Medicine',
      savings: '85%',
      procedures: '2.5M+',
      hospitals: '200+',
      specialties: ['Cardiac Surgery', 'Orthopedics', 'Cancer Treatment', 'Fertility'],
      topHospitals: ['Apollo Hospitals', 'Fortis Healthcare', 'Max Healthcare'],
      averageCost: '$8,500',
      flightTime: '14-16 hours',
      language: 'English, Hindi',
      currency: 'INR',
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop',
      highlights: [
        'World-renowned cardiac surgeons',
        'NABH & JCI accredited hospitals',
        'Ayurvedic wellness integration',
        'Cost-effective treatments'
      ],
      stats: {
        successRate: '98.2%',
        patientSatisfaction: '96%',
        internationalPatients: '500K+',
        avgStay: '7-14 days'
      }
    },
    {
      id: 'thailand',
      name: 'Thailand',
      flag: '🇹🇭',
      tagline: 'Healing in Paradise',
      savings: '75%',
      procedures: '1.2M+',
      hospitals: '150+',
      specialties: ['Cosmetic Surgery', 'Dental Care', 'Wellness', 'Orthopedics'],
      topHospitals: ['Bumrungrad Hospital', 'Bangkok Hospital', 'Samitivej Hospital'],
      averageCost: '$12,000',
      flightTime: '12-15 hours',
      language: 'English, Thai',
      currency: 'THB',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop',
      highlights: [
        'World-class cosmetic surgery',
        'Luxury hospital amenities',
        'Traditional Thai wellness',
        'Tourist-friendly infrastructure'
      ],
      stats: {
        successRate: '97.8%',
        patientSatisfaction: '98%',
        internationalPatients: '400K+',
        avgStay: '5-10 days'
      }
    },
    {
      id: 'singapore',
      name: 'Singapore',
      flag: '🇸🇬',
      tagline: 'Precision Healthcare Hub',
      savings: '60%',
      procedures: '800K+',
      hospitals: '80+',
      specialties: ['Cancer Treatment', 'Neurology', 'Pediatrics', 'Precision Medicine'],
      topHospitals: ['Mount Elizabeth Hospital', 'Raffles Hospital', 'Gleneagles Hospital'],
      averageCost: '$18,000',
      flightTime: '10-18 hours',
      language: 'English, Mandarin',
      currency: 'SGD',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=600&fit=crop',
      highlights: [
        'Advanced medical technology',
        'Strict quality standards',
        'Multicultural healthcare',
        'Strategic location'
      ],
      stats: {
        successRate: '99.1%',
        patientSatisfaction: '97%',
        internationalPatients: '300K+',
        avgStay: '3-7 days'
      }
    },
    {
      id: 'turkey',
      name: 'Turkey',
      flag: '🇹🇷',
      tagline: 'Bridge Between Continents',
      savings: '70%',
      procedures: '1.5M+',
      hospitals: '120+',
      specialties: ['Hair Transplant', 'Dental Care', 'Eye Surgery', 'Cosmetic Surgery'],
      topHospitals: ['Acibadem Healthcare', 'Memorial Healthcare', 'Medicana Health Group'],
      averageCost: '$6,800',
      flightTime: '8-12 hours',
      language: 'English, Turkish',
      currency: 'TRY',
      image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&h=600&fit=crop',
      highlights: [
        'Leading hair transplant destination',
        'European healthcare standards',
        'Rich cultural experience',
        'Competitive pricing'
      ],
      stats: {
        successRate: '96.5%',
        patientSatisfaction: '95%',
        internationalPatients: '600K+',
        avgStay: '5-8 days'
      }
    }
  ]

  const globalStats = [
    { label: 'Countries', value: '15+', icon: Globe },
    { label: 'Partner Hospitals', value: '500+', icon: Heart },
    { label: 'Patients Treated', value: '2M+', icon: Users },
    { label: 'Success Rate', value: '98%', icon: TrendingUp }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="heading-xl mb-6">
              Global Healthcare
              <span className="block gradient-text">Destinations</span>
            </h1>
            <p className="text-body max-w-3xl mx-auto">
              Discover world-renowned medical destinations offering exceptional care, 
              significant savings, and unforgettable experiences.
            </p>
          </div>

          {/* Global Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {globalStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-soft mb-4">
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

      {/* Destinations Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-8">
            {destinations.map((destination, index) => (
              <div
                key={destination.id}
                className="group cursor-pointer"
                onClick={() => setSelectedDestination(destination)}
              >
                <div className="card card-hover overflow-hidden">
                  {/* Image Header */}
                  <div className="relative h-64 -m-6 mb-6 overflow-hidden rounded-t-3xl">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl">{destination.flag}</span>
                        <span className="badge bg-white/20 backdrop-blur text-white border-white/20">
                          Save up to {destination.savings}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold">{destination.name}</h3>
                      <p className="text-blue-100">{destination.tagline}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    {/* Key Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-gray-50 rounded-2xl">
                        <div className="text-xl font-bold text-blue-600">{destination.procedures}</div>
                        <div className="text-sm text-gray-600">Procedures/Year</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-2xl">
                        <div className="text-xl font-bold text-emerald-600">{destination.hospitals}</div>
                        <div className="text-sm text-gray-600">Partner Hospitals</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-2xl">
                        <div className="text-xl font-bold text-purple-600">{destination.averageCost}</div>
                        <div className="text-sm text-gray-600">Avg. Cost</div>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Top Specialties</h4>
                      <div className="flex flex-wrap gap-2">
                        {destination.specialties.map((specialty, i) => (
                          <span key={i} className="badge badge-blue">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Why Choose {destination.name}</h4>
                      <div className="space-y-2">
                        {destination.highlights.slice(0, 3).map((highlight, i) => (
                          <div key={i} className="flex items-center text-sm text-gray-600">
                            <Shield className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <button className="w-full btn-primary">
                      Explore {destination.name}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destination Modal */}
      {selectedDestination && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="relative h-64 rounded-t-3xl overflow-hidden">
              <img
                src={selectedDestination.image}
                alt={selectedDestination.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl">{selectedDestination.flag}</span>
                  <span className="badge bg-white/20 backdrop-blur text-white">
                    Save up to {selectedDestination.savings}
                  </span>
                </div>
                <h2 className="text-3xl font-bold">{selectedDestination.name}</h2>
                <p className="text-blue-100 text-lg">{selectedDestination.tagline}</p>
              </div>
              <button
                onClick={() => setSelectedDestination(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-8">
              {/* Quick Info */}
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                  <Plane className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">{selectedDestination.flightTime}</div>
                  <div className="text-sm text-gray-600">Flight Time</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                  <Globe className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">{selectedDestination.language}</div>
                  <div className="text-sm text-gray-600">Languages</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                  <Clock className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">{selectedDestination.stats.avgStay}</div>
                  <div className="text-sm text-gray-600">Avg. Stay</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                  <TrendingUp className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">{selectedDestination.stats.successRate}</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>

              {/* Detailed Stats */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Metrics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Success Rate</span>
                      <span className="font-semibold text-emerald-600">{selectedDestination.stats.successRate}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Patient Satisfaction</span>
                      <span className="font-semibold text-blue-600">{selectedDestination.stats.patientSatisfaction}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">International Patients</span>
                      <span className="font-semibold text-purple-600">{selectedDestination.stats.internationalPatients}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Top Hospitals</h3>
                  <div className="space-y-3">
                    {selectedDestination.topHospitals.map((hospital, i) => (
                      <div key={i} className="flex items-center">
                        <Award className="h-4 w-4 text-yellow-500 mr-3" />
                        <span className="text-gray-700">{hospital}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* All Highlights */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose {selectedDestination.name}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedDestination.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center">
                      <Shield className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 btn-primary">
                  Get Free Consultation
                </button>
                <button className="flex-1 btn-secondary">
                  View Treatment Packages
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Why Medical Tourism */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Why Choose Medical Tourism?</h2>
            <p className="text-body max-w-3xl mx-auto">
              Experience world-class healthcare while exploring new cultures and saving significantly on treatment costs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '💰',
                title: 'Significant Savings',
                description: 'Save 60-85% on medical procedures without compromising on quality of care.'
              },
              {
                icon: '🌟',
                title: 'World-Class Care',
                description: 'Access to internationally accredited hospitals and board-certified specialists.'
              },
              {
                icon: '✈️',
                title: 'Complete Support',
                description: 'End-to-end assistance including travel, accommodation, and recovery planning.'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Explore Your Options?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get personalized recommendations based on your medical needs and preferences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 hover:scale-105">
              Find My Destination
            </button>
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 hover:scale-105 border-2 border-blue-500">
              Speak with Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}