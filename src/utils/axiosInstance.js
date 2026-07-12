import axios from 'axios'

export const SHORT_URL_BASE_URL = 'https://url-shortner-backend-1-7ems.onrender.com';

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

    if (/^https?:\/\//i.test(rawValue)) {
        return rawValue
    }

    return `${resolveShortUrlBase()}/${rawValue.replace(/^\/+/, '')}`
}

const axiosInstance = axios.create({
    baseURL: SHORT_URL_BASE_URL,
    timeout: 10000,
    withCredentials: true,
});

export default axiosInstance;