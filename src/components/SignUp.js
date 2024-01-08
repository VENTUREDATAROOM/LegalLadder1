

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons'
import { Link, } from 'react-router-dom'
import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const SignUp = () => {


  const navigate = useNavigate();

  const [username, setUserName] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onHandleClick() {

    if (!username || !name || !company || !email || !password) {
      // alert('Please fill out all fields');
      toast.error('Alert: Please fill out all fields !', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000
      });
      return;
    }

    console.log({ username, name, company, email, password });
    let data = { username, name, company, email, password };



    fetch("http://159.89.172.204:7009/auth/registerToApp", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3ODAwMjYzNDgxIiwiZXhwIjoxNzAyMzk5MzEyLCJpYXQiOjE3MDIzODEzMTJ9.q07fwkzuoCx3zm_USMyexjEfo7c-KPzWCZomdnlduJSCfFPHZlZw4ZpWKNCXlc5UbEei9boCXeSX__u_CAXbtg'
      },
      body: JSON.stringify(data)
      

    }).then((responseOfTheAPI) => {
      responseOfTheAPI.json().then((resp) => {
        console.log("resp", resp);
        // localStorage.setItem("user-info", JSON.stringify(resp));
        

        // navigate('/loginpage');
        
        if(resp.customcode == 201){
          console.log(resp.message)
          // alert(resp.message);
          toast.warning(`${resp.message}`,{
            position: toast.POSITION.TOP_CENTER,
            autoClose : 3000
          })
        } else if(resp.status == 200 ){
          localStorage.setItem("user-info", JSON.stringify(resp));
          alert(resp.message);
          // toast.success(`${resp.message}`,{
          //   position: toast.POSITION.TOP_CENTER,
          //   autoClose: 3000
          // })
          navigate('/loginpage');
        } 
        
      })
     
    })

    

    
  };



  return (
    <div className="">
      <div className="container md:flex  bg-gray-200 min-h-screen  items-center justify-center md:space-x-5 lg:space-x-0 ">
        <div className="left md:w-1/3 lg:w-1/4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 bg-blue-700 rounded-lg fill-white text-white my-4 stroke-1 p-1 ">
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
            <p className="mt-4 space-x-6 font-sans, font-serif ,font-mono">
              <span className=' text-xl'>GUMROAD</span>
              <span className="font-extralight">Raycast</span>
              <span className=' text-xl'>strapi</span>
            </p>
          </div>

        </div>

        <div className="right bg-white px-8 py-3 rounded-md sm:w-auto">
          <p className="font-bold text-xl">Let's create your free account.</p>
          <p className="font-semibold">Signing up for Legal Ladder is supar fast and easy.</p>
          {/* <p className="border-2 w-1/2 rounded px-2 mt-2 font-bold">No credit card required</p> */}
          <button className='font-bold border py-1  mt-2 rounded text-sm px-2'>No credit card required</button>
          <div className='mt-3'>
            <span><button className="btn border-2 rounded-md px-4 py-1 my-2 md:my-0"> <FontAwesomeIcon className='text-xs ' icon={faGoogle} />
              <span className='mx-2 text-sm font-medium'>Sign in with Google</span></button> <button className="btn border-2 rounded-md px-5 py-1"><FontAwesomeIcon className='' icon={faApple} /><span className='mx-2 text-sm font-medium'>Sign in with Apple</span></button> </span>
          </div>
          <p className='mt-3 text-center'>or</p>


          <div>

            <p>Mobile Number</p>
            <input className='px-4 my-2 py-2 border-2 w-full	rounded border-1 border-gray-200   outline-blue-500' value={username} onChange={(e) => { setUserName(e.target.value) }} type="text" placeholder='Enter Mobile Number' required />
            <p>Name</p>
            <input className='px-4 my-2 py-2 border-2 w-full	rounded border-1 border-gray-200   outline-blue-500' value={name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder='Enter full name' required />
            <p>Company name</p>
            <input className='px-4 my-2 py-2 border-2 w-full	rounded border-1 border-gray-200  outline-blue-500' value={company} onChange={(e) => { setCompany(e.target.value) }} type="text" placeholder='Enter company name' required />
            <p>Email</p>
            <input className='px-4 my-2 py-2 border-2 w-full	rounded  border-1 border-gray-200  outline-blue-500' value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder='Enter email address' required />
            <p>Password</p>
            <input className='px-4 my-2 py-2 border-2 w-full	rounded  border-1 border-gray-200  outline-blue-500' value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder='Enter password' required />
          </div>
          <p className='mb-3 font-light'>I agree to the <u>Terms of Use</u>,<u>DPA</u> and <u>Privacy notice</u> upon signup</p>
          
            <button onSubmit={onHandleClick} onClick={onHandleClick} type='button' className="btn border-2 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded">Start using legal ladder</button> <span className='text-sm'>Already have an account?</span>

            <button className="btn text-blue-500 hover:text-blue-600 font-semibold text-sm">
              <Link to='/loginpage'> Login</Link>
            </button>
          




        </div>
      </div>
      <ToastContainer />


    </div>



  )
}

export default SignUp