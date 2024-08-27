"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-lg shadow-lg"
          : "bg-black/85 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo aligned to the left */}
        <div className="flex-1">
          <Link href="/" className="text-2xl font-bold text-white">
            🐺 Berzloy 🐺
          </Link>
        </div>

        {/* Links centered */}
        <div className="hidden md:flex flex-1 justify-center space-x-6">
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

        {/* Cart button aligned to the right */}
        <div className="flex-1 flex justify-end">
          <button className="bg-white text-black px-4 py-2 rounded-md shadow-md hover:bg-gray-300 transition">
            Cart
          </button>
        </div>
      </div>
    </nav>
  );
}
