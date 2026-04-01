import React from 'react'
import NavBar from '../components/NavBar'

const DashBoardPage = () => {
    return (
        <>

            <div className=" bg-blue-400 h-screen flex items-center justify-center">

                <div className=' animate-[move_0.5s_ease-in-out_infinite_alternate h-80 w-full bg-linear-to-r from-purple-500 to-blue-500 text-5xl font-extrabold border-2'> <marquee className="h-full w-full" behavior="alternate" direction="left"  >DashBoardPage</marquee></div>

            </div>
        </>
    )
}

export default DashBoardPage