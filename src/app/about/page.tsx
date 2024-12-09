"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    (<main className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
      <section className="container mx-auto py-24 px-6 lg:px-12">
        <h1 className="text-5xl font-bold text-center mb-10">
          Om Os
        </h1>

        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-12 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-4">Vores Vision</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Hos Nokh stræber vi efter at forene kultur og mode. Vores mål er at skabe tøj, der ikke kun er stilfuldt, men også fortæller en historie. 
                Hvert stykke tøj, vi designer, er inspireret af tjetjensk arv og moderne trends. Vores mål er at bringe unikke designs ud til alle, der ønsker at bære noget med betydning.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Vi ønsker at skabe en global bevægelse, hvor mennesker fra alle baggrunde kan bære et stykke kultur med stolthed. Tøj er mere end bare stof – 
                det er identitet, styrke og historie.
              </p>
            </div>

            <div className="relative">
              <Image
                src="/assets/our-vision.jpg"
                alt="Om os billede"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <section className="py-24">
          <h2 className="text-4xl font-bold text-center mb-12">Vores Værdier</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold text-center mb-4">Kultur</h3>
              <p className="text-gray-300 text-center">
                Vores tøj bærer essensen af tjetjensk stolthed. Hvert design er et symbol på historie, styrke og identitet.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold text-center mb-4">Kvalitet</h3>
              <p className="text-gray-300 text-center">
                Vi garanterer kvalitet i hvert enkelt produkt. Fra materiale til design, intet bliver overladt til tilfældighederne.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold text-center mb-4">Fællesskab</h3>
              <p className="text-gray-300 text-center">
                Vores brand handler om mere end tøj. Vi bygger et fællesskab, hvor alle er velkomne til at bære deres identitet med stolthed.
              </p>
            </div>

          </div>
        </section>

        {/* Team Section */}
        <section className="py-24">
          <h2 className="text-4xl font-bold text-center mb-12">Mød Holdet Bag</h2>
          <div className="flex justify-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform">
              <Image
                src="/assets/team/ikhvan.jpg"
                alt="Ikhvan"
                width={200}
                height={200}
                className="w-40 h-40 rounded-full mx-auto mb-6"
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
              <h3 className="text-2xl font-bold text-center mb-2">Ikhvan</h3>
              <p className="text-center text-gray-400">Stifter & Designer</p>
              <p className="text-gray-300 text-center mt-4">
                "Mit mål er at designe tøj, der skiller sig ud, med en dybere mening bag hvert stykke. Jeg ønsker, at alle kan bære tjetjensk stolthed og gøre det til deres egen historie."
              </p>
            </div>
          </div>
        </section>

        {/* Call To Action Section */}
        <section className="bg-blue-600 py-16 rounded-lg shadow-lg">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Bliv en del af vores rejse
            </h2>
            <p className="text-white text-lg mb-8">
              Vi inviterer dig til at være en del af noget større. Bliv en del af vores fællesskab og bær kulturen med stolthed.
            </p>
            <a
              href="/shop"
              className="px-8 py-4 bg-gray-900 text-white rounded-lg shadow-md hover:bg-gray-700 transition"
            >
              Shop Kollektionen
            </a>
          </div>
        </section>
      </section>
    </main>)
  );
}
