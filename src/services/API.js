import axios from 'axios';
const API_KEY = import.meta.env.VITE_FOOTBALL_API_KEY;
const BASE_URL = 'https://apiv2.allsportsapi.com/football/';

export const footballApi = {
  getFixtures: async (fromDate, toDate, leagueId) => {
    try {
      const url = `${BASE_URL}?met=Fixtures&APIkey=${API_KEY}&from=${fromDate}&to=${toDate}&leagueId=${leagueId}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Fixture Error:', error);
      console.error('Error details:', error.response?.data);
      throw error;
    }
  },
  getStandings: async (leagueId) => {
    try {
      const url = `${BASE_URL}?met=Standings&leagueId=${leagueId}&APIkey=${API_KEY}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Standings Error:', error);
      console.error('Error details:', error.response?.data);
      throw error;
    }
  },
  getTopScorers: async (leagueId) => {
    try {
      const url = `${BASE_URL}?met=Topscorers&leagueId=${leagueId}&APIkey=${API_KEY}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Top Scorers Error:', error);
      console.error('Error details:', error.response?.data);
      throw error;
    }
  },
  getTeams: async (teamId) => {
    try {
      const url = `${BASE_URL}?met=Teams&teamId=${teamId}&APIkey=${API_KEY}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Teams Error:', error);
      console.error('Error details:', error.response?.data);
      throw error;
    }
  }
};