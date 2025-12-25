import { Calendar, MapPin, ChevronRight, ArrowLeft } from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { Link, useParams} from 'react-router';
import { useEffect, useState } from 'react';
import { footballApi } from '../services/API.js';

const ClubDetails = () => {
  const { id } = useParams();
  const [manager, setManager] = useState({});
  const [player, setPlayer] = useState([]);
  useEffect(() => {
    const getClubDetails = async () => {
      try{
        const  club = await footballApi.getTeams(id);
        console.log(club.result);
        if(!club?.result) return;
        // manater info
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
      }catch(error){
        console.error('Error fetching club details:', error);
      }
    }
    getClubDetails();
  }, [id]);
  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className=" h-48 bg-gradient-to-br from-black mb-8">
           
        <div className="z-10 flex flex-col gap-6 items-start h-full px-4 container mx-auto">
          <Link to = "/club">
          <button className="mt-5 w-10 h-10 bg-blue-900/40 hover:bg-blue-900/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          </Link>
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 bg-red-700 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
              <span className="text-white text-3xl font-bold">MU</span>
            </div>
            <div className="text-white">
              <h1 className="text-3xl font-bold mb-2">Manchester United</h1>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Founded 1878</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Old Trafford</span>
                </div>
                <span>Manchester, England</span>
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
                  <div className="w-12 h-12 bg-red-700 rounded flex items-center justify-center text-white text-sm font-bold">
                    MU
                  </div>
                  <span className="font-semibold text-gray-900 text-lg">Manchester United</span>
                </div>
                <div className="text-center px-6">
                  <div className="text-3xl font-bold text-gray-900">16:30</div>
                  <div className="text-sm text-gray-500 mt-1">Premier League • Sun 17 Nov</div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-gray-900 text-lg">Liverpool FC</span>
                  <div className="w-12 h-12 bg-red-700 rounded flex items-center justify-center text-white text-sm font-bold">
                    LIV
                  </div>
                </div>
              </div>
            </div>

            {/* Last Starting 11 */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-xl font-semibold text-gray-900">Last Starting 11</h2>
                <Link to = "/last-starting">
                <button className="text-blue-600 text-sm font-semibold flex items-center gap-1 hover:text-blue-700">
                  See all <ChevronRight className="w-4 h-4" />
                </button>
                </Link>
              </div>
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-700 rounded flex items-center justify-center text-white text-sm font-bold">
                      MU
                    </div>
                    <span className="font-semibold text-gray-900 text-lg">Manchester United</span>
                  </div>
                  <div className="text-4xl font-bold text-gray-900">2 - 2</div>
                  <div className="flex items-center gap-4">
                    <span className="font-semibold text-gray-900 text-lg">Arsenal</span>
                    <div className="w-12 h-12 bg-red-700 rounded flex items-center justify-center text-white text-sm font-bold">
                      ARS
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-500 text-center mt-3">
                  ET • Matchweek 11 • Sat 08 Nov
                </div>
              </div>
            </div>

            {/* Manager & Squad */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-xl font-semibold text-gray-900">Manager & Squad</h2>
                <Link to = {`/club/${id}/current`}>
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
                <Link to = "/legend-players">
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
                      <span className={`w-8 h-7 rounded flex items-center justify-center text-xs font-bold ${
                        form.result === 'W' ? 'bg-green-500 text-white' : 
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
              <Link to = "/table-standings">
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