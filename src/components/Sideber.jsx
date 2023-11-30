import React, { useEffect } from 'react'
import profileImg from '../assets/profileImg.png'
import Image from '../components/Image'
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { TiHomeOutline } from "react-icons/ti";
import { IoChatboxOutline } from "react-icons/io5";
import { BiGroup } from "react-icons/bi";
import { LuUser2 } from "react-icons/lu";
import { LuBarChartHorizontal } from "react-icons/lu";
import { Link, useLocation } from 'react-router-dom';

const Sideber = () => {
     let location=useLocation()
     let active=location.pathname.replace("/","")
     
    
    return (
        <div className='bg-[#E0E6FB] h-screen w-[160px]'>
        <div className='flex flex-col items-center justify-around h-full'>
           <div>
           <div className='w-[100px] h-[114px] bg-[#FFFFFF] rounded-lg flex flex-col items-center drop-shadow-xl'>
                <div className='relative'>
                    <Image src={profileImg} className='rounded-full w-[52px] h-[52px] mt-4'/>
                    <BiLogoLinkedinSquare  className=' border-0 absolute -bottom-[3px] -right-[6px] bg-white text-[#0D63C6]'/>
                </div>
                <div className='w-[68px] h-[6px] rounded bg-[#F1F2F6] mt-2.5'></div>
                <p className='font-mon font-bold text-black text-xs pt-1.5'>Sajib Khan</p>
               

            </div>
            <div className='flex flex-col gap-y-8 items-center mt-14'>
            <Link to='/home' className={active=="home"?"bg-blue-500 text-white rounded-md  py-2 px-4":""}>
            <div className='flex items-center gap-x-1.5  text-lg font-medium font-int '><TiHomeOutline  className='text-lg'/> Home</div>
            </Link>
            <Link to='/chat' className={active=="chat"?"bg-blue-500 text-white rounded-md  py-2 px-4":""}>
            <div className='flex items-center gap-x-1.5  text-lg font-medium font-int '> <IoChatboxOutline className='text-lg'/>Chat</div>
            </Link>
            <Link to='group' className={active=="group"?"bg-blue-500 text-white rounded-md  py-2 px-4":""}>
            <div className='flex items-center gap-x-1.5  text-lg font-medium font-int '><BiGroup className='text-lg'/>Group</div>
            </Link>
            <Link to='friends' className={active=="friends"?"bg-blue-500 text-white rounded-md  py-2 px-4":""}>

            <div className='flex items-center gap-x-1.5  text-lg font-medium font-int '><LuUser2 className='text-lg'/>Friend</div>
            </Link>
            <Link to='people' className={active=="people"?"bg-blue-500 text-white rounded-md  py-2 px-4":""}>
            <div className='flex items-center gap-x-1.5  text-lg font-medium font-int '><LuBarChartHorizontal className='text-base'/>People</div>
            </Link>
            </div>
           </div>
            
            <div className='flex items-center gap-x-1.5 text-third text-lg font-medium font-int '>Log Out</div>

        </div>
    </div>
  )
}

export default Sideber