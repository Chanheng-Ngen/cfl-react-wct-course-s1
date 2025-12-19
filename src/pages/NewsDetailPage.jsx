import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsImg1 from "../assets/images/cfl.jpg";

const newsData = [
  {
    id: 1,
    image: NewsImg1,
    title: "Cambodian Development League Has Reached Week 5",
    date: "12 Nov 2025 04:37",
    author: "Admin",
    content: `
      As of November 11, 2025, the Cambodian Development League has reached
      its fifth week with exciting matches and young talents showing their skills.

      The league continues to grow in popularity, attracting fans from across
      the country and providing a platform for young footballers to develop.

      Officials stated that the competition level has improved significantly,
      and more development programs are planned for the future.
    `,
  },
  {
    id: 2,
    image: NewsImg1,
    title: "Cambodian Development League Has Reached Week 5",
    date: "12 Nov 2025 04:37",
    author: "Admin",
    content: `
      Another exciting week of Cambodian football has concluded with impressive
      performances from young players across the league.
    `,
  },
];

const NewsDetailPage = () => {
  const { id } = useParams();

  const news = newsData.find((item) => item.id === Number(id));

  if (!news) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-600 text-lg">News not found.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Back button */}
        <Link
          to="/news"
          className="inline-block mb-6 text-blue-600 font-medium hover:underline"
        >
          ← Back to News
        </Link>

        {/* Title */}
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          {news.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
          <span>{news.author}</span>
          <span>•</span>
          <span>{news.date}</span>
        </div>

        {/* Image */}
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-[420px] object-cover rounded-2xl mb-8"
        />

        {/* Content */}
        <div className="text-gray-700 leading-relaxed space-y-4 whitespace-pre-line">
          {news.content}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NewsDetailPage;
