import { Clock, LocateIcon, StarIcon } from 'lucide-react'
import React from 'react'

const DetailedGigPost = () => {
  return (
    <>
     <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Gig Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Design a Landing Page for a SaaS Product
      </h1>

      {/* Posted by */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/50?img=5"
            className="w-12 h-12 rounded-full"
            alt="Client Avatar"
          />
          <div>
            <p className="font-semibold text-gray-700">Jonathan B.</p>
            <p className="flex items-center text-sm text-gray-400 gap-1">
              <LocateIcon /> San Francisco, CA · <StarIcon className="text-yellow-400" /> 4.8
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-500 flex items-center gap-2">
          <Clock /> Posted 6 hours ago
        </p>
      </div>

      {/* Budget + Timeline */}
      <div className="flex gap-6 mb-6">
        <div>
          <p className="text-gray-500 text-sm">Budget</p>
          <p className="text-lg font-semibold text-green-600">$400</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Timeline</p>
          <p className="text-lg font-medium">7 Days</p>
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Project Description</h2>
        <p className="text-gray-700 leading-relaxed text-sm">
          We’re looking for a skilled UI/UX designer to create a sleek and conversion-focused
          landing page for our upcoming SaaS product. The product targets small business owners,
          and the design should be clean, modern, and mobile responsive. You'll be provided with
          brand assets and examples of inspiration.
        </p>
      </div>

      {/* Skills / Tags */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Skills Required</h2>
        <div className="flex flex-wrap gap-2">
          {["Figma", "Landing Page Design", "TailwindCSS", "Responsiveness"].map((skill, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex gap-4">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
          Apply for This Gig
        </button>
        <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg text-sm hover:bg-blue-50 transition">
          Contact Client
        </button>
      </div>
    </div>
    </>
  )
}

export default DetailedGigPost