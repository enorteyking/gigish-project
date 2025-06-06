import { ArrowLeftIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const ProfileNavbar = () => {
    localStorage.getItem('user')
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <div className=' bg-white/10 backdrop-opacity '>
            <div className='border-b w-[100%] border-gray-300 flex items-center gap-x-3 '>
                <Link to={'/dashboard/gigs'} className=' rounded-full hover:bg-gray-300 p-2'>
                <ArrowLeftIcon />
                </Link>
                <div className='font-nunito-sans py-1'>
                    <p className='text-sm md:text-xl lg:text-2xl font-bold leading-7'>{user.userName}</p>
                    <p className='text-gray-500 text-xs md:text-sm lg:text-md'>- posted gigs</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileNavbar