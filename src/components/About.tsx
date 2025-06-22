import Image from 'next/image';
import { CheckCircle, Award, Clock, HeartPulse, Stethoscope, ShieldCheck, Users, Activity } from 'lucide-react';

export default function About() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 text-xs font-medium text-blue-700 bg-blue-100 rounded-full mb-4 tracking-wider uppercase">
          About Dr. Kishori Raut
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Compassionate Care, Exceptional Results
        </h1>
        <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Board-certified Internal Medicine specialist with over 15 years of experience in delivering personalized, evidence-based healthcare.
        </p>
      </div>

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
                <h4 className="font-medium text-gray-900 mb-2">Chronic Disease Management</h4>
                <p className="text-sm text-gray-600">Expert care for diabetes, hypertension, heart disease, and other chronic conditions.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Women's Health</h4>
                <p className="text-sm text-gray-600">Comprehensive care for women at all stages of life, including menopause management and bone health.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Geriatric Care</h4>
                <p className="text-sm text-gray-600">Specialized care for older adults, focusing on maintaining independence and quality of life.</p>
              </div>
            </div>
          </div>

          {/* Professional Journey */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Professional Journey
            </h3>
            <div className="space-y-6 relative">
              <div className="relative pl-8 border-l-2 border-blue-200 pb-8">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-1 border-2 border-white"></div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Senior Physician</h4>
                  <p className="text-blue-600 font-medium">Massachusetts General Hospital • 2018 - Present</p>
                  <p className="mt-2 text-gray-600">Leading a team of healthcare professionals in providing exceptional patient care and implementing innovative treatment protocols. Specializing in complex medical cases and mentoring junior physicians.</p>
                </div>
              </div>
              <div className="relative pl-8 border-l-2 border-blue-200 pb-8">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-1 border-2 border-white"></div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Attending Physician</h4>
                  <p className="text-blue-600 font-medium">Brigham and Women's Hospital • 2013 - 2018</p>
                  <p className="mt-2 text-gray-600">Provided comprehensive care to a diverse patient population, focusing on preventive medicine and chronic disease management. Served on the hospital's Quality Improvement Committee.</p>
                </div>
              </div>
              <div className="relative pl-8">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-1 border-2 border-white"></div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Resident Physician</h4>
                  <p className="text-blue-600 font-medium">Massachusetts General Hospital • 2009 - 2012</p>
                  <p className="mt-2 text-gray-600">Completed residency training in Internal Medicine, receiving the Resident Excellence in Patient Care Award in 2012.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              Education & Certifications
            </h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900">Doctor of Medicine (M.D.)</h4>
                <p className="text-blue-600">Harvard Medical School • 2005 - 2009</p>
                <p className="mt-1 text-sm text-gray-600">Graduated with Honors in Internal Medicine</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900">Bachelor of Science in Biology</h4>
                <p className="text-blue-600">Stanford University • 2001 - 2005</p>
                <p className="mt-1 text-sm text-gray-600">Summa Cum Laude, Phi Beta Kappa</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900">Board Certifications</h4>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>American Board of Internal Medicine (ABIM)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>American Board of Geriatric Medicine</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Advanced Cardiac Life Support (ACLS) Certified</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Research & Publications */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              Research & Publications
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h4 className="text-lg font-medium text-gray-900">Advancements in Preventive Cardiology</h4>
                <p className="text-blue-600 text-sm">New England Journal of Medicine • March 2023</p>
                <p className="mt-1 text-gray-600 text-sm">Co-authored research on innovative approaches to cardiovascular disease prevention in high-risk populations.</p>
                <a href="#" className="inline-flex items-center text-blue-600 text-sm mt-2 hover:underline">
                  Read Publication
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h4 className="text-lg font-medium text-gray-900">Diabetes Management in the Elderly</h4>
                <p className="text-blue-600 text-sm">Journal of the American Geriatrics Society • November 2022</p>
                <p className="mt-1 text-gray-600 text-sm">Led a multi-center study on personalized diabetes treatment protocols for geriatric patients.</p>
                <a href="#" className="inline-flex items-center text-blue-600 text-sm mt-2 hover:underline">
                  Read Publication
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h4 className="text-lg font-medium text-gray-900">Innovations in Chronic Disease Management</h4>
                <p className="text-blue-600 text-sm">The Lancet • July 2021</p>
                <p className="mt-1 text-gray-600 text-sm">Contributed to a comprehensive review of emerging technologies in chronic disease monitoring and management.</p>
                <a href="#" className="inline-flex items-center text-blue-600 text-sm mt-2 hover:underline">
                  Read Publication
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Patient Testimonials */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              Patient Testimonials
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-lg">SJ</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900">Sarah Johnson</h4>
                    <div className="flex items-center mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"Dr. Raut's expertise and compassionate care have been life-changing. She takes the time to listen and explain everything clearly. I've never felt more confident in a physician's care."</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-lg">MC</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900">Michael Chen</h4>
                    <div className="flex items-center mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"The best internal medicine doctor I've ever had. Her attention to detail and thorough approach is unmatched. She's helped me manage my diabetes better than I ever thought possible."</p>
              </div>
            </div>
          </div>

          {/* Personal Approach */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-4">My Approach to Patient Care</h3>
            <div className="prose prose-blue text-blue-100 max-w-none">
              <p className="mb-4">
                I believe that effective healthcare is built on a foundation of trust, open communication, and mutual respect. My approach combines the latest medical research with personalized attention to each patient's unique needs and circumstances.
              </p>
              <p className="mb-4">
                Every patient is more than just a collection of symptoms. I take the time to understand your health history, lifestyle, and personal goals to develop a comprehensive care plan that works for you.
              </p>
              <p>
                Whether you're coming in for a routine check-up or managing a complex medical condition, you can expect compassionate, evidence-based care that puts your well-being first.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Take Charge of Your Health?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Schedule an appointment today and experience personalized, compassionate healthcare from a physician who truly cares about your well-being.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#appointment" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition duration-150 ease-in-out">
                Book an Appointment
              </a>
              <a href="tel:+16175551234" className="px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium rounded-lg shadow-sm transition duration-150 ease-in-out">
                Call Now: (617) 555-1234
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
