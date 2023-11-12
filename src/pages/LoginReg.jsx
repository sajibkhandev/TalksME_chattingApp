import React from 'react'
import {FaGooglePlusG,FaFacebookF,FaGithub,FaLinkedinIn} from 'react-icons/fa'

const LoginReg = () => {
  return (
    <div className='flex bg-[#c9d6ff] bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff] w-full h-screen'>
        <div className='flex m-auto w-[768px] max-w-full  bg-white min-h-[480px] rounded-[30px] drop-shadow-2xl'>
            <div className='p-10 w-1/2 flex flex-col justify-center items-center'>
            <h1 className='text-center text-3xl text-black font-mon font-bold pb-6'>Sign In</h1>
            <div className='flex gap-x-4 pb-4'>
                <div className='border border-solid border-[#ccc] rounded-lg px-1.5 py-1.5'>
                <FaGooglePlusG className='text-lg'/>
                </div>
                <div className='border border-solid border-[#ccc] rounded-lg px-2 py-1.5'>
                <FaFacebookF className='text-sm'/>
                </div>
                <div className='border border-solid border-[#ccc] rounded-lg px-2 py-1.5'>
                <FaGithub className='text-sm'/>
                </div>
                <div className='border border-solid border-[#ccc] rounded-lg px-2 py-1.5'>
                <FaLinkedinIn className='text-sm'/>
                </div>
            </div>
            <p className='text-black text-sm font-normal font-mon pb-2'>or use your email for registeration</p>
            <input className='w-full bg-[#EEEEEE] py-1.5 px-5 my-2 rounded ' type="text" placeholder='Email'/>
            <input className='w-full bg-[#EEEEEE] py-1.5 px-5 my-2 rounded ' type="text" placeholder='Password'/>
            <p className='text-black text-sm font-medium font-mon pt-3 pb-5'>Forget Your Password?</p>
            <button className='bg-[#512DA7] py-2 px-8 text-white text-base font-mon font-semibold rounded-md '>Sign Up</button>
            </div>
            <div className='w-1/2 p-8 flex flex-col justify-center items-center bg-[#512da8] bg-gradient-to-r from-[#5c6bc0] to-[#512da8] rounded-l-[150px] rounded-r-[30px]'>
                <h2 className='text-center text-3xl text-white font-mon font-bold pb-6'>Hello, Friend!</h2>
                <p className='text-center text-white text-sm font-normal font-mon pb-6'>Register with your personal details to use all of site features</p>
                <button className=' py-1.5 px-8 text-white text-base font-mon font-semibold rounded-md border-2 border-solid border-[#988BD0] '>Sign Up</button>

            </div>

        </div>

    </div>
  )
}

export default LoginReg