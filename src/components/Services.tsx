import { Heart, User, Users } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    name: 'Cardiology',
    description: 'Comprehensive heart care with advanced diagnostic tools and personalized treatment plans.',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    name: 'Dermatology',
    description: 'Expert care for all skin conditions, from acne to skin cancer detection and treatment.',
    icon: User,
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    name: 'Pediatrics',
    description: 'Compassionate healthcare for children of all ages, from newborns to adolescents.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80'
  },
];

export default function Services() {
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.name} className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="h-48 overflow-hidden relative">
                <div className={`relative h-full w-full ${service.name === 'Pediatrics' ? 'object-contain' : 'object-cover'}`}>
                  <Image
                    src={service.image}
                    alt={service.name}
                    className={`transition-transform duration-500 hover:scale-105 ${
                      service.name === 'Pediatrics' ? 'object-top' : 'object-cover'
                    }`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={service.name === 'Pediatrics' ? { objectPosition: 'top' } : undefined}
                  />
                </div>
              </div>
              <div className="flex-1 p-6 bg-white">
                <div className="flex items-center gap-x-3 mb-3">
                  <service.icon className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a 
                  href="#appointment" 
                  className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group-hover:underline"
                >
                  Book an appointment
                  <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
