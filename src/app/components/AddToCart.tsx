import React from 'react';

// Define type for children if this is a component expecting children
type AddToCartProps = {
  children: React.ReactNode;
  item: {
    id: number;
    name: string;
    price: number;
  };
};

const AddToCart: React.FC<AddToCartProps> = ({ children, item }) => {
  return (
    <div>
      {/* Use the children prop */}
      {children}
      {/* Display item information */}
      <p>{item.name} - ${item.price}</p>
    </div>
  );
};

export default AddToCart;
