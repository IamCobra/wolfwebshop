"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Chechen T-Shirt",
      price: 40,
      image: "/assets/che-tshirt.jpg",
    },
    {
      id: 2,
      name: "Chechen Hoodie",
      price: 60,
      image: "/assets/testasset.jpg",
    },
    {
      id: 3,
      name: "Chechen Sneakers",
      price: 80,
      image: "/assets/greenche-sneakers.webp", 
      /* har problemer med id 3 og 4 siden de to fremviser samme billed. 
      Evt. noget med formattet .webp og .jpg at gøre */
    },
    {
      id: 4,
      name: "Chechen Cap",
      price: 25,
      image: "/assets/checap.jpg",
    },
  ];

  const typedElement = useRef(null);

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
      showCursor: false, // for at undgåå visuelle glitches med cursor
    });
  
    return () => {
      typed.destroy(); // Rens op for at forhindre memory leaks
    };
  }, []);
  


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
          <h1
            className="text-5xl font-bold mb-6 text-white"
            ref={typedElement}
          ></h1>
          <p className="text-lg mb-8 text-gray-300">
          Inspireret af tjetjensk arv. Bær din stolthed, ære dine rødder. 🏔️
          </p>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-md shadow-md transition">
            Udforsk Vores Kollektion
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Udvalgte Produkter</h2>
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

      {/* Features Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Feature 1 */}
            <div className="flex flex-col items-center animate-fade-in">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-12 h-12 text-gray-700 mb-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10l1.664 9.193a2 2 0 001.988 1.807h12.696a2 2 0 001.988-1.807L21 10M7 10V7a5 5 0 0110 0v3"
                />
              </svg>
              <h3 className="text-xl font-bold">Altid Hurtig Levering</h3>
              <p className="text-gray-600 mt-2">
                Vi garanterer hurtig levering og nem ombytning.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col items-center animate-fade-up">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-12 h-12 text-gray-700 mb-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c-2.28 0-4 1.49-4 3.333 0 1.848 1.72 3.334 4 3.334s4-1.486 4-3.334C16 9.49 14.28 8 12 8zm0 8c-2.577 0-5.365.705-6.743 1.957-.282.254-.257.743.013.986C7.16 19.91 9.374 20 12 20s4.84-.09 6.73-.057c.27-.243.296-.732.014-.986C17.365 16.705 14.577 16 12 16z"
                />
              </svg>
              <h3 className="text-xl font-bold">Sikker Betaling</h3>
              <p className="text-gray-600 mt-2">
                Du kan på shoppen betale med Visa, Mastercard, Dankort og Apple Pay.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col items-center animate-fade-in">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-12 h-12 text-gray-700 mb-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20v-2m0 0a6 6 0 006-6H6a6 6 0 006 6zm0 0v2m4-2h3M8 18H5"
                />
              </svg>
              <h3 className="text-xl font-bold">Effektiv Support</h3>
              <p className="text-gray-600 mt-2">
                Kontakt os på merch@berzloy.dk hvis du har nogle spørgsmål eller problemer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
