import './style/services.scss';
import Image from 'next/image';
import React from 'react';
import { Inter } from 'next/font/google'
import productImage from '/public/pic4.png';

const inter = Inter({ subsets: ['latin'] })

export default function Services() {

  const repeticiones = Array.from({ length: 3 }, (_, index) => index + 1);


  return (
    <section className='services'>
      <h2>Servicios</h2>
      <div className='all-services'>
        {repeticiones.map((numero) => (
          <div key={numero} className='service-container'>
            <div
              className='product-image'
              style={{
                backgroundImage: `url(${productImage.src})`,
              }}
            />
            <div className='service-information'>
              <h3>Lorem Impsun</h3>
              <ul>
                <li>Quisque nec ex at nisl rhoncus tempus.</li>
                <li>Mauris auctor eleifend neque, et efficitur tellus dictum et.</li>
                <li>Nullam ac nulla iaculis, fringilla metus ut, gravida ligula.</li>
                <li>Donec efficitur tortor ex, sed commodo elit gravida ac.</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      <button className={inter.className}>Ver más</button>
    </section>
  )
}