import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowUpRight, Trophy } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, useParams } from 'react-router';
import { footballApi } from '../services/API';

const LastStarting = () => {
  const { id } = useParams();
  const [lastMatch, setLastMatch] = useState({});
  let teamId = parseInt(id);
  const formation = {
    gk: [{ num: '31', name: 'Lammens', img: true }],
    def: [
      { num: '3', name: 'Mazraoui', img: true, sub: { min: "69'", icon: 'red' } },
      { num: '26', name: 'Heaven', img: true, sub: { min: "69'", icon: 'red' } },
      { num: '23', name: 'Shaw', img: true }
    ],
    mid: [
      { num: '16', name: 'Diallo', img: true, sub: { min: "78'", icon: 'red' } },
      { num: '18', name: 'Casemiro', img: true },
      { num: '8', name: 'Fernandes', img: true, captain: true },
      { num: '2', name: 'Dalot', img: true, sub: { min: "84'", icon: 'purple' } }
    ],
    fwd: [
      { num: '19', name: 'Mbeumo', img: true, sub: { min: "85'", icon: 'red' }, yellow: true, ball: true },
      { num: '7', name: 'Mount', img: true, ball: true }
    ],
    str: [{ num: '10', name: 'Cunha', img: true, sub: { min: null, icon: 'purple' } }]
  };

  const substitutes = [
    { name: 'Tom Heaton', pos: 'GK', num: '22', rating: null },
    { name: 'Victor Lindelof', pos: 'CB', num: '2', rating: null },
    { name: 'Sofyan Amrabat', pos: 'CDM', num: '4', rating: null },
    { name: 'Mason Mount', pos: 'CAM', num: '7', rating: null },
    { name: 'Alejandro Garnacho', pos: 'LW', num: '17', rating: null },
    { name: 'Facundo Pellistri', pos: 'RW', num: '28', rating: null },
    { name: 'Anthony Martial', pos: 'ST', num: '9', rating: null }
  ];


  useEffect(() => {

    if (isNaN(teamId)) return;

    const fromDate = '2025-12-12';
    const toDate = '2025-12-21';
    const standingLeagueId = 152;

    const getLastMatchData = async () => {
      try {
        const fixtures = await footballApi.getFixtures(fromDate, toDate, standingLeagueId);

        const lastMatch = fixtures.result.find(
          match =>
            match.away_team_key === teamId ||
            match.home_team_key === teamId
        );

        if (lastMatch) {
          const lastMatchformatted = {
            home_team_key: lastMatch.home_team_key,
            away_team_key: lastMatch.away_team_key,
            event_home_team: lastMatch.event_home_team,
            event_away_team: lastMatch.event_away_team,
            home_team_logo: lastMatch.home_team_logo,
            away_team_logo: lastMatch.away_team_logo,
            event_final_result: lastMatch.event_final_result,
            event_date: lastMatch.event_date,
            event_time: lastMatch.event_time,
            coach: lastMatch.lineups?.[teamId === lastMatch.home_team_key ? 'home_team' : 'away_team']?.coaches[0]?.coache,
            lineups: lastMatch.lineups?.[teamId === lastMatch.home_team_key ? 'home_team' : 'away_team']?.starting_lineups,
            substitutes: lastMatch.lineups?.[teamId === lastMatch.home_team_key ? 'home_team' : 'away_team']?.substitutes,
          }
          setLastMatch(lastMatchformatted);
          // console.log(lastMatch);
        }
      } catch (error) {
        console.error('Error fetching last match data:', error);
      }
    };

    getLastMatchData();
  }, [teamId]);

  const PlayerCard = ({ player }) => (
    <div className="relative flex flex-col items-center group">
      {player.sub && (
        <div className="absolute -top-8 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-lg">
          <span className="text-sm font-bold text-gray-700">{player.sub.min}</span>
          <ArrowUpRight className={`w-4 h-4 ${player.sub.icon === 'red' ? 'text-red-500' : 'text-purple-500'}`} />
        </div>
      )}
      <div className="relative transform transition-transform group-hover:scale-110">
        {/* Jersey */}
        <div className="relative w-20 h-24">
          {/* Main Jersey Body */}
          <div className="absolute inset-0 bg-gradient-to-b from-red-600 via-red-700 to-red-800 rounded-t-full shadow-xl">
            {/* Jersey texture */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-t-full"></div>
            {/* Stripes */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-white/20"></div>
          </div>

          {/* Collar */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-3 bg-white/30 rounded-t-lg"></div>

          {/* Number on Jersey */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white/90 drop-shadow-lg">
            {player.num}
          </div>

          {/* Sleeves */}
          <div className="absolute top-3 -left-2 w-6 h-8 bg-gradient-to-br from-red-600 to-red-800 rounded-lg transform -rotate-12"></div>
          <div className="absolute top-3 -right-2 w-6 h-8 bg-gradient-to-bl from-red-600 to-red-800 rounded-lg transform rotate-12"></div>
        </div>

        {/* Captain Armband */}
        {player.captain && (
          <div className="absolute top-6 -left-3 w-8 h-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded flex items-center justify-center shadow-lg transform -rotate-12 border-2 border-yellow-600">
            <span className="text-xs font-bold text-gray-800">C</span>
          </div>
        )}

        {/* Yellow Card */}
        {player.yellow && (
          <div className="absolute -top-2 -left-3 w-4 h-6 bg-gradient-to-b from-yellow-300 to-yellow-400 rounded-sm shadow-lg border border-yellow-500 transform rotate-12"></div>
        )}

        {/* Football Icon */}
        {player.ball && (
          <div className="absolute -right-3 top-8">
            <div className="w-7 h-7 bg-gradient-to-br from-white to-gray-100 border-2 border-gray-800 rounded-full flex items-center justify-center shadow-xl relative">
              <div className="absolute inset-1 rounded-full" style={{
                background: 'radial-gradient(circle at 30% 30%, white 0%, #f0f0f0 50%, #e0e0e0 100%)'
              }}>
                <svg className="w-full h-full" viewBox="0 0 24 24">
                  <path d="M12 2L8 8H4L7 14L4 20H8L12 22L16 20H20L17 14L20 8H16L12 2Z" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-700" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Name Plate */}
      <div className="mt-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg border border-gray-200 group-hover:shadow-xl transition-shadow">
        <div className="text-xs text-gray-600 font-medium text-center">{player.num}</div>
        <div className="text-sm font-bold text-gray-900 text-center whitespace-nowrap">{player.name}</div>
      </div>
    </div>
  );
  

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-6">
        <div className="container mx-auto">
          {/* Back Button */}
          <ol className='flex mb-5'>
            <li className='underline hover:text-blue-500'>
              <Link to={`/club/${id}`}>{lastMatch.home_team_key === teamId ? lastMatch.event_home_team : lastMatch.event_away_team}</Link>
            </li>
            <li className='mx-2'>/</li>
            <li className='text-gray-500 ml-2'>Last Starting</li>
          </ol>

          {/* Match Result Header */}
          <div className="bg-gradient-to-r from-red-700 to-gray-700 rounded-2xl shadow-2xl p-8 mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img src={lastMatch.home_team_logo} alt={lastMatch.event_home_team} className="w-16 h-16 object-contain" />
                <span className="font-bold text-white text-xl">{lastMatch.event_home_team}</span>
              </div>
              <div className="text-6xl font-black text-white drop-shadow-2xl">{lastMatch.event_final_result}</div>
              <div className="flex items-center gap-4">
                <span className="font-bold text-white text-xl">{lastMatch.event_away_team}</span>
                <img src={lastMatch.away_team_logo} alt={lastMatch.event_away_team} className="w-16 h-16 object-contain" />
              </div>
            </div>
            <div className="relative z-10 text-center text-white/90 text-sm mt-4 font-medium">
              {lastMatch.event_date} at {lastMatch.event_time}
            </div>
          </div>

          {/* Formation */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-sm text-gray-600 block">Manager</span>
                  <span className="text-xl font-bold text-gray-900">   {lastMatch.coach || 'Loading...'}</span>
                </div>
              </div> 
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                4-4-2 Formation
              </div>
            </div>

            {/* Football Pitch */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{
              background: 'linear-gradient(180deg, #2d5016 0%, #1a3a0f 50%, #2d5016 100%)',
              minHeight: '700px'
            }}>
              {/* Grass texture effect */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'
              }}></div>

              {/* Field markings */}
              <div className="absolute inset-0">
                {/* Penalty areas */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-24 border-4 border-white/40 rounded-b-3xl"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-24 border-4 border-white/40 rounded-t-3xl"></div>

                {/* Center circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-white/40 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white/60 rounded-full"></div>

                {/* Halfway line */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/40"></div>

                {/* Corner arcs */}
                <div className="absolute top-0 left-0 w-8 h-8 border-4 border-white/30 rounded-br-full"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-4 border-white/30 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-4 border-white/30 rounded-tr-full"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-4 border-white/30 rounded-tl-full"></div>
              </div>

              {/* Players */}
              <div className="relative z-10 flex flex-col items-center py-12 gap-16">
                {/* Goalkeeper */}
                <div className="flex justify-center">
                  <PlayerCard player={formation.gk[0]} />
                </div>

                {/* Defenders */}
                <div className="flex justify-center gap-20">
                  {formation.def.map((player, idx) => (
                    <PlayerCard key={idx} player={player} />
                  ))}
                </div>

                {/* Midfielders */}
                <div className="flex justify-center gap-16">
                  {formation.mid.map((player, idx) => (
                    <PlayerCard key={idx} player={player} />
                  ))}
                </div>

                {/* Forwards */}
                <div className="flex justify-center gap-24">
                  {formation.fwd.map((player, idx) => (
                    <PlayerCard key={idx} player={player} />
                  ))}
                </div>

                {/* Striker */}
                <div className="flex justify-center">
                  <PlayerCard player={formation.str[0]} />
                </div>
              </div>
            </div>
          </div>

          {/* Substitutes */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">⇄</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Substitutes</h3>
            </div>

            <div className="grid grid-cols-7 gap-4">
              {substitutes.map((player, idx) => (
                <div key={idx} className="flex flex-col items-center group">
                  <div className="relative mb-3">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:shadow-xl transition-shadow">
                      {player.name}
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-700">{player.num}</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-gray-900">{player.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{player.pos}</div>
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

export default LastStarting;