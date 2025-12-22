import React from 'react';
import { Trophy, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ClubsShowcase = () => {
  const clubs = [
    { 
      name: 'Preah Khan Reach Svay Rieng FC', 
      abbr: 'PKR', 
      color: 'bg-blue-600',
      est: '2015',
      stadium: 'Svay Rieng Stadium',
      capacity: '5,000',
      championships: 3
    },
    { 
      name: 'Angkor Tiger FC', 
      abbr: 'ATF', 
      color: 'bg-orange-600',
      est: '2009',
      stadium: 'RSN Stadium',
      capacity: '5,000',
      championships: 2
    },
    { 
      name: 'Phnom Penh Crown FC', 
      abbr: 'PPC', 
      color: 'bg-red-600',
      est: '2001',
      stadium: 'Olympic Stadium',
      capacity: '50,000',
      championships: 4
    },
    { 
      name: 'Boeung Ket FC', 
      abbr: 'BKF', 
      color: 'bg-purple-600',
      est: '2002',
      stadium: 'Army Stadium',
      capacity: '5,000',
      championships: 1
    },
    { 
      name: 'NagaWorld FC', 
      abbr: 'NWF', 
      color: 'bg-yellow-600',
      est: '2009',
      stadium: 'Olympic Stadium',
      capacity: '50,000',
      championships: 0
    },
    { 
      name: 'Royal Cambodian Armed Forces FC', 
      abbr: 'RAF', 
      color: 'bg-green-700',
      est: '2000',
      stadium: 'Army Stadium',
      capacity: '5,000',
      championships: 1
    },
    { 
      name: 'Visakha FC', 
      abbr: 'VIS', 
      color: 'bg-red-700',
      est: '2016',
      stadium: 'Prince Stadium',
      capacity: '5,000',
      championships: 2
    },
    { 
      name: 'Kirivong Sok Sen Chey FC', 
      abbr: 'KSC', 
      color: 'bg-blue-700',
      est: '2007',
      stadium: 'Takhmao Stadium',
      capacity: '3,000',
      championships: 0
    },
    { 
      name: 'MDI Kampong Dewa FC', 
      abbr: 'MDI', 
      color: 'bg-cyan-600',
      est: '2019',
      stadium: 'Prince Stadium',
      capacity: '5,000',
      championships: 0
    },
    { 
      name: 'Asia Pacific FC', 
      abbr: 'APF', 
      color: 'bg-teal-600',
      est: '2018',
      stadium: 'Kampong Speu Stadium',
      capacity: '3,000',
      championships: 0
    },
    { 
      name: 'Soltilo Angkor FC', 
      abbr: 'SAF', 
      color: 'bg-indigo-600',
      est: '2017',
      stadium: 'Siem Reap Stadium',
      capacity: '10,000',
      championships: 0
    }
  ];

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-50 py-16 px-4 ">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-black text-gray-900 mb-4">Clubs</h1>
          <div className="flex items-center gap-4">
            <select className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-900 font-medium cursor-pointer hover:border-gray-400 transition-colors">
              <option>2025/26</option>
            </select>
          </div>
          <h2 className="text-2xl font-bold text-gray-700 mt-6">2025/26 Season Clubs</h2>
        </div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {clubs.map((club, index) => (
            <Link to= "/club-details" >
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 overflow-hidden cursor-pointer border border-gray-100"
            >
              {/* Club Header */}
              <div className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className={`w-20 h-20 ${club.color} rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg mb-4 group-hover:scale-110 transition-transform`}>
                    {club.abbr}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2">{club.name}</h3>
                  <div className="flex items-center gap-1.5 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="font-semibold">{club.est}</span>
                  </div>
                </div>
              </div>

              {/* Club Details */}
              <div className="px-6 pb-6 space-y-4">
                {/* Championships */}
                <div className="flex items-center justify-center gap-3 border-t border-gray-100 pt-4">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm font-bold text-gray-700">Championships</span>
                  <span className={`ml-auto px-3 py-1 rounded-full text-sm font-bold ${club.championships > 0 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                    {club.championships}
                  </span>
                </div>

                {/* Stadium Info */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-sm font-bold text-gray-900">{club.stadium}</div>
                      <div className="text-xs text-gray-600 mt-1">
                        Capacity: {club.capacity}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ClubsShowcase;