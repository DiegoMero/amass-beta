"use client";

import './style/header.scss';
import backgroundImage from '/public/pic3.jpg';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Header() {
  const phoneNumber = '0992058094';

  const handleContactButtonClick = () => {
    const phoneLink = `tel:${phoneNumber}`;
    window.location.href = phoneLink;
  };

  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
      }}
      className='header'
    >
      <h1>AMASS Cia. Ltda.</h1>
      <p>
        Ofrecemos soluciones de construcción innovadoras, 
        eficientes y adaptadas a las necesidades específicas de Manabí y sus sectores productivos, 
        contribuyendo así al desarrollo sostenible y a la construcción de la región.
      </p>
      <button className={inter.className} onClick={handleContactButtonClick}>Contáctanos</button>
    </section>
  )
}