import axios from 'axios'

export const SHORT_URL_BASE_URL = 'https://url-shortner-backend-1-7ems.onrender.com';

const getAuthToken = () => {
    try {
        return localStorage.getItem('accessToken') || '';
    } catch {
        return '';
    }
};

export const resolveShortUrlBase = () => {
    const configuredBase = import.meta.env.VITE_SHORT_URL_BASE_URL || import.meta.env.VITE_BACKEND_URL || SHORT_URL_BASE_URL

    if (configuredBase && configuredBase.trim()) {
        return configuredBase.trim().replace(/\/+$/, '')
    }

    if (typeof window !== 'undefined' && window.location?.origin) {
        return window.location.origin
    }

    return SHORT_URL_BASE_URL
}

export const formatShortUrl = (value) => {
    if (!value) return ''

    const rawValue = String(value).trim()

    if (!rawValue) return ''

    // strip accidental 'undefined/' prefixes produced by some backends
    const cleaned = rawValue.replace(/^undefined\/+/i, '')

    if (/^https?:\/\//i.test(rawValue)) {
        return rawValue
    }

    return `${resolveShortUrlBase()}/${cleaned.replace(/^\/+/, '')}`
}

const axiosInstance = axios.create({
    baseURL: resolveShortUrlBase(),
    timeout: 10000,
    withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
    const token = getAuthToken();
    if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default axiosInstance;