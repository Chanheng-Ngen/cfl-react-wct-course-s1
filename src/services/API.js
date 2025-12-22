import axios from 'axios';
const API_KEY = import.meta.env.VITE_FOOTBALL_API_KEY;  
const BASE_URL = 'https://apiv2.allsportsapi.com/football/';

export const footballApi = {
  getFixtures: async (fromDate, toDate) => {
    try {
      const url = `${BASE_URL}?met=Fixtures&APIkey=${API_KEY}&from=${fromDate}&to=${toDate}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Fixture Error:', error);
      console.error('Error details:', error.response?.data);
      throw error;
    }
  },
};