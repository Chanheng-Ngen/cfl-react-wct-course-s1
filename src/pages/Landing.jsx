import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { footballApi } from '../services/API';
import ContentLoader from 'react-content-loader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { heroBanner, upcomingMatches, aboutData, videoHighlights, topScorers, latestNews, leagueStandings } from '../services/mockData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'

const Home = () => {
  const [aboutSlide, setAboutSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [fixtures, setFixtures] = useState([]);
  const [standings, setStandings] = useState([]);
  const [topScorerList, setTopScorerList] = useState([]);
  const swiperRef = useRef(null);
  const aboutSwiperRef = useRef(null);

  useEffect(() => {
    const landingFetch = async () => {
      try {
        setIsLoading(true);
        const fromDate = '2025-12-12';
        const toDate = '2025-12-21';
        const standingLeagueId = 152; //khmer league id 493
        const topScorersLeagueId = 152;
        // fetch 
        const getFixturesData = await footballApi.getFixtures(fromDate, toDate, standingLeagueId);
        const getStandingsData = await footballApi.getStandings(standingLeagueId);
        const getTopScorersData = await footballApi.getTopScorers(topScorersLeagueId);
        // debug
        // console.log('Fixtures data:', getFixturesData);
        // console.log('Standings data:', getStandingsData);
        // console.log('Top Scorers data:', getTopScorersData);

        if (getFixturesData && getFixturesData.result.length > 0) {
          const transformedMatches = getFixturesData.result.slice(0, 6).map((match, index) => ({
            id: match.event_key || index + 1,
            league: match.league_name,
            team1: {
              name: match.event_home_team,
              logo: match.home_team_logo
            },
            team2: {
              name: match.event_away_team,
              logo: match.away_team_logo,
            },
            date: match.event_date ? new Date(match.event_date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            }) : 'TBD',
            time: match.event_time,
            venue: match.event_stadium,
            matchNumber: `Match ${index + 1} of 6`
          }));
          setFixtures(transformedMatches);
        }
        else {
          throw new Error('Not found fixtures data');
        }
        if (getStandingsData && getStandingsData.result.total.length > 0) {
          const transformStandings = getStandingsData.result.total.slice(0, 8).map((team, index) => ({
            id: team.standing_team_id || index + 1,
            rank: team.standing_place,
            team: team.standing_team,
            played: team.standing_P,
            points: team.standing_PTS,
            team_logo: team.team_logo,
            trend: team.standing_GD > 0 ? 'up' : team.standing_GD < 0 ? 'down' : 'same'
          }));
          setStandings(transformStandings);
        }
        else {
          throw new Error('Not found standings data');
        }
        if (getTopScorersData && getTopScorersData.result.length > 0) {
          const transformTopScorers = getTopScorersData.result.slice(0, 7).map((player, index) => ({
            id: index + 1,
            rank: player.player_place,
            name: player.player_name,
            team: player.team_name,
            goals: player.goals,
            assists: player.assists ? player.assists : 0
          }));
          setTopScorerList(transformTopScorers);
        }
        else {
          throw new Error('Not found top scorers data');
        }
      } catch (error) {
        console.error('Error fetching:', error);
        //mock data
        setFixtures(upcomingMatches);
        setStandings(leagueStandings);
      } finally {
        setIsLoading(false);
      }
    };

    landingFetch();
  }, []);

  // Skeleton 
  const HeroSkeleton = () => (
    <section className="hero-banner relative h-[77vh] bg-gray-200">
      <div className="absolute inset-0 flex items-center px-4 md:px-20 z-10 justify-center">
        <div className="container px-4">
          <div className="hero-content max-w-2xl">
            <ContentLoader
              speed={2}
              width={600}
              height={400}
              viewBox="0 0 600 400"
              backgroundColor="#d1d5db"
              foregroundColor="#9ca3af"
            >
              <rect x="0" y="0" rx="8" ry="8" width="130" height="32" />
              <rect x="0" y="50" rx="8" ry="8" width="600" height="64" />
              <rect x="0" y="130" rx="8" ry="8" width="450" height="96" />
              <rect x="0" y="250" rx="4" ry="4" width="160" height="24" />
              <rect x="180" y="250" rx="4" ry="4" width="130" height="24" />
              <rect x="0" y="300" rx="8" ry="8" width="130" height="48" />
            </ContentLoader>
          </div>
        </div>
      </div>
    </section>
  );

  const MatchCardSkeleton = () => (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <ContentLoader
        speed={2}
        width={450}
        height={250}
        viewBox="0 0 350 250"
        backgroundColor="#e5e7eb"
        foregroundColor="#d1d5db"
      >
        <rect x="125" y="0" rx="4" ry="4" width="100" height="16" />
        <circle cx="50" cy="80" r="40" />
        <rect x="120" y="70" rx="4" ry="4" width="50" height="24" />
        <rect x="180" y="70" rx="4" ry="4" width="50" height="24" />
        <circle cx="310" cy="80" r="40" />
        <rect x="110" y="150" rx="4" ry="4" width="130" height="16" />
        <rect x="95" y="180" rx="4" ry="4" width="160" height="16" />
        <rect x="82" y="210" rx="4" ry="4" width="190" height="16" />
      </ContentLoader>
    </div>
  );

  const NewsSkeleton = () => (
    <div className="bg-red-5 rounded-2xl shadow-lg overflow-hidden">
      <ContentLoader
        speed={2}
        width={500}
        height={350}
        viewBox="0 0 500 350"
        backgroundColor="#e5e7eb"
        foregroundColor="#d1d5db"
      >
        <rect x="0" y="0" rx="0" ry="0" width="500" height="192" />
        <rect x="20" y="210" rx="4" ry="4" width="100" height="16" />
        <rect x="20" y="240" rx="4" ry="4" width="260" height="20" />
        <rect x="20" y="270" rx="4" ry="4" width="200" height="16" />
        <rect x="20" y="300" rx="4" ry="4" width="80" height="16" />
      </ContentLoader>
    </div>
  );
  const ListSkeleton = () => (
    <div className="bg-red-5 rounded-2xl shadow-lg overflow-hidden">
      <ContentLoader
        speed={2}
        width={500}
        height={700}
        viewBox="0 0 500 700"
        backgroundColor="#e5e7eb"
        foregroundColor="#d1d5db"
      >
        <rect x="36" y="36" rx="4" ry="4" width="220" height="45" />
        <rect x="36" y="120" rx="4" ry="4" width="420" height="55" />
        <rect x="36" y="200" rx="4" ry="4" width="420" height="55" />
        <rect x="36" y="280" rx="4" ry="4" width="420" height="55" />
        <rect x="36" y="360" rx="4" ry="4" width="420" height="55" />
        <rect x="36" y="440" rx="4" ry="4" width="420" height="55" />
        <rect x="36" y="520" rx="4" ry="4" width="420" height="55" />
        <rect x="36" y="600" rx="4" ry="4" width="420" height="55" />
      </ContentLoader>
    </div>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <HeroSkeleton />

        {/* Upcoming Matches Skeleton */}
        <section className="py-16 px-4 md:px-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7x">
            <div className="flex justify-satart mb-8">
              <ContentLoader
                speed={2}
                width={256}
                height={40}
                viewBox="0 0 256 40"
                backgroundColor="#e5e7eb"
                foregroundColor="#d1d5db"
              >
                <rect x="0" y="0" rx="8" ry="8" width="256" height="40" />
              </ContentLoader>
            </div>
            <div className="flex justify-between gap-5">
              <MatchCardSkeleton />
              <MatchCardSkeleton />
              <MatchCardSkeleton />
            </div>
          </div>
        </section>

        {/* News Skeleton */}
        <section className="py-16 px-4 md:px-20 bg-white">
          <div className="container mx-auto">
            <div className="flex justify-start mb-8">
              <ContentLoader
                speed={2}
                width={192}
                height={40}
                viewBox="0 0 192 40"
                backgroundColor="#e5e7eb"
                foregroundColor="#d1d5db"
              >
                <rect x="0" y="0" rx="8" ry="8" width="192" height="40" />
              </ContentLoader>
            </div>
            <div className="flex jsutify-between gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                <NewsSkeleton />
                <NewsSkeleton />
                <NewsSkeleton />
                <NewsSkeleton />
              </div>
              <div >
                <ListSkeleton />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Banner Section */}
      <section className="hero-banner relative h-[77vh]">
        <div className="absolute z-0 w-full h-full object-cover">
          <img src={heroBanner.backgroundImage} alt="Morodok Techo Stadium" className='w-full h-full object-cover' />
        </div>
        <div className="hero-overlay absolute inset-0 flex items-center px-4 md:px-20 bg-gradient-to-br from-black to-gray-[5] z-10 justify-center">
          <div className="container px-4">
            <div className="hero-content max-w-2xl text-white animate-fadeInLeft">
              <div className="inline-block bg-transparent border border-blue-500 text-white px-5 py-2 rounded-lg text-sm font-semibold tracking-wider mb-5 uppercase">
                {heroBanner.badge}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight drop-shadow-lg">
                {heroBanner.title}
              </h1>

              <p className="text-base md:text-lg leading-relaxed mb-8 opacity-95 max-w-xl">
                {heroBanner.description}
              </p>

              <div className="flex flex-wrap gap-6 md:gap-8 mb-9">
                {heroBanner.matchInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={info.icon} />
                    </svg>
                    <span className="text-base md:text-lg">{info.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3.5 font-semibold rounded-lg transition-all duration-300 bg-blue-500 text-white shadow-lg hover:bg-blue-600 hover:-translate-y-0.5 hover:shadow-xl">
                  Buy Tickets
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Matches  */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          {/*  Header */}
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-3xl font-bold text-gray-800">
              Upcoming Matches
            </h2>
            <div className="flex gap-2">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={fixtures.length > 3}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {fixtures.map((match) => (
                <SwiperSlide key={match.id}>
                  <div className="bg-white h-full overflow-hidden rounded-[8px] shadow-md">
                    {/* League Badge */}
                    <div className="flex justify-center pt-6 pb-4">
                      <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold">
                        {match.league}
                      </span>
                    </div>

                    {/* Teams Section */}
                    <div className="px-6 py-8">
                      <div className="flex items-center justify-between gap-6">
                        {/* Team 1 */}
                        <div className="flex-1 flex flex-col items-center gap-3">
                          <div className="w-20 h-20 flex items-center justify-center">
                            <img src={match.team1.logo} alt={match.team1.name} className="w-12 h-12 object-contain" />
                          </div>
                          <span className="text-sm font-semibold text-gray-800 text-center">
                            {match.team1.name}
                          </span>
                        </div>

                        {/* VS */}
                        <div className="text-gray-400 font-bold text-lg">
                          VS
                        </div>

                        {/* Team 2 */}
                        <div className="flex-1 flex flex-col items-center gap-3">
                          <div className="w-20 h-20 flex items-center justify-center">
                            <img src={match.team2.logo} alt={match.team2.name} className="w-12 h-12 object-contain" />
                          </div>
                          <span className="text-sm font-semibold text-gray-800 text-center">
                            {match.team2.name}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Match Info */}
                    <div className="border-t border-gray-100 px-6 py-4 bg-gray-50">
                      <div className="flex items-center justify-center gap-4 text-sm text-gray-600 mb-2">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>{match.date}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{match.time}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{match.venue}</span>
                      </div>
                    </div>

                    {/* Match Number */}
                    <div className="px-6 py-3 text-center text-xs text-gray-500 bg-gray-50 border-t border-gray-100">
                      {match.matchNumber}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </section>
      {/* Latest News & League Standings Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7x">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Latest News */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Latest News</h2>
                <Link to="/news" className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  View All
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {latestNews.slice(0, 4).map((news) => (
                  <div key={news.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                    <div className="relative">
                      <img src={news.thumbnail} alt={news.title} className="w-full h-48 object-cover" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">{news.title}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{news.description}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{news.timeAgo}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* League Standings */}
            <div>
              <div className="bg-gray-800 rounded-xl p-6 text-white mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                  <h3 className="text-xl font-bold">League Standings</h3>
                </div>

                <div className="space-y-2">
                  {(standings.length > 0 ? standings : leagueStandings).map((team) => (
                    <div key={team.id} className="flex items-center justify-between p-3 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-6 text-center font-bold">{team.rank}</div>
                        <div className="flex-1 flex items-center gap-3">
                          <img className='w-8' src={team.team_logo} alt={team.team} />
                          <div>
                            <div className="font-semibold">{team.team}</div>
                            <div className="text-xs opacity-75">{team.played} played</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="font-bold text-lg">{team.points}</div>
                          <div className="text-xs opacity-75">pts</div>
                        </div>
                        <div>
                          {team.trend === 'up' && (
                            <svg className="w-4 h-4 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                          )}
                          {team.trend === 'down' && (
                            <svg className="w-4 h-4 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                          )}
                          {team.trend === 'same' && (
                            <div className="w-4 h-0.5 bg-gray-300"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to='/standing'>
                  <button className="w-full mt-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition">
                    View Full Standing
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Highlights & Season Stats Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 max-w-7x">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Video Highlights */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Video Highlights</h2>
                <a href="#" className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  View All
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {videoHighlights.slice(0, 4).map((video) => (
                  <div key={video.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer">
                    <div className="relative">
                      <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                          <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm font-semibold">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-800 mb-2">{video.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span>{video.views}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Top Scorers */}
            <div className="bg-blue-800 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-6">Top Scorers</h3>
              <div className="space-y-4">
                {(topScorerList.length > 0 ? topScorerList : topScorers).map((player) => (
                  <div key={player.id} className="flex items-center gap-4 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition">
                    <div className="text-white font-bold w-6 text-center">
                      {player.rank}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{player.name}</div>
                      <div className="text-sm text-gray-400">{player.team}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg">{player.goals} goals</div>
                      <div className="text-sm text-gray-400">{player.assists} assists</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to='/'>
                <button className="w-full mt-6 py-3 border  text-white font-semibold rounded-lg hover:bg-gray-700 hover:border-none transition">
                  View Full Top List
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7x">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the passion, history, and values that make us one of the world's greatest football clubs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Stadium Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src={heroBanner.backgroundImage} alt="Stadium" className="w-full h-[400px] object-cover" />
              <div className="absolute bottom-6 left-6 bg-blue-600/90 text-white px-6 py-3 rounded-lg">
                <div className="text-sm font-semibold">Championships</div>
                <div className="text-3xl font-bold">{aboutData[aboutSlide].statValue}</div>
              </div>
            </div>

            {/* Content with Swiper */}
            <div className="space-y-6">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                onSwiper={(swiper) => (aboutSwiperRef.current = swiper)}
                onSlideChange={(swiper) => setAboutSlide(swiper.activeIndex)}
              >
                {aboutData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl">
                          {item.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
                      </div>

                      <p className="text-gray-600 leading-relaxed text-lg">
                        {item.description}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Dots */}
              <div className="flex gap-3 pt-4">
                {aboutData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setAboutSlide(index);
                      aboutSwiperRef.current?.slideTo(index);
                    }}
                    className={`h-2 rounded-full transition-all ${aboutSlide === index ? 'bg-blue-600 w-12' : 'bg-gray-300 w-2'
                      }`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => aboutSwiperRef.current?.slidePrev()}
                  className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => aboutSwiperRef.current?.slideNext()}
                  className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Home;