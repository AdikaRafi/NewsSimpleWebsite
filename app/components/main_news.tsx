'use client';

import Image from 'next/image';
import { Clock } from 'lucide-react';
import { forceHttps } from '../api/news_data';

// Define News Item Interface
interface NewsItem {
  article_id: string | number;
  title: string;
  link: string;
  category: string;
  image_url: string;
  source_name: string;
  pubDate: string;
  description: string;
}

const FeaturedNews = ({ news = [] }: { news?: NewsItem[] }) => {
  if (news.length < 1) return null;

  const [mainNews, ...sideNews] = news;

  return (
    <section className="py-8 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Label Section */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <span className="w-2 h-8 bg-gray-900 dark:bg-white/90 rounded-sm inline-block"></span>
            Main News
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Section: Main Hero Article (Large) */}
          <div className="lg:col-span-2 group relative overflow-hidden rounded-2xl shadow-sm">
            <a href={`${forceHttps(mainNews.link)}`} className="block h-full w-full">
              {/* Image with Zoom Effect */}
              <div className="relative h-[400px] lg:h-full w-full overflow-hidden">
                <Image
                  src={forceHttps(mainNews.image_url) || '/globe.svg'}
                  alt={mainNews.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 p-6 sm:p-8 w-full z-10">
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-bold text-white uppercase tracking-wider bg-red-600 rounded-md">
                    {mainNews.category}
                  </span>
                  <h3 className="mb-2 font-serif text-2xl sm:text-4xl font-bold text-white leading-tight group-hover:text-red-100">
                    {mainNews.title}
                  </h3>
                  <p className="hidden sm:block text-gray-200 mb-4 text-sm sm:text-base line-clamp-2">
                    {mainNews.description}
                  </p>
                  
                  {/* Meta Data */}
                  <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-300">
                    <span className="font-semibold text-white">{mainNews.source_name}</span>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {mainNews.pubDate}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Right Section: Side Articles (Stack Vertikal) */}
          <div className="flex flex-col gap-8">
            {sideNews.slice(0, 2).map((item) => (
              <a key={item.article_id} href={`${forceHttps(item.link)}`} className="group flex flex-col h-full bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-800">
                
                {/* Image Wrapper */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={forceHttps(item.image_url) || '/globe.svg'}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                     <span className="px-2 py-1 text-xs font-bold text-white bg-black/60 backdrop-blur-sm rounded-md">
                        {item.category}
                     </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-5 flex-grow border-t-0 rounded-b-xl">
                  <div>
                    <h4 className="font-serif text-lg font-bold text-gray-900 dark:!text-white leading-snug mb-2 group-hover:text-red-600">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <Clock size={14} />
                    <span>{item.pubDate}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        {/* Other News Section, to show 7 news */}
          <section className="mt-8">
            <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="w-2 h-8 bg-gray-900 dark:bg-white/90 rounded-sm inline-block"></span>
                Other News
            </h2>
            </div>
            <div className="flex flex-col gap-4">
            {news.slice(3, 11).map((item) => (
                <a
                key={item.article_id}
                href={forceHttps(item.link) || ""}
                className="group flex flex-row gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:shadow-md transition bg-transparent dark:bg-gray-900"
                >
                {/* IMAGE - LEFT */}
                <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden rounded-lg">
                    <Image
                    src={item.image_url}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                {/* TEXT - RIGHT */}
                <div className="flex flex-col justify-center">
                    <h4 className="font-serif text-lg font-bold leading-snug text-gray-900 group-hover:text-red-600 dark:!text-white">
                    {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {item.description}
                    </p>
                </div>
                </a>
            ))}
            </div>
          </section>
      </div>
    </section>
  );
};

export default FeaturedNews;