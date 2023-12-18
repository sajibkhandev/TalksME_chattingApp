import React, { useEffect,createRef} from 'react'
import { getAuth, signOut,updateProfile  } from "firebase/auth";
import { getStorage, ref, uploadString,getDownloadURL } from "firebase/storage";
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
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { useState } from 'react';
import { Dna } from 'react-loader-spinner'
import { Bars } from 'react-loader-spinner'






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



const Sideber = () => {
  const storage = getStorage();

     let location=useLocation()
     let active=location.pathname.replace("/","")

     let dispatch=useDispatch()
      let data=useSelector((state)=>(state.sajib.value))
      const auth = getAuth();
      let navigate=useNavigate()

      let [loader,setLoader]=useState(false)
      let [condition,setCondition]=useState(true)

      const [image, setImage] = useState("");
  const [cropData, setCropData] = useState("#");
  const cropperRef = createRef();


  // modal state
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
      setCondition(true)
    }

    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#000';
    }

    function closeModal() {
      setIsOpen(false);
    }
  let handleLogOut=()=>{
    signOut(auth).then(() => {
      dispatch(activeuser(null))
      localStorage.removeItem("users")
      navigate('/')
    }).catch((error) => {
      // An error happened.
    });

  }

   const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    setLoader(true)
    if (typeof cropperRef.current?.cropper !== "undefined") {
      const storageRef = ref(storage, data.uid);
      uploadString(storageRef, cropperRef.current?.cropper.getCroppedCanvas().toDataURL(), 'data_url').then((snapshot) => {
        console.log('Uploaded a data_url string!',snapshot);
        getDownloadURL(storageRef).then((downloadURL) => {
          console.log('File available at', downloadURL);
          updateProfile(auth.currentUser, {
            photoURL: downloadURL
          }).then(()=>{
            console.log("sajib");
            localStorage.setItem("users",JSON.stringify({...data,photoURL:downloadURL}))
            dispatch(activeuser({...data,photoURL:downloadURL}))
            setImage("")
            setLoader(false)
            setCondition(false)


          })
        });
      });

      ;
    }
  };

     useEffect(()=>{
        if(data==null){
          navigate('/')
        }
    
      },[])
    
    return (
        <div className='bg-[#E0E6FB] border-r-[3px] border-solid border-white rounded h-screen w-[180px]'>
        <div className='flex flex-col items-center justify-around h-full'>
           <div>
           <div  className='w-[120px] h-[134px] bg-[#FFFFFF] border-[4px] border-solid border-[#F0F3FD] rounded-xl flex flex-col items-center drop-shadow-2xl'>
                <div className='relative' onClick={openModal}>
                    <Image  src={data.photoURL} className='rounded-full w-[65px] h-[65px] mt-4'/>
                  
                </div>

               
                <div className=''></div>
                <p onClick={openModal} className='font-mon font-bold text-[#647FE8] pt-2 text-sm rounded-md cursor-pointer bg-'>Sajib Khan</p>
                        
               
            </div>
            {condition&&
           
           <Modal
           isOpen={modalIsOpen}
           onAfterOpen={afterOpenModal}
           onRequestClose={closeModal}
           style={customStyles}
           contentLabel="Example Modal"
         >
           <h2 className='text-black text-lg font-normal mb-3' ref={(_subtitle) => (subtitle = _subtitle)}>Update Your Profile</h2>
           
            {image?
            <div className='w-[100px] h-[100px] rounded-full overflow-hidden bg-[#a9a9a9]'>
            <div
          className="img-preview w-[100px] h-[100px] "
          />
           </div>
            :
            <img className='w-[100px] h-[100px] rounded-full' src={data.photoURL} alt="" />
            }
             <input className='mt-3' type='file' onChange={onChange}/>
            {image&&
            
            <div className='w-[450px]'>
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
            checkOrientation={false} 
            guides={true}
            />
           </div>

            }
            {
             image&&
             (loader?
             <button className='buttonForLoder'>
               <Bars
               height="50"
               width="100"
               color="blue"
               ariaLabel="bars-loading"
               wrapperStyle={{
               marginTop:"15px",
               padding:'px 0px',
                 
                 marginTop:"20px",
                 marginLeft:"180px" 
               }}
               wrapperClass=""
               visible={true}
             />
             </button>
             :
           <div className='text-center flex justify-center gap-x-2 mt-4'>
             <button onClick={closeModal} className='bg-blue-500 py-1.5 text-base text-white px-4 rounded-md'>Close</button>
           <button onClick={getCropData} className='bg-red-500 py-1.5 text-base text-white px-4 rounded-md'>Upload</button>
           </div>)

            }
              
            
          
         </Modal>
           
            }
            
          

           
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