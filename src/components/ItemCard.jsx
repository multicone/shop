import React, { useState } from 'react'
import product from '../assets/images/image.png'

const ItemCard = ({
  percent = 20,
  price = '10.01',
  deletePrice = '2.00',
  title = 'Apples',
}) => {
  const [Count, setCount] = useState(0)
  return (
    <div className="p-4 h-64 w-48 rounded-lg border-1 border-gray-100">
      <div>image</div>
      <div>description</div>
    </div>
  )
}

export default ItemCard
