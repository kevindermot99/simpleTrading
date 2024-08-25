import React from 'react'
import Navbar from '../components/Navbar'

function Home() {
    return (
        <div className='bg-body-white w-full h-full min-h-[3000px] relative'>
            <Navbar />
            {/* Hero */}
            <div className='main-header min-h-[200px] px-10 pt-5 text-text-color-white tracking-tight'>
                {/* Greetings */}
                <h1 className=' font-medium text-xl'>Welcome back, Petter!</h1>
                <div className='flex items-center gap-1 mt-3'>
                    <button className={`text-sm px-4 py-2 hover:bg-stone-300/10`}>Dashboard</button>
                    <button className={`text-sm px-4 py-2 hover:bg-stone-300/10`}>Leaders</button>

                </div>
            </div>
        </div>
    )
}

export default Home