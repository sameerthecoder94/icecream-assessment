import axios from 'axios';
import config from './config';

const url = config.baseURL;

const axiosBase = axios.create({
  baseURL: url,
  headers: {
    Authorization: 'Bearer ' + config.bearerAuthroizaion,
    'Access-Control-Allow-Origin': '*',
  },
});

export default axiosBase;
