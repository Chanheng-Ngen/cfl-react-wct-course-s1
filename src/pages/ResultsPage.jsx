import React, { useState } from "react";
import HomeLogo from "../assets/images/Svr_logo.png";
import AwayLogo from "../assets/images/Johor.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
    awayTeam: "Johor Darul Ta'zim FC ",
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
  {
    id: 10,
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

  return (
    <>
      <Header />
      <div className="w-full min-h-screen bg-white pb-20">
        {/* Header Title */}
        <div className="text-center py-10">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-wide uppercase">
            Match Results
          </h1>
        </div>

        <div className="max-w-6xl mx-auto px-4 mb-10">
          <select className="border border-gray-300 px-4 py-3 rounded-lg w-full sm:w-72 shadow-sm">
            <option>Asean Club Championship Shopee Cup</option>
          </select>
        </div>

        {/* Results List */}
        <div className="max-w-6xl mx-auto px-4 space-y-4">
          {resultsData.slice(0, visibleCount).map((match) => (
            <div
              key={match.id}
              className="
              bg-blue-50 
              hover:bg-blue-100 
              transition 
              rounded-xl 
              shadow 
              flex 
              items-center 
              justify-between 
              px-10 
              py-5
            "
            >
              {/* Home Team */}
              <div className="flex items-center gap-7 w-1/3">
                <span className="font-semibold text-gray-800 text-sm md:text-base">
                  {match.homeTeam}
                </span>
                <img src={match.homeLogo} className="w-10 h-10" />
              </div>

              {/* Score */}
              <div className="w-1/6 text-center">
                <div className="bg-white border rounded-lg px-4 py-1 text-lg font-bold shadow-sm mx-auto w-fit">
                  {match.score}
                </div>
              </div>

              {/* Away Team */}
              <div className="flex items-center gap-3 w-1/4 justify-end">
                <img src={match.awayLogo} className="w-10 h-10" />
                <span className="font-semibold text-gray-800 text-sm md:text-base">
                  {match.awayTeam}
                </span>
              </div>

              {/* Date + Stadium */}
              <div className="hidden lg:flex items-center gap-8 w-1/4 justify-center">
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <span>{match.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <span>{match.stadium}</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="text-gray-500 hover:text-black cursor-pointer w-10 flex justify-center"></div>
            </div>
          ))}
          {visibleCount < resultsData.length && (
            <div className="w-full flex justify-start items-center pb-20">
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
