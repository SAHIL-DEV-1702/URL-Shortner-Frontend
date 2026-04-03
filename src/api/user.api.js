
import axiosInstance from "../utils/axiosInstance"

export const loginUser = async (email, password) => {

    const { data } = await axiosInstance.post("/api/auth/login", { email, password })
    return data

}

export const registerUser = async (name, email, password) => {

    const { data } = await axiosInstance.post("/api/auth/register", { name, email, password })
    return data

}

export const logoutUser = async () => {

    await axiosInstance.get("/api/auth/logout")

}

export const getCurrentUser = async () => {
    const { data } = await axiosInstance.get("/api/auth/me")
    return data
}

export const getAllUser = async () => {

    const { data } = await axiosInstance.get("/api/user/url")
    console.log(data.urls, "axios data")
    return data.urls

}