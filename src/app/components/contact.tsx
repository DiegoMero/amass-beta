import './style/contact.scss';
import { FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import React from 'react';
import { Inter } from 'next/font/google'
import map from '/public/pic6.png';

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  return (
    <section className='contact'>
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
          <li><FaInstagram />: /example</li>
          <li><FaFacebook />: /example</li>
          <li><FaPhone />: +593 99 999 9999</li>
          <li><LuMapPin />: Calle 1 Ave 2</li>
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