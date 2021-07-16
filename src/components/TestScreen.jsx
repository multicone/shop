import React from 'react'
import ItemCard from './ItemCard'

const TestScreen = () => {
  return (
    <div className="w-full h-auto py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex justify-center">
          <ItemCard />
        </div>
        <div className="flex justify-center">
          <ItemCard />
        </div>
        <div className="flex justify-center">
          <ItemCard />
        </div>
        <div className="flex justify-center">
          <ItemCard />
        </div>
      </div>
    </div>
  )
}

export default TestScreen
