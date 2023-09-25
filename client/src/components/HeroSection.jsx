import React from 'react'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
   <section className="bg-white h-full mt-10 bg-gradient-to-tl from-[#4895ef] to-[#10002b] via-[#5a189a] end-[#9d4edd] dark:bg-gray-900">
  <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Your Calls</h1>
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">On Your Fingertips!</h1>
      <p className="max-w-2xl mt-12 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl ">Welcome to the future of communication with our groundbreaking
              website. We've harnessed the power of AI to transform your
              conversations, making them smarter, more intuitive, and incredibly
              efficient. Elevate your voice, connect effortlessly, and unlock a
              world of possibilities. Say hello to a new era in conversation!</p>
      <Link to="/pricing" className=" inline-flex mt-10 items-center justify-center p-0.5 overflow-hidden text-sm font-mediumtext-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className=" px-5 py-2.5 text-white rounded-md group-hover:bg-opacity-100">
                  See Prices
                </span>
              </Link>
              <button
                type="button"
                className=" ml-8 inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
              >
                <span className=" px-5 py-2.5 text-white rounded-md group-hover:bg-opacity-100">
                  More Info
                </span>
       </button>
    </div>  
    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
      <img
            src="https://images.unsplash.com/photo-1460794418188-1bb7dba2720d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""
            className="rounded-2xl object-cover h-80 sm:h-80 lg:h-[400px] xl:h-112 2xl:h-128"/>
    </div>                
  </div>
</section>

  )
}

export default HeroSection