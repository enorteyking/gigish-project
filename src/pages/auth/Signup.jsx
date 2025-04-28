import React from 'react'
import SignupImage from '../../assets/images/work-force.png'
import { Link, useNavigate } from 'react-router'
import { apiSignup } from '../../services/auth';

const Signup = () => {
    const navigate = useNavigate();

    const handleSignUp = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        try {
            const response = await apiSignup(formData);
            console.log(response.data, response)
            alert(response.data)

            localStorage.setItem("token", response.data.token)
            localStorage.setItem("role", response.data.data.role)
            localStorage.setItem ("user", JSON.stringify(response.data.data))

            const role = response.data.data.role;
            if (role === "gigPoster") {
                navigate("/dashboard")

            } else {
                navigate("/services/gigs")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='bg-navyblue h-screen flex flex-col items-center justify-center'>
                <div className='bg-gray-500 w-[90%] md:w-[70%]  mx-auto grid grid-col-1 md:grid-cols-3 rounded-2xl shadow-2xl shadow-black/80'>
                    <div className='bg-gray-500 rounded-2xl py-10 px-3'>
                        <h2 className='font-nunito-sans text-center text-lg md:text-3xl text-white font-bold'>Welcome to GigIsh</h2>
                        <h2 className='font-syne-sans text-center text-lg md:text-xl text-white'>Making Gigs the new Ish</h2>
                    </div>
                    <img src={SignupImage} alt="" className='w-[35%] h-95 absolute left-20 bottom-10 rotate-x-30 rotate-y-0' />
                    {/* The form part */}
                    <div className='flex flex-col space-y-7 bg-white font-nunito-sans md:col-span-2 rounded-2xl justify-center py-10'>
                        <span className=' md:ml-35'>
                            <h2 className=' text-lg md:text-2xl text-black font-semibold'>Create Account</h2>
                        </span>
                        <form className='flex flex-col gap-y-7 md:ml-35' onSubmit={handleSignUp}>
                            {/* <div className='flex gap-x-4'>
                                <div className="relative w-[45%] max-w-sm">
                                    <input type="text" id="firstName" name="firstName" className="border border-gray-300 rounded-md w-full pt-2 md:pt-3 pb-1 px-4 focus:outline-none focus:ring-2 focus:ring-primary" required />
                                    <label htmlFor="firstName" className="absolute left-3 -top-3 bg-white px-2 text-sm md:text-md lg:text-[16px] text-gray-600">
                                        First Name
                                    </label>
                                </div>
                                <div className="relative w-[45%] max-w-sm">
                                    <input type="text" id="lastName" name="lastName" className="border border-gray-300 rounded-md w-full pt-2 md:pt-3 pb-1 px-4 focus:outline-none focus:ring-2 focus:ring-primary" required />
                                    <label htmlFor="lastName" className="absolute left-3 -top-3 bg-white px-2 text-sm md:text-md lg:text-[16px] text-gray-600">
                                        Last Name
                                    </label>
                                </div>
                            </div> */}
                            <div className="relative w-full max-w-[92.5%]">
                                <input type="text" id="userName" name="userName" placeholder='Example: "John Kassah"' className="border border-gray-300 rounded-md w-full pt-2 md:pt-3 pb-1 px-4 focus:outline-none focus:ring-2 focus:ring-primary" required />
                                <label htmlFor="userName" className="absolute left-3 -top-3 bg-white px-2 text-sm md:text-md lg:text-[16px] text-gray-600">
                                    Username
                                </label>
                            </div>
                            <div className="relative w-full max-w-[92.5%]">
                                <input type="email" id="email" name="email" className="border border-gray-300 rounded-md w-full pt-2 md:pt-3 pb-1 px-4 focus:outline-none focus:ring-2 focus:ring-primary" required />
                                <label htmlFor="email" className="absolute left-3 -top-3 bg-white px-2 text-sm md:text-md lg:text-[16px] text-gray-600">
                                    Email
                                </label>
                            </div>

                            <div className="relative w-full max-w-[92.5%]">
                                <select name="role" id='role'
                                    className="border border-gray-300 rounded-md w-full pt-2 md:pt-3 pb-1 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
                                    required>
                                    <option className='text-gray-600' >Select Role</option>
                                    <option value="gigPoster" className='hover:bg-primary'>Gig Poster</option>
                                    <option value="serviceProvider">Service Provider</option>
                                </select>
                                <label htmlFor="role" className="absolute left-3 -top-3 bg-white px-2 text-sm md:text\
                                -md lg:text-[16px] text-gray-600 text-nunito-sans">
                                    What is your role?
                                </label>
                            </div>
                            <div className="relative w-full max-w-[92.5%]">
                                <input type="password" id="password" name="password" className="border border-gray-300 rounded-md w-full pt-2 md:pt-3 pb-1 px-4 focus:outline-none focus:ring-2 focus:ring-primary" required />
                                <label htmlFor="password" className="absolute left-3 -top-3 bg-white px-2 text-sm md:text-md lg:text-[16px] text-gray-600">
                                    Password
                                </label>
                            </div>
                            <div className="relative w-full max-w-[92.5%]">
                                <input type="password" id="confirmPassword" name="confirmPassword" className="border border-gray-300 rounded-md w-full pt-2 md:pt-3 pb-1 px-4 focus:outline-none focus:ring-2 focus:ring-primary" required />
                                <label htmlFor="confirmPassword" className="absolute left-3 -top-3 bg-white px-2 text-sm md:text\
                                -md lg:text-[16px] text-gray-600">
                                    Confirm Password
                                </label>
                            </div>


                            <button type="submit" className=' w-full max-w-[92.5%] p-1 md:p-2 py-3 px-4 hover:bg-navyblue active:bg-beige active:text-navyblue hover:text-beige font-bold text-sm md:text-lg lg:text-xl font-nunito-sans rounded text-navyblue hover:font-extrabold transition border border-navyblue'>Create Account</button>

                        </form>
                        <div className='flex gap-y-2 md:ml-35'>
                            <Link to={'/login'}>
                                <p className='font-nunito-sans text-md md:text-md lg:text:lg font-normal'>Already have an account? <span className='font-nunito-sans text-md md:text-md lg:text:lg font-bold underline hover:text-background transition-all'>Login</span>
                                </p>
                            </Link>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Signup