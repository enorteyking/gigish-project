import { CalendarClockIcon, ClipboardCheckIcon, Clock, EarthIcon, MapPinIcon, PhoneIcon, SmartphoneIcon, User } from 'lucide-react'
import React from 'react'

const GigPostCard = () => {
    return (
        <>
            <div className='border-b border-gray-300 py-8'>
                <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 border-t-5 border-t-red-500">
                    <div className="p-6">
                        {/* Gig Title */}
                        <h2 className="text-xl font-bold text-gray-800 mb-2">Create a Modern UI Website</h2>

                        <div className='flex items-center gap-x-2 mb-2 border border-gray-200 rounded-lg px-2'>
                            <div className='bg-gray-300 w-30 h-30 rounded-md shadow-md p-3 flex flex-col gap-x-3'>
                                <h3 className='text-[15px] font-semibold text-gray-700'>Estimated Pay</h3>
                                <span className="font-semibold text-green-600 flex justify-center text-4xl py-3">₵250</span>
                            </div>
                            <div className='p-3 flex flex-col gap-y-2 items-start'>
                                <div className='flex items-center justify-center gap-x-2'>
                                    <User className='w-5 text-gray-600' />
                                    <span className='text-sm text-gray-700'>Web Designer</span>
                                </div>
                                <div className='flex items-center justify-center gap-x-2'>
                                    <CalendarClockIcon className='w-5 text-gray-600' />
                                    <span className='text-sm text-gray-700'>Wed, 24th May, 2025 @7am</span>
                                </div>
                                <div className='flex items-center justify-center gap-x-2'>
                                    <MapPinIcon className='w-5 text-gray-600' />
                                    <span className='text-sm text-gray-700'>Accra</span>
                                </div>
                                <div className='flex items-center justify-center gap-x-2'>
                                    <SmartphoneIcon className='w-5 text-gray-600' />
                                    <span className='text-sm text-gray-700'>Pay on completion</span>
                                </div>

                            </div>
                        </div>

                        {/* Category and Budget */}
                        {/* <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                            <span>💻 Web Design</span>

                        </div> */}

                        {/* Short Description */}
                        <p className="text-gray-600 text-sm mb-4">
                            Looking for a frontend developer to build a modern responsive website for a fashion brand using React and Tailwind.
                        </p>

                        {/* Tags / Skills */}
                        <div className="flex flex-wrap gap-2 text-xs mb-4">
                            {["React", "TailwindCSS", "UI Design"].map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between">
                            {/* Posted by */}
                            <div className="flex items-center space-x-2">
                                <img
                                    src="https://i.pravatar.cc/40?img=3"
                                    alt="avatar"
                                    className="w-10 h-10 rounded-full "
                                />
                                <div>
                                    <p className="text-sm font-semibold text-gray-700">Emily J.</p>
                                    <span className='flex items-center gap-x-1'>
                                        <h3 className='text-[#424f74]'>Just now.</h3>
                                        <EarthIcon className='h-4 w-4 text-gray-500' />
                                    </span>
                                </div>
                            </div>

                            {/* Button */}
                            <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GigPostCard