import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import {useState} from 'react';
import {useEffect} from 'react';

import { Cart } from './';
import { useStateContext } from '../context/StateContext';

import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from '../utils/firebase';
import { useRouter } from "next/router";

function Navbar() {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 80)
    {
      setNavbar(true);
    } else{
      setNavbar(false);
    }
  }

  // window.addEventListener('scroll', changeNavbar)
  useEffect(() => {
    const onScroll = (event) => console.info("scrolling", event);
      
    window.addEventListener('scroll', changeNavbar);
    
    return () => {
      window.removeEventListener('scroll', changeNavbar);
    }
  }, []);

  return (
    <div className={navbar ? 'navbar-container active' : 'navbar-container'}>
    {/* <div className="navbar-container"> */}

      <p className='logo'>
        <img src="/images/ff.png" alt="" />
        <Link href="/">fernfinder.</Link>
      </p>


      <button type="button" className='cart-icon' onClick={() =>
      setShowCart(true)}>
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar