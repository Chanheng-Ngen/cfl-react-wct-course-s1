import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LeagueStandings = () => {
  const standings = [
    { pos: 1, club: 'Preah Khan Reach Svay Rieng FC', played: 16, won: 11, drawn: 3, lost: 2, gf: 30, ga: 10, gd: 20, pts: 36, form: ['W', 'W', 'W', 'W', 'W'], next: 'Angkor Tiger FC' },
    { pos: 2, club: 'Angkor Tiger FC', played: 16, won: 11, drawn: 1, lost: 4, gf: 38, ga: 16, gd: 22, pts: 34, form: ['W', 'W', 'W', 'W', 'W'], next: 'Phnom Penh Crown FC' },
    { pos: 3, club: 'Phnom Penh Crown FC', played: 16, won: 10, drawn: 3, lost: 3, gf: 25, ga: 17, gd: 8, pts: 33, form: ['W', 'W', 'W', 'W', 'W'], next: 'Boeung Ket FC' },
    { pos: 4, club: 'Boeung Ket FC', played: 16, won: 8, drawn: 4, lost: 4, gf: 27, ga: 15, gd: 12, pts: 28, form: ['W', 'W', 'D', 'D', 'W'], next: 'Visakha FC' },
    { pos: 5, club: 'NagaWorld FC', played: 16, won: 7, drawn: 5, lost: 4, gf: 20, ga: 15, gd: 5, pts: 26, form: ['W', 'W', 'W', 'W', 'L'], next: 'Asia Pacific FC' },
    { pos: 6, club: 'Royal Cambodian Armed Forces FC', played: 16, won: 8, drawn: 2, lost: 6, gf: 26, ga: 24, gd: 2, pts: 26, form: ['W', 'W', 'D', 'D', 'W'], next: 'Preah Khan Reach FC' },
    { pos: 7, club: 'Visakha FC', played: 16, won: 7, drawn: 5, lost: 4, gf: 19, ga: 17, gd: 2, pts: 26, form: ['W', 'W', 'D', 'D', 'W'], next: 'Boeung Ket FC' },
    { pos: 8, club: 'Kirivong Sok Sen Chey FC', played: 16, won: 7, drawn: 4, lost: 5, gf: 26, ga: 22, gd: 4, pts: 25, form: ['W', 'W', 'W', 'D', 'W'], next: 'MDI Kampong Dewa FC' },
    { pos: 9, club: 'MDI Kampong Dewa FC', played: 15, won: 7, drawn: 4, lost: 4, gf: 26, ga: 22, gd: 4, pts: 25, form: ['W', 'W', 'W', 'D', 'W'], next: 'Kirivong FC' },
    { pos: 10, club: 'Asia Pacific FC', played: 15, won: 3, drawn: 2, lost: 10, gf: 14, ga: 28, gd: -14, pts: 11, form: ['L', 'L', 'L', 'D', 'L'], next: 'NagaWorld FC' },
    { pos: 11, club: 'Soltilo Angkor FC', played: 16, won: 2, drawn: 3, lost: 11, gf: 12, ga: 35, gd: -23, pts: 9, form: ['L', 'L', 'D', 'L', 'L'], next: 'Royal Armed Forces FC' }
  ];

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

  const getTeamColor = (index) => {
    const colors = [
      'bg-red-500', 'bg-blue-400', 'bg-blue-300', 'bg-blue-600',
      'bg-blue-700', 'bg-red-600', 'bg-red-600', 'bg-red-500',
      'bg-purple-400', 'bg-teal-400', 'bg-orange-400'
    ];
    return colors[index];
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
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Table Header */}
          <div className="bg-white border-b-2 border-gray-200">
            <div className="grid grid-cols-[50px_minmax(220px,1fr)_repeat(8,70px)_180px_120px] gap-3 px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
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
              <div className="text-center">Next</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-100">
            {standings.map((team, idx) => (
              <div
                key={idx}
                className="grid grid-cols-[50px_minmax(220px,1fr)_repeat(8,70px)_180px_120px] gap-3 px-6 py-4 hover:bg-gray-50 transition-colors"
              >
                {/* Position */}
                <div className="flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-700">{team.pos}</span>
                </div>

                {/* Club */}
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 ${getTeamColor(idx)} rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm flex-shrink-0`}>
                    {team.club.substring(0, 3).toUpperCase()}
                  </div>
                  <span className="text-sm font-medium text-gray-800 truncate">{team.club}</span>
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
                <div className="flex items-center justify-center gap-1">
                  {team.form.map((result, i) => (
                    <div
                      key={i}
                      className={`w-7 h-7 ${getFormColor(result)} rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm`}
                    >
                      {result}
                    </div>
                  ))}
                </div>

                {/* Next */}
                <div className="flex items-center justify-center">
                  <div className={`w-9 h-9 ${getTeamColor((idx + 1) % 11)} rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm`}>
                    {team.next.substring(0, 3).toUpperCase()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 flex items-center justify-center gap-8 text-sm">
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