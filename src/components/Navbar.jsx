import React from 'react'

function Navbar() {
  return (
    <div className='min-h-[66px] px-5 h-fit w-full flex items-center justify-between'>
        {/* Logo & Links */}
        <div className='flex items-center h-fit w-fit'>
            <h1 className='text-2xl font-bold tracking-tight text-main-color'>Simple Trading</h1>
        </div>
        {/* Search, Notifications and Profile image */}
        <div></div>
    </div>
  )
}

export default Navbar