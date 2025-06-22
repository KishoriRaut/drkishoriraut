'use client';

import { FileText, Clock, CreditCard, ClipboardList, Download, Calendar, User, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function PatientInformationPage() {
  const forms = [
    { 
      name: 'New Patient Registration', 
      href: '/patient-forms/new-patient-registration.pdf',
      description: 'Complete this form to register as a new patient in our system.'
    },
    { 
      name: 'Medical History Form', 
      href: '/patient-forms/medical-history.pdf',
      description: 'Provide your complete medical history to help us serve you better.'
    },
    { 
      name: 'HIPAA Authorization', 
      href: '/patient-forms/hipaa-authorization.pdf',
      description: 'Authorization for use and disclosure of protected health information.'
    },
    { 
      name: 'Consent for Treatment', 
      href: '/patient-forms/consent-form.pdf',
      description: 'Consent form for medical treatment and procedures.'
    },
  ];

  const insurances = [
    { name: 'Aetna', accepted: true },
    { name: 'Blue Cross Blue Shield', accepted: true },
    { name: 'Cigna', accepted: true },
    { name: 'UnitedHealthcare', accepted: true },
    { name: 'Medicare', accepted: true },
    { name: 'Medicaid', accepted: true },
    { name: 'Humana', accepted: false },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Patient Information
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Everything you need to know before your visit to our clinic.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative py-16 bg-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/light-wool.png')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* First Visit Information */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Your First Visit</h2>
                  </div>
                  <div className="space-y-6">
                    <p className="text-gray-700">
                      We want your first visit to be as smooth as possible. Please arrive 15 minutes early to complete any remaining paperwork and get comfortable in our welcoming environment.
                    </p>
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-gray-900">What to bring:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Photo ID (Driver's License, Passport, etc.)</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Insurance card(s) and prescription card if applicable</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">List of current medications, including dosages</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Medical records (if transferring from another provider)</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Completed new patient forms</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-gray-900">What to expect:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          <span className="text-gray-700">Check-in at the front desk</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          <span className="text-gray-700">Review of medical history with our staff</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          <span className="text-gray-700">Comprehensive health assessment</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          <span className="text-gray-700">Discussion of treatment options</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Billing & Insurance */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <CreditCard className="h-6 w-6 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Billing & Insurance</h2>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Accepted Insurance Plans</h3>
                      <div className="flex flex-wrap gap-2">
                        {insurances.map((insurance, index) => (
                          <span 
                            key={index}
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                              insurance.accepted 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {insurance.name}
                            {!insurance.accepted && ' (Coming Soon)'}
                          </span>
                        ))}
                      </div>
                      <p className="mt-4 text-sm text-gray-600">
                        Please contact our office to verify if we accept your specific insurance plan.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Options</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Credit/Debit Cards (Visa, Mastercard, American Express, Discover)</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Health Savings Accounts (HSA)</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Flexible Spending Accounts (FSA)</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Cash or Check</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Patient Forms */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <ClipboardList className="h-5 w-5 text-blue-600" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">Patient Forms</h2>
                  </div>
                  <div className="space-y-4">
                    {forms.map((form, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-blue-50 rounded-lg">
                              <FileText className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900">{form.name}</h3>
                              <p className="mt-1 text-sm text-gray-500">{form.description}</p>
                            </div>
                          </div>
                          <a
                            href={form.href}
                            download
                            className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center whitespace-nowrap ml-3"
                          >
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Phone className="h-5 w-5 text-blue-600" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">Contact Us</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gray-50 rounded-lg">
                        <Phone className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                        <a href="tel:+1234567890" className="text-gray-900 hover:text-blue-600">
                          (123) 456-7890
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gray-50 rounded-lg">
                        <Mail className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Email</h3>
                        <a href="mailto:info@drkishori.com" className="text-gray-900 hover:text-blue-600">
                          info@drkishori.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gray-50 rounded-lg">
                        <MapPin className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Location</h3>
                        <p className="text-gray-900">123 Medical Center Drive<br />Suite 100<br />Anytown, ST 12345</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gray-50 rounded-lg">
                        <Clock className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Hours</h3>
                        <div className="text-gray-900 space-y-1">
                          <p className="flex justify-between"><span>Monday - Friday</span> <span>8:00 AM - 5:00 PM</span></p>
                          <p className="flex justify-between"><span>Saturday</span> <span>9:00 AM - 12:00 PM</span></p>
                          <p className="flex justify-between"><span>Sunday</span> <span>Closed</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Appointment Information */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 lg:col-span-2">
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Calendar className="h-6 w-6 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Appointment Information</h2>
                  </div>
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Scheduling</h3>
                      <p className="text-gray-700 mb-4">
                        To schedule an appointment, please call our office during business hours or use our online scheduling system.
                      </p>
                      <a
                        href="/appointment"
                        className="inline-flex items-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                      >
                        <Calendar className="-ml-1 mr-2 h-5 w-5" />
                        Schedule Online
                      </a>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Cancellation Policy</h3>
                      <p className="text-gray-700 mb-4">
                        We require 24 hours notice for appointment cancellations. A fee may be charged for missed appointments without proper notice.
                      </p>
                      <a
                        href="#"
                        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                      >
                        View full cancellation policy
                        <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <Link
                  href="/appointment"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Schedule an Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
