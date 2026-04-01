
import { useDispatch, useSelector } from 'react-redux'
import axiosInstance from '../utils/axiosInstance.js'
import { useState } from 'react'
import { loginUser } from '../api/user.api.js';
import { login } from '../store/slice/authSlice.js';
import { Navigate, useNavigate } from '@tanstack/react-router';



const LoginForm = ({ state }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {

        try {
            const data = await loginUser(email, password);

            dispatch(login(data.user))
            setLoading(true)
            navigate({ to: "/dashboard" })  // redirect kela
            console.log('login Sucess', "15,loginUser.jsx")
            await axiosInstance.post('/api/auth/login', {

                email,
                password
            })

        } catch (error) {
            console.log(error.message, "21 loginForm")
            console.log(error.response?.data)
            console.log(error.response?.status)
        }

    }

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const auth = useSelector((state) => state.auth)
    const [loading, setLoading] = useState(false)

    console.log(auth)

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)

    }



    return (
        <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-blue-100 to-purple-200">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-blue-100">
                <h2 className="text-3xl font-extrabold mb-6 text-center text-purple-700">Login</h2>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                        placeholder="Enter your email"
                        required
                        value={email}
                        onChange={handleEmail}
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                        placeholder="Enter your password"
                        required
                        value={password}
                        onChange={handlePassword}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-linear-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow transition duration-200 active:scale-95"
                    onClick={handleLogin}
                >
                    Login
                </button>

                <p className="text-center text-sm text-gray-600 mt-4">
                    Don't have an account? <span className="text-purple-600 cursor-pointer" onClick={() => state(false)}  > Register User </span>
                </p>
            </div>
        </div>
    )
}

export default LoginForm