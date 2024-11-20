import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PaintCart = () => {
    const [paintings, setPaintings] = useState([]); // Initialize paintings state
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const fetchPaintings = async () => {
            try {
                const response = await axios.get('http://localhost:3001/paintings'); // Fetch data from the API
                setPaintings(response.data); // Set the paintings data from API
                setLoading(false); // Stop loading
            } catch (error) {
                console.error('Error fetching paintings:', error);
                setLoading(false); // Stop loading on error
            }
        };

        fetchPaintings(); // Call the function to fetch data
    }, []); // Empty dependency array to call this only once

    if (loading) return <div>Loading...</div>; // Show loading state while data is fetching

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Purchase Your Paintings</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {paintings.map((painting) => (
                    <div key={painting.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            className="w-full h-48 object-cover"
                            src={`http://localhost:3001${painting.imageUrl}`} // Image URL from server
                            alt={painting.name}
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{painting.name}</h2>
                            <p className="text-gray-500 mt-2">Price: ${painting.price}</p>
                            <button className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-gray-600">
                                Buy Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default PaintCart;
