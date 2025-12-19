import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import NewsImg1 from "../assets/images/cfl.jpg";
import NewsHero from "../assets/images/NewsBanner.jpg";
import { Link } from "react-router-dom";

const newsData = [
  {
    id: 1,
    image: NewsImg1,
    title: "Cambodian Development League Has Reached Week 5",
    date: "12 Nov 2025 04:37",
    author: "Admin",
    description:
      "As of November 11, 2025, the Cambodian Development League has reached its fifth week with exciting matches and young talents showing their skills.",
  },
  {
    id: 2,
    image: NewsImg1,
    title: "Cambodian Development League Has Reached Week 5",
    date: "12 Nov 2025 04:37",
    author: "Admin",
    description:
      "As of November 11, 2025, the Cambodian Development League has reached its fifth week with exciting matches and young talents showing their skills.",
  },
  {
    id: 3,
    image: NewsImg1,
    title: "Cambodian Development League Has Reached Week 5",
    date: "12 Nov 2025 04:37",
    author: "Admin",
    description:
      "As of November 11, 2025, the Cambodian Development League has reached its fifth week with exciting matches and young talents showing their skills.",
  },
  {
    id: 4,
    image: NewsImg1,
    title: "Cambodian Development League Has Reached Week 5",
    date: "12 Nov 2025 04:37",
    author: "Admin",
    description:
      "As of November 11, 2025, the Cambodian Development League has reached its fifth week with exciting matches and young talents showing their skills.",
  },
  {
    id: 5,
    image: NewsImg1,
    title: "Cambodian Development League Has Reached Week 5",
    date: "12 Nov 2025 04:37",
    author: "Admin",
    description:
      "As of November 11, 2025, the Cambodian Development League has reached its fifth week with exciting matches and young talents showing their skills.",
  },
  {
    id: 6,
    image: NewsImg1,
    title: "Cambodian Development League Has Reached Week 5",
    date: "12 Nov 2025 04:37",
    author: "Admin",
    description:
      "As of November 11, 2025, the Cambodian Development League has reached its fifth week with exciting matches and young talents showing their skills.",
  },
  {
    id: 7,
    image: NewsImg1,
    title: "Cambodian Development League Has Reached Week 5",
    date: "12 Nov 2025 04:37",
    author: "Admin",
    description:
      "As of November 11, 2025, the Cambodian Development League has reached its fifth week with exciting matches and young talents showing their skills.",
  },
  {
    id: 8,
    image: NewsImg1,
    title: "Cambodian Development League Has Reached Week 5",
    date: "12 Nov 2025 04:37",
    author: "Admin",
    description:
      "As of November 11, 2025, the Cambodian Development League has reached its fifth week with exciting matches and young talents showing their skills.",
  },
  {
    id: 9,
    image: NewsImg1,
    title: "Cambodian Development League Has Reached Week 5",
    date: "12 Nov 2025 04:37",
    author: "Admin",
    description:
      "As of November 11, 2025, the Cambodian Development League has reached its fifth week with exciting matches and young talents showing their skills.",
  },
  {
    id: 10,
    image: NewsImg1,
    title: "Cambodian Development League Has Reached Week 5",
    date: "12 Nov 2025 04:37",
    author: "Admin",
    description:
      "As of November 11, 2025, the Cambodian Development League has reached its fifth week with exciting matches and young talents showing their skills.",
  },
];

const NewsPage = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  return (
    <>
      <Header />

      {/* HERO BANNER */}
      <HeroBanner
        title="Latest News"
        subtitle="Official updates, stories, and announcements from Cambodia Football League"
        background={NewsHero}
      />

      {/* NEWS LIST */}
      <div className="w-full min-h-screen bg-white pt-10">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8 pb-16">
          {newsData.slice(0, visibleCount).map((item) => (
            <div
              key={item.id}
              className="w-full bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={item.image}
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
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
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

          {/* LOAD MORE BUTTON */}
          {visibleCount < newsData.length && (
            <div className="w-full flex justify-start pb-20">
              <button
                onClick={() => setVisibleCount(visibleCount + 3)}
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
