'use client';

import { Stethoscope, HeartPulse, Microscope, Activity, Brain, Bone, Baby, Eye } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export interface Service {
  id: number;
  name: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  details?: string[];
}

export default function ServicesPage() {
  const services: Service[] = [
    {
      id: 1,
      name: 'General Medicine',
      title: 'General Medicine',
      description: 'Comprehensive primary care for patients of all ages, including preventive care, chronic disease management, and acute illness treatment.',
      icon: Stethoscope,
      image: 'https://images.unsplash.com/photo-1505751172876-fa1263cd2edb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      details: [
        'Annual physical examinations',
        'Chronic disease management',
        'Preventive care and health screenings',
        'Acute illness treatment',
        'Vaccinations and immunizations'
      ]
    },
    {
      id: 2,
      name: 'Cardiology',
      title: 'Cardiology',
      description: 'Expert care for heart conditions, including hypertension, heart disease, and heart failure management.',
      icon: HeartPulse,
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      details: [
        'Echocardiograms',
        'Stress testing',
        'Holter monitoring',
        'Cardiac catheterization',
        'Pacemaker management'
      ]
    },
    {
      id: 3,
      name: 'Pediatrics',
      title: 'Pediatrics',
      description: 'Specialized healthcare for infants, children, and adolescents, including well-child visits and vaccinations.',
      icon: Baby,
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
      details: [
        'Well-child checkups',
        'Vaccination schedules',
        'Developmental screenings',
        'Newborn care',
        'Adolescent medicine'
      ]
    },
    {
      id: 4,
      name: 'Neurology',
      title: 'Neurology',
      description: 'Diagnosis and treatment of disorders of the nervous system, including migraines, epilepsy, and neuropathy.',
      icon: Brain,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      details: [
        'EEG testing',
        'Nerve conduction studies',
        'Headache management',
        'Seizure disorder treatment',
        'Neuromuscular disease care'
      ]
    },
    {
      id: 5,
      name: 'Dermatology',
      title: 'Dermatology',
      description: 'Treatment of skin conditions, including acne, eczema, psoriasis, and skin cancer screenings.',
      icon: Activity,
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      details: [
        'Skin cancer screenings',
        'Acne treatment',
        'Eczema and psoriasis management',
        'Mole evaluations',
        'Cosmetic procedures'
      ]
    },
    {
      id: 6,
      name: 'Orthopedics',
      title: 'Orthopedics',
      description: 'Care for musculoskeletal conditions, including joint pain, fractures, and sports injuries.',
      icon: Bone,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      details: [
        'Joint injections',
        'Fracture care',
        'Sports injury treatment',
        'Arthritis management',
        'Physical therapy coordination'
      ]
    },
    {
      id: 7,
      name: 'Ophthalmology',
      title: 'Ophthalmology',
      description: 'Eye care services including vision testing, eye disease treatment, and prescription eyewear.',
      icon: Eye,
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      details: [
        'Comprehensive eye exams',
        'Glaucoma testing',
        'Cataract evaluations',
        'Diabetic eye care',
        'Contact lens fittings'
      ]
    },
    {
      id: 8,
      name: 'Laboratory Services',
      title: 'Laboratory Services',
      description: 'On-site diagnostic testing including blood work, urinalysis, and other laboratory services.',
      icon: Microscope,
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25af1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      details: [
        'Blood tests',
        'Urinalysis',
        'Cholesterol screening',
        'Diabetes testing',
        'Thyroid function tests'
      ]
    },
  ];

  // Generate URL-friendly slugs for each service
  const getServiceSlug = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-blue-700 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-blue-700 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">Our Medical</span>
                  <span className="block text-blue-200">Services</span>
                </h1>
                <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-lg sm:max-w-2xl sm:mx-auto md:mt-5 md:text-xl">
                  Comprehensive healthcare services tailored to meet your individual needs with the highest standard of care.
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link 
                key={service.id} 
                href={`/services/${getServiceSlug(service.name)}`}
                className="group block"
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-600 text-white">
                        <service.icon className="h-4 w-4 mr-1" />
                        {service.name}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">{service.description}</p>
                    <div className="inline-flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-800">
                      Learn more
                      <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to book an appointment?</span>
            <span className="block text-blue-200">Contact us today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/appointment"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Book Now
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 bg-opacity-60 hover:bg-opacity-70"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
