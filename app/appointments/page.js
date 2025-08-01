'use client'

import { useState } from 'react'
import { Calendar, Clock, MapPin, Phone, Video, FileText, Star } from 'lucide-react'

export default function AppointmentsPage() {
  const [activeTab, setActiveTab] = useState('upcoming')

  const appointments = {
    upcoming: [
      {
        id: 1,
        doctor: 'Dr. Sarah Johnson',
        specialty: 'Cardiologist',
        date: '2024-08-02',
        time: '2:30 PM',
        type: 'In-person',
        hospital: 'Apollo Hospital, Mumbai',
        status: 'confirmed',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face'
      },
      {
        id: 2,
        doctor: 'Dr. Priya Sharma',
        specialty: 'Pediatrician',
        date: '2024-08-05',
        time: '10:00 AM',
        type: 'Video call',
        hospital: 'Fortis Hospital, Bangalore',
        status: 'confirmed',
        image: 'https://images.unsplash.com/photo-1594824475317-d3b9b4b8b1b1?w=150&h=150&fit=crop&crop=face'
      }
    ],
    past: [
      {
        id: 3,
        doctor: 'Dr. Rajesh Kumar',
        specialty: 'Dermatologist',
        date: '2024-07-28',
        time: '4:00 PM',
        type: 'In-person',
        hospital: 'Max Hospital, Delhi',
        status: 'completed',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face'
      },
      {
        id: 4,
        doctor: 'Dr. Amit Patel',
        specialty: 'Orthopedic',
        date: '2024-07-20',
        time: '11:30 AM',
        type: 'In-person',
        hospital: 'Lilavati Hospital, Mumbai',
        status: 'completed',
        rating: 4,
        image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face'
      }
    ]
  }

  const currentAppointments = appointments[activeTab]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">My Appointments</h1>
          <p className="text-lg text-gray-600">Manage your healthcare appointments</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'upcoming'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Upcoming ({appointments.upcoming.length})
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'past'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Past ({appointments.past.length})
              </button>
            </nav>
          </div>

          {/* Appointments List */}
          <div className="p-6">
            {currentAppointments.length === 0 ? (
              <div className="text-center py-12">
                <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No {activeTab} appointments
                </h3>
                <p className="text-gray-600 mb-6">
                  {activeTab === 'upcoming' 
                    ? "You don't have any upcoming appointments scheduled."
                    : "You don't have any past appointments to show."
                  }
                </p>
                {activeTab === 'upcoming' && (
                  <button className="btn-primary">
                    Book New Appointment
                  </button>
                )}
              </div>
            ) : (
              <div className="space-y-6">
                {currentAppointments.map(appointment => (
                  <div key={appointment.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                        <img
                          src={appointment.image}
                          alt={appointment.doctor}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {appointment.doctor}
                          </h3>
                          <p className="text-primary-600 font-medium mb-2">
                            {appointment.specialty}
                          </p>
                          
                          <div className="space-y-1 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2" />
                              <span>{new Date(appointment.date).toLocaleDateString('en-US', { 
                                weekday: 'long', 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              })}</span>
                            </div>
                            
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-2" />
                              <span>{appointment.time}</span>
                            </div>
                            
                            <div className="flex items-center">
                              {appointment.type === 'Video call' ? (
                                <Video className="h-4 w-4 mr-2" />
                              ) : (
                                <MapPin className="h-4 w-4 mr-2" />
                              )}
                              <span>
                                {appointment.type === 'Video call' 
                                  ? 'Video Consultation' 
                                  : appointment.hospital
                                }
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="lg:text-right">
                        <div className="mb-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                            appointment.status === 'confirmed' 
                              ? 'bg-medical-100 text-medical-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {appointment.status === 'confirmed' ? 'Confirmed' : 'Completed'}
                          </span>
                        </div>
                        
                        {activeTab === 'upcoming' ? (
                          <div className="space-y-2">
                            {appointment.type === 'Video call' ? (
                              <button className="btn-primary w-full lg:w-auto px-6">
                                <Video className="h-4 w-4 mr-2" />
                                Join Call
                              </button>
                            ) : (
                              <button className="btn-primary w-full lg:w-auto px-6">
                                <MapPin className="h-4 w-4 mr-2" />
                                Get Directions
                              </button>
                            )}
                            <button className="btn-secondary w-full lg:w-auto px-6">
                              Reschedule
                            </button>
                            <button className="text-red-600 hover:text-red-700 text-sm font-medium w-full lg:w-auto">
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            {appointment.rating && (
                              <div className="flex items-center justify-center lg:justify-end mb-2">
                                <span className="text-sm text-gray-600 mr-2">Your rating:</span>
                                <div className="flex">
                                  {[1, 2, 3, 4, 5].map(star => (
                                    <Star
                                      key={star}
                                      className={`h-4 w-4 ${
                                        star <= appointment.rating
                                          ? 'text-yellow-400 fill-current'
                                          : 'text-gray-300'
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                            )}
                            <button className="btn-primary w-full lg:w-auto px-6">
                              <FileText className="h-4 w-4 mr-2" />
                              View Prescription
                            </button>
                            <button className="btn-secondary w-full lg:w-auto px-6">
                              Book Again
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <button className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Calendar className="h-6 w-6 text-primary-600 mr-3" />
              <span className="font-medium">Book New Appointment</span>
            </button>
            
            <button className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <FileText className="h-6 w-6 text-primary-600 mr-3" />
              <span className="font-medium">View Health Records</span>
            </button>
            
            <button className="flex items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Phone className="h-6 w-6 text-primary-600 mr-3" />
              <span className="font-medium">Contact Support</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}