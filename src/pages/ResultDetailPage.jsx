import React, { useState } from "react";
import { useParams } from "react-router";
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
  const [activeTab, setActiveTab] = useState("summary");
  console.log(id);
  // Find the specific match by id
  const matchData = resultsData[0];

  // Calculate match statistics
  const getMatchStats = () => {
    const homeGoals = matchData.goals.filter(g => g.team === "home").length;
    const awayGoals = matchData.goals.filter(g => g.team === "away").length;
    const firstHalfGoals = matchData.goals.filter(g => parseInt(g.minute) <= 45).length;
    const secondHalfGoals = matchData.goals.filter(g => parseInt(g.minute) > 45).length;
    
    return {
      totalGoals: matchData.goals.length,
      homeGoals,
      awayGoals,
      firstHalfGoals,
      secondHalfGoals,
      winner: homeGoals > awayGoals ? matchData.homeTeam : 
              awayGoals > homeGoals ? matchData.awayTeam : "Draw",
      goalScorers: {
        home: matchData.goals.filter(g => g.team === "home").map(g => g.player),
        away: matchData.goals.filter(g => g.team === "away").map(g => g.player)
      },
      scoringMinutes: matchData.goals.map(g => parseInt(g.minute))
    };
  };

  const stats = getMatchStats();

  return (
    <>
      <Header />

      <div className="bg-white min-h-screen">
        {/* MATCH HEADER */}
        <div className="container mx-auto px-4 mt-16">
          <div className="bg-blue-50 rounded-2xl shadow p-6">
            <p className="text-center text-sm text-gray-500 mb-4">
              {matchData.date} · {matchData.stadium}
            </p>

            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6">
              {/* HOME */}
              <div className="flex flex-col items-center text-center">
                <img src={matchData.homeLogo} className="w-14 h-14 mb-2" alt={matchData.homeTeam} />
                <p className="font-semibold text-gray-800 text-sm max-w-[160px]">
                  {matchData.homeTeam}
                </p>
              </div>

              {/* SCORE */}
              <div className="text-center">
                <div className="bg-white border rounded-xl px-6 py-2 text-2xl font-bold shadow">
                  {matchData.score}
                </div>
                <p className="text-xs text-green-600 font-semibold mt-1">
                  Full Time
                </p>
              </div>

              {/* AWAY */}
              <div className="flex flex-col items-center text-center">
                <img src={matchData.awayLogo} className="w-14 h-14 mb-2" alt={matchData.awayTeam} />
                <p className="font-semibold text-gray-800 text-sm max-w-[160px]">
                  {matchData.awayTeam}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="container mx-auto px-4 mt-10">
          <div className="flex gap-6 border-b text-sm font-semibold">
            {["summary", "statistics", "lineups", "report"].map((tab) => (
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
                {matchData.goals.map((goal, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center ${
                      goal.team === "home" ? "text-left" : "text-right"
                    }`}
                  >
                    <span className="font-medium">{goal.player}</span>
                    <span className="text-sm text-gray-500">{goal.minute}</span>
                  </div>
                ))}
              </div>
            )}

            {/* STATISTICS */}
            {activeTab === "statistics" && (
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="font-semibold text-lg mb-6">Match Statistics</h3>
                
                <div className="space-y-6">
                  {/* Total Goals */}
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Total Goals</p>
                    <p className="text-3xl font-bold text-blue-600">{stats.totalGoals}</p>
                  </div>

                  {/* Goals by Team */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Home Goals</p>
                      <p className="text-2xl font-bold text-green-600">{stats.homeGoals}</p>
                      <p className="text-xs text-gray-500 mt-1 truncate">{matchData.homeTeam}</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Away Goals</p>
                      <p className="text-2xl font-bold text-red-600">{stats.awayGoals}</p>
                      <p className="text-xs text-gray-500 mt-1 truncate">{matchData.awayTeam}</p>
                    </div>
                  </div>

                  {/* Goals by Half */}
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-3">Goals by Half</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">First Half</p>
                        <p className="text-2xl font-bold text-gray-800">{stats.firstHalfGoals}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">Second Half</p>
                        <p className="text-2xl font-bold text-gray-800">{stats.secondHalfGoals}</p>
                      </div>
                    </div>
                  </div>

                  {/* Goal Scorers */}
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-3">Goal Scorers</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-gray-500 mb-2 font-medium">Home Team</p>
                        <ul className="space-y-1">
                          {stats.goalScorers.home.map((scorer, idx) => (
                            <li key={idx} className="text-sm flex items-center">
                              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                              {scorer}
                            </li>
                          ))}
                          {stats.goalScorers.home.length === 0 && (
                            <li className="text-sm text-gray-400">No goals</li>
                          )}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-2 font-medium">Away Team</p>
                        <ul className="space-y-1">
                          {stats.goalScorers.away.map((scorer, idx) => (
                            <li key={idx} className="text-sm flex items-center">
                              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                              {scorer}
                            </li>
                          ))}
                          {stats.goalScorers.away.length === 0 && (
                            <li className="text-sm text-gray-400">No goals</li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Match Result */}
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-3">Match Result</h4>
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-lg text-white">
                      <p className="text-sm opacity-90">Winner</p>
                      <p className="text-xl font-bold">{stats.winner}</p>
                    </div>
                  </div>

                  {/* Scoring Timeline */}
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-3">Scoring Minutes</h4>
                    <div className="flex flex-wrap gap-2">
                      {stats.scoringMinutes.map((minute, idx) => (
                        <span 
                          key={idx}
                          className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {minute}'
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
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