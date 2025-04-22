import React from 'react'
import { Link } from 'react-router'

const GigPosterNavbar = () => {
    return (
        <div className=' bg-white/10 backdrop-opacity '>
            <div className='flex border-b w-[100%] border-gray-300'>
                <Link to={'/dashboard'} className='text-center py-4 w-[50%] font-bold hover:bg-gray-200'>All Gigs</Link>
                <Link to={'/dashboard'} className='text-center py-4 w-[50%] font-bold hover:bg-gray-200'>Gigs with Bids</Link>
            </div>
        </div>
    )
}

export default GigPosterNavbar