import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Bars } from 'react-loader-spinner'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgetPassword = () => {
    let [email,setEmail]=useState("")
    let [loader,setLoader]=useState(false)
    let [error,setError]=useState("")
    let navigate=useNavigate()
    const auth = getAuth();
    let validation=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let handleForgetPassword=()=>{
        if(!email){
            setError("Please Enter Your Email !");
        }else if(!validation.test(email)){
            setError("Enter your Valid Email !");
        }else{
            setError("")
            setLoader(true)
        sendPasswordResetEmail(auth, email)
       .then(() => {
        setLoader(false)
        // navigate('/')
    // Password reset email sent!
    // ..
     })
     .catch((error) => {
    const errorCode = error.code;
    setLoader(false)
     });

        }
        
    }
  return (
    <div className='bg-[#c9d6ff] bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff] flex justify-center items-center h-screen'>
        <div className='w-[580px] h-[400px] bg-white rounded-lg flex flex-col items-center'>
            <h2 className='text-3xl text-black font-bold font-mon text-center pt-20 pb-6'>Recover Your Password!</h2>
            <h4 className='text-sm text-black font-medium font-mon text-center w-[300px] leading-'>Please enter your email address to search for your account.</h4>
            
            <input onChange={(e)=>setEmail(e.target.value)} className='w-[350px] bg-[#EEEEEE] py-1.5 px-5 my-2 rounded mt-5' type="text" placeholder='Email'/>
            <h4 className='text-red-500 text-base font-mon font-medium'>{error}</h4>
            {loader?
            <button>
            <Bars
              height="30"
              width="80"
              color="blue"
              ariaLabel="bars-loading"
              wrapperStyle={{marginTop:'18px'}}
              wrapperClass=""
              visible={true}
            />
          </button>
            :
           <div className='flex gap-x-5 mt-5'>
          <Link to='/'> <button className='bg-[#512DA7] py-2 px-8 text-white text-base font-mon font-semibold rounded-md '>Back</button></Link>
            <button onClick={handleForgetPassword} className='bg-[#512DA7] py-2 px-8 text-white text-base font-mon font-semibold rounded-md '>Send</button>
           </div>
            }

            
        </div>
    </div>
  )
}

export default ForgetPassword