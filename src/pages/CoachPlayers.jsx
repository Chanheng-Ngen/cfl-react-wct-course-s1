import React from 'react';
import { ArrowLeft, Camera } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const App = () => {
  const currentSquad = [
    { num: '10', name: 'Marcus Rashford', pos: 'Forward', country: 'England', hasPhoto: true },
    { num: '8', name: 'Bruno Fernandes', pos: 'Midfielder', country: 'Portugal', hasPhoto: false, initials: 'BF' },
    { num: '18', name: 'Casemiro', pos: 'Midfielder', country: 'Brazil', hasPhoto: false, initials: 'CA' },
    { num: '6', name: 'Lisandro Martinez', pos: 'Defender', country: 'Argentina', hasPhoto: false, initials: 'LM' },
    { num: '24', name: 'Andre Onana', pos: 'Goalkeeper', country: 'Cameroon', hasPhoto: false, initials: 'AO' },
    { num: '19', name: 'Raphael Varane', pos: 'Defender', country: 'France', hasPhoto: false, initials: 'RV' },
    { num: '20', name: 'Diogo Dalot', pos: 'Defender', country: 'Portugal', hasPhoto: false, initials: 'DD' },
    { num: '14', name: 'Christian Eriksen', pos: 'Midfielder', country: 'Denmark', hasPhoto: false, initials: 'CE' },
    { num: '21', name: 'Antony', pos: 'Forward', country: 'Brazil', hasPhoto: false, initials: 'AN' },
    { num: '11', name: 'Rasmus Hojlund', pos: 'Forward', country: 'Denmark', hasPhoto: false, initials: 'RH' },
    { num: '25', name: 'Jadon Sancho', pos: 'Forward', country: 'England', hasPhoto: false, initials: 'JS' },
    { num: '17', name: 'Fred', pos: 'Midfielder', country: 'Brazil', hasPhoto: false, initials: 'FR' },
    { num: '29', name: 'Aaron Wan-Bissaka', pos: 'Defender', country: 'England', hasPhoto: false, initials: 'AW' },
    { num: '5', name: 'Harry Maguire', pos: 'Defender', country: 'England', hasPhoto: false, initials: 'HM' },
    { num: '39', name: 'Scott McTominay', pos: 'Midfielder', country: 'Scotland', hasPhoto: false, initials: 'SM' }
  ];

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-50 pb-8">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <button className="w-8 h-8 flex items-center justify-center">
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-6">
        {/* Manager Section */}
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-gray-700 mb-4">Manager</h2>
          <div className="bg-blue-50 rounded-xl p-4 inline-block">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gray-400 rounded-full overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-600"></div>
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-base">Erik ten Hag</div>
                <div className="text-sm text-gray-600">Netherlands</div>
                <div className="inline-block bg-gray-800 text-white text-xs px-2 py-0.5 rounded mt-1">
                  Manager
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Squad */}
        <div>
          <h2 className="text-sm font-semibold text-gray-700 mb-4">Current Squad</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {currentSquad.map((player, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center">
                  {/* Player Avatar */}
                  <div className="relative mb-3">
                    {player.hasPhoto ? (
                      <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center relative overflow-hidden">
                        <Camera className="w-6 h-6 text-yellow-600" />
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-500"></div>
                        <span className="relative text-xs font-bold text-yellow-800">photo</span>
                      </div>
                    ) : (
                      <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold text-gray-900">{player.initials}</span>
                      </div>
                    )}
                    {/* Jersey Number */}
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 rounded px-1.5 py-0.5 shadow-sm">
                      <span className="text-xs font-semibold text-gray-700">{player.num}</span>
                    </div>
                  </div>
                  
                  {/* Player Info */}
                  <div className="text-center">
                    <div className="text-sm font-semibold text-gray-900 mb-0.5">{player.name}</div>
                    <div className="text-xs text-gray-600 mb-0.5">{player.pos}</div>
                    <div className="text-xs text-gray-500">{player.country}</div>
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

export default App;