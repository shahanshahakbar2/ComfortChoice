import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assests/logo.webp";
import { CiSearch } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCartDropdown = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <>
      <div className='links container'>
        <div className='text-container1'>
          <NavLink to='shop' className='text'>
            SHOP
          </NavLink>
          <NavLink to='our-story' className='text'>
            OUR STORY
          </NavLink>
          <NavLink to='contact' className='text'>
            CONTACT
          </NavLink>
        </div>

        <div className='text-container2'>
          <img src={logo} alt='logo' />
        </div>
        <div className='text-container3'>
          <div className='search-container'>
            <CiSearch />
            <input type='text' name='' placeholder='Search...' />
          </div>
          <div className='login-container '>
            <Link to='login' className='login-icon'>
              <FaUserCircle size={30} />
            </Link>
            <Link to='login' className='login-text'>
              <span>Log In</span>
            </Link>
            <div>
              <CartIcon toggleCartDropdown={toggleCartDropdown} />
            </div>
          </div>
          {isCartOpen && (
            <CartDropdown toggleCartDropdown={toggleCartDropdown} />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
