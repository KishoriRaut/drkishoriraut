import Image from 'next/image';
import { CheckCircle, Award, Stethoscope, Users, Clock, HeartPulse, ShieldCheck, Activity } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-700 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-blue-700 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="text-center">
                <span className="inline-block px-4 py-1.5 text-xs font-medium text-blue-700 bg-blue-100 rounded-full mb-4 tracking-wider uppercase">
                  About Dr. Kishori Raut
                </span>
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">Compassionate Care,</span>
                  <span className="block text-blue-200">Exceptional Results</span>
                </h1>
                <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-lg sm:max-w-2xl sm:mx-auto md:mt-5 md:text-xl">
                  Board-certified Internal Medicine specialist with over 15 years of experience in delivering personalized, evidence-based healthcare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="relative -mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Image Section */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4] w-full max-w-md mx-auto">
                  <Image
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Dr. Kishori Raut"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                
                {/* Quick Facts Card */}
                <div className="card bg-base-100 shadow-sm border border-base-200 mt-8">
                  <div className="card-body p-6">
                    <h3 className="card-title text-lg mb-4">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Quick Facts
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Stethoscope className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-base"><span className="font-semibold">Specialties:</span> Internal Medicine, Preventive Care, Chronic Disease Management</span>
                      </li>
                      <li className="flex items-start">
                        <Clock className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-base"><span className="font-semibold">Experience:</span> 15+ Years in Practice</span>
                      </li>
                      <li className="flex items-start">
                        <Users className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-base"><span className="font-semibold">Patients Treated:</span> 5000+</span>
                      </li>
                      <li className="flex items-start">
                        <ShieldCheck className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-base"><span className="font-semibold">Board Certifications:</span> American Board of Internal Medicine</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:col-span-7">
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to My Practice</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    I'm Dr. Kishori Raut, a dedicated physician with a passion for internal medicine and preventive care. My journey in medicine began with a simple yet profound belief: every patient deserves compassionate, personalized healthcare that addresses both immediate concerns and long-term wellness.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    After completing my medical education at Harvard Medical School and subsequent training at Massachusetts General Hospital, I've had the privilege of serving diverse patient populations across various clinical settings. This extensive experience has honed my ability to provide comprehensive care that's tailored to each individual's unique health profile and personal circumstances.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    What sets my practice apart is not just my medical expertise, but my commitment to truly listening to my patients. I believe that the best healthcare decisions are made collaboratively, with patients as active participants in their care journey. Whether you're managing a chronic condition, seeking preventive care, or addressing acute health concerns, I'm here to provide guidance, support, and exceptional medical care every step of the way.
                  </p>
                </div>
                
                {/* Areas of Expertise */}
                <div className="card bg-base-100 shadow-sm border border-base-200 mt-8">
                  <div className="card-body p-6">
                    <h3 className="card-title text-xl mb-6">
                      <Activity className="w-6 h-6 text-primary mr-2" />
                      Areas of Expertise
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Preventive Medicine</h4>
                        <p className="text-sm text-gray-600">Comprehensive wellness exams, health screenings, and personalized prevention plans to maintain optimal health.</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Chronic Disease Management</h4>
                        <p className="text-sm text-gray-600">Expert care for diabetes, hypertension, heart disease, and other chronic conditions.</p>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <a
                        href="/appointment"
                        className="btn btn-primary"
                      >
                        Book an Appointment
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
