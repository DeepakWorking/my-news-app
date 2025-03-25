const BASE_URL = 'https://restcountries.com';
import axios from 'axios';

export const fetchCountries = async () => {
  return axios.get(`${BASE_URL}/v3.1/all`, {
    params: {
      fields: 'name,cca2,flags',
    },
  });
};
