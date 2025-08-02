'use client'

import { useState } from 'react'
import { MessageCircle, Video, Phone, Clock, Star, Shield, Heart, Zap, Users } from 'lucide-react'

export default function InstantConsultPage() {
  const [selectedSymptom, setSelectedSymptom] = useState('')
  const [consultationType, setConsultationType] = useState('chat')

  const availableDoctors = [
    {
      id: 1,
      name: 'Dr. Amit Sharma',
      specialty: 'General Medicine',
      rating: 4.9,
      experience: 12,
      responseTime: '2 min',
      consultationFee: 299,
      status: 'online',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop&crop=face',
      languages: ['English', 'Hindi'],
      consultationsToday: 23
    },
    {
      id: 2,
      name: 'Dr. Priya Patel',
      specialty: 'Pediatrics',
      rating: 4.8,
      experience: 8,
      responseTime: '1 min',
      consultationFee: 399,
      status: 'online',
      image: 'https://images.unsplash.com/photo-1594824475317-d3b9b4b8b1b1?w=80&h=80&fit=crop&crop=face',
      languages: ['English', 'Hindi', 'Gujarati'],
      consultationsToday: 18
    },
    {
      id: 3,
      name: 'Dr. Rajesh Kumar',
      specialty: 'Dermatology',
      rating: 4.7,
      experience: 15,
      responseTime: '3 min',
      consultationFee: 499,
      status: 'busy',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=80&h=80&fit=crop&crop=face',
      languages: ['English', 'Hindi'],
      consultationsToday: 31
    }
  ]

  const commonSymptoms = [
    { name: 'Fever', icon: '🤒', category: 'General' },
    { name: 'Headache', icon: '😵', category: 'General' },
    { name: 'Cough & Cold', icon: '🤧', category: 'Respiratory' },
    { name: 'Stomach Pain', icon: '🤢', category: 'Digestive' },
    { name: 'Skin Issues', icon: '🧴', category: 'Dermatology' },
    { name: 'Anxiety', icon: '😰', category: 'Mental Health' },
    { name: 'Back Pain', icon: '🦴', category: 'Orthopedic' },
    { name: 'Eye Problems', icon: '👁️', category: 'Ophthalmology' }
  ]

  const consultationTypes = [
    {
      id: 'chat',
      name: 'Chat Consultation',
      icon: MessageCircle,
      description: 'Text-based consultation with instant responses',
      duration: '15-20 min',
      price: 'From ₹299'
    },
    {
      id: 'video',
      name: 'Video Call',
      icon: Video,
      description: 'Face-to-face consultation via video call',
      duration: '15-20 min',
      price: 'From ₹499'
    },
    {
      id: 'audio',
      name: 'Voice Call',
      icon: Phone,
      description: 'Audio consultation for quick medical advice',
      duration: '10-15 min',
      price: 'From ₹399'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4 mr-2" />
            Get instant medical advice
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Talk to a Doctor
            <span className="text-blue-600"> Right Now</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Connect with qualified doctors instantly. Get medical advice, prescriptions, and peace of mind in minutes.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2 text-green-500" />
              <span>Avg. response: 2 min</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-2 text-blue-500" />
              <span>50+ doctors online</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-2 text-purple-500" />
              <span>100% secure & private</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Consultation Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Start Your Consultation</h2>
              
              {/* Step 1: Choose Consultation Type */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose consultation type</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {consultationTypes.map(type => {
                    const Icon = type.icon
                    return (
                      <button
                        key={type.id}
                        onClick={() => setConsultationType(type.id)}
                        className={`p-6 border-2 rounded-xl text-left transition-all ${
                          consultationType === type.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <Icon className={`h-8 w-8 mb-3 ${
                          consultationType === type.id ? 'text-blue-600' : 'text-gray-600'
                        }`} />
                        <h4 className="font-semibold text-gray-900 mb-2">{type.name}</h4>
                        <p className="text-sm text-gray-600 mb-3">{type.description}</p>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500">{type.duration}</span>
                          <span className="font-semibold text-blue-600">{type.price}</span>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Step 2: Describe Symptoms */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What brings you here today?</h3>
                
                {/* Common Symptoms */}
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-3">Select a common symptom or describe below:</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {commonSymptoms.map(symptom => (
                      <button
                        key={symptom.name}
                        onClick={() => setSelectedSymptom(symptom.name)}
                        className={`p-4 border rounded-xl text-center transition-all ${
                          selectedSymptom === symptom.name
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="text-2xl mb-2">{symptom.icon}</div>
                        <div className="text-sm font-medium text-gray-900">{symptom.name}</div>
                        <div className="text-xs text-gray-500">{symptom.category}</div>
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Detailed Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Describe your symptoms in detail
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please describe your symptoms, when they started, severity, and any other relevant details..."
                  />
                </div>
              </div>

              {/* Step 3: Patient Information */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Patient information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                    <input
                      type="number"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="25"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Select gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Connect Button */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center">
                <MessageCircle className="h-5 w-5 mr-2" />
                Connect with Doctor Now
              </button>
              
              <p className="text-center text-sm text-gray-500 mt-4">
                You'll be connected with the next available doctor
              </p>
            </div>
          </div>

          {/* Available Doctors Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Doctors Available Now</h3>
              
              <div className="space-y-4">
                {availableDoctors.map(doctor => (
                  <div key={doctor.id} className="border border-gray-200 rounded-xl p-4">
                    <div className="flex items-start space-x-3">
                      <div className="relative">
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                          doctor.status === 'online' ? 'bg-green-500' : 'bg-orange-500'
                        }`}></div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 text-sm">{doctor.name}</h4>
                        <p className="text-blue-600 text-xs">{doctor.specialty}</p>
                        
                        <div className="flex items-center mt-1">
                          <Star className="h-3 w-3 text-yellow-400 mr-1" />
                          <span className="text-xs text-gray-600">{doctor.rating} • {doctor.experience}y exp</span>
                        </div>
                        
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center text-xs text-gray-500">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{doctor.responseTime}</span>
                          </div>
                          <span className="text-sm font-semibold text-gray-900">₹{doctor.consultationFee}</span>
                        </div>
                        
                        <div className="text-xs text-gray-500 mt-1">
                          {doctor.consultationsToday} consultations today
                        </div>
                      </div>
                    </div>
                    
                    <button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                      Connect Now
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
                <div className="flex items-center text-green-800 mb-2">
                  <Heart className="h-4 w-4 mr-2" />
                  <span className="font-semibold text-sm">Why choose instant consult?</span>
                </div>
                <ul className="text-xs text-green-700 space-y-1">
                  <li>• Get medical advice in minutes</li>
                  <li>• No waiting in queues</li>
                  <li>• Digital prescription included</li>
                  <li>• Follow-up support available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Get medical help in 3 simple steps</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Describe Symptoms</h3>
              <p className="text-gray-600">Tell us about your health concern and symptoms</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Connect with Doctor</h3>
              <p className="text-gray-600">Get matched with a qualified doctor instantly</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Treatment</h3>
              <p className="text-gray-600">Receive medical advice and digital prescription</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}