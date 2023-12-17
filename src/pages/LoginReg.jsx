import React, { useEffect, useState } from 'react'
import {FaGooglePlusG,FaFacebookF,FaGithub,FaLinkedinIn} from 'react-icons/fa'
import {toast } from 'react-toastify';
import { Bars } from 'react-loader-spinner'
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";


import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,sendEmailVerification,signInWithPopup, GoogleAuthProvider,updateProfile } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { activeuser } from '../slices/userSlice';
import { getDatabase, ref, set } from "firebase/database";


const LoginReg = () => {
  const auth = getAuth();
  const db = getDatabase();
  let dispatch=useDispatch()
  let data=useSelector((state)=>(state.sajib.value))

  let navigate=useNavigate()
  let [loader,setLoader]=useState(false)
  let [condition,setCondition]=useState(false)

  let [email,setEmail]=useState("")
  let [name,setName]=useState("")
  let [password,setPassword]=useState("")

  let [email2,setEmail2]=useState("")
  let [password2,setPassword2]=useState("")

  let [eye,setEye]=useState(false)

  let [active,setActive]=useState(false)
  let handleSignup=()=>{
    setActive(true)
  }
  let handleLogin=(sajib)=>{
    setActive(false)
  }

  let emailVil=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  let lowerChar=/^(?=.*[a-z])/
   let upperChar=/^(?=.*[A-Z])/
   let number=/^(?=.*[0-9])/
   let specil=/^(?=.*[!@#$%^&*])/
   let minMax=/^(?=.{8,})/

  let handleSignupForm=(ache)=>{

    if(!email){
      toast.error("Enter your Email")
    }else if(!emailVil.test(email)){
      toast.error("Enter your Valid Email")
    }else if(!name){
      toast.error("Enter your Full Name")
    }else if(!password){
      toast.error("Enter your Password")
    }else if(!lowerChar.test(password)){
      toast.error("Lower Case Must");
    }else if(!upperChar.test(password)){
      toast.error("Upper Case Must");
    }else if(!number.test(password)){
      toast.error("Number Must");
    }else if(!specil.test(password)){
      toast.error("Specil charator Must");
    }else if(!minMax.test(password)){
      toast.error("min-8 max-16");
    }else{
      setLoader(true)
      createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    updateProfile(auth.currentUser, {
      displayName: name, photoURL: "https://firebasestorage.googleapis.com/v0/b/talksme-fa7a7.appspot.com/o/profileImage.jpg?alt=media&token=8a57c37b-8993-4ebc-a9ac-24b68a35e55b"
    }).then(() => {
      console.log(userCredential);
    sendEmailVerification(auth.currentUser)
  .then(() => {
    set(ref(db, 'alluser/'+userCredential.user.uid), {
      username: name,
      email: userCredential.user.email,
      profile_picture : "https://firebasestorage.googleapis.com/v0/b/talksme-fa7a7.appspot.com/o/profileImage.jpg?alt=media&token=8a57c37b-8993-4ebc-a9ac-24b68a35e55b"
    });
    setEmail("")
    setName("")
    setPassword("")
    setLoader(false)
    // for responseive
    if(ache=="ache"){
      setCondition(false)
    }else{
      setActive(false)
    }
    // for responseive
  });
    })

    
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode);
    setLoader(false)
    if(errorCode.includes("email")){
      toast.error("Email already in use")
    }
  });
    }
  }
  //?//////// LogIn Start//////////

  let handleSignInForm=()=>{
    if(!email2){
      toast.error("Enter your Email")
    }else if(!emailVil.test(email2)){
      toast.error("Enter Valid Email")
    }else if(!password2){
      toast.error("Enter your Password")
    }else if(!lowerChar.test(password2)){
      toast.error("Lower Case Must");
    }else if(!upperChar.test(password2)){
      toast.error("Upper Case Must");
    }else if(!number.test(password2)){
      toast.error("Number Must");
    }else if(!specil.test(password2)){
      toast.error("Specil charator Must");
    }else if(!minMax.test(password2)){
      toast.error("min-8 max-16");
    }else{
      setLoader(true)
      signInWithEmailAndPassword(auth, email2, password2).then((userCredential) => {
        // console.log(userCredential.user);
        dispatch(activeuser(userCredential.user))
        localStorage.setItem("users",JSON.stringify(userCredential.user))
    if(userCredential.user.emailVerified){
      setEmail2("")
      setPassword2("")
      navigate("/home")
      setLoader(false)
    }else{
      toast.error("Verify your Email")
      setLoader(false)
    }
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode);
    setLoader(false)
    if(errorCode.includes("invalid")){
      toast.error("Invalid Credential")
    }if(errorCode.includes("too")){
      toast.error("Too many request try it later")
    }
  });
    }
  }


  let hangleGoogle1=()=>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result);
    navigate("/home")
    dispatch(activeuser(result.user))
    localStorage.setItem("users",JSON.stringify(result.user))
  }).catch((error) => {
    const errorCode = error.code;
    console.log(errorCode);
  });
  }

  
  let handleGoogle2=()=>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result);
    navigate("/home")
    dispatch(activeuser(result.user))
    localStorage.setItem("users",JSON.stringify(result.user))
  }).catch((error) => {
    const errorCode = error.code;
    console.log(errorCode);
  });
  }
  let handleEye2=()=>{
    setEye(false)
  }
  let handleEye1=()=>{
    setEye(true)
  }
 useEffect(()=>{
  if(data!=null){
    navigate('/home')
  }
 },[])
  return (
    <>
    {/* For Desktop */}
    <div className='hidden md:block'>
      <div className='body'>
        <div className={`container rounded-lg  ${active?"active":""}`}>
          {/* Sign up start */}
            <div className='signup commomClass  flex justify-center items-center flex-col pl-8 pr-4'>
            <h1 className='text-center text-3xl text-black font-mon font-bold pb-6'>Sign Up</h1>
            <div className='flex gap-x-4 pb-4'>
                <div onClick={hangleGoogle1} className='border border-solid border-[#ccc] rounded-lg px-1.5 py-1.5'>
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
            
            <input onChange={(e)=>setEmail(e.target.value)} value={email} className='w-full bg-[#EEEEEE] py-1.5 px-5 my-1.5 rounded ' type="text" placeholder='Email'/>
            <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full bg-[#EEEEEE] py-1.5 px-5 my-1.5 rounded ' type="text" placeholder='Name'/>
            <div className='relative w-full'>
            <input onChange={(e)=>setPassword(e.target.value)} value={password} className='w-full bg-[#EEEEEE] py-1.5 px-5 my-1.5 rounded ' type={eye?"text":"password"} placeholder='Password'/>
            {eye?
            <LuEyeOff onClick={handleEye2} className='absolute top-[17px] right-[20px] cursor-pointer text-[#9A9898] text-base '/>
            :
            <LuEye onClick={handleEye1} className='absolute top-[17px] right-[20px] cursor-pointer text-[#9A9898] text-base '/>
            }
            </div>
            {/* <p className='text-black text-sm font-medium font-mon pt-3 pb-5'>Forget Your Password?</p> */}
            {loader?
            <button>
              <Bars
                height="30"
                width="80"
                color="blue"
                ariaLabel="bars-loading"
                wrapperStyle={{
                marginTop:"15px",
                }}
                wrapperClass=""
                visible={true}
              />
            </button>
            :
            <button onClick={()=>handleSignupForm("")}  className='bg-[#512DA7] py-2 px-8 text-white text-base font-mon font-semibold rounded-md mt-4'>Sign Up </button>
            }
            
            </div>
            {/* Sign up end */}
           
            {/* Sign in Start */}
            <div className='signin commomClass  flex justify-center items-center flex-col pl-8 pr-4'>
            <h1 className=' text-center text-3xl text-black font-mon font-bold pb-6'>Sign In</h1>
            <div className='flex gap-x-4 pb-4'>
                <div className='border border-solid border-[#ccc] rounded-lg px-1.5 py-1.5'>
                <FaGooglePlusG onClick={handleGoogle2} className='text-lg'/>
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
            <input onChange={(e)=>setEmail2(e.target.value)} value={email2} className='w-full bg-[#EEEEEE] py-1.5 px-5 my-2 rounded ' type="text" placeholder='Email'/>
            <div className='relative w-full'>
            <input onChange={(e)=>setPassword2(e.target.value)} value={password2} className='w-full bg-[#EEEEEE] py-1.5 px-5 my-2 rounded ' type={eye?"text":"password"} placeholder='Password'/>
            {/* {eye?
            <LuEyeOff onClick={handleEye2} className='absolute top-[17px] right-[20px] cursor-pointer text-[#9A9898] text-base '/>
            :
            <LuEye onClick={handleEye1} className='absolute top-[17px] right-[20px] cursor-pointer text-[#9A9898] text-base '/>
            } */}
            </div>
            <Link to='/forgetpassword'><p className='text-black text-sm font-medium font-mon pt-3 pb-5 cursor-pointer'>Forget Your Password?</p></Link>
            
            {loader?
            <button>
            <Bars
              height="30"
              width="80"
              color="blue"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </button>
            :
            <button onClick={handleSignInForm} className='bg-[#512DA7] py-2 px-8 text-white text-base font-mon font-semibold rounded-md '>Sign In</button>
            }
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
    </div>
     {/* For mobile */}
     
     {condition?
     <div className='md:hidden'>
      {/* Sign up */}
     <div className='flex justify-center items-center flex-col h-screen bg-[#c9d6ff] px-4'>
     <div className='bg-white flex justify-center items-center flex-col w-full rounded-lg px-6 sm:px-16'>
            <h1 className='text-center text-3xl text-black font-mon font-bold pb-7 pt-14'>Sign Up</h1>
            <div className='flex gap-x-4 pb-4'>
                <div onClick={hangleGoogle1} className='border border-solid border-[#ccc] rounded-lg px-1.5 py-1.5'>
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
            <p className='text-black text-sm font-normal font-mon pb-4'>or use your email for registeration</p>
            <input onChange={(e)=>setEmail(e.target.value)} value={email} className='w-full bg-[#EEEEEE] py-1.5 px-5 my-1.5 rounded placeholder:text-sm ' type="text" placeholder='Email'/>
            <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full bg-[#EEEEEE] py-1.5 px-5 my-1.5 rounded placeholder:text-sm ' type="text" placeholder='Name'/>
            <input onChange={(e)=>setPassword(e.target.value)} value={password} className='w-full bg-[#EEEEEE] py-1.5 px-5 my-1.5 rounded placeholder:text-sm ' type="password" placeholder='Password'/>
            {/* <p className='text-black text-sm font-medium font-mon pt-3 pb-5'>Forget Your Password?</p> */}
            {loader?
            <button><Bars height="27"  width="80" color="blue" ariaLabel="bars-loading" wrapperStyle={{marginTop:"15px",marginBottom:"20px",}} wrapperClass="" visible={true}/>
            </button>
            :
            <button onClick={()=>handleSignupForm("ache")}  className='bg-[#512DA7] py-2 px-8 text-white text-base font-mon font-semibold rounded-md mb-6 mt-5'>Sign Up</button>
            }
            <p className='mb-12 text-xs text-black font-mon font-medium'>Already have an account ? <span onClick={()=>setCondition(false)} className='text-[#EA6C4B] cursor-pointer text-xs font-semibold'>Sign In</span></p>
            
            </div>
      </div>
     </div>
     :
     <div className='md:hidden'>
      {/* Sing in */}
     <div className='flex justify-center items-center flex-col h-screen bg-[#c9d6ff] px-4'>
      <div className='bg-white flex justify-center items-center flex-col w-full rounded-lg px-6 sm:px-16'>
      <h1 className='text-center text-3xl text-black font-mon font-bold pb-7 pt-14'>Sign In</h1>
            <div className='flex gap-x-4 pb-4'>
                <div className='border border-solid border-[#ccc] rounded-lg px-1.5 py-1.5'>
                <FaGooglePlusG onClick={handleGoogle2} className='text-lg'/>
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
            
            <p className='text-black text-sm font-normal font-mon pb-4'>or use your email password</p>
            <input onChange={(e)=>setEmail2(e.target.value)} value={email2} className='w-full bg-[#EEEEEE] py-1.5 px-5 my-1.5 rounded placeholder:text-sm ' type="text" placeholder='Email'/>
            <input onChange={(e)=>setPassword2(e.target.value)} value={password2} className='w-full bg-[#EEEEEE] py-1.5 px-5 my-1.5 rounded placeholder:text-sm ' type="password" placeholder='Password'/>
            <p className='text-black text-sm font-medium font-mon pt-5 pb-5 '>Forget Your Password?</p>
            {loader?
            <button>
            <Bars
              height="27"
              width="80"
              color="blue"
              ariaLabel="bars-loading"
              wrapperStyle={{marginBottom:"20px"}}
              wrapperClass=""
              visible={true}
            />
          </button>
            :
            <button onClick={handleSignInForm} className='bg-[#512DA7] py-2 px-8 text-white text-base font-mon font-semibold rounded-md mb-6 mt-1'>Sign In</button>
            }
            <p className='mb-12 text-xs text-black font-mon font-medium'>Don’t have an account ? <span onClick={()=>setCondition(true)} className='text-[#EA6C4B] cursor-pointer text-xs font-semibold'>Sign up</span></p>
      </div>
      </div>
     </div>
     }
    </>
  )
}

export default LoginReg