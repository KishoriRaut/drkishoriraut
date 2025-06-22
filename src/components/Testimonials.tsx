import Image from 'next/image';

const testimonials = [
  {
    name: 'John Doe',
    role: 'Patient',
    content: 'Dr. Smith provided exceptional care during my treatment. Her expertise and compassion made all the difference in my recovery.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
  },
  {
    name: 'Jane Smith',
    role: 'Patient',
    content: 'The entire staff was professional and caring. I highly recommend Dr. Smith for anyone seeking quality healthcare.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
  },
  {
    name: 'Michael Johnson',
    role: 'Patient',
    content: 'Dr. Smith took the time to listen to all my concerns and provided clear explanations. Truly a wonderful doctor!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80',
  },
];

export default function Testimonials() {
  return (
    <div className="relative">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-start">
              <div className="relative h-14 w-14 md:h-16 md:w-16 flex-shrink-0 rounded-full overflow-hidden border-2 border-blue-100">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="object-cover"
                  fill
                  sizes="(max-width: 64px) 100vw, 64px"
                  priority={index < 3} // Load first 3 images with higher priority
                />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-blue-600">{testimonial.role}</p>
              </div>
            </div>
            <blockquote className="mt-6">
              <p className="text-gray-700 leading-relaxed">"{testimonial.content}"</p>
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
}
