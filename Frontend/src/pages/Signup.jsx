import React, { useEffect, useState } from 'react'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { LuBell, LuChevronDown, LuSearch, LuUser2 } from 'react-icons/lu'
import { MdArrowOutward } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom'

function Signup() {
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [errorPassword, setErrorPassword] = useState('')

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    useEffect(() => {
        if(password !== password2){
            setErrorPassword("password field doesn't match!!")
        }
        else{
            setErrorPassword('')
        }
    },[password, password2])


    return (
        <div
            className={`h-full min-h-svh px-10 w-full flex items-start justify-start flex-col tracking-tight sticky top-0 z-[999] transition-all text-sm `}
        >
            {/* Logo & Links */}
            <div className="flex items-center h-[60px] w-fit gap-1">
                <Link to={'/'} className="font-bold text-3xl font-DMSerifText mr-4">st.</Link>
            </div>
            <div className='w-full h-full flex-1 flex flex-col items-center justify-center '>
                <div className='w-full max-w-[350px]'>
                    <h1 className='text-2xl font-semibold'>Sign up</h1>
                    <p className='font-medium text-text-color-black/60 pb-4 text-xs'>Join fellow traders today! </p>
                </div>
                <form className="flex flex-col items-start justify-start gap-2 w-full h-fit max-w-[350px] ">
                    <label className='w-full'>
                        <h1 className='mb-2 font-semibold'>Email</h1>
                        <input required type="email" name='email' placeholder='E.g. johndoe@gmail.com' className="w-full h-[35px] ring-1 bg-transparent ring-border-lines-light p-4 outline-none rounded-md text-sm focus:ring-button-color/20 focus:ring-2 " id="" />
                    </label>
                    <label className='w-full'>
                        <h1 className='mb-2 font-semibold'>Create Password</h1>
                        <div className="w-full h-fit relative">
                            <input required onChange={(e) => setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} placeholder='Create password' className="w-full h-[35px] ring-1 bg-transparent ring-border-lines-light p-4 outline-none rounded-md text-sm focus:ring-button-color/20 focus:ring-2 " id="" />
                            <div onClick={handleShowPassword} className=' absolute top-0 bottom-0 right-3 m-auto text-xl w-fit h-fit p-1 text-text-color-black/70 cursor-pointer select-none'>
                                {showPassword ?
                                    <IoEyeOutline />
                                    :
                                    <IoEyeOffOutline />
                                }
                            </div>
                        </div>
                    </label>
                    {errorPassword !== '' && <p className='text-xs text-red-600'>{errorPassword}</p>}
                    <label className='w-full'>
                        <h1 className='mb-2 font-semibold'>Confirm Password</h1>
                        <div className="w-full h-fit relative">
                            <input required onChange={(e) => setPassword2(e.target.value)} type={showPassword ? 'text' : 'password'} placeholder='Confirm password' className="w-full h-[35px] ring-1 bg-transparent ring-border-lines-light p-4 outline-none rounded-md text-sm focus:ring-button-color/20 focus:ring-2 " id="" />
                        </div>
                    </label>
                    {errorPassword !== '' && <p className='text-xs text-red-600'>{errorPassword}</p>}
                    
                    <label className='w-full mt-3'>
                        <button type='submit' title='Login' className={`w-full h-[35px] bg-button-color hover:bg-opacity-80 text-white rounded-md font-semibold flex items-center justify-center gap-1 transition select-none `}>
                            Login
                        </button>
                    </label>
                    <div className='flex items-center justify-center w-full py-4 gap-1 max-sm:flex-col'>
                        <h1 className='text-text-color-black/60'>Already have an account? </h1>
                        <Link to="/login" className='text-main-color font-medium w-fit flex items-center gap-1 '>Login <MdArrowOutward /></Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup