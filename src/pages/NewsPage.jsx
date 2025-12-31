import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import { Link } from "react-router";
import { latestNews } from "../services/mockData";

const NewsPage = () => {
  const [visibleCount, setVisibleCount] = useState(8);

  return (
    <>
      <Header />

      {/* HERO BANNER */}
      <HeroBanner
        title="Latest News"
        subtitle="Official updates, stories, and announcements from Cambodia Football League"
        background={latestNews[0].thumbnail}
      />

      {/* NEWS LIST */}
      <div className="bg-white pt-16 min-h-screen">
        <div className="container mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {latestNews.slice(0, visibleCount).map((item) => (
              <div
                key={item.id}
                className="w-full bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-56 sm:h-64 md:h-56 lg:h-60 object-cover"
                />
                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-3 text-gray-500 text-sm mb-2 flex-wrap">
                    <span>{item.author}</span>
                    <span>{item.date}</span>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <Link
                    to={`/news/${item.id}`}
                    className="text-blue-600 text-sm font-medium hover:underline"
                  >
                    Continue Reading →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {/* LOAD MORE BUTTON */}
          {visibleCount < latestNews.length && (
            <div className="flex justify-center mt-14 pb-16">
              <button
                onClick={() => setVisibleCount(visibleCount + 4)}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewsPage;
