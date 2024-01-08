import React, { useState } from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// toast.configure();

export default function LoginPage() {


  const navigate = useNavigate();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  const handleLogin = async () => {

    console.log({ email, password });
    let data = { email, password }

    console.log(data);


    //perform api calling to login end point using fetch or axios
    const response = await fetch("http://159.89.172.204:7009/auth/authenticatebyjson", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",

      },
      body: JSON.stringify(data),
      // username=7800263481&password=Tauhid%40321
    });


    //Handle response



    const resp = await response.json();
    console.log('resp', resp);



    if (resp.status == 200) {
      localStorage.setItem('user-info', JSON.stringify(resp));
        // localStorage.setItem('email', email);



      navigate('/dashboard');
    } else {
      if (resp.customcode == 1001) {
        console.log(resp.message);

        toast.error('Alert: Wrong email address !', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000
        });

        //set email error and email mesasage
        setEmailError(true);
        setErrorMessage('Please enter valid email id.');

      }
      // toast.error("error in login");
    }



  };


  return (
    <div className="">
      <div className="container bg-gray-200 min-h-screen items-center justify-center  md:flex   md:space-x-5 lg:space-x-0 ">
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

        <div className="right bg-white p-8 rounded-md  ">
          <p className="font-bold text-xl">Login to Legal Ladder </p>
          <div className='mt-8 '>
            <span><button className="btn border-2 rounded-md px-4 py-1 my-2 md:my-0"> <FontAwesomeIcon className=' text-xs' icon={faGoogle} />
              <span className='mx-2 text-sm font-medium'>Sign in with Google</span></button> <button className="btn border-2 rounded-md px-5 py-1"><FontAwesomeIcon className='' icon={faApple} /><span className='mx-2 text-sm font-medium'>Sign in with Apple</span></button> </span>
          </div>
          <p className='mt-3 text-center'>or</p>
          <div className='mt-2 mb-4 '>

            <p className='my-2'>Email</p>
            <input className={`px-4 py-2 border-2 w-full rounded border-1 outline-blue-500 ${emailError ? 'border-red-500' : 'border-gray-200'}`} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email address' />
            {emailError && <p className='text-red-500'>{errorMessage}</p>}
            {/* <p>error message will look like this</p> */}
            <p className='flex justify-between mt-6 '><span >Password</span><span className='text-blue-500 hover:text-blue-600 cursor-pointer font-semibold'><Link to='/forgetpassword'>Forget Password?</Link></span></p>

            <input className='px-4 my-2 py-2 border-2 w-full	rounded  border-1 border-gray-200 outline-blue-500' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' />
          </div>
          <span className='space-x-1 '>

            <button onClick={handleLogin} className="btn border-2 px-8 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded ">
              Login
            </button>


            <span className='text-sm font-semibold '>Doesn't have an account?</span>


            <button className="btn text-blue-500 hover:text-blue-600 font-semibold text-sm ">
              <Link to='/'>signup</Link>
            </button>


          </span>
        </div>
      </div>
      <ToastContainer />

    </div>

  );
}

