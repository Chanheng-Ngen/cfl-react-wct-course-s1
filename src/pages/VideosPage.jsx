import React, { useState } from "react";
import Logo1 from "../assets/images/Logo1.png";
import Logo2 from "../assets/images/Logo2.png";
import Video from "../assets/video/Mbappe.mp4";
import Header from "../components/Header";
import Footer from "../components/Footer";

const videosData = [
  {
    id: 1,
    week: "WEEK12",
    homeTeam: "Nagaworld FC",
    awayTeam: "Preah Khan Reach Svay Rieng FC",
    homeScore: 1,
    awayScore: 2,
    title: "Highlight: Nagaworld FC (1-2) Preah Khan Reach Svay Rieng FC | CPL-WEEK12",
    homeLogo: Logo1,
    awayLogo: Logo2,
    videoFile: Video,
    thumbnail: Video,
  },
  {
    id: 1,
    week: "WEEK12",
    homeTeam: "Nagaworld FC",
    awayTeam: "Preah Khan Reach Svay Rieng FC",
    homeScore: 1,
    awayScore: 2,
    title: "Highlight: Nagaworld FC (1-2) Preah Khan Reach Svay Rieng FC | CPL-WEEK12",
    homeLogo: Logo1,
    awayLogo: Logo2,
    videoFile: Video,
    thumbnail: Video,
  },
  {
    id: 1,
    week: "WEEK12",
    homeTeam: "Nagaworld FC",
    awayTeam: "Preah Khan Reach Svay Rieng FC",
    homeScore: 1,
    awayScore: 2,
    title: "Highlight: Nagaworld FC (1-2) Preah Khan Reach Svay Rieng FC | CPL-WEEK12",
    homeLogo: Logo1,
    awayLogo: Logo2,
    videoFile: Video,
    thumbnail: Video,
  },
  {
    id: 1,
    week: "WEEK12",
    homeTeam: "Nagaworld FC",
    awayTeam: "Preah Khan Reach Svay Rieng FC",
    homeScore: 1,
    awayScore: 2,
    title: "Highlight: Nagaworld FC (1-2) Preah Khan Reach Svay Rieng FC | CPL-WEEK12",
    homeLogo: Logo1,
    awayLogo: Logo2,
    videoFile: Video,
    thumbnail: Video,
  },
  {
    id: 1,
    week: "WEEK12",
    homeTeam: "Nagaworld FC",
    awayTeam: "Preah Khan Reach Svay Rieng FC",
    homeScore: 1,
    awayScore: 2,
    title: "Highlight: Nagaworld FC (1-2) Preah Khan Reach Svay Rieng FC | CPL-WEEK12",
    homeLogo: Logo1,
    awayLogo: Logo2,
    videoFile: Video,
    thumbnail: Video,
  },
  {
    id: 1,
    week: "WEEK12",
    homeTeam: "Nagaworld FC",
    awayTeam: "Preah Khan Reach Svay Rieng FC",
    homeScore: 1,
    awayScore: 2,
    title: "Highlight: Nagaworld FC (1-2) Preah Khan Reach Svay Rieng FC | CPL-WEEK12",
    homeLogo: Logo1,
    awayLogo: Logo2,
    videoFile: Video,
    thumbnail: Video,
  },
];

const VideosPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <>
    < Header />
    <div className="w-full min-h-screen bg-white pb-20">
      {/* Header Title */}
      <div className="text-center py-10">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-wide uppercase">
         About Videos
          </h1>
          </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {videosData.map((video) => (
          <div
            key={video.id}
            onClick={() => setSelectedVideo(video.videoFile)}
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition"
          >
            <div className="relative aspect-video">
              <video src={video.thumbnail} className="w-full h-full object-cover" />
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-gray-800 line-clamp-2">
                {video.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Popup */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="bg-black rounded-xl overflow-hidden w-full max-w-3xl">
            <video src={selectedVideo} controls autoPlay className="w-full h-auto" />
          </div>
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-6 right-6 text-white text-3xl font-bold"
          >
            ×
          </button>
        </div>
      )}
    </div>
    <div/>
    < Footer />
    </>
    );
    };


export default VideosPage;
