import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";
import logo from '../../Assets/images/logo1.jpg'
import { MdLogout } from "react-icons/md";
import { Link } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className="bg-black text-gray-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-white flex items-center">
                        <img src={logo} alt="Logo" className="w-20 h-20" />
                        Art Gallery
                    </div>


                    {/* Profile Section for larger screens */}
                    <div className="hidden md:flex space-x-4">
                        <div className="text-gray-300 hover:text-white cursor-pointer">
                            <span className='text-4xl'><CgProfile /></span>
                        </div>
                        <div className="text-gray-300 hover:text-white cursor-pointer">
                            <Link onClick={() => localStorage.clear()} to="/" className='text-4xl'><MdLogout /></Link>
                        </div>
                    </div>

                    {/* Hamburger Menu */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-gray-300 focus:outline-none focus:ring">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {/* <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden space-y-4 pb-4`}>
                    <a href="#" className="block text-gray-300 hover:text-white">Home</a>
                    <a href="#" className="block text-gray-300 hover:text-white">About</a>
                    <a href="#" className="block text-gray-300 hover:text-white">Services</a>
                    <a href="#" className="block text-gray-300 hover:text-white">Contact</a>
                    <div className="block text-gray-300 hover:text-white cursor-pointer">
                        <span>Profile</span>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Navbar