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
    image: "/assets/testasset.jpg", // Ensure your image is in public/assets/
  },
  {
    id: 2,
    name: "Chechen T-shirt",
    price: 40,
    image: "/assets/chechen-tshirt.jpg", // Ensure your image is in public/assets/
  },
  {
    id: 3,
    name: "Chechen Sneakers",
    price: 80,
    image: "/assets/chechen-sneakers.jpg", // Ensure your image is in public/assets/
  },
];

export default function ClothingCarousel() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-black to-gray-900">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true
        }}
        modules={[Autoplay]}
        className="w-full h-full"
      >
        {clothingItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col items-center justify-center h-full">
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={300}
                className="object-cover rounded-lg shadow-lg"
              />
              <h2 className="text-3xl font-bold text-white mt-4">{item.name}</h2>
              <p className="text-xl text-gray-400">${item.price}</p>
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
