'use client'

import { FaFacebook, FaInstagram, FaWhatsapp, FaMapPin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Social() {
  const handleClick = (redireccion: string) => {
    window.location.href = redireccion;
  };

  const phoneNumber = '0983376655';

  const handleContactButtonClick = () => {
    const phoneLink = `tel:${phoneNumber}`;
    window.location.href = phoneLink;
  };

  return (
    <ul className="text-xl flex flex-col gap-3">
      <li onClick={() => handleClick('https://www.instagram.com/amass.ecuador')} className="flex cursor-pointer items-center"><FaInstagram />: /amass.ecuador</li>
      <li onClick={() => handleClick('https://www.facebook.com/amass.ecuador')} className="flex cursor-pointer items-center"><FaFacebook />: /amass.ecuador</li>
      <li onClick={handleContactButtonClick} className="flex items-center cursor-pointer"><FaWhatsapp />: +593 98 337 6655</li>
      <li className="flex"><FaLocationDot className="w-8 mt-1 md:w-auto "/>: Vía Manta Rocafuerte Ruta 1 S/N, Jaramijó</li>
    </ul>
  )
}