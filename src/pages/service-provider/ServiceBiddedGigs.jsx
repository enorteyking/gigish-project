import React, { useEffect, useState } from 'react';
import ServiceNavbar from '../../components/ServiceNavbar';
import { apiGetAllBids } from '../../services/bids';
import GigWithBidCard from '../../components/GigWithBidCard';

const ServiceBiddedGigs = () => {
    const [biddedGigs, setBiddedGigs] = useState([]);

    const getBiddedGigs = async () => {
        try {
            const response = await apiGetAllBids();
            console.log('API Response:', response.data);

            // Filter the response to include only valid gigs with bids
            const validBids = Array.isArray(response.data.data.bids)
                ? response.data.data.bids.filter(
                      (bid) =>
                          bid && // Ensure bid exists
                          bid.bidGig && // Ensure bidGig exists
                          bid.bidGig.name && // Ensure bidGig has a name
                          bid.id // Ensure bid has an id
                  )
                : [];
            console.log('Filtered Bidded Gigs:', validBids);

            // Update the state with the filtered gigs
            setBiddedGigs(validBids);
        } catch (error) {
            console.error('Error fetching gigs:', error);
        }
    };

    useEffect(() => {
        getBiddedGigs();
    }, []);

    return (
        <>
            <div className="flex">
                <div className="w-[18.77%]"></div>
                <div className="w-[81.2%]">
                    <div>
                        <ServiceNavbar />
                    </div>
                    <div className="flex flex-col items-center w-[100%] h-screen md:w-[90%] mx-auto">
                        {biddedGigs.length > 0 ? (
                            biddedGigs.map((gig, index) => (
                                // Pass the entire gig object to the GigWithBidCard component
                                <GigWithBidCard key={gig.id} gig={gig} />
                            ))
                        ) : (
                            <p className="text-gray-500 text-lg">No bidded gigs found.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceBiddedGigs;