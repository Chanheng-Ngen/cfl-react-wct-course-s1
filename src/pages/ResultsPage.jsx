import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import ContentLoader from "react-content-loader";
import AwayLogo from "../assets/images/Johor.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import ResultHero from "../assets/images/ResultBanner1.jpg";
import { footballApi } from "../services/API";
const ResultsPage = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        setError(null);
        const fromDate = "2025-12-12";
        const toDate = "2025-12-21";

        // console.log('Fetching results from', fromDate, 'to', toDate);
        const data = await footballApi.getFixtures(fromDate, toDate, 152);

        // console.log('API Response:', data);

        if (data.result && Array.isArray(data.result)) {
          const finishedMatches = data.result
            .filter(match => {
              const status = match.event_status?.toLowerCase();
              return status === "finished" ||
                (match.match_hometeam_score !== "" && match.match_awayteam_score !== "");
            })
            .sort((a, b) => new Date(b.match_date) - new Date(a.match_date))
            .slice(0, 20);

          // console.log('Finished matches:', finishedMatches.length);

          if (finishedMatches.length > 0) {
            setResults(finishedMatches);
          } else {
            console.log('No finished matches found, using mock data');
          }
        } else {
          console.log('No results in API response, using mock data');
        }
      } catch (err) {
        console.error("Error fetching results:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  return (
    <>
      <Header />

      {/* HERO */}
      <HeroBanner
        title="Latest Results"
        subtitle="Official match results from Cambodia Football League"
        background={ResultHero}
      />

      <div className="w-full min-h-screen bg-white pb-20 mt-5">

        {/* LOADING STATE */}
        {loading && (
          <div className="container mx-auto px-4 pb-16 space-y-6">
            {[...Array(6)].map((_, index) => (
              <ContentLoader
                key={index}
                speed={2}
                width="100%"
                height={120}
                viewBox="0 0 1600 120"
                backgroundColor="#f3f4f6"
                foregroundColor="#e5e7eb"
              >
                <rect x="0" y="0" rx="12" ry="12" width="1600" height="120" />
              </ContentLoader>
            ))}
          </div>
        )}

        {/* ERROR STATE */}
        {error && (
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg">
              {error}
            </div>
          </div>
        )}

        {/* RESULTS LIST */}
        {!loading && !error && (
          <div className="container mx-auto px-4 pb-16 space-y-6">
            {results.length === 0 ? (
              <div className="text-center py-20 text-gray-500">
                <p className="text-xl">No results available at the moment.</p>
              </div>
            ) : (
              <>
                {results.slice(0, visibleCount).map((match) => (
                  <div
                    key={match.match_id || match.id}
                    onClick={() => navigate(`/results/${match.event_key}`)}
                    className="bg-blue-50 hover:bg-blue-100 transition rounded-xl shadow cursor-pointer"
                  >
                    {/* MAIN ROW */}
                    <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-10 py-5 gap-6">
                      {/* HOME */}
                      <div className="flex items-center gap-4 w-full lg:w-1/3 justify-end">
                        <span className="font-semibold text-gray-800 text-sm lg:text-base">
                          {match.event_home_team}
                        </span>
                        <img
                          src={match.home_team_logo}
                          alt={match.home_team_logo}
                          className="w-10 h-10 object-contain"
                        />
                      </div>

                      {/* SCORE */}
                      <div className="w-full lg:w-1/6 text-center">
                        <div className="bg-white border rounded-lg px-4 py-1 text-lg font-bold shadow-sm mx-auto w-fit">
                          {match.event_final_result}
                        </div>
                        <div className="text-xs text-gray-500 mt-2">
                          {match.match_date
                            ? new Date(match.match_date).toLocaleDateString('en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })
                            : match.event_date}
                        </div>
                        {(match.match_stadium || match.stadium) && (
                          <div className="text-xs text-gray-400 mt-1">
                            {match.match_stadium || match.stadium}
                          </div>
                        )}
                      </div>

                      {/* AWAY */}
                      <div className="flex items-center gap-4 w-full lg:w-1/3 justify-start">
                        <img
                          src={match.away_team_logo}
                          alt={match.way_team}
                          className="w-10 h-10 object-contain"
                          onError={(e) => { e.target.src = AwayLogo; }}
                        />
                        <span className="font-semibold text-gray-800 text-sm lg:text-base">
                          {match.event_away_team}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* LOAD MORE */}
                {visibleCount < results.length && (
                  <div className="flex justify-center mt-14 pb-20">
                    <button
                      onClick={() => setVisibleCount(visibleCount + 5)}
                      className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition"
                    >
                      Load More
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default ResultsPage;
