import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      {/* Left Side */}
      <section className="flex flex-col items-center justify-center text-center text-gray-300 p-8 bg-gray-900 basis-1/3">
        <h1 className="text-4xl font-bold mb-6 animate-fade-in text-white">
          Strength in Tradition, Power in Style
        </h1>
        <p className="text-lg mb-4 animate-fade-up text-gray-400">
          Inspired by Chechen heritage. Wear your pride, honor your roots. 🏔️
        </p>
        <button className="mt-4 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-md shadow-md transition">
          Explore Our Collection
        </button>
      </section>

      {/* Right Side with Background Image */}
      <section className="relative flex items-center justify-center overflow-hidden basis-2/3 bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/wolfimage.jpeg" // Ensure the correct path to your image
            alt="Wolf Howling in Snow"
            layout="fill"
            objectFit="cover"
            className="animate-image-motion"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/25"></div>
        </div>
      </section>
    </main>
  );
}
