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
      <h1>AMASSTecho</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer porttitor est sit amet pharetra blandit.
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      </p>
      <Link href="#products">
        <button className={inter.className}>Conoce más</button>
      </Link>
    </section>
  )
}