"use client"

import Image from "next/image";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import SlideMenu from "./utility/slide-menu";
import Link from "next/link";

export default function Navbar() {

  const [togglemenu, setToggleMenu] = useState(false);

  const handleClick = () => {
    setToggleMenu(!togglemenu);
  }

  return (
    <>
      <nav className="h-[15vh] sticky top-0 bg-mint flex justify-between items-center pl-3 pr-3 shadow-xl z-10 md:pl-20 md:pr-20">
        <Image
          src="/logo-blanco.png"
          width={50}
          height={70}
          alt="AMASS Cia. Ltda."
        />
        <FiMenu onClick={handleClick} className="text-white active:bg-[#28568c] p-2 text-5xl rounded-full md:hidden" />
        <ul className='hidden md:flex text-white text-2xl font-bold gap-10'>
          <li className="hover:underline"><Link href="#nosotros">Nosotros</Link></li>
          <li className="hover:underline"><Link href="#productos">Productos</Link></li>
          <li className="hover:underline"><Link href="#contacto">Contacto</Link></li>
        </ul>
      </nav>
      {togglemenu && <SlideMenu handleClick={handleClick} />}
    </>
  )
}
