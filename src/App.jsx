import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Signup from './pages/auth/Signup'
import Login from './pages/auth/Login'
import GigPosterLayout from './layouts/GigPosterLayout'
import RootLayout from './layouts/RootLayout'
import Landing from './pages/all-users/Landing'
import CreateGig from './pages/gig-provider/CreateGig'
import Home from './pages/gig-provider/Home'
import GigSidebar from './components/GigSidebar'
import AllBiddedGigs from './pages/gig-provider/AllBiddedGigs'
import AllGigs from './pages/gig-provider/AllGigs'
import SingleGig from './pages/gig-provider/SingleGig'
import SingleGigWithBids from './pages/gig-provider/SingleGigWithBids'
import GigPosterProfile from './pages/gig-provider/GigPosterProfile'
import ServiceProviderLayout from './layouts/ServiceProviderLayout'
import ServiceAllGigs from './pages/service-provider/ServiceAllGigs'
import CreateOffer from './pages/service-provider/CreateOffer'
import ServiceProviderProfile from './pages/service-provider/ServiceProviderProfile'
import ServiceSingleGig from './pages/service-provider/ServiceSingleGig'
import EditGigPosterProfile from './pages/gig-provider/EditGigPosterProfile'
import ServiceEditProfile from './pages/service-provider/ServiceEditProfile'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<RootLayout />}>
              <Route index={true} element={<Landing />} />
            </Route>

            <Route path='/services/gigs' element={<ServiceProviderLayout />}>
            <Route index={true} element={<ServiceAllGigs />} />
            <Route path=':id' element={<ServiceSingleGig />} />
            <Route path=':id/create-bid' element={<CreateOffer />} />
            <Route path='profile' element={<ServiceProviderProfile />} />
            <Route path='profile/edit' element={<ServiceEditProfile/>} />
            </Route>

            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />

            <Route path='/dashboard' element={<GigPosterLayout />}>
              <Route index={true} element={<Home />} />
              <Route path='create-gig' element={<CreateGig />} />
              <Route path='gigs' element={<AllGigs />} />
              <Route path='gigs/:id' element={<SingleGig />} />
              <Route path='bidded-gigs' element={<AllBiddedGigs />} />
              <Route path='bidded-gigs/:id' element={<SingleGigWithBids />} />
              <Route path='profile' element={<GigPosterProfile />} />
              <Route path='edit' element={<EditGigPosterProfile />} />

            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
