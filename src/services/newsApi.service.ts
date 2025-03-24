const API_KEY = 'a61f0ab6c00f4b1881f3c4f5deec2295'; // TODO : Safeguard later in enviroment variables
// const SECONDARY_API_KEY = '7ac3f385a5674f07b213b04eb4cd68c1'
const BASE_URL = 'https://newsapi.org/v2';
import axios from 'axios';
import { TNewAPIParams } from 'types/newApi.types';

export const fetchNewsApiTopHeadlines = async (params: TNewAPIParams) => {
    return axios.get(`${BASE_URL}/top-headlines`, {
        params: {
            ...params,
            apiKey: API_KEY,
        },
    });
};
export const fetchNewsApiNews = async (params: TNewAPIParams) => {
    return axios.get(`${BASE_URL}/everything`, {
        params: {
            ...params,
            apiKey: API_KEY,
        },
    });
};
