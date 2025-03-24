const API_KEY = 'test'; // TODO : Safeguard later in enviroment variables
const BASE_URL = 'https://content.guardianapis.com';
import axios from 'axios';

type TFetchGuardianNewsForSearchParams = {
  q?: string;
  section?: string
}
export const fetchGuardianNewsForSearch = async (params: TFetchGuardianNewsForSearchParams) => {
  return axios.get(`${BASE_URL}//search`, {
    params: {
      params,
      ['api-key']: API_KEY,
      ['show-fields']: 'thumbnail'
    },
  });
};
