import { RxCross1 } from "react-icons/rx";
import Link from 'next/link';

export default function SlideMenu({ handleClick }: { handleClick: () => void}) {
  return (
    <ul className="fixed top-[15vh] z-10 p-3 h-[85vh] w-screen text-white text-3xl flex flex-col gap-8 bg-mint/90 animate-slide-in-menu">
      <li className=" ml-auto pr-2" onClick={handleClick}><RxCross1 /></li>
      <li onClick={handleClick}><Link href="#nosotros">Nosotros</Link></li>
      <li onClick={handleClick}><Link href="#productos">Productos</Link></li>
      <li onClick={handleClick}><Link href="#contacto">Contacto</Link></li> 
    </ul>
  )
}