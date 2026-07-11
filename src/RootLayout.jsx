
import { Outlet } from '@tanstack/react-router'
import NavBar from './components/NavBar.jsx'

export const RootLayout = () => {
  return (
    <div className="min-h-screen bg-(--bg) text-(--text) transition-colors duration-300">
      <NavBar />
      <main className="pt-28 px-4 pb-12 md:px-8">
        <Outlet />
      </main>
    </div>
  )
}
export default RootLayout


