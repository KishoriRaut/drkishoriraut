import Image from 'next/image';
import Link from 'next/link';
import { Search, MapPin, Filter, Star, StarHalf } from 'lucide-react';

// Mock data for doctors
const doctors = [
  {
    id: 'jane-smith',
    name: 'Dr. Jane Smith',
    title: 'MD, Internal Medicine',
    specialty: 'Internal Medicine',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    bio: 'Board-certified internal medicine physician with over 15 years of experience.',
    rating: 4.8,
    reviewCount: 124,
    languages: ['English', 'Spanish'],
    availability: 'Accepts new patients',
  },
  {
    id: 'michael-chen',
    name: 'Dr. Michael Chen',
    title: 'MD, Cardiology',
    specialty: 'Cardiologist',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Specializes in preventive cardiology and heart disease management.',
    rating: 4.9,
    reviewCount: 98,
    languages: ['English', 'Mandarin'],
    availability: 'Limited availability',
  },
  {
    id: 'sarah-johnson',
    name: 'Dr. Sarah Johnson',
    title: 'DO, Family Medicine',
    specialty: 'Family Medicine',
    image: 'https://randomuser.me/api/portraits/women/28.jpg',
    bio: 'Provides comprehensive care for patients of all ages.',
    rating: 4.7,
    reviewCount: 87,
    languages: ['English', 'Spanish', 'French'],
    availability: 'Accepts new patients',
  },
  {
    id: 'robert-wilson',
    name: 'Dr. Robert Wilson',
    title: 'MD, Neurology',
    specialty: 'Neurologist',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    bio: 'Specializes in treating disorders of the nervous system.',
    rating: 4.6,
    reviewCount: 76,
    languages: ['English'],
    availability: 'Accepts new patients',
  },
  {
    id: 'maria-garcia',
    name: 'Dr. Maria Garcia',
    title: 'MD, Pediatrics',
    specialty: 'Pediatrician',
    image: 'https://randomuser.me/api/portraits/women/63.jpg',
    bio: 'Caring for children from birth through adolescence.',
    rating: 4.9,
    reviewCount: 142,
    languages: ['English', 'Spanish'],
    availability: 'Limited availability',
  },
  {
    id: 'david-kim',
    name: 'Dr. David Kim',
    title: 'MD, Orthopedic Surgery',
    specialty: 'Orthopedic Surgeon',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
    bio: 'Specializes in surgical and non-surgical treatment of musculoskeletal conditions.',
    rating: 4.8,
    reviewCount: 92,
    languages: ['English', 'Korean'],
    availability: 'Accepts new patients',
  },
];

const specialties = [
  'All Specialties',
  'Internal Medicine',
  'Cardiology',
  'Family Medicine',
  'Neurology',
  'Pediatrics',
  'Orthopedics',
  'Dermatology',
  'Gastroenterology',
  'Endocrinology',
];

const locations = [
  'All Locations',
  'Main Medical Center',
  'Downtown Clinic',
  'Westside Medical',
  'Northside Hospital',
  'Eastside Health Center',
];

export default function DoctorsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-blue-700">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Find a Doctor
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-blue-100">
              Our team of experienced healthcare professionals is here to provide you with the highest quality care.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 -mt-12">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="md:col-span-1">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700">
                Search by name or specialty
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md h-10"
                  placeholder="Search doctors..."
                />
              </div>
            </div>

            <div>
              <label htmlFor="specialty" className="block text-sm font-medium text-gray-700">
                Specialty
              </label>
              <select
                id="specialty"
                name="specialty"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md h-10"
                defaultValue="All Specialties"
              >
                {specialties.map((specialty) => (
                  <option key={specialty}>{specialty}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <div className="mt-1 relative">
                <select
                  id="location"
                  name="location"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md h-10"
                  defaultValue="All Locations"
                >
                  {locations.map((location) => (
                    <option key={location}>{location}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-end">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 h-10"
              >
                <Filter className="-ml-1 mr-2 h-4 w-4" aria-hidden="true" />
                Filter
              </button>
              <button
                type="button"
                className="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 h-10"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Doctors
          </h2>
          <p className="text-sm text-gray-500">
            Showing <span className="font-medium">1-{doctors.length}</span> of <span className="font-medium">{doctors.length}</span> doctors
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-full bg-gray-200">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="ml-6 flex-1">
                    <h3 className="text-lg font-medium text-gray-900">
                      <Link href={`/doctors/${doctor.id}`} className="hover:text-blue-600">
                        {doctor.name}
                      </Link>
                    </h3>
                    <p className="text-sm text-blue-600">{doctor.specialty}</p>
                    <p className="mt-1 text-sm text-gray-500">{doctor.title}</p>
                    
                    <div className="mt-2 flex items-center">
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 flex-shrink-0 ${
                              star <= Math.floor(doctor.rating)
                                ? 'text-yellow-400'
                                : doctor.rating % 1 >= 0.5 && star === Math.ceil(doctor.rating)
                                ? 'text-yellow-400'
                                : 'text-gray-300'
                            }`}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="ml-2 text-sm text-gray-600">
                        {doctor.rating} <span className="text-gray-500">({doctor.reviewCount})</span>
                      </p>
                    </div>
                    
                    <div className="mt-2">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        doctor.availability === 'Accepts new patients' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {doctor.availability}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="mt-4 text-sm text-gray-600 line-clamp-3">
                  {doctor.bio}
                </p>
                
                <div className="mt-4">
                  <div className="flex flex-wrap gap-1">
                    {doctor.languages.map((language) => (
                      <span key={language} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-auto bg-gray-50 px-6 py-4 flex justify-between items-center border-t border-gray-200">
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                  <span>Main Medical Center</span>
                </div>
                <Link
                  href={`/appointment?doctor=${doctor.id}`}
                  className="text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  Book Appointment <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <a
              href="#"
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="#"
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </a>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">{doctors.length}</span> of{' '}
                <span className="font-medium">{doctors.length}</span> results
              </p>
            </div>
            <div>
              <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <span className="h-5 w-5" aria-hidden="true">&laquo;</span>
                </a>
                <a
                  href="#"
                  aria-current="page"
                  className="relative z-10 inline-flex items-center bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  2
                </a>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  3
                </a>
                <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                  ...
                </span>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  8
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <span className="h-5 w-5" aria-hidden="true">&raquo;</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Can't find what you're looking for?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Our team is here to help you find the right doctor for your needs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact Us
              </Link>
              <Link href="/services" className="text-sm font-semibold leading-6 text-white">
                View all services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
