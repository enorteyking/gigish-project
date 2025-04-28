import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { apiSingleGig } from '../../services/gigs';
import GigPosterNavbar from '../../components/GigPosterNavbar';
import DetailedGigPost from '../../components/DetailedGigPost';

const SingleGig = () => {
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
                        <GigPosterNavbar/>
                    </div>
                    <div className='flex  items-center w-[100%] my-10 md:w-[90%] mx-auto'>

                        <DetailedGigPost 
                        key={gig.id}
                        gig={gig} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default SingleGig