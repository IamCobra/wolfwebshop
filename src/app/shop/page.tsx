// pages/shop.tsx

import ClothingCarousel from "../components/ClothingCarousel";


export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="py-12 text-center">
        <h1 className="text-5xl font-bold">Shop Our Collection</h1>
        <p className="mt-4 text-xl max-w-2xl mx-auto">
          Browse through our exclusive range of Chechen-inspired clothing.
        </p>
      </div>

      {/* Clothing Carousel */}
      <div className="py-16">
        <ClothingCarousel />
      </div>

      {/* Footer Section */}
      <footer className="mt-12 text-center bg-black text-gray-400 py-4">
        <p>&copy; {new Date().getFullYear()} Berzloy Webshop. All rights reserved.</p>
      </footer>
    </div>
  );
}
