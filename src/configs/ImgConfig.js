require('dotenv').config()

const axiosInstance = 
  {baseURL: process.env.REACT_APP_PUBLIC_PATH || 'http://localhost:8000/upload'}
// axiosInstance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE'
export default axiosInstance