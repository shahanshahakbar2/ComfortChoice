import React, { useState } from "react";
import "./cartIcon.css";
import { LiaShoppingBagSolid } from "react-icons/lia";

const CartIcon = () => {
  const [cartCount, setCartCount] = useState(6);
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <div className='cart-icon-container'>
      <LiaShoppingBagSolid size={40} />
      <span>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
