"use client";

import './style/contact.scss';
import { FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import React from 'react';
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400'
})

export default function Contact() {
  const handleClick = (redireccion: string) => {
    window.location.href = redireccion;
  };

  const phoneNumber = '0983376655';

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
          <button type='submit' className={poppins.className}>Enviar</button>
        </form>
        <h3>Conecta con nosotros:</h3>
        <ul>
          <li onClick={() => handleClick('https://www.instagram.com/amass.ecuador')}><FaInstagram /><h4>: /amass.ecuador</h4></li>
          <li onClick={() => handleClick('https://www.facebook.com/amass.ecuador')}><FaFacebook /><h4>: /amass.ecuador</h4></li>
          <li onClick={handleContactButtonClick}><FaPhone /><h4>: +593 98 337 6655</h4></li>
          <li className='direccion'><CiLocationOn /><h4>: Vía Manta Rocafuerte Ruta 1 S/N, Jaramijó</h4></li>
        </ul>
      </div>
      <div className='ubication'>
        <h2>Ubicación</h2>
        <p>Encuentra nuestro local más cercano:</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15956.994839586909!2d-80.6355898!3d-0.968178!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902be7002767e46b%3A0x8d6bee26ac9d3ba!2sAmass%20Cia.%20Ltda.!5e0!3m2!1sen!2sec!4v1706037222643!5m2!1sen!2sec" width="100%" height="500" loading="lazy"></iframe>
      </div>
    </section>
  )
}