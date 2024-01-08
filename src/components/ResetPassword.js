import React from 'react'


import { Link } from 'react-router-dom';

export default function ResetPassword() {
  return (
     <div className="">
     <div className="container md:flex bg-gray-200 min-h-screen items-center justify-center ">
       <div className="left md:w-1/3 lg:w-1/4">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 bg-blue-700 rounded-lg fill-white text-white my-4 stroke-1 p-1 " >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>


         <p className="text-xl font-bold">Why Legal Ladder?</p>

         <div className="mt-4  space-y-2 font-light ">
            <p className='flex'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" data-slot="icon" className="w-6 h-6 bg-white rounded-full p-1 stroke-1  ">
              <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
            </svg></span>
              <span className='mx-2 '>World-class Performance</span></p>
            <p className='flex'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" data-slot="icon" className="w-6 h-6 bg-white rounded-full p-1 stroke-1 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
            </span><span className='mx-2 '>Notion auto-syncing</span></p>
            <p className='flex'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" data-slot="icon" className="w-6 h-6 bg-white rounded-full p-1 stroke-1 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>
            </span><span className='mx-2 '>Customoze without code</span></p>
            <p className='flex'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" data-slot="icon" className="w-6 h-6 bg-white rounded-full p-1 stroke-1 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            </span><span className='mx-2 '>Optimize for SEO</span></p>
            <p className='flex'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" data-slot="icon" className="w-6 h-6 bg-white rounded-full p-1 stroke-1 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
            </svg>
            </span><span className='mx-2 '>Focous on your content</span></p>
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

       <div className="right bg-white p-8 rounded-md md:w-82 ">
         <p className="font-bold text-base ">Password link sent to email </p>
         <p className='mt-2  md:w-96'>An email with reset password link has been sent to <span className='font-semibold'>neerajsagar21@gmail.com.</span>Please check your email and follow instructions to reset your password</p>
        
         <span className='space-x-1 '>
           <button className="btn border-2 px-6 h-10 bg-blue-700 hover:bg-blue-800 text-white rounded mb-48 mt-4">
            <Link to='/loginpage'>
              Back to login
            </Link>
            </button> 
         </span>



       </div>
      </div>
    </div>

  );
}

