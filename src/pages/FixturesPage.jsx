import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import ContentLoader from "react-content-loader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import FixturesHero from "../assets/images/FixturesBanner.jpg";
import { fetchAllFixtures } from "../store/slices/footballSlice";

const FixtureCardLoader = () => (
  <ContentLoader
    speed={2}
    width="100%"
    height={200}
    backgroundColor="#f3f4f6"
    foregroundColor="#e5e7eb"
  >
    <rect x="0" y="0" rx="16" ry="16" width="100%" height="200" />
  </ContentLoader>
);

const FixturesPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { allFixtures, allFixturesLoading, allFixturesLastFetched } = useSelector((state) => state.football);
  const [page, setPage] = useState(0);
  const [displayedFixtures, setDisplayedFixtures] = useState([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const ITEMS_PER_PAGE = 4;

  useEffect(() => {
    // Fetch from Redux if not cached or stale (> 5 minutes)
    const isCached = allFixturesLastFetched && allFixtures.length > 0;
    const isStale = allFixturesLastFetched && (new Date() - new Date(allFixturesLastFetched)) > 5 * 60 * 1000;
    
    if (!isCached || isStale) {
      dispatch(fetchAllFixtures());
    }
  }, [dispatch, allFixturesLastFetched, allFixtures.length]);

  useEffect(() => {
    // Update displayed fixtures when Redux data changes
    if (allFixtures.length > 0) {
      const start = 0;
      const end = ITEMS_PER_PAGE;
      setDisplayedFixtures(allFixtures.slice(start, end));
      setHasMore(end < allFixtures.length);
      setPage(0);
    }
  }, [allFixtures]);

  const handleLoadMore = () => {
    setLoadingMore(true);
    const nextPage = page + 1;
    const start = nextPage * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const newFixtures = allFixtures.slice(start, end);
    
    setDisplayedFixtures(prev => [...prev, ...newFixtures]);
    setHasMore(end < allFixtures.length);
    setPage(nextPage);
    setLoadingMore(false);
  };

  return (
    <>
      <Header />
      <HeroBanner
        title="Match Fixtures"
        subtitle="Upcoming matches from Premier League"
        background={FixturesHero}
      />

      <div className="container mx-auto px-4 pt-16 pb-16 space-y-6">
        {allFixturesLoading ? (
          <div className="space-y-6">
            <FixtureCardLoader />
            <FixtureCardLoader />
            <FixtureCardLoader />
            <FixtureCardLoader />
          </div>
        ) : displayedFixtures.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <p className="text-xl">No upcoming fixtures available</p>
          </div>
        ) : (
          <>
            {displayedFixtures.map((match) => (
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
                      className="w-12 h-12 mb-2 object-contain"
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
                      className="w-12 h-12 mb-2 object-contain"
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
            {hasMore && (
              <div className="flex justify-center mt-14 pb-20">
                <button
                  onClick={handleLoadMore}
                  disabled={loadingMore}
                  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {loadingMore ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Loading...</span>
                    </>
                  ) : (
                    <span>Load More</span>
                  )}
                </button>
              </div>
            )}
          </>
        )}
      </div>

      <Footer />
    </>
  );
};

export default FixturesPage;
