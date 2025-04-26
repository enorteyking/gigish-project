import { CalendarClock, Camera, ChevronDown, CircleFadingPlus, Clapperboard, CopyPlus, Facebook, InstagramIcon, PlusIcon } from 'lucide-react'
import { Link } from 'react-router'
import GigSidebar from '../../components/GigSidebar'
import GigPostCard from '../../components/GigPostCard'
import GigPosterNavbar from '../../components/GigPosterNavbar'
import SubmitButton from '../../components/SubmitButton'
import GigSearchBar from '../../components/GigSearchBar'
import GigRightSideBar from '../../components/GigRightSideBar'

const Home = () => {
  return (
    <>
      <div className="flex">
        <div className=' w-[18.77%]'></div>
        <div className=' w-[56%]'>
          <div>

            <GigPosterNavbar />
          </div>
          <div>
            {[1, 2, 3, 4].map((gig, index) => {
              return (
                <GigPostCard
                  key={index}
                  gig={gig}
                />
              )
            })}

          </div>
          <div className='font-nunito-sans text-sm md:text-lg lg:text-xl border border-gray-300 flex flex-col justify-center items-center w-[90%] mx-auto gap-y-3 h-120 rounded-lg my-8 shadow-lg'>
            <h3 className='font-bold text-background'>No gigs added yet</h3>
            <p>Create your first gig to get started</p>

            <Link to={'create-gig'} className='px-4 py-1 bg-background/90 flex gap-x-1 items-center justify-center md:text-md lg:text-md  hover:cursor-pointer hover:bg-primary hover:text-white active:bg-backgound rounded-lg text-center'>
              <PlusIcon size={20} className='md:text-md text-white ' />
              <p className='text-white'>Create a Gig</p>
            </Link>

          </div>
        </div>
        <div className=' w-[25.2%] border-l border-gray-300'>
          <div className=''>
            <GigRightSideBar />

          </div>
        </div>

      </div>
    </>
  )
}

export default Home