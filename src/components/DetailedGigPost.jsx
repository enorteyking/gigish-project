import { Clock, LocateIcon, MapPin, StarIcon } from 'lucide-react'
import React, { useState } from 'react'
import GigPosterNavbar from './GigPosterNavbar'
import { formatDateTime } from './GigPostCard'
import { Link } from 'react-router'
import { apiAcceptBid, apiRejectBid } from '../services/bids'
import Profile from "../assets/images/profile-image.png"

const DetailedGigPost = ({ gig }) => {

    const [showList, setShowList] = useState(false);
    console.log(gig)
    const handleToggleForm = () => {
        setShowList(prev => !prev);
    };
    console.log(showList);

    const handleAccept = async (id) => {
        const response = await apiAcceptBid(id);
        console.log(response.data.data);
        alert("Bid Accepted"); // There was no response here
    };

    const handleReject = async (id) => {
        const response = await apiRejectBid(id);
        console.log(response.data.data);
        alert("Bid Rejected"); // There was no response here

        alert(`Rejected request ID: ${id}`);
    };

    return (
        <>

            {/* Gig Details Section */}
            <div className="max-w-5xl  px-4 flex gap-x-10 justify-start font-nunito-sans ">
                <div>
                    <div className='shadow-lg rounded-lg h-100 w-100 object-fill bg-white/10 backdrop-blur-sm shadow-black/40 '>
                        <img src={`${gig?.gigImageUrl}`} alt={gig?.name} className='rounded-lg size-100 ' />
                    </div>

                    <div className='flex items-center mt-6 gap-x-3'>
                        <img
                            src={Profile}
                            className="w-15 h-15 rounded-full"
                            alt="Client Avatar"
                        />
                        <div className='flex flex-col  gap-x-8'>
                            <p className="font-semibold text-lg text-gray-700">{gig?.gigPoster.userName}</p>
                            <p className="flex flex-col justify-center text-sm md:text-[15px] text-gray-400 gap-1">
                                <span className='flex iems-center gap-x-2'>
                                    <MapPin className='size-4 ml-auto' /> {gig?.location}
                                </span>
                                <span className='flex items-center mr-auto'>
                                    <StarIcon className="size-4" />
                                    <StarIcon className="size-4" />
                                    <StarIcon className="size-4" />
                                    <StarIcon className="size-4 mr-2" /> <span className='text-md'>4.8</span>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className=''>


                    {/* Posted by */}
                    <div className="flex mb-6">
                        <div className="flex flex-col items-start">
                            <div>
                                <p className="text-xl font-normal text-gray-500">What is the gig?</p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold text-navyblue">
                                    {gig?.name}
                                </h2>
                            </div>
                        </div>

                    </div>

                    {/* Budget + Timeline */}
                    <div className="flex justify-start mb-6 gap-x-6 text-wrap w-full">
                        <div className=''>
                            <p className="text-gray-500 text-md text-nowrap">Estimated Pay</p>
                            <p className="text-3xl font-bold text-green-600 ">₵{gig?.gigProviderOfferPrice}</p>
                        </div>
                        <div className=''>
                            <p className="text-gray-500 text-md">Offer Window</p>
                            <p className="text-sm font-normal backdrop-blur-xl rounded-lg border border-white/30 shadow-md bg-black/15 p-2">{formatDateTime(gig?.gigOfferOpenWindow)}</p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-md">Start Date</p>
                            <p className="text-sm font-normal backdrop-blur-xl rounded-lg border border-white/30 shadow-lg bg-black/15 p-2">{formatDateTime(gig?.gigStartDate)}</p>
                        </div>
                    </div>
                    <div className='mb-5'>
                        <span className='flex items-center justify-start gap-x-2 mr-auto text-gray-700'>
                            <MapPin className='size-5' /> 
                            <span className='mr-auto text-md'>{gig?.location}</span>
                        </span>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                        <h2 className="text-md font-semibold text-gray-500">Gig Description</h2>
                        <p className="text-navyblue leading-relaxed text-md">
                            {gig?.description}
                        </p>
                    </div>

                    {/* Skills / Tags */}
                    {/* <div className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Skills Required</h2>

                    </div> */}

                    {/* CTA */}
                    <div className="flex gap-4">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm hover:bg-blue-700 transition" onClick={handleToggleForm}>
                            View Bids
                        </button>

                        <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg text-sm hover:bg-blue-50 transition">
                            Contact Client
                        </button>
                    </div>
                    {showList && (
                        <div className="mt-4 space-y-3">
                            {gig?.gigBids.length > 0 && gig?.gigBids.map((gigBid) => (
                                <div
                                    key={gigBid}
                                    className="border rounded p-4 flex items-center justify-between bg-white shadow"
                                >
                                    <div>
                                        <p className="text-sm text-gray-600 font-semibold">Bidder: Dimitri Obama</p>
                                        <h3 className="text-sm text-gray-600">  {gig?.name}</h3>
                                        <p className="text-sm text-gray-600">Status: <span className='font-bold'>Pending</span> </p>
                                        <p className="text-sm text-gray-600">Offer Price: <span className='font-bold'>₵ 100</span> </p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => handleAccept(gigBid)}
                                            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                                        >
                                            Accept
                                        </button>
                                        <button
                                            onClick={() => handleReject(gigBid)}
                                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                        >
                                            Reject
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                </div>
            </div>
        </>
    )
}

export default DetailedGigPost