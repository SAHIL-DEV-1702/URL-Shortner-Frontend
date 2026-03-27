import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000', // Change to your backend URL
    timeout: 10000,
    withCredentials: true,
    
});

export default axiosInstance;