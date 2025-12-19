import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import FixturesHero from "../assets/images/FixturesBanner.jpg";
import Logo1 from "../assets/images/Logo1.png";
import Logo2 from "../assets/images/Logo2.png";
import { Link, useParams } from "react-router-dom";

const fixturesData = [
  {
    id: 1,
    date: "Saturday, 22 Nov 2025",
    league: "Cambodian Premier League 2025/26",
    homeTeam: "Kirivong Sok Sen Chey FC",
    awayTeam: "Visakha FC",
    time: "15:30",
    stadium: "Svay Rieng Stadium",
    homeLogo: Logo1,
    awayLogo: Logo2,
  },
  {
    id: 2,
    date: "Saturday, 22 Nov 2025",
    league: "Cambodian Premier League 2025/26",
    homeTeam: "Phnom Penh Crown Football Club",
    awayTeam: "Boeung Ket Angkor FC",
    time: "18:00",
    stadium: "Olympic Stadium",
    homeLogo: Logo1,
    awayLogo: Logo2,
  },
  {
    id: 3,
    date: "Saturday, 22 Nov 2025",
    league: "Cambodian Premier League 2025/26",
    homeTeam: "Kirivong Sok Sen Chey FC",
    awayTeam: "Visakha FC",
    time: "15:30",
    stadium: "Svay Rieng Stadium",
    homeLogo: Logo1,
    awayLogo: Logo2,
  },
  {
    id: 4,
    date: "Saturday, 22 Nov 2025",
    league: "Cambodian Premier League 2025/26",
    homeTeam: "Phnom Penh Crown Football Club",
    awayTeam: "Boeung Ket Angkor FC",
    time: "18:00",
    stadium: "Olympic Stadium",
    homeLogo: Logo1,
    awayLogo: Logo2,
  },
  {
    id: 5,
    date: "Saturday, 22 Nov 2025",
    league: "Cambodian Premier League 2025/26",
    homeTeam: "Kirivong Sok Sen Chey FC",
    awayTeam: "Visakha FC",
    time: "15:30",
    stadium: "Svay Rieng Stadium",
    homeLogo: Logo1,
    awayLogo: Logo2,
  },
  {
    id: 6,
    date: "Saturday, 22 Nov 2025",
    league: "Cambodian Premier League 2025/26",
    homeTeam: "Phnom Penh Crown Football Club",
    awayTeam: "Boeung Ket Angkor FC",
    time: "18:00",
    stadium: "Olympic Stadium",
    homeLogo: Logo1,
    awayLogo: Logo2,
  },
  {
    id: 7,
    date: "Saturday, 22 Nov 2025",
    league: "Cambodian Premier League 2025/26",
    homeTeam: "Kirivong Sok Sen Chey FC",
    awayTeam: "Visakha FC",
    time: "15:30",
    stadium: "Svay Rieng Stadium",
    homeLogo: Logo1,
    awayLogo: Logo2,
  },
  {
    id: 8,
    date: "Saturday, 22 Nov 2025",
    league: "Cambodian Premier League 2025/26",
    homeTeam: "Phnom Penh Crown Football Club",
    awayTeam: "Boeung Ket Angkor FC",
    time: "18:00",
    stadium: "Olympic Stadium",
    homeLogo: Logo1,
    awayLogo: Logo2,
  },
  {
    id: 9,
    date: "Saturday, 22 Nov 2025",
    league: "Cambodian Premier League 2025/26",
    homeTeam: "Kirivong Sok Sen Chey FC",
    awayTeam: "Visakha FC",
    time: "15:30",
    stadium: "Svay Rieng Stadium",
    homeLogo: Logo1,
    awayLogo: Logo2,
  },
  {
    id: 10,
    date: "Saturday, 22 Nov 2025",
    league: "Cambodian Premier League 2025/26",
    homeTeam: "Phnom Penh Crown Football Club",
    awayTeam: "Boeung Ket Angkor FC",
    time: "18:00",
    stadium: "Olympic Stadium",
    homeLogo: Logo1,
    awayLogo: Logo2,
  },
];

const FixturesPage = () => {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = React.useState(4);

  return (
    <>
      <Header />

      <HeroBanner
        title="Match Fixtures"
        subtitle="Upcoming matches from Cambodian Premier League"
        background={FixturesHero}
      />

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-6">
        {fixturesData.slice(0, visibleCount).map((match) => (
          <div
            key={match.id}
            onClick={() => navigate(`/fixtures/${match.id}`)}
            className="
              cursor-pointer
              bg-white
              rounded-2xl
              shadow-md
              hover:shadow-xl
              transition
              px-6
              py-5
            "
          >
            {/* TOP INFO */}
            <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
              <span>{match.date}</span>
              <span className="hidden sm:block">{match.league}</span>
            </div>

            {/* MATCH ROW */}
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
              {/* HOME TEAM */}
              <div className="flex flex-col items-center text-center">
                <img
                  src={match.homeLogo}
                  alt={match.homeTeam}
                  className="w-12 h-12 mb-2"
                />
                <p className="font-semibold text-gray-800 text-sm line-clamp-2 max-w-[140px]">
                  {match.homeTeam}
                </p>
              </div>

              {/* TIME */}
              <div className="flex flex-col items-center">
                <span className="bg-gray-100 px-4 py-1 rounded-lg font-bold text-gray-800">
                  {match.time}
                </span>
                <span className="text-xs text-gray-500 mt-1">VS</span>
              </div>

              {/* AWAY TEAM */}
              <div className="flex flex-col items-center text-center">
                <img
                  src={match.awayLogo}
                  alt={match.awayTeam}
                  className="w-12 h-12 mb-2"
                />
                <p className="font-semibold text-gray-800 text-sm line-clamp-2 max-w-[140px]">
                  {match.awayTeam}
                </p>
              </div>
            </div>

            {/* BOTTOM INFO */}
            <div className="text-center text-sm text-gray-500 mt-4">
              {match.stadium}
            </div>
          </div>
        ))}
        {/* LOAD MORE BUTTON */}
        {visibleCount < fixturesData.length && (
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

      <Footer />
    </>
  );
};

export default FixturesPage;
