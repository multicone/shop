import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [show, setShow] = useState(false)
  return (
    <nav className="bg-gray-100 w-full flex items-center py-4">
      <div className="container mx-auto px-4 lg:px-16 flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <p className="text-3xl text-gray-700 font-semibold">
            Multi<span className="text-green-500">cone</span>
          </p>

          <button
            className="block md:hidden transition-all duration-500 ease-in-out"
            onClick={() => setShow(!show)}
          >
            {show ? (
              <FaTimes className="text-2xl hover:text-gray-500" />
            ) : (
              <FaBars className="text-2xl hover:text-gray-500" />
            )}
          </button>
        </div>

        <div
          className={`flex-col md:flex-row justify-center items-center md:flex transition-all duration-500 ease-in ${
            show ? 'flex' : 'hidden'
          }`}
        >
          <a
            href="/home"
            className="md:px-2 py-2 text-gray-700 hover:text-green-500"
          >
            Home
          </a>
          <a
            href="/products"
            className="md:px-2 py-2 text-gray-700 hover:text-green-500"
          >
            Products
          </a>
          <a
            href="/about"
            className="md:px-2 mb-2 md:mb-0 py-2  text-gray-700 hover:text-green-500"
          >
            About
          </a>
          <button className="btn-primary transition-all duration-400 ease-in">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header
