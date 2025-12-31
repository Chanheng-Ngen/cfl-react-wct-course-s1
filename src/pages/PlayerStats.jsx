import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { topScorersStats, assists, minutesPlayed, yellowCards, tackles } from '../services/mockData';

const PlayerStats = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const StatCard = ({ title, data, valueKey }) => (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>

      <div className="space-y-3">
        {data.map(item => (
          <div key={item.rank} className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-gray-200 flex items-center justify-center font-semibold">
                {item.rank}
              </div>
              <div className={`w-10 h-10 rounded-full ${item.color} text-white flex items-center justify-center`}>
                {item.avatar}
              </div>
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">{item.team}</p>
              </div>
            </div>
            <div className="font-semibold text-lg">
              {item[valueKey]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  const renderPage = () => {
    if (currentPage === 1) {
      return (
        <>
          <StatCard title="Top Scorers" data={topScorersStats} valueKey="goals" />
          <StatCard title="Assists" data={assists} valueKey="assists" />
        </>
      );
    }

    if (currentPage === 2) {
      return (
        <>
          <StatCard title="Minutes Played" data={minutesPlayed} valueKey="minutes" />
          <StatCard title="Yellow Cards" data={yellowCards} valueKey="cards" />
        </>
      );
    }

    if (currentPage === 3) {
      return <StatCard title="Tackles" data={tackles} valueKey="tackles" />;
    }
  };

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className='bg-gradient-to-r from-slate-200 to-slate-900 py-12 mb-10 shadow-md'>
            <div className="container mx-auto px-4">
              <h1 className="text-2xl font-bold text-black">
                Player Statistics 2024/25
              </h1>
            </div>
          </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            {renderPage()}
          </div>

          {/* Pagination */}
          <div className="flex justify-end items-center gap-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center"
            >
              <ChevronLeft className="text-white" />
            </button>

            {[1, 2, 3].map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-full ${currentPage === page
                    ? 'bg-blue-500 text-white'
                    : 'bg-white'
                  }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(p => Math.min(3, p + 1))}
              className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center"
            >
              <ChevronRight className="text-white" />
            </button>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default PlayerStats;
