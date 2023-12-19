"use client";

import './style/navbar.scss';
import { SlMenu } from "react-icons/sl";
import Link from 'next/link';
import React, { useState } from 'react';
import { RxCross1 } from "react-icons/rx";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    toggleScrollLock();
  };

  const toggleScrollLock = () => {
    // Obtén el elemento del cuerpo
    const body = document.body;
    
    // Verifica si el mensaje está visible
    if (showMenu) {
      // Desbloquea el scroll al quitar la clase
      body.classList.remove('scroll-lock');
    } else {
      // Bloquea el scroll al agregar la clase
      body.classList.add('scroll-lock');
    }
  };

  return (
    <nav>
      <h1>LOGO</h1>
      <ul className='desktop-menu'>
        <li>
          <Link href="#about">
            <h3>Nosotros</h3>
          </Link>
        </li>
        <li>
          <Link href="#services">
            <h3>Servicios</h3>
          </Link>
        </li>
        <li>
          <Link href="#news">
            <h3>Noticias</h3>
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
          <li className='exit'><RxCross1 onClick={toggleMenu}/></li>
          <li>
            <Link href="#about">
              <h3 onClick={toggleMenu}>Nosotros</h3>
            </Link>
          </li>
          <li>
            <Link href="#services">
              <h3 onClick={toggleMenu}>Servicios</h3>
            </Link>
          </li>
          <li>
            <Link href="#news">
              <h3 onClick={toggleMenu}>Noticias</h3>
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
