import React from 'react'
import Image from './Image'
import profile from '../assets/profile1.png'
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaWifi } from "react-icons/fa";
import { BiMessageAdd } from "react-icons/bi";
import { LuEye } from "react-icons/lu";

const ChatComponent = () => {
  return (
    <div className='w-[400px] border-[3px] border-solid border-white h-h47 bg-[#E2E9FB] mt-[24px] px-4 rounded-md drop-shadow-sm'>
        <div>
           <div className='relative'>
           <h3 className='text-2xl text-black font-semibold font-int pt-4 pb-3 px-3'>Chat</h3>
            <BsThreeDotsVertical className='absolute top-[22px] -right-[2px]'/>
           </div>
            <div className='relative pb-2'>
            <input type="text" className='w-[280px] py-1 px-10 bg-[#ECF0FD] rounded-2xl mx-auto flex border border-white border-solid drop-shadow-lg'  placeholder='Search'/>
            <CiSearch className='absolute top-[10px] left-[62px]'/>
            </div>
        </div>
        <div className=' common overflow-y-scroll h-[220px]'>
             {/* user More */}
       <div className='box  flex justify-between items-center py-3'>
            <div className='flex gap-x-3 items-center'>
            <Image src={profile} className='h-12 w-12 rounded-full'/>
            <div>
                <h6 className='text-lg text-black font-int font-semibold'>Jenny Wilson</h6>
                <p className='text-sm text-[#657DE9] font-int font-normal'>Love You.....</p>
            </div>
            </div>
            <div className='flex gap-x-2 items-center'>
            <FaWifi className='text-blue-500 text-sm'/>
            <BiMessageAdd  className='text-sm text-[#84CEF0]'/>
            <LuEye  className='text-sm text-blue-500'/>

            </div>
            <button className='text-xs text-[#657DE9] font-int font-normal'>10:30 PM</button>
        </div>
       {/* user More */}
       {/* user More */}
       <div className='box  flex justify-between items-center py-3'>
            <div className='flex gap-x-3 items-center'>
            <Image src={profile} className='h-12 w-12 rounded-full'/>
            <div>
                <h6 className='text-lg text-black font-int font-semibold'>Jenny Wilson</h6>
                <p className='text-sm text-[#657DE9] font-int font-normal'>Love You.....</p>
            </div>
            </div>
            <div className='flex gap-x-2 items-center'>
            <FaWifi className='text-blue-500 text-sm'/>
            <BiMessageAdd  className='text-sm text-[#84CEF0]'/>
            <LuEye  className='text-sm text-blue-500'/>

            </div>
            <button className='text-xs text-[#657DE9] font-int font-normal'>10:30 PM</button>
        </div>
       {/* user More */}
       {/* user More */}
       <div className='box  flex justify-between items-center py-3'>
            <div className='flex gap-x-3 items-center'>
            <Image src={profile} className='h-12 w-12 rounded-full'/>
            <div>
                <h6 className='text-lg text-black font-int font-semibold'>Jenny Wilson</h6>
                <p className='text-sm text-[#657DE9] font-int font-normal'>Love You.....</p>
            </div>
            </div>
            <div className='flex gap-x-2 items-center'>
            <FaWifi className='text-blue-500 text-sm'/>
            <BiMessageAdd  className='text-sm text-[#84CEF0]'/>
            <LuEye  className='text-sm text-blue-500'/>

            </div>
            <button className='text-xs text-[#657DE9] font-int font-normal'>10:30 PM</button>
        </div>
       {/* user More */}
       {/* user More */}
       <div className='box  flex justify-between items-center py-3'>
            <div className='flex gap-x-3 items-center'>
            <Image src={profile} className='h-12 w-12 rounded-full'/>
            <div>
                <h6 className='text-lg text-black font-int font-semibold'>Jenny Wilson</h6>
                <p className='text-sm text-[#657DE9] font-int font-normal'>Love You.....</p>
            </div>
            </div>
            <div className='flex gap-x-2 items-center'>
            <FaWifi className='text-blue-500 text-sm'/>
            <BiMessageAdd  className='text-sm text-[#84CEF0]'/>
            <LuEye  className='text-sm text-blue-500'/>

            </div>
            <button className='text-xs text-[#657DE9] font-int font-normal'>10:30 PM</button>
        </div>
       {/* user More */}

        </div>
      
     
      

       
    </div>
  )
}

export default ChatComponent