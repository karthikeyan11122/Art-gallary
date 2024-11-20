import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


function Login() {
    // State for form inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handle login form submission
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:3001/login", {
                email,
                password,
            });

            if (res.status === 200) {
                Swal.fire({
                    title: "Login successful!",
                    icon: "success",
                    timer:2000,
                    confirmButtonText: "Close",
                })
                setTimeout(() => {
                    window.location.href = "/home";
                }, 2000);
            } else {
                Swal.fire({
                    title: 'Login failed!',
                    icon: 'error',
                });
            }
        } catch (err) {
            console.error(err);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: "url('https://media.istockphoto.com/id/1319162742/photo/professional-artists-studio-work-desk.jpg?s=612x612&w=0&k=20&c=f_GnRIvBKHjHOQhgYavzzQgVRwWGM9fhQvxrLx6rvdc=')",
            }}
        >
            {/* Overlay for dimming */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Login Card */}
            <div className="relative bg-gradient-to-br from-white via-gray-100 to-gray-400 shadow-lg rounded-lg p-8 max-w-md w-full z-10">
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                    Login
                </h2>
                <form className="space-y-6" onSubmit={handleLogin}>
                    {/* Email Input */}
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

                    {/* Password Input */}
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
                        type="submit"
                        className="w-full bg-black text-white py-2 px-4 rounded-md shadow hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Login
                    </button>
                </form>

                {/* Sign Up Link */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{" "}
                        <Link to="/register" className="text-black font-semibold hover:underline">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
