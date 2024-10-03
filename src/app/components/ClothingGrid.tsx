"use client";

import { CartItem } from './types';

type ClothingGridProps = {
  addToCart: (item: CartItem) => void;
};

const products: CartItem[] = [
  { id: 1, name: 'Chechen Hoodie', price: 60, image: '/images/hoodie.jpg' },
  { id: 2, name: 'Chechen T-shirt', price: 40, image: '/images/tshirt.jpg' },
  { id: 3, name: 'Chechen Sneakers', price: 80, image: '/images/sneakers.jpg' },
];

export default function ClothingGrid({ addToCart }: ClothingGridProps) {
  return (
    <div className="p-8 bg-gradient-to-b from-gray-900 to-black min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center text-white">Shop Our Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">{product.name}</h2>
              <p className="text-lg text-gray-700">${product.price}</p>
              <button
                className="mt-4 w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 rounded-md hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-300 transition-colors duration-300"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
