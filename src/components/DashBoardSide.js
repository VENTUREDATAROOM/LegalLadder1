import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faStop } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";



const DashBoardSide = () => {

     const [open, setOpen] = useState(true);


     const [userEmail, setUserEmail] = useState('');
     const [username, setUserName] = useState('');

     useEffect(()=>{
          fetch("http://159.89.172.204:7009/auth/profileData?userCode=7800263494",{
          method:"POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application.json',
          },
        }).then((result)=>{
          result.json().then((resp)=>{
            console.log("resp",resp);
            setUserName(resp.result.name);
            setUserEmail(resp.result.email)
          })
        })
     },[]);
        

     // Fetch user information from local storage on component mount
     // useEffect(() => {
     //      const storedUserInfo = localStorage.getItem('email');
     //      if (storedUserInfo) {
     //           setUserEmail(storedUserInfo)
     //             // setUserName(userInfo.result)
                
     //      }


     // }, []);

     return (
          <div>
               <div className={`${open ? "w-68" : "w-20"} duration-300  p-5 pt-8 h-screen bg-blue-950 relative`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                         className={`absolute cursor-pointer  -right-3 top-3  rounded-md bg-blue-500 text-white  w-7 p-1  border-1 border-blue-950 ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} >
                         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"
                         />
                    </svg>
                    <div className='flex gap-x-4 items-center'>
                         <div className='border-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500'>
                              <h1 className={`cursor-pointer duration-500  p-3  text-white text-xs font-bold `}>{username.substring(0, 1)}{username.length > 1 && username.charAt(Math.floor(username.length / 2))}</h1>
                         </div>
                         <div className={`duration-300 ${!open && "scale-0"}`}>
                              <p className='text-white w-48'>{username}<span><FontAwesomeIcon className='ml-4' icon={faChevronDown} /></span></p>
                              <p className='text-gray-300 text-sm '>{userEmail}</p>
                         </div>
                    </div>
                    <div className='mt-10'>

                         <ul className={`space-y-4 text-gray-400 cursor-pointer duration-300 `}>
                              <li className="hover:text-white "><Link to='/dashboardpage'><FontAwesomeIcon className='mx-2' icon={faStop} /><span className={`${!open && 'hidden'} origin-left duration-200 `}>Dashboard</span></Link></li>
                              <li className="hover:text-white "><Link to='/home'><FontAwesomeIcon className='mx-2' icon={faStop} /><span className={`${!open && 'hidden'} origin-left duration-200`}>Home</span></Link></li>
                              <li className="hover:text-white "><Link to='/documents'><FontAwesomeIcon className='mx-2' icon={faStop} /><span className={`${!open && 'hidden'} origin-left duration-200`}>Documents</span></Link></li>
                              <li className="hover:text-white "><Link to='/templets'><FontAwesomeIcon className='mx-2' icon={faStop} /><span className={`${!open && 'hidden'} origin-left duration-200`}>Templets</span></Link></li>
                              <li className="hover:text-white "><Link to='/forms'><FontAwesomeIcon className='mx-2' icon={faStop} /><span className={`${!open && 'hidden'} origin-left duration-200`}>Forms</span></Link></li>
                              <li className="hover:text-white "><Link to='/invoice'><FontAwesomeIcon className='mx-2' icon={faStop} /><span className={`${!open && 'hidden'} origin-left duration-200`}>Invoice Management</span></Link></li>
                              <li className="hover:text-white "><Link to='/filegst'><FontAwesomeIcon className='mx-2' icon={faStop} /><span className={`${!open && 'hidden'} origin-left duration-200`}>File GST Return</span></Link></li>
                              <li className="hover:text-white "><Link to='/createproposal'><FontAwesomeIcon className='mx-2' icon={faStop} /><span className={`${!open && 'hidden'} origin-left duration-200`}>Create Proposal</span></Link></li>
                              <li className="hover:text-white "><Link to='esign'><FontAwesomeIcon className='mx-2' icon={faStop} /><span className={`${!open && 'hidden'} origin-left duration-200`}>E-Sign Verification</span></Link></li>
                              <li className="hover:text-white "><Link to='/contact'><FontAwesomeIcon className='mx-2' icon={faStop} /><span className={`${!open && 'hidden'} origin-left duration-200`}>Contact</span></Link></li>
                              <li className="hover:text-white "><Link to='/reporting'><FontAwesomeIcon className='mx-2' icon={faStop} /><span className={`${!open && 'hidden'} origin-left duration-200`}>Reporting</span></Link></li>
                              <li className="hover:text-white "><Link to='/newdocument'><FontAwesomeIcon className='mx-2' icon={faStop} /><span className={`${!open && 'hidden'} origin-left duration-200`}>New Document</span></Link></li>

                         </ul>
                    </div>


               </div>
          </div>
     )
}
export default DashBoardSide;