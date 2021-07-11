import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import HeroSvg from '../assets/images/hero.svg'
import '../assets/css/hero-svg.css'

const HeroSection = () => {
  return (
    <div className="hero-sec h-screen w-full py-8">
      <div className="container mx-auto flex items-center justify-between py-16">
        <div className="w-1/2">
          <h1 className="text-gray-700 md:text-5xl text-3xl font-bold py-5">
            Groceries Delivered in 90 Minute
          </h1>
          <p className="text-gray-700 text-lg py-1">
            Get your healthy foods & snacks delivered at your doorsteps all day
            everyday
          </p>
          <button className="btn-primary my-8 flex items-center">
            <span className="mr-2">
              <FaShoppingCart />
            </span>
            Shop now!
          </button>
        </div>
        {/* SVG */}
        <div className="">
          <img src={HeroSvg} className="hero-svg" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
