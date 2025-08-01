'use client'

import { useState } from 'react'
import { FileText, Download, Upload, Eye, Calendar, User, Pill, Activity, Heart } from 'lucide-react'

export default function HealthRecordsPage() {
  const [activeTab, setActiveTab] = useState('prescriptions')

  const healthData = {
    prescriptions: [
      {
        id: 1,
        doctor: 'Dr. Sarah Johnson',
        specialty: 'Cardiologist',
        date: '2024-07-28',
        medications: ['Metoprolol 50mg', 'Aspirin 75mg', 'Atorvastatin 20mg'],
        diagnosis: 'Hypertension management',
        instructions: 'Take medications as prescribed. Follow up in 3 months.'
      },
      {
        id: 2,
        doctor: 'Dr. Rajesh Kumar',
        specialty: 'Dermatologist',
        date: '2024-07-20',
        medications: ['Tretinoin cream 0.025%', 'Clindamycin gel'],
        diagnosis: 'Acne vulgaris',
        instructions: 'Apply tretinoin at night, clindamycin twice daily.'
      }
    ],
    reports: [
      {
        id: 1,
        name: 'Complete Blood Count',
        date: '2024-07-25',
        type: 'Lab Report',
        doctor: 'Dr. Sarah Johnson',
        status: 'Normal',
        fileSize: '2.3 MB'
      },
      {
        id: 2,
        name: 'Chest X-Ray',
        date: '2024-07-15',
        type: 'Imaging',
        doctor: 'Dr. Amit Patel',
        status: 'Normal',
        fileSize: '5.1 MB'
      },
      {
        id: 3,
        name: 'ECG Report',
        date: '2024-07-10',
        type: 'Cardiac Test',
        doctor: 'Dr. Sarah Johnson',
        status: 'Abnormal',
        fileSize: '1.8 MB'
      }
    ],
    vitals: [
      {
        date: '2024-07-28',
        bloodPressure: '120/80',
        heartRate: 72,
        weight: 70,
        temperature: 98.6,
        oxygenSaturation: 98
      },
      {
        date: '2024-07-20',
        bloodPressure: '125/85',
        heartRate: 75,
        weight: 70.5,
        temperature: 98.4,
        oxygenSaturation: 97
      },
      {
        date: '2024-07-10',
        bloodPressure: '130/90',
        heartRate: 78,
        weight: 71,
        temperature: 98.8,
        oxygenSaturation: 96
      }
    ]
  }

  const tabs = [
    { id: 'prescriptions', name: 'Prescriptions', icon: Pill },
    { id: 'reports', name: 'Reports', icon: FileText },
    { id: 'vitals', name: 'Vitals', icon: Activity }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Health Records</h1>
          <p className="text-lg text-gray-600">Your complete medical history in one place</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="bg-primary-100 p-3 rounded-full">
                <Pill className="h-6 w-6 text-primary-600" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">{healthData.prescriptions.length}</p>
                <p className="text-sm text-gray-600">Prescriptions</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="bg-medical-100 p-3 rounded-full">
                <FileText className="h-6 w-6 text-medical-600" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">{healthData.reports.length}</p>
                <p className="text-sm text-gray-600">Reports</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="bg-purple-100 p-3 rounded-full">
                <Activity className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">{healthData.vitals.length}</p>
                <p className="text-sm text-gray-600">Vital Records</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="bg-orange-100 p-3 rounded-full">
                <Heart className="h-6 w-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">120/80</p>
                <p className="text-sm text-gray-600">Latest BP</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-sm">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map(tab => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${
                      activeTab === tab.id
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {tab.name}
                  </button>
                )
              })}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'prescriptions' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-900">Recent Prescriptions</h2>
                  <button className="btn-primary">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Prescription
                  </button>
                </div>
                
                {healthData.prescriptions.map(prescription => (
                  <div key={prescription.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{prescription.doctor}</h3>
                        <p className="text-primary-600">{prescription.specialty}</p>
                        <p className="text-sm text-gray-600 flex items-center mt-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(prescription.date).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="btn-secondary">
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </button>
                        <button className="btn-secondary">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </button>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Diagnosis</h4>
                        <p className="text-gray-600">{prescription.diagnosis}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Medications</h4>
                        <ul className="space-y-1">
                          {prescription.medications.map((med, index) => (
                            <li key={index} className="text-gray-600 text-sm">• {med}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <h4 className="font-medium text-gray-900 mb-2">Instructions</h4>
                      <p className="text-gray-600">{prescription.instructions}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'reports' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-900">Medical Reports</h2>
                  <button className="btn-primary">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Report
                  </button>
                </div>
                
                <div className="grid gap-4">
                  {healthData.reports.map(report => (
                    <div key={report.id} className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-primary-100 p-3 rounded-lg">
                          <FileText className="h-6 w-6 text-primary-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{report.name}</h3>
                          <p className="text-sm text-gray-600">{report.type} • {report.doctor}</p>
                          <p className="text-sm text-gray-500 flex items-center mt-1">
                            <Calendar className="h-3 w-3 mr-1" />
                            {new Date(report.date).toLocaleDateString()} • {report.fileSize}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          report.status === 'Normal' 
                            ? 'bg-medical-100 text-medical-800'
                            : 'bg-orange-100 text-orange-800'
                        }`}>
                          {report.status}
                        </span>
                        
                        <div className="flex space-x-2">
                          <button className="btn-secondary">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </button>
                          <button className="btn-secondary">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'vitals' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-900">Vital Signs History</h2>
                  <button className="btn-primary">
                    <Upload className="h-4 w-4 mr-2" />
                    Add Vitals
                  </button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Blood Pressure</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Heart Rate</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weight (kg)</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Temperature (°F)</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">O2 Saturation</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {healthData.vitals.map((vital, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {new Date(vital.date).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{vital.bloodPressure}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{vital.heartRate} bpm</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{vital.weight}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{vital.temperature}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{vital.oxygenSaturation}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}