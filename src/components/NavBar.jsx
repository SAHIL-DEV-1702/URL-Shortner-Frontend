import { Link } from '@tanstack/react-router'
import axiosInstance from '../utils/axiosInstance.js'
import { useSelector, useDispatch } from 'react-redux'

const NavBar = ({ isLoggedIn, onLogout }) => {

    const dispatch = useDispatch()
    const { isAuthenticated } = useSelector((state) => state.auth)

    const handleLogOut = () => {
        axiosInstance.post("/api/auth/logout")
            .then(() => {
                dispatch({ type: "auth/logout" })
            })
    }


    return (
        <nav className="fixed top-0 left-0 w-full bg-linear-to-r from-purple-500 to-blue-500 text-white px-6 py-4 flex items-center justify-between shadow-md z-50">


            <div className="text-xl font-bold text-white">
                <Link to="/">URL Shortener</Link>
            </div>


            <div className="hidden md:flex space-x-4">
                <Link to="/" className="hover:text-gray-200 font-medium">
                    Home
                </Link>
                <Link to="/dashboard" className="hover:text-gray-200 font-medium">
                    Dashboard
                </Link>
            </div>

            <div>
                {isAuthenticated ? (
                    <button
                        onClick={handleLogOut}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow transition duration-200"
                    >
                        Logout
                    </button>
                ) : (
                    <Link
                        to="/auth"
                        className="bg-white text-purple-700 px-4 py-2 rounded shadow hover:bg-gray-100 font-semibold transition duration-200"
                    >
                        Login
                    </Link>
                )}
            </div>
        </nav>
    )
}

export default NavBar

