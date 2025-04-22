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

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<RootLayout />}>
              <Route index={true} element={<Landing />} />
            </Route>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />

            <Route path='/dashboard' element={<GigPosterLayout />}>
              <Route index={true} element={<Home/>} /> 
              <Route path='create-gig' element={<CreateGig />} /> 
              <Route path='gigs' element={<AllGigs />} /> 
              <Route path='gigs/:id' element={<SingleGig />} /> 
              <Route path='bidded-gigs' element={<AllBiddedGigs />} /> 
              <Route path='bidded-gigs/:id' element={<SingleGigWithBids/>} /> 
              <Route path='profile' element={<GigPosterProfile/>} /> 
               
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
