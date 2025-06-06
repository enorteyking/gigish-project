import React, { useState } from 'react'
import { XIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { apiUpdateUser } from '../../services/auth';

const ServiceEditProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const handleUpdateUser = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      const response = await apiUpdateUser(formData);

      // Update the entire user object in localStorage
      const updatedUser = { ...user, ...response.data }; // Merge updated data with existing user data
      localStorage.setItem('user', JSON.stringify(updatedUser));

      // Update the state to reflect changes in the UI
      setUser(updatedUser);

      console.log('User info updated successfully', response);

      navigate('/services/gigs/profile');
      alert('Update successful');
  } catch (error) {
      alert(
          'Updating your profile failed: ' +
          (error.response?.data?.message || error.response?.data || error.message)
      );
  }
  }


  return (
    <>
      <div className="p-4">
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50  p-4 shadow-lg">
          <div className="bg-white p-6 rounded shadow-lg w-[70%] relative">
            <h2 className="text-xl font-bold mb-4 text-center text-navyblue font-nunito-sans">Edit Profile</h2>

            <form className="flex flex-col gap-y-6 w-[90%] mx-auto " onSubmit={handleUpdateUser} >
              <div className="relative">
                <input type="text" id="userName" name="userName" className="border border-gray-300 rounded-md w-full pt-2 md:pt-3 pb-1 px-4 focus:outline-none focus:ring-2 focus:ring-navyblue text-navyblue placeholder-gray-400" />
                <label htmlFor="userName" className="absolute left-3 -top-3 font-semibold bg-white px-2 text-sm md:text-md lg:text-[16px] text-navyblue font-nunito-sans">
                  UserName
                </label>
              </div>
              {/* <div className="relative">
                      <label htmlFor='email' className='absolute left-3 -top-3 font-semibold bg-white px-2 text-sm md:text-md lg:text-[16px] text-navyblue font-nunito-sans'>
                        Email
                      </label>
                      <input type="email" name="email" id="email" required className="border border-gray-300 rounded-md w-full pt-3 md:pt-3 pb-1 px-4 focus:outline-none focus:ring-2 focus:ring-navyblue text-navyblue placeholder-gray-400" title='Email' />
                    </div> */}

              <div className="relative">
                      <input type="file" id="profileImage" name="profileImageUrl" className="border border-gray-300 rounded-md w-full pt-2 md:pt-3 pb-1 px-4 focus:outline-none focus:ring-2 focus:ring-navyblue text-navyblue placeholder-gray-400"/>
                      <label htmlFor="profileImage" className="absolute left-3 -top-3 font-semibold bg-white px-2 text-sm md:text-md lg:text-[16px] text-navyblue font-nunito-sans">
                        Profile Image
                      </label>
                    </div>

              <button type="submit" className="bg-beige active:bg-beige text-navyblue font-bold text-sm md:text-lg lg:text-xl font-nunito-sans px-4 py-2 rounded hover:bg-navyblue hover:text-beige hover:font-extrabold transition">
                Save Changes
              </button>
            </form>

            <Link
              to={'/services/gigs/profile'}
              className="absolute top-2 left-4 text-navyblue hover:text-red-500 p-2 hover:bg-gray-300 rounded-full "
            >
              <XIcon />
            </Link>
            {/* <form className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl text-white shadow-lg">
                    <h1 className="text-2xl font-bold mb-4">Login</h1>
                    <input type="text" placeholder="Username" className="w-full p-2 mb-3 rounded bg-white bg-opacity-20 text-black" />
                    <input type="password" placeholder="Password" className="w-full p-2 mb-4 rounded bg-white bg-opacity-20 text-black" />
                    <button type='submit' className="w-full bg-blue-500 text-white py-2 rounded">Submit</button>
                  </form> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceEditProfile