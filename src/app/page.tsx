"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Typed from "typed.js";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const products = [
    { id: 1, name: "Chechen T-Shirt", price: 40, image: "/assets/che-tshirt.jpg" },
    { id: 2, name: "Chechen Hoodie", price: 60, image: "/assets/testasset.jpg" },
    { id: 3, name: "Chechen Sneakers", price: 80, image: "/assets/greenche-sneakers.webp" },
    { id: 4, name: "Chechen Cap", price: 25, image: "/assets/checap.jpg" },
  ];

  const typedElement = useRef(null);
  const [showQuote, setShowQuote] = useState(true);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [fade, setFade] = useState(true); // Styrer fade-effekten til mig selv i fremtiden

  const quotes = [
    { text: "Frihed er mere værd end livet selv.", author: "- Baysangur" },
    { text: "Jeg vil hellere dø stående end leve på knæ.", author: "- Baysangur" },
    { text: "Stolthed og ære er vores arv.", author: "- Tjetjensk ordsprog" },
  ];

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        "Dit design. Din historie. Din styrke.",
        "Forener tradition og modernitet.",
        "Vis verden, hvor du kommer fra.",
      ],
      typeSpeed: 55,
      backSpeed: 35,
      backDelay: 2000,
      startDelay: 500,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        const nextQuote = (currentQuote + 1) % quotes.length;
        setCurrentQuote(nextQuote);
        setFade(true); // Start fade-in
      }, 800); // Vent 800 ms, mens det gamle citat fader ud
    }, 7000); // Skift citat hvert 7. sekund

    return () => clearInterval(interval);
  }, [currentQuote]);

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-gray-900 text-gray-300">
        <div className="absolute inset-0">
          <Image
            src="/assets/wolfimage.jpeg"
            alt="Wolf Howling in Snow"
            layout="fill"
            objectFit="cover"
            className="animate-image-motion"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl font-bold mb-6 text-white" ref={typedElement}></h1>
          <p className="text-lg mb-8 text-gray-300">
            Inspireret af tjetjensk arv. Bær din stolthed, ære dine rødder. 🏔️
          </p>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-md shadow-md transition">
            Udforsk Vores Kollektion
          </button>
        </div>
      </section>

      {/* Floating Quote */}
      {showQuote && (
        <div
          className={`fixed bottom-4 left-4 bg-black/70 text-white p-4 rounded-lg max-w-xs shadow-md z-50 transition-all duration-1000 ease-in-out ${
            showQuote ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <button
            className="absolute top-1 right-1 text-white text-sm hover:text-gray-400 transition"
            onClick={() => setShowQuote(false)}
          >
            ✕
          </button>
          <p
            className={`text-sm italic transition-all duration-1000 ease-in-out ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {quotes[currentQuote].text}
          </p>
          <p
            className={`text-xs text-right mt-2 transition-all duration-1000 ease-in-out ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {quotes[currentQuote].author}
          </p>
        </div>
      )}

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">
            Udvalgte Produkter
          </h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="flex flex-col items-center justify-center p-4 bg-gray-100 shadow-lg hover:shadow-2xl rounded-lg transition-transform duration-300 hover:scale-105">
                  <div className="relative h-72 w-full flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold mt-4">{product.name}</h3>
                  <p className="text-gray-700">${product.price}</p>
                  <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-md shadow-md transition">
                    View Product
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </main>
  );
}
