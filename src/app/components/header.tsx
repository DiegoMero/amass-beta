import './style/header.scss';
import backgroundImage from '/public/pic3.jpg';
import { Inter } from 'next/font/google'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Header() {
  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
      }}
      className='header'
    >
      <h1>AMASS Cia. Ltda.</h1>
      <p>
        Ofrecemos soluciones de construcción innovadoras, 
        eficientes y adaptadas a las necesidades específicas de Manabí y sus sectores productivos, 
        contribuyendo así al desarrollo sostenible y a la construcción de la región.
      </p>
      <Link href="#products">
        <button className={inter.className}>Contáctanos</button>
      </Link>
    </section>
  )
}