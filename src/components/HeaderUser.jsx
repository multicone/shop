import React from 'react'
import { Menu, Transition } from '@headlessui/react'
import { FaUserAlt } from 'react-icons/fa'

const HeaderUser = () => {
  return (
    <Menu>
      <Menu.Button className="focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 rounded-full">
        <div className="h-8 w-8 rounded-full bg-indigo-400 text-white flex justify-center items-center">
          <FaUserAlt />
        </div>
      </Menu.Button>

      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="absolute w-48 h-auto bg-white flex flex-col rounded-xl shadow-lg transform -translate-x-36 py-4 px-2 mt-3 z-20 text-sm focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={`${
                  active ? 'bg-green-500 text-white' : 'bg-white text-gray-700'
                } px-4 py-3 rounded-lg`}
              >
                Profile
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={`${
                  active ? 'bg-green-500 text-white' : 'bg-white text-gray-700'
                } px-4 py-3 rounded-lg`}
              >
                Checkout
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={`${
                  active ? 'bg-green-500 text-white' : 'bg-white text-gray-700'
                } px-4 py-3 rounded-lg`}
              >
                My orders
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={`${
                  active ? 'bg-green-500 text-white' : 'bg-white text-gray-700'
                } px-4 py-3 rounded-lg`}
              >
                Sign out
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default HeaderUser
