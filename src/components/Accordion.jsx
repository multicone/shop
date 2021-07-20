import React, { useState } from 'react'
import { FaDove } from 'react-icons/fa'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="w-full mb-6">
      <div
        className="flex justify-between bg-gray-200 px-8 py-4 text-sm rounded-lg cursor-pointer"
        onClick={() => setIsActive(!isActive)}
      >
        <div>
          <p className="text-gray-700 font-semibold">{title}</p>
        </div>
        <div>
          {isActive ? (
            <HiChevronUp className="text-xl text-gray-700" />
          ) : (
            <HiChevronDown className="text-xl text-gray-700" />
          )}
        </div>
      </div>

      {isActive ? (
        <div className="bg-white border-2 border-gray-200 rounded-lg py-5 px-4 text-sm text-gray-700">
          {content}
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Accordion
