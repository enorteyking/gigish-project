import React, { useEffect, useState } from 'react'
import GigPosterNavbar from '../../components/GigPosterNavbar'
import SubmitButton from '../../components/SubmitButton'
import { PlusIcon } from 'lucide-react'
import GigPostCard from '../../components/GigPostCard'
import { Link } from 'react-router'
import GigSearchBar from '../../components/GigSearchBar'
import GigWithBidCard from '../../components/GigWithBidCard'
import GigRightSideBar from '../../components/GigRightSideBar'
import { apiGetAllGigs } from '../../services/gigs'

const AllGigs = () => {
    const [gigs, setGigs] = useState([])

    const getGigs = async () => {
        try {

            const response = await apiGetAllGigs();
            console.log(response.data);

            // Ensure response.data.data is defined and is an array
            const gigsData = Array.isArray(response.data.data) ? response.data.data : [];
           localStorage.setItem("gigData", JSON.stringify(gigsData)); // Store the gigs data in localStorage
            const loginUser =JSON.parse(localStorage.getItem("user"));
            console.log("Gigs Data:", gigsData);
            console.log("Login User:", loginUser);


            const filterByUserName = (gigs, loginUser) => {
                return gigs.filter(gig => gig.gigPoster && gig.gigPoster.userName === loginUser.userName);
            };

            const filteredGigs = filterByUserName(gigsData, loginUser);
            setGigs(filteredGigs); // Update the state with filtered gigs

        } catch (error) {
            console.error("Error fetching gigs:", error);
        }
    }
    useEffect(() => {
        getGigs();
    }, []);

    return (
        <>
            <div className="flex">
                <div className='w-[18.77%]'></div>
                <div className='w-[56%] bg-gray-200'>
                    <div>
                        <GigPosterNavbar />
                    </div>
                    <div className='bg-gray-300'>
                        {/* Conditional rendering based on gigs.length */}
                        {gigs.length > 0 ? (
                            gigs.map((gig) => (
                                <GigPostCard key={gig.id} gig={gig} />
                            ))
                        ) : (
                            <div className='font-nunito-sans text-sm md:text-lg lg:text-xl border border-gray-300 flex flex-col justify-center items-center w-[90%] mx-auto gap-y-3 h-120 rounded-lg my-8 shadow-lg text-navyblue bg-white'>
                                <h3 className='font-bold text-navyblue'>No gigs added yet</h3>
                                <p>Create your first gig to get started</p>
                                <Link
                                    to={'/dashboard/create-gig'}
                                    className='px-4 py-1 bg-[#0a0f2c]/90 flex gap-x-1 items-center justify-center md:text-md lg:text-md hover:cursor-pointer hover:bg-navyblue hover:text-white active:bg-backgound rounded-lg text-center'
                                >
                                    <PlusIcon size={20} className='md:text-md text-white ' />
                                    <p className='text-white'>Create a Gig</p>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
                <div className='w-[25.2%] border-l border-gray-300'>
                    <div>
                        <GigRightSideBar />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllGigs