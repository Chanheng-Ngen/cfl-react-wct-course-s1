import { useState, useEffect } from 'react';
import ContentLoader from 'react-content-loader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { footballApi } from '../services/API';

const StandingRowLoader = () => (
  <ContentLoader
    speed={2}
    width="100%"
    height={60}
    backgroundColor="#f3f4f6"
    foregroundColor="#e5e7eb"
  >
    <rect x="0" y="15" rx="4" ry="4" width="100%" height="30" />
  </ContentLoader>
);

const LeagueStandings = () => {
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(true);
  const LEAGUE_ID = 152;

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        setLoading(true);
        const response = await footballApi.getStandings(LEAGUE_ID);
        console.log(response.result);
        if (response?.result?.total) {
          const transformedStandings = response.result.total.map((team, index) => ({
            pos: team.standing_place || index + 1,
            logo: team.team_logo,
            club: team.standing_team || `Team ${index + 1}`,
            played: team.standing_P || 0,
            won: team.standing_W || 0,
            drawn: team.standing_D || 0,
            lost: team.standing_L || 0,
            gf: team.standing_GF || 0,
            ga: team.standing_GA || 0,
            gd: (team.standing_GF || 0) - (team.standing_GA || 0),
            pts: team.standing_PTS || 0,
            form: team.team_form?.split(',').slice(-5) || ['D', 'D', 'D', 'D', 'D'],
          }));
          setStandings(transformedStandings);
        } 
      } catch (error) {
        console.error('Error fetching standings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStandings();
  }, []);

  const getFormColor = (result) => {
    if (result === 'W') return 'bg-green-500';
    if (result === 'D') return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getGdColor = (gd) => {
    if (gd > 0) return 'text-green-600';
    if (gd < 0) return 'text-red-600';
    return 'text-gray-700';
  };

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Cambodia Football League - Standings</h1>
          <p className="text-sm text-gray-500 mt-1">Season 2025/26</p>
        </div>

        {/* Table Card */}
        <div className="bg-white rounded-xl shadow-md overflow-x-auto">
          {/* Table Header */}
          <div className="bg-white border-b-2 border-gray-200 min-w-[1000px]">
            <div className="grid grid-cols-[50px_minmax(200px,1fr)_repeat(8,60px)_150px] gap-2 md:gap-3 px-4 md:px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              <div className="text-center">Pos</div>
              <div>Team</div>
              <div className="text-center">Pl</div>
              <div className="text-center">W</div>
              <div className="text-center">D</div>
              <div className="text-center">L</div>
              <div className="text-center">GF</div>
              <div className="text-center">GA</div>
              <div className="text-center">GD</div>
              <div className="text-center">Pts</div>
              <div className="text-center">Form</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-100 min-w-[1000px]">
            {loading ? (
              <>
                <StandingRowLoader />
                <StandingRowLoader />
                <StandingRowLoader />
                <StandingRowLoader />
                <StandingRowLoader />
                <StandingRowLoader />
                <StandingRowLoader />
                <StandingRowLoader />
              </>
            ) : standings.length === 0 ? (
              <div className="text-center py-20 text-gray-500">
                <p className="text-xl">No standings data available</p>
              </div>
            ) : (
              standings.map((team, idx) => (
              <div
                key={idx}
                className="grid grid-cols-[50px_minmax(200px,1fr)_repeat(8,60px)_150px] gap-2 md:gap-3 px-4 md:px-6 py-4 hover:bg-gray-50 transition-colors"
              >
                {/* Position */}
                <div className="flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-700">{team.pos}</span>
                </div>

                {/* Club */}
                <div className="flex items-center gap-2 md:gap-3">
                  <div className={`w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm shrink-0`}>
                    <img src={team.logo} alt={team.club} className="w-5 h-5 md:w-6 md:h-6 object-contain" />
                  </div>
                  <span className="text-xs md:text-sm font-medium text-gray-800 truncate">{team.club}</span>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-center text-sm text-gray-700">{team.played}</div>
                <div className="flex items-center justify-center text-sm text-gray-700">{team.won}</div>
                <div className="flex items-center justify-center text-sm text-gray-700">{team.drawn}</div>
                <div className="flex items-center justify-center text-sm text-gray-700">{team.lost}</div>
                <div className="flex items-center justify-center text-sm text-gray-700">{team.gf}</div>
                <div className="flex items-center justify-center text-sm text-gray-700">{team.ga}</div>
                <div className="flex items-center justify-center">
                  <span className={`text-sm font-semibold ${getGdColor(team.gd)}`}>
                    {team.gd > 0 ? `+${team.gd}` : team.gd}
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-900">{team.pts}</span>
                </div>

                {/* Form */}
                <div className="flex items-center justify-center gap-0.5 md:gap-1">
                  {team.form.map((result, i) => (
                    <div
                      key={i}
                      className={`w-6 h-6 md:w-7 md:h-7 ${getFormColor(result)} rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm`}
                    >
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            ))
            )}
          </div>
        </div>
        {/* Legend */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-xs md:text-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm">W</div>
            <span className="text-gray-600 font-medium">Win</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm">D</div>
            <span className="text-gray-600 font-medium">Draw</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm">L</div>
            <span className="text-gray-600 font-medium">Loss</span>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default LeagueStandings;