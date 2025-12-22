import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router';

const PlayerStats = () => {
  const [currentPage, setCurrentPage] = useState(2);

  const minutesPlayed = [
    { rank: 1, name: "Kouch Sokumpheak", team: "Visakha Fc", minutes: 900, avatar: "KS", color: "bg-orange-500" },
    { rank: 2, name: "Seyha Choun", team: "Royal Armed Forces Ft", minutes: 900, avatar: "SC", color: "bg-orange-500" },
    { rank: 3, name: "Chanrasmey Hok", team: "Boeung Ket Fc", minutes: 900, avatar: "CH", color: "bg-orange-500" },
    { rank: 4, name: "Yudai Ogawa", team: "Angkor Tiger FC", minutes: 810, avatar: "YO", color: "bg-orange-500" },
    { rank: 5, name: "Prak Mony Udom", team: "NagaWorld FC", minutes: 810, avatar: "PM", color: "bg-orange-500" },
    { rank: 6, name: "Keo Sokpheng", team: "Preah Khan Reach F", minutes: 720, avatar: "KS", color: "bg-orange-500" }
  ];

  const yellowCards = [
    { rank: 1, name: "Seyha Choun", team: "Royal Armed Forces Ft", cards: 8, avatar: "SC", color: "bg-orange-500" },
    { rank: 2, name: "Kouch Sokumpheak", team: "Visakha Fc", cards: 7, avatar: "KS", color: "bg-orange-500" },
    { rank: 3, name: "Tiny Uy", team: "Boeung Ket Fc", cards: 6, avatar: "TU", color: "bg-orange-500" },
    { rank: 4, name: "Reung Bunheng", team: "Kirivong FC", cards: 6, avatar: "RB", color: "bg-orange-500" },
    { rank: 5, name: "Sokriy Geum", team: "Asia Pacific Ft", cards: 5, avatar: "SG", color: "bg-orange-500" },
    { rank: 6, name: "Virak Sarath", team: "Soltilo Angkor FC", cards: 5, avatar: "VS", color: "bg-orange-500" }
  ];

  const redCards = [
    { rank: 1, name: "Tiny Uy", team: "Boeung Ket Fc", cards: 2, avatar: "TU", color: "bg-orange-500" },
    { rank: 2, name: "Seyha Choun", team: "Royal Armed Forces Ft", cards: 1, avatar: "SC", color: "bg-orange-500" },
    { rank: 3, name: "Reung Bunheng", team: "Kirivong FC", cards: 1, avatar: "RB", color: "bg-orange-500" },
    { rank: 4, name: "Sokriy Geum", team: "Asia Pacific Ft", cards: 1, avatar: "SG", color: "bg-orange-500" }
  ];

  const blocks = [
    { rank: 1, name: "Sou Yaty", team: "Preah Khan Reach F", blocks: 45, avatar: "SY", color: "bg-orange-500" },
    { rank: 2, name: "Vireak Dara", team: "Phnom Penh Crown Ft", blocks: 38, avatar: "VD", color: "bg-orange-500" },
    { rank: 3, name: "Keo Soksela", team: "Angkor Tiger FC", blocks: 36, avatar: "KS", color: "bg-orange-500" },
    { rank: 4, name: "Lim Sereyroth", team: "NagaWorld FC", blocks: 33, avatar: "LS", color: "bg-orange-500" },
    { rank: 5, name: "Hul Kimhuy", team: "Boeung Ket Fc", blocks: 31, avatar: "HK", color: "bg-orange-500" },
    { rank: 6, name: "Rath Pollin", team: "Visakha FC", blocks: 29, avatar: "RP", color: "bg-orange-500" }
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
          <StatCard title="Minutes Played" data={minutesPlayed} valueKey="minutes" />
          <StatCard title="Yellow Cards" data={yellowCards} valueKey="cards" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <StatCard title="Red Cards" data={redCards} valueKey="cards" />
          <StatCard title="Blocks" data={blocks} valueKey="blocks" />
        </div>

        <div className="flex items-center justify-center gap-2">
          <button 
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="w-10 h-10 rounded-full bg-blue-500 shadow-sm flex items-center justify-center hover:bg-blue-600 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          <Link to = "/stat-three">
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