"use client";

import backgroundImage from '/public/Portada-WEB-AMASS-Recovered.png';
import { Poppins } from 'next/font/google';
import { Amaranth } from 'next/font/google';

const amaranth = Amaranth ({
  subsets: ['latin'],
  weight: "400"
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: "400"
})


export default function Header() {
  const phoneNumber = '0983376655';

  const handleContactButtonClick = () => {
    const phoneLink = `tel:${phoneNumber}`;
    window.location.href = phoneLink;
  };

  return (
    <section className='header'>
      <div>
        <h1>AMASS Cia. Ltda.</h1>
        <p className={amaranth.className}>Fabricantes directos de espumaflex y Panel EPS tipo sánduche.</p>
      </div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
        }}
        className='header-background'
      >
        <button className={poppins.className} onClick={handleContactButtonClick}>Contáctanos</button>
      </div>
    </section>
  )
}