import React, { useEffect, useState } from 'react'
import Image from './Image'
import profile from '../assets/profile1.png'
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaWifi } from "react-icons/fa";
import { BiMessageAdd } from "react-icons/bi";
import { getDatabase, ref, onValue } from "firebase/database";

const PeopleComponent = () => {
    const db = getDatabase();
    let [alldata,setAlldata]=useState([])
    let [search,setSearch]=useState([])
    let [input,setInput]=useState('')
    useEffect(()=>{
        const starCountRef = ref(db, 'alluser');
        onValue(starCountRef, (snapshot) => {
            let arr=[]
        snapshot.forEach(item=>{
            arr.push(item.val());
        });
        setAlldata(arr)
}); 
    },[])

    let handleInput=(e)=>{
        setInput(e.target.value)
        
        let search=alldata.filter(item=>item.username.toLowerCase().includes(e.target.value.toLowerCase()))
        setSearch(search);
        ;
    }
  return (
    <div className='w-[400px]  border-[3px] border-solid border-white h-h47 bg-[#E2E9FB] mt-[26px] px-4 rounded-md drop-shadow-sm'>
    <div>
       <div className='relative'>
       <h3 className='text-2xl text-black font-semibold font-int pt-4 pb-3 px-3'>People</h3>
        <BsThreeDotsVertical className='absolute top-[22px] -right-[2px]'/>
       </div>
        <div className='relative pb-2'>
        <input onChange={handleInput} type="text" className='w-[280px] py-1 px-10 bg-[#ECF0FD] rounded-2xl mx-auto flex border border-white border-solid drop-shadow-lg'  placeholder='Search'/>
        <CiSearch className='absolute top-[10px] left-[62px]'/>
        </div>
    </div>
  <div className=' common overflow-y-scroll h-[220px]'>
     {/* user More */}
    {input.length>0?
    search.length>0?
    search.map((item,index)=>(
     <div  key={index} className='box  flex justify-between items-center py-3'>
     <div className='flex gap-x-3 items-center'>
     <Image src={item.profile_picture} className='h-12 w-12 rounded-full'/>
     <div>
         <h6 className='text-lg text-black font-int font-semibold'>{item.username}</h6>
         <p className='text-sm text-[#657DE9] font-int font-normal'>Love You.....</p>
     </div>
     </div>
     <button className='text-sm bg-[#647FE8] py-1 px-3 text-white rounded font-int font-normal'>Add</button>
 </div>
  ))
    :
    <p className='text-center text-blue-500 text-2xl font-bold mt-16'>User Blank:</p>
     :
     alldata.map((item,index)=>(
        <div  key={index} className='box  flex justify-between items-center py-3'>
        <div className='flex gap-x-3 items-center'>
        <Image src={item.profile_picture} className='h-12 w-12 rounded-full'/>
        <div>
            <h6 className='text-lg text-black font-int font-semibold'>{item.username}</h6>
            <p className='text-sm text-[#657DE9] font-int font-normal'>Love You.....</p>
        </div>
        </div>
        <button className='text-sm bg-[#647FE8] py-1 px-3 text-white rounded font-int font-normal'>Add</button>
    </div>
     ))}
       {/* user More */}
  
   
    
  </div>
  

   
</div>
  )
}

export default PeopleComponent