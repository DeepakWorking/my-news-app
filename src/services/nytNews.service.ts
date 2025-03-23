const API_KEY = 'yMGkWoxMeRbpBxSR7tdzaVcc0IMgnBAm'; // TODO : Safeguard later in enviroment variables
const BASE_URL = 'https://api.nytimes.com';
import axios from 'axios';

export const fetchNytNewsForSearch = async (searchQuery: string) => {
  return axios.get(`${BASE_URL}/svc/search/v2/articlesearch.json`, {
    params: {
      q: searchQuery,
      ['api-key']: API_KEY,
    },
  });
};
