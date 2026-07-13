import { Link } from '@tanstack/react-router'
import axiosInstance from '../utils/axiosInstance.js'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

const NavBar = () => {
    const dispatch = useDispatch()
    const { isAuthenticated } = useSelector((state) => state.auth)
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark')
        localStorage.setItem('theme', theme)
    }, [theme])

    const handleLogOut = () => {
        axiosInstance.post('/api/auth/logout')
            .then(() => {
                localStorage.removeItem('accessToken')
                dispatch({ type: 'auth/logout' })
            })
    }

    const toggleTheme = () => {
        setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
    }

    return (
        <nav className="fixed top-0 left-0 w-full border-b border-slate-200/80 bg-(--surface)/95 backdrop-blur-md text-(--text) px-6 py-4 flex flex-wrap items-center justify-between gap-3 shadow-sm z-50">
            <div className="flex items-center gap-3">
                <Link to="/" className="text-xl font-bold tracking-tight text-(--text)">
                    URL Shortener
                </Link>
                <div className="hidden md:flex items-center gap-4 text-sm text-(--muted)">
                    <Link to="/" className="hover:text-(--text) transition">Home</Link>
                    <Link to="/dashboard" className="hover:text-(--text) transition">Dashboard</Link>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <button
                    onClick={toggleTheme}
                    className="rounded-full border border-slate-300/70 bg-(--bg) px-3 py-2 text-sm text-(--text) shadow-sm transition hover:border-slate-400"
                >
                    {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </button>

                {isAuthenticated ? (
                    <button
                        onClick={handleLogOut}
                        className="rounded-full bg-(--accent) px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-(--accent-strong)"
                    >
                        Logout
                    </button>
                ) : (
                    <Link
                        to="/auth"
                        className="rounded-full bg-(--accent) px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-(--accent-strong)"
                    >
                        Login
                    </Link>
                )}
            </div>
        </nav>
    )
}

export default NavBar

