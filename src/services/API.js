import axios from 'axios';

const API_KEY = '435154783eb0fec79e8f27cbed0ffc73754892a6fac53af14b4b99e52842292f';
const BASE_URL = 'https://apiv2.allsportsapi.com/football/';
export const footballApi = {
  getFixtures: async (fromDate, toDate) => {
    try {
      // Build URL exactly like the example
      const url = `${BASE_URL}?met=Fixtures&APIkey=${API_KEY}&from=${fromDate}&to=${toDate}`;
      
      console.log('🔍 Testing API URL:', url);
      
      const response = await axios.get(url);
      
      console.log('✅ API Response:', response.data);
      console.log('📊 Number of matches:', response.data?.result?.length || 0);
      
      return response.data;
    } catch (error) {
      console.error('❌ API Error:', error);
      console.error('Error details:', error.response?.data);
      throw error;
    }
  },

  getStandings: async (leagueId) => {
    try {
      // Build URL exactly like the example format
      const url = `${BASE_URL}?met=Standings&APIkey=${API_KEY}&league_id=${leagueId}`;
      
      console.log('🔍 Testing Standings URL:', url);
      
      const response = await axios.get(url);
      
      console.log('✅ Standings Response:', response.data);
      
      return response.data;
    } catch (error) {
      console.error('❌ Standings Error:', error);
      throw error;
    }
  }
};

// Test function using the exact URL parameters from the example
const testAPI = async () => {
  try {
    // Using the EXACT date from the provided URL: 2021-05-18
    const fromDate = '2021-05-18';
    const toDate = '2021-05-18';
    
    const url = `${BASE_URL}?met=Fixtures&APIkey=${API_KEY}&from=${fromDate}&to=${toDate}`;
    
    console.log('🧪 Testing URL (exact from example):', url);
    console.log('📅 Date:', fromDate);
    console.log('----------------------------');
    
    const response = await fetch(url);
    const data = await response.json();
    
    console.log("First match");
    console.log('API Response:', data.result[0]);
    console.log('Number of matches:', data?.result?.length || 0);
    console.log('----------------------------');
    
    // Get FIRST match and show ALL properties
    if (data?.result?.[0]) {
      const firstMatch = data.result[0];
      console.log('🎯 FIRST MATCH - COMPLETE OBJECT:');
      console.log(JSON.stringify(firstMatch, null, 2));
      console.log('----------------------------');
      console.log('Property names:', Object.keys(firstMatch));
      console.log('----------------------------');
      console.log('Match Details:');
      console.log('- ID:', firstMatch.event_key);
      console.log('- Date:', firstMatch.event_date);
      console.log('- Time:', firstMatch.event_time);
      console.log('- League:', firstMatch.league_name);
      console.log('- Home:', firstMatch.event_home_team);
      console.log('- Away:', firstMatch.event_away_team);
      console.log('- Stadium:', firstMatch.event_stadium);
      console.log('- Home Logo:', firstMatch.home_team_logo);
      console.log('- Away Logo:', firstMatch.away_team_logo);
      console.log('----------------------------');
    } else {
      console.log('⚠️ No matches found for this date');
    }
    
    return data;
  } catch (error) {
    console.error('❌ Error:', error);
  }
};

// Run the test
console.log('\n🚀 Starting API Test with exact URL parameters...\n');
testAPI();