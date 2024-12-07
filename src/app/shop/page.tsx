"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ShopPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [sortBy, setSortBy] = useState("default");
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const products = [
    {
      slug: "chechen-hoodie",
      name: "Chechen Hoodie",
      price: 375,
      category: "Hoodies",
      inStock: true,
      image: "/assets/testasset.jpg",
    },
    {
      slug: "chechen-tshirt",
      name: "Chechen T-Shirt",
      price: 225,
      category: "T-Shirts",
      inStock: true,
      image: "/assets/che-tshirt.jpg",
    },
    {
      slug: "chechen-sneakers",
      name: "Chechen Sneakers",
      price: 400,
      category: "Sko",
      inStock: false,
      image: "/assets/greenche-sneakers.webp",
    },
    {
      slug: "chechen-cap",
      name: "Chechen Cap",
      price: 75,
      category: "Hatte",
      inStock: true,
      image: "/assets/checap.jpg",
    },
  ];

  const categories = ["Alle", "Hoodies", "T-Shirts", "Sko", "Hatte", "Ring"];

  // Filter and sort the products
  const filteredProducts = products
    .filter((product) => {
      if (selectedCategory !== "Alle" && product.category !== selectedCategory) {
        return false;
      }
      if (showInStockOnly && !product.inStock) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "priceAsc") return a.price - b.price;
      if (sortBy === "priceDesc") return b.price - a.price;
      return 0;
    });

  const newestProducts = products.slice(0, 2); // Display the first two products as the newest collection

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-white">
      <div className="container mx-auto py-20 px-6 lg:px-12">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-16">Udforsk Vores Kollektion</h1>

        {/* Filter Section */}
        <aside className="mb-12">
          <button
            onClick={toggleFilter}
            className="flex items-center justify-between bg-gray-800 text-white px-4 py-2 w-full rounded-lg shadow-md hover:bg-gray-700 transition"
          >
            <span>Filter og Sortering</span>
            {isFilterOpen ? <ChevronUp /> : <ChevronDown />}
          </button>

          {/* Smooth Filter Transition */}
          <div
            className={`mt-4 bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-[1500ms] ${
              isFilterOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            {/* Categories */}
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-2">Kategorier</h3>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-gray-700 text-white px-4 py-2 rounded-lg w-full"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Sorting */}
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-2">Sortér efter</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-700 text-white px-4 py-2 rounded-lg w-full"
              >
                <option value="default">Standard</option>
                <option value="priceAsc">Pris: Lav til høj</option>
                <option value="priceDesc">Pris: Høj til lav</option>
              </select>
            </div>

            {/* In Stock Only */}
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="inStock"
                checked={showInStockOnly}
                onChange={(e) => setShowInStockOnly(e.target.checked)}
                className="w-5 h-5"
              />
              <label htmlFor="inStock" className="text-lg">
                Kun på lager
              </label>
            </div>
          </div>
        </aside>

        {/* Nyeste Kollektion Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Nyeste Kollektion</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {newestProducts.map((product) => (
              <div
                key={product.slug}
                className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="text-lg font-semibold text-gray-300 mt-2">{product.price} kr.</p>
                  <Link
                    href={`/shop/${product.slug}`}
                    className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                  >
                    Hurtigvisning
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Products Grid */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Alle Produkter</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.slug}
                  className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <p className="text-lg font-semibold text-gray-300 mt-2">{product.price} kr.</p>
                    <p className={`mt-2 ${product.inStock ? "text-green-500" : "text-red-500"}`}>
                      {product.inStock ? "På lager" : "Ikke på lager"}
                    </p>
                    <Link
                      href={`/shop/${product.slug}`}
                      className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                    >
                      Se Produkt
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400 col-span-full">Ingen produkter matcher dine filtre.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
