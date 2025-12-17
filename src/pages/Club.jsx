import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer';
import { Link } from 'react-router';
import { Trophy, MapPin, Calendar } from 'lucide-react';

const ClubCard = ({ name, logo, established, championships, stadium, capacity }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    <div className="flex items-start gap-4 mb-4">
      <div className="w-16 h-16 bg-blue-700 rounded-lg flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
        {logo}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
          <Calendar className="w-4 h-4" />
          <span>Est. {established}</span>
        </div>
      </div>
    </div>
    
    <div className="flex items-center gap-2 mb-3">
      <Trophy className="w-5 h-5 text-yellow-500" />
      <span className="text-sm text-gray-700">Championships</span>
      <span className="ml-auto bg-blue-700 text-white text-sm font-semibold px-2 py-1 rounded">
        {championships}
      </span>
    </div>
    
    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
      <MapPin className="w-4 h-4 text-blue-700" />
      <span>{stadium}</span>
    </div>
    
    <div className="text-sm text-gray-500 mb-4">
      Capacity: {capacity.toLocaleString()}
    </div>
    <Link to ="/club-details">
    <button className="w-full text-blue-700 hover:text-blue-800 text-sm font-medium hover:underline text-left">
      View Club Details →
    </button>
    </Link>

  </div>
);

const App = () => {
  const clubs = [
    { name: "Manchester United", logo: "MU", established: 1878, championships: 10, stadium: "Old Trafford", capacity: 74879 },
    { name: "Liverpool FC", logo: "LIV", established: 1892, championships: 10, stadium: "Anfield", capacity: 53394 },
    { name: "Chelsea FC", logo: "CHE", established: 1905, championships: 7, stadium: "Stamford Bridge", capacity: 40341 },
    { name: "Arsenal FC", logo: "ARS", established: 1886, championships: 7, stadium: "Emirates Stadium", capacity: 60704 },
    { name: "Real Madrid", logo: "RM", established: 1902, championships: 10, stadium: "Santiago Bernabéu", capacity: 81044 },
    { name: "Barcelona FC", logo: "BAR", established: 1899, championships: 10, stadium: "Camp Nou", capacity: 99354 },
    { name: "Bayern Munich", logo: "BAY", established: 1900, championships: 10, stadium: "Allianz Arena", capacity: 75000 },
    { name: "Juventus FC", logo: "JUV", established: 1897, championships: 9, stadium: "Allianz Stadium", capacity: 41507 },
    { name: "AC Milan", logo: "MIL", established: 1899, championships: 8, stadium: "San Siro", capacity: 75923 },
    { name: "Inter Milan", logo: "INT", established: 1908, championships: 8, stadium: "San Siro", capacity: 75923 },
    { name: "Paris SG", logo: "PSG", established: 1970, championships: 6, stadium: "Parc des Princes", capacity: 47929 }
  ];

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">All Clubs</h1>
          <p className="text-gray-600">Explore all clubs in the Cambodia Football League</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-blue-700 mb-2">11</div>
            <div className="text-sm text-gray-600">Total Clubs</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-blue-700 mb-2">25</div>
            <div className="text-sm text-gray-600">Championships</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-blue-700 mb-2">18</div>
            <div className="text-sm text-gray-600">Club Legends</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-blue-700 mb-2">9</div>
            <div className="text-sm text-gray-600">Stadiums</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club, index) => (
            <ClubCard key={index} {...club} />
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default App;