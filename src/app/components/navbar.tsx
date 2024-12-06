"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 text-white shadow-md backdrop-blur-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold">
            🐺 Berzloy 🐺
          </Link>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-12">
          <Link href="/shop" className="hover:text-yellow-400">
            Butik
          </Link>
          <Link href="/about" className="hover:text-yellow-400">
            Omkring os
          </Link>
          <Link href="/contact" className="hover:text-yellow-400">
            Kontakt
          </Link>
          <Link href="/chechenhistory" className="hover:text-yellow-400">
            Tjetjensk Historie
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Login Button */}
          <Link href="/login" className="hover:text-yellow-400 font-medium">
            Login
          </Link>

          {/* Cart */}
          <button onClick={() => setCartOpen(!cartOpen)}>
            <ShoppingCartIcon className="w-6 h-6 hover:text-yellow-400" />
          </button>
        </div>
      </div>
    </nav>
  );
}
