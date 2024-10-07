import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-black text-white h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-6xl font-extrabold text-center leading-tight">
        UNLOCK YOUR <br /> COMMERCE
      </h1>
      <p className="mt-4 text-lg text-center max-w-xl">
        Sell online on a fully customizable ecommerce platform, adapted to the
        growth of your business.
      </p>
      <div className="mt-8">
        <button className="bg-white text-black px-8 py-3 rounded-md shadow-md hover:bg-gray-300 transition">
          GET STARTED
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
