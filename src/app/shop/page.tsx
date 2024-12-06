export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      {/* Add padding-top to push the content below the navbar */}
      <div className="pt-[96px] py-12"> {/* 96px matches navbar height */}
        <h1 className="text-4xl font-bold text-center mb-6">Shop Our Collection</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Card for Chechen Hoodie */}
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <img src="/assets/testasset.jpg" alt="Chechen Hoodie" className="rounded-lg mb-4" />
            <h2 className="text-2xl font-bold">Chechen Hoodie</h2>
            <p className="text-lg">$60</p>
          </div>
          {/* Card for Chechen T-shirt */}
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <img src="/assets/che-tshirt.jpg" alt="Chechen T-shirt" className="rounded-lg mb-4" />
            <h2 className="text-2xl font-bold">Chechen T-shirt</h2>
            <p className="text-lg">$40</p>
          </div>
          {/* Card for Chechen Sneakers */}
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <img src="/assets/greenche-sneakers.webp" alt="Chechen Sneakers" className="rounded-lg mb-4" />
            <h2 className="text-2xl font-bold">Chechen Sneakers</h2>
            <p className="text-lg">$80</p>
          </div>
        </div>
      </div>
    </div>
  );
}
