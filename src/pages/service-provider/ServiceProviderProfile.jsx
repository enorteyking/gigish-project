import React, { useEffect, useState } from 'react'
import { CalendarDays, Edit, LocateIcon, MapPin, PlusIcon } from 'lucide-react'
import { Link } from 'react-router'
import GigPostCard, { formatDateTime } from '../../components/GigPostCard'
import GigPosterNavbar from '../../components/GigPosterNavbar'
import SubmitButton from '../../components/SubmitButton'
import GigSearchBar from '../../components/GigSearchBar'
import ProfileNavbar from '../../components/ProfileNavbar'
import GigRightSideBar from '../../components/GigRightSideBar'
import ServiceNavbar from '../../components/ServiceNavbar'
import ServiceProfileNavbar from '../../components/ServiceProfileNavbar'
import ServiceRightSideBar from '../../components/ServiceRightSideBar'

const ServiceProviderProfile = () => {
    const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')));

    // Listen for changes in localStorage and update the user state
    useEffect(() => {
        const handleStorageChange = () => {
            const updatedUser = JSON.parse(localStorage.getItem('user'));
            setUser(updatedUser);
        };
        const updatedUser = JSON.parse(localStorage.getItem('user'));

        // Add event listener for storage changes
        window.addEventListener('storage', handleStorageChange);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <>
            <div className="flex">
                <div className=' w-[18.77%]'></div>
                <div className=' w-[56%]'>
                    <div>
                        <ServiceProfileNavbar />
                    </div>
                    <div className='bg-gray-50'>
                        <div className='h-45 r bg-[url(assets/images/decor2.png)] bg-cover bg-gray-100 relative mb-3'>

                        </div>
                        <div>
                            <div className='h-35 w-35 border-4 border-white rounded-full absolute top-40 left-70 z-0 bg-[url(assets/images/Dimitri-Obama.png)] bg-cover shadow-lg shadow-gray-400'>
                            </div>
                        </div>
                        <Link to={'edit'} className='bg-gray-100 py-2 ml-auto mr-4 border border-primary text-primary rounded-full w-[15%] flex items-center justify-center hover:cursor-pointer'>
                            <p className='font-nunito-sans font-extrabold text-center'>Edit profile</p>
                        </Link>
                        <div className='mx-5 mt-10 font-nunito-sans flex flex-col gap-y-3'>
                            <div >
                                <p className='text-sm md:text-xl lg:text-2xl font-bold leading-6'>{user.userName}</p>
                                <p className='text-sm md:text-md lg:text-lg leading-7 text-gray-600'>Role: {user?.role}</p>
                                <p className='text-sm md:text-md lg:text-lg leading-7 text-gray-600'>Email: {user?.email}</p>
                            </div>
                            <div className='flex flex-wrap gap-x-5 items-center text-gray-500'>
                                <div className='flex gap-x-1 items-center '>
                                    <MapPin className='size-4  ' />
                                    <p className='text-sm md:text-md lg:text-lg leading-7'>Teshie-Lascala</p>
                                </div>
                                <div className='flex gap-x-1 items-center '>
                                    <CalendarDays className='size-4 ' />
                                    <p className='text-sm md:text-md lg:text-lg leading-7'>Joined {formatDateTime(user?.createdAt)}</p>
                                </div>
                            </div>
                            <Link to={'/login'} className='hover:bg-beige py-2 ml-auto hover:text-navyblue rounded-full w-[15%] flex items-center justify-center hover:cursor-pointer bg-navyblue text-beige'>
                                <p className='font-nunito-sans font-normal text-center'>Logout</p>
                            </Link>
                        </div>
                        <div className='mt-9'>
                            <div className='flex border-b border-t w-[100%] border-gray-300 text-gray-800'>
                                <Link to={'/services/gigs'} className='text-center border-r border-gray-300 py-4 w-[50%] font-bold hover:bg-gray-200'>All Gigs</Link>
                                <Link to={'/services/bidded-gigs'} className='text-center py-4 w-[50%] font-bold hover:bg-gray-200'>Gigs with Bids</Link>
                            </div>
                        </div>

                    </div>

                </div>
                <div className=' w-[25.2%] border-l border-gray-300'>
                    <div>
                        <ServiceRightSideBar />
                    </div>
                </div>

            </div>
        </>
    )
}

export default ServiceProviderProfile;