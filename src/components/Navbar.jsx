import React, { useEffect, useState } from 'react'
import { LuBell, LuChevronDown, LuSearch, LuUser2 } from 'react-icons/lu'
import { Link, useLocation } from 'react-router-dom'

function Navbar({ dynamic }) {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 70 ? true : false);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`h-[65px] px-10 w-full flex items-center justify-between tracking-tight sticky top-0 z-[999] transition-all 
      ${dynamic === 'on' && (scrolled ? 'text-text-color-black bg-white shadow-lg shadow-stone-500/5' : 'text-text-color-white main-header')}
      ${dynamic === 'off' && (` text-text-color-black bg-white ${scrolled && 'shadow-lg shadow-stone-500/5'}`)}
    `}
    >
      {/* Logo & Links */}
      <div className="flex items-center h-fit w-fit gap-1">
        <h1 className="font-bold text-3xl font-DMSerifText mr-4">st.</h1>
        <div className="flex items-center gap-1">
          <Link
            to="/"
            className={`text-sm px-3 py-2 
              ${dynamic === 'on' && (
                scrolled
                  ? `hover:bg-stone-300/40 ${location.pathname === "/" || location.pathname === "/transactions" ? "bg-stone-300/40" : ""}`
                  : `hover:bg-stone-300/10 ${location.pathname === "/" || location.pathname === "/transactions" ? "bg-stone-300/10" : ""}`
              )}
              ${dynamic === 'off' && (
                `hover:bg-stone-300/40 ${location.pathname === "/" || location.pathname === "/transactions" ? "bg-stone-300/40" : ""}`
              )}
            `}
          >
            Dashboard
          </Link>
          <Link
            to="/leaders"
            className={`text-sm px-3 py-2 
              ${dynamic === 'on' && (
                scrolled
                  ? `hover:bg-stone-300/40 ${location.pathname === "/leaders" ? "bg-stone-300/40" : ""}`
                  : `hover:bg-stone-300/10 ${location.pathname === "/leaders" ? "bg-stone-300/10" : ""}`
              )}
              ${dynamic === 'off' && (
                `hover:bg-stone-300/40 ${location.pathname === "/leaders" ? "bg-stone-300/40" : ""}`
              )}
            `}
          >
            Leaders
          </Link>
          <Link
            to="/"
            className={`text-sm px-3 py-2 
              ${dynamic === 'on' && (
                scrolled
                  ? `hover:bg-stone-300/40 ${location.pathname === "/findAgents" ? "bg-stone-300/40" : ""}`
                  : `hover:bg-stone-300/10 ${location.pathname === "/findAgents" ? "bg-stone-300/10" : ""}`
              )}
              ${dynamic === 'off' && (
                `hover:bg-stone-300/40 ${location.pathname === "/findAgents" ? "bg-stone-300/40" : ""}`
              )}
            `}
          >
            Find Agents
          </Link>
          <Link
            to="/"
            className={`text-sm px-3 py-2 
              ${dynamic === 'on' && (
                scrolled
                  ? `hover:bg-stone-300/40 ${location.pathname === "/signals" ? "bg-stone-300/40" : ""}`
                  : `hover:bg-stone-300/10 ${location.pathname === "/signals" ? "bg-stone-300/10" : ""}`
              )}
              ${dynamic === 'off' && (
                `hover:bg-stone-300/40 ${location.pathname === "/signals" ? "bg-stone-300/40" : ""}`
              )}
            `}
          >
            Signals
          </Link>
          <Link
            to="/"
            className={`text-sm px-3 py-2 
              ${dynamic === 'on' && (
                scrolled
                  ? `hover:bg-stone-300/40 ${location.pathname === "/learn" ? "bg-stone-300/40" : ""}`
                  : `hover:bg-stone-300/10 ${location.pathname === "/learn" ? "bg-stone-300/10" : ""}`
              )}
              ${dynamic === 'off' && (
                `hover:bg-stone-300/40 ${location.pathname === "/learn" ? "bg-stone-300/40" : ""}`
              )}
            `}
          >
            Learn
          </Link>
          <Link
            to="/"
            className={`text-sm px-3 py-2 
              ${dynamic === 'on' && (
                scrolled
                  ? `hover:bg-stone-300/40 ${location.pathname === "/learn" ? "bg-stone-300/40" : ""}`
                  : `hover:bg-stone-300/10 ${location.pathname === "/learn" ? "bg-stone-300/10" : ""}`
              )}
              ${dynamic === 'off' && (
                `hover:bg-stone-300/40 ${location.pathname === "/learn" ? "bg-stone-300/40" : ""}`
              )}
            `}
          >
            Join Pool
          </Link>
          <Link
            to="/"
            className={`text-sm px-3 py-2 
              ${dynamic === 'on' && (
                scrolled
                  ? `hover:bg-stone-300/40 ${location.pathname === "/helpCenter" ? "bg-stone-300/40" : ""}`
                  : `hover:bg-stone-300/10 ${location.pathname === "/helpCenter" ? "bg-stone-300/10" : ""}`
              )}
              ${dynamic === 'off' && (
                `hover:bg-stone-300/40 ${location.pathname === "/helpCenter" ? "bg-stone-300/40" : ""}`
              )}
            `}
          >
            Help Center
          </Link>
        </div>
      </div>
      {/* Search, Notifications and Profile image */}
      <div className="flex items-center">
        <Link to="/" className={`text-xl p-2${scrolled ? "" : ""}`}>
          <LuSearch />
        </Link>
        <Link to="/" className={`text-xl p-2${scrolled ? "" : ""}`}>
          <LuBell />
        </Link>
        <Link to="/" className="text-sm flex items-center gap-0 ml-2">
          <div className="h-[30px] text-xs w-auto aspect-square flex items-center justify-center font-bold rounded-full bg-border-lines-light text-text-color-black">
            KD
          </div>
          <span className="ml-2 max-w-[80px] truncate">
            Kevin Mbonimpaye Kaneza
          </span>
          <LuChevronDown className="text-base" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar