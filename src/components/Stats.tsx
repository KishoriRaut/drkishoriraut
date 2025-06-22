import { Users, Stethoscope, Award, Clock as ClockIcon } from 'lucide-react';

const stats = [
  { id: 1, name: 'Patients Treated', value: '5000+', icon: Users },
  { id: 2, name: 'Years of Experience', value: '15+', icon: ClockIcon },
  { id: 3, name: 'Medical Services', value: '50+', icon: Stethoscope },
  { id: 4, name: 'Success Rate', value: '98%', icon: Award },
];

export default function Stats() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white px-6 py-8 text-center shadow-xl rounded-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
              <stat.icon className="h-8 w-8 text-blue-600" aria-hidden="true" />
            </div>
            <h3 className="mt-6 text-4xl font-bold text-gray-900">{stat.value}</h3>
            <p className="mt-2 text-base text-gray-600">{stat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
