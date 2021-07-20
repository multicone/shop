import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { FiHeart } from 'react-icons/fi'
import HeaderUser from './HeaderUser'
import LoginModal from './LoginModal'

const Header = () => {
  const [show, setShow] = useState(false)
  const [signedIn, setSignedIn] = useState(false)
  const [modalShow, setModalShow] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

  return (
    <nav className="bg-white w-full flex items-center py-5 z-30 top-0">
      <div className="container mx-auto px-4 lg:px-16 flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <p className="lg:text-3xl text-xl text-gray-700 font-semibold">
            Multi<span style={{ color: '#28DF99' }}>cone</span>
          </p>

          <button
            className="block md:hidden transition-all duration-500 ease-in-out"
            onClick={() => setShow(!show)}
          >
            {show ? (
              <FaTimes className="text-xl text-gray-700 hover:text-gray-100" />
            ) : (
              <FaBars className="text-xl text-gray-700 hover:text-gray-100" />
            )}
          </button>
        </div>

        <div
          className={`flex-col md:flex-row justify-center items-center md:flex transition-all duration-500 ease-in ${
            show ? 'flex' : 'hidden'
          }`}
        >
          <Link
            to="/"
            className="md:px-3 py-2 text-gray-600 font-semibold hover:text-green-500"
            onClick={() => setShow(false)}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="md:px-3 py-2 text-gray-600 font-semibold hover:text-green-500"
            onClick={() => setShow(false)}
          >
            Products
          </Link>
          <Link
            to="/faq"
            className="md:px-3 py-2 text-gray-600 font-semibold hover:text-green-500"
            onClick={() => setShow(false)}
          >
            FAQs
          </Link>
          <Link
            to="/contact"
            className="md:px-3 mb-2 lg:mr-5 md:mb-0 py-2 text-gray-600 font-semibold hover:text-green-500"
            onClick={() => setShow(false)}
          >
            Contact
          </Link>
          <div className="lg:px-3">
            {signedIn ? (
              <HeaderUser />
            ) : (
              <button
                className="btn-primary transition-all duration-400 ease-in mx-2"
                onClick={() => {
                  setModalShow(true)
                  setShowRegister(false)
                }}
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
      {/* login modal here --------------------------------------- */}
      <LoginModal
        show={modalShow}
        showRegister={showRegister}
        setShowRegister={setShowRegister}
        onClose={() => setModalShow(false)}
      />
    </nav>
  )
}

export default Header
