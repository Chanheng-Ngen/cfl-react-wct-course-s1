import React from 'react';
import { ArrowLeft } from 'lucide-react';

const App = () => {
  const standings = [
    { pos: 1, club: 'Arsenal', logo: 'ARS', color: 'bg-red-600', pl: 16, w: 11, d: 3, l: 2, gf: 30, ga: 10, gd: 20, pts: 36, form: ['W', 'W', 'W', 'W', 'W'], next: 'EVE', nextColor: 'bg-blue-600' },
    { pos: 2, club: 'Manchester City', logo: 'MC', color: 'bg-sky-500', pl: 16, w: 11, d: 1, l: 4, gf: 38, ga: 16, gd: 22, pts: 34, form: ['W', 'L', 'W', 'W', 'W'], next: 'WHU', nextColor: 'bg-red-800' },
    { pos: 3, club: 'Aston Villa', logo: 'AVL', color: 'bg-sky-400', pl: 16, w: 10, d: 3, l: 3, gf: 25, ga: 17, gd: 8, pts: 33, form: ['W', 'W', 'W', 'W', 'W'], next: 'MU', nextColor: 'bg-red-700' },
    { pos: 4, club: 'Chelsea', logo: 'CHE', color: 'bg-blue-700', pl: 16, w: 8, d: 4, l: 4, gf: 27, ga: 15, gd: 12, pts: 28, form: ['W', 'W', 'L', 'D', 'W'], next: 'NEW', nextColor: 'bg-gray-800' },
    { pos: 5, club: 'Crystal Palace', logo: 'CRY', color: 'bg-blue-800', pl: 16, w: 7, d: 5, l: 4, gf: 20, ga: 15, gd: 5, pts: 26, form: ['W', 'W', 'W', 'W', 'L'], next: 'LEE', nextColor: 'bg-yellow-400' },
    { pos: 6, club: 'Liverpool', logo: 'LIV', color: 'bg-red-700', pl: 16, w: 8, d: 2, l: 6, gf: 26, ga: 24, gd: 2, pts: 26, form: ['W', 'L', 'W', 'D', 'W'], next: 'TOT', nextColor: 'bg-blue-900' },
    { pos: 7, club: 'Sunderland', logo: 'SUN', color: 'bg-red-600', pl: 16, w: 7, d: 5, l: 4, gf: 19, ga: 17, gd: 2, pts: 26, form: ['W', 'L', 'W', 'D', 'W'], next: 'BRI', nextColor: 'bg-blue-500' },
    { pos: 8, club: 'Manchester United', logo: 'MU', color: 'bg-red-700', pl: 15, w: 7, d: 4, l: 4, gf: 26, ga: 22, gd: 4, pts: 25, form: ['W', 'W', 'L', 'D', 'W'], next: 'AVL', nextColor: 'bg-sky-400', highlight: true },
    { pos: 9, club: 'Tottenham', logo: 'TOT', color: 'bg-blue-900', pl: 16, w: 6, d: 5, l: 5, gf: 24, ga: 21, gd: 3, pts: 23, form: ['W', 'D', 'W', 'L', 'D'], next: 'LIV', nextColor: 'bg-red-700' },
    { pos: 10, club: 'West Ham', logo: 'WHU', color: 'bg-red-800', pl: 16, w: 5, d: 6, l: 5, gf: 19, ga: 20, gd: -1, pts: 21, form: ['D', 'W', 'L', 'D', 'L'], next: 'MC', nextColor: 'bg-sky-500' },
    { pos: 11, club: 'Brighton', logo: 'BRI', color: 'bg-blue-500', pl: 16, w: 4, d: 7, l: 5, gf: 18, ga: 22, gd: -4, pts: 19, form: ['L', 'D', 'D', 'W', 'D'], next: 'SUN', nextColor: 'bg-red-600' }
  ];

  const getFormColor = (result) => {
    if (result === 'W') return 'bg-green-500';
    if (result === 'D') return 'bg-yellow-400';
    return 'bg-red-500';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <button className="mb-4">
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Cambodia Football League - Standings</h1>
            <p className="text-sm text-gray-600 mt-1">Season 2024/25</p>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
          {/* Table Header */}
          <div className="grid grid-cols-[50px_200px_50px_50px_50px_50px_60px_60px_60px_60px_160px_60px] gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200 text-xs font-medium text-gray-600">
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

          {/* Table Body */}
          {standings.map((team, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-[50px_200px_50px_50px_50px_50px_60px_60px_60px_60px_160px_60px] gap-2 px-4 py-3 border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                team.highlight ? 'bg-blue-50' : ''
              }`}
            >
              {/* Position */}
              <div className="flex items-center justify-center">
                <span className="text-sm font-semibold text-gray-900">{team.pos}</span>
              </div>

              {/* Team */}
              <div className="flex items-center gap-2">
                <div className={`w-7 h-7 ${team.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-xs font-bold">{team.logo.substring(0, 2)}</span>
                </div>
                <span className="text-sm font-medium text-gray-900">{team.club}</span>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-center text-sm text-gray-700">{team.pl}</div>
              <div className="flex items-center justify-center text-sm text-gray-700">{team.w}</div>
              <div className="flex items-center justify-center text-sm text-gray-700">{team.d}</div>
              <div className="flex items-center justify-center text-sm text-gray-700">{team.l}</div>
              <div className="flex items-center justify-center text-sm text-gray-700">{team.gf}</div>
              <div className="flex items-center justify-center text-sm text-gray-700">{team.ga}</div>
              <div className="flex items-center justify-center text-sm font-medium text-gray-900">
                {team.gd > 0 ? `+${team.gd}` : team.gd}
              </div>
              <div className="flex items-center justify-center text-sm font-bold text-gray-900">{team.pts}</div>

              {/* Form */}
              <div className="flex items-center justify-center gap-1">
                {team.form.map((result, i) => (
                  <div
                    key={i}
                    className={`w-6 h-6 ${getFormColor(result)} rounded-full flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {result}
                  </div>
                ))}
              </div>

              {/* Next */}
              <div className="flex items-center justify-center">
                <div className={`w-8 h-8 ${team.nextColor} rounded-full flex items-center justify-center`}>
                  <span className="text-white text-xs font-bold">{team.next.substring(0, 2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-4 flex items-center gap-6 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <span className="text-gray-600">Win</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
            <span className="text-gray-600">Draw</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <span className="text-gray-600">Loss</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;