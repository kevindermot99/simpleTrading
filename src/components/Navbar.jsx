import React from 'react'
import { LuChevronDown, LuUser2 } from 'react-icons/lu'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='h-[65px] px-16 border-b-[1px] border-border-lines-light w-full flex items-center justify-between text-text-color-black tracking-tight'>
      {/* Logo & Links */}
      <div className='flex items-center h-fit w-fit gap-1'>
        <h1 className='font-bold text-3xl font-DMSerifText mr-4'>st.</h1>
        <div className='flex items-center'>
          <Link to="/" className='text-sm px-3 py-2 hover:bg-border-lines-light/70'>Dashboard</Link>
          <Link to="/" className='text-sm px-3 py-2 hover:bg-border-lines-light/70'>Leaders</Link>
          <Link to="/" className='text-sm px-3 py-2 hover:bg-border-lines-light/70'>Find Agents</Link>
          <Link to="/" className='text-sm px-3 py-2 hover:bg-border-lines-light/70'>Signals</Link>
          <Link to="/" className='text-sm px-3 py-2 hover:bg-border-lines-light/70'>Learn</Link>
          <Link to="/" className='text-sm px-3 py-2 hover:bg-border-lines-light/70'>Help Center</Link>
        </div>
      </div>
      {/* Search, Notifications and Profile image */}
      <div className='flex items-center'>
        <Link to="/" className='text-sm px-3 py-2 hover:bg-border-lines-light/70'></Link>
        <Link to="/" className='text-sm flex items-center gap-0'>
          <div className='h-[30px] text-xs w-auto aspect-square flex items-center justify-center font-bold rounded-full bg-border-lines-light'>
            KD
          </div>
          <span className='ml-2 max-w-[80px] truncate'>Kevin Mbonimpaye Kaneza</span>
          <LuChevronDown className='text-base' />
        </Link>
      </div>
    </div>
  )
}

export default Navbar