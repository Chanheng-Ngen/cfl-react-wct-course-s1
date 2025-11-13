import { useState } from 'react';
import './HomePage.css';
import morodok_techo_stadium from '../assets/images/morodok_techo_stadium.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroBanner = {
    badge: 'NEXT MATCH',
    title: 'Champions League Final',
    description: "Witness the ultimate showdown as two titans clash for European glory. Don't miss the most anticipated match of the season!",
    matchInfo: [
      { icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', text: 'Saturday, Nov 16, 2025' },
      { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', text: '8:00 PM GMT' }
    ],
  };

  const upcomingMatches = [
    {
      id: 1,
      league: 'Bundesliga',
      team1: { name: 'Bayern Munich', abbr: 'BAY', color: 'bg-blue-600' },
      team2: { name: 'Borussia Dortmund', abbr: 'BVB', color: 'bg-red-600' },
      date: 'Nov 20, 2025',
      time: '7:30 PM',
      venue: 'Allianz Arena',
      matchNumber: 'Match 1 of 6'
    },
    {
      id: 2,
      league: 'Cambodia League',
      team1: { name: 'Phnom Penh Crown', abbr: 'PPC', color: 'bg-blue-700' },
      team2: { name: 'Angkor Tiger', abbr: 'ATG', color: 'bg-orange-600' },
      date: 'Nov 21, 2025',
      time: '6:00 PM',
      venue: 'Morodok Techo Stadium',
      matchNumber: 'Match 2 of 6'
    },
    {
      id: 3,
      league: 'Cambodia League',
      team1: { name: 'Visakha FC', abbr: 'VIS', color: 'bg-green-600' },
      team2: { name: 'Boeung Ket', abbr: 'BKT', color: 'bg-purple-600' },
      date: 'Nov 22, 2025',
      time: '5:30 PM',
      venue: 'National Olympic Stadium',
      matchNumber: 'Match 3 of 6'
    },
    {
      id: 4,
      league: 'Premier League',
      team1: { name: 'Manchester United', abbr: 'MUN', color: 'bg-red-700' },
      team2: { name: 'Liverpool', abbr: 'LIV', color: 'bg-red-500' },
      date: 'Nov 23, 2025',
      time: '8:00 PM',
      venue: 'Old Trafford',
      matchNumber: 'Match 4 of 6'
    },
    {
      id: 5,
      league: 'Cambodia League',
      team1: { name: 'Preah Khan Reach', abbr: 'PKR', color: 'bg-yellow-600' },
      team2: { name: 'National Police', abbr: 'NPL', color: 'bg-indigo-600' },
      date: 'Nov 24, 2025',
      time: '4:00 PM',
      venue: 'RSN Stadium',
      matchNumber: 'Match 5 of 6'
    },
    {
      id: 6,
      league: 'La Liga',
      team1: { name: 'Real Madrid', abbr: 'RMA', color: 'bg-white text-gray-800 border-2 border-gray-300' },
      team2: { name: 'Barcelona', abbr: 'FCB', color: 'bg-blue-800' },
      date: 'Nov 25, 2025',
      time: '9:00 PM',
      venue: 'Santiago Bernabéu',
      matchNumber: 'Match 6 of 6'
    }
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? upcomingMatches.length - 3 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev >= upcomingMatches.length - 3 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner Section */}
      <section className="hero-banner relative h-[600px]">
        <div className="absolute z-0 w-full h-full object-cover">
          <img src={morodok_techo_stadium} alt="Morodok Techo Stadium" className='w-full h-full object-cover'/>
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

      {/* Upcoming Matches Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-3xl font-bold text-gray-800">
              Upcoming Matches
            </h2>
            <div className="flex gap-2">
              <button 
                onClick={handlePrevSlide}
                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentSlide === 0}
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={handleNextSlide}
                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentSlide >= upcomingMatches.length - 3}
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Matches Slider */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
            >
              {upcomingMatches.map((match) => (
                <div key={match.id} className="min-w-[calc(33.333%-1rem)] flex-shrink-0 shadow-md">
                  <div className="bg-white h-full overflow-hidden rounded-[8px]">
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
                          <div className={`w-20 h-20 ${match.team1.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                            {match.team1.abbr}
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
                          <div className={`w-20 h-20 ${match.team2.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                            {match.team2.abbr}
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
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.max(1, upcomingMatches.length - 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HomePage;