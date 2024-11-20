import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const UploadImg = () => {
    const [image, setImage] = useState(null);
    const [imageName, setImageName] = useState('');
    const [imagePrice, setImagePrice] = useState('');
    const [message, setMessage] = useState('');

    // Handle Image Change
    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    // Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!image || !imageName || !imagePrice) {
            setMessage('Please fill in all fields.');
            return;
        }

        const formData = new FormData();
        formData.append('image', image);
        formData.append('imageName', imageName);
        formData.append('imagePrice', imagePrice);

        try {
            const response = await axios.post('http://localhost:3001/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Show SweetAlert success message
            Swal.fire({
                icon: 'success',
                title: 'Upload Successful!',
                text: response.data.message || 'Your image has been uploaded successfully.',
            });

            setImage(null);
            setImageName('');
            setImagePrice('');
            window.location.href = 'home';
        } catch (error) {
            // Show SweetAlert error message
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'There was an error uploading your image.',
            });
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-300">
            <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden">
                {/* Left Side Form */}
                <div className="w-full lg:w-1/2 p-8">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Upload Your Paintings</h2>

                    {message && <p className="text-center text-red-500 mb-4">{message}</p>}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-gray-600 font-semibold mb-2" htmlFor="image">
                                Image
                            </label>
                            <input
                                type="file"
                                id="image"
                                accept="image/*"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
                                onChange={handleImageChange}
                            />
                        </div>

                        {/* Image Name */}
                        <div>
                            <label className="block text-gray-600 font-semibold mb-2" htmlFor="imageName">
                                Image Name
                            </label>
                            <input
                                type="text"
                                id="imageName"
                                value={imageName}
                                onChange={(e) => setImageName(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
                                placeholder="Enter image name"
                            />
                        </div>

                        {/* Image Price */}
                        <div>
                            <label className="block text-gray-600 font-semibold mb-2" htmlFor="imagePrice">
                                Image Price
                            </label>
                            <input
                                type="number"
                                id="imagePrice"
                                value={imagePrice}
                                onChange={(e) => setImagePrice(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
                                placeholder="Enter image price"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition duration-200"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* Right Side Image */}
                <div className="hidden lg:block w-1/2 bg-gray-100">
                    <img
                        src={'https://wallpapers.com/images/featured/black-and-white-abstract-art-h2ophnrri7yhe7hq.jpg'}
                        alt="Upload Preview"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default UploadImg;
