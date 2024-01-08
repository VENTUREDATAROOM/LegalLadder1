import React from 'react'

import { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotate,faCode, faPen,faMagnifyingGlass, faBolt} from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';


export default function DashBoard() {

  const [userEmail, setUserEmail] = useState('');

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
      setUserEmail(resp.result.email);
    })
  })
  },[]);
  
  // Fetch user information from local storage on component mount
  // useEffect(()=>{
  //     const storedUserInfo =localStorage.getItem('email');
  //     console.log(storedUserInfo);
  //     if (storedUserInfo){
  //       setUserEmail(storedUserInfo);
  //     }

  // },[]);


  return (
    <div className="">
      <div className="container md:flex bg-gray-200 min-h-screen  items-center justify-center">
        <div className="left md:w-1/3 lg:w-1/4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 bg-blue-700 rounded text-white my-4" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>


          <p className="text-xl font-bold">Why Legal Ladder?</p>

          <div className="mt-4 mx-2 space-y-2 font-light ">
            <p ><FontAwesomeIcon icon={faBolt} /><span className='mx-2 '>World-class Performance</span></p>
            <p><FontAwesomeIcon icon={faRotate} /><span className='mx-2 '>Notion auto-syncing</span></p>
            <p><FontAwesomeIcon icon={faCode} /><span className='mx-2 '>Customoze without code</span></p>
            <p><FontAwesomeIcon icon={faMagnifyingGlass} /><span className='mx-2 '>Optimize for SEO</span></p>
            <p><FontAwesomeIcon icon={faPen} /><span className='mx-2 '>Focous on your content</span></p>
          </div>

          <div className="mt-10">
            <p className="font-light">Trusted by teams at</p>
            <p className="mt-2 space-x-6">
              <span className="font-extralight">Harmony</span>
              <span className='font-font-semibold text-xl'>Circle</span>
              <span className='font-semibold'>clubehouse</span>
            </p>
            <p className="mt-4 space-x-6 font-sans, font-serif, font-mono">
              <span className=' text-xl'>GUMROAD</span>
              <span className="font-extralight">Raycast</span>
              <span className=' text-xl'>strapi</span>
            </p>
          </div>

        </div>

        <div className="right w-96 bg-white p-8 h-screen ">
          <p className='font-bold mt-48 text-lg'>Check your email.</p>
          <div className=' mt-2   font-normal '>
           <p>An email with activation link has been sent to <strong className='font-medium  '>{userEmail}</strong> please verify within 48hours to continue using Legal ladder</p>
          </div>

         
          <button className='mt-4 mb-48 p-2 bg-blue-700 text-white rounded px-8 '>
            <Link to='/homepage'>
              Go to my dashboard
            </Link>
            </button>
          
          
          
        </div>
      </div>
    </div>

  );
}

