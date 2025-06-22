import Image from 'next/image';

const teamMembers = [
  {
    name: 'Dr. Kishori Raut',
    role: 'Primary Care Physician',
    bio: 'Board certified with over 15 years of experience in family medicine and internal medicine.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80',
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Cardiologist',
    bio: 'Specializes in preventive cardiology and heart disease management.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80',
  },
  {
    name: 'Dr. Sarah Johnson',
    role: 'Pediatrician',
    bio: 'Dedicated to providing compassionate care for infants, children, and adolescents.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80',
  },
];

export default function Team() {
  return (
    <div className="relative py-16 md:py-24 bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full mb-4">
            Our Experts
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600">
            Dedicated healthcare professionals committed to providing exceptional care and support for all your medical needs.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid gap-8 md:grid-cols-3 md:gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-72 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 300px) 100vw, 300px"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="mt-1 text-blue-600 font-medium">{member.role}</p>
                <p className="mt-3 text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
