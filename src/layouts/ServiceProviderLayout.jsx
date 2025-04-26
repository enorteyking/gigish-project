import React from 'react'
import ServiceSideBar from '../components/ServiceSideBar'
import { Outlet } from 'react-router'
import ScrollTop from '../components/ScrollTop'

const ServiceProviderLayout = () => {
  return (
    <>
      <div>
      <ServiceSideBar />
        <Outlet />
      </div>
      <ScrollTop />
    </>
  )
}

export default ServiceProviderLayout