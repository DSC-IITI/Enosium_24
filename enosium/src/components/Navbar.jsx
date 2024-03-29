import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full bg-blue-900 text-gray-100 body-font mb-4 shadow-sm">

      {/* :DESKTOP MENU */}
      <div className=" mx-auto flex justify-between items-center py-4 px-5">
        {/* Site logo and Name */}
        <a href="#link" className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0">
          <img src='https://enosium23.netlify.app/assets/img/logo/logo.png'></img>
        </a>
        {/* Navbar */}
        <nav className="hidden md:ml-auto md:flex flex-wrap items-center justify-center text-base tracking-wide">
          <a href="#link" className="mr-8 hover:text-violet-300">Home</a>
          <a href="#link" className="mr-8 hover:text-gray-300">About</a>
          <a href="#link" className="mr-8 hover:text-gray-300">Sponsors</a>
          <a href="#link" className="mr-8 hover:text-gray-300">Schedule</a>
          <a href="#link" className="mr-8 hover:text-gray-300">Prize</a>
          <a href="#link" className="mr-8 hover:text-gray-300">FAQs</a>
        </nav>
        {/* Burger icon standard */}
        <button 
          className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 rounded-md text-gray-300 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-pink-500 hover:to-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* :MOBILE MENU */}
      { isOpen &&
        <div className="w-full flex flex-col py-4 px-3 md:hidden bg-gray-900 text-base uppercase text-center font-semibold">
          <a href="#link" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700">Home</a>
          <a href="#link" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700">About</a>
          <a href="#link" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700">Sponsors</a>
          <a href="#link" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700">Schedule</a>
          <a href="#link" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700">Prize</a>
          <a href="#link" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700">FAQs</a>
        </div>
      }
      
    </header>
  )
}

export default Navbar
