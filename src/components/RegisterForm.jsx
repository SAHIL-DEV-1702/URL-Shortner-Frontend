import React, { useState } from 'react'
import axios from 'axios'

const RegisterForm = ({ state }) => {



    const [pass, setPass] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")

    const handleSubmit = async () => {

        try {
            const response = await axios.post("http://localhost:8000/api/auth/register", {
                name: name, email: email, password: pass
            });

            console.log(response.data);
        } catch (error) {
            console.log(error.response?.data || error.message);
        }

    }
    const handelPassword = (e) => {
        setPass(e.target.value)
    }
    const handelEmail = (e) => {
        setEmail(e.target.value)
    }
    const handelName = (e) => {
        setName(e.target.value)
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-blue-100 to-purple-200">

            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-blue-100" onClick={() => handleSubmit}>

                <h2 className="text-3xl font-extrabold mb-6 text-center text-purple-700">Create Account</h2>
                <div className="mb-4">

                    <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                        placeholder="Enter your name"
                        required
                        onClick={handelName}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                        placeholder="Enter your email"
                        required
                        onChange={handelEmail}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                        placeholder="Password must be 8 charater"
                        required
                        value={pass}
                        onChange={handelPassword}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-linear-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow transition duration-200"
                    onClick={handleSubmit}
                >
                    Register
                </button>
                <p className="text-center text-sm text-gray-600 mt-4">
                    Don't have an account? <span className="text-purple-600 cursor-pointer" onClick={() => state(true)} > Sign In </span>
                </p>

            </div>
        </div>
    );
}

export default RegisterForm