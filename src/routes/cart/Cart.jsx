import React, { useState } from "react";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";

const Cart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return <>{isCartOpen ? <CartDropdown /> : ""}</>;
};

export default Cart;
