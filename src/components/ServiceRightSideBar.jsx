import React from 'react'
import SubmitButton from './SubmitButton'
import GigSearchBar from './GigSearchBar'

const ServiceRightSideBar = () => {
    return (
        <>
            <div className='fixed flex flex-col gap-y-4 bg-gray-500'>
                <div className='border-b border-gray-600 m-2.5  flex justify-end w-[90%] mx-auto'>
                    {/* <SubmitButton
                        text={'Switch to Service Provider'}
                        style='py-3 px-5 bg-gradient-to-r from-[#056d80] from-10% to-blue-950 to-90% hover:bg-gradient-to-l rounded-lg text-white text-center hover:font-extrabold flex justify-center items-center ' /> */}
                    <button type="submit" className='py-2 px-5 bg-beige hover:bg-beige rounded-full text-navyblue text-center hover:font-bold text-sm font-extrabold font-nunito-sans items-center mb-2'>Gig-Poster Dashboard</button>
                </div>
                <GigSearchBar />
                <div className='border border-gray-800 rounded-lg p-4 flex flex-col space-y-1 w-[90%] mx-auto bg-gray-800 text-gray-400 '>
                    <h3 className='font-bold font-nunito-sans text-md md:text-md'>Subscribe to Premium</h3>
                    <p className='mb-3'>Subscribe to unlock new features and if eligible, receive premium services from Gigish. Be on our wailt-list</p>
                    <SubmitButton

                        text={'Subscribe'}
                        style='py-2 px-4 bg-gray-700 md:text-md lg:text-md text-primary  hover:cursor-pointer hover:font-semibold hover:text-white hover:bg-primary md:rounded-full' />
                </div>
                <div className='border border-gray-600 rounded-lg p-3 flex flex-col space-y-1 w-[90%] mx-auto bg-gray-800 text-gray-400 '>
                    <h3 className='font-bold font-nunito-sans text-md md:text-md text-gray-350'>Quick Statistics on Gigs</h3>
                    <p className=''>
                        Total Gigs Posted: 15
                    </p>
                    <p className=''>
                        Total Gigs with Bids: 5
                    </p>
                </div>
                <div className='border border-gray-600 rounded-lg p-3 flex flex-col space-y-1 w-[90%] mx-auto bg-gray-800 text-white mb-3.5'>
                    <h3 className='font-bold font-nunito-sans text-md md:text-md'>Future Updates from Gigish</h3>
                    <ol>
                        <li>In-app payment system</li>
                        <li>In-app messaging</li>
                        <li>Allocation of services with proximity</li>
                    </ol>
                </div>
            </div>
        </>
    )
}

export default ServiceRightSideBar