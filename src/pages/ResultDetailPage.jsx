import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeLogo from "../assets/images/Svr_logo.png";
import AwayLogo from "../assets/images/Johor.png";
import { footballApi } from "../services/API";
import { useParams } from "react-router";

const ResultDetailPage = () => {
  const [activeTab, setActiveTab] = useState("summary");
  const [results, setResults] = useState([]);
  const [probabilities, setProbabilities] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const fromDate = "2025-12-12";
        const toDate = "2025-12-21";
        const data = await footballApi.getFixtures(fromDate, toDate, 152);
        const probabilities = await footballApi.getProbabilities(fromDate, toDate, 152, id);
        const resultById = data.result.filter(match => match.event_key.toString() === id);
        const probabilitiesById = probabilities.result.find(prob => prob.event_key.toString() === id);
        // console.log(resultById);
        setResults({
          id: resultById[0]?.event_key,
          homeTeam: resultById[0]?.event_home_team,
          awayTeam: resultById[0]?.event_away_team,
          score: resultById[0]?.event_final_result,
          date: resultById[0]?.event_date ? new Date(resultById[0].event_date).toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          }) : 'TBD',
          stadium: resultById[0]?.event_stadium,
          homeLogo: resultById[0]?.home_team_logo,
          awayLogo: resultById[0]?.away_team_logo,
          goals: resultById[0]?.goalscorers || [],
          lineups: resultById[0]?.lineups || [],
          substitutes: resultById[0]?.substitutes || [],
          cards: resultById[0]?.cards || [],
        });
        // console.log(resultById[0].goalscorers);
        // console.log("pro", probabilitiesById);
        setProbabilities({
          home_formation: probabilitiesById?.event_home_formation,
          away_formation: probabilitiesById?.event_away_formation,
        });
      } catch (error) {
        console.error("Error fetching match details:", error);
      }
    };
    fetchResults();
  }, [id]);


  return (
    <>
      <Header />

      <div className="bg-white min-h-screen">
        {/* resultsData[0] HEADER */}
        <div className="container mx-auto px-4 mt-16">
          <div className="bg-blue-50 rounded-2xl shadow p-6">
            <p className="text-center text-sm text-gray-500 mb-4">
              {results.date} · {results.stadium}
            </p>

            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6">
              {/* HOME */}
              <div className="flex flex-col items-center text-center">
                <img src={results.homeLogo} className="w-14 h-14 mb-2" />
                <p className="font-semibold text-gray-800 text-sm max-w-[160px]">
                  {results.homeTeam}
                </p>
              </div>

              {/* SCORE */}
              <div className="text-center">
                <div className="bg-white border rounded-xl px-6 py-2 text-2xl font-bold shadow">
                  {results.score}
                </div>
                <p className="text-xs text-green-600 font-semibold mt-1">
                  Full Time
                </p>
              </div>

              {/* AWAY */}
              <div className="flex flex-col items-center text-center">
                <img src={results.awayLogo} className="w-14 h-14 mb-2" />
                <p className="font-semibold text-gray-800 text-sm max-w-[160px]">
                  {results.awayTeam}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="container mx-auto px-4 mt-10">
          <div className="flex gap-6 border-b text-sm font-semibold">
            {["summary", "lineups", "cards"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 capitalize ${activeTab === tab
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
              <div className="bg-white rounded-xl shadow p-6">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200 text-left text-sm text-gray-500">
                        <th className="py-2">Scorer</th>
                        <th className="py-2 text-center">Score</th>
                        <th className="py-2 text-right">Time</th>
                      </tr>
                    </thead>

                    <tbody>
                      {results?.goals?.map((goal, index) => (
                        <tr
                          key={index}
                          className="border-b border-gray-100 last:border-b-0"
                        >
                          <td className="py-3 font-medium">
                            <img src={goal.home_scorer ? results.homeLogo : results.awayLogo} alt="team logo" className=" inline w-6 h-6 object-contain mr-2" />
                            {goal.home_scorer || goal.away_scorer}
                          </td>

                          <td className="py-3 text-center font-medium">
                            {goal.score}
                          </td>

                          <td className="py-3 text-right text-sm text-gray-500">
                            {goal.time}'
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            )}

            {/* LINEUPS */}
            {activeTab === "lineups" && (
              <div className="bg-white rounded-xl shadow p-6 text-sm text-gray-700">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200 text-left text-lg font-medium bg-blue-200">
                        <th className="py-3 text-center"><img src={results.homeLogo} alt="home team logo" className="mx-auto w-8 h-8 object-contain" /> <span className="text-black">{probabilities?.home_formation}</span></th>
                        <th className="py-3 text-center"><img src={results.awayLogo} alt="away team logo" className="mx-auto w-8 h-8 object-contain" /> <span className="text-black">{probabilities?.away_formation}</span></th>
                      </tr>
                    </thead>

                    <tbody>
                      {results?.lineups?.home_team?.starting_lineups?.map((homePlayer, index) => {
                        const awayPlayer = results?.lineups?.away_team?.starting_lineups?.[index];

                        return (
                          <tr key={index} className="border-b border-gray-100 last:border-b-0">
                            <td className="py-8 font-medium border-r border-gray-200 px-5">
                              <div className="flex justify-between items-center">
                                <span>{homePlayer?.player}</span>
                                <span className="text-end">{homePlayer?.player_number}</span>
                              </div>
                            </td>
                            <td className="py-8 font-medium px-5">
                              <div className="flex justify-between items-center">
                                <span>{awayPlayer?.player}</span>
                                <span className="text-end">{awayPlayer?.player_number}</span>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  {/* Substitutes Table */}
                  <div className="mt-12">
                    <table className="w-full">
                      <thead>
                        <tr className="text-lg font-semibold border-b border-gray-200 bg-blue-200 rounded overflow-hidden">
                          <th colSpan={2} className="text-start py-3 ps-5">  Substitutes</th>
                        </tr>
                      </thead>
                      <tbody>
                        {results?.lineups?.home_team?.substitutes?.map((homeSub, index) => {
                          const awaySub = results?.lineups?.away_team?.substitutes?.[index];

                          return (
                            <tr key={index} className="border-b border-gray-100 last:border-b-0">
                              <td className="py-8 font-medium border-r border-gray-200 px-5">
                                <div className="flex justify-between items-center">
                                  <span>{homeSub?.player}</span>
                                  <span className="text-end">{homeSub?.player_number}</span>
                                </div>
                              </td>
                              <td className="py-8 font-medium px-5">
                                <div className="flex justify-between items-center">
                                  <span>{awaySub?.player}</span>
                                  <span className="text-end">{awaySub?.player_number}</span>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
            {/* CARDS */}
            {activeTab === "cards" ? (
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 text-left text-lg font-medium bg-blue-200">
                    <th className="py-3 text-center">Team</th>
                    <th className="py-3 text-center">Fault</th>
                    <th className="py-3 text-center">Type Card</th>
                    <th className="py-3 text-center">Time</th>
                    <th className="py-3 text-center">Info Time</th>
                  </tr>
                </thead>

                <tbody>
                  {results?.cards?.length > 0 ? (
                    results.cards.map((card, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-100 last:border-b-0 text-center"
                      >
                        <td className="py-4 font-medium">
                          <img
                            src={card.home_fault ? results.homeLogo : results.awayLogo} alt="team logo" className=" mx-auto w-8 h-8 object-contain"
                          />
                        </td>

                        <td className="py-4">
                          {card.home_fault || card.away_fault}
                        </td>

                        <td className="py-4 flex justify-center items-center gap-2">
                          <div
                            className={`w-4 h-6 ${card.card?.toLowerCase() === "yellow card"
                                ? "bg-yellow-500"
                                : "bg-red-500"
                              }`}
                          ></div>
                          {card.card}
                        </td>

                        <td className="py-4">
                          {card.time}'
                        </td>

                        <td className="py-4">
                          {card.info_time}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="py-6 text-center text-gray-500">
                        This match doesn't have any cards.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

            ) : null}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ResultDetailPage;
