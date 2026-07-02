
import axiosInstance from "../utils/axiosInstance.js"

export const createShortUrl = async (body) => {
    const { data } = await axiosInstance.post("/api/create", body)
    return data
}