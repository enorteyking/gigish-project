import React, { useEffect, useState } from 'react'
import GigPosterNavbar from '../../components/GigPosterNavbar'
import { Link } from 'react-router';
import { PlusIcon } from 'lucide-react';
import { apiGetAllGigs } from '../../services/gigs';
import GigPosterGigWithBidCard from '../../components/GigPosterGigWithBidCard';

const AllBiddedGigs = () => {

  const [gigs, setGigs] = useState([]);

  const getGigs = async () => {
    try {
      const response = await apiGetAllGigs();
      console.log(response.data);
      console.log(gigs)

      // Ensure response.data.data is defined and is an array
      const gigsData = Array.isArray(response.data.data) ? response.data.data : [];
      const loginUser = JSON.parse(localStorage.getItem('user'));
      console.log('Gigs Data:', gigsData);
      console.log('Login User:', loginUser);

      // Filter gigs by userName and check if gigBids exist
      const filterByUserNameAndBids = (gigs, loginUser) => {
        return gigs.filter(
          (gig) =>
            gig.gigPoster &&
            gig.gigPoster.userName === loginUser.userName &&
            Array.isArray(gig.gigBids) &&
            gig.gigBids.length > 0
        );
      };

      const filteredGigs = filterByUserNameAndBids(gigsData, loginUser);
      console.log('Filtered Gigs:', filteredGigs);
      setGigs(filteredGigs); // Update the state with filtered gigs
    } catch (error) {
      console.error('Error fetching gigs:', error);
    }
  };

  useEffect(() => {
    getGigs();
  }, []);
  
  
  return <>
      <div className='flex'>
        <div className='w-[18.77%]'>

        </div>
        <div className='w-[81.2%]'>
          <div>
            <GigPosterNavbar />
          </div>
          <div className='bg-gray-300'>
            {/* Conditional rendering based on gigs.length */}
            {gigs.length > 0 ? (
              gigs.map((gig) => (
                <GigPosterGigWithBidCard key={gig.id} gig={gig} />
              ))
            ) : (
              <div className='font-nunito-sans text-sm md:text-lg lg:text-xl border border-gray-300 flex flex-col justify-center items-center w-[90%] mx-auto gap-y-3 h-120 rounded-lg my-8 shadow-lg text-navyblue bg-white'>
                <h3 className='font-bold text-navyblue'>No bid on your gigs yet</h3>
                <p>Bid your first gig to get started</p>
                <Link
                  to={'/dashboard/gigs'}
                  className='px-4 py-1 bg-[#0a0f2c]/90 flex gap-x-1 items-center justify-center md:text-md lg:text-md hover:cursor-pointer hover:bg-navyblue hover:text-white active:bg-backgound rounded-lg text-center'
                >
                  <PlusIcon size={20} className='md:text-md text-white ' />
                  <p className='text-white'>Create a Gig</p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      </>
}

      export default AllBiddedGigs