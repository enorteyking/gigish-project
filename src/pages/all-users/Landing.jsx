import React from 'react'
import Navbar from '../../components/Navbar'
import ScrollTop from '../../components/ScrollTop'
import GigPostCard from '../../components/GigPostCard'
import DetailedGigPost from '../../components/ServiceDetailedGigPost'
import GigWithBidCard from '../../components/GigWithBidCard'

import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

const Landing = () => {
  return (
    <div>
        <div>
        <div className="w-full text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Connect with the Right Talent, Fast
            </h1>
            <p className="text-lg mb-6">
              Post a gig or find work in minutes. Gigish connects service providers with those who need them—hassle-free.
            </p>
            <div className="flex gap-4 flex-wrap">
              {/* <Button className="bg-white text-indigo-600 font-bold">Post a Gig</Button>
              <Button variant="outline" className="text-white border-white">Find Work</Button>
              <Button variant="ghost" className="underline text-white">Watch How It Works</Button> */}
            </div>
          </motion.div>
          <motion.img
            src="/hero-illustration.svg"
            alt="Gig matching illustration"
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How Gigish Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">For Gig Posters</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Post your gig in minutes.</li>
                  <li>Review skilled applicants.</li>
                  <li>Get your job done quickly.</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">For Service Providers</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Browse posted gigs.</li>
                  <li>Apply with your profile.</li>
                  <li>Complete the task and get rated.</li>
                </ul>
              </CardContent>
            </Card> */}
            Check this part
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Can You Hire For?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {["Graphic Design", "Event Planning", "Home Repairs", "Tech Support", "Writing", "Virtual Assistance"].map((cat, i) => (
              <motion.div 
                key={cat} 
                className="bg-white shadow-md rounded-2xl p-4"
                whileHover={{ scale: 1.05 }}
              >
                <p className="font-semibold">{cat}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust and Safety */}
      <section className="bg-indigo-50 py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Why Trust Gigish?</h2>
          <div className="grid md:grid-cols-2 gap-6 text-lg">
            {[
              "Verified profiles & ratings",
              "Payment protection (Coming Soon)",
              "Dispute resolution support",
              "Transparent terms",
              "Fast matching system"
            ].map((point) => (
              <div key={point} className="bg-white p-4 shadow rounded-xl">{point}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Hear From Our Users</h2>
          {/* <div className="grid md:grid-cols-3 gap-6">
            {["Gigish helped me land three jobs in my first week!", "I found a reliable handyman within hours. Super convenient!", "Posting gigs has never been easier. This platform is gold."].map((quote, i) => (
              <Card key={i} className="shadow-md">
                <CardContent className="p-6 text-center">{quote}</CardContent>
              </Card>
            ))}
          </div> */}
          check here too
        </div>
      </section>

      {/* Coming Soon Features */}
      <section className="bg-gray-100 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Coming Soon to Gigish</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {/* {[
              ["Secure Payments", "💳 Seamless payments with gig protection."],
              ["In-App Messaging", "💬 Communicate easily with users."],
              ["AI Gig Creator", "🎙️ Speak your need. Let AI write it."],
              ["Mobile App", "📲 iOS and Android launch in progress."]
            ].map(([title, desc], i) => (
              <Card key={i} className="bg-white shadow rounded-xl p-4">
                <CardContent>
                  <h3 className="font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-sm text-gray-600">{desc}</p>
                </CardContent>
              </Card>
            ))} */}
            Check here too
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-indigo-600 text-white py-20 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-6">Whether you're looking for help or offering your skills, Gigish makes it easy.</p>
        <div className="flex flex-wrap justify-center gap-4">
          {/* <Button className="bg-white text-indigo-600 font-bold">Post a Gig Now</Button>
          <Button variant="outline" className="text-white border-white">Browse Gigs</Button> */}
        buttons check here
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Navigation</h4>
            <ul className="space-y-1">
              <li>About</li>
              <li>Contact</li>
              <li>FAQ</li>
              <li>Blog</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Newsletter</h4>
            <p className="mb-2">Get updates and insights straight to your inbox.</p>
            <input type="email" placeholder="Your email" className="p-2 w-full rounded" />
          </div>
          <div>
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <p>Social links coming soon...</p>
          </div>
        </div>
      </footer>
    </div>   
        </div>
        <ScrollTop/>
    </div>
  )
}

export default Landing
