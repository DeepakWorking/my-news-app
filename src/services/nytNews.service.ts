const API_KEY = 'yMGkWoxMeRbpBxSR7tdzaVcc0IMgnBAm'; // TODO : Safeguard later in enviroment variables
const BASE_URL = 'https://api.nytimes.com';
import axios from 'axios';

type TFetchNytNewsParams = {
  q?: string,
  fq?: string
}
export const fetchNytNewsForSearch = async (params: TFetchNytNewsParams) => {
  return axios.get(`${BASE_URL}/svc/search/v2/articlesearch.json`, {
    params: {
      ...params,
      ['api-key']: API_KEY,
    },
  });
};
