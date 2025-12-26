import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Trophy, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router';
import ContentLoader from 'react-content-loader';
import { fetchClubs } from '../store/slices/footballSlice';
import Header from '../components/Header';
import Footer from '../components/Footer';
import premierLeagueCover from '../assets/video/premier_league_vdo_cover.mp4';

function ClubsShowcase() {
  const dispatch = useDispatch();
  const { clubs, clubsLoading, clubsLastFetched } = useSelector((state) => state.football);
  const [displayedClubs, setDisplayedClubs] = useState([]); 
  const [visibleCount, setVisibleCount] = useState(8);  
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    // Fetch from Redux if not cached or stale (> 5 minutes)
    const isCached = clubsLastFetched && clubs.length > 0;
    const isStale = clubsLastFetched && (new Date() - new Date(clubsLastFetched)) > 5 * 60 * 1000;
    
    if (!isCached || isStale) {
      dispatch(fetchClubs());
    }
  }, [dispatch, clubsLastFetched, clubs.length]);

  useEffect(() => {
    // Update displayed clubs when Redux data changes
    if (clubs.length > 0) {
      setDisplayedClubs(clubs.slice(0, visibleCount));
    }
  }, [clubs, visibleCount]);

  // Load 4 more clubs
  const loadMore = () => {
    setLoadingMore(true);
    
    setTimeout(() => {
      const newCount = visibleCount + 4;
      setVisibleCount(newCount);
      setLoadingMore(false);
    }, 300); 
  };

  const hasMore = visibleCount < clubs.length;

  // Club Card Skeleton Loader
  const ClubCardSkeleton = () => (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
      <ContentLoader
        speed={2}
        width="100%"
        height={320}
        viewBox="0 0 400 320"
        backgroundColor="#f3f4f6"
        foregroundColor="#e5e7eb"
      >
        <circle cx="200" cy="80" r="40" />
        <rect x="120" y="140" rx="4" ry="4" width="160" height="16" />
        <rect x="160" y="165" rx="4" ry="4" width="80" height="12" />
        <rect x="30" y="200" rx="2" ry="2" width="340" height="1" />
        <circle cx="50" cy="230" r="10" />
        <rect x="70" y="222" rx="4" ry="4" width="120" height="14" />
        <rect x="300" y="220" rx="12" ry="12" width="60" height="24" />
        <rect x="30" y="260" rx="2" ry="2" width="340" height="1" />
        <circle cx="50" cy="285" r="8" />
        <rect x="70" y="275" rx="4" ry="4" width="180" height="12" />
        <rect x="70" y="295" rx="4" ry="4" width="120" height="10" />
      </ContentLoader>
    </div>
  );

  return (
    <>
      <Header />
      {/* Header */}
      <div className="h-72 relative overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={premierLeagueCover} type="video/mp4" />
        </video>
        <div className="container mx-auto h-full flex items-center px-4 relative z-10">
          <h1 className="text-5xl font-black text-white mb-2">
            Premier League <small className='text-sm'>ID: 152</small>
          </h1>
        </div>
      </div>
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="container mx-auto px-4">
          {/* Loading State */}
          {clubsLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, index) => (
                <ClubCardSkeleton key={index} />
              ))}
            </div>
          ) : (
            <>
              {/* Clubs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {displayedClubs.map((team, index) => (
                  <Link to={`/club/${team.id}`} key={team.id || index}>
                    <div className="group bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 overflow-hidden cursor-pointer border border-gray-100">
                      <div className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-20 h-20 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg mb-4 group-hover:scale-110 transition-transform">
                            <img src={team.team_logo} alt={team.team_name} className="w-full h-full object-contain" />
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2">{team.team_name}</h3>
                          <div className="flex items-center gap-1.5 text-sm text-gray-600">
                            <Calendar className="w-4 h-4" />
                            <span className="font-semibold">{team.est}</span>
                          </div>
                        </div>
                      </div>
                      <div className="px-6 pb-6 space-y-4">
                        <div className="flex items-center justify-center gap-3 border-t border-gray-100 pt-4">
                          <Trophy className="w-5 h-5 text-yellow-500" />
                          <span className="text-sm font-bold text-gray-700">Championships</span>
                          <span className={`ml-auto px-3 py-1 rounded-full text-sm font-bold ${team.championships > 0 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                            {team.championships}
                          </span>
                        </div>
                        <div className="border-t border-gray-100 pt-4">
                          <div className="flex items-start gap-2">
                            <MapPin className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <div className="flex-1">
                              <div className="text-sm font-bold text-gray-900">{team.stadium}</div>
                              <div className="text-xs text-gray-600 mt-1">
                                Capacity: {team.capacity}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              {hasMore && (
                <div className="flex justify-center mt-12">
                  <button
                    onClick={loadMore}
                    disabled={loadingMore}
                    className="px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loadingMore ? 'Loading...' : 'See More Clubs'}
                  </button>
                </div>
              )}
              <div className="text-center mt-6 text-gray-600 font-medium">
                Showing {displayedClubs.length} of {clubs.length} clubs
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ClubsShowcase;