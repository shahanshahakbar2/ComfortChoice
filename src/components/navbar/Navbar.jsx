import React from "react";
import "./navbar.css";
import logo from "../../assests/logo.webp";
import { CiSearch } from "react-icons/ci";
import { GrUserManager } from "react-icons/gr";
import { IoBagSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Shop from "../../container/shop/Shop";

const Navbar = () => {
  return (
    <>
      <div className='links container'>
        <div className='text-container1'>
          <Link to='shop' className='text'>
            SHOP
          </Link>
          <Link to='our-story' className='text'>
            OUR STORY
          </Link>
          <Link to='contact' className='text'>
            CONTACT
          </Link>
        </div>

        <div className='text-container2'>
          <img src={logo} alt='logo' />
        </div>
        <div className='text-container3'>
          <div className='search-container'>
            <CiSearch />
            <input type='text' name='' placeholder='Search...' />
          </div>
          <div className='login-container'>
            <GrUserManager />
            <p>Log In</p>
            <IoBagSharp />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
