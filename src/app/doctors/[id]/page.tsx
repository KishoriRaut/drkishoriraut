import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Calendar, Clock, MapPin, Phone, Mail, Award, GraduationCap, Briefcase, Languages, Star, StarHalf } from 'lucide-react';
import Link from 'next/link';

// This would typically be a database query
const getDoctor = (id: string) => {
  const doctors = [
    {
      id: 'jane-smith',
      name: 'Dr. Jane Smith',
      title: 'MD, Internal Medicine',
      specialty: 'Internal Medicine',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      bio: 'Dr. Jane Smith is a board-certified internal medicine physician with over 15 years of experience in providing comprehensive care for adults. She is dedicated to building long-term relationships with her patients and providing personalized, evidence-based care.',
      education: [
        { degree: 'Doctor of Medicine (MD)', institution: 'Harvard Medical School', year: 2005 },
        { degree: 'Residency in Internal Medicine', institution: 'Massachusetts General Hospital', year: 2008 },
        { degree: 'Bachelor of Science in Biology', institution: 'Stanford University', year: 2001, honors: 'Summa Cum Laude' },
      ],
      experience: [
        { position: 'Senior Physician', organization: 'City Medical Center', years: '2015 - Present' },
        { position: 'Attending Physician', organization: 'Metro General Hospital', years: '2008 - 2015' },
        { position: 'Chief Resident', organization: 'Massachusetts General Hospital', years: '2007 - 2008' },
      ],
      certifications: [
        'American Board of Internal Medicine',
        'Advanced Cardiac Life Support (ACLS)',
        'Basic Life Support (BLS)',
      ],
      languages: ['English', 'Spanish', 'French'],
      specialties: [
        'Preventive Medicine',
        'Chronic Disease Management',
        'Hypertension',
        'Diabetes Care',
        'Cholesterol Management',
        'Health Maintenance',
      ],
      availability: [
        { day: 'Monday', hours: '9:00 AM - 5:00 PM' },
        { day: 'Tuesday', hours: '9:00 AM - 5:00 PM' },
        { day: 'Wednesday', hours: '10:00 AM - 6:00 PM' },
        { day: 'Thursday', hours: '9:00 AM - 5:00 PM' },
        { day: 'Friday', hours: '8:00 AM - 4:00 PM' },
        { day: 'Saturday', hours: '9:00 AM - 1:00 PM (Every other)' },
      ],
      rating: 4.8,
      reviewCount: 124,
      location: {
        name: 'Main Medical Center',
        address: '123 Medical Center Drive',
        city: 'Anytown',
        state: 'CA',
        zip: '12345',
        phone: '(555) 123-4567',
        email: 'jane.smith@medicalcenter.com',
      },
    },
    // Add more doctors as needed
  ];

  return doctors.find(doctor => doctor.id === id) || null;
};

