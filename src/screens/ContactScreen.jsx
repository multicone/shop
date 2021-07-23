import React from 'react'
import { ReactComponent as ContactUs } from '../assets/images/contact_us.svg'

const ContactScreen = () => {
  return (
    <div className="w-full h-auto">
      <div className="container mx-auto bg-white mt-8 py-8 flex flex-col">
        <div className=" bg-gray-50 shadow-xl max-w-screen-xl w-full h-auto mx-auto px-8 md:px-16 py-10 md:py-20 rounded-lg text-gray-700 grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-3xl md:text-5xl font-bold">
              Got any questions?
            </h1>
            <div className="w-full h-auto">
              <ContactUs
                className="mt-12"
                style={{ width: '90%', height: '100%' }}
              />
            </div>
          </div>
          <div className="flex flex-col items-stretch">
            <form className="mt-8 md:mt-0">
              {' '}
              {/* form start ---------------------------------------------- */}
              <label for="name" className="text-sm text-gray-500">
                Name
              </label>{' '}
              <br />
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                id="name"
                className="w-full bg-white px-4 py-3 rounded-lg text-sm mb-4 mt-1 focus:outline-none focus:ring-1 focus:ring-green-400 focus:ring-offset-2"
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
                className="w-full bg-white px-4 py-3 rounded-lg text-sm mb-4 mt-1 focus:outline-none focus:ring-1 focus:ring-green-400 focus:ring-offset-2"
              />{' '}
              <br />
              <label for="message" className="text-sm text-gray-500">
                Message
              </label>{' '}
              <textarea
                name="message"
                cols="30"
                rows="5"
                id="message"
                placeholder="What's on your mind?"
                className="text-sm bg-white w-full px-4 py-3 mt-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-400 focus:ring-offset-2"
              ></textarea>
              <button className="btn-primary w-full rounded-2xl block my-6 focus:outline-none focus:ring-1 focus:ring-green-400 focus:ring-offset-2">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactScreen
