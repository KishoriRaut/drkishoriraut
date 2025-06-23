import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { getSortedPostsData } from '@/lib/posts';

export default function BlogPage() {
  const allPosts = getSortedPostsData();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-blue-100">Latest articles and updates</p>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gray-200 relative">
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <span className="mx-2">•</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  <Link href={`/blog/${post.id}`} className="hover:text-blue-600">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags?.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

interface Category {
  name: string;
  count: number;
  active: boolean;
}

interface TagType {
  name: string;
  count: number;
}

interface RecentPost {
  id: number;
  title: string;
  date: string;
  image: string;
}

const categories = [
  { name: 'All', count: 12, active: true },
  { name: 'Preventive Care', count: 4, active: false },
  { name: 'Chronic Conditions', count: 3, active: false },
  { name: 'Wellness', count: 3, active: false },
  { name: 'Nutrition', count: 2, active: false },
];

const popularTags = [
  { name: 'Diabetes', count: 5 },
  { name: 'Heart Health', count: 4 },
  { name: 'Exercise', count: 3 },
  { name: 'Diet', count: 3 },
  { name: 'Immunity', count: 2 },
  { name: 'Mental Health', count: 2 },
];

const recentPosts = [
  {
    id: 6,
    title: '10 Tips for Better Sleep',
    date: 'May 20, 2025',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 7,
    title: 'Understanding Blood Pressure',
    date: 'May 15, 2025',
    image: 'https://images.unsplash.com/photo-1581595219315-a187dd160949?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 8,
    title: 'The Mediterranean Diet Explained',
    date: 'May 10, 2025',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
];

const articles = [
  {
    id: 1,
    title: 'Understanding Common Monsoon Illnesses in Nepal',
    excerpt: 'Learn about the most common illnesses during monsoon season in Nepal and how to prevent them.',
    date: 'June 21, 2025',
    readTime: '6 min read',
    category: 'Seasonal Health',
    image: 'https://images.unsplash.com/photo-1601132359862-8d310e62c8af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Monsoon', 'Prevention', 'Seasonal']
  },
  {
    id: 2,
    title: 'The Importance of Regular Health Check-ups in Your 40s',
    excerpt: 'Key health screenings and tests recommended for individuals in their 40s to maintain optimal health.',
    date: 'June 15, 2025',
    readTime: '5 min read',
    category: 'Preventive Care',
    image: 'https://images.unsplash.com/photo-1505751172876-fa15e7b073c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Check-ups', 'Prevention', 'Aging']
  },
  {
    id: 3,
    title: 'Managing Diabetes: Lod sugar levels.',
    excerpt: 'Practical lifestyle changes to help manage diabetes and maintain healthy blood sugar levels.',
    date: 'June 8, 2025',
    readTime: '7 min read',
    category: 'Chronic Conditions',
    image: 'https://images.unsplash.com/photo-1532938914889-3d469dbb23d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Diabetes', 'Lifestyle', 'Chronic']
  },
  {
    id: 4,
    title: 'The Benefits of Yoga for Overall Well-being',
    excerpt: 'How incorporating yoga into your routine can improve both physical and mental health.',
    date: 'June 1, 2025',
    readTime: '5 min read',
    category: 'Wellness',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Yoga', 'Wellness', 'Exercise']
  },
  {
    id: 5,
    title: 'Nutrition Tips for a Strong Immune System',
    excerpt: 'Essential nutrients and foods that can help boost your immune system naturally.',
    date: 'May 25, 2025',
    readTime: '4 min read',
    category: 'Nutrition',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Nutrition', 'Immunity', 'Diet']
  },
  {
    id: 6,
    title: 'Understanding and Preventing Hypertension',
    excerpt: 'Learn about the risks of high blood pressure and effective prevention strategies.',
    date: 'May 18, 2025',
    readTime: '6 min read',
    category: 'Heart Health',
    image: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Heart Health', 'Hypertension', 'Prevention']
  },
];

export default function BlogPage() {
  const allPosts = getSortedPostsData();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-blue-100">Latest articles and updates</p>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gray-200 relative">
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <span className="mx-2">•</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  <Link href={`/blog/${post.id}`} className="hover:text-blue-600">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags?.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
            <span className="block">Want to stay updated with our latest articles?</span>
            <span className="block text-blue-600">Subscribe to our newsletter.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Subscribe Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
