import React from 'react'
import Navbar from '../components/Navbar'

function Home() {
    return (
        <div className='bg-body-white w-full h-full min-h-[3000px] relative'>
            <Navbar />
            {/* Hero */}
            <div className='main-header min-h-[170px] px-10 pt-5 text-text-color-white tracking-tight'>
                {/* Greetings */}
                <h1 className=' font-medium text-xl'>Welcome back, Petter!</h1>
                <div className='flex items-center gap-1 my-3'>
                    <button className={`text-sm px-4 py-2 hover:bg-stone-300/10 border-b-2 border-text-color-white`}>Overview</button>
                    <button className={`text-sm px-4 py-2 hover:bg-stone-300/10 border-b-2 border-transparent opacity-50 hover:opacity-100`}>Leaders</button>
                </div>
            </div>
            <div className='flex gap-2 w-full bg-transparent h-[200px] mt-[-50px] px-10'>
                <div className='w-1/3 bg-white shadow-lg rounded-2xl'></div>
                <div className='w-2/3 bg-white shadow-lg rounded-2xl'></div>
            </div>

        </div>
    )
}

export default Home