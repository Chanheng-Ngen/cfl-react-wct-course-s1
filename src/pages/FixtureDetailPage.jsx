import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Logo1 from "../assets/images/Logo1.png";
import Logo2 from "../assets/images/Logo2.png";

const fixturesData = [
  {
    id: 1,
    date: "Saturday, 22 Nov 2025",
    league: "Cambodian Premier League 2025/26",
    week: "Week 9",
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
    week: "Week 9",
    homeTeam: "Phnom Penh Crown FC",
    awayTeam: "Boeung Ket FC",
    time: "18:00",
    stadium: "Olympic Stadium",
    homeLogo: Logo1,
    awayLogo: Logo2,
  },
];

const FixtureDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const match = fixturesData.find((item) => item.id === Number(id));

  if (!match) {
    return <p className="p-10">Match not found</p>;
  }

  return (
    <>
      <Header />

      <div className="max-w-5xl mx-auto px-4 py-12">
        <Link
          to="/fixtures"
          className="text-blue-600 font-medium mb-6 hover:underline"
        >
          ← Back to Fixtures
        </Link>

        {/* MATCH HEADER */}
        <div className="bg-gray-900 text-white rounded-xl p-8 mt-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* HOME TEAM */}
            <div className="flex flex-col items-center text-center w-56">
              <img
                src={match.homeLogo}
                alt={match.homeTeam}
                className="w-16 h-16 mb-3"
              />
              <span className="text-lg font-semibold truncate">
                {match.homeTeam}
              </span>
            </div>

            {/* CENTER VS */}
            <div className="text-center my-6 md:my-0">
              <p className="text-3xl font-bold">VS</p>
              <p className="text-sm mt-1">{match.time}</p>
            </div>

            {/* AWAY TEAM */}
            <div className="flex flex-col items-center text-center w-56">
              <img
                src={match.awayLogo}
                alt={match.awayTeam}
                className="w-16 h-16 mb-3"
              />
              <span className="text-lg font-semibold truncate">
                {match.awayTeam}
              </span>
            </div>
          </div>
        </div>

        {/* DETAILS */}
        <div className="mt-8 bg-white shadow-lg rounded-xl p-6 space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-500">Date</span>
            <span className="font-medium">{match.date}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">League</span>
            <span className="font-medium">{match.league}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Week</span>
            <span className="font-medium">{match.week}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Stadium</span>
            <span className="font-medium">{match.stadium}</span>
          </div>
        </div>

        {/* EXTRA INFO */}
        <div className="mt-8 bg-gray-50 rounded-xl p-6">
          <h3 className="font-semibold mb-2">Match Information</h3>
          <p className="text-gray-600 text-sm">
            Ticket details, lineups, referees, and broadcast information will be
            announced before kickoff.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FixtureDetailPage;
