"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

// Define type for the items in the cart
type CartItem = {
  id: number;
  name: string;
  price: number;
};

export default function Navbar() {
  const [blurAmount, setBlurAmount] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]); // Correct type for cartItems

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const calculatedBlur = Math.min(scrollY / 10, 20);
      setBlurAmount(calculatedBlur);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to add items to the cart with proper type definition
  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/70 shadow-lg`}
    >
      <div
        className="w-full mx-auto flex items-center justify-between p-4"
        style={{ filter: `blur(${blurAmount}px)` }}
      >
        <div className="flex-shrink-0">
          <Link href="/" className="text-2xl font-bold text-white">
            🐺 Berzloy 🐺
          </Link>
        </div>

        <div className="flex-grow hidden md:flex justify-center space-x-20">
          <Link href="/" className="text-white hover:text-yellow-400 transition-colors duration-200">
            Home
          </Link>
          <Link href="/shop" className="text-white hover:text-yellow-400 transition-colors duration-200">
            Shop
          </Link>
          <Link href="/about" className="text-white hover:text-yellow-400 transition-colors duration-200">
            About Us
          </Link>
          <Link href="/contact" className="text-white hover:text-yellow-400 transition-colors duration-200">
            Contact
          </Link>
        </div>

        <div className="flex-shrink-0 justify-end relative">
          <button
            className="text-white hover:text-yellow-400 transition mr-4"
            onClick={() => setCartOpen(!cartOpen)}
          >
            <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
          </button>

          {cartOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white text-black shadow-lg rounded-md p-4">
              <h3 className="font-bold">Your Cart</h3>
              <ul className="mt-2">
                {cartItems.length > 0 ? (
                  cartItems.map((item, index) => (
                    <li key={index} className="py-2 border-b">
                      {item.name} - ${item.price}
                    </li>
                  ))
                ) : (
                  <li className="py-2">Your cart is empty.</li>
                )}
              </ul>
              {cartItems.length > 0 && (
                <button className="w-full bg-black text-white mt-4 py-2 rounded-md hover:bg-gray-800 transition">
                  Checkout
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
