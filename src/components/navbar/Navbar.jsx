import React from "react";
import "./navbar.css";
import logo from "../../assests/logo.webp";
import { CiSearch } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
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
          <Link to='login' className='login-container '>
            <FaUserCircle size={30} />
            <p>Log In</p>
            <LiaShoppingBagSolid size={32} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
