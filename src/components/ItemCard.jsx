import React, { useState } from 'react'
import product from '../assets/images/product.jpg'

const ItemCard = ({ percent = 20, price = '10.01', deletePrice = '2.00', title = 'Apples' }) => {
    const [Count, setCount] = useState(0)
    return (
        <div className="w-60 card mx-2 bg-white shadow-md">
            <div class="relative flex items-center justify-center cursor-pointer w-auto h-48 sm:h-64">
                <span class="sr-only">Product Image</span>
                <div style={{ display: 'block', overflow: 'hidden', position: 'absolute', inset: '0px', boxSizing: 'border-box', margin: '0px' }}>
                    <img src={product} alt="" />
                </div>
                <div class="absolute top-3 end-3 md:top-4 md:end-4 rounded text-xs leading-6 font-semibold px-1.5 sm:px-2 md:px-2.5 bg-green-600 text-gray-200">{percent}%</div>
            </div>
            <header class="p-3 md:p-6">
                <div class="flex items-center mb-2">
                    <span class="text-sm md:text-base text-heading font-semibold">${price}</span>
                    <del class="text-xs md:text-sm text-gray-400 mx-2">${deletePrice}</del>
                </div>
                <h3 class="text-xs md:text-sm text-body truncate mb-4 cursor-pointer">{title}</h3>
                <button class="group w-full h-7 md:h-9 flex items-center justify-between text-xs md:text-sm text-body-dark rounded bg-gray-100 transition-colors hover:bg-green-600 hover:border-accent hover:text-white focus:outline-none focus:bg-accent focus:border-accent focus:text-light">
                    {Count > 0 && (
                        <span onClick={(e) => setCount(Count - 1)} class="w-7 h-7 md:w-9 md:h-9 bg-gray-200 grid place-items-center rounded transition-colors duration-200 group-hover:bg-green-700 group-hover:text-white group-focus:bg-accent-600">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-3 w-3 stroke-2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4"></path></svg>
                        </span>
                    )}
                    {
                        Count > 0 ? (
                            <span class="flex-1">{Count}</span>

                        ) : (
                            <span class="flex-1" onClick={(e) => setCount(1)}>Add</span>

                        )
                    }
                    <span onClick={(e) => setCount(Count + 1)} class="w-7 h-7 md:w-9 md:h-9 bg-gray-200 grid place-items-center rounded transition-colors duration-200 group-hover:bg-green-700 group-hover:text-white group-focus:bg-accent-600">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 stroke-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6">
                            </path>
                        </svg>
                    </span>
                </button>
            </header>
        </div>
    )
}

export default ItemCard
