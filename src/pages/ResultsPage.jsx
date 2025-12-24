import React, { useState } from "react";
import { useNavigate } from "react-router";
import HomeLogo from "../assets/images/Svr_logo.png";
import AwayLogo from "../assets/images/Johor.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import ResultHero from "../assets/images/ResultBanner1.jpg";

const resultsData = [
  {
    id: 1,
    homeTeam: "Preah Khan Reach Svay Rieng FC",
    awayTeam: "Johor Darul Ta'zim FC",
    score: "2 - 1",
    date: "Thursday, 04 Dec 2025",
    stadium: "Morodok Techo National Stadium",
    homeLogo: HomeLogo,
    awayLogo: AwayLogo,
  },
  {
    id: 2,
    homeTeam: "Preah Khan Reach Svay Rieng FC",
    awayTeam: "Johor Darul Ta'zim FC",
    score: "2 - 1",
    date: "Thursday, 04 Dec 2025",
    stadium: "Morodok Techo National Stadium",
    homeLogo: HomeLogo,
    awayLogo: AwayLogo,
  },
  {
    id: 3,
    homeTeam: "Preah Khan Reach Svay Rieng FC",
    awayTeam: "Johor Darul Ta'zim FC",
    score: "2 - 1",
    date: "Thursday, 04 Dec 2025",
    stadium: "Morodok Techo National Stadium",
    homeLogo: HomeLogo,
    awayLogo: AwayLogo,
  },
  {
    id: 4,
    homeTeam: "Preah Khan Reach Svay Rieng FC",
    awayTeam: "Johor Darul Ta'zim FC",
    score: "2 - 1",
    date: "Thursday, 04 Dec 2025",
    stadium: "Morodok Techo National Stadium",
    homeLogo: HomeLogo,
    awayLogo: AwayLogo,
  },
  {
    id: 5,
    homeTeam: "Preah Khan Reach Svay Rieng FC",
    awayTeam: "Johor Darul Ta'zim FC",
    score: "2 - 1",
    date: "Thursday, 04 Dec 2025",
    stadium: "Morodok Techo National Stadium",
    homeLogo: HomeLogo,
    awayLogo: AwayLogo,
  },
  {
    id: 6,
    homeTeam: "Preah Khan Reach Svay Rieng FC",
    awayTeam: "Johor Darul Ta'zim FC",
    score: "2 - 1",
    date: "Thursday, 04 Dec 2025",
    stadium: "Morodok Techo National Stadium",
    homeLogo: HomeLogo,
    awayLogo: AwayLogo,
  },
  {
    id: 7,
    homeTeam: "Preah Khan Reach Svay Rieng FC",
    awayTeam: "Johor Darul Ta'zim FC",
    score: "2 - 1",
    date: "Thursday, 04 Dec 2025",
    stadium: "Morodok Techo National Stadium",
    homeLogo: HomeLogo,
    awayLogo: AwayLogo,
  },
  {
    id: 8,
    homeTeam: "Preah Khan Reach Svay Rieng FC",
    awayTeam: "Johor Darul Ta'zim FC",
    score: "2 - 1",
    date: "Thursday, 04 Dec 2025",
    stadium: "Morodok Techo National Stadium",
    homeLogo: HomeLogo,
    awayLogo: AwayLogo,
  },
  {
    id: 9,
    homeTeam: "Preah Khan Reach Svay Rieng FC",
    awayTeam: "Johor Darul Ta'zim FC",
    score: "2 - 1",
    date: "Thursday, 04 Dec 2025",
    stadium: "Morodok Techo National Stadium",
    homeLogo: HomeLogo,
    awayLogo: AwayLogo,
  },
];

const ResultsPage = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [openMatchId, setOpenMatchId] = useState(null);
  const navigate = useNavigate();

  return (
    <>
      <Header />

      {/* HERO */}
      <HeroBanner
        title="Latest Results"
        subtitle="Official match results from Cambodia Football League"
        background={ResultHero}
      />

      <div className="w-full min-h-screen bg-white pb-20">
        {/* Competition Select */}
        <div className="max-w-6xl mx-auto px-4 pt-10 mb-8">
          <select className="border border-gray-300 px-4 py-3 rounded-lg w-full sm:w-72 shadow-sm">
            <option>Asean Club Championship Shopee Cup</option>
          </select>
        </div>

        {/* RESULTS LIST */}
        <div className="container mx-auto px-4 pb-16 space-y-6">
          {resultsData.slice(0, visibleCount).map((match) => (
            <div
              key={match.id}
              onClick={() => navigate(`/results/${match.id}`)}
              className="bg-blue-50 hover:bg-blue-100 transition rounded-xl shadow cursor-pointer"
            >
              {/* MAIN ROW */}
              <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-10 py-5 gap-6">
                {/* HOME */}
                <div className="flex items-center gap-4 w-full lg:w-1/3 justify-end">
                  <span className="font-semibold text-gray-800 text-sm lg:text-base">
                    {match.homeTeam}
                  </span>
                  <img src={match.homeLogo} className="w-10 h-10" />
                </div>

                {/* SCORE */}
                <div className="w-full lg:w-1/6 text-center">
                  <div className="bg-white border rounded-lg px-4 py-1 text-lg font-bold shadow-sm mx-auto w-fit">
                    {match.score}
                  </div>
                </div>

                {/* AWAY */}
                <div className="flex items-center gap-4 w-full lg:w-1/3 justify-start">
                  <img src={match.awayLogo} className="w-10 h-10" />
                  <span className="font-semibold text-gray-800 text-sm lg:text-base">
                    {match.awayTeam}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* LOAD MORE */}
          {visibleCount < resultsData.length && (
            <div className="flex justify-center mt-14 pb-20">
              <button
                onClick={() => setVisibleCount(visibleCount + 5)}
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

export default ResultsPage;
