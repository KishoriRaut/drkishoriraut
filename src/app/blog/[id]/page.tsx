import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Calendar, Clock, User, ArrowLeft, Share2, MessageSquare, Facebook, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

// This would typically be a database query
const getArticle = (id: string) => {
  const articles = [
    {
      id: '1',
      title: 'Understanding Common Monsoon Illnesses in Nepal',
      content: [
        'The monsoon season in Nepal, typically from June to September, brings much-needed relief from the summer heat but also increases the risk of various waterborne and vector-borne diseases. Understanding these illnesses and taking preventive measures can help you stay healthy during this season.',
        '## Common Monsoon Illnesses in Nepal',
        '1. **Dengue Fever**: A mosquito-borne viral infection causing high fever, severe headache, and joint pain. The Aedes mosquito, which transmits dengue, breeds in clean, stagnant water.',
        '2. **Malaria**: Another mosquito-borne disease, more common in the Terai region, causing fever, chills, and flu-like symptoms.',
        '3. **Cholera**: A waterborne bacterial infection causing severe diarrhea and dehydration, often spread through contaminated water.',
        '4. **Typhoid**: Caused by Salmonella typhi bacteria, spread through contaminated food and water, leading to high fever and abdominal pain.',
        '5. **Leptospirosis**: A bacterial infection spread through contact with water contaminated by animal urine, common during floods.',
        '6. **Viral Fever**: Various viral infections causing fever, body aches, and fatigue are common during monsoon.',
        '7. **Gastroenteritis**: Inflammation of the stomach and intestines, often caused by contaminated food or water.',
        '## Prevention Tips',
        '- Use mosquito nets and repellents to prevent mosquito bites.',
        '- Drink only boiled or purified water.',
        '- Maintain good hygiene and wash hands frequently.',
        '- Avoid street food during the monsoon season.',
        '- Keep your surroundings clean and eliminate stagnant water where mosquitoes can breed.',
        '- Get vaccinated for preventable diseases like typhoid if recommended by your doctor.',
        '## When to See a Doctor',
        'Seek medical attention if you experience persistent high fever, severe headache, difficulty breathing, blood in stool, or signs of dehydration.'
      ],
      author: 'Dr. Kishori Raut',
      authorRole: 'General Physician',
      authorImage: 'https://randomuser.me/api/portraits/women/44.jpg',
      date: 'June 21, 2025',
      readTime: '6 min read',
      category: 'Seasonal Health',
      image: 'https://images.unsplash.com/photo-1601132359862-8d310e62c8af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
      tags: ['monsoon', 'prevention', 'public health', 'Nepal']
    },
  ];

  return articles.find(article => article.id === id) || null;
};

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const article = getArticle(params.id);

  if (!article) {
    notFound();
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <Link href="/blog" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to blog
            </Link>
          </div>

          <article>
            <header className="mb-12">
              <div className="flex items-center gap-x-4 text-sm">
                <time dateTime={new Date(article.date).toISOString()} className="text-gray-500">
                  {article.date}
                </time>
                <span className="text-gray-300">•</span>
                <div className="flex items-center gap-1 text-gray-500">
                  <Clock className="h-4 w-4" />
                  {article.readTime}
                </div>
                <span className="text-gray-300">•</span>
                <Link href={`/blog/category/${article.category.toLowerCase()}`} className="relative z-10 rounded-full bg-blue-50 px-3 py-1.5 font-medium text-blue-600 hover:bg-blue-100">
                  {article.category}
                </Link>
              </div>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {article.title}
              </h1>
              <div className="mt-6 flex items-center">
                <div className="relative h-10 w-10 rounded-full bg-gray-100">
                  <Image
                    src={article.authorImage}
                    alt=""
                    className="rounded-full bg-gray-100 object-cover"
                    fill
                    sizes="40px"
                  />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">
                    {article.author}
                  </p>
                  <p className="text-sm text-gray-500">{article.authorRole}</p>
                </div>
              </div>
            </header>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gray-100">
              <Image
                src={article.image}
                alt=""
                className="object-cover"
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
              />
            </div>

            <div className="prose prose-blue prose-lg mx-auto mt-12 max-w-3xl">
              {article.content.map((paragraph, index) => (
                <p key={index} className="text-gray-600 mb-6 leading-8">
                  {paragraph}
                </p>
              ))}

              <div className="mt-12 border-t border-gray-200 pt-8">
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium text-gray-900">Share:</span>
                    <div className="flex space-x-3">
                      <a href="#" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Facebook</span>
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Twitter</span>
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">LinkedIn</span>
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Leave a comment
                  </Link>
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
