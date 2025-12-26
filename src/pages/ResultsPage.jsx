import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import ContentLoader from "react-content-loader";
import AwayLogo from "../assets/images/Johor.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import ResultHero from "../assets/images/ResultBanner1.jpg";
import { fetchResults } from "../store/slices/footballSlice";

const ResultsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { results, resultsLoading, resultsLastFetched } = useSelector((state) => state.football);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    // Fetch from Redux if not cached or stale (> 5 minutes)
    const isCached = resultsLastFetched && results.length > 0;
    const isStale = resultsLastFetched && (new Date() - new Date(resultsLastFetched)) > 5 * 60 * 1000;
    
    if (!isCached || isStale) {
      dispatch(fetchResults());
    }
  }, [dispatch, resultsLastFetched, results.length]);

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
        {resultsLoading && (
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

        {/* RESULTS LIST */}
        {!resultsLoading && (
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
