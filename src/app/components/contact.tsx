"use client";

import './style/contact.scss';
import { FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import React from 'react';
import { Inter } from 'next/font/google'
import map from '/public/pic6.png';

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  const handleClick = (redireccion: string) => {
    window.location.href = redireccion;
  };

  const phoneNumber = '0992058094';

  const handleContactButtonClick = () => {
    const phoneLink = `tel:${phoneNumber}`;
    window.location.href = phoneLink;
  };

  return (
    <section id='contact'>
      <div className='contact-us-container'>
        <h2>Contacto</h2>
        <p>¿Necesitas más información? Llena este formulario y uno de nuestros asesores se pondra en contacto contigo.</p>
        <form>
          <label>Nombre:</label>
          <input type="text" className='must'></input>
          <label>Correo:</label>
          <input type="text" className='must'></input>
          <label>Mensaje: (Opcional)</label>
          <textarea className='optional'></textarea>
          <button type='submit' className={inter.className}>Enviar</button>
        </form>
        <h3>Conecta con nosotros:</h3>
        <ul>
          <li onClick={() => handleClick('https://www.instagram.com/amass.ecuador')}><FaInstagram /><h4>: /amass.ecuador</h4></li>
          <li onClick={() => handleClick('https://www.facebook.com/amass.ecuador')}><FaFacebook /><h4>: /amass.ecuador</h4></li>
          <li onClick={handleContactButtonClick}><FaPhone /><h4>: +593 99 205 8094</h4></li>
          <li className='direccion'><CiLocationOn /><h4>: Vía Manta Rocafuerte Ruta 1 S/N, Jaramijó</h4></li>
        </ul>
      </div>
      <div className='ubication'>
        <h2>Ubicación</h2>
        <p>Encuentra nuestro local más cercano:</p>
        <div className='map-pic'
          style={{
            backgroundImage: `url(${map.src})`,
          }}
        />
      </div>
    </section>
  )
}