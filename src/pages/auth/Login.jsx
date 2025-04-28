import React, { useState } from 'react'
import SignupImage from '../../assets/images/work-force.png'
import { Link, useNavigate } from 'react-router'
import SubmitButton from '../../components/SubmitButton'
import { apiLogin } from '../../services/auth'



const Login = () => {
  const [inputValue, setInputValue] = useState("");

  const isEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const inputType = isEmail(inputValue) ? "email" : "text";
  const inputName = isEmail(inputValue) ? "email" : "userName";

  const navigate = useNavigate();

const handleLogin = async (event) => {
  event.preventDefault();

  const formData = new FormData (event.target)

  try {
    const response = await apiLogin(formData)
    console.log (response.data.message, response)

    localStorage.setItem ("token", response.data.token)
    localStorage.setItem ("role", response.data.data.role)
    localStorage.setItem ("user", JSON.stringify(response.data.data))

    
    const role = response.data.data.role
    if (role === "gigPoster") {
      navigate("/dashboard/gigs")
    } else {
      navigate("/services/gigs")
    }

  } catch (error) {
    alert (
      "SignUp failed: " + (error.response?.data || error?.data || error.message)
  )
  }
  
}


  return (
    <>
      <div className='bg-gray-300 h-screen flex flex-col items-center'>
        <div className='bg-beige w-[90%] md:w-[75%]  h-[90%] mx-auto grid grid-col-1 md:grid-cols-3 rounded-2xl shadow-2xl shadow-black/80 mt-10'>
          {/* The form part */}
          <div className='flex flex-col space-y-7 bg-navyblue font-nunito-sans md:col-span-2 rounded-2xl justify-center py-10'>
            <span className=' md:mr-30 text-start px-5'>
              <h2 className=' text-lg md:text-2xl text-white font-semibold'>Login</h2>
            </span>
            <form className='flex flex-col gap-y-7 md:mr-30 justify-center items-center' onSubmit={handleLogin}>
              <div className="relative w-full max-w-[92.5%]">
                <input type={inputType} name={inputName} id="emailUserName"  className="border border-gray-300 rounded-md w-full pt-2 md:pt-3 pb-1 px-4 focus:outline-none focus:ring-2 focus:ring-beige text-white" required onChange={(e) => setInputValue(e.target.value)} />
                <label htmlFor="emailUserName" className="absolute left-3 -top-3 bg-navyblue px-2 text-sm md:text-md lg:text-[16px] text-white ">
                  Username or Email
                </label>
              </div>
              {/* <div className="relative w-full max-w-[92.5%]">
                <input type="text" id="userName" name="userName" className="border border-gray-300 rounded-md w-full pt-2 md:pt-3 pb-1 px-4 focus:outline-none focus:ring-2 focus:ring-primary" required />
                <label htmlFor="userName" className="absolute left-3 -top-3 bg-navyblue px-2 text-sm md:text-md lg:text-[16px] text-white">
                  Username
                </label>
              </div> */}
              <div className="relative w-full max-w-[92.5%]">
                <input type="password" id="password" name="password" className="border border-gray-300 rounded-md w-full pt-2 md:pt-3 pb-1 px-4 focus:outline-none focus:ring-2 focus:ring-beige text-white" required />
                <label htmlFor="password" className="absolute left-3 -top-3 bg-navyblue px-2 text-sm md:text-md lg:text-[16px] text-white">
                  Password
                </label>
              </div>
              <div className='flex flex-col gap-y-3 md:flex-row md:gap-x-8 items-center w-full max-w-[92.5%] '>
              <SubmitButton 
              text={'Login'}
              style='py-3 px-4 w-[100%] hover:bg-beige active:bg-beige active:text-navyblue hover:text-beige font-bold text-sm md:text-lg lg:text-xl font-nunito-sans px-4 py-2 rounded bg-navyblue text-beige hover:text-navyblue hover:font-extrabold transition border border-beige'
              />
              {/* <SubmitButton 
              text={'Login to offer service'}
              style='bg-transparent py-2.5 px-4 border border-white/50 border-2 text-white/70 hover:font-bold hover:text-white hover:border-white/80 hover:bg-primary transition ease duration:50'
              /> */}
              
              </div>

            </form>
            <div className='flex gap-y-2 md:mr-30 justify-center text-gray-300'>
              <Link to={'/signup'}>
                <p className='font-nunito-sans text-md md:text-md lg:text:lg font-normal text-center'>Don't have an account? <span className='font-nunito-sans text-md md:text-md lg:text:lg font-bold underline hover:text-beige'>Signup</span>
                </p>
              </Link>
            </div>
          </div>
          <div className=' rounded-2xl py-10 px-3'>
            <h2 className='font-nunito-sans text-center text-lg md:text-2xl text-navyblue font-bold'>Making Gigs the new Ish</h2>
          </div>
          <img src={SignupImage} alt="" className='w-[38%] absolute right-20 bottom-20 rotate-y-30 -rotate-x-1' />
        </div >
      </div >
    </>
  )
}

export default Login