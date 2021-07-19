import React from 'react'

const Register = () => {
  return (
    <>
      <label for="name" className="text-sm text-gray-500">
        Name
      </label>{' '}
      <br />
      <input
        type="text"
        placeholder="Your name"
        name="name"
        id="name"
        className="form-input bg-gray-100 mb-4"
      />{' '}
      <br />
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
        placeholder="Password"
        name="password"
        id="password"
        className="form-input bg-gray-100 mb-4"
      />{' '}
      <br />
      <label for="confirmPass" className="text-sm text-gray-500">
        Confirm password
      </label>{' '}
      <br />
      <input
        type="password"
        placeholder="Confirm your password"
        name="password"
        id="confirmPass"
        className="form-input bg-gray-100"
      />{' '}
      <br />
      <button className="btn-primary w-full rounded-2xl block my-6">
        Create account
      </button>
    </>
  )
}

export default Register
