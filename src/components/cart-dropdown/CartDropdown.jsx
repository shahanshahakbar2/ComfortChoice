import React, { useState } from "react";
import "./cartDropdown.css";
import { AiOutlineRight } from "react-icons/ai";

const CartDropdown = ({ toggleCartDropdown }) => {
  const [cartItem, setCartItem] = useState([]);
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-dropdown-text'>
        <span onClick={toggleCartDropdown}>
          <AiOutlineRight size={30} />
        </span>
        <h2>Cart</h2>
      </div>
      {cartItem.length === 0 ? (
        <h3>Cart is empty</h3>
      ) : (
        <div className='cart-dropdown-items'></div>
      )}
    </div>
  );
};

export default CartDropdown;
