import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import HeroSvg from '../assets/images/hero.svg'
import '../assets/css/hero-svg.css'
import aos from 'aos'
import 'aos/dist/aos.css'

aos.init({
  duration: 1000,
  easing: 'ease',
})

const HeroSection = () => {
  return (
    
    <div className="hero-sec h-screen w-full py-4">
      <div className="container mx-auto flex items-center flex-col md:flex-row md:items-start md:justify-between px-4 py-8 lg:py-16 lg:px-16">
        <div
          data-aos="fade-right"
          className="flex flex-col items-center md:items-start lg:mt-16 md:mt-8"
        >
          <h1 className="text-gray-700 lg:text-5xl text-3xl font-bold py-5 text-center md:text-left">
  
            Groceries Delivered in 90 Minute
          </h1>

          <p className="text-gray-700 text-md lg:text-lg py-1 text-center md:text-left">
            Get your healthy foods & snacks delivered at your doorsteps all day
            everyday
          </p>

          <button className="btn-primary block my-8 flex items-center justify-self-center md:justify-self-start">
            <span className="mr-2">
              <FaShoppingCart />
            </span>
            Shop now!
          </button>
        </div>
        {/* SVG */}
        <div data-aos="fade-left">
          <img src={HeroSvg} alt="hero-svg" className="hero-svg" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
