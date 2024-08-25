import React, { useEffect, useState } from 'react'
import { LuBell, LuChevronDown, LuSearch, LuUser2 } from 'react-icons/lu'
import { Link } from 'react-router-dom'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 200 ? true : false);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`h-[65px] px-10 w-full flex items-center justify-between tracking-tight sticky top-0 transition-all ${scrolled ? 'text-text-color-black bg-body-white shadow-lg shadow-stone-500/5' : 'text-text-color-white main-header'} `}>
      {/* Logo & Links */}
      <div className='flex items-center h-fit w-fit gap-1'>
        <h1 className='font-bold text-3xl font-DMSerifText mr-4'>st.</h1>
        <div className='flex items-center'>
          <Link to="/" className={`text-sm px-3 py-2 ${scrolled ? 'hover:bg-stone-300/40' : 'hover:bg-stone-300/10' }`}>Dashboard</Link>
          <Link to="/" className={`text-sm px-3 py-2 ${scrolled ? 'hover:bg-stone-300/40' : 'hover:bg-stone-300/10' }`}>Leaders</Link>
          <Link to="/" className={`text-sm px-3 py-2 ${scrolled ? 'hover:bg-stone-300/40' : 'hover:bg-stone-300/10' }`}>Find Agents</Link>
          <Link to="/" className={`text-sm px-3 py-2 ${scrolled ? 'hover:bg-stone-300/40' : 'hover:bg-stone-300/10' }`}>Signals</Link>
          <Link to="/" className={`text-sm px-3 py-2 ${scrolled ? 'hover:bg-stone-300/40' : 'hover:bg-stone-300/10' }`}>Learn</Link>
          <Link to="/" className={`text-sm px-3 py-2 ${scrolled ? 'hover:bg-stone-300/40' : 'hover:bg-stone-300/10' }`}>Help Center</Link>
        </div>
      </div>
      {/* Search, Notifications and Profile image */}
      <div className='flex items-center'>
        <Link to="/" className={`text-xl p-2 hover:bg-border-lines-light/70 ${scrolled ? 'hover:bg-stone-300/40' : 'hover:bg-stone-300/10' }`}>
          <LuSearch />
        </Link>
        <Link to="/" className={`text-xl p-2 hover:bg-border-lines-light/70 ${scrolled ? 'hover:bg-stone-300/40' : 'hover:bg-stone-300/10' }`}>
          <LuBell />
        </Link>
        <Link to="/" className='text-sm flex items-center gap-0 ml-2'>
          <div className='h-[30px] text-xs w-auto aspect-square flex items-center justify-center font-bold rounded-full bg-border-lines-light text-text-color-black'>
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