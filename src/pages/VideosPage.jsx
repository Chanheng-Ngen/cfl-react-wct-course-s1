import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import { videoHighlights } from "../services/mockData";

const VideoHighlightsPro = () => {
  const [visibleCount, setVisibleCount] = useState(8);

  return (
    <>
      <Header />
      <HeroBanner
        title=" Video Highlights"
        subtitle="Official updates, stories, and announcements from Cambodia Football League"
        background={videoHighlights[0].thumbnail}
      />

      {/* Video Grid */}
      <div className="w-full min-h-screen bg-white pt-16">
        <div className="container mx-auto px-4 pb-16">
        <div className="max-w-8xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoHighlights.slice(0, visibleCount).map((video) => (
            <a
              key={video.id}
              href={video.videoUrl} target="_blank" rel="noopener noreferrer"
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
            </a>
          ))}
        </div>

        {/* LOAD MORE BUTTON */}
        {visibleCount < videoHighlights.length && (
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

export default VideoHighlightsPro;
