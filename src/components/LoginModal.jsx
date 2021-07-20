import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import Login from './Login'
import Register from './Register'

const LoginModal = (props) => {
  if (!props.show) {
    return null
  }

  return (
    <div
      className="modal flex justify-center items-center"
      onClick={() => props.onClose()}
    >
      <div
        className="modal-content bg-white w-auto px-8 py-8 mx-8 rounded-3xl shadow-lg text-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        <FaTimes
          className="block md:hidden ml-auto text-md cursor-pointer hover:text-gray-500 my-4"
          onClick={props.onClose}
        />

        <h1 className="text-3xl font-bold text-gray-700 text-center mb-4">
          {!props.showRegister ? 'Login' : 'Register'}
        </h1>
        <form className="py-4 text-sm">
          {!props.showRegister ? <Login /> : <Register />}

          <p className="text-gray-500 text-sm">
            {!props.showRegister
              ? "Don't have an account?"
              : 'Already have an account?'}
            <a
              href="#"
              className="text-sm text-green-500 hover:underline my-2 ml-2"
              onClick={() => props.setShowRegister(!props.showRegister)}
            >
              {!props.showRegister ? 'Register' : 'Login now'}
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default LoginModal
