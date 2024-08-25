import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='h-[65px] px-16 border-b-[1px] border-border-lines-light w-full flex items-center justify-between text-text-color-black tracking-tight'>
      {/* Logo & Links */}
      <div className='flex items-center h-fit w-fit gap-1'>
        <h1 className='font-bold text-3xl font-DMSerifText mr-4'>st.</h1>
        <div className='flex items-center'>
            <Link to="/" className='text-sm px-3 py-2 hover:bg-border-lines-light'>Dashboard</Link>
            <Link to="/" className='text-sm px-3 py-2 hover:bg-border-lines-light'>Leaders</Link>
            <Link to="/" className='text-sm px-3 py-2 hover:bg-border-lines-light'>Find Agents</Link>
            <Link to="/" className='text-sm px-3 py-2 hover:bg-border-lines-light'>Signals</Link>
            <Link to="/" className='text-sm px-3 py-2 hover:bg-border-lines-light'>Learn</Link>
            <Link to="/" className='text-sm px-3 py-2 hover:bg-border-lines-light'>Help Center</Link>
        </div>
      </div>
      {/* Search, Notifications and Profile image */}
      <div></div>
    </div>
  )
}

export default Navbar