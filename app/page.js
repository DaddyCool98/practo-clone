'use client'

import { Search, Calendar, Shield, Heart, Users, Clock, ArrowRight, Play, CheckCircle } from 'lucide-react'

export default function HomePage() {
  const healthServices = [
    { 
      name: 'Instant Consultation', 
      icon: '💬', 
      description: 'Chat with doctors in minutes',
      color: 'bg-blue-50 border-blue-200',
      textColor: 'text-blue-700'
    },
    { 
      name: 'Book Appointment', 
      icon: '📅', 
      description: 'Schedule with top specialists',
      color: 'bg-green-50 border-green-200',
      textColor: 'text-green-700'
    },
    { 
      name: 'Health Checkup', 
      icon: '🩺', 
      description: 'Comprehensive health packages',
      color: 'bg-purple-50 border-purple-200',
      textColor: 'text-purple-700'
    },
    { 
      name: 'Medicine Delivery', 
      icon: '💊', 
      description: 'Order medicines online',
      color: 'bg-orange-50 border-orange-200',
      textColor: 'text-orange-700'
    }
  ]

  const specialties = [
    { name: 'General Medicine', icon: '🩺', available: 'Available now' },
    { name: 'Pediatrics', icon: '👶', available: '5 min wait' },
    { name: 'Dermatology', icon: '✨', available: 'Available now' },
    { name: 'Cardiology', icon: '❤️', available: '10 min wait' },
    { name: 'Orthopedics', icon: '🦴', available: 'Available now' },
    { name: 'Gynecology', icon: '👩‍⚕️', available: '3 min wait' }
  ]

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      text: 'Found the perfect doctor for my child. The booking process was so simple!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Delhi',
      text: 'Video consultation saved me hours. Great experience with Dr. Patel.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face'
    },
    {
      name: 'Anita Singh',
      location: 'Bangalore',
      text: 'The health records feature is amazing. Everything in one place!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Heart className="h-4 w-4 mr-2" />
                Trusted by 1M+ patients
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Health,
                <span className="text-blue-600"> Simplified</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connect with verified doctors, book appointments instantly, and manage your health journey with ease. Healthcare made simple and accessible.
              </p>
              
              {/* Quick Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
                  <Calendar className="h-5 w-5 mr-2 inline" />
                  Book Appointment
                </button>
                <button className="bg-white hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 transition-all">
                  <Play className="h-5 w-5 mr-2 inline" />
                  Watch Demo
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Verified Doctors</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Secure & Private</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Your Doctor</h3>
                
                <div className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search doctors, symptoms, or conditions..."
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                    />
                  </div>
                  
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Your location"
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                    />
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold text-lg transition-colors">
                    Search Doctors
                  </button>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-600 mb-3">Popular searches:</p>
                  <div className="flex flex-wrap gap-2">
                    {['Fever', 'Skin problems', 'Pregnancy', 'Mental health'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 cursor-pointer">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Healthcare Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From instant consultations to medicine delivery, we've got all your health needs covered
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthServices.map((service, index) => (
              <div key={index} className={`${service.color} border-2 rounded-2xl p-8 hover:shadow-lg transition-all cursor-pointer group`}>
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className={`text-xl font-bold ${service.textColor} mb-2`}>{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className={`flex items-center ${service.textColor} font-medium group-hover:translate-x-1 transition-transform`}>
                  <span>Get started</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instant Consultation */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Talk to a Doctor in Minutes
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Get instant medical advice from qualified doctors. Available 24/7 for urgent consultations.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {specialties.map((specialty, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{specialty.icon}</span>
                      <div>
                        <h4 className="text-white font-medium">{specialty.name}</h4>
                        <p className="text-blue-200 text-sm">{specialty.available}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold text-lg transition-colors">
                Start Consultation Now
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=60&h=60&fit=crop&crop=face"
                    alt="Doctor"
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Dr. Sarah Johnson</h4>
                    <p className="text-gray-600">General Medicine</p>
                    <div className="flex items-center mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-sm text-green-600">Available now</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-gray-700">Hi! How can I help you today?</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 ml-8">
                    <p className="text-gray-700">I have been having headaches...</p>
                  </div>
                </div>
                
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Response time: 2 min</span>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Patients Trust Us</h2>
            <p className="text-xl text-gray-600">Healthcare that puts you first</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">100% Secure</h3>
              <p className="text-gray-600 leading-relaxed">
                Your health data is encrypted and protected with bank-level security. HIPAA compliant platform.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Verified Doctors</h3>
              <p className="text-gray-600 leading-relaxed">
                All doctors are verified with proper credentials and licenses. Only the best healthcare professionals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Available</h3>
              <p className="text-gray-600 leading-relaxed">
                Round-the-clock medical support. Emergency consultations available anytime, anywhere.
              </p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1M+</div>
              <div className="text-gray-600">Happy Patients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">5000+</div>
              <div className="text-gray-600">Verified Doctors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Specialties</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
            <p className="text-xl text-gray-600">Real stories from real people</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-400">⭐</div>
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join millions of patients who trust us for their healthcare needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-xl text-lg transition-colors">
              Find a Doctor
            </button>
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-colors border-2 border-blue-500">
              Download App
            </button>
          </div>
          
          <p className="text-blue-100 text-sm mt-6">
            Available on iOS and Android • Free to download
          </p>
        </div>
      </section>
    </div>
  )
}