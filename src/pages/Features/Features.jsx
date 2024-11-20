


import React from 'react'

const features = [
    {
        title: 'Original Art',
        description: ' artworks by talented artists from around the world.',
        icon: '🎨'
    },
    {
        title: 'Customizable Sizes',
        description: 'Choose the size that fits perfectly in your space.',
        icon: '📏'
    },
    {
        title: 'Affordable Pricing',
        description: 'High-quality art at prices that suit every budget.',
        icon: '💸'
    },
    {
        title: 'Quality Assurance',
        description: 'We guarantee the quality and authenticity of our artworks.',
        icon: '🔍'
    },
    {
        title: 'Secure Payment',
        description: 'Your payment information is safe and secure.',
        icon: '💳 '
    },
    {
        title: 'Customer Support',
        description: 'We are here to help you with any questions or concerns.',
        icon: '👨‍💼'
    }
];


function Features() {
  return (
    <section className="bg-gray-100 py-16 px-4">
    <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Features</h2>
        <div className="flex flex-wrap justify-center">
            {features.map((feature, index) => (
                <div key={index} className="w-full sm:w-1/3 p-4">
                    <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-300">
                        <div className="text-4xl mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-700">{feature.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
</section>
  )
}

export default Features