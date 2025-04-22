import React from 'react'
import { Outlet } from 'react-router'
import ScrollTop from '../components/ScrollTop'
import GigSidebar from '../components/GigSidebar'

const GigPosterLayout = () => {
    return (
        <>
            <div>
                <GigSidebar />
                <Outlet />
            </div>
            <ScrollTop />
        </>
    )
}

export default GigPosterLayout