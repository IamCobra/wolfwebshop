"use client";

import ShopPage from '../app/components/ShopPage';
import { CartItem } from '../app/components/types'; // Make sure to import CartItem type

export default function Shop({ addToCart }: { addToCart: (item: CartItem) => void }) {
  return (
    <div>
      <ShopPage addToCart={addToCart} />
    </div>
  );
}
