import React from 'react';

const App = () => {
  const standings = [
    { pos: 1, club: 'Preah Khan Reach Svay Rieng FC', logo: '🏛️', played: 8, won: 7, drawn: 0, lost: 1, gf: 27, ga: 6, gd: 21, pts: 21, form: ['W', 'W', 'L', 'W', 'W'], next: '⚔️' },
    { pos: 2, club: 'Angkor Tiger FC', logo: '🐯', played: 9, won: 7, drawn: 0, lost: 2, gf: 30, ga: 10, gd: 20, pts: 21, form: ['L', 'W', 'W', 'W', 'W'], next: '🦁' },
    { pos: 3, club: 'Phnom Penh Crown FC', logo: '👑', played: 8, won: 5, drawn: 3, lost: 0, gf: 18, ga: 10, gd: 8, pts: 18, form: ['W', 'W', 'W', 'W', 'D'], next: '⚡' },
    { pos: 4, club: 'Boeung Ket FC', logo: '🏆', played: 10, won: 4, drawn: 4, lost: 2, gf: 10, ga: 10, gd: 0, pts: 16, form: ['W', 'L', 'W', 'D', 'D'], next: '🌟' },
    { pos: 5, club: 'NagaWorld FC', logo: '🎰', played: 9, won: 4, drawn: 3, lost: 2, gf: 15, ga: 11, gd: 4, pts: 15, form: ['W', 'W', 'D', 'D', 'W'], next: '💎' },
    { pos: 6, club: 'Royal Cambodian Armed Forces FC', logo: '⚔️', played: 10, won: 3, drawn: 4, lost: 3, gf: 10, ga: 16, gd: -6, pts: 13, form: ['D', 'L', 'W', 'L', 'L'], next: '🦁' },
    { pos: 7, club: 'Visakha FC', logo: '⚡', played: 10, won: 2, drawn: 5, lost: 3, gf: 15, ga: 17, gd: -2, pts: 11, form: ['W', 'D', 'L', 'D', 'D'], next: '🏛️' },
    { pos: 8, club: 'MDI Kampong Dewa FC', logo: '🌊', played: 9, won: 2, drawn: 4, lost: 3, gf: 10, ga: 13, gd: -3, pts: 10, form: ['L', 'L', 'D', 'D', 'D'], next: '🏔️' },
    { pos: 9, club: 'Kirivong Sok Sen Chey FC', logo: '🏔️', played: 10, won: 2, drawn: 3, lost: 5, gf: 8, ga: 14, gd: -6, pts: 9, form: ['L', 'D', 'W', 'W', 'D'], next: '🎯' },
    { pos: 10, club: 'Asia Pacific FC', logo: '🌏', played: 9, won: 1, drawn: 4, lost: 4, gf: 7, ga: 12, gd: -5, pts: 7, form: ['D', 'L', 'D', 'L', 'W'], next: '🦅' },
    { pos: 11, club: 'Soltilo Angkor FC', logo: '🎯', played: 10, won: 1, drawn: 2, lost: 7, gf: 5, ga: 18, gd: -13, pts: 5, form: ['L', 'L', 'D', 'L', 'L'], next: '⚡' }
  ];

  const getFormColor = (result) => {
    if (result === 'W') return 'bg-green-500';
    if (result === 'D') return 'bg-gray-400';
    return 'bg-red-500';
  };

  const getGdColor = (gd) => {
    if (gd > 0) return 'text-green-600 font-semibold';
    if (gd < 0) return 'text-red-600 font-semibold';
    return 'text-gray-900 font-semibold';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">League Standings</h1>
          <p className="text-lg text-gray-600">Cambodian Football League - 2024/25 Season</p>
        </div>

        {/* Table Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Table Header */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
            <div className="px-6 py-4">
              <h2 className="text-xl font-bold">League Table</h2>
            </div>
            <div className="grid grid-cols-[60px_1fr_80px_80px_80px_80px_80px_80px_100px_80px_200px_80px] gap-3 px-6 py-4 text-sm font-semibold border-t border-slate-700">
              <div className="text-center">Pos</div>
              <div>Club</div>
              <div className="text-center">Played</div>
              <div className="text-center">Won</div>
              <div className="text-center">Drawn</div>
              <div className="text-center">Lost</div>
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
                className={`grid grid-cols-[60px_1fr_80px_80px_80px_80px_80px_80px_100px_80px_200px_80px] gap-3 px-6 py-4 hover:bg-blue-50 transition-all duration-200 ${
                  idx < 3 ? 'bg-green-50/30' : idx >= standings.length - 3 ? 'bg-red-50/30' : ''
                }`}
              >
                {/* Position */}
                <div className="flex items-center justify-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                    idx === 0 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white' :
                    idx === 1 ? 'bg-gradient-to-br from-gray-300 to-gray-400 text-white' :
                    idx === 2 ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-white' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {team.pos}
                  </div>
                </div>

                {/* Club */}
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{team.logo}</div>
                  <span className="text-base font-semibold text-gray-900">{team.club}</span>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-center">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                    {team.played}
                  </span>
                </div>
                <div className="flex items-center justify-center text-base text-gray-700 font-medium">{team.won}</div>
                <div className="flex items-center justify-center text-base text-gray-700 font-medium">{team.drawn}</div>
                <div className="flex items-center justify-center text-base text-gray-700 font-medium">{team.lost}</div>
                <div className="flex items-center justify-center text-base text-gray-700 font-medium">{team.gf}</div>
                <div className="flex items-center justify-center text-base text-gray-700 font-medium">{team.ga}</div>
                <div className="flex items-center justify-center">
                  <span className={`text-base ${getGdColor(team.gd)}`}>
                    {team.gd > 0 ? `+${team.gd}` : team.gd}
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-xl font-bold text-blue-600">{team.pts}</span>
                </div>

                {/* Form */}
                <div className="flex items-center justify-center gap-1.5">
                  {team.form.map((result, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 ${getFormColor(result)} rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-sm`}
                    >
                      {result}
                    </div>
                  ))}
                </div>

                {/* Next */}
                <div className="flex items-center justify-center">
                  <div className="text-3xl bg-gray-50 rounded-full w-12 h-12 flex items-center justify-center shadow-sm">
                    {team.next}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Legend */}
        <div className="mt-6 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-sm text-gray-600 font-medium">Cambodia Football League</div>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-50 border-2 border-green-200 rounded"></div>
                <span className="text-gray-700 font-medium">Relegation Zone</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500 rounded"></div>
                <span className="text-gray-700 font-medium">Win</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-400 rounded"></div>
                <span className="text-gray-700 font-medium">Draw</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-red-500 rounded"></div>
                <span className="text-gray-700 font-medium">Loss</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;