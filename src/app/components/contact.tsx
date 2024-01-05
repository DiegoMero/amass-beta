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
        <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d997.312131228605!2d-80.6358663!3d-0.9683352!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwNTgnMDUuNCJTIDgwwrAzOCcwOC4yIlc!5e0!3m2!1ses!2sec!4v1704466717877!5m2!1ses!2sec" width="100%" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  )
}