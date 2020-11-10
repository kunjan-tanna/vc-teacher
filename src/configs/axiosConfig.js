import axios from 'axios';
require('dotenv').config();

const axiosInstance = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:8000/api/',
});

// axiosInstance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE'
export default axiosInstance;
