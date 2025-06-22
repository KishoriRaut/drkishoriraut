import Image from 'next/image';
import { CheckCircle, Award, Stethoscope, Users, Clock } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Our Practice</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Providing compassionate and comprehensive healthcare for our community since 2010.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-20 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-2xl bg-gray-50 px-6 pb-9 pt-8">
              <div className="aspect-[16/9] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1551076805-e4fd0d150c3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Our clinic"
                  className="object-cover rounded-lg"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="lg:pl-4">
            <div className="text-base leading-7 text-gray-700">
              <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
              <p className="mt-4">
                Our mission is to provide exceptional healthcare services with compassion, respect, and excellence. 
                We are committed to improving the health and well-being of our patients through personalized care 
                and evidence-based medicine.
              </p>
              
              <h3 className="mt-8 text-xl font-semibold text-gray-900">Our Values</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li className="flex gap-x-3">
                  <CheckCircle className="mt-1 h-5 w-5 flex-none text-blue-600" />
                  <span><strong>Patient-Centered Care:</strong> Your health and comfort are our top priorities.</span>
                </li>
                <li className="flex gap-x-3">
                  <Award className="mt-1 h-5 w-5 flex-none text-blue-600" />
                  <span><strong>Excellence:</strong> Delivering the highest standard of medical care.</span>
                </li>
                <li className="flex gap-x-3">
                  <Stethoscope className="mt-1 h-5 w-5 flex-none text-blue-600" />
                  <span><strong>Expertise:</strong> Board-certified physicians with years of experience.</span>
                </li>
                <li className="flex gap-x-3">
                  <Users className="mt-1 h-5 w-5 flex-none text-blue-600" />
                  <span><strong>Compassion:</strong> Treating every patient with empathy and respect.</span>
                </li>
              </ul>

              <div className="mt-10 flex">
                <a
                  href="/appointment"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Book an Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
