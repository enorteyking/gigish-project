import React, { useState } from 'react'
import K from "../constants";
import { Link, NavLink } from "react-router";
import { CrossIcon, XIcon } from 'lucide-react';
import CreateGig from '../pages/gig-provider/CreateGig';

const GigSidebar = () => {
  

  return (
    <div>
      <div className="flex flex-col w-64 gap-y-6 bg-[#EEAA77] h-screen px-5 py-5 fixed left-0 top-0">
        <span className=" text-4xl font-extrabold tracking-wide text-white flex justify-center font-mono">
          Gig<span className="text-blue-950 italic">Ish</span>
        </span>
        <div className="flex flex-col gap-y-3">
          {K.NAVLINKS.map((link, index) => {
            return (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  `text-white hover:bg-white hover:text-black px-3 py-2 w-full rounded-md flex gap-x-2 items-center ${isActive && "bg-white border-2 border-black !text-black font-bold"
                  }`
                }
                title={link.name}
                end
              >
                <link.icon />
                <span>{link.name}</span>
              </NavLink>
            );
          })}
        </div>

        <div className='mt-5'>
          <Link
            to={'create-gig'}
            className="bg-blue-600 text-white font-bold px-15 py-3 rounded-full mt-40"
          >
            Create Gig
          </Link>
        </div>

        <div className='relative flex gap-x-3 px-3 py-2 mt-25 justify-start items-center hover:bg-gray-700/10 rounded-full'>
          <img src="" alt="" className='w-13 h-13 rounded-full bg-gray-300' />
          <div className='flex flex-col'>
            <h3 className='font-semibold font-nunito-sans'>King</h3>
            <h3 className='font-nunito-sans text-gray-600 text-md'>@Emma_King</h3>
          </div>
        </div>
        {/* <Link to={'/'} className="text-blue-950 bg-white hover:bg-[#424f74] hover:text-white px-3 py-2 w-full rounded-md flex justify-center">Logout</Link> */}
      </div>
    </div>
  )
}

export default GigSidebar