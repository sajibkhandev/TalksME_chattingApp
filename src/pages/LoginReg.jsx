import React, { useState } from 'react'
import {FaGooglePlusG,FaFacebookF,FaGithub,FaLinkedinIn} from 'react-icons/fa'

const LoginReg = () => {
  let [active,setActive]=useState(false)
  let handleSignup=()=>{
    setActive(true)
  }
  let handleLogin=()=>{
    setActive(false)
  }

  return (
    <div className='body '>
        <div className={`container ${active?"active":""}`}>
          {/* Sign up start */}
            <div className='signup commomClass  flex justify-center items-center flex-col pl-8 pr-4'>
            <h1 className='text-center text-3xl text-black font-mon font-bold pb-6'>Sign Up</h1>
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
            <input className='w-full bg-[#EEEEEE] py-1.5 px-5 my-2 rounded ' type="text" placeholder='Name'/>
            <input className='w-full bg-[#EEEEEE] py-1.5 px-5 my-2 rounded ' type="text" placeholder='Password'/>
            <p className='text-black text-sm font-medium font-mon pt-3 pb-5'>Forget Your Password?</p>
            <button className='bg-[#512DA7] py-2 px-8 text-white text-base font-mon font-semibold rounded-md '>Sign Up</button>
            </div>
            {/* Sign up end */}
           
            {/* Sign in Start */}
            <div className='signin commomClass  flex justify-center items-center flex-col pl-8 pr-4'>
            <h1 className=' text-center text-3xl text-black font-mon font-bold pb-6'>Sign In</h1>
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
            
            <p className='text-black text-sm font-normal font-mon pb-2'>or use your email password</p>
            <input className='w-full bg-[#EEEEEE] py-1.5 px-5 my-2 rounded ' type="text" placeholder='Email'/>
            <input className='w-full bg-[#EEEEEE] py-1.5 px-5 my-2 rounded ' type="text" placeholder='Password'/>
            <p className='text-black text-sm font-medium font-mon pt-3 pb-5'>Forget Your Password?</p>
            <button className='bg-[#512DA7] py-2 px-8 text-white text-base font-mon font-semibold rounded-md '>Sign In</button>
            </div>
            {/* Sign in end */}
            <div className='toggle-container'>
              <div className='toggle'>
              <div className='commonClass2 left'>
                <h2 className='text-center text-3xl text-white font-mon font-bold pb-6'>Welcome</h2>
                <p className='text-center text-white text-sm font-normal font-mon pb-6'>Enter your personal details to use all of site features</p>
                <button onClick={handleLogin} className=' py-1.5 px-8 text-white text-base font-mon font-semibold rounded-md border-2 border-solid border-[#988BD0] '>Log In</button>
            </div>
            {/* lsdflsdfls */}
              <div className='commonClass2 right '>
                <h2 className='text-center text-3xl text-white font-mon font-bold pb-6'>Hello, Friend!</h2>
                <p className='text-center text-white text-sm font-normal font-mon pb-6'>Register with your personal details to use all of site features</p>
                <button onClick={handleSignup} className=' py-1.5 px-8 text-white text-base font-mon font-semibold rounded-md border-2 border-solid border-[#988BD0] '>Sign Up</button>
            </div>
              </div>
            </div>

        </div>

    </div>
  )
}

export default LoginReg