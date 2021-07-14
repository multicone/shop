import React, { useState } from 'react'
import product from '../assets/images/image.png'
import { FaRegStar, FaStar, FaShoppingCart } from 'react-icons/fa'

const ItemCard = ({
  percent = 20,
  price = '9.99',
  deletePrice = '2.00',
  title = 'Italian hot pizza',
  description = 'Extra-virgin olive oil, garlic, cheese, onions, mushrooms, green...',
}) => {
  const [Count, setCount] = useState(0)

  return (
    <div className="item-card bg-white p-4 rounded-3xl border-2 border-gray-200">
      <div className="card-img rounded-3xl">
        <div className="card-badge card-badge-black">Sale!</div>
      </div>
      <div className="card-desc py-4 px-2">
        <div className="flex">
          <FaStar className="text-yellow-400" style={{ margin: '0 2px' }} />
          <FaStar className="text-yellow-400" style={{ margin: '0 2px' }} />
          <FaStar className="text-yellow-400" style={{ margin: '0 2px' }} />
          <FaStar className="text-yellow-400" style={{ margin: '0 2px' }} />
          <FaRegStar className="text-gray-300" style={{ margin: '0 2px' }} />
        </div>
        <div>
          <h3 className="text-gray-800 font-semibold text-lg mt-3">{title}</h3>
          <p className="card-para text-gray-600">
            Extra-virgin olive oil, garlic, cheese, onions, mushrooms, green...
          </p>
        </div>
        <div className="my-1 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-lg text-yellow-400">${price}</h3>
          </div>
          <div>
            <FaShoppingCart className="card-cart text-gray-700 text-xl" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard
