import { notFound } from 'next/navigation';
import Image from 'next/image';
import { CheckCircle, Clock, User, Calendar, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

// This would typically be a database query
const getService = (id: string) => {
  const services = [
    {
      id: 'general-checkup',
      title: 'General Health Checkup',
      description: 'Comprehensive health assessment to evaluate your overall well-being and detect potential health issues early.',
      longDescription: [
        'Our General Health Checkup is a thorough evaluation of your overall health status. This comprehensive examination is designed to detect potential health issues before they become serious, allowing for early intervention and treatment.',
        'During your checkup, our healthcare professionals will review your medical history, perform a physical examination, and order any necessary diagnostic tests. We take a holistic approach to your health, considering both physical and lifestyle factors that may impact your well-being.'
      ],
      benefits: [
        'Early detection of potential health issues',
        'Personalized health recommendations',
        'Baseline measurements for future comparisons',
        'Lifestyle and nutrition counseling',
        'Vaccination status review'
      ],
      whatToExpect: [
        'Review of medical history and lifestyle factors',
        'Vital signs measurement (blood pressure, heart rate, etc.)',
        'Physical examination',
        'Basic laboratory tests (blood work, urinalysis)',
        'Discussion of findings and recommendations'
      ],
      preparation: [
        'Fast for 8-12 hours before your appointment',
        'Bring a list of current medications and supplements',
        'Wear comfortable, loose-fitting clothing',
        'Bring your insurance information and ID',
        'Arrive 15 minutes early to complete paperwork'
      ],
      duration: '60-90 minutes',
      price: '$199',
      image: 'https://images.unsplash.com/photo-1505751172876-fa15e7b073c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
      category: 'Preventive Care',
      doctor: 'Dr. Michael Chen',
      doctorImage: 'https://randomuser.me/api/portraits/men/32.jpg',
      doctorSpecialty: 'Family Medicine',
      faqs: [
        {
          question: 'How often should I get a general checkup?',
          answer: 'For most adults, an annual checkup is recommended. However, your doctor may suggest more frequent visits based on your age, medical history, and risk factors.'
        },
        {
          question: 'What tests are included in the checkup?',
          answer: 'The checkup typically includes blood pressure measurement, cholesterol screening, blood glucose test, complete blood count, and other tests based on your age and risk factors.'
        },
        {
          question: 'Is the checkup covered by insurance?',
          answer: 'Most health insurance plans cover an annual preventive visit. However, coverage may vary, so we recommend checking with your insurance provider.'
        }
      ]
    },
    // Add more services as needed
  ];

  return services.find(service => service.id === id) || null;
};

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const service = getService(params.id);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-700">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt=""
            className="h-full w-full object-cover opacity-20"
            fill
            sizes="100vw"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-blue-100">
              {service.description}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg prose-blue mx-auto">
                <h2 className="text-2xl font-bold text-gray-900">About This Service</h2>
                {service.longDescription.map((paragraph, index) => (
                  <p key={index} className="text-gray-600">
                    {paragraph}
                  </p>
                ))}

                <h2 className="mt-12 text-2xl font-bold text-gray-900">What's Included</h2>
                <ul role="list" className="mt-6 space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex">
                      <CheckCircle className="h-6 w-6 flex-shrink-0 text-blue-600" aria-hidden="true" />
                      <span className="ml-3 text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="mt-12 text-2xl font-bold text-gray-900">What to Expect</h2>
                <p className="text-gray-600">
                  During your {service.title.toLowerCase()}, you can expect the following:
                </p>
                <ul role="list" className="mt-4 space-y-2">
                  {service.whatToExpect.map((item, index) => (
                    <li key={index} className="flex">
                      <span className="mr-2 text-blue-600">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="mt-12 text-2xl font-bold text-gray-900">Preparation</h2>
                <p className="text-gray-600">
                  To make the most of your appointment, please follow these preparation guidelines:
                </p>
                <ul role="list" className="mt-4 space-y-2">
                  {service.preparation.map((item, index) => (
                    <li key={index} className="flex">
                      <span className="mr-2 text-blue-600">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="mt-12 text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
                <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                  {service.faqs.map((faq, index) => (
                    <div key={index} className="pt-6">
                      <dt className="text-lg font-medium text-gray-900">{faq.question}</dt>
                      <dd className="mt-2 text-base text-gray-600">{faq.answer}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="rounded-2xl bg-gray-50 p-6 shadow-sm">
                <h2 className="text-lg font-medium text-gray-900">Service Details</h2>
                <div className="mt-6 space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Clock className="h-6 w-6 text-blue-600" aria-hidden="true" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-500">Duration</p>
                      <p className="text-sm text-gray-900">{service.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <span className="h-6 w-6 text-blue-600">$</span>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-500">Price</p>
                      <p className="text-sm text-gray-900">
                        {service.price} <span className="text-gray-500">(may vary by insurance)</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <User className="h-6 w-6 text-blue-600" aria-hidden="true" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-500">Provider</p>
                      <div className="mt-1 flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <Image
                            className="h-10 w-10 rounded-full"
                            src={service.doctorImage}
                            alt={service.doctor}
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">{service.doctor}</p>
                          <p className="text-xs text-gray-500">{service.doctorSpecialty}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link
                      href="/appointment"
                      className="flex w-full justify-center rounded-md bg-blue-600 px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Book Appointment
                    </Link>
                    <p className="mt-2 text-center text-xs text-gray-500">
                      Or call us at{' '}
                      <a href="tel:+15551234567" className="font-medium text-blue-600 hover:text-blue-500">
                        (555) 123-4567
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-blue-50 p-6">
                <h3 className="text-lg font-medium text-blue-800">Need help choosing a service?</h3>
                <p className="mt-2 text-sm text-blue-700">
                  Our team is here to help you find the right care. Contact us for personalized recommendations.
                </p>
                <div className="mt-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
                  >
                    Contact us <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Services */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Related Services
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-gray-600">
              Explore other services that might be of interest to you.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white hover:shadow-md transition-shadow"
              >
                <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none sm:h-48">
                  <Image
                    src={`https://source.unsplash.com/random/400x300?medical,${i}`}
                    alt=""
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    <Link href="/services/preventive-care">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {i === 1 && 'Preventive Care'}
                      {i === 2 && 'Chronic Disease Management'}
                      {i === 3 && 'Women\'s Health'}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {i === 1 && 'Routine checkups and screenings to maintain optimal health.'}
                    {i === 2 && 'Comprehensive care for managing chronic conditions.'}
                    {i === 3 && 'Specialized care for women at every stage of life.'}
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    href="/appointment"
                    className="text-sm font-medium text-blue-600 hover:text-blue-500"
                  >
                    Learn more<span aria-hidden="true"> &rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
