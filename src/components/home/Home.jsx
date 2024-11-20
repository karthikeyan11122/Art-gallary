import React from 'react'
import Navbar from '../../pages/navbar/Navbar'
import Hero from '../../pages/hero/Hero'
import PaintCart from '../../pages/paintings/PaintCart'
import Features from '../../pages/Features/Features'
import Footer from '../../pages/footer/Footer'

function Home() {
  return (
    <div className='min-h-screen bg-gray-100'>
        <Navbar />

        <Hero />

        <Features />

        <PaintCart />

        <Footer />
    </div>
  )
}

export default Home