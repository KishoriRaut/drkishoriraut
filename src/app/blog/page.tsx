import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const articles = [
  {
    id: 1,
    title: 'Understanding Common Monsoon Illnesses in Nepal',
    excerpt: 'Learn about the most common illnesses during monsoon season in Nepal and how to prevent them.',
    date: 'June 21, 2025',
    readTime: '6 min read',
    category: 'Seasonal Health',
    image: 'https://images.unsplash.com/photo-1601132359862-8d310e62c8af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'The Importance of Regular Health Check-ups in Your 40s',
    excerpt: 'Key health screenings and tests recommended for individuals in their 40s to maintain optimal health.',
    date: 'June 15, 2025',
    readTime: '5 min read',
    category: 'Preventive Care',
    image: 'https://images.unsplash.com/photo-1505751172876-fa15e7b073c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Managing Diabetes: Lifestyle Tips for Better Control',
    excerpt: 'Practical lifestyle changes to help manage diabetes and maintain healthy blood sugar levels.',
    date: 'June 8, 2025',
    readTime: '7 min read',
    category: 'Chronic Conditions',
    image: 'https://images.unsplash.com/photo-1532938914889-3d469dbb23d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'The Benefits of Yoga for Overall Well-being',
    excerpt: 'How incorporating yoga into your routine can improve both physical and mental health.',
    date: 'June 1, 2025',
    readTime: '5 min read',
    category: 'Wellness',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Nutrition Tips for a Strong Immune System',
    excerpt: 'Essential nutrients and foods that can help boost your immune system naturally.',
    date: 'May 25, 2025',
    readTime: '4 min read',
    category: 'Nutrition',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'Understanding and Preventing Hypertension',
    excerpt: 'Learn about the risks of high blood pressure and effective prevention strategies.',
    date: 'May 18, 2025',
    readTime: '6 min read',
    category: 'Heart Health',
    image: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

export default function BlogPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Health & Wellness Blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Stay informed with the latest health tips, medical news, and wellness advice from our experts.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {articles.map((article) => (
            <article key={article.id} className="flex flex-col items-start">
              <div className="relative w-full">
                <Image
                  src={article.image}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover"
                  width={400}
                  height={225}
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={new Date(article.date).toISOString()} className="text-gray-500">
                    {article.date}
                  </time>
                  <span className="text-gray-300">•</span>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock className="h-3.5 w-3.5" />
                    {article.readTime}
                  </div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={`/blog/${article.id}`}>
                      <span className="absolute inset-0" />
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{article.excerpt}</p>
                </div>
                <div className="mt-6 flex items-center">
                  <Link
                    href={`/blog/${article.id}`}
                    className="flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500"
                  >
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <nav className="flex items-center space-x-1">
            <a
              href="#"
              className="relative inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
            >
              2
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700">
              ...
            </span>
            <a
              href="#"
              className="relative inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
            >
              8
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
