'use client'

import { useState } from 'react'
import { Star, MapPin, Calendar, Clock, Video, Shield, Award, Heart, Plane, CheckCircle, Users, Phone, Mail } from 'lucide-react'

export default function PackageDetailsPage({ params }) {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedDate, setSelectedDate] = useState('')

  // Mock package data - in real app, fetch by ID
  const packageData = {
    id: params.id,
    title: 'Complete Heart Surgery Package',
    hospital: 'Apollo Hospitals Chennai',
    location: 'Chennai, India',
    country: 'India',
    flag: '🇮🇳',
    price: '$8,500',
    originalPrice: '$45,000',
    savings: '81% savings',
    rating: 4.9,
    reviews: 234,
    duration: '7-10 days',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=400&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop'
    ],
    doctor: {
      name: 'Dr. Rajesh Kumar',
      specialty: 'Cardiothoracic Surgeon',
      experience: '20+ years',
      education: 'MBBS, MS, MCh (Cardiothoracic Surgery)',
      successRate: '98%',
      surgeries: '2000+',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
      languages: ['English', 'Hindi', 'Tamil']
    },
    hospital_details: {
      accreditation: 'JCI Accredited',
      beds: '1000+',
      established: '1983',
      specialties: ['Cardiology', 'Oncology', 'Neurology', 'Orthopedics'],
      awards: ['Best Hospital in India 2023', 'Excellence in Cardiac Care', 'Patient Safety Award']
    },
    package_includes: [
      'Pre-operative consultations and tests',
      'Heart surgery by expert surgeon',
      'ICU care for 2-3 days',
      'Private room accommodation (5 days)',
      'All medications during hospital stay',
      'Post-operative care and monitoring',
      'Airport pickup and drop-off',
      '5-star hotel accommodation (3 nights)',
      'Visa assistance',
      'Dedicated patient coordinator',
      'Follow-up consultations (3 months)',
      'Medical reports and discharge summary'
    ],
    treatment_process: [
      {
        day: 'Day 1',
        title: 'Arrival & Initial Assessment',
        activities: ['Airport pickup', 'Hotel check-in', 'Initial consultation', 'Pre-operative tests']
      },
      {
        day: 'Day 2',
        title: 'Pre-Surgery Preparation',
        activities: ['Anesthesia consultation', 'Final medical clearance', 'Surgery preparation', 'Family briefing']
      },
      {
        day: 'Day 3',
        title: 'Surgery Day',
        activities: ['Heart surgery procedure', 'ICU monitoring', 'Family updates', 'Post-op care begins']
      },
      {
        day: 'Day 4-6',
        title: 'Recovery & Monitoring',
        activities: ['ICU to room transfer', 'Physiotherapy begins', 'Wound care', 'Progress monitoring']
      },
      {
        day: 'Day 7-8',
        title: 'Discharge Preparation',
        activities: ['Final check-ups', 'Discharge planning', 'Medication guidance', 'Follow-up scheduling']
      },
      {
        day: 'Day 9-10',
        title: 'Departure',
        activities: ['Final consultation', 'Medical reports', 'Airport transfer', 'Travel clearance']
      }
    ],
    testimonials: [
      {
        name: 'John Smith',
        country: 'USA',
        text: 'Excellent care and significant savings. Dr. Kumar is highly skilled and the hospital staff was amazing.',
        rating: 5,
        savings: '$36,500 saved',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face'
      },
      {
        name: 'Emma Wilson',
        country: 'UK',
        text: 'The entire process was smooth and professional. Recovery was faster than expected.',
        rating: 5,
        savings: '$32,000 saved',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face'
      }
    ]
  }

  const tabs = [
    { id: 'overview', name: 'Overview' },
    { id: 'doctor', name: 'Doctor' },
    { id: 'hospital', name: 'Hospital' },
    { id: 'process', name: 'Treatment Process' },
    { id: 'reviews', name: 'Reviews' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
          <div className="relative h-96">
            <img
              src={packageData.image}
              alt={packageData.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{packageData.flag}</span>
                <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm">
                  {packageData.country}
                </span>
                <span className="bg-green-600 px-3 py-1 rounded-full text-sm font-medium">
                  {packageData.savings}
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-2">{packageData.title}</h1>
              <div className="flex items-center gap-4 text-lg">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  {packageData.hospital}
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  {packageData.rating} ({packageData.reviews} reviews)
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm">
              {/* Tabs */}
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  {tabs.map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm ${
                        activeTab === tab.id
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab.name}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Package Overview</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        Our comprehensive heart surgery package at Apollo Hospitals Chennai offers world-class cardiac care 
                        at a fraction of the cost you would pay in Western countries. Led by renowned cardiothoracic surgeon 
                        Dr. Rajesh Kumar, this package includes everything from pre-operative consultations to post-operative 
                        care and follow-up.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">What's Included</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {packageData.package_includes.map((item, index) => (
                          <div key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Hospital Gallery</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {packageData.gallery.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`Hospital view ${index + 1}`}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'doctor' && (
                  <div className="space-y-6">
                    <div className="flex items-start space-x-6">
                      <img
                        src={packageData.doctor.image}
                        alt={packageData.doctor.name}
                        className="w-32 h-32 rounded-2xl object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{packageData.doctor.name}</h3>
                        <p className="text-blue-600 font-semibold text-lg mb-2">{packageData.doctor.specialty}</p>
                        <p className="text-gray-600 mb-4">{packageData.doctor.education}</p>
                        
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center p-4 bg-blue-50 rounded-xl">
                            <div className="text-2xl font-bold text-blue-600">{packageData.doctor.experience}</div>
                            <div className="text-sm text-gray-600">Experience</div>
                          </div>
                          <div className="text-center p-4 bg-green-50 rounded-xl">
                            <div className="text-2xl font-bold text-green-600">{packageData.doctor.successRate}</div>
                            <div className="text-sm text-gray-600">Success Rate</div>
                          </div>
                          <div className="text-center p-4 bg-purple-50 rounded-xl">
                            <div className="text-2xl font-bold text-purple-600">{packageData.doctor.surgeries}</div>
                            <div className="text-sm text-gray-600">Surgeries</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Languages Spoken</h4>
                      <div className="flex gap-2">
                        {packageData.doctor.languages.map((language, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {language}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'hospital' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{packageData.hospital}</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Hospital Details</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Accreditation:</span>
                              <span className="font-medium">{packageData.hospital_details.accreditation}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Beds:</span>
                              <span className="font-medium">{packageData.hospital_details.beds}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Established:</span>
                              <span className="font-medium">{packageData.hospital_details.established}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Specialties</h4>
                          <div className="space-y-2">
                            {packageData.hospital_details.specialties.map((specialty, index) => (
                              <div key={index} className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span className="text-gray-700">{specialty}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Awards & Recognition</h4>
                      <div className="space-y-2">
                        {packageData.hospital_details.awards.map((award, index) => (
                          <div key={index} className="flex items-center">
                            <Award className="h-4 w-4 text-yellow-500 mr-2" />
                            <span className="text-gray-700">{award}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'process' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Treatment Timeline</h3>
                    <div className="space-y-6">
                      {packageData.treatment_process.map((step, index) => (
                        <div key={index} className="flex">
                          <div className="flex-shrink-0 w-24 text-center">
                            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                              <span className="font-bold">{index + 1}</span>
                            </div>
                            <div className="text-sm font-medium text-gray-600">{step.day}</div>
                          </div>
                          <div className="flex-1 ml-6">
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h4>
                            <div className="grid md:grid-cols-2 gap-2">
                              {step.activities.map((activity, i) => (
                                <div key={i} className="flex items-center">
                                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                  <span className="text-gray-700 text-sm">{activity}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-gray-900">Patient Reviews</h3>
                      <div className="flex items-center space-x-2">
                        <Star className="h-5 w-5 text-yellow-400" />
                        <span className="text-lg font-medium">{packageData.rating}</span>
                        <span className="text-gray-600">({packageData.reviews} reviews)</span>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {packageData.testimonials.map((testimonial, index) => (
                        <div key={index} className="border border-gray-200 rounded-xl p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-12 h-12 rounded-full mr-4"
                              />
                              <div>
                                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                <p className="text-gray-600 text-sm">{testimonial.country}</p>
                                <div className="flex mt-1">
                                  {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                              {testimonial.savings}
                            </div>
                          </div>
                          <p className="text-gray-700 leading-relaxed">"{testimonial.text}"</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-8">
              {/* Price */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-lg text-gray-500 line-through mr-3">{packageData.originalPrice}</span>
                  <span className="text-4xl font-bold text-gray-900">{packageData.price}</span>
                </div>
                <div className="text-green-600 font-semibold text-lg">{packageData.savings}</div>
                <div className="text-sm text-gray-600">All-inclusive package</div>
              </div>

              {/* Quick Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">{packageData.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Hospital:</span>
                  <span className="font-medium text-sm">{packageData.hospital_details.accreditation}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Success Rate:</span>
                  <span className="font-medium text-green-600">{packageData.doctor.successRate}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3 mb-6">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-semibold transition-colors">
                  Get Free Quote
                </button>
                <button className="w-full bg-green-100 hover:bg-green-200 text-green-800 py-3 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center">
                  <Video className="h-4 w-4 mr-2" />
                  Video Consultation
                </button>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </button>
              </div>

              {/* Contact Info */}
              <div className="border-t pt-6">
                <h4 className="font-semibold text-gray-900 mb-4">Need Help?</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-blue-600 mr-2" />
                    <span>+1-800-MEDICAL</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-blue-600 mr-2" />
                    <span>support@medicare.com</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-4">
                    💬 24/7 support available<br/>
                    🛡️ Best price guarantee<br/>
                    ✈️ Free travel assistance
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}