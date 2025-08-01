'use client'

import { useState } from 'react'
import { Star, MapPin, Calendar, Clock, Award, Users, ThumbsUp, MessageCircle } from 'lucide-react'

export default function DoctorProfilePage({ params }) {
  const [activeTab, setActiveTab] = useState('overview')

  // Mock doctor data - in real app, fetch by ID
  const doctor = {
    id: params.id,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    qualification: 'MBBS, MD Cardiology, Fellowship in Interventional Cardiology',
    experience: 15,
    rating: 4.9,
    reviews: 234,
    consultationFee: 800,
    hospital: 'Apollo Hospital',
    location: 'Mumbai',
    languages: ['English', 'Hindi', 'Marathi'],
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face',
    about: 'Dr. Sarah Johnson is a highly experienced cardiologist with over 15 years of practice. She specializes in interventional cardiology and has performed over 2000 successful procedures. She is known for her patient-centric approach and excellent bedside manner.',
    education: [
      { degree: 'MBBS', institution: 'All India Institute of Medical Sciences (AIIMS), Delhi', year: '2006' },
      { degree: 'MD Cardiology', institution: 'Post Graduate Institute of Medical Education and Research, Chandigarh', year: '2010' },
      { degree: 'Fellowship in Interventional Cardiology', institution: 'Cleveland Clinic, USA', year: '2012' }
    ],
    experience_details: [
      { position: 'Senior Consultant Cardiologist', hospital: 'Apollo Hospital, Mumbai', duration: '2015 - Present' },
      { position: 'Consultant Cardiologist', hospital: 'Fortis Hospital, Mumbai', duration: '2012 - 2015' },
      { position: 'Resident Doctor', hospital: 'PGIMER, Chandigarh', duration: '2008 - 2012' }
    ],
    awards: [
      'Best Cardiologist Award - Mumbai Medical Association (2022)',
      'Excellence in Patient Care - Apollo Hospitals (2020)',
      'Young Achiever Award - Indian Medical Association (2018)'
    ],
    services: [
      'Cardiac Consultation',
      'ECG & Echo Interpretation',
      'Angiography',
      'Angioplasty',
      'Pacemaker Implantation',
      'Cardiac Rehabilitation'
    ]
  }

  const reviews = [
    {
      id: 1,
      patient: 'Rajesh Kumar',
      rating: 5,
      date: '2024-07-25',
      comment: 'Excellent doctor! Very thorough examination and clear explanation of the condition. Highly recommended.',
      helpful: 12
    },
    {
      id: 2,
      patient: 'Priya Sharma',
      rating: 5,
      date: '2024-07-20',
      comment: 'Dr. Johnson is very professional and caring. She took time to answer all my questions and concerns.',
      helpful: 8
    },
    {
      id: 3,
      patient: 'Amit Patel',
      rating: 4,
      date: '2024-07-15',
      comment: 'Good experience overall. The doctor was knowledgeable and the treatment was effective.',
      helpful: 5
    }
  ]

  const availableSlots = [
    { date: '2024-08-02', slots: ['9:00 AM', '10:30 AM', '2:00 PM', '4:30 PM'] },
    { date: '2024-08-03', slots: ['9:30 AM', '11:00 AM', '3:00 PM'] },
    { date: '2024-08-05', slots: ['10:00 AM', '11:30 AM', '2:30 PM', '4:00 PM'] }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Doctor Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
            <div className="flex items-start space-x-6 mb-6 lg:mb-0">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-32 h-32 rounded-lg object-cover"
              />
              
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{doctor.name}</h1>
                <p className="text-xl text-primary-600 font-medium mb-2">{doctor.specialty}</p>
                <p className="text-gray-600 mb-4">{doctor.qualification}</p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-1" />
                    <span>{doctor.experience} years experience</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span>{doctor.rating} ({doctor.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{doctor.hospital}, {doctor.location}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {doctor.languages.map(language => (
                    <span key={language} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:text-right">
              <div className="mb-4">
                <p className="text-3xl font-bold text-gray-900">₹{doctor.consultationFee}</p>
                <p className="text-sm text-gray-600">Consultation fee</p>
              </div>
              
              <div className="space-y-3">
                <button className="btn-primary w-full lg:w-auto px-8">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Appointment
                </button>
                <button className="btn-secondary w-full lg:w-auto px-8">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chat with Doctor
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              {/* Tabs */}
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  {[
                    { id: 'overview', name: 'Overview' },
                    { id: 'experience', name: 'Experience' },
                    { id: 'reviews', name: 'Reviews' },
                    { id: 'availability', name: 'Availability' }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm ${
                        activeTab === tab.id
                          ? 'border-primary-500 text-primary-600'
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
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">About</h3>
                      <p className="text-gray-600 leading-relaxed">{doctor.about}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Services</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {doctor.services.map(service => (
                          <div key={service} className="flex items-center">
                            <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                            <span className="text-gray-600">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Awards & Recognition</h3>
                      <div className="space-y-2">
                        {doctor.awards.map((award, index) => (
                          <div key={index} className="flex items-start">
                            <Award className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                            <span className="text-gray-600">{award}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'experience' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Education</h3>
                      <div className="space-y-4">
                        {doctor.education.map((edu, index) => (
                          <div key={index} className="border-l-4 border-primary-200 pl-4">
                            <h4 className="font-medium text-gray-900">{edu.degree}</h4>
                            <p className="text-gray-600">{edu.institution}</p>
                            <p className="text-sm text-gray-500">{edu.year}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Professional Experience</h3>
                      <div className="space-y-4">
                        {doctor.experience_details.map((exp, index) => (
                          <div key={index} className="border-l-4 border-medical-200 pl-4">
                            <h4 className="font-medium text-gray-900">{exp.position}</h4>
                            <p className="text-gray-600">{exp.hospital}</p>
                            <p className="text-sm text-gray-500">{exp.duration}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">Patient Reviews</h3>
                      <div className="flex items-center space-x-2">
                        <Star className="h-5 w-5 text-yellow-400" />
                        <span className="text-lg font-medium">{doctor.rating}</span>
                        <span className="text-gray-600">({doctor.reviews} reviews)</span>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {reviews.map(review => (
                        <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-medium text-gray-900">{review.patient}</h4>
                              <div className="flex items-center space-x-2 mt-1">
                                <div className="flex">
                                  {[1, 2, 3, 4, 5].map(star => (
                                    <Star
                                      key={star}
                                      className={`h-4 w-4 ${
                                        star <= review.rating
                                          ? 'text-yellow-400 fill-current'
                                          : 'text-gray-300'
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-sm text-gray-500">
                                  {new Date(review.date).toLocaleDateString()}
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-gray-600 mb-3">{review.comment}</p>
                          
                          <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            Helpful ({review.helpful})
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'availability' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900">Available Slots</h3>
                    
                    <div className="space-y-6">
                      {availableSlots.map(day => (
                        <div key={day.date} className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-900 mb-3">
                            {new Date(day.date).toLocaleDateString('en-US', { 
                              weekday: 'long', 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </h4>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {day.slots.map(slot => (
                              <button
                                key={slot}
                                className="p-3 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors text-sm"
                              >
                                <Clock className="h-4 w-4 mx-auto mb-1" />
                                {slot}
                              </button>
                            ))}
                          </div>
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
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-primary-600 mr-2" />
                      <span className="text-gray-600">Patients Treated</span>
                    </div>
                    <span className="font-medium">5000+</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Award className="h-5 w-5 text-primary-600 mr-2" />
                      <span className="text-gray-600">Success Rate</span>
                    </div>
                    <span className="font-medium">98%</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-primary-600 mr-2" />
                      <span className="text-gray-600">Avg. Wait Time</span>
                    </div>
                    <span className="font-medium">15 mins</span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-600">Hospital</p>
                    <p className="font-medium">{doctor.hospital}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Location</p>
                    <p className="font-medium">{doctor.location}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Languages</p>
                    <p className="font-medium">{doctor.languages.join(', ')}</p>
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