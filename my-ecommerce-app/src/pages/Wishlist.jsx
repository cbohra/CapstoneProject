import { View, Text } from "react-native";
import React from "react";

const Wishlist = () => {
    const wishlistItems=[
        {id,name,price};

    ];
  return (
    <div>
   <h1>Wishlist for you </h1>
   <u1>
    {wishlistItems.map(item=>(
        <li key={item.id}>
        {item.name} - ${item.price}
        <button>Move to Cart</button>
        </li>

    ))}
   </u1>
   </div>

  );
};

export default Wishlist;
