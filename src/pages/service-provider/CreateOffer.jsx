import React from 'react'

const CreateOffer = () => {
    return (
        <>
            <div className="absolute left-70 h-50 w-[65%] inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50  p-4 shadow-lg">
                <div className="bg-white p-6 rounded shadow-lg w-[30%] relative">
                    <form className="flex flex-col gap-y-6 w-[90%] mx-auto ">
                        <div className="relative">
                            <input type="text" id="title" name="name" className="border border-gray-300 rounded-md w-full pt-2 md:pt-3 pb-1 px-4 focus:outline-none focus:ring-2 focus:ring-navyblue text-navyblue placeholder-gray-400" required />
                            <label htmlFor="title" className="absolute left-3 -top-3 font-semibold bg-white px-2 text-sm md:text-md lg:text-[16px] text-navyblue font-nunito-sans">
                                Title
                            </label>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default CreateOffer