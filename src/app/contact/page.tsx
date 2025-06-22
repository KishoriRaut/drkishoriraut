'use client';

import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're here to help and answer any questions you might have. Reach out to us and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative py-16 md:py-24 bg-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-xs font-medium text-blue-700 bg-blue-100 rounded-full mb-4 tracking-wider uppercase">Contact Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">We'd Love to Hear From You</h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our team is here to provide you with more information, answer any questions you may have, or schedule an appointment.
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Contact Information */}
                <div className="bg-gradient-to-br from-blue-700 to-blue-600 p-10 text-white">
                  <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                  
                  <div className="space-y-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-500 rounded-full p-3">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold">Our Location</h4>
                        <p className="mt-1 text-blue-100">Talchikhhel, Satdobato</p>
                        <p className="text-blue-100">Lalitpur, Nepal</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-500 rounded-full p-3">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold">Phone Number</h4>
                        <p className="mt-1 text-blue-100">+977 1-1234567</p>
                        <p className="text-sm text-blue-200">Sun-Fri 10am-5pm</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-500 rounded-full p-3">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold">Email Address</h4>
                        <p className="mt-1 text-blue-100">info@drkishoriaut.com.np</p>
                        <p className="text-sm text-blue-200">We'll respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="pt-4">
                      <h4 className="text-lg font-semibold mb-4">Office Hours</h4>
                      <div className="space-y-3">
                        {[
                          { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
                          { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
                          { day: 'Sunday', hours: 'Closed' },
                          { day: 'Emergency', hours: '24/7' },
                        ].map((item, index) => (
                          <div key={index} className="flex justify-between">
                            <span className="font-medium">{item.day}</span>
                            <span className="text-blue-100">{item.hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white p-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="first-name"
                          name="first-name"
                          required
                          className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
                        />
                      </div>

                      <div>
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="last-name"
                          name="last-name"
                          required
                          className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
                        defaultValue={''}
                      />
                    </div>

                    <div className="flex items-center">
                      <button
                        type="submit"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                      >
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="h-96 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.647868072595!2d85.31727631506182!3d27.69997098279514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1992ec935f6d%3A0x3c7e8c1d8e0b9a6d!2sSatdobato%2C%20Lalitpur%2C%20Nepal!5e0!3m2!1sen!2snp!4v1620000000000!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
