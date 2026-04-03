
import { Outlet } from '@tanstack/react-router'
import NavBar from './components/NavBar.jsx'

export const RootLayout = () => {



  return (
    <>
      <div className="h-screen w-full">
        <div className=''>
          <NavBar />
        </div>

        <div className=''>
          <Outlet />
        </div>

      </div>
    </>
  )
}
export default RootLayout


