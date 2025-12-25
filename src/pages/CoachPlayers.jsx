import React from 'react';
import { ArrowLeft, Camera } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { footballApi } from '../services/API';

const CoachPlayers = () => {
  const { id } = useParams();
  const [managerCurrent, setManagerCurrent] = useState({});
  const [playerCurrent, setPlayerCurrent] = useState([]);
  useEffect(() => {
    const getClubDetails = async () => {
      try {
        const club = await footballApi.getTeams(id);
        console.log(club.result);
        if (!club?.result) return;
        const managerFormatted = {
          name: club.result[0].coaches[0].coach_name || 'Unknown',
          country: club.result[0].coaches[0].coach_country || 'Unknown',
          age: club.result[0].coaches[0].coach_age || 'Unknown',
          image: club.result[0].coaches[0].coach_image || null
        };
        setManagerCurrent(managerFormatted);
        const playerFormatted = club.result[0].players.map((player) => ({
          player_key: player.player_key,
          name: player.player_name || 'Unknown',
          position: player.player_type || 'Unknown',
          number: player.player_number || 'Unknown',
          image: player.player_image || null
        }));
        setPlayerCurrent(playerFormatted);
      } catch (error) {
        console.error('Error fetching club details:', error);
      }
    }
    getClubDetails();
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pb-8">

        <div className="container mx-auto px-4">
          <ol className="flex items-center gap-2 text-sm text-gray-600 py-6">
            <li className="cursor-pointer text-blue-500 underline"><Link to={`/club/${id}`}>Club</Link></li>
            <li>/</li>
            <li>Coach & Players</li>
          </ol>
          <div className="mb-8">
            <h2 className="text-sm font-semibold text-gray-700 mb-4">Manager</h2>
            <div className="bg-blue-50 rounded-xl p-4 inline-block">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gray-400 rounded-full overflow-hidden">
                  <img src={managerCurrent.image} alt={managerCurrent.name} className="w-16 h-16 rounded-full mb-2 object-cover shadow" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-base">{managerCurrent.name}</div>
                  <div className="text-sm text-gray-600">{managerCurrent.country}</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-gray-700 mb-4">Current Squad</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {playerCurrent.map((player, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-3">
                      <img src={player.image} alt={player.name} className="w-16 h-16 rounded-full mb-2 object-cover shadow" />
                      <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 rounded px-1.5 py-0.5 shadow-sm">
                        <span className="text-xs font-semibold text-gray-700">{player.number}</span>
                      </div>
                    </div>
                    <div className="text-center mt-2">
                      <div className="text-sm font-semibold text-gray-900 mb-0.5">{player.name}</div>
                      <div className="text-xs text-gray-600 mb-0.5">{player.position}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoachPlayers;