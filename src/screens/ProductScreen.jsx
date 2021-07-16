import React from 'react'
import TestScreen from '../components/TestScreen'

const ProductScreen = () => {
  return (
    <div className="w-full pt-16">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-700 text-center mb-8">
          Products
        </h1>
        <TestScreen />
      </div>
    </div>
  )
}

export default ProductScreen
