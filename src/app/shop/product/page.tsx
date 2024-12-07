"use client";

import Image from "next/image";

// Mock data for products
const products = [
  {
    slug: "chechen-hoodie",
    name: "Chechen Hoodie",
    price: 375,
    image: "/assets/testasset.jpg",
    description: "A stylish and comfortable hoodie inspired by Chechen heritage.",
  },
  {
    slug: "chechen-tshirt",
    name: "Chechen T-Shirt",
    price: 225,
    image: "/assets/che-tshirt.jpg",
    description: "A premium t-shirt showcasing Chechen pride.",
  },
  {
    slug: "chechen-sneakers",
    name: "Chechen Sneakers",
    price: 400,
    image: "/assets/greenche-sneakers.webp",
    description: "Elegant sneakers with a modern Chechen twist.",
  },
];

export default function ProductPage({ params }: { params: { product: string } }) {
  const product = products.find((p) => p.slug === params.product);

  if (!product) {
    return <div className="text-center text-white">Produkt ikke fundet</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex flex-col items-center justify-center">
      <div className="max-w-2xl bg-gray-700 p-6 rounded-lg shadow-lg">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="rounded-lg"
        />
        <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
        <p className="text-lg text-gray-300 mt-2">{product.description}</p>
        <p className="text-xl font-bold mt-4">{product.price} kr.</p>
        <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          Tilføj til kurv
        </button>
      </div>
    </div>
  );
}
