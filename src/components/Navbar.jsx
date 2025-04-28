import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <>
    <nav className="flex items-center justify-between p-6 shadow-md bg-white sticky top-0 z-50">
        <div className="text-2xl font-bold text-indigo-600">Gigish</div>
        <ul className="flex space-x-6 text-sm font-semibold">
          <li><a href="#features" className="hover:text-indigo-600 transition">Features</a></li>
          <li><a href="#how-it-works" className="hover:text-indigo-600 transition">How it Works</a></li>
          <li><a href="#testimonials" className="hover:text-indigo-600 transition">Testimonials</a></li>
          <li><a href="#faq" className="hover:text-indigo-600 transition">FAQ</a></li>
        </ul>
        <div className="space-x-4">
          <Link to={'/login'} className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-50 transition">Log in</Link>
          <Link to={'/signup'} className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">Sign Up</Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar