'use client'

import { useState } from 'react'
import { Heart, Globe, Shield, Users, Award, TrendingUp, Clock, CheckCircle, Star, ArrowRight } from 'lucide-react'

export default function AboutPage() {
  const [activeValue, setActiveValue] = useState(0)

  const values = [
    {
      icon: Heart,
      title: 'Patient-First Approach',
      description: 'Every decision we make is guided by what\'s best for our patients. Your health, safety, and satisfaction are our top priorities.',
      color: 'text-red-500',
      bgColor: 'bg-red-50'
    },
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'We believe in complete transparency in pricing, procedures, and outcomes. No hidden costs, no surprises.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Globe,
      title: 'Global Excellence',
      description: 'We partner only with internationally accredited hospitals and board-certified specialists worldwide.',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-50'
    },
    {
      icon: Users,
      title: 'Personalized Care',
      description: 'Every patient journey is unique. We provide personalized support from consultation to recovery.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    }
  ]

  const stats = [
    { value: '500K+', label: 'Patients Treated', icon: Users },
    { value: '98.5%', label: 'Success Rate', icon: TrendingUp },
    { value: '15+', label: 'Countries', icon: Globe },
    { value: '500+', label: 'Partner Hospitals', icon: Heart },
    { value: '24/7', label: 'Support Available', icon: Clock },
    { value: '85%', label: 'Average Savings', icon: Award }
  ]

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Medical Officer',
      bio: 'Former Johns Hopkins surgeon with 20+ years in international healthcare.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face',
      credentials: 'MD, PhD, FACS'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CEO & Founder',
      bio: 'Healthcare entrepreneur passionate about making quality care accessible globally.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      credentials: 'MBA, Healthcare Innovation'
    },
    {
      name: 'Dr. Priya Patel',
      role: 'Head of Quality Assurance',
      bio: 'International healthcare quality expert ensuring the highest standards.',
      image: 'https://images.unsplash.com/photo-1594824475317-d3b9b4b8b1b1?w=300&h=300&fit=crop&crop=face',
      credentials: 'MD, MPH, Quality Management'
    }
  ]

  const milestones = [
    {
      year: '2018',
      title: 'Foundation',
      description: 'HealthBridge was founded with a mission to democratize global healthcare access.'
    },
    {
      year: '2019',
      title: 'First Partnerships',
      description: 'Established partnerships with leading hospitals in India and Thailand.'
    },
    {
      year: '2020',
      title: 'Digital Innovation',
      description: 'Launched our digital platform connecting patients with global healthcare providers.'
    },
    {
      year: '2021',
      title: 'Expansion',
      description: 'Expanded to 10+ countries with 200+ partner hospitals.'
    },
    {
      year: '2022',
      title: 'Recognition',
      description: 'Received international recognition for healthcare innovation and patient safety.'
    },
    {
      year: '2023',
      title: 'Milestone',
      description: 'Reached 500,000 patients treated with 98.5% success rate.'
    },
    {
      year: '2024',
      title: 'Future Vision',
      description: 'Continuing to innovate and expand access to world-class healthcare.'
    }
  ]

  const certifications = [
    { name: 'ISO 27001', description: 'Information Security Management' },
    { name: 'HIPAA Compliant', description: 'Healthcare Data Protection' },
    { name: 'JCI Standards', description: 'International Healthcare Quality' },
    { name: 'SOC 2 Type II', description: 'Security & Availability' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="heading-xl mb-6">
              Transforming Healthcare
              <span className="block gradient-text">Across Borders</span>
            </h1>
            <p className="text-body max-w-4xl mx-auto mb-12">
              We believe that everyone deserves access to world-class healthcare, regardless of where they live. 
              Our mission is to connect patients with the best medical care globally, at transparent and affordable prices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Our Mission
              </button>
              <button className="btn-secondary">
                Meet Our Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-2xl mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-lg mb-8">Our Mission</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  HealthBridge exists to democratize access to world-class healthcare. We believe that geographic 
                  location should never be a barrier to receiving the best possible medical treatment.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Through our global network of accredited hospitals and certified specialists, we make premium 
                  healthcare accessible and affordable for patients worldwide.
                </p>
                <div className="space-y-4">
                  {[
                    'Connect patients with top-tier medical facilities globally',
                    'Ensure transparent, upfront pricing with no hidden costs',
                    'Provide comprehensive support throughout the healthcare journey',
                    'Maintain the highest standards of safety and quality'
                  ].map((point, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Global Impact</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Lives Transformed</span>
                    <span className="font-bold text-blue-600">500,000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Healthcare Savings</span>
                    <span className="font-bold text-emerald-600">$2.5B+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Countries Served</span>
                    <span className="font-bold text-purple-600">50+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Our Core Values</h2>
            <p className="text-body max-w-3xl mx-auto">
              These principles guide every decision we make and every interaction we have with our patients.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Values List */}
            <div className="space-y-4">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <button
                    key={index}
                    onClick={() => setActiveValue(index)}
                    className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                      activeValue === index 
                        ? 'bg-blue-50 border-2 border-blue-200' 
                        : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl ${value.bgColor}`}>
                        <Icon className={`h-6 w-6 ${value.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                        <p className="text-gray-600 text-sm">{value.description}</p>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Active Value Display */}
            <div className="lg:pl-8">
              <div className="sticky top-8">
                <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-3xl p-8">
                  <div className={`inline-flex p-4 rounded-2xl ${values[activeValue].bgColor} mb-6`}>
                    {(() => {
                      const Icon = values[activeValue].icon
                      return <Icon className={`h-8 w-8 ${values[activeValue].color}`} />
                    })()}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {values[activeValue].title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {values[activeValue].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Our Journey</h2>
            <p className="text-body max-w-3xl mx-auto">
              From a simple idea to a global healthcare platform serving hundreds of thousands of patients.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-emerald-600 rounded-full"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-soft">
                      <div className="text-blue-600 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-4 h-4 bg-white border-4 border-blue-600 rounded-full"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Leadership Team</h2>
            <p className="text-body max-w-3xl mx-auto">
              Our experienced team combines medical expertise with technology innovation to deliver exceptional healthcare experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-3xl object-cover mx-auto group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <Star className="h-4 w-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-blue-600 font-semibold mb-2">{member.role}</div>
                <div className="text-sm text-gray-500 mb-3">{member.credentials}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Trust & Compliance</h2>
            <p className="text-body max-w-3xl mx-auto">
              We maintain the highest standards of security, privacy, and quality in everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-soft hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our Healthcare Revolution
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Be part of a movement that's making quality healthcare accessible to everyone, everywhere.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 hover:scale-105">
              Start Your Journey
            </button>
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 hover:scale-105 border-2 border-blue-500">
              Partner With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}