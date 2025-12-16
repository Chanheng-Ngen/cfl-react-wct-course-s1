import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const PlayerStats = () => {
  const [currentPage, setCurrentPage] = useState(3);

  const tackles = [
    { rank: 1, name: "Chanrasmey Hok", team: "Boeung Ket Fc", tackles: 52, avatar: "CH", color: "bg-orange-500" },
    { rank: 2, name: "Seyha Choun", team: "Royal Armed Forces Ft", tackles: 48, avatar: "SC", color: "bg-orange-500" },
    { rank: 3, name: "Kouch Sokumpheak", team: "Visakha Fc", tackles: 45, avatar: "KS", color: "bg-orange-500" },
    { rank: 4, name: "Tiny Uy", team: "Boeung Ket Fc", tackles: 42, avatar: "TU", color: "bg-orange-500" },
    { rank: 5, name: "Reung Bunheng", team: "Kirivong FC", tackles: 39, avatar: "RB", color: "bg-orange-500" },
    { rank: 6, name: "Prak Mony Udom", team: "NagaWorld FC", tackles: 37, avatar: "PM", color: "bg-orange-500" }
  ];

  const StatCard = ({ title, data, valueKey, showArrow = true }) => (
    <div className="bg-white rounded-xl shadow-sm p-6 max-w-md">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {showArrow && (
          <button className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-600 transition-colors">
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        )}
      </div>
      <div className="space-y-3">
        {data.map((item) => (
          <div key={item.rank} className="flex items-center justify-between">
            <div className="flex items-center gap-3 flex-1">
              <div className={`w-8 h-8 rounded ${item.rank === 1 ? 'bg-yellow-400' : item.rank === 2 ? 'bg-gray-300' : item.rank === 3 ? 'bg-orange-400' : 'bg-gray-200'} flex items-center justify-center text-sm font-semibold text-gray-700`}>
                {item.rank}
              </div>
              <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center text-white font-semibold text-sm`}>
                {item.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-gray-900 truncate">{item.name}</div>
                {item.team && (
                  <div className="text-sm text-gray-500 truncate flex items-center gap-1">
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    {item.team}
                  </div>
                )}
              </div>
            </div>
            <div className="text-lg font-semibold text-gray-900 ml-4">
              {item[valueKey]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Player Statistics 2024/25</h1>
          <p className="text-gray-600">Cambodian Football League</p>
        </div>

        <div className="mb-8">
          <StatCard title="Tackles" data={tackles} valueKey="tackles" />
        </div>

        <div className="flex items-center justify-center gap-2">
          <button 
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="w-10 h-10 rounded-full bg-blue-500 shadow-sm flex items-center justify-center hover:bg-blue-600 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          
          <div className="flex gap-2">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  currentPage === page
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button 
            onClick={() => setCurrentPage(Math.min(3, currentPage + 1))}
            className="w-10 h-10 rounded-full bg-gray-200 shadow-sm flex items-center justify-center hover:bg-gray-300 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;