import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router';
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
    <>
    <Header />
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="mb-6">
          <Link to = "/club-details">
          <button className="mb-4">
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          </Link>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Cambodia Football League - Standings</h1>
            <p className="text-sm text-gray-600 mt-1">Season 2024/25</p>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
          <table className="min-w-full table-fixed">
            <colgroup>
              <col style={{ width: '50px' }} />
              <col style={{ width: '200px' }} />
              <col style={{ width: '50px' }} />
              <col style={{ width: '50px' }} />
              <col style={{ width: '50px' }} />
              <col style={{ width: '50px' }} />
              <col style={{ width: '60px' }} />
              <col style={{ width: '60px' }} />
              <col style={{ width: '60px' }} />
              <col style={{ width: '60px' }} />
              <col style={{ width: '160px' }} />
              <col style={{ width: '60px' }} />
            </colgroup>

            <thead className="bg-gray-50 border-b border-gray-200 text-xs font-medium text-gray-600">
              <tr>
                <th className="py-3 text-center">Pos</th>
                <th className="py-3 text-left">Team</th>
                <th className="py-3 text-center">Pl</th>
                <th className="py-3 text-center">W</th>
                <th className="py-3 text-center">D</th>
                <th className="py-3 text-center">L</th>
                <th className="py-3 text-center">GF</th>
                <th className="py-3 text-center">GA</th>
                <th className="py-3 text-center">GD</th>
                <th className="py-3 text-center">Pts</th>
                <th className="py-3 text-center">Form</th>
                <th className="py-3 text-center">Next</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {standings.map((team, idx) => (
                <tr
                  key={idx}
                  className={`${team.highlight ? 'bg-blue-50' : ''} hover:bg-gray-50 transition-colors`}
                >
                  <td className="py-3 text-center">
                    <span className="text-sm font-semibold text-gray-900">{team.pos}</span>
                  </td>

                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-7 h-7 ${team.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <span className="text-white text-xs font-bold">{team.logo.substring(0, 2)}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{team.club}</span>
                    </div>
                  </td>

                  <td className="py-3 text-center text-sm text-gray-700">{team.pl}</td>
                  <td className="py-3 text-center text-sm text-gray-700">{team.w}</td>
                  <td className="py-3 text-center text-sm text-gray-700">{team.d}</td>
                  <td className="py-3 text-center text-sm text-gray-700">{team.l}</td>
                  <td className="py-3 text-center text-sm text-gray-700">{team.gf}</td>
                  <td className="py-3 text-center text-sm text-gray-700">{team.ga}</td>
                  <td className="py-3 text-center text-sm font-medium text-gray-900">
                    {team.gd > 0 ? `+${team.gd}` : team.gd}
                  </td>
                  <td className="py-3 text-center text-sm font-bold text-gray-900">{team.pts}</td>

                  <td className="py-3 text-center">
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
                  </td>

                  <td className="py-3 text-center">
                    <div className={`w-8 h-8 ${team.nextColor} rounded-full flex items-center justify-center mx-auto`}>
                      <span className="text-white text-xs font-bold">{team.next.substring(0, 2)}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
    <Footer />
    </>
  );
};

export default App;