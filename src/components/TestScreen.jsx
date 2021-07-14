import React from 'react'
import ItemCard from './ItemCard'

const TestScreen = () => {
  return (
    <div className="w-screen py-10">
      <div className=" grid grid-flow-row grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center items-center">
        <div className="flex justify-center item-center">
          <ItemCard />
        </div>
        <div className="flex justify-center item-center">
          <ItemCard />
        </div>
        <div className="flex justify-center item-center">
          <ItemCard />
        </div>
        <div className="flex justify-center item-center">
          <ItemCard />
        </div>
        <div className="flex justify-center item-center">
          <ItemCard />
        </div>
      </div>
    </div>
  )
}

export default TestScreen
