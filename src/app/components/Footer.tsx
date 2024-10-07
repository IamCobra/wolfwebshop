import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-4">
        
        {/* Footer Links */}
        <div className="flex flex-wrap justify-center space-x-6">
          <Link href="/shop" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
            Shop
          </Link>
          <Link href="/about" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
            About Us
          </Link>
          <Link href="/contact" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
            Contact
          </Link>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.36 4.36 0 0 0 1.9-2.4 8.48 8.48 0 0 1-2.74 1.06A4.34 4.34 0 0 0 16.46 4c-2.4 0-4.34 1.94-4.34 4.34 0 .34.04.67.1.99-3.6-.18-6.79-1.91-8.91-4.55a4.3 4.3 0 0 0-.59 2.18c0 1.51.77 2.85 1.95 3.64a4.36 4.36 0 0 1-1.97-.54v.05c0 2.11 1.5 3.87 3.5 4.27a4.37 4.37 0 0 1-1.96.07 4.36 4.36 0 0 0 4.07 3.03 8.7 8.7 0 0 1-6.4 1.79 12.3 12.3 0 0 0 6.66 1.95c7.98 0 12.36-6.6 12.36-12.35l-.01-.56A8.75 8.75 0 0 0 24 4.59a8.43 8.43 0 0 1-2.43.66 4.29 4.29 0 0 0 1.89-2.37z"/>
            </svg>
          </a>

          <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.2c3.2 0 3.6.01 4.86.07 1.18.06 1.9.25 2.34.42.56.22 1.01.49 1.46.94.45.45.72.9.94 1.46.17.44.36 1.16.42 2.34.06 1.26.07 1.66.07 4.86s-.01 3.6-.07 4.86c-.06 1.18-.25 1.9-.42 2.34-.22.56-.49 1.01-.94 1.46-.45.45-.9.72-1.46.94-.44.17-1.16.36-2.34.42-1.26.06-1.66.07-4.86.07s-3.6-.01-4.86-.07c-1.18-.06-1.9-.25-2.34-.42a3.77 3.77 0 0 1-1.46-.94 3.77 3.77 0 0 1-.94-1.46c-.17-.44-.36-1.16-.42-2.34C2.21 15.6 2.2 15.2 2.2 12s.01-3.6.07-4.86c.06-1.18.25-1.9.42-2.34.22-.56.49-1.01.94-1.46.45-.45.9-.72 1.46-.94.44-.17 1.16-.36 2.34-.42 1.26-.06 1.66-.07 4.86-.07M12 0C8.74 0 8.33.01 7.05.07c-1.31.06-2.21.26-3 .56-.83.31-1.54.73-2.21 1.4-.67.67-1.09 1.38-1.4 2.21-.3.79-.5 1.69-.56 3C.01 8.33 0 8.74 0 12c0 3.26.01 3.67.07 4.95.06 1.31.26 2.21.56 3 .31.83.73 1.54 1.4 2.21.67.67 1.38 1.09 2.21 1.4.79.3 1.69.5 3 .56 1.28.06 1.69.07 4.95.07 3.26 0 3.67-.01 4.95-.07 1.31-.06 2.21-.26 3-.56.83-.31 1.54-.73 2.21-1.4.67-.67 1.09-1.38 1.4-2.21.3-.79.5-1.69.56-3 .06-1.28.07-1.69.07-4.95 0-3.26-.01-3.67-.07-4.95-.06-1.31-.26-2.21-.56-3a6.64 6.64 0 0 0-1.4-2.21A6.64 6.64 0 0 0 20 0c-.79-.3-1.69-.5-3-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 0 0 5.84 12 6.16 6.16 0 0 0 12 18.16 6.16 6.16 0 0 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.08A3.92 3.92 0 1 1 12 8.08a3.92 3.92 0 0 1 0 7.84zm5.46-10.08a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>
            </svg>
          </a>

          {/* Add more social media links here if needed */}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Berzloy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
