"use client";

import { useState } from "react";

// Define your clothing item type
type ClothingItem = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const clothingItems: ClothingItem[] = [
  {
    id: 1,
    name: 'Chechen Hoodie',
    price: 60,
    image: '/images/hoodie.jpg',
  },
  {
    id: 2,
    name: 'Chechen T-shirt',
    price: 40,
    image: '/images/tshirt.jpg',
  },
  {
    id: 3,
    name: 'Chechen Sneakers',
    price: 80,
    image: '/images/sneakers.jpg',
  },
  // Add more items as needed
];

export default function ClothingCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clothingItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + clothingItems.length) % clothingItems.length
    );
  };

  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden bg-gradient-to-b from-black to-gray-900">
      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-200 transition"
      >
        &#8592;
      </button>

      {/* Clothing Item */}
      <div className="flex flex-col items-center justify-center space-y-4 transition-transform duration-500">
        <img
          src={clothingItems[currentIndex].image}
          alt={clothingItems[currentIndex].name}
          className="w-80 h-80 object-cover rounded-lg shadow-lg"
        />
        <h2 className="text-3xl font-bold text-white mt-4">{clothingItems[currentIndex].name}</h2>
        <p className="text-xl text-gray-400">${clothingItems[currentIndex].price}</p>
        <button className="mt-4 bg-purple-600 hover:bg-blue-500 text-white px-6 py-2 rounded-md shadow-md transition">
          Add to Cart
        </button>
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-4 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-200 transition"
      >
        &#8594;
      </button>
    </div>
  );
}
