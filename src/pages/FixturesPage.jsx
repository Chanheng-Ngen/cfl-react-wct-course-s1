import React, { useState } from "react";
import Logo1 from "../assets/images/Logo1.png";
import Logo2 from "../assets/images/Logo2.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import FixturesHero from "../assets/images/fixturesBanner.jpg";

const fixturesData = [
  {
    date: "Saturday, 22 Nov 2025",
    week: "Week 9",
    league: "Cambodian Premier League 2025/26",
    matches: [
      {
        homeTeam: "Kirivong Sok Sen Chey FC",
        awayTeam: "Visakha FC",
        time: "15:30",
        stadium: "Svay Rieng Stadium",
        homeLogo: Logo1,
        awayLogo: Logo2,
      },
      {
        homeTeam: "Kirivong Sok Sen Chey FC",
        awayTeam: "Visakha FC",
        time: "15:30",
        stadium: "Svay Rieng Stadium",
        homeLogo: Logo1,
        awayLogo: Logo2,
      },
    ],
  },
  {
    date: "Saturday, 22 Nov 2025",
    week: "Week 9",
    league: "Cambodian Premier League 2025/26",
    matches: [
      {
        homeTeam: "Kirivong Sok Sen Chey FC",
        awayTeam: "Visakha FC",
        time: "15:30",
        stadium: "Svay Rieng Stadium",
        homeLogo: Logo1,
        awayLogo: Logo2,
      },
      {
        homeTeam: "Kirivong Sok Sen Chey FC",
        awayTeam: "Visakha FC",
        time: "15:30",
        stadium: "Svay Rieng Stadium",
        homeLogo: Logo1,
        awayLogo: Logo2,
      },
    ],
  },
  {
    date: "Saturday, 22 Nov 2025",
    week: "Week 9",
    league: "Cambodian Premier League 2025/26",
    matches: [
      {
        homeTeam: "Kirivong Sok Sen Chey FC",
        awayTeam: "Visakha FC",
        time: "15:30",
        stadium: "Svay Rieng Stadium",
        homeLogo: Logo1,
        awayLogo: Logo2,
      },
      {
        homeTeam: "Kirivong Sok Sen Chey FC",
        awayTeam: "Visakha FC",
        time: "15:30",
        stadium: "Svay Rieng Stadium",
        homeLogo: Logo1,
        awayLogo: Logo2,
      },
    ],
  },
  {
    date: "Saturday, 22 Nov 2025",
    week: "Week 9",
    league: "Cambodian Premier League 2025/26",
    matches: [
      {
        homeTeam: "Kirivong Sok Sen Chey FC",
        awayTeam: "Visakha FC",
        time: "15:30",
        stadium: "Svay Rieng Stadium",
        homeLogo: Logo1,
        awayLogo: Logo2,
      },
      {
        homeTeam: "Kirivong Sok Sen Chey FC",
        awayTeam: "Visakha FC",
        time: "15:30",
        stadium: "Svay Rieng Stadium",
        homeLogo: Logo1,
        awayLogo: Logo2,
      },
    ],
  },
  {
    date: "Saturday, 22 Nov 2025",
    week: "Week 9",
    league: "Cambodian Premier League 2025/26",
    matches: [
      {
        homeTeam: "Kirivong Sok Sen Chey FC",
        awayTeam: "Visakha FC",
        time: "15:30",
        stadium: "Svay Rieng Stadium",
        homeLogo: Logo1,
        awayLogo: Logo2,
      },
      {
        homeTeam: "Kirivong Sok Sen Chey FC",
        awayTeam: "Visakha FC",
        time: "15:30",
        stadium: "Svay Rieng Stadium",
        homeLogo: Logo1,
        awayLogo: Logo2,
      },
    ],
  },
  {
    date: "Saturday, 22 Nov 2025",
    week: "Week 9",
    league: "Cambodian Premier League 2025/26",
    matches: [
      {
        homeTeam: "Kirivong Sok Sen Chey FC",
        awayTeam: "Visakha FC",
        time: "15:30",
        stadium: "Svay Rieng Stadium",
        homeLogo: Logo1,
        awayLogo: Logo2,
      },
      {
        homeTeam: "Kirivong Sok Sen Chey FC",
        awayTeam: "Visakha FC",
        time: "15:30",
        stadium: "Svay Rieng Stadium",
        homeLogo: Logo1,
        awayLogo: Logo2,
      },
    ],
  },

  {
    date: "Saturday, 22 Nov 2025",
    week: "Week 9",
    league: "Cambodian Premier League 2025/26",
    matches: [
      {
        homeTeam: "Kirivong Sok Sen Chey FC",
        awayTeam: "Visakha FC",
        time: "15:30",
        stadium: "Svay Rieng Stadium",
        homeLogo: Logo1,
        awayLogo: Logo2,
      },
      {
        homeTeam: "Kirivong Sok Sen Chey FC",
        awayTeam: "Visakha FC",
        time: "15:30",
        stadium: "Svay Rieng Stadium",
        homeLogo: Logo1,
        awayLogo: Logo2,
      },
    ],
  },
  {
    date: "Saturday, 22 Nov 2025",
    week: "Week 9",
    league: "Cambodian Premier League 2025/26",
    matches: [
      {
        homeTeam: "Kirivong Sok Sen Chey FC",
        awayTeam: "Visakha FC",
        time: "15:30",
        stadium: "Svay Rieng Stadium",
        homeLogo: Logo1,
        awayLogo: Logo2,
      },
      {
        homeTeam: "Kirivong Sok Sen Chey FC",
        awayTeam: "Visakha FC",
        time: "15:30",
        stadium: "Svay Rieng Stadium",
        homeLogo: Logo1,
        awayLogo: Logo2,
      },
    ],
  },
  {
    date: "Saturday, 22 Nov 2025",
    week: "Week 9",
    league: "Cambodian Premier League 2025/26",
    matches: [
      {
        homeTeam: "Kirivong Sok Sen Chey FC",
        awayTeam: "Visakha FC",
        time: "15:30",
        stadium: "Svay Rieng Stadium",
        homeLogo: Logo1,
        awayLogo: Logo2,
      },
      {
        homeTeam: "Kirivong Sok Sen Chey FC",
        awayTeam: "Visakha FC",
        time: "15:30",
        stadium: "Svay Rieng Stadium",
        homeLogo: Logo1,
        awayLogo: Logo2,
      },
    ],
  },
  {
    date: "Saturday, 22 Nov 2025",
    week: "Week 9",
    league: "Cambodian Premier League 2025/26",
    matches: [
      {
        homeTeam: "Kirivong Sok Sen Chey FC",
        awayTeam: "Visakha FC",
        time: "15:30",
        stadium: "Svay Rieng Stadium",
        homeLogo: Logo1,
        awayLogo: Logo2,
      },
      {
        homeTeam: "Kirivong Sok Sen Chey FC",
        awayTeam: "Visakha FC",
        time: "15:30",
        stadium: "Svay Rieng Stadium",
        homeLogo: Logo1,
        awayLogo: Logo2,
      },
    ],
  },
  {
    date: "Saturday, 22 Nov 2025",
    week: "Week 9",
    league: "Cambodian Premier League 2025/26",
    matches: [
      {
        homeTeam: "Kirivong Sok Sen Chey FC",
        awayTeam: "Visakha FC",
        time: "15:30",
        stadium: "Svay Rieng Stadium",
        homeLogo: Logo1,
        awayLogo: Logo2,
      },
      {
        homeTeam: "Kirivong Sok Sen Chey FC",
        awayTeam: "Visakha FC",
        time: "15:30",
        stadium: "Svay Rieng Stadium",
        homeLogo: Logo1,
        awayLogo: Logo2,
      },
    ],
  },

  // keep the rest SAME
];

