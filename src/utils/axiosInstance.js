import axios from 'axios'

export const SHORT_URL_BASE_URL = 'https://url-shortner-backend-1-7ems.onrender.com';

const axiosInstance = axios.create({
    baseURL: SHORT_URL_BASE_URL,
    timeout: 70000,
    withCredentials: true,
});

export default axiosInstance;