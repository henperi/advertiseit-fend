import axios from 'axios';
import { appConstants } from '../constants';

const env = process.env.NODE_ENV || 'development';

const httpService = axios.create({
  baseURL: appConstants[env].apiUrl,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export const setAuthHeader = (token, header = 'authorization') => {
  if (token) {
    localStorage.setItem('authToken', token);
    httpService.defaults.headers.common[header] = token;
  }
};

export default httpService;
