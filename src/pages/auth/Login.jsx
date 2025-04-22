import React from 'react'
import SignupImage from '../../assets/images/work-force.png'
import { Link } from 'react-router'
import SubmitButton from '../../components/SubmitButton'


const Login = () => {
  return (
    <>
      <div className='bg-primary h-screen flex flex-col items-center'>
        <div className='bg-white w-[90%] md:w-[75%]  h-[90%] mx-auto grid grid-col-1 md:grid-cols-3 rounded-2xl shadow-2xl shadow-black/80 mt-10'>
          {/* The form part */}
          <div className='flex flex-col space-y-7 bg-background font-nunito-sans md:col-span-2 rounded-2xl justify-center py-10'>
            <span className=' md:mr-30 text-start px-5'>
              <h2 className=' text-lg md:text-2xl text-white font-semibold'>Login</h2>
            </span>
            <form className='flex flex-col gap-y-7 md:mr-30 justify-center items-center'>
              <div className="relative w-full max-w-[92.5%]">
                <input type="email" id="email" name="email" className="border border-gray-300 rounded-md w-full pt-2 md:pt-3 pb-1 px-4 focus:outline-none focus:ring-2 focus:ring-primary" required />
                <label htmlFor="email" className="absolute left-3 -top-3 bg-background px-2 text-sm md:text-md lg:text-[16px] text-white">
                  Username or Email
                </label>
              </div>
              {/* <div className="relative w-full max-w-[92.5%]">
                <input type="text" id="userName" name="userName" className="border border-gray-300 rounded-md w-full pt-2 md:pt-3 pb-1 px-4 focus:outline-none focus:ring-2 focus:ring-primary" required />
                <label htmlFor="userName" className="absolute left-3 -top-3 bg-background px-2 text-sm md:text-md lg:text-[16px] text-white">
                  Username
                </label>
              </div> */}
              <div className="relative w-full max-w-[92.5%]">
                <input type="password" id="password" name="password" className="border border-gray-300 rounded-md w-full pt-2 md:pt-3 pb-1 px-4 focus:outline-none focus:ring-2 focus:ring-primary" required />
                <label htmlFor="password" className="absolute left-3 -top-3 bg-background px-2 text-sm md:text-md lg:text-[16px] text-white">
                  Password
                </label>
              </div>
              <div className='flex flex-col gap-y-3 md:flex-row md:gap-x-8 items-center w-full max-w-[92.5%] '>
              <SubmitButton 
              text={'Login'}
              style='py-3 px-4 w-[100%] bg-white/80 text-black/60 hover:font-bold hover:text-black/70 hover:bg-white/65'
              />
              {/* <SubmitButton 
              text={'Login to offer service'}
              style='bg-transparent py-2.5 px-4 border border-white/50 border-2 text-white/70 hover:font-bold hover:text-white/70 hover:border-white/80 hover:bg-black/20 transition ease duration:50'
              /> */}
              
              </div>

            </form>
            <div className='flex gap-y-2 md:mr-30 justify-center text-white/80'>
              <Link to={'/signup'}>
                <p className='font-nunito-sans text-md md:text-md lg:text:lg font-normal text-center'>Don't have an account? <span className='font-nunito-sans text-md md:text-md lg:text:lg font-bold underline hover:text-black'>Signup</span>
                </p>
              </Link>
            </div>
          </div>
          <div className=' rounded-2xl py-10 px-3'>
            <h2 className='font-nunito-sans text-center text-lg md:text-2xl text-white font-semibold'>Making gigs the new ish</h2>
          </div>
          <img src={SignupImage} alt="" className='w-[35%] absolute right-20 bottom-20 rotate-y-30 -rotate-x-1' />
        </div >
      </div >
    </>
  )
}

export default Login