import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Video1 from "../assets/video/Yamal.mp4";
import Thumb1 from "../assets/images/thumbnail1.png";
import Thumb2 from "../assets/images/thumbnail2.png";

const videosData = [
  {
    id: 1,
    title: "Nagaworld FC vs Svay Rieng FC | WEEK 12 Highlights",
    videoUrl: Video1,
    thumbnail: Thumb1,
    duration: "05:32",
  },
  {
    id: 2,
    title: "Top Goals of the Week | CPL",
    videoUrl: Video1,
    thumbnail: Thumb2,
    duration: "04:18",
  },
  {
    id: 3,
    title: "Best Saves Compilation | CPL",
    videoUrl: Video1,
    thumbnail: Thumb1,
    duration: "06:45",
  },
  {
    id: 4,
    title: "Best Goals of the Month | CPL",
    videoUrl: Video1,
    thumbnail: Thumb2,
    duration: "07:10",
  },
  {
    id: 5,
    title: "Amazing Goalkeeper Saves",
    videoUrl: Video1,
    thumbnail: Thumb1,
    duration: "04:55",
  },
  {
    id: 6,
    title: "Match Highlights Week 13",
    videoUrl: Video1,
    thumbnail: Thumb2,
    duration: "06:02",
  },
  {
    id: 7,
    title: "Top Assists Compilation",
    videoUrl: Video1,
    thumbnail: Thumb1,
    duration: "03:48",
  },
  {
    id: 8,
    title: "Amazing Goalkeeper Saves",
    videoUrl: Video1,
    thumbnail: Thumb1,
    duration: "04:55",
  },
  {
    id: 9,
    title: "Match Highlights Week 13",
    videoUrl: Video1,
    thumbnail: Thumb2,
    duration: "06:02",
  },
  {
    id: 10,
    title: "Top Assists Compilation",
    videoUrl: Video1,
    thumbnail: Thumb1,
    duration: "03:48",
  },
  {
    id: 11,
    title: "Match Highlights Week 13",
    videoUrl: Video1,
    thumbnail: Thumb2,
    duration: "06:02",
  },
  {
    id: 12,
    title: "Top Assists Compilation",
    videoUrl: Video1,
    thumbnail: Thumb1,
    duration: "03:48",
  },
];

const VideoHighlightsPro = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [visibleCount, setVisibleCount] = useState(9);

  return (
    <>
      <Header />

      <div className="min-h-screen bg-white pb-20">
        {/* Title */}
        <div className="text-center py-10">
          <h1 className="text-3xl font-extrabold uppercase tracking-wide">
            Video Highlights
          </h1>
        </div>

        {/* Video Grid */}
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videosData.slice(0, visibleCount).map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="group cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden rounded-xl bg-black">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />

                {/* Play Icon */}
                <div className="absolute bottom-3 left-3 bg-white/90 text-black rounded-full w-10 h-10 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition">
                  ▶
                </div>

                {/* Duration */}
                <span className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-3 font-semibold text-gray-900 line-clamp-2">
                {video.title}
              </h3>
            </div>
          ))}
        </div>

        {/* LOAD MORE BUTTON (LIKE NEWS PAGE) */}
        {visibleCount < videosData.length && (
          <div className="flex justify-center mt-14">
            <button
              onClick={() => setVisibleCount(visibleCount + 3)}
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          <div className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden">
            <video
              src={activeVideo.videoUrl}
              controls
              autoPlay
              className="w-full aspect-video"
            />

            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 text-white text-3xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default VideoHighlightsPro;
