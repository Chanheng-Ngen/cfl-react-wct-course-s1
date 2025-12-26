import React from 'react';
import { ArrowLeft, Camera } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { fetchTeamDetails } from '../store/slices/footballSlice';

const CoachPlayers = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { teamDetails, teamDetailsLoading } = useSelector((state) => state.football);
  
  const teamData = teamDetails[id];
  const isLoading = teamDetailsLoading[id];
  
  useEffect(() => {
    // Fetch team details if not cached or stale (> 5 minutes)
    const isCached = teamData?.lastFetched;
    const isStale = isCached && (new Date() - new Date(teamData.lastFetched)) > 5 * 60 * 1000;
    
    if (!isCached || isStale) {
      dispatch(fetchTeamDetails(id));
    }
  }, [dispatch, id, teamData]);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 pb-8">

        <div className="container mx-auto px-4">
          <ol className="flex items-center gap-2 text-sm text-gray-600 py-6">
            <li className="cursor-pointer text-blue-500 underline"><Link to={`/club/${id}`}>Club</Link></li>
            <li>/</li>
            <li>Coach & Players</li>
          </ol>
          <div className="mb-8">
            <h2 className="text-sm font-semibold text-gray-700 mb-4">Manager</h2>
            {isLoading ? (
              <p className="text-gray-500">Loading manager info...</p>
            ) : teamData?.manager ? (
              <div className="bg-blue-50 rounded-xl p-4 inline-block">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gray-400 rounded-full overflow-hidden">
                    <img src={teamData.manager.image} alt={teamData.manager.name} className="w-16 h-16 rounded-full mb-2 object-cover shadow" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-base">{teamData.manager.name}</div>
                    <div className="text-sm text-gray-600">{teamData.manager.country}</div>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-gray-500">No manager information available</p>
            )}
          </div>
          <div>
            <h2 className="text-sm font-semibold text-gray-700 mb-4">Current Squad</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {isLoading ? (
                <p className="text-gray-500">Loading players...</p>
              ) : teamData?.players && teamData.players.length > 0 ? (
                teamData.players.map((player, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-3">
                      <img src={player.image} alt={player.name} className="w-16 h-16 rounded-full mb-2 object-cover shadow" />
                      <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 rounded px-1.5 py-0.5 shadow-sm">
                        <span className="text-xs font-semibold text-gray-700">{player.number}</span>
                      </div>
                    </div>
                    <div className="text-center mt-2">
                      <div className="text-sm font-semibold text-gray-900 mb-0.5">{player.name}</div>
                      <div className="text-xs text-gray-600 mb-0.5">{player.position}</div>
                    </div>
                  </div>
                </div>
              ))
              ) : (
                <p className="text-gray-500">No players available</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoachPlayers;