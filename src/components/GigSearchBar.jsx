import { SearchIcon } from 'lucide-react'
import React from 'react'

const GigSearchBar = () => {
  return (
    <>
    <div>
        <div className="relative flex items-center border border-gray-600 rounded-full px-3 py-2 w-[90%] mx-auto">
            <input type="search" name="" id="" placeholder='Search' className="w-full bg-transparent outline-none px-2 text-sm md:text-base placeholder-gray-400 caret-gray-500 text-gray-400"/>
            <SearchIcon className="w-4 h-4 md:w-5 md:h-5 text-gray-500 cursor-pointer"/>

        </div>
    </div>
    </>

  )
}

export default GigSearchBar