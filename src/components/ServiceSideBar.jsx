import React, { useState } from 'react'
import { SERVICEPROVIDERLINKS } from "../constants/index";
import { Link, NavLink } from "react-router";
import { CrossIcon, XIcon } from 'lucide-react';
import CreateGig from '../pages/gig-provider/CreateGig';
import Logo from '../assets/images/transparent-logo.png'
import Profile from '../assets/images/profile-image.png'
import ServiceProfile from '../assets/images/Dimitri-Obama.png'

const ServiceSideBar = () => {

  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <>
    <div>
      <div className="flex flex-col w-64 gap-y-6 bg-gray-500 h-screen px-5 py-5 fixed left-0 top-0">
        <span className=" text-4xl font-extrabold tracking-wide text-white flex justify-center font-mono">
          <img src={Logo} alt="" />
        </span>
        <div className="flex flex-col gap-y-3">
          {SERVICEPROVIDERLINKS.map((link, index) => {
            return (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  `text-white hover:bg-[#ecd282] hover:text-black px-3 py-2 w-full rounded-md flex gap-x-2 items-center ${isActive && "border-[#ecd282] border-3  !text-white font-bold"
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

        {/* <div className='mt-5'>
          <Link
            to={'create-bid'}
            className="bg-[#ecd282] text-[#0A0F2C] font-bold px-15 py-3 rounded-full mt-40"
          >
            Create Gig
          </Link>
        </div> */}

        <Link to={'/services/gigs/profile'} className='relative flex gap-x-3 px-3 py-2 mt-auto justify-start items-center bg-gray-800 rounded-full bg'>
          <div className='w-13 h-13 rounded-full bg-[url(assets/images/Dimitri-Obama.png)] bg-cover'></div>
          <div className='flex flex-col'>
            <h3 className='font-semibold font-nunito-sans text-white'>{user.userName}</h3>
            <h3 className='font-nunito-sans text-gray-500 text-md'>{user.role}</h3>
          </div>
        </Link>
        {/* <Link to={'/'} className="text-blue-950 bg-white hover:bg-[#424f74] hover:text-white px-3 py-2 w-full rounded-md flex justify-center">Logout</Link> */}
      </div>
    </div>
    </>
  )
}

export default ServiceSideBar