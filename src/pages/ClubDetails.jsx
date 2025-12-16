import React from 'react';
import { Calendar, MapPin, ChevronRight, ArrowLeft } from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const App = () => {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-48 bg-gradient-to-r from-blue-800 via-blue-700 to-cyan-600">
        <button className="absolute top-6 left-6 z-20 w-10 h-10 bg-blue-900/40 hover:bg-blue-900/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="relative z-10 flex items-center h-full px-8">
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

      <div className="max-w-7xl mx-auto px-6 py-6">
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
                <button className="text-blue-600 text-sm font-semibold flex items-center gap-1 hover:text-blue-700">
                  See all <ChevronRight className="w-4 h-4" />
                </button>
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
                <button className="text-blue-600 text-sm font-semibold flex items-center gap-1 hover:text-blue-700">
                  See all <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-4">Manager</h3>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gray-400 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-lg">Erik ten Hag</div>
                    <div className="text-sm text-gray-600">Netherlands</div>
                    <div className="text-sm text-gray-500">52 years • Manager</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-4">Current Squad</h3>
                <div className="flex gap-4">
                  {[
                    { pos: 'MR', name: 'Rashford', num: '10' },
                    { pos: 'BF', name: 'Fernandes', num: '8' },
                    { pos: 'CA', name: 'Casemiro', num: '18' },
                    { pos: 'LM', name: 'Martinez', num: '6' },
                    { pos: 'AO', name: 'Onana', num: '24' }
                  ].map((player, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-gray-900 mb-2">
                        {player.pos}
                      </div>
                      <div className="text-xs text-gray-600 mb-1">{player.num}</div>
                      <div className="text-sm text-gray-900 font-medium">{player.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Club Legends */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-xl font-semibold text-gray-900">Club Legends</h2>
                <button className="text-blue-600 text-sm font-semibold flex items-center gap-1 hover:text-blue-700">
                  See all <ChevronRight className="w-4 h-4" />
                </button>
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
                <ChevronRight className="w-5 h-5 text-gray-400" />
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

export default App;