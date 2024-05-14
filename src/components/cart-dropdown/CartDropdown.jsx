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
      <div className='cart-dropdown-items'>
        <div>
          {cartItem.length === 0 ? (
            <div>
              <h3
                style={{
                  marginTop: 0,
                  paddingTop: "5rem",
                }}
              >
                Cart is empty
              </h3>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;