export default function DoctorProfilePage({ params }: { params: { id: string } }) {
  const doctor = getDoctor(params.id);

  if (!doctor) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-blue-700">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16">
            <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={doctor.image}
                  alt={`${doctor.name}, ${doctor.title}`}
                  className="object-cover object-top"
                  width={400}
                  height={600}
                  priority
                />
              </div>
            </div>
            <div className="lg:col-start-1 lg:row-start-1 lg:row-span-2">
              <div className="flex items-center">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 flex-shrink-0 ${
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
                <p className="ml-2 text-sm font-medium text-blue-100">
                  {doctor.rating} <span className="text-blue-200">({doctor.reviewCount} reviews)</span>
                </p>
              </div>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {doctor.name}
              </h1>
              <p className="mt-2 text-xl text-blue-100">{doctor.title}</p>
              <p className="mt-4 text-lg leading-8 text-blue-50">
                {doctor.bio}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {doctor.specialties.slice(0, 4).map((specialty) => (
                  <span
                    key={specialty}
                    className="inline-flex items-center rounded-full bg-blue-600/20 px-3 py-1 text-sm font-medium text-white"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex gap-4">
                <Link
                  href="/appointment"
                  className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Book Appointment
                </Link>
                <Link
                  href={`/contact`}
                  className="rounded-md bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* About Section */}
              <section aria-labelledby="about-heading">
                <h2 id="about-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                  About Dr. {doctor.name.split(' ').pop()}
                </h2>
                <div className="mt-6 space-y-6 text-base text-gray-600">
                  <p>{doctor.bio}</p>
                  <p>
                    Dr. {doctor.name.split(' ').pop()} is committed to providing compassionate, patient-centered care. She takes the time to listen to her patients and involves them in their healthcare decisions.
                  </p>
                </div>
              </section>

              {/* Education Section */}
              <section aria-labelledby="education-heading" className="mt-16">
                <h2 id="education-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                  Education & Training
                </h2>
                <div className="mt-6 space-y-8">
                  {doctor.education.map((item, index) => (
                    <div key={index} className="relative flex gap-x-4">
                      <div className="relative">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                          <GraduationCap className="h-6 w-6 text-blue-600" aria-hidden="true" />
                        </div>
                        {index !== doctor.education.length - 1 && (
                          <div className="absolute left-5 top-10 -bottom-8 w-0.5 bg-gray-200" />
                        )}
                      </div>
                      <div className="flex-auto">
                        <h3 className="text-lg font-medium text-gray-900">{item.degree}</h3>
                        <p className="text-gray-600">{item.institution}</p>
                        <p className="text-sm text-gray-500">{item.year} {item.honors ? `• ${item.honors}` : ''}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Experience Section */}
              <section aria-labelledby="experience-heading" className="mt-16">
                <h2 id="experience-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                  Professional Experience
                </h2>
                <div className="mt-6 space-y-8">
                  {doctor.experience.map((item, index) => (
                    <div key={index} className="relative flex gap-x-4">
                      <div className="relative">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                          <Briefcase className="h-6 w-6 text-blue-600" aria-hidden="true" />
                        </div>
                        {index !== doctor.experience.length - 1 && (
                          <div className="absolute left-5 top-10 -bottom-8 w-0.5 bg-gray-200" />
                        )}
                      </div>
                      <div className="flex-auto">
                        <h3 className="text-lg font-medium text-gray-900">{item.position}</h3>
                        <p className="text-gray-600">{item.organization}</p>
                        <p className="text-sm text-gray-500">{item.years}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Specialties Section */}
              <section aria-labelledby="specialties-heading" className="mt-16">
                <h2 id="specialties-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                  Areas of Expertise
                </h2>
                <div className="mt-6">
                  <ul role="list" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {doctor.specialties.map((specialty) => (
                      <li key={specialty} className="flex items-center">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
                        <span className="ml-3 text-gray-600">{specialty}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Patient Reviews */}
              <section aria-labelledby="reviews-heading" className="mt-16">
                <h2 id="reviews-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                  Patient Reviews
                </h2>
                <div className="mt-6 space-y-10">
                  {[1, 2, 3].map((review) => (
                    <div key={review} className="border-b border-gray-200 pb-10">
                      <div className="flex items-center">
                        <div className="flex items-center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-5 w-5 flex-shrink-0 ${
                                star <= 5 ? 'text-yellow-400' : 'text-gray-300'
                              }`}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        <p className="ml-2 text-sm font-medium text-gray-900">5.0</p>
                      </div>
                      <p className="mt-3 text-gray-600">
                        {review === 1 && 'Dr. Smith is an exceptional physician. She takes the time to listen and explains everything clearly. I never feel rushed during my appointments.'}
                        {review === 2 && 'I\'ve been seeing Dr. Smith for years and wouldn\'t trust anyone else with my healthcare. She\'s thorough, knowledgeable, and genuinely cares.'}
                        {review === 3 && 'The best doctor I\'ve ever had. She remembers details about my health history and always follows up to make sure I\'m doing well.'}
                      </p>
                      <p className="mt-3 text-sm font-medium text-gray-900">
                        {review === 1 && 'Sarah M.'}
                        {review === 2 && 'James T.'}
                        {review === 3 && 'Maria G.'}
                      </p>
                    </div>
                  ))}
                  <div className="mt-6">
                    <a
                      href="#"
                      className="text-sm font-medium text-blue-600 hover:text-blue-500"
                    >
                      Read all {doctor.reviewCount} reviews
                      <span aria-hidden="true"> &rarr;</span>
                    </a>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="rounded-2xl bg-gray-50 p-6 shadow-sm">
                <h2 className="text-lg font-medium text-gray-900">Contact Information</h2>
                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Location</h3>
                    <div className="mt-2 flex">
                      <MapPin className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                      <p className="ml-3 text-sm text-gray-900">
                        {doctor.location.name}<br />
                        {doctor.location.address}<br />
                        {doctor.location.city}, {doctor.location.state} {doctor.location.zip}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                    <div className="mt-2 flex items-center">
                      <Phone className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                      <a href={`tel:${doctor.location.phone.replace(/\D/g, '')}`} className="ml-3 text-sm text-gray-900 hover:text-blue-600">
                        {doctor.location.phone}
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Email</h3>
                    <div className="mt-2 flex items-center">
                      <Mail className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                      <a href={`mailto:${doctor.location.email}`} className="ml-3 text-sm text-gray-900 hover:text-blue-600">
                        {doctor.location.email}
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Languages</h3>
                    <div className="mt-2 flex">
                      <Languages className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                      <p className="ml-3 text-sm text-gray-900">
                        {doctor.languages.join(', ')}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Certifications</h3>
                    <div className="mt-2">
                      <ul className="space-y-2">
                        {doctor.certifications.map((cert) => (
                          <li key={cert} className="flex">
                            <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <span className="ml-2 text-sm text-gray-600">{cert}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Link
                      href="/appointment"
                      className="flex w-full justify-center rounded-md bg-blue-600 px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-blue-50 p-6">
                <h3 className="text-lg font-medium text-blue-800">Office Hours</h3>
                <dl className="mt-4 space-y-4">
                  {doctor.availability.map((day) => (
                    <div key={day.day} className="flex justify-between">
                      <dt className="text-sm font-medium text-blue-700">{day.day}</dt>
                      <dd className="text-sm text-blue-600">{day.hours}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-6">
                  <p className="text-sm text-blue-700">
                    <span className="font-medium">Note:</span> Hours may vary on holidays. Please call to confirm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
