"use client";

type CartItem = {
  id: number;
  name: string;
  price: number;
};

type ShopPageProps = {
  addToCart: (item: CartItem) => void; // Explicit type for addToCart
};

const products: CartItem[] = [
  { id: 1, name: 'Chechen Hoodie', price: 60 },
  { id: 2, name: 'Chechen T-shirt', price: 40 },
  { id: 3, name: 'Chechen Sneakers', price: 80 }
];

export default function ShopPage({ addToCart }: ShopPageProps) {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-white">Shop Our Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-lg mb-4">${product.price}</p>
            <button
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
              onClick={() => addToCart(product)} // Correctly typed addToCart
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
