import React from 'react'
import hero1 from '../../Assets/images/hero2.jpg'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-gray-500 via-white to-black text-white py-20 px-4 text-center">
    <div className="absolute inset-0">
      <img
        src={hero1}
        alt="Delicious food"
        className="object-cover w-full h-full opacity-60"
      />
      <div className="absolute inset-0 bg-black opacity-40"></div>
    </div>
    <div className="relative z-10">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-gradient bg-clip-text">
      Find the Perfect for <span className='text-black'>Artwork</span> Your Space 
      </h1>
      <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
      The purpose of art is washing the dust of daily life off our souls. It allows us to see the world with fresh eyes,
       and transforms our mundane surroundings into a space of beauty and inspiration
      </p>
      <Link
        to={"/upload"}
        className="inline-block bg-black text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-lg hover:bg-gray-800 transition duration-300"
      >
        Upload Now 
      </Link>
    </div>
  </section>

  )
}

export default Hero