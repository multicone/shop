import React, { useState } from 'react'
import { FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa'

const HeaderUser = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <button
        className="w-auto h-10 bg-white rounded-xl px-4 py-2 flex items-center focus:outline-none transition-all duration-500 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="h-8 w-8 rounded-full bg-purple-300 transition-all duration-300 ease-out text-white flex justify-center items-center mr-2">
          <FaUser />
        </div>
        <div>
          <p className="text-gray-700">Labu</p>
        </div>
      </button>
      {isOpen ? (
        <div className="bg-white w-48 text-gray-700 flex flex-col justify-center absolute shadow-lg rounded-xl mt-4 py-5 z-10">
          <a
            href="#"
            className=" py-2 px-4 dropdown-link transition-all flex items-center duration-400 ease-in-out hover:text-green-400"
          >
            <FaUser className="mr-1" /> Profile
          </a>
          <a
            href="#"
            className=" py-2 px-4 dropdown-link transition-all flex items-center duration-400 ease-in-out hover:text-green-400"
          >
            <FaCog className="mr-1" /> Setting
          </a>
          <a
            href="#"
            className=" py-2 px-4 dropdown-link transition-all flex items-center duration-400 ease-in-out hover:text-green-400"
          >
            <FaSignOutAlt className="mr-1" /> Sign out
          </a>
        </div>
      ) : null}
    </div>
  )
}

export default HeaderUser
