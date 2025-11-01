import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { GoSidebarExpand } from "react-icons/go";
import { FaGraduationCap } from "react-icons/fa";

const Home = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    return (
        <>
            <div className="bg-gray-100 h-screen flex">
                <div className={`w-64 h-screen bg-[#3A7750] shadow ${sidebarOpen ? "translate-x-0" : "-translate-x-64"} lg:translate-x-0 fixed top-0 left-0 transition-transform duration-300 ease-in-out z-50 lg:static`}>
                    <div className="text-3xl flex justify-end p-2 text-[#F5C400] text-bold cursor-pointer lg:hidden" onClick={() => setSidebarOpen(false)}>
                        <GoSidebarExpand />
                    </div>
                    <div className="">
                        <h1 className="text-[#F5C400] text-2xl font-bold text-center py-18 ">Alumni Portal</h1>
                        <ul className="flex flex-col gap-6 px-6 mb-10">
                            <li className="text-[#F5C400]  hover:bg-[#FFD94A] cursor-pointer">Networking Hub</li>
                            <li className="text-[#F5C400]  hover:bg-[#FFD94A] cursor-pointer">Job Portal</li>
                            <li className="text-[#F5C400]  hover:bg-[#FFD94A] cursor-pointer">Donation</li>
                            <li className="text-[#F5C400]  hover:bg-[#FFD94A] cursor-pointer">Events & Reunions</li>
                            <li className="text-[#F5C400] hover:bg-[#FFD94A] cursor-pointer">Success Stories</li>
                            <li className="text-[#F5C400]  hover:bg-[#FFD94A] cursor-pointer">Feedback</li>
                        </ul>   
                    </div>
                    
                </div>


                <nav className="flex-1">
                    <div className="bg-white flex justify-between items-center p-4 shadow-md ">
                        <button className="text-2xl font-bold p-2 lg:hidden" onClick={() => setSidebarOpen(true)}>
                            <IoMenu />
                        </button>
                        <h1 className="font-poppins text-2xl font-bold ">
                            Welcome to Alumni Association
                        </h1>
                        <div className="bg-gray-300 w-10 h-10 rounded-full flex">

                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Home