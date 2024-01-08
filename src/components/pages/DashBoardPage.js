import React from "react";
import { useState ,useEffect } from "react";


const DashBoardPage = () => {

    const [userName,setUserName] = useState();


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
        //   setUserName(resp.result.name);
          const firstName = resp.result.name.split(' ')[0];
        setUserName(firstName);
        })
      })
   },[]);
    return (
        <div className="">
            <div>
                <nav className="bg-white p-6 border ">
                    <div className="flex justify-between ">
                        <div>
                            <ul className="flex gap-x-3">
                                <li className="text-gray-500">Dashboards</li>
                                <li className="text-gray-400">/</li>
                                <li>Home</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="flex gap-x-4  ">
                                <li><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512" className="mt-1 bg-gray-200 rounded-full">
                                    <path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z" /></svg>
                                </li>
                                <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 fill-gray-200">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                </svg>

                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div>
            <div className="p-6 font-semibold">
                <p>Hi{userName ? ` ${userName}` : ''}, Good morning 😊 </p>
            </div>
            <div className=" md:grid grid-cols-3 divide-x mx-6 gap-x-4 space-y-2 md:space-y-0 lg:space-y-0 ">
                <div className="flex  border bg-purple-100/75 p-4 gap-x-3 rounded-md">
                    <div>
                        <h1 className="bg-purple-200/50 p-2 mt-1 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-purple-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                        </h1>
                    </div>
                    <div >
                        <h1 className="font-bold">File your GST return</h1>
                        <p className="text-sm text-gray-600 lg:w-2/3  ">Lorem Ipsum has been the industry's standard dummy text.</p>
                    </div>
                </div>
                <div className="flex  border bg-sky-100/75 p-4 gap-x-3 rounded-md">
                    <div>
                        <h1 className="bg-sky-200/50 p-2 mt-1 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-sky-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                        </h1>
                    </div>
                    <div >
                        <h1 className="font-bold">Create a proposal</h1>
                        <p className="text-sm text-gray-600 lg:w-2/3  ">Lorem Ipsum has been the industry's standard dummy text.</p>
                    </div>
                </div>
                <div className="flex  border bg-orange-100/75 p-4 gap-x-3 rounded-md">
                    <div>
                        <h1 className="bg-orange-200/50 p-2 mt-1 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-orange-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                        </h1>
                    </div>
                    <div >
                        <h1 className="font-bold">E-sign verification</h1>
                        <p className="text-sm text-gray-600 lg:w-2/3  ">Lorem Ipsum has been the industry's standard dummy text.</p>
                    </div>
                </div>

            </div>
            <div className="mt-8 mx-6 font-bold">
                <p>Your recent documents</p>
            </div>
            <div className="flex flex-col items-center justify-center mt-2 border rounded mx-6 gap-y-4 py-20">
                <p className="bg-sky-200/50 p-2 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-sky-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                </p>
                <p className="font-medium text-center">You don't have any saved document yet</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded">Create a document</button>
            </div>
            </div>
        </div>
    )

}

export default DashBoardPage;