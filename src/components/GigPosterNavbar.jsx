import React from 'react'
import { Link, NavLink } from 'react-router'

const GigPosterNavbar = () => {
    return (
        <div className=' bg-white/10 backdrop-opacity'>
            <div className='flex border-b w-[100%] border-gray-300'>
            <NavLink
                    to="/dashboard/gigs"
                    className={({ isActive }) =>
                        `text-center py-4 w-[50%] font-bold hover:bg-gray-200 ${
                            isActive ? "bg-gray-300 text-navyblue font-bold" : ""
                        }`
                    }
                >
                    All Gigs
                </NavLink>

                {/* NavLink for Gigs with Bids */}
                <NavLink
                    to="/dashboard/bidded-gigs"
                    className={({ isActive }) =>
                        `text-center py-4 w-[50%] font-bold hover:bg-gray-200 ${
                            isActive ? "bg-gray-300 text-navyblue font-bold" : ""
                        }`
                    }
                >
                    Gigs with Bids
                </NavLink>

            </div>
        </div>
    )
}

export default GigPosterNavbar