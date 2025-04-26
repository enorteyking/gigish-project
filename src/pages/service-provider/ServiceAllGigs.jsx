import React, { useEffect, useState } from 'react'
import GigPostCard from '../../components/GigPostCard'
import GigPosterNavbar from '../../components/GigPosterNavbar'
import GigRightSideBar from '../../components/GigRightSideBar'
import ServiceNavbar from '../../components/ServiceNavbar'
import { apiGetAllGigs } from '../../services/gigs'
import ServiceRightSideBar from '../../components/ServiceRightSideBar'


const ServiceAllGigs = () => {
  const [gigs, setGigs] = useState([])

  const getGigs = async () => {
    try {

      const response = await apiGetAllGigs();
      console.log(response.data);
      setGigs(response.data.data); // Set the gigs data directly from the response
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
        <div className='w-[56%] bg-gray-200 '>
          <div>
            <ServiceNavbar />
          </div>
          <div className='bg-gray-300'>
            {/* Conditional rendering based on gigs.length */}
            {gigs.length > 0 &&
              gigs.map((gig) => (
                <GigPostCard key={gig.id} gig={gig} />
              ))
            };
          </div>
        </div>
        <div className='w-[25.2%] border-l border-gray-300'>
          <div>
            <ServiceRightSideBar />
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceAllGigs