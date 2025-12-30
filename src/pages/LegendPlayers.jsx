import React from 'react';
import { ArrowLeft, Trophy } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { footballApi } from '../services/API';

const LegendPlayers = () => {
  const { id } = useParams();
  const [legendPlayers, setLegendPlayers] = useState([]);
  const [clubInfo, setClubInfo] = useState({});
  useEffect(() => {
    const getlegendPlayers = async () => {
      try {
        const club = await footballApi.getTeams(id);
        console.log(club.result[0]);
        if (!club?.result) return;
        // For demonstration, using hardcoded legends data
        setLegendPlayers(club.result[0]?.players
          ?.filter(player => (player.player_goals || 0) > 0)
          .sort((a, b) => (b.player_goals || 0) - (a.player_goals || 0))
          .map((player) => ({
          name: player.player_name || 'Unknown',
          pos: player.player_type || 'Unknown',
          country: player.player_country || 'Unknown',
          goals: player.player_goals || 0,
          assists: player.player_assists || 0,
          matches: player.player_match_played || 0,
          initials: player.player_name ? player.player_name.split(' ').map(n => n[0]).join('').toUpperCase() : 'UK',
          image: player.player_image || null
        })));
        setClubInfo(club.result[0]);
        console.log(clubInfo);
      } catch (error) {
        console.error('Error fetching legend players:', error);
      }
    }
    getlegendPlayers(); 
  }, [id]);

  const championships = ['2023', '2021', '2019', '2018', '2015', '2013', '2011', '2009', '2008', '2007'];

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="z-10 flex flex-col gap-6 items-start h-full px-4 container mx-auto">
        <ol className='flex gap-2 items-center mt-5'>
          <li className="cursor-pointer hover:text-blue-500 underline"><Link to={`/club/${id}`}>Club</Link></li>
          <span>/</span>
          <li className='text-gray-500'>Legendary Players</li>
        </ol>
        <div className="flex  mx-auto justify-center items-center gap-5">
          <img src={clubInfo.team_logo} alt={clubInfo.team_name} className="w-16 h-16 object-contain" />
          <h1 className="text-xl font-bold text-gray-900">{clubInfo.team_name}</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* All Legendary Players */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <h2 className="text-base font-semibold text-gray-900">All Legendary Players</h2>
            <span className="text-sm text-gray-500">({legendPlayers.length})</span>
          </div>

          <div className="space-y-3">
            {legendPlayers.map((legend, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <img src={legend.image} alt={legend.initials} className="w-14 h-14 rounded-full object-cover shadow flex justify-center items-center" />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 text-base">{legend.name}</div>
                      <div className="flex items-center gap-3 text-sm text-gray-600 mt-1">
                        <span>{legend.pos}</span>
                        <span>•</span>
                        <span>{legend.country}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end gap-1">
                    <div className="text-right">
                      <div className="text-xl font-bold text-gray-900">{legend.goals} <span className='text-xs text-gray-500'>goals</span></div>
                    </div>
                    <div className="flex gap-4 text-xs text-gray-600 mt-1">
                      <div>
                        <span className="font-semibold">{legend.assists}</span>
                        <span className="text-gray-500 ml-1">assists</span>
                      </div>
                      <div>
                        <span className="font-semibold">{legend.matches}</span>
                        <span className="text-gray-500 ml-1">matches</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Championships Won */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-base font-semibold text-gray-900 mb-4">Championships Won</h2>
          <div className="flex flex-wrap gap-2">
            {championships.map((year, idx) => (
              <div key={idx} className="bg-yellow-400 text-gray-900 font-bold text-sm px-4 py-2 rounded-full shadow-sm">
                {year}
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

export default LegendPlayers;