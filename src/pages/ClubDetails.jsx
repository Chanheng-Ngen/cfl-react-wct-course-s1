import { Calendar, MapPin, ChevronRight, ArrowLeft } from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { Link, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { footballApi } from '../services/API.js';

const ClubDetails = () => {
  const { id } = useParams();
  const [manager, setManager] = useState({});
  const [player, setPlayer] = useState([]);
  const [club, setClub] = useState({});
  const [lastMatch, setLastMatch] = useState({});
  const [nextMatch, setNextMatch] = useState({});

  useEffect(() => {
    const fromDate = '2025-12-12';
    const toDate = '2025-12-21';
    const standingLeagueId = 152;

    const getClubDetails = async () => {
      try {
        const club = await footballApi.getTeams(id);
        const fixtures = await footballApi.getFixtures(fromDate, toDate, standingLeagueId);

        const allMatchs = fixtures.result.filter(match =>
          match.away_team_key === parseInt(id) || match.home_team_key === parseInt(id)
        );

        if (!club?.result) return;

        // Sort all matches by date
        const sortedMatches = allMatchs.sort((a, b) => new Date(a.event_date) - new Date(b.event_date));

        if (sortedMatches.length >= 2) {
          setLastMatch(sortedMatches[0]);
          setNextMatch(sortedMatches[1]);

          console.log("last match (past)", sortedMatches[0]);
          console.log("next match (future)", sortedMatches[1]);
        } else if (sortedMatches.length === 1) {
          setNextMatch(sortedMatches[0]);
          console.log("only one match found", sortedMatches[0]);
        }

        // Set club info
        setClub(club.result[0]);
        console.log("club", club.result[0]);

        // manager info
        const managerFormatted = {
          name: club.result[0].coaches[0].coach_name || 'Unknown',
          country: club.result[0].coaches[0].coach_country || 'Unknown',
          age: club.result[0].coaches[0].coach_age || 'Unknown',
          image: club.result[0].coaches[0].coach_image || null
        };
        setManager(managerFormatted);

        // player info
        const playerFormatted = club.result[0].players.slice(21, 28).map((player) => ({
          player_key: player.player_key,
          name: player.player_name || 'Unknown',
          position: player.player_type || 'Unknown',
          number: player.player_number || 'Unknown',
          image: player.player_image || null
        }));
        setPlayer(playerFormatted);
      } catch (error) {
        console.error('Error fetching club details:', error);
      }
    };

    getClubDetails();
  }, [id]);
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className=" h-48 bg-gradient-to-br from-black to-gray-500 mb-8">

          <div className="z-10 flex flex-col gap-6 items-start h-full px-4 container mx-auto">
            <ol className="flex items-center gap-2 text-sm text-white mt-4">
              <li className='underline hover:text-blue-500'><Link to="/club">All Club</Link></li>
              <li>/</li>
              <li className='text-gray-200'>{club.team_name}</li>
              <li>/</li>
              <li className='underline hover:text-blue-500'><Link to={`/club/${id}/current`}>Club Details</Link></li>
            </ol>
            <div className="flex items-center gap-5">
              <img src={club.team_logo} alt={club.team_name} className="w-20 h-20 object-contain" />
              <div className="text-white">
                <h1 className="text-3xl font-bold mb-2">{club.name}</h1>
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{club.founded || 'Loading...'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{club.stadium || 'Loading...'}</span>
                  </div>
                  <span>{club.country || 'Loading...'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Next Match */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-5">
                  <h2 className="text-xl font-semibold text-gray-900">Next Match</h2>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img src={nextMatch.home_team_logo} alt={nextMatch.home_team_name} className="w-12 h-12 object-contain" />
                    <span className="font-semibold text-gray-900 text-lg">{nextMatch.event_home_team}</span>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-3">
                      {nextMatch.event_date}
                    </div>
                    <h3 className='text-sm text-gray-500 text-center'> at {nextMatch.event_time}</h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-semibold text-gray-900 text-lg">{nextMatch.event_away_team}</span>
                    <img src={nextMatch.away_team_logo} alt={nextMatch.away_team_name} className="w-12 h-12 object-contain" />
                  </div>
                </div>
              </div>

              {/* Last Starting 11 */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-5">
                  <h2 className="text-xl font-semibold text-gray-900">Last Starting</h2>
                  <Link to={`/club/${id}/last-starting`}>
                    <button className="text-blue-600 text-sm font-semibold flex items-center gap-1 hover:text-blue-700">
                      See all <ChevronRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
                <div className="bg-gray-50 rounded-lg p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img src={lastMatch.home_team_logo} alt={lastMatch.home_team_name} className="w-12 h-12 object-contain" />
                      <span className="font-semibold text-gray-900 text-lg">{lastMatch.event_home_team}</span>
                    </div>
                    <div className="text-4xl font-bold text-gray-900">{lastMatch.event_final_result}</div>
                    <div className="flex items-center gap-4">
                      <span className="font-semibold text-gray-900 text-lg">{lastMatch.event_away_team}</span>
                      <img src={lastMatch.away_team_logo} alt={lastMatch.away_team_name} className="w-12 h-12 object-contain" />
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 text-center mt-3">
                    {lastMatch.event_date} at {lastMatch.event_time}
                  </div>
                </div>
              </div>

              {/* Manager & Squad */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-5">
                  <h2 className="text-xl font-semibold text-gray-900">Manager & Squad</h2>
                  <Link to={`/club/${id}/current`}>
                    <button className="text-blue-600 text-sm font-semibold flex items-center gap-1 hover:text-blue-700">
                      See all <ChevronRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-4">Manager</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gray-400 rounded-full overflow-hidden">
                      <img src={manager.image} alt={manager.name} className="w-16 h-16 rounded-full mb-2 object-cover shadow" />

                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-lg">{manager.name}</div>
                      <div className="text-sm text-gray-600">{manager.country}</div>
                      <div className="text-sm text-gray-500">{manager.age} years </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-4">Current Squad</h3>
                  <div className="flex gap-4">
                    {player.map((player, key) => (
                      <div key={key} className="flex flex-col items-center">
                        <img src={player.image} alt={player.name} className="w-16 h-16 rounded-full mb-2 object-cover shadow" />
                        <div className=" text-gray-600 mb-1">{player.number}</div>
                        <div className="text-sm text-gray-900 font-bold">{player.name}</div>
                        <div className="text-blue-800 flex items-center justify-center text-sm mb-2">
                          {player.position}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Club Legends */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-5">
                  <h2 className="text-xl font-semibold text-gray-900">Club Legends</h2>
                  <Link to="/legend-players">
                    <button className="text-blue-600 text-sm font-semibold flex items-center gap-1 hover:text-blue-700">
                      See all <ChevronRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
                <div className="space-y-4">
                  {[
                    { name: 'Cristiano Ronaldo', role: 'Forward', period: '2003-2009', goals: 118, assists: 50, abbr: 'CR' },
                    { name: 'Wayne Rooney', role: 'Forward', period: '2004-2017', goals: 130, assists: 102, abbr: 'WR' },
                    { name: 'Ryan Giggs', role: 'Midfielder', period: '1990-2014', goals: 90, assists: 76, abbr: 'RG' }
                  ].map((legend, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {legend.abbr}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-base">{legend.name}</div>
                          <div className="text-sm text-gray-500">{legend.role} • {legend.period}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-base font-bold text-gray-900">{legend.goals} Goals</div>
                        <div className="text-sm text-gray-500">{legend.assists} assists</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Team Form */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-5">
                  <h2 className="text-xl font-semibold text-gray-900">Team Form</h2>
                </div>
                <div className="space-y-3">
                  {[
                    { match: 'MV 12', team: 'Manchester United', score: '3-1', result: 'W' },
                    { match: 'MV 10', team: 'Manchester United', score: '2-0', result: 'L' },
                    { match: 'MV 9', team: 'Manchester United', score: '1-1', result: 'W' },
                    { match: 'MV 8', team: 'Manchester United', score: '0-2', result: 'D' },
                    { match: 'MV 7', team: 'Manchester United', score: '4-1', result: 'W' }
                  ].map((form, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 bg-red-700 rounded flex items-center justify-center text-white text-xs font-bold">
                          MU
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900">{form.match}</div>
                          <div className="text-xs text-gray-500">{form.team}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-700 font-medium">{form.score}</span>
                        <span className={`w-8 h-7 rounded flex items-center justify-center text-xs font-bold ${form.result === 'W' ? 'bg-green-500 text-white' :
                            form.result === 'L' ? 'bg-red-500 text-white' :
                              'bg-gray-400 text-white'
                          }`}>
                          {form.result}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Table */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-5">
                  <h2 className="text-xl font-semibold text-gray-900">Table</h2>
                  <Link to="/table-standings">
                    <button className="text-blue-600 text-sm font-semibold flex items-center gap-1 hover:text-blue-700">
                      See all <ChevronRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
                <div className="text-center py-4">
                  <div className="mb-3">
                    <span className="text-6xl font-bold text-blue-600">3</span>
                    <span className="text-3xl font-bold text-blue-600 align-super">st</span>
                  </div>
                  <div className="text-sm text-gray-500 mb-4">Some season in MW</div>
                  <div className="flex items-center gap-3 justify-center mb-4">
                    <div className="w-10 h-10 bg-red-700 rounded flex items-center justify-center text-white text-sm font-bold">
                      MU
                    </div>
                    <span className="font-semibold text-gray-900">Manchester United</span>
                  </div>
                  <div className="flex justify-center gap-8 text-sm pt-3 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-gray-500 text-xs mb-1">W</div>
                      <div className="font-bold text-gray-900">7</div>
                    </div>
                    <div className="text-center">
                      <div className="text-gray-500 text-xs mb-1">GD</div>
                      <div className="font-bold text-gray-900">+12</div>
                    </div>
                    <div className="text-center">
                      <div className="text-gray-500 text-xs mb-1">Pts</div>
                      <div className="font-bold text-gray-900">23</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ClubDetails;