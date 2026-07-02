
import axiosInstance from "../utils/axiosInstance.js"

export const loginUser = async (email, password) => {

    const { data } = await axiosInstance.post("/api/auth/login", { email, password })
    return data

}

export const registerUser = async (name, email, password) => {

    const { data } = await axiosInstance.post("/api/auth/register", { name, email, password })
    return data

}

export const logoutUser = async () => {

    await axiosInstance.post("/api/auth/logout")

}

export const getCurrentUser = async () => {
    const { data } = await axiosInstance.get("/api/auth/me")
    return data
}

export const getAllUser = async () => {

    const { data } = await axiosInstance.get("/api/user/url")
    console.log(data, "axios data user api 32")
    console.log(data, "axios data user api 32 (FULL RESPONSE)")
    return data
}

export const deleteUserUrl = async (id) => {
    const { data } = await axiosInstance.delete(`/api/user/url/${id}`)
    return data
}
