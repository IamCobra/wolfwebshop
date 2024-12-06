"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css"; // Import Swiper styles

// Define your clothing items
type ClothingItem = {
  id: number;
  name: string;
  price: number;
  image: string;
};

// Clothing items array
const clothingItems: ClothingItem[] = [
  {
    id: 1,
    name: "Chechen Hoodie",
    price: 60,
    image: "/assets/testasset.jpg",
  },
  {
    id: 2,
    name: "Chechen T-shirt",
    price: 40,
    image: "/assets/che-tshirt.jpg",
  },
  {
    id: 3,
    name: "Chechen Sneakers",
    price: 80,
    image: "/assets/greenche-sneakers.webp",
  },
];

export default function ClothingCarousel() {
  return (
    <div className="w-full flex justify-center items-center bg-black py-12">
      <Swiper
        spaceBetween={20} // Reduced spacing between slides for better alignment
        slidesPerView={1} // Adjust based on layout preference
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
        className="w-full max-w-5xl" // Restrict width for better alignment
      >
        {clothingItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col items-center justify-center">
              {/* Product Image */}
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={300}
                className="object-cover rounded-lg shadow-lg"
              />
              {/* Product Details */}
              <h2 className="text-2xl font-bold text-white mt-4">{item.name}</h2>
              <p className="text-lg text-gray-400">${item.price}</p>
              {/* Add to Cart Button */}
              <button className="mt-4 bg-purple-600 hover:bg-blue-500 text-white px-6 py-2 rounded-md shadow-md transition">
                Add to Cart
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
