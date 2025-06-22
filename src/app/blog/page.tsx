'use client';

import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Search, Tag, ChevronRight } from 'lucide-react';
import Image from 'next/image';

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
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Health & Wellness Blog
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Stay informed with the latest health tips, medical news, and wellness advice from our experts.
            </p>
            
            {/* Search Bar */}
            <div className="mt-8 max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-transparent rounded-md leading-5 bg-blue-600 bg-opacity-25 text-white placeholder-blue-200 focus:outline-none focus:bg-white focus:ring-2 focus:ring-white focus:text-gray-900 focus:placeholder-gray-500 transition duration-150 ease-in-out"
                  placeholder="Search articles..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative py-16 bg-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/light-wool.png')] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      cat.active 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat.name} 
                    <span className="ml-1 text-xs opacity-80">({cat.count})</span>
                  </button>
                ))}
              </div>

              {/* Articles Grid */}
              <div className="grid gap-8 md:grid-cols-2">
                {articles.map((article) => (
                  <article key={article.id} className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-xs text-gray-500 mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        <time dateTime={new Date(article.date).toISOString()}>
                          {article.date}
                        </time>
                        <span className="mx-2">•</span>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {article.readTime}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        <Link href={`/blog/${article.id}`}>
                          {article.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.map((tag) => (
                          <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link 
                        href={`/blog/${article.id}`}
                        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                      >
                        Read more
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <nav className="mt-12 flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6" aria-label="Pagination">
                <div className="hidden sm:block">
                  <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of{' '}
                    <span className="font-medium">12</span> results
                  </p>
                </div>
                <div className="flex flex-1 justify-between sm:justify-end space-x-3">
                  <button
                    type="button"
                    className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    className="relative inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Next
                  </button>
                </div>
              </nav>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 mt-12 lg:mt-0">
              {/* About Card */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">About Our Blog</h3>
                  <p className="text-gray-600 mb-4">
                    Welcome to our health and wellness blog, where we share expert advice, health tips, and the latest medical insights to help you live your healthiest life.
                  </p>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                    Subscribe to Newsletter
                  </button>
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <a
                        key={tag.name}
                        href="#"
                        className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                      >
                        {tag.name}
                        <span className="ml-1 text-gray-500">({tag.count})</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <Link key={post.id} href={`/blog/${post.id}`} className="group flex items-center gap-4">
                        <div className="flex-shrink-0 h-16 w-16 overflow-hidden rounded-lg">
                          <Image
                            src={post.image}
                            alt={post.title}
                            width={64}
                            height={64}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
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
