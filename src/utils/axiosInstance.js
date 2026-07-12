import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://url-shortner-backend-1-7ems.onrender.com',
    timeout: 10000,
    withCredentials: true,

});

export default axiosInstance;