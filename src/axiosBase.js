import axios from 'axios';

const url = '';

const axiosBase = axios.create({
  baseURL: url,
});

export default axiosBase;
