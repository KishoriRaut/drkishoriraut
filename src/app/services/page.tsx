'use client';

import { useState } from 'react';
import { Stethoscope, HeartPulse, Microscope, Activity, Brain, Bone, Baby, Eye } from 'lucide-react';
import ServiceModal from '@/components/ServiceModal';

export interface Service {
  id: number;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  details?: string[];
}

export default function ServicesPage() {
  const services: Service[] = [
    {
      id: 1,
      name: 'General Medicine',
      description: 'Comprehensive primary care for patients of all ages, including preventive care, chronic disease management, and acute illness treatment.',
      icon: Stethoscope,
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
      description: 'Expert care for heart conditions, including hypertension, heart disease, and heart failure management.',
      icon: HeartPulse,
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
      description: 'Specialized healthcare for infants, children, and adolescents, including well-child visits and vaccinations.',
      icon: Baby,
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
      description: 'Diagnosis and treatment of disorders of the nervous system, including migraines, epilepsy, and neuropathy.',
      icon: Brain,
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
      description: 'Treatment of skin conditions, including acne, eczema, psoriasis, and skin cancer screenings.',
      icon: Activity,
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
      description: 'Care for musculoskeletal conditions, including joint pain, fractures, and sports injuries.',
      icon: Bone,
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
      description: 'Eye care services including vision testing, eye disease treatment, and prescription eyewear.',
      icon: Eye,
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
      description: 'On-site diagnostic testing including blood work, urinalysis, and other laboratory services.',
      icon: Microscope,
      details: [
        'Blood tests',
        'Urinalysis',
        'Cholesterol screening',
        'Diabetes testing',
        'Thyroid function tests'
      ]
    },
  ];

  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Comprehensive healthcare services tailored to meet your individual needs.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <service.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                  <p className="mt-6">
                    <a
                      href="#"
                      className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500"
                      onClick={() => {
                        setSelectedService(service);
                        setIsModalOpen(true);
                      }}
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-900">Don't see what you're looking for?</h3>
          <p className="mt-4 text-gray-600">
            Contact us to learn more about our full range of services and how we can help you.
          </p>
          <div className="mt-6">
            <a
              href="/contact"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}
