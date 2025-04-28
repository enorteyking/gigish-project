import React from 'react';
import { CalendarClockIcon, EarthIcon, MapPinIcon, SmartphoneIcon } from 'lucide-react';
import { Link } from 'react-router';
import { formatDateTime } from './GigPostCard';

const GigWithBidCard = ({ gig }) => {
    if (!gig || !gig.id || !gig.bidGig) {
        console.error('Invalid gig object:', gig);
        return null; // Do not render the component if the gig is invalid
    }

    return (
        <div>
            <div className="border-b border-gray-300 py-8">
                <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 border-t-5 border-t-green-400 font-nunito-sans">
                    <div>
                        <img
                            src={`https://res.cloudinary.com/dz3lkhibn/image/upload/v1745513177/images/nvtojbpibemlgwm8kle0.jpg`}
                            alt=""
                            className="w-full h-50 object-cover object-center"
                        />
                    </div>
                    <div className="px-6 py-4 font-nunito-sans">
                        {/* Gig Title */}
                        <h2 className="text-xl font-bold text-gray-800 mb-2">{gig.bidGig.name}</h2>

                        <div className="flex items-center gap-x-2 mb-2 border border-gray-200 rounded-lg px-2">
                            <div className="bg-gray-300 w-30 h-30 rounded-md shadow-md p-3 flex flex-col gap-x-3">
                                <h3 className="text-[14px] font-semibold text-gray-700">Bid Offer Price</h3>
                                <span className="font-semibold text-green-600 flex justify-center text-4xl py-3">
                                    ₵ {gig.serviceProviderBidPrice}
                                </span>
                            </div>
                            <div className="p-3 flex flex-col gap-y-2 items-start">
                                <div className="flex items-center justify-center gap-x-2">
                                    <span className="text-sm text-gray-700">Bid Status</span>
                                    <span className="text-sm text-gray-700">{gig.bidStatus}</span>
                                </div>
                                <div className="flex items-center justify-center gap-x-2">
                                    <CalendarClockIcon className="w-5 text-gray-600" />
                                    <span className="text-sm text-gray-700">{formatDateTime(gig.bidDate)}</span>
                                </div>
                                <div className="flex items-center justify-center gap-x-2">
                                    <MapPinIcon className="w-5 text-gray-600" />
                                    <span className="text-sm text-gray-700">Accra</span>
                                </div>
                                <div className="flex items-center justify-center gap-x-2">
                                    <SmartphoneIcon className="w-5 text-gray-600" />
                                    <span className="text-sm text-gray-700">Pay on completion</span>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between">
                            <Link
                                to={`/services/gigs/${gig.id}`}
                                className="bg-green-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-green-700 transition"
                            >
                                View Bids
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GigWithBidCard;