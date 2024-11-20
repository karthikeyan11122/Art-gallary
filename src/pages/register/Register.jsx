import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

function Register() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = async (e) => {
        e.preventDefault();
    
        try {
            const res = await axios.post("http://localhost:3001/register", {
                name,
                email,
                password,
            });
    
            if (res.status === 200) {
                Swal.fire({
                    title: "Registration Successful!",
                    icon: "success",
                    confirmButtonText: "ok",
                    confirmButtonColor: "#3085d6",
                })
                setName("");
                setEmail("");
                setPassword("");
                setTimeout(() => {
                    window.location.href = "/";

                }, 2000);

            } else {
                Swal.fire({
                    title: "Registration Failed!",
                    icon: "error",
                    confirmButtonText: "ok",
                    confirmButtonColor: "#dc3545",
                })
            }
        } catch (err) {
            console.error(err);
            alert("Registration failed!");
        }
    };
    

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: "url('https://media.istockphoto.com/id/1319162742/photo/professional-artists-studio-work-desk.jpg?s=612x612&w=0&k=20&c=f_GnRIvBKHjHOQhgYavzzQgVRwWGM9fhQvxrLx6rvdc=')",
            }}        >
            {/* Overlay for dimming */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Registration Card */}
            <div className="relative bg-gradient-to-br from-white via-gray-100 to-gray-400 shadow-lg rounded-lg p-8 max-w-md w-full z-10">
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                    Create Your Account
                </h2>
                <form className="space-y-6">
                    {/* Full Name */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                        />
                    </div>

                    {/* Email Address */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        onClick={handleRegister}
                        type="submit"
                        className="w-full bg-black text-white py-2 px-4 rounded-md shadow hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Register
                    </button>
                </form>

                {/* Login Link */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link to="/" className="text-black font-semibold hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register