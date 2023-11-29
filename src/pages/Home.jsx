import React, { useEffect } from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { activeuser } from '../slices/userSlice';



const Home = () => {
  let dispatch=useDispatch()
  let data=useSelector((state)=>(state.sajib.value))
  const auth = getAuth();
  let navigate=useNavigate()
  let handleLogOut=()=>{
    signOut(auth).then(() => {
      dispatch(activeuser(null))
      localStorage.removeItem("users")

      navigate('/')

      
    }).catch((error) => {
      // An error happened.
    });

  }
  useEffect(()=>{
    if(data==null){
      navigate('/')
    }

  },[])
 
  return (
    <div>
      <button onClick={handleLogOut} className='bg-red-500 py-2 px-10'>Log Out</button>
    </div>
  )
}

export default Home