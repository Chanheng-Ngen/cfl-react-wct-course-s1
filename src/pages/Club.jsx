import { useEffect, useState } from 'react';
import { Trophy, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router';
import { clubs } from '../services/mockData';
import { footballApi } from '../services/API';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ClubsShowcase() {
  const [club, setClub] = useState([]);
  useEffect(() => {
    const clubsFetch = async () => {
      try {
        const teamId = 79;
        const getTeamsData = await footballApi.getTeams(teamId);
        console.log('Fetched Teams Data:', getTeamsData.result);
        if(getTeamsData && getTeamsData.result) {
          const teamsInfo = getTeamsData.result.map((team, index) => {
            return {
              id: team.team_key || index,
              team_name: team.team_name,
              team_logo: team.team_logo,
              est: team.team_founded || clubs[index].est,
              stadium: team.venue?.name || clubs[index].stadium,
              capacity: team.venue?.capacity || clubs[index].capacity,
              championships: 0 
            }
          })
          setClub(teamsInfo);
        }
      } catch (error) {
        console.error('Clubs Fetch Error:', error);
        setClub(clubs); 
      } finally {
        // Any cleanup or final steps can be added here
      }
    }
    clubsFetch();
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-16 px-4 ">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-black text-gray-900 mb-4">Clubs</h1>
            <div className="flex items-center gap-4">
              <select className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-900 font-medium cursor-pointer hover:border-gray-400 transition-colors">
                <option>2025/26</option>
              </select>
            </div>
            <h2 className="text-2xl font-bold text-gray-700 mt-6">2025/26 Season Clubs</h2>
          </div>

          {/* Clubs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {club.map((team, index) => (
              <Link to="/club-details" key={team.id || index}>
                <div
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 overflow-hidden cursor-pointer border border-gray-100"
                >
                  {/* Club Header */}
                  <div className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg mb-4 group-hover:scale-110 transition-transform`}>
                        <img src={team.team_logo} alt={team.team_name} className="w-full h-full object-contain" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2">{team.team_name}</h3>
                      <div className="flex items-center gap-1.5 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span className="font-semibold">{team.est}</span>
                      </div>
                    </div>
                  </div>

                  {/* Club Details */}
                  <div className="px-6 pb-6 space-y-4">
                    {/* Championships */}
                    <div className="flex items-center justify-center gap-3 border-t border-gray-100 pt-4">
                      <Trophy className="w-5 h-5 text-yellow-500" />
                      <span className="text-sm font-bold text-gray-700">Championships</span>
                      <span className={`ml-auto px-3 py-1 rounded-full text-sm font-bold ${team.championships > 0 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                        {team.championships}
                      </span>
                    </div>

                    {/* Stadium Info */}
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ClubsShowcase;