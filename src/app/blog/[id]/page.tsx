'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2, MessageSquare, Facebook, Twitter, Linkedin } from 'lucide-react';
import { getPostData, getSortedPostsData, PostData } from '@/lib/posts';

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const [post, setPost] = React.useState<PostData | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getPostData(params.id);
        setPost(data);
      } catch (err) {
        console.error('Error fetching post:', err);
        setError('Failed to load post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-6 w-48 bg-gray-200 rounded mb-8"></div>
            <div className="h-4 w-32 bg-gray-200 rounded mb-4"></div>
            <div className="h-8 w-full bg-gray-200 rounded mb-6"></div>
            <div className="h-64 bg-gray-200 rounded-lg mb-8"></div>
            <div className="space-y-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-red-600 mb-4">
            {error || 'Post not found'}
          </div>
          <Link 
            href="/blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Calculate read time (assuming 200 words per minute)
  const wordCount = post.contentHtml?.split(/\s+/).length || 0;
  const readTime = Math.ceil(wordCount / 200);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Blog
          </Link>
          
          <article>
            <header className="mb-8">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {post.category}
                </span>
                <span className="mx-2">•</span>
                <time dateTime={post.date} className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span className="mx-2">•</span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {readTime} min read
                </span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-lg mr-3">
                  {post.author ? post.author.charAt(0) : 'A'}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{post.author || 'Admin'}</p>
                  <p className="text-sm text-gray-500">Author</p>
                </div>
              </div>
            </header>

            {post.image && (
              <div className="relative h-96 w-full mb-8 rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <div 
              className="prose max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
            />

            {(post.tags && post.tags.length > 0) && (
              <div className="border-t border-gray-200 pt-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag: string) => (
                    <span key={tag} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <button className="text-gray-500 hover:text-gray-700">
                      <Share2 className="h-5 w-5" />
                    </button>
                    <a href="#comments" className="text-gray-500 hover:text-gray-700 flex items-center">
                      <MessageSquare className="h-5 w-5 mr-1" />
                      <span>Comment</span>
                    </a>
                  </div>
                  <div className="flex space-x-3">
                    <a href="#" className="text-gray-400 hover:text-blue-600">
                      <span className="sr-only">Share on Facebook</span>
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-400">
                      <span className="sr-only">Share on Twitter</span>
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-700">
                      <span className="sr-only">Share on LinkedIn</span>
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <section aria-labelledby="related-heading" className="mt-24">
            <h2 id="related-heading" className="text-2xl font-bold tracking-tight text-gray-900">
              Related articles
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200">
                  <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none sm:h-48">
                    <Image
                      src={`https://source.unsplash.com/random/400x300?health,${i}`}
                      alt=""
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                      width={400}
                      height={300}
                    />
                  </div>
                  <div className="flex flex-1 flex-col space-y-2 p-6">
                    <h3 className="text-lg font-medium text-gray-900">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {i === 1 && 'The Benefits of Regular Exercise'}
                        {i === 2 && 'Nutrition Tips for a Healthy Lifestyle'}
                        {i === 3 && 'Understanding Blood Pressure'}
                      </a>
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-3">
                      {i === 1 && 'Discover how regular physical activity can improve your overall health and reduce the risk of chronic diseases.'}
                      {i === 2 && 'Learn about the essential nutrients your body needs and how to incorporate them into your daily diet.'}
                      {i === 3 && 'Find out what your blood pressure numbers mean and how to keep them in a healthy range.'}
                    </p>
                  </div>
                  <div className="flex-shrink-0 border-t border-gray-200 p-4">
                    <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                      Read more<span className="sr-only">, post title</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