const FixturesPage = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  return (
    <>
      <Header />

      {/* HERO BANNER */}
      <HeroBanner
        title="Match Fixtures"
        subtitle="Upcoming matches and schedules from Cambodian Premier League"
        background={FixturesHero}
      />

      {/* FIXTURES LIST */}
      <div className="w-full min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-10">
        {fixturesData.slice(0, visibleCount).map((fixture, index) => (
          <div
            key={index}
            className="mb-10 bg-white shadow-lg rounded-2xl overflow-hidden"
          >
            {/* Date Header */}
            <div className="bg-red-600 text-white px-5 py-3 font-semibold text-lg">
              {fixture.date}
            </div>

            {/* League Info */}
            <div className="flex items-center justify-between bg-gray-900 text-white px-5 py-3 text-sm font-medium">
              <span>{fixture.league}</span>
              <span className="bg-gray-700 px-3 py-1 rounded-full text-xs">
                {fixture.week}
              </span>
            </div>

            {/* Matches */}
            <div className="p-5 space-y-4">
              {fixture.matches.map((match, i) => (
                <div
                  key={i}
                  className="bg-gray-50 border border-gray-200 rounded-xl flex flex-col md:flex-row justify-between items-center p-4 hover:shadow-md transition"
                >
                  {/* Teams */}
                  <div className="flex flex-wrap items-center gap-3 text-center md:text-left">
                    <span className="font-semibold text-gray-800">
                      {match.homeTeam}
                    </span>

                    <img src={match.homeLogo} alt="Home" className="w-8 h-8" />

                    <span className="font-bold text-gray-500">vs</span>

                    <img src={match.awayLogo} alt="Away" className="w-8 h-8" />

                    <span className="font-semibold text-gray-800">
                      {match.awayTeam}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="flex items-center gap-4 mt-3 md:mt-0">
                    <span className="bg-white border px-4 py-1 rounded-md font-medium text-gray-700">
                      {match.time}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {match.stadium}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* LOAD MORE */}
        {visibleCount < fixturesData.length && (
          <div className="flex justify-start py-10">
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
