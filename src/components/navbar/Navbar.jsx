import React from "react";
import "./navbar.css";
import logo from "../../assests/logo.webp";
import image1 from "../../assests/image1.webp";
import { CiSearch } from "react-icons/ci";
import { GrUserManager } from "react-icons/gr";
import { IoBagSharp } from "react-icons/io5";
import Shop from "../../container/shop/Shop";

const Navbar = () => {
  return (
    <>
      <div className='links container'>
        <div className='text-container1'>
          <p>Shop</p>
          <p>Our Story</p>
          <p>Contact</p>
        </div>

        <div className='text-container2'>
          <a href='#contact'>
            <img src={logo} alt='logo' />
          </a>
        </div>
        <div className='text-container3'>
          <div className='search-container'>
            <CiSearch />
            <input type='text' name='' placeholder='Search...' />
          </div>
          <p>
            <GrUserManager />
            Login
          </p>
          <p>
            <IoBagSharp />
          </p>
        </div>
      </div>
      <div className='image'>
        <img src={image1} alt='pic' />
      </div>
    </>
  );
};

export default Navbar;
