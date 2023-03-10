import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid sm:grid-cols-3 gap-6 '>
          {/*Card */}
          <div className="rounded-2xl relative shadow-lg shadow-black hover:scale-105 duration-300">
              {/* Overlay */}
              <div className=" text-white absolute w-full h-full bg-black/50 rounded-xl px-2">
                  <p className=" font-bold text-2xl  ">Sun's Out, BOGO's Out</p>
                  <p className="font-semibold">Through 8/26</p>
                  <button className=" text-black bg-white absolute bottom-2  rounded-xl px-4 py-1 text-sm mt-2 font-bold hover:bg-orange-600 ">Order Now</button>
              </div>
              <img src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" className=' max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'/>
          </div>
          {/*Card */}
          <div className="rounded-2xl relative shadow-lg shadow-black hover:scale-105 duration-300 ">
              {/* Overlay */}
              <div className=" text-white absolute w-full h-full bg-black/50 rounded-xl px-2">
                  <p className=" font-bold text-2xl  ">New Restaurants </p>
                  <p className="font-semibold">Added Daily</p>
                  <button className=" text-black bg-white absolute bottom-2 border-white rounded-xl px-4 py-1 text-sm mt-2 font-bold hover:bg-orange-600 ">Order Now</button>
              </div>
              <img src="https://images.pexels.com/photos/298217/pexels-photo-298217.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" className=' max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'/>
          </div>
          {/*Card */}
          <div className="rounded-2xl relative shadow-lg shadow-black hover:scale-105 duration-300 ">
              {/* Overlay */}
              <div className=" text-white absolute w-full h-full bg-black/50 rounded-xl px-2">
                  <p className=" font-bold text-2xl  ">We Deliver Desserts</p>
                  <p className="font-semibold">Tasty Treats</p>
                  <button className=" text-black bg-white absolute bottom-2 border-white rounded-xl px-4 py-1 text-sm mt-2 font-bold hover:bg-orange-600 ">Order Now</button>
              </div>
              <img src="https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" className=' max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'/>
          </div>
    </div>
  )
}

export default HeadlineCards
