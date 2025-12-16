import React from 'react';
import { ArrowLeft, Trophy } from 'lucide-react';

const App = () => {
  const legends = [
    { name: 'Cristiano Ronaldo', pos: 'Forward', period: '2003-2009', country: 'Portugal', goals: 118, assists: 69, matches: 292, initials: 'CR' },
    { name: 'Wayne Rooney', pos: 'Forward', period: '2004-2017', country: 'England', goals: 253, assists: 145, matches: 559, initials: 'WR' },
    { name: 'Ryan Giggs', pos: 'Midfielder', period: '1990-2014', country: 'Wales', goals: 168, assists: 263, matches: 963, initials: 'RG' },
    { name: 'Paul Scholes', pos: 'Midfielder', period: '1993-2013', country: 'England', goals: 155, assists: 82, matches: 718, initials: 'PS' },
    { name: 'Eric Cantona', pos: 'Forward', period: '1992-1997', country: 'France', goals: 82, assists: 62, matches: 185, initials: 'EC' },
    { name: 'George Best', pos: 'Forward', period: '1963-1974', country: 'N. Ireland', goals: 179, assists: 111, matches: 470, initials: 'GB' },
    { name: 'Bobby Charlton', pos: 'Midfielder', period: '1956-1973', country: 'England', goals: 249, assists: 88, matches: 758, initials: 'BC' },
    { name: 'Roy Keane', pos: 'Midfielder', period: '1993-2005', country: 'Ireland', goals: 51, assists: 41, matches: 480, initials: 'RK' }
  ];

  const championships = ['2023', '2021', '2019', '2018', '2015', '2013', '2011', '2009', '2008', '2007'];

  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
        <button className="w-8 h-8 flex items-center justify-center mb-4">
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </button>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-red-700 rounded-lg flex items-center justify-center shadow">
            <span className="text-white text-sm font-bold">MU</span>
          </div>
          <h1 className="text-xl font-bold text-gray-900">Manchester United Legends</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-6">
        {/* All Legendary Players */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <h2 className="text-base font-semibold text-gray-900">All Legendary Players</h2>
            <span className="text-sm text-gray-500">({legends.length})</span>
          </div>

          <div className="space-y-3">
            {legends.map((legend, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">{legend.initials}</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 text-base">{legend.name}</div>
                      <div className="flex items-center gap-3 text-sm text-gray-600 mt-1">
                        <span>{legend.pos}</span>
                        <span>•</span>
                        <span>{legend.period}</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">{legend.country}</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end gap-1">
                    <div className="text-right">
                      <div className="text-xl font-bold text-gray-900">{legend.goals}</div>
                      <div className="text-xs text-gray-500">goals</div>
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
  );
};

export default App;