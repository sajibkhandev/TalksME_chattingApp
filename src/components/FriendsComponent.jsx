import React from 'react'
import Image from './Image'
import profile from '../assets/profile1.png'
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaWifi } from "react-icons/fa";
import { BiMessageAdd } from "react-icons/bi";

const FriendsComponent = () => {
  return (
    <div className='w-[400px] border-[3px] border-solid border-white h-h47 bg-[#E2E9FB] mt-[24px] px-4 rounded-lg drop-shadow-sm'>
    <div>
       <div className='relative'>
       <h3 className='text-2xl text-black font-semibold font-int pt-4 pb-3 px-3'>Friends</h3>
        <BsThreeDotsVertical className='absolute top-[22px] -right-[2px]'/>
       </div>
        <div className='relative pb-2'>
        <input type="text" className='w-[280px] py-1 px-10 bg-[#ECF0FD] rounded-2xl mx-auto flex border border-white border-solid drop-shadow-lg'  placeholder='Search'/>
        <CiSearch className='absolute top-[10px] left-[62px]'/>
        </div>
    </div>
   <div className='common overflow-y-scroll h-[220px]'>
    {/* user More */}
   <div className='box  flex  justify-between items-center py-3'>
            <div className='flex gap-x-3 items-center'>
            <Image src={profile} className='h-12 w-12 rounded-full'/>
            <div>
                <h6 className='text-lg text-black font-int font-semibold'>Jenny Wilson</h6>
                <p className='text-sm text-[#657DE9] font-int font-normal'>Love You.....</p>
            </div>
            </div>
            <div className=' h-full'>
            <div className='w-[80px] h-[4px] bg-[#f0f7fe] rounded-md'></div>
            </div>
            <BsThreeDotsVertical  className='text-sm'/>
        </div>
       {/* user More */}
   {/* user More */}
   <div className='box  flex  justify-between items-center py-3'>
            <div className='flex gap-x-3 items-center'>
            <Image src={profile} className='h-12 w-12 rounded-full'/>
            <div>
                <h6 className='text-lg text-black font-int font-semibold'>Jenny Wilson</h6>
                <p className='text-sm text-[#657DE9] font-int font-normal'>Love You.....</p>
            </div>
            </div>
            <div className=' h-full'>
            <div className='w-[80px] h-[4px] bg-[#f0f7fe] rounded-md'></div>
            </div>
            <BsThreeDotsVertical  className='text-sm'/>
        </div>
       {/* user More */}
   {/* user More */}
   <div className='box  flex  justify-between items-center py-3'>
            <div className='flex gap-x-3 items-center'>
            <Image src={profile} className='h-12 w-12 rounded-full'/>
            <div>
                <h6 className='text-lg text-black font-int font-semibold'>Jenny Wilson</h6>
                <p className='text-sm text-[#657DE9] font-int font-normal'>Love You.....</p>
            </div>
            </div>
            <div className=' h-full'>
            <div className='w-[80px] h-[4px] bg-[#f0f7fe] rounded-md'></div>
            </div>
            <BsThreeDotsVertical  className='text-sm'/>
        </div>
       {/* user More */}
   {/* user More */}
   <div className='box  flex  justify-between items-center py-3'>
            <div className='flex gap-x-3 items-center'>
            <Image src={profile} className='h-12 w-12 rounded-full'/>
            <div>
                <h6 className='text-lg text-black font-int font-semibold'>Jenny Wilson</h6>
                <p className='text-sm text-[#657DE9] font-int font-normal'>Love You.....</p>
            </div>
            </div>
            <div className=' h-full'>
            <div className='w-[80px] h-[4px] bg-[#f0f7fe] rounded-md'></div>
            </div>
            <BsThreeDotsVertical  className='text-sm'/>
        </div>
       {/* user More */}
   {/* user More */}
   <div className='box  flex  justify-between items-center py-3'>
            <div className='flex gap-x-3 items-center'>
            <Image src={profile} className='h-12 w-12 rounded-full'/>
            <div>
                <h6 className='text-lg text-black font-int font-semibold'>Jenny Wilson</h6>
                <p className='text-sm text-[#657DE9] font-int font-normal'>Love You.....</p>
            </div>
            </div>
            <div className=' h-full'>
            <div className='w-[80px] h-[4px] bg-[#f0f7fe] rounded-md'></div>
            </div>
            <BsThreeDotsVertical  className='text-sm'/>
        </div>
       {/* user More */}
   </div>
</div>
  )
}

export default FriendsComponent