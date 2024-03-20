"use client"

import Image from "next/image";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import SlideMenu from "./utility/slide-menu";

export default function Navbar() {

  const [togglemenu, setToggleMenu] = useState(false);

  const handleClick = () => {
    setToggleMenu(!togglemenu);
  }

  return (
    <>
      <nav className="h-[15vh] sticky top-0 bg-mint flex justify-between items-center pl-3 pr-3">
        <Image
          src="/logo-blanco.png"
          width={50}
          height={40}
          alt="AMASS Cia. Ltda."
        />
        <FiMenu onClick={handleClick} className="text-white  active:bg-[#28568c] p-2 text-5xl rounded-full" />
      </nav>
      {togglemenu && <SlideMenu handleClick={handleClick} />}
    </>
  )
}
