import About from './about';
import './style/navbar.scss';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <h1>LOGO</h1>
      <ul>
        <li>
          <Link href="#about">
            <h3>Sobre Nosotros</h3>
          </Link>
        </li>
        <li>
          <Link href="#services">
            <h3>Servicios</h3>
          </Link>
        </li>
        <li>
          <Link href="#news">
            <h3>Noticias</h3>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <h3>Contacto</h3>
          </Link>
        </li> 
      </ul>
    </nav>
  )
}
