import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ContentLoader from "react-content-loader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import FixturesHero from "../assets/images/FixturesBanner.jpg";
import { footballApi } from "../services/API";

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
  const navigate = useNavigate();
  const [fixtures, setFixtures] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const ITEMS_PER_PAGE = 4;

  const fetchFixtures = async (pageNum) => {
    try {
      const isInitial = pageNum === 0;
      if (isInitial) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }
      const fromDate = '2025-12-12';
      const toDate = '2025-12-21';
      const response = await footballApi.getFixtures(fromDate, toDate, 152);
      
      if (response?.result) {
        const transformedMatches = response.result.map((match, index) => ({
          id: match.event_key || index + 1,
          date: match.event_date ? new Date(match.event_date).toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          }) : 'TBD',
          league: match.league_name,
          homeTeam: match.event_home_team,
          awayTeam: match.event_away_team,
          time: match.event_time,
          stadium: match.event_stadium,
          homeLogo: match.home_team_logo,
          awayLogo: match.away_team_logo,
        }));

        const start = pageNum * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        const pageFixtures = transformedMatches.slice(start, end);
        
        if (isInitial) {
          setFixtures(pageFixtures);
        } else {
          setFixtures(prev => [...prev, ...pageFixtures]);
        }
        setHasMore(end < transformedMatches.length);
      } 
    } catch (error) {
      console.error('Error fetching fixtures:', error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchFixtures(0);
  }, []);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchFixtures(nextPage);
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
        {loading ? (
          <div className="space-y-6">
            <FixtureCardLoader />
            <FixtureCardLoader />
            <FixtureCardLoader />
            <FixtureCardLoader />
          </div>
        ) : fixtures.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <p className="text-xl">No upcoming fixtures available</p>
          </div>
        ) : (
          <>
            {fixtures.map((match) => (
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
