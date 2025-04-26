import React from 'react'
import { CalendarDays, Edit, LocateIcon, MapPin, PlusIcon } from 'lucide-react'
import { Link } from 'react-router'
import GigPostCard from '../../components/GigPostCard'
import GigPosterNavbar from '../../components/GigPosterNavbar'
import SubmitButton from '../../components/SubmitButton'
import GigSearchBar from '../../components/GigSearchBar'
import ProfileNavbar from '../../components/ProfileNavbar'
import GigRightSideBar from '../../components/GigRightSideBar'
import ServiceNavbar from '../../components/ServiceNavbar'
import ServiceProfileNavbar from '../../components/ServiceProfileNavbar'
import ServiceRightSideBar from '../../components/ServiceRightSideBar'

const ServiceProviderProfile = () => {
    const user = {
        name: 'Emmanuel Nortey-King',
        role: 'gigPoster',
        email: 'emmanuel@example.com',
        phone: '+233 123 456 789',
        location: 'Accra, Ghana',
        image: 'https://via.placeholder.com/120' // replace with real image URL
    };

    return (
        <>
            <div className="flex">
                <div className=' w-[18.77%]'></div>
                <div className=' w-[56%]'>
                    <div>
                        <ServiceProfileNavbar />
                    </div>
                    <div className='bg-gray-50'>
                        <div className='h-45 r bg-[url(assets/images/image3.png)] bg-cover bg-gray-100 relative mb-3'>

                        </div>
                        <div>
                            <div className='h-35 w-35 border-4 border-white rounded-full absolute top-40 left-70 z-0 bg-[url(assets/images/image.png)] bg-cover shadow-lg shadow-gray-400'>
                            </div>
                        </div>
                        <Link to={'edit'} className='bg-gray-100 py-2 ml-auto mr-4 border border-primary text-primary rounded-full w-[15%] flex items-center justify-center hover:cursor-pointer'>
                            <p className='font-nunito-sans font-extrabold text-center'>Edit profile</p>
                        </Link>
                        <div className='mx-5 mt-10 mb-22 font-nunito-sans flex flex-col gap-y-3'>
                            <div >
                                <p className='text-sm md:text-xl lg:text-2xl font-bold leading-6'>King</p>
                                <p className='text-sm md:text-md lg:text-lg leading-7 text-gray-600'>Role: Gig Poster</p>
                                <p className='text-sm md:text-md lg:text-lg leading-7 text-gray-600'>Email: nkingemma@gmail.com</p>
                            </div>
                            <div className='flex flex-wrap gap-x-5 items-center text-gray-500'>
                                <div className='flex gap-x-1 items-center '>
                                    <MapPin className='size-4  ' />
                                    <p className='text-sm md:text-md lg:text-lg leading-7'>Accra, Greater-Accra, Ghana</p>
                                </div>
                                <div className='flex gap-x-1 items-center '>
                                    <CalendarDays className='size-4 ' />
                                    <p className='text-sm md:text-md lg:text-lg leading-7'>Joined March, 2025</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex border-b border-t w-[100%] border-gray-300 text-gray-800'>
                                <Link to={'/services/gigs'} className='text-center border-r border-gray-300 py-4 w-[50%] font-bold hover:bg-gray-200'>All Gigs</Link>
                                <Link to={'/services/bidded-gigs'} className='text-center py-4 w-[50%] font-bold hover:bg-gray-200'>Gigs with Bids</Link>
                            </div>
                        </div>
                    </div>

                </div>
                <div className=' w-[25.2%] border-l border-gray-300'>
                    {/* <div className='border-b border-gray-300 py-7 mb-4'>
                        <SubmitButton
                            text={'Switch to Service Provider'}
                            style='py-3 px-5 bg-background md:text-md lg:text-md text-white hover:cursor-pointer hover:font-semibold hover:text-white hover:bg-primary absolute right-5 top-1.5' />
                    </div> */}
                    <div>
                        <ServiceRightSideBar/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ServiceProviderProfile;