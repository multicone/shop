import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import HeroSvg from '../assets/images/hero.svg'
import '../assets/css/hero-svg.css'
import aos from 'aos'
import 'aos/dist/aos.css'
import Lottie from 'react-lottie'
import animationData from '../lottie/hero'
import useWindowDimensions from '../hooks/useWindowDimentions'

aos.init({
  duration: 1000,
  easing: 'ease',
})

const HeroSection = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  const { height, width } = useWindowDimensions()

  return (
    <div className="hero-sec h-auto w-full py-4">
      <div className="container mx-auto flex items-center flex-col md:flex-row md:items-start md:justify-between px-4 py-8 lg:py-16 lg:px-16">
        <div
          data-aos="fade-right"
          className="flex flex-col items-center md:items-start lg:mt-16 md:mt-8 md:w-1/2"
        >
          <h1 className="text-gray-700 lg:text-5xl text-3xl font-bold py-5 text-center md:text-left">
            Groceries Delivered in 90 Minute
          </h1>

          <p className="text-gray-700 text-md lg:text-lg py-1 text-center md:text-left">
            Get your healthy foods & snacks delivered at your doorsteps all day
            everyday
          </p>

          <button className="btn-primary my-8 flex items-center justify-self-center md:justify-self-start">
            <span className="mr-2">
              <FaShoppingCart />
            </span>
            Shop now!
          </button>
        </div>
        {/* SVG */}
        <div>
          <Lottie
            options={defaultOptions}
            height={width > 1000 ? 500 : 300}
            width={width > 1000 ? 500 : 300}
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
