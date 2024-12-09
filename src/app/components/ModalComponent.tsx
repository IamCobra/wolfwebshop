"use client";

import { useState } from "react";
import Image from "next/legacy/image";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

type ModalProps = {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
};

const ProductModal = ({ product, isOpen, onClose }: ModalProps) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      {/* Modal Content */}
      <div className="bg-gray-900 text-gray-300 rounded-lg shadow-lg w-full max-w-2xl p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-100"
        >
          ✕
        </button>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Product Image */}
          <div className="w-full md:w-1/2">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="object-cover rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="text-gray-400 mt-2">${product.price}</p>
            <p className="text-gray-400 mt-4">{product.description}</p>

            {/* Size Selection */}
            <div className="mt-4">
              <label className="block text-gray-400 mb-2">Choose Size:</label>
              <select className="w-full bg-gray-800 text-white rounded-md p-2">
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>X-Large</option>
              </select>
            </div>

            {/* Add to Cart Button */}
            <button className="mt-6 bg-purple-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md shadow-md transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
