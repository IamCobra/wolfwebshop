"use client";

import { useState } from "react";
import ProductModal from "../components/ModalComponent";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Chechen Hoodie",
    price: 60,
    description: "A stylish hoodie inspired by Chechen heritage.",
    image: "/assets/testasset.jpg",
  },
  {
    id: 2,
    name: "Chechen T-shirt",
    price: 40,
    description: "A comfortable T-shirt for everyday wear.",
    image: "/assets/che-tshirt.jpg",
  },
  {
    id: 3,
    name: "Chechen Sneakers",
    price: 80,
    description: "Modern sneakers with a touch of tradition.",
    image: "/assets/greenche-sneakers.webp",
  },
];

export default function ShopPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      <div className="py-12">
        <h1 className="text-4xl font-bold text-center mb-6 text-white">
          Shop Our Collection
        </h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => openModal(product)}
              className="p-4 bg-gray-800 text-gray-300 hover:shadow-lg hover:bg-gray-700 transition rounded-lg cursor-pointer"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="object-cover rounded-lg"
              />
              <h2 className="text-xl font-bold mt-4">{product.name}</h2>
              <p className="text-gray-400">${product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}
