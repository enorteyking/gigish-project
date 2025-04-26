import { Clock, LocateIcon, MapPin, StarIcon } from 'lucide-react'
import React, { useState } from 'react'
import GigPosterNavbar from './GigPosterNavbar'
import { formatDateTime } from './GigPostCard'
import { Link, useNavigate, useParams } from 'react-router'
import { apiCreateBid } from '../services/bids'

const ServiceDetailedGigPost = ({ gig }) => {
    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(false);

    const handleToggleForm = () => {
        setShowForm(prev => !prev);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Extract the bid price from the form
        const serviceProviderBidPrice = event.target.serviceProviderBidPrice.value;

        // Prepare the data as JSON
        const data = {
            serviceProviderBidPrice: parseFloat(serviceProviderBidPrice), // Convert to a number if needed
        };

        try {
            const response = await apiCreateBid(gig?.id, data);
            console.log(response.data.message, response)

            navigate("/services/gigs")
            alert("Bid submitted successfully")
        } catch (error) {
            alert(
                "Bid submission failed: " + (error.response?.data || error?.data || error.message)
            )
        }
        console.log("Form submitted with value:", serviceProviderBidPrice);
        // Add your form submission logic here (e.g., API call)

    }
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
                            src="https://i.pravatar.cc/50?img=5"
                            className="w-15 h-15 rounded-full"
                            alt="Client Avatar"
                        />
                        <div className='flex flex-col  gap-x-8'>
                            <p className="font-semibold text-lg text-gray-700">{gig?.gigPoster.userName}</p>
                            <p className="flex flex-col items-center text-sm md:text-[15px] text-gray-400 gap-1">
                                <span className='flex items-center gap-x-2'>
                                    <MapPin className='size-4' /> {gig?.location}
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
                        <div>
                            <p className="text-gray-500 text-md text-nowrap">Estimated Pay</p>
                            <p className="text-3xl font-bold text-green-600">₵{gig?.gigProviderOfferPrice}</p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-md">Offer Window</p>
                            <p className="text-sm font-normal">{formatDateTime(gig?.gigOfferOpenWindow)}</p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-md">Start Date</p>
                            <p className="text-sm font-normal">{formatDateTime(gig?.gigStartDate)}</p>
                        </div>
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
                            Bid for This Gig
                        </button>
                        {showForm && (
                            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                                <div className='relative '>
                                    <input
                                        type="number"
                                        id='serviceProviderBidPrice'
                                        name="serviceProviderBidPrice"
                                        placeholder="Enter your offer pay"
                                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-navyblue"
                                        defaultValue={gig?.gigProviderOfferPrice}
                                        required
                                    /><label htmlFor="serviceProviderBidPrice" className="absolute left-3 -top-3 font-semibold bg-white px-2 text-sm md:text-sm lg:text-[14px] text-gray-500 font-nunito-sans">
                                        Enter your offer pay
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                                >
                                    Submit
                                </button>
                            </form>
                        )}
                        <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg text-sm hover:bg-blue-50 transition">
                            Contact Client
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceDetailedGigPost