
"use client";

import "./globals.css";
import Navbar from "../components/navbar";
import HeroSection from "../components/HeroSection";
import TypedText from "../components/TypedText";
import { ThemeProvider } from "next-themes";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen w-full">
        <ThemeProvider attribute="class">
          <Navbar />
          <div className="overflow-y-scroll h-screen scroll-snap-y scroll-snap-mandatory">
            {/* Hero Section */}
            <div id="home" className="w-full h-screen scroll-snap-start flex justify-center items-center bg-black">
              <HeroSection />
            </div>
            
            {/* Shop Section */}
            <div id="shop" className="w-full h-screen scroll-snap-start flex justify-center items-center bg-gray-800">
              <section className="text-white flex flex-col justify-center items-center">
                <h2 className="text-5xl font-bold">Shop Our Collection</h2>
                <p className="mt-4 text-xl max-w-xl text-center">Explore our exclusive range of Chechen-inspired clothing.</p>
                <TypedText />
              </section>
            </div>

            {/* About Section */}
            <div id="about" className="w-full h-screen scroll-snap-start flex justify-center items-center bg-gray-700">
              <section className="text-white flex flex-col justify-center items-center">
                <h2 className="text-5xl font-bold">About Us</h2>
                <p className="mt-4 text-xl max-w-xl text-center">Learn more about our mission and values.</p>
              </section>
            </div>

            {/* Contact Section */}
            <div id="contact" className="w-full h-screen scroll-snap-start flex justify-center items-center bg-gray-600">
              <section className="text-white flex flex-col justify-center items-center">
                <h2 className="text-5xl font-bold">Get in Touch</h2>
                <p className="mt-4 text-xl max-w-xl text-center">Reach out to us for any inquiries or feedback.</p>
              </section>
            </div>

            {/* Footer */}
            <footer className="bg-black text-white py-4 text-center w-full">
              {children}
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
