import { ArrowLeftIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const ServiceProfileNavbar = () => {
    const user = JSON.parse(localStorage.getItem('user'))
  return (
    <div className=' bg-white/10 backdrop-opacity '>
            <div className='border-b w-[100%] border-gray-300 flex items-center gap-x-3 '>
                <Link to={'/services/gigs'} className=' rounded-full hover:bg-gray-300 p-2'>
                <ArrowLeftIcon />
                </Link>
                <div className='font-nunito-sans py-1'>
                    <p className='text-sm md:text-lg lg:text-xl font-bold leading-7 text-gray-600'>{user?.userName}</p>
                    <p className='text-gray-500 text-xs md:text-sm lg:text-md'>20 posted gigs</p>
                </div>
            </div>
        </div>
  )
}

export default ServiceProfileNavbar