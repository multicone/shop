import React from 'react'

const Login = () => {
  return (
    <>
      <label for="email" className="text-sm text-gray-500">
        Email
      </label>{' '}
      <br />
      <input
        type="email"
        placeholder="Enter your email"
        name="email"
        id="email"
        className="form-input bg-gray-100 mb-4"
      />{' '}
      <br />
      <label for="password" className="text-sm text-gray-500">
        Password
      </label>{' '}
      <br />
      <input
        type="password"
        placeholder="Type your password"
        name="password"
        id="password"
        className="form-input bg-gray-100"
      />{' '}
      <br />
      <a
        href="#"
        className="text-xs text-green-500 hover:underline my-2 mb-4 block"
      >
        Forgot password?
      </a>
      <button className="btn-primary w-full rounded-2xl block my-6">
        Sign In
      </button>
    </>
  )
}

export default Login
