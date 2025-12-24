import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeLogo from "../assets/images/Svr_logo.png";
import AwayLogo from "../assets/images/Johor.png";

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
    goals: [
      { team: "home", player: "Chan Vathanaka", minute: "23'" },
      { team: "away", player: "Bergson", minute: "55'" },
      { team: "home", player: "Saret Krya", minute: "78'" },
    ],
  },
];

const ResultDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("summary");

  const match = resultsData.find((m) => m.id === Number(id));

  if (!match) {
    return <div className="text-center py-20">Match not found</div>;
  }

  return (
    <>
      <Header />

      <div className="bg-white min-h-screen">
        {/* MATCH HEADER */}
        <div className="container mx-auto px-4 mt-16">
          <div className="bg-blue-50 rounded-2xl shadow p-6">
            <p className="text-center text-sm text-gray-500 mb-4">
              {match.date} · {match.stadium}
            </p>

            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6">
              {/* HOME */}
              <div className="flex flex-col items-center text-center">
                <img src={match.homeLogo} className="w-14 h-14 mb-2" />
                <p className="font-semibold text-gray-800 text-sm max-w-[160px]">
                  {match.homeTeam}
                </p>
              </div>

              {/* SCORE */}
              <div className="text-center">
                <div className="bg-white border rounded-xl px-6 py-2 text-2xl font-bold shadow">
                  {match.score}
                </div>
                <p className="text-xs text-green-600 font-semibold mt-1">
                  Full Time
                </p>
              </div>

              {/* AWAY */}
              <div className="flex flex-col items-center text-center">
                <img src={match.awayLogo} className="w-14 h-14 mb-2" />
                <p className="font-semibold text-gray-800 text-sm max-w-[160px]">
                  {match.awayTeam}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="container mx-auto px-4 mt-10">
          <div className="flex gap-6 border-b text-sm font-semibold">
            {["summary", "lineups", "report"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 capitalize ${
                  activeTab === tab
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* TAB CONTENT */}
          <div className="mt-6">
            {/* SUMMARY */}
            {activeTab === "summary" && (
              <div className="bg-white rounded-xl shadow p-6 space-y-4">
                <h3 className="font-semibold text-lg">Goals</h3>
                {match.goals.map((goal, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center ${
                      goal.team === "home" ? "text-left" : "text-right"
                    }`}
                  >
                    <span className="font-medium">
                      {goal.team === "home"
                        ? `${goal.player}`
                        : `${goal.player}`}
                    </span>
                    <span className="text-sm text-gray-500">{goal.minute}</span>
                  </div>
                ))}
              </div>
            )}

            {/* LINEUPS */}
            {activeTab === "lineups" && (
              <div className="bg-white rounded-xl shadow p-6 text-sm text-gray-700">
                <p className="font-semibold mb-2">Lineups</p>
                <p>Lineup data will be added here.</p>
              </div>
            )}

            {/* REPORT */}
            {activeTab === "report" && (
              <div className="bg-white rounded-xl shadow p-6 text-sm text-gray-700">
                <p className="font-semibold mb-2">Match Report</p>
                <p>
                  Preah Khan Reach Svay Rieng FC secured an important victory
                  after a strong second-half performance in front of their home
                  supporters.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ResultDetailPage;
