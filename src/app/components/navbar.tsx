"use client";

import './style/navbar.scss';
import { SlMenu } from "react-icons/sl";
import Link from 'next/link';
import React, { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import logo from '/public/amass-logo.png';
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ['latin'],
  weight: "400"
})

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    toggleScrollLock();
  };

  const toggleScrollLock = () => {
    const body = document.body;
    
    if (showMenu) {
      body.classList.remove('scroll-lock');
    } else {
      body.classList.add('scroll-lock');
    }
  };

  return (
    <nav className={poppins.className}>
      <div
        style={{
          backgroundImage: `url(${logo.src})`,
        }}
        className='logo'
      />
      <ul className='desktop-menu'>
        <li>
          <Link href="#about">
            <h3>Nosotros</h3>
          </Link>
        </li>
        <li>
          <Link href="#products">
            <h3>Productos</h3>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <h3>Contacto</h3>
          </Link>
        </li>
      </ul>
      <SlMenu onClick={toggleMenu} />
      {showMenu && (
        <ul className='mobile-menu'>
          <li className='exit'><RxCross1 onClick={toggleMenu} /></li>
          <li>
            <Link href="#about">
              <h3 onClick={toggleMenu}>Nosotros</h3>
            </Link>
          </li>
          <li>
            <Link href="#products">
              <h3 onClick={toggleMenu}>Productos</h3>
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <h3 onClick={toggleMenu}>Contacto</h3>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  )
}
