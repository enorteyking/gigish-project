import { useState } from 'react';
import { XIcon } from 'lucide-react';
import { Link } from 'react-router';


export default function CreateGig() {
    // const [showForm, setShowForm] = useState(false);

    return (
        <div className="p-4">
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50  p-4 shadow-lg">
                <div className="bg-white p-6 rounded shadow-lg w-[70%] relative">
                  <h2 className="text-xl font-bold mb-4 text-center text-background font-nunito-sans">Create a Gig</h2>
  
                  <form className="flex flex-col gap-y-6 w-[90%] mx-auto ">
                    <div className="relative">
                      <input type="text" id="title" name="name" className="border border-gray-300 rounded-md w-full pt-2 md:pt-3 pb-1 px-4 focus:outline-none focus:ring-2 focus:ring-background/80" required />
                      <label htmlFor="title" className="absolute left-3 -top-3 bg-white px-2 text-sm md:text-md lg:text-[16px] text-background font-nunito-sans">
                        Title
                      </label>
                    </div>
                    <div className="relative">
                      <label htmlFor='description' className='absolute left-3 -top-3 bg-white px-2 text-sm md:text-md lg:text-[16px] text-background font-nunito-sans'>
                        Description
                      </label>
                      <textarea type="text" name="description" id="description" required className="border border-gray-300 rounded-md w-full pt-3 md:pt-3 pb-10 px-4 focus:outline-none focus:ring-2 focus:ring-background/80" placeholder='Hint: In your description, you can add the estimated duration for a gig to last, as well as other requirements for the gig.' title='Description' ></textarea>
                    </div>
  
                    <div className='relative'>
                      <label htmlFor="priceInput" className='absolute left-3 -top-3 bg-white px-2 text-sm md:text-md lg:text-[16px] text-background font-nunito-sans'>Offer Price (cedis)</label>
                      <input type="number" name="gigProviderOfferPrice" id="priceInput" placeholder='How much are you willing to pay' className="border border-gray-300 rounded-md w-full pt-2 md:pt-3 pb-1 px-4 focus:outline-none focus:ring-2 focus:ring-background/80" title='Offer Price' required />
                    </div>
  
                    <div className='flex gap-x-10'>
                      <div className="relative w-[48%]">
                        <input type="datetime-local" id="biddingWindow" name="gigOfferOpenWindow" className="border border-gray-300 rounded-md w-full pt-2 md:pt-3 pb-1 px-4 focus:outline-none focus:ring-2 focus:ring-background/80" required />
                        <label htmlFor="biddingWindow" className="absolute left-3 -top-3 bg-white px-2 text-sm md:text-md lg:text-[16px] text-background font-nunito-sans">
                          Gig Bidding Window
                        </label>
                      </div>
  
  
                      <div className="relative w-[48%]">
                        <input type="datetime-local" id="gigStartDate" name="gigstartDate" className="border border-gray-300 rounded-md w-full pt-2 md:pt-3 pb-1 px-4 focus:outline-none focus:ring-2 focus:ring-background/80" required />
                        <label htmlFor="gigStartDate" className="absolute left-3 -top-3 bg-white px-2 text-sm md:text-md lg:text-[16px] text-background font-nunito-sans">
                          Gig Start Date
                        </label>
                      </div>
                    </div>
                    <div className="relative">
                      <input type="file" id="image" name="image" className="border border-gray-300 rounded-md w-full pt-2 md:pt-3 pb-1 px-4 focus:outline-none focus:ring-2 focus:ring-background/80" />
                      <label htmlFor="image" className="absolute left-3 -top-3 bg-white px-2 text-sm md:text-md lg:text-[16px] text-background font-nunito-sans">
                        Image (Optional)
                      </label>
                    </div>
                    <div className="relative">
                      <input type="text" id="location" name="location" className="border border-gray-300 rounded-md w-full pt-2 md:pt-3 pb-1 px-4 focus:outline-none focus:ring-2 focus:ring-background/80" placeholder='Where will the gig happen?'/>
                      <label htmlFor="location" className="absolute left-3 -top-3 bg-white px-2 text-sm md:text-md lg:text-[16px] text-background font-nunito-sans">
                        Location
                      </label>
                    </div>
  
  
                    <button type="submit" className="bg-background active:bg-background text-white font-nunito-sans px-4 py-2 rounded hover:bg-primary">
                      Submit
                    </button>
                  </form>
  
                  <Link
                    to={'/dashboard'}
                    onClick={() => setShowForm(false)}
                    className="absolute top-2 left-4 text-primary hover:text-red-500"
                  >
                    <XIcon/>
                  </Link>
                  {/* <form className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl text-white shadow-lg">
                    <h1 className="text-2xl font-bold mb-4">Login</h1>
                    <input type="text" placeholder="Username" className="w-full p-2 mb-3 rounded bg-white bg-opacity-20 text-black" />
                    <input type="password" placeholder="Password" className="w-full p-2 mb-4 rounded bg-white bg-opacity-20 text-black" />
                    <button type='submit' className="w-full bg-blue-500 text-white py-2 rounded">Submit</button>
                  </form> */}
                </div>
              </div>
        </div>
    );
}
