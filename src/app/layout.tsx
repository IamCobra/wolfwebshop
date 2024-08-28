"use client";

import "./globals.css"; // Ensure this import is here
import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import TypedText from "./components/TypedText";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen w-full">
        <ThemeProvider attribute="class">
          <Navbar />
          <div className="overflow-y-scroll h-screen scroll-snap-y scroll-snap-mandatory">
            <div className="w-full h-screen scroll-snap-start flex justify-center items-center bg-black">
              <HeroSection />
            </div>
            <div className="w-full h-screen scroll-snap-start flex justify-center items-center bg-gray-800">
              <TypedText />
            </div>
            <div className="w-full h-screen scroll-snap-start flex justify-center items-center bg-gray-700">
              <section className="text-white flex flex-col justify-center items-center">
                <h2 className="text-5xl font-bold">Our Products</h2>
                <p className="mt-4 text-xl max-w-xl text-center">
                  Explore our exclusive range of Chechen-inspired clothing.
                </p>
                <button className="mt-8 bg-white text-black px-8 py-3 rounded-md shadow-md hover:bg-gray-300 transition">
                  Shop Now
                </button>
              </section>
            </div>
            <div className="w-full h-screen scroll-snap-start flex justify-center items-center bg-gray-600">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
