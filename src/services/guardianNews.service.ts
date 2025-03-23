const API_KEY = 'test'; // TODO : Safeguard later in enviroment variables
const BASE_URL = 'https://content.guardianapis.com';
import axios from 'axios';

export const fetchGuardianNewsForSearch = async (searchQuery: string) => {
  return axios.get(`${BASE_URL}//search`, {
    params: {
      q: searchQuery,
      ['api-key']: API_KEY,
    },
  });
};
