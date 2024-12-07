"use client";

import Link from "next/link";
import Image from "next/image";

export default function ShopPage() {
  const products = [
    {
      slug: "chechen-hoodie",
      name: "Chechen Hoodie",
      price: 375,
      image: "/assets/testasset.jpg",
      description: "En stilet og komfortabel hættetrøje inspireret af tjetjensk arv.",
    },
    {
      slug: "chechen-tshirt",
      name: "Chechen T-Shirt",
      price: 225,
      image: "/assets/che-tshirt.jpg",
      description: "En premium t-shirt, der viser tjetjensk stolthed.",
    },
    {
      slug: "chechen-sneakers",
      name: "Chechen Sneakers",
      price: 400,
      image: "/assets/greenche-sneakers.webp",
      description: "Elegante sneakers med et moderne tjetjensk twist.",
    },
  ];

  return (
    <main className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-white">
      {/* Produkter */}
      <section
        id="products"
        className="container mx-auto py-24 px-6 lg:px-12"
      >
        <h2 className="text-4xl font-bold text-center mb-8">Vores Kollektion</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product) => (
            <div
              key={product.slug}
              className="relative bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-105 transition-transform"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold">{product.name}</h3>
              <p className="text-gray-400 mt-2">{product.description}</p>
              <p className="text-xl font-bold mt-4">{product.price} kr.</p>
              <Link
                href={`/shop/${product.slug}`}
                className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Se Produkt
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
