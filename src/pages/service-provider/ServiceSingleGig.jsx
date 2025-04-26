import React, { useEffect, useState } from 'react'
import DetailedGigPost from '../../components/ServiceDetailedGigPost'
import { useParams } from 'react-router'
import { apiSingleGig } from '../../services/gigs';
import GigPosterNavbar from '../../components/GigPosterNavbar';
import ServiceNavbar from '../../components/ServiceNavbar';
import ServiceDetailedGigPost from '../../components/ServiceDetailedGigPost';

const ServiceSingleGig = () => {
    const { id } = useParams();
    const [gig, setGig] = useState(null);

    useEffect(() => {
        const getGig = async () => {
            try {
                if (!id) {
                    console.error("gig ID is missing");
                    return;
                }
                {
                    const response = await apiSingleGig(id);
                    console.log(response.data.data)
                    setGig(response.data.data);
                }
            } catch (error) {
                console.error("Error fetching gig:", error);
            }
        };
        getGig();
    }, [id]);

    if (!gig) return <p>Loading gig details...</p>;
    console.log(gig)

    return (
        <>
            <div className='flex'>
                <div className='w-[18.77%]'>

                </div>
                <div className='w-[81.2%]'>
                    <div>
                        <ServiceNavbar/>
                    </div>
                    <div className='flex  items-center w-[100%] h-screen md:w-[90%] mx-auto'>

                        <ServiceDetailedGigPost
                            key={gig.id}
                            gig={gig}
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default ServiceSingleGig