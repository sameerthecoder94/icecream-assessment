import axios from 'axios';
import config from './config';

const url = `${config.cors} ${config.baseURL}`;

const axiosBase = axios.create({
  baseURL: url,
  headers: {
    Authorization: `Bearer ${config.bearerAuthorization}`,
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

export default axiosBase;
