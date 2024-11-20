import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Left Section */}
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl font-semibold">ArtGallery</h2>
                        <p className="text-gray-400 text-sm mt-2">
                            Bringing timeless art to your doorstep.
                        </p>
                    </div>

                    {/* Center Links */}
                    <div className="flex space-x-6 text-gray-400">
                        <a href="#about" className="hover:text-white">About Us</a>
                        <a href="#collections" className="hover:text-white">Collections</a>
                        <a href="#contact" className="hover:text-white">Contact</a>
                    </div>

                    {/* Right Section */}
                    <div>
                        <p className="text-gray-400 text-sm">© 2024 ArtGallery. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer