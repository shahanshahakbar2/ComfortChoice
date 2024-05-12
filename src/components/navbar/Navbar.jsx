import React from "react";
import "./navbar.css";
import logo from "../../assests/logo.webp";
import { CiSearch } from "react-icons/ci";
import { GrUserManager } from "react-icons/gr";
import { IoBagSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

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
