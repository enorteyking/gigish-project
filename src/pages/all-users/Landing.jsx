import React from 'react'
import Navbar from '../../components/Navbar'
import ScrollTop from '../../components/ScrollTop'
import GigPostCard from '../../components/GigPostCard'
import DetailedGigPost from '../../components/DetailedGigPost'
import GigWithBidCard from '../../components/GigWithBidCard'

const Landing = () => {
  return (
    <div>
        <div className='grid grid-cols-2 gap-y-2'>
        <GigPostCard/>
        <GigPostCard/>
        
        </div>
        <GigWithBidCard/>
        <div>
            <DetailedGigPost/>
        </div>
        <ScrollTop/>
    </div>
  )
}

export default Landing