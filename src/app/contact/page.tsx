import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import styles from './contact.module.css';

export default function ContactPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center py-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We're here to help and answer any questions you might have.
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-16">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold leading-7 text-gray-900">Get in touch</h3>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <div className="ml-3 text-base leading-6 text-gray-700">
                    <p>Talchikhhel, Satdobato</p>
                    <p>Lalitpur</p>
                    <p>Nepal</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <div className="ml-3 text-base leading-6 text-gray-700">
                    <p>+977 1-1234567</p>
                    <p className="text-sm text-gray-500">Sun-Fri 10am-5pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <div className="ml-3 text-base leading-6 text-gray-700">
                    <p>info@drkishoriaut.com.np</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="text-lg font-semibold leading-7 text-gray-900">Office Hours</h3>
                  <div className="mt-4 space-y-3">
                    {[
                      { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
                      { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
                      { day: 'Sunday', hours: 'Closed' },
                      { day: 'Emergency', hours: '24/7' },
                    ].map((item) => (
                      <div key={item.day} className="flex justify-between text-sm leading-6">
                        <span className="font-medium text-gray-900">{item.day}</span>
                        <span className="text-gray-600">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2 bg-gray-50 p-8 rounded-xl">
                <h3 className="text-lg font-semibold leading-7 text-gray-900 mb-6">Send us a message</h3>
                <form action="#" method="POST" className="space-y-6">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        First name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Last name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                        Phone
                      </label>
                      <div className="mt-1">
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          autoComplete="tel"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="subject" className="block text-sm font-medium leading-6 text-gray-900">
                        Subject
                      </label>
                      <div className="mt-1">
                        <select
                          id="subject"
                          name="subject"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        >
                          <option>General Inquiry</option>
                          <option>Appointment Request</option>
                          <option>Billing Question</option>
                          <option>Prescription Refill</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                        Message
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                          defaultValue={''}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end">
                    <button
                      type="submit"
                      className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      Send message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="overflow-hidden bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <h2 className="text-2xl font-bold text-gray-900">Our Location</h2>
              <div className="mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gray-50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.269036888035!2d85.32545431506199!3d27.70956298279038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199f75f08da5%3A0x741f6c3f0c4f83f8!2sTalchikhel%2C%20Lalitpur%2C%20Nepal!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  className={styles.mapContainer}
                  title="Our location in Talchikhhel, Satdobato, Lalitpur, Nepal on Google Maps"
                  aria-label="Interactive map showing our location in Talchikhhel, Satdobato, Lalitpur, Nepal"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
