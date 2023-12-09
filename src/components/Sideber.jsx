import React, { useEffect,useState, createRef  } from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import profileImg from '../assets/profileImg.png'
import Image from '../components/Image'
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { TiHomeOutline } from "react-icons/ti";
import { IoChatboxOutline } from "react-icons/io5";
import { BiGroup } from "react-icons/bi";
import { LuUser2 } from "react-icons/lu";
import { LuBarChartHorizontal } from "react-icons/lu";
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { activeuser } from '../slices/userSlice';
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const defaultSrc =
  "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";

const Sideber = () => {
     let location=useLocation()
     let active=location.pathname.replace("/","")

     let dispatch=useDispatch()
  let data=useSelector((state)=>(state.sajib.value))

    const [image, setImage] = useState(defaultSrc);
  const [cropData, setCropData] = useState("#");
  const cropperRef = createRef();

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  
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
        <div className='bg-[#E0E6FB] border-r-[3px] border-solid border-white rounded h-screen w-[180px]'>
        <div className='flex flex-col items-center justify-around h-full'>
           <div>
           <div  className='w-[100px] h-[114px] bg-[#FFFFFF] rounded-lg flex flex-col items-center drop-shadow-xl'>
                <div onClick={openModal} className='relative'>
                    <Image  src={profileImg} className='rounded-full w-[52px] h-[52px] mt-4'/>
                    <BiLogoLinkedinSquare  className=' border-0 absolute -bottom-[3px] -right-[6px] bg-white text-[#0D63C6]'/>
                </div>

               
                <div className='w-[68px] h-[6px] rounded bg-[#F1F2F6] mt-2.5'></div>
                <p  onClick={openModal} className='font-mon font-bold text-black text-xs pt-1.5 cursor-pointer'>Sajib Khan</p>
                        
               
            </div>

            {/* Modal */}
            <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      <div className='w-[450px]'>

      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
         Upload Your Profile</h2>
        {/* <div>I am a modal</div> */}
        <div className='w-[100px] h-[100px] overflow-hidden rounded-full'>
        <div
            className="img-preview w-[100px] h-[100px] rounded-full "
           
          />
        </div>
        
        
        <form>
          <input type='file'/>
          <Cropper
          ref={cropperRef}
          style={{ height: 400, width: "100%" }}
          zoomTo={0.5}
          initialAspectRatio={1}
          preview=".img-preview"
          src={image}
          viewMode={1}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={false}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
          guides={true}
        />
        
        <button onClick={closeModal}>close</button>
        </form>
      </div>
      </Modal>

            {/* Modal */}
            <div className='flex flex-col gap-y-8 items-center mt-14'>
            <Link to='/home' className={active=="home"?"bg-[#2F5DE6] text-white rounded-md  py-2 px-4 w-[110px]":""}>
            <div className='flex items-center gap-x-1.5  text-lg font-medium font-int '><TiHomeOutline  className='text-lg'/> Home</div>
            </Link>
            <Link to='/chat' className={active=="chat"?"bg-[#2F5DE6] text-white rounded-md  py-2 px-4 w-[110px]":""}>
            <div className='flex items-center gap-x-1.5  text-lg font-medium font-int '> <IoChatboxOutline className='text-lg'/>Chat</div>
            </Link>
            <Link to='group' className={active=="group"?"bg-[#2F5DE6] text-white rounded-md  py-2 px-4 w-[110px]":""}>
            <div className='flex items-center gap-x-1.5  text-lg font-medium font-int '><BiGroup className='text-lg'/>Group</div>
            </Link>
            <Link to='friends' className={active=="friends"?"bg-[#2F5DE6] text-white rounded-md  py-2 px-4 w-[110px]":""}>

            <div className='flex items-center gap-x-1.5  text-lg font-medium font-int '><LuUser2 className='text-lg'/>Friend</div>
            </Link>
            <Link to='people' className={active=="people"?"bg-[#2F5DE6] text-white rounded-md  py-2 px-4 w-[110px]":""}>
            <div className='flex items-center gap-x-1.5  text-lg font-medium font-int '><LuBarChartHorizontal className='text-base'/>People</div>
            </Link>
            </div>
           </div>
            
            <div onClick={handleLogOut} className='flex items-center gap-x-1.5 text-third text-lg font-medium font-int cursor-pointer'>Log Out</div>

        </div>
    </div>
  )
}

export default Sideber