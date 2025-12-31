import React from "react";
import { useParams, Link } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { latestNews } from "../services/mockData";

const NewsDetailPage = () => {
  const { id } = useParams();

  const news = latestNews.find((item) => item.id === Number(id));

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
      <div className="container mx-auto px-4 pt-16 pb-16">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          {news.title}
        </h1>
        <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
          <span>{news.author}</span>
          <span>•</span>
          <span>{news.date}</span>
        </div>
        <img
          src={news.thumbnail}
          alt={news.title}
          className="w-full h-[420px] object-cover rounded-2xl mb-8"
        />
        <div className="text-gray-700 leading-relaxed space-y-4 whitespace-pre-line">
          {news.description}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NewsDetailPage;
