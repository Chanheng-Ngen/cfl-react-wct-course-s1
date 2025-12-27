import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router';

const PlayerStats = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const topScorers = [
    { rank: 1, name: "Keo Sokpheng", team: "Preah Khan Reach F", goals: 18, avatar: "KS", color: "bg-red-500" },
    { rank: 2, name: "Lim Pisoth", team: "Angkor Tiger FC", goals: 15, avatar: "LP", color: "bg-red-500" },
    { rank: 3, name: "Sieng Chanthea", team: "Phnom Penh Crown Ft", goals: 12, avatar: "SC", color: "bg-red-500" },
    { rank: 4, name: "Yudai Ogawa", team: "Angkor Tiger FC", goals: 11, avatar: "YO", color: "bg-red-500" },
    { rank: 5, name: "Chanrasmey Hok", team: "Boeung Ket Fc", goals: 9, avatar: "CH", color: "bg-red-500" },
    { rank: 6, name: "Prak Mony Udom", team: "NagaWorld FC", goals: 8, avatar: "PM", color: "bg-red-500" }
  ];

  const assists = [
    { rank: 1, name: "Keo Sokpheng", team: "Preah Khan Reach F", assists: 12, avatar: "KS", color: "bg-red-500" },
    { rank: 2, name: "Prak Mony Udom", team: "NagaWorld FC", assists: 10, avatar: "PM", color: "bg-red-500" },
    { rank: 3, name: "Yudai Ogawa", team: "Angkor Tiger FC", assists: 9, avatar: "YO", color: "bg-red-500" },
    { rank: 4, name: "Chanrasmey Hok", team: "Boeung Ket Fc", assists: 8, avatar: "CH", color: "bg-red-500" },
    { rank: 5, name: "Sieng Chanthea", team: "Phnom Penh Crown Ft", assists: 7, avatar: "SC", color: "bg-red-500" },
    { rank: 6, name: "Lim Pisoth", team: "Angkor Tiger FC", assists: 6, avatar: "LP", color: "bg-red-500" }
  ];

  const totalPasses = [
    { rank: 1, name: "Preah Khan Reach Svay Rieng FC", passes: 4827, avatar: "PKR", color: "bg-red-500" },
    { rank: 2, name: "Angkor Tiger FC", passes: 4721, avatar: "AT", color: "bg-red-500" },
    { rank: 3, name: "Phnom Penh Crown FC", passes: 4589, avatar: "PPC", color: "bg-red-500" },
    { rank: 4, name: "NagaWorld FC", passes: 4386, avatar: "NW", color: "bg-red-500" },
    { rank: 5, name: "Boeung Ket FC", passes: 4208, avatar: "BK", color: "bg-red-500" },
    { rank: 6, name: "Visakha FC", passes: 4106, avatar: "VS", color: "bg-red-500" }
  ];

  const cleanSheets = [
    { rank: 1, name: "Sou Yaty", team: "Preah Khan Reach F", sheets: 7, avatar: "SY", color: "bg-red-500" },
    { rank: 2, name: "Vireak Dara", team: "Phnom Penh Crown Ft", sheets: 5, avatar: "VD", color: "bg-red-500" },
    { rank: 3, name: "Keo Soksela", team: "Angkor Tiger FC", sheets: 5, avatar: "KS", color: "bg-red-500" },
    { rank: 4, name: "Lim Sereyroth", team: "NagaWorld FC", sheets: 5, avatar: "LS", color: "bg-red-500" },
    { rank: 5, name: "Hul Kimhuy", team: "Boeung Ket Fc", sheets: 4, avatar: "HK", color: "bg-red-500" },
    { rank: 6, name: "Rath Pollin", team: "Visakha FC", sheets: 4, avatar: "RP", color: "bg-red-500" }
  ];

  const StatCard = ({ title, data, valueKey, showArrow = true }) => (
    <div className="bg-white rounded-xl shadow-sm p-6">
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
    <>
    <Header />
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 p-8">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Player Statistics 2024/25</h1>
          <p className="text-gray-600">Cambodian Football League</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <StatCard title="Top Scorer" data={topScorers} valueKey="goals" />
          <StatCard title="Assists" data={assists} valueKey="assists" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <StatCard title="Total Passes" data={totalPasses} valueKey="passes" />
          <StatCard title="Clean Sheets" data={cleanSheets} valueKey="sheets" />
        </div>

        <div className="flex items-center justify-center gap-2">
          <button 
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <Link to = "/stat-two">
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
          </Link>
          <button 
            onClick={() => setCurrentPage(Math.min(3, currentPage + 1))}
            className="w-10 h-10 rounded-full bg-blue-500 shadow-sm flex items-center justify-center hover:bg-blue-600 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default PlayerStats;