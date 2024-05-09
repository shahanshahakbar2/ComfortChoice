import React from 'react';
import './navbar.css';
import logo from '../../assests/logo.webp';
import image1 from '../../assests/image1.webp';
import { CiSearch } from "react-icons/ci";
import { GrUserManager } from "react-icons/gr";
import { IoBagSharp } from "react-icons/io5";
import Shop from '../../container/shop/Shop'


const Navbar = () => {
    return (
        <>
            <div className='links'>
                <li><a href={Shop}>Shop</a></li>
                <li><a href='#ourstory'>Our Story</a></li>
                <li><a href='#contact'>Contact</a></li>
                <li><a href='#contact'><img src={logo} alt='logo' /></a></li>
                <li><a href='#contact'><CiSearch />search</a></li>
                <li><a href='#contact'><GrUserManager />Login</a></li>
                <li><a href='#contact'><IoBagSharp /></a></li>
            </div>
            <div className='image'>
<img src={image1} alt='pic' />
            </div>

        </>
    )
}

export default Navbar