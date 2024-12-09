"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/legacy/image";
import Typed from "typed.js";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Truck, CreditCard, Headphones } from "lucide-react";
import Newsletter from "./components/Newsletter";

export default function Home() {
  const products = [
    { id: 1, name: "Chechen T-Shirt", price: 225, image: "/assets/che-tshirt.jpg" },
    { id: 2, name: "Chechen Hoodie", price: 375, image: "/assets/testasset.jpg" },
    { id: 3, name: "Chechen Sneakers", price: 400, image: "/assets/greenche-sneakers.webp" },
    { id: 4, name: "Chechen Cap", price: 75, image: "/assets/checap.jpg" },
  ];

  const typedElement = useRef<HTMLHeadingElement | null>(null);
  const [showQuote, setShowQuote] = useState(true);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [fade, setFade] = useState(true);
  const carouselRef = useRef<HTMLDivElement | null>(null);

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
      setFade(false);
      setTimeout(() => {
        const nextQuote = (currentQuote + 1) % quotes.length;
        setCurrentQuote(nextQuote);
        setFade(true);
      }, 800);
    }, 7000);

    return () => clearInterval(interval);
  }, [currentQuote]);

  const generateSlug = (name: string): string =>
    name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

  const scrollToCarousel = () => {
    const element = carouselRef.current;
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth", // Enables smooth scrolling
      });
    }
  };

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-gray-900 text-gray-300">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/assets/wolfimage.jpeg"
            alt="Wolf Howling in Snow"
            layout="fill"
            className="animate-image-motion object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl font-bold mb-6 text-white" ref={typedElement}></h1>
          <p className="text-lg mb-8 text-gray-300">
            Inspireret af tjetjensk arv. Bær din stolthed, ære dine rødder.
          </p>
          <button
            onClick={scrollToCarousel}
            className="px-6 py-4 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-md shadow-md transition"
          >
            Udforsk Vores Kollektion
          </button>
        </div>
      </section>

      {/* Floating Quote */}
      {showQuote && (
        <div
          className={`fixed bottom-4 left-4 bg-black/70 text-white p-4 pr-6 rounded-lg max-w-xs shadow-md z-50 transition-all duration-1000 ease-in-out ${showQuote ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <button
            className="absolute top-1 right-2 text-white text-sm hover:text-gray-400 transition "
            onClick={() => setShowQuote(false)}
          >
            ✕
          </button>
          <p
            className={`text-sm italic transition-all duration-1000 ease-in-out ${fade ? "opacity-100" : "opacity-0"
              }`}
          >
            {quotes[currentQuote].text}
          </p>
          <p
            className={`text-xs text-right mt-2 transition-all duration-1000 ease-in-out ${fade ? "opacity-100" : "opacity-0"
              }`}
          >
            {quotes[currentQuote].author}
          </p>
        </div>
      )}

      {/* Featured Products */}
      <section ref={carouselRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Udvalgte Produkter</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
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
                  <p className="text-gray-700">{product.price} kr.</p>
                  <Link
                    href={`/products/${generateSlug(product.name)}`}
                    className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-md shadow-md transition text-center"
                  >
                    Se vare
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination mt-4"></div>
        </div>
      </section>

      {/* Nyeste Kollektion Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Nyeste Kollektion</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
            {products.slice(0, 2).map((product, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <div className="relative w-full h-96">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    className="hover:opacity-80 transition-opacity duration-300 object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-lg font-bold text-gray-700 mb-4">{product.price} kr.</p>
                  <button className="bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition">
                    Hurtigvisning
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Truck className="w-12 h-12 text-gray-700 mb-4" />
              <h3 className="text-xl font-bold">Hurtig Levering</h3>
              <p className="text-gray-600">Levering på 2-3 dage.</p>
            </div>
            <div className="flex flex-col items-center">
              <CreditCard className="w-12 h-12 text-gray-700 mb-4" />
              <h3 className="text-xl font-bold">Sikker Betaling</h3>
              <p className="text-gray-600">Betal med Visa, Mastercard eller Apple Pay.</p>
            </div>
            <div className="flex flex-col items-center">
              <Headphones className="w-12 h-12 text-gray-700 mb-4" />
              <h3 className="text-xl font-bold">Effektiv Support</h3>
              <p className="text-gray-600">Kontakt os på merch@nokh.dk.</p>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  );
}
